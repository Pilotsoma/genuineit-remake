# GenuineIT LLC — corporate website

Rebuild of [genuineitllc.com](https://genuineitllc.com): a statically exported Next.js site designed to run on the
company's existing **Apache + PHP 8.1** hosting, with a small PHP endpoint for the inquiry forms.

- 83 static pages: home, company, 30 service pages, 9 solutions, 12 industries, careers (8 postings), LCA compliance
  portal (75 records), contact, resources, legal.
- All 65 reachable legacy pages are mapped to new URLs with 301 redirects; legacy PDF URLs are unchanged.
- Business content lives in `src/content/` — not in components.

## Quick start

```bash
npm install
npm run dev            # http://localhost:3000 (forms show "not configured" in dev)
npm run build          # static export to out/ (+ .htaccess, redirect map, LCA document check)
npm start              # serve out/ like Apache on http://localhost:4173
npx playwright install chromium   # once
npm test               # Playwright: routes, links, redirects, LCA, careers, forms, a11y, responsive
```

Requirements: Node.js ≥ 20.9 (tested on Node 24). Python 3 is only needed to re-run the legacy audit scripts.

## Project layout

```
src/app/            routes (App Router, static export)
src/components/     layout/, sections/, forms/, careers/, compliance/, graphics/, ui/, seo/
src/content/        site facts, services, solutions, industries, company, careers, clients, resources,
                    compliance/lca-records.json, navigation
src/styles/         design tokens (Tailwind v4 @theme)
src/fonts/          self-hosted Inter + Manrope (OFL)
public/images/      legacy assets at their ORIGINAL paths (LCA PDFs, brochure, flyer, employee forms, logos)
public/api/         inquiry.php — server-side form handler
deploy/apache/      generated .htaccess (redirects, security headers, caching)
scripts/            crawl/extract legacy site, build data, generate redirects, static preview server
tests/              Playwright suite
docs/               audit, migration report, owner approvals, guides, screenshots
```

## Documentation

| Document | Purpose |
|---|---|
| [docs/owner-approval-required.md](docs/owner-approval-required.md) | **Read first** — every item that needs company sign-off |
| [docs/website-audit.md](docs/website-audit.md) | Audit of the legacy site |
| [docs/content-migration-report.md](docs/content-migration-report.md) | Before/after counts and what changed |
| [docs/content-management.md](docs/content-management.md) | How to update services, jobs, LCA records, contacts |
| [docs/design-system.md](docs/design-system.md) | Tokens, type, components |
| [docs/deployment-guide.md](docs/deployment-guide.md) | Staging, production, form email setup, rollback |
| [docs/seo-report.md](docs/seo-report.md), [docs/security-review.md](docs/security-review.md), [docs/accessibility-report.md](docs/accessibility-report.md), [docs/test-report.md](docs/test-report.md) | Reports |
| `docs/content-inventory.json`, `docs/asset-inventory.json`, `docs/legacy-redirects.json`, `docs/archived-job-postings.json` | Machine-readable inventories |

## Configuration

Copy `.env.example` → `.env.local` for build-time values. Form email delivery is configured with **server**
environment variables read by `public/api/inquiry.php` (see the deployment guide). No credentials are stored in
this repository. Until mail is configured the forms tell visitors the message was **not** sent and offer email/phone.
