# Legacy website audit — genuineitllc.com

Audit date: 24 Nov 2026. Method: same-host crawler (`scripts/crawl_legacy.py`) starting at `/`, following every
`href`/`src` on genuineitllc.com and www.genuineitllc.com only; content extracted with `scripts/extract_legacy.py`.
No third-party domains were crawled and no authentication was attempted. The raw mirror is in `legacy-mirror/`
(git-ignored; reproducible with the scripts).

## Platform

- Apache, PHP 8.1.34. `www.` serves the same site (no redirect between hosts).
- Bootstrap 3.3.7, jQuery 3.3.1, DataTables, Slick carousel, Font Awesome 4.7 — all from public CDNs.
- No `robots.txt` (404) and no `sitemap.xml` (404). Every page had the same `<title>` (".:. GenuineIT LLC .:.") and
  no meta descriptions.
- Footer: "Copyright © 2009 GenuineIT llc."

## Pages found (66)

65 pages returned 200; `/gitdocs/` (the "Sign In" area) returned **500**. Full list with headings, word counts and
new URLs: `docs/content-inventory.json`.

| Menu | Pages |
|---|---|
| Home | `/`, `/index.php` (same content: 4-slide carousel, three icon tiles, two logo carousels) |
| About Us | company-profile, mission |
| Services | soa-services, business-process-outsourcing, cloud-services, professional-services, it-services, bpm-mgmnt-services, ecommerce, e-learning, quality-assurance; Managed Services: configuration-mgmnt, data-mgmnt, network-operation-center, production-support, program-mgmnt-support |
| Industries | banking, defence, government, health-care, insurance, manufacturing, oil-gas, pharmaceauticals, transportation, utilities, retails, communications |
| Solutions | application-server-sw-migration, legacy-sw-migration; Mobile: android-appln-development, blackberry-app-dev, windows-app-dev, iphone-app-dev; CRM: salesforce-crm, siebel; Product Engineering: product-development, product-management, prototyping, sustenance-eng; ERP: microsoft-dynamics, oracle-app-expertise, sap; Business Consulting: change-mgmnt, enterprise-architecture, it-out-sourcing; Enterprise: application-development, application-integration; Other: business-intelligence-data-warehousing, content-mgmt-solution, share-point-consulting, web-app-development |
| Top level | clients, employees, training, testimonials, careers, lca, git-domestic-career |
| Contact Us | engaging-with-us, partnering-us, contact |
| Footer | disclaimer |

## Content findings

- **Contact**: 9894 Bissonnet St, Suite 827, Houston, TX 77036; 713-230-8558; info@genuineitllc.com; careers@genuineitllc.com.
- **Careers**: 8 visible postings (no dates); **46 more inside HTML comments** (not shown to visitors) — archived to
  `docs/archived-job-postings.json`. The application form had résumé upload + CAPTCHA (`captcha.php`).
- **LCA** (`/lca.php`): DataTables table of **75 rows**, all "Certified", each with a PDF link. 69 PDFs downloaded;
  **5 links return 404**, one link had a typo (correct file found), one filename contains spaces.
- **Logos**: 44 logo files in `/images/git-clients/` (39 on home, 42 on /clients.php). 25 further references to
  `/images/clients/client-*.png` are **404 on the server** (broken images on the live site).
- **Documents**: brochure (2-page image PDF, 2018), flyer, 10 employee forms in `/images/docs-2018/` (2018 I-9/W-4/W-9).
- **Certification references** (footer): E-Verify logo + link, WBENC logo + link, "Certified Minority Owned Business" MBE logo.
- **Social**: Facebook, Twitter @gitconsultin, LinkedIn genuine-itllc.
- **Quality issues**: many spelling errors ("Confugration", "Producation", "Mangement", "Disclamer", "pharmaceauticals"),
  text apparently copied from other companies ("Kennedy Sot", "Real Estate & Infrastructure Clients"), duplicated
  paragraphs (Prototyping / Sustenance; App Server Migration repeated twice), headings with no content (Retail),
  truncated disclaimer, outdated platforms (BlackBerry, Windows Mobile, MOSS 2007) and dated statistics.
- **Forms**: engaging-with-us, partnering-us and contact posted to the same page with a PHP CAPTCHA; delivery method
  unknown (server code not available).

## Technical findings

- No HTTPS redirect from http/www observed in headers; no security headers (CSP, HSTS, X-Frame-Options) set.
- `X-Powered-By: PHP/8.1.34` exposed.
- Images had empty or generic alt text ("LOgo", "footer images", none on client logos).
- Not mobile-optimized beyond Bootstrap 3 defaults; carousel-driven home page.

## Not retrievable

| Item | Reason |
|---|---|
| `/gitdocs/` | HTTP 500 (sign-in area — out of scope) |
| 5 LCA PDFs | HTTP 404 at source (listed in owner-approval §6.2) |
| 25 `/images/clients/client-*` logos | HTTP 404 at source |
| Server-side PHP source (form handling, captcha) | Not publicly accessible; no repository was provided |
