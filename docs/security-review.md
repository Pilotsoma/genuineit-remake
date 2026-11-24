# Security review

| Area | Implementation | Status |
|---|---|---|
| Attack surface | Static HTML/JS; only server code is `api/inquiry.php`. `.htaccess` denies every other path under `/api/` | ✅ |
| Input validation | Client: zod schema (`src/lib/inquirySchema.ts`). Server: PHP re-validates length, email, phone, required fields, strips control chars/CR/LF from header fields (prevents mail header injection) | ✅ (PHP not executed locally — test on staging) |
| Spam | Hidden honeypot field (silently accepted), minimum fill time 3s, max 3 links per message | ✅ |
| Rate limiting | 5 submissions / 10 min per client, file-based, keyed by salted SHA-256 of IP; 429 + Retry-After | ✅ |
| CSRF / origin | JSON-only (`application/json` required), Origin header checked against host + `ALLOWED_ORIGINS` | ✅ |
| Payload size | 16 KB cap | ✅ |
| Secrets | Only env vars; `.env*` git-ignored; `.env.example` has names only | ✅ |
| Privacy | No message content logged or stored; delivery failures log only the transport name. No analytics, cookies or trackers. No résumé uploads | ✅ |
| Honest UX | Success shown only on `{"ok":true}` from the server; unconfigured → 503 → visible error with email/phone (tested) | ✅ |
| Headers | CSP (`default-src 'self'`, no third-party scripts/fonts/frames), X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy, COOP; HSTS ready to enable | ✅ (CSP needs `'unsafe-inline'` for scripts because Next.js static export inlines bootstrap data) |
| Third parties at runtime | None. Fonts self-hosted; Google Maps iframe replaced by a link; Google Form for domestic careers is a link | ✅ |
| Dependencies | `npm audit`: 0 vulnerabilities (postcss pinned to 8.5.23 via `overrides` to clear GHSA-qx2v-qp2m-jg93 et al. in Next 15's bundled copy) | ✅ 24 Nov 2026 |
| Legacy risks removed | Exposed `X-Powered-By`, CAPTCHA endpoint (now 410), insecure upload form | ✅ via `.htaccess` (`Header unset X-Powered-By` recommended in vhost: `expose_php = Off`) |
| LCA documents | Public by design; residential-style addresses flagged for legal review (owner-approval §6.4) | ⚠ owner decision |

Recommendations before launch: set `expose_php = Off`; enable HTTPS redirect + HSTS; put `RATE_LIMIT_DIR` outside
the web root; configure SPF/DKIM/DMARC for the sending domain; run `npm audit` before each release.
