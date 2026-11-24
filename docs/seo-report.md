# SEO report

| Item | Legacy | New |
|---|---|---|
| Titles | one title on every page | unique per page, `%s \| GenuineIT LLC`; home: "GenuineIT LLC \| IT Consulting, Staffing & Technology Solutions" (uniqueness tested) |
| Meta descriptions | none | unique per page, ≤160 chars, from page summaries (tested) |
| Canonical URLs | none | absolute, trailing slash (tested) |
| Open Graph / Twitter | none | title, description, 1200×630 image with official logo |
| Headings | `h3` page titles, many `h4` | exactly one `h1` per page (tested), sequential h2/h3 |
| URLs | `/sustenance-eng.php` | `/services/sustenance-engineering/` |
| Redirects | — | 66 × 301 from every legacy page (tested); PDFs unchanged |
| Sitemap | 404 | `/sitemap.xml`, 81 URLs |
| robots.txt | 404 | allow all, disallow `/api/`, sitemap link (LCA/PDF indexing unchanged) |
| Structured data | none | Organization, WebSite (all pages), BreadcrumbList (inner pages), Service (service/solution pages, IT Staffing), WebPage (industries). **No JobPosting** — job status/dates unverified. No reviews/ratings |
| Alt text | generic | descriptive for logos and images (tested present) |
| Internal linking | menu only | mega menu, breadcrumbs, related capabilities on every detail page, footer |
| 404 | server default | branded 404 with key links, `noindex` |
| Performance factors | 7 CDN libraries, jQuery | ~103 KB shared JS, self-hosted fonts, no third-party requests |

Target phrases used naturally in titles/descriptions: Houston IT consulting, IT staffing, staff augmentation,
application development, enterprise technology services, SAP/Oracle/Salesforce.

Next steps: Search Console verification, submit sitemap, monitor 404s for any external links to URLs not in the map,
enable JobPosting markup once postings have dates and are confirmed open.
