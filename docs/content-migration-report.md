# Content migration report

Before = genuineitllc.com crawled 24 Nov 2026. After = this repository's static build. Counts are produced by the
scripts in `scripts/` and verified by the Playwright suite (`tests/`).

## 1. Summary

| Measure | Legacy | New site | Notes |
|---|---|---|---|
| Pages discovered | 66 | — | 65 × 200, `/gitdocs/` × 500 |
| Pages migrated (mapped to a new URL) | 65 | 65 | `/` and `/index.php` both map to `/` |
| Pages needing manual review | — | 1 | `/gitdocs/` sign-in area (out of scope, untouched) |
| New pages built | — | 83 | includes overviews, hubs, 8 job pages, 404 |
| 301 redirects | — | 66 | `docs/legacy-redirects.json`, `deploy/apache/.htaccess` |
| Job postings (visible) | 8 | 8 | all separate, stable IDs `git-job-001…008` |
| Job postings (hidden in HTML comments) | 46 | 0 published | archived verbatim in `docs/archived-job-postings.json` |
| LCA records | 75 | 75 | original order, duplicates kept (tested) |
| LCA PDFs linked | 75 links / 74 distinct | 70 available | 5 are 404 at source → "Document pending"; 1 typo link redirected |
| Other PDFs / documents | 10 | 10 | brochure, flyer, 8 employee files (+ xlsx, docx) at original URLs |
| Client/partner logos | 44 files (+25 broken refs) | 43 shown | 1 unidentified flag graphic held back; 25 broken refs were already 404 |
| Broken links in new build | — | 0 | `tests/links.spec.ts` |

**Migration is not 100%**: 5 LCA documents, 25 legacy logo references and the `/gitdocs/` area were not
retrievable from the source, and 46 hidden postings were intentionally not republished.

## 2. Page mapping

The complete mapping (legacy URL → new URL, status, heading, word count) is in `docs/content-inventory.json`.
Structure of the new site:

| New section | Legacy sources |
|---|---|
| `/` | index.php (carousel replaced by a single hero; tagline "GenuineIT is your trusted IT Partner…" kept) |
| `/company/about/` | company-profile.php + brochure "About us" |
| `/company/mission-values/` | mission.php (principles, values, contract staffing plan) |
| `/company/technology-expertise/` | company-profile.php consultant platform list (de-duplicated, grouped) |
| `/company/why-genuineit/` | strengths quoted from mission/company/application pages (source shown on each card) |
| `/company/clients-partners/` | clients.php, it-services.php, logo carousels |
| `/company/testimonials/` | testimonials.php |
| `/services/*` (30) | 29 legacy service/solution pages + new IT Staffing hub (from mission, professional services, brochure) |
| `/solutions/*` (9) | oracle, sap, microsoft-dynamics, salesforce, siebel, content-mgmt, sharepoint, BI/DW, ecommerce |
| `/industries/*` (12) | all 12 legacy industry pages |
| `/careers/`, `/careers/git-job-00N/` | careers.php, git-domestic-career.php (Google Form linked) |
| `/compliance/lca/` | lca.php |
| `/contact/`, `/contact/business-inquiries/`, `/contact/partnerships/` | contact.php, engaging-with-us.php, partnering-us.php |
| `/resources/`, `/resources/employees/` | header brochure/flyer links, footer certifications, employees.php |
| `/legal/disclaimer/` | disclaimer.php (verbatim) |

## 3. Editing rules applied

Allowed edits only: spelling, grammar, sentence structure, de-duplication, headings, layout into lists/cards,
summaries derived from the page's own text, CTAs and metadata. Every page's withheld or reworded claims are listed
in its `reviewNotes` field in `src/content/*.ts` and summarized in `docs/owner-approval-required.md`.

Withheld categories: unsourced percentages and multipliers; tenure statements ("13 yrs", "15 years", "over a
decade"); unnamed partnerships/alliances; certification claims without evidence; facility/location claims; text
that appears to belong to other companies; outdated third-party statistics.

## 4. Not changed (verbatim)

- Disclaimer text (including its truncated last sentence).
- Job posting responsibilities, education/experience text, openings and mailing instructions (see §6).
- LCA serials, numbers, titles, locations, statuses and documents.
- Client logo artwork and the trademark disclaimer.

## 5. Assets

`docs/asset-inventory.json` lists all 180 legacy assets with disposition: 129 retained at original URL,
31 missing at source (404), 10 retired code files (CSS/JS/captcha), 10 legacy design images not reused
(carousel banners, icons). New assets: owner-supplied logo, OG image, self-hosted fonts, original SVG artwork.
The previous `/images/logo.png` is still served for old links but no longer displayed.

## 6. Job posting text corrections

Only these mechanical corrections were made (capitalization artifacts in the source where "P" appeared as "p"):

| Original | New |
|---|---|
| ApI, WebApI | API, WebAPI |
| SOAp | SOAP |
| JpA | JPA |
| ERp | ERP |
| ASp.NET / ASp.Net | ASP.NET / ASP.Net |
| GCp, pivotal | GCP, Pivotal |
| TCp/Ip, SDp, DHCp, TFTp, SIp, UDp, VoIp | TCP/IP, SDP, DHCP, TFTP, SIP, UDP, VoIP |
| CCpulse, G-plus | CCPulse, G-Plus |
| pyathon | Python |
| sentence-initial "provide", "perform", "production", "participate" | capitalized |
| "Software Engineer-Applications(ApI)Development & Integration" | "Software Engineer-Applications (API) Development & Integration" |

Educational/experience text and application instructions are unchanged.

## 7. Before/after experience

| | Legacy | New |
|---|---|---|
| Titles / descriptions | 1 shared title, none | unique per page (tested) |
| Mobile | Bootstrap 3 collapse menu | mobile-first, accessible menu, no overflow 320–1920px (tested) |
| LCA | jQuery DataTable | server-rendered table (works without JS) + search, mobile cards |
| Careers | accordion + upload form | searchable listing, detail pages, email/postal application |
| Forms | PHP + CAPTCHA | validated JSON → PHP handler with honeypot, timing check, rate limit |
