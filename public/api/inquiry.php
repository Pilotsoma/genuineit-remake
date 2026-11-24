<?php
/**
 * GenuineIT inquiry form handler (PHP 8.1+).
 *
 * Receives JSON from the website's inquiry forms, validates it server-side, applies spam
 * protection and rate limiting, and delivers it by email. Configuration comes ONLY from
 * server environment variables (see .env.example) — never hard-code credentials here.
 *
 * Responses (JSON):
 *   200 {"ok":true}                         delivered (or silently dropped spam)
 *   405 / 415 / 413 / 403                   bad method / content type / size / origin
 *   422 {"ok":false,"error":"validation","fields":{...}}
 *   429 {"ok":false,"error":"rate_limited"}
 *   503 {"ok":false,"error":"not_configured"}  mail transport not configured
 *   502 {"ok":false,"error":"delivery_failed"}
 *
 * Privacy: message contents are never written to logs or disk. Rate limiting stores only a
 * salted hash of the client IP and timestamps.
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

function env(string $key, string $default = ''): string
{
    $v = getenv($key);
    if ($v === false || $v === '') {
        $v = $_SERVER[$key] ?? $_ENV[$key] ?? $default;
    }
    return is_string($v) ? trim($v) : $default;
}

function respond(int $status, array $body): never
{
    http_response_code($status);
    echo json_encode($body, JSON_UNESCAPED_SLASHES);
    exit;
}

// ---------------------------------------------------------------- request checks
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'method_not_allowed']);
}

$ctype = strtolower($_SERVER['CONTENT_TYPE'] ?? '');
if (!str_starts_with($ctype, 'application/json')) {
    respond(415, ['ok' => false, 'error' => 'unsupported_media_type']);
}

// Same-origin protection: browsers always send Origin on cross-origin POSTs.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $allowed = array_filter(array_map('trim', explode(',', env('ALLOWED_ORIGINS'))));
    $host = $_SERVER['HTTP_HOST'] ?? '';
    $allowed[] = 'https://' . $host;
    $allowed[] = 'http://' . $host; // local testing only; production should be HTTPS-only
    if (!in_array(rtrim($origin, '/'), $allowed, true)) {
        respond(403, ['ok' => false, 'error' => 'forbidden_origin']);
    }
}

$raw = file_get_contents('php://input', false, null, 0, 16385);
if ($raw === false || strlen($raw) > 16384) {
    respond(413, ['ok' => false, 'error' => 'payload_too_large']);
}
$data = json_decode($raw, true);
if (!is_array($data)) {
    respond(422, ['ok' => false, 'error' => 'validation', 'fields' => ['form' => 'Invalid submission.']]);
}

// ---------------------------------------------------------------- spam protection
// Honeypot: real visitors never see this field. Accept silently so bots learn nothing.
if (!empty($data['website'])) {
    respond(200, ['ok' => true]);
}
// Minimum fill time (ms): forms submitted faster than a person could type are rejected.
$elapsed = (int)($data['elapsed'] ?? 0);
if ($elapsed < 3000) {
    respond(422, ['ok' => false, 'error' => 'validation', 'fields' => ['form' => 'Please take a moment to complete the form and try again.']]);
}

// ---------------------------------------------------------------- rate limiting
$limitDir = env('RATE_LIMIT_DIR', sys_get_temp_dir() . '/genuineit-ratelimit');
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$salt = env('RATE_LIMIT_SALT', 'genuineit');
$key = hash('sha256', $salt . '|' . $ip);
$window = 600;   // seconds
$maxHits = 5;    // submissions per window per client
if (!is_dir($limitDir)) {
    @mkdir($limitDir, 0700, true);
}
$file = $limitDir . '/' . $key . '.json';
$now = time();
$hits = [];
$fh = @fopen($file, 'c+');
if ($fh !== false) {
    flock($fh, LOCK_EX);
    $existing = stream_get_contents($fh);
    $hits = array_values(array_filter((array)json_decode($existing ?: '[]', true), fn($t) => is_int($t) && $t > $now - $window));
    if (count($hits) >= $maxHits) {
        flock($fh, LOCK_UN);
        fclose($fh);
        header('Retry-After: ' . $window);
        respond(429, ['ok' => false, 'error' => 'rate_limited']);
    }
    $hits[] = $now;
    ftruncate($fh, 0);
    rewind($fh);
    fwrite($fh, json_encode($hits));
    flock($fh, LOCK_UN);
    fclose($fh);
}

// ---------------------------------------------------------------- validation
function clean_line(mixed $v, int $max): string
{
    $s = is_string($v) ? $v : '';
    $s = preg_replace('/[\r\n\t\x00-\x1F\x7F]+/u', ' ', $s) ?? '';
    $s = trim($s);
    return mb_substr($s, 0, $max);
}
function clean_text(mixed $v, int $max): string
{
    $s = is_string($v) ? $v : '';
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]+/u', '', $s) ?? '';
    return mb_substr(trim($s), 0, $max);
}

$types = ['business', 'staffing', 'partnership', 'general'];
$type = in_array($data['type'] ?? '', $types, true) ? $data['type'] : 'general';
$in = [
    'name'       => clean_line($data['name'] ?? '', 100),
    'email'      => clean_line($data['email'] ?? '', 254),
    'company'    => clean_line($data['company'] ?? '', 150),
    'phone'      => clean_line($data['phone'] ?? '', 25),
    'area'       => clean_line($data['area'] ?? '', 80),
    'engagement' => clean_line($data['engagement'] ?? '', 40),
    'roles'      => clean_line($data['roles'] ?? '', 300),
    'subject'    => clean_line($data['subject'] ?? '', 150),
    'message'    => clean_text($data['message'] ?? '', 4000),
];
$errors = [];
if (mb_strlen($in['name']) < 2) $errors['name'] = 'Please enter your full name.';
if (!filter_var($in['email'], FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Please enter a valid email address.';
if (in_array($type, ['business', 'staffing'], true) && $in['company'] === '') $errors['company'] = 'Please enter your company name.';
if ($in['phone'] !== '' && !preg_match('/^[+()\d\s.-]{7,25}$/', $in['phone'])) $errors['phone'] = 'Please enter a valid phone number.';
if (mb_strlen($in['message']) < 20) $errors['message'] = 'Please tell us a little more (at least 20 characters).';
if (($data['consent'] ?? false) !== true) $errors['consent'] = 'Please confirm so we can respond to your inquiry.';
// crude link-spam guard
if (preg_match_all('#https?://#i', $in['message']) > 3) $errors['message'] = 'Please limit the number of links in your message.';
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'validation', 'fields' => $errors]);
}

// ---------------------------------------------------------------- delivery
$transport = strtolower(env('MAIL_TRANSPORT'));
$from = env('MAIL_FROM');
$to = env('MAIL_TO_GENERAL', 'info@genuineitllc.com');
if ($transport === '' || $from === '' || $to === '') {
    respond(503, ['ok' => false, 'error' => 'not_configured']);
}

$labels = ['business' => 'Business inquiry', 'staffing' => 'Staffing request', 'partnership' => 'Partnership inquiry', 'general' => 'General inquiry'];
$subject = '[Website] ' . $labels[$type] . ': ' . ($in['subject'] !== '' ? $in['subject'] : ($in['company'] !== '' ? $in['company'] : $in['name']));
$lines = [
    'Type: ' . $labels[$type],
    'Name: ' . $in['name'],
    'Email: ' . $in['email'],
    'Company: ' . ($in['company'] ?: '—'),
    'Phone: ' . ($in['phone'] ?: '—'),
];
if ($in['area'] !== '') $lines[] = 'Area of interest: ' . $in['area'];
if ($in['engagement'] !== '') $lines[] = 'Engagement type: ' . $in['engagement'];
if ($in['roles'] !== '') $lines[] = 'Roles/skills: ' . $in['roles'];
$lines[] = '';
$lines[] = $in['message'];
$lines[] = '';
$lines[] = '— Sent from the GenuineIT website inquiry form. The sender agreed that GenuineIT may use this information to respond.';
$body = implode("\n", $lines);

$sent = false;
if ($transport === 'resend') {
    $apiKey = env('RESEND_API_KEY');
    if ($apiKey === '' || !function_exists('curl_init')) {
        respond(503, ['ok' => false, 'error' => 'not_configured']);
    }
    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 15,
        CURLOPT_HTTPHEADER => ['Authorization: Bearer ' . $apiKey, 'Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode([
            'from' => $from,
            'to' => [$to],
            'reply_to' => $in['email'],
            'subject' => $subject,
            'text' => $body,
        ]),
    ]);
    curl_exec($ch);
    $code = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
    curl_close($ch);
    $sent = $code >= 200 && $code < 300;
} elseif ($transport === 'sendmail') {
    $headers = [
        'From: ' . $from,
        'Reply-To: ' . $in['email'],
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'X-Mailer: GenuineIT-Website',
    ];
    $sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));
} else {
    respond(503, ['ok' => false, 'error' => 'not_configured']);
}

if (!$sent) {
    error_log('genuineit inquiry: delivery failed via ' . $transport); // no personal data logged
    respond(502, ['ok' => false, 'error' => 'delivery_failed']);
}
respond(200, ['ok' => true]);
