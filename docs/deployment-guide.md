# Deployment guide

The site is a static export (`out/`) plus one PHP file, so it runs on the **existing Apache/PHP host** with no Node.js
on the server. Nothing in this repository changes DNS, email or the live site by itself.

## 1. Build

```bash
npm ci
npm run build     # → out/ (HTML, assets, original PDFs, .htaccess, api/inquiry.php)
npm test          # optional but recommended
```

## 2. Staging

1. Create a subdomain such as `staging.genuineitllc.com` with its own document root (do **not** reuse the live root).
2. Upload the **contents** of `out/` (including the hidden `.htaccess`).
3. Protect staging with HTTP basic auth and add `Header set X-Robots-Tag "noindex"` in its vhost.
4. Build with `NEXT_PUBLIC_SITE_URL=https://staging.genuineitllc.com npm run build` so canonicals point at staging,
   then rebuild with the production URL before go-live.
5. Check: every legacy URL in `docs/legacy-redirects.json` returns 301 → 200; `/compliance/lca/` PDFs open;
   forms behave as in §4.

## 3. Production (after owner approval)

1. Back up the current document root (all PHP files and `/images/`) and keep the archive — this is the rollback.
2. Leave `/gitdocs/` in place if that system is still used.
3. Upload `out/` contents to the document root. Old `.php` pages are no longer needed — `.htaccess` redirects them
   (remove the old PHP files only after verification, or move them out of the web root).
4. Enable the commented HTTPS/canonical-host and HSTS lines in `.htaccess` once TLS is confirmed on both hosts.
5. Submit `https://genuineitllc.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

Alternative hosts (Vercel, Netlify, Cloudflare Pages) work for the static files; the redirect list in
`docs/legacy-redirects.json` must be converted to that platform's format and the form needs a serverless equivalent.

## 4. Form email delivery

`/api/inquiry.php` reads **server environment variables** (set in the vhost, `.htaccess` `SetEnv` in a non-public
include, or the hosting panel):

| Variable | Example | Notes |
|---|---|---|
| `MAIL_TRANSPORT` | `resend` or `sendmail` | empty = disabled → visitors see "not sent, please email/call" |
| `RESEND_API_KEY` | (secret) | only for `resend`; needs PHP cURL |
| `MAIL_FROM` | `GenuineIT Website <web@genuineitllc.com>` | must be a verified sender/domain (SPF/DKIM) |
| `MAIL_TO_GENERAL` | `info@genuineitllc.com` | recipient |
| `RATE_LIMIT_DIR` | `/home/USER/tmp/ratelimit` | writable, **outside** the web root |
| `RATE_LIMIT_SALT` | random string | hashes client IPs |
| `ALLOWED_ORIGINS` | `https://genuineitllc.com,https://www.genuineitllc.com` | optional |

Test by submitting the contact form on staging and confirming receipt. The PHP handler could not be executed in
the development environment (no PHP installed) — **it must be tested on staging before launch.**

## 5. Rollback

1. Restore the backed-up document root (overwrite the new files, delete the new `.htaccess`, `_next/`, `api/`).
2. Clear any CDN cache. Redirected URLs revert automatically because the old PHP files return.
3. Because PDFs kept their URLs, no external links break in either direction.

## 6. Post-launch checks

- `curl -I https://genuineitllc.com/lca.php` → 301 `/compliance/lca/`
- Spot-check 5 LCA PDFs, the brochure and flyer.
- Lighthouse on `/`, `/services/it-staffing/`, `/compliance/lca/` against production.
