# Test report

Run: 24 Nov 2026, Windows 11, Node 24.15, Playwright 1.64.1 (Chromium), against the production static export served
by `scripts/serve-static.mjs` (Apache-like routing and redirects). Command: `npx playwright test --grep-invert screenshot`.

**Result: 256 passed, 0 failed, 13 skipped** (skips are tests scoped to the other viewport, e.g. desktop mega menu on
the mobile project). Production build: ✅ 83 static pages, TypeScript clean, `npm audit` 0 vulnerabilities.

| Suite | What it checks | Result |
|---|---|---|
| routes.spec | All 81 sitemap URLs: HTTP 200, one `h1`, header/footer, title, meta description, canonical, OG image, valid JSON-LD, images have alt and load, **no console errors**; unique titles/descriptions; 404 page returns 404; robots/sitemap | ✅ |
| links.spec | Every internal link/download on every page resolves (no redirects needed); all 66 legacy redirects return 301 to a 200 target; brochure, flyer, employee files, legacy logo retained | ✅ |
| compliance.spec | 75 LCA rows in source order, duplicates preserved; search by number/title/no-match; **all 70 available PDFs return valid `%PDF`**; 5 missing marked "Document pending" | ✅ |
| careers.spec | 8 postings; keyword search; category filter with `aria-pressed`; job detail keeps legal text and mailing instruction; no JobPosting schema | ✅ |
| navigation.spec | Mega menu click/Escape/focus return/navigation; skip link; mobile menu open → expand group → navigate; breadcrumbs | ✅ |
| forms.spec | 4 forms × 2 viewports: client validation, `aria-invalid`, focus on first invalid field; submission with mail not configured shows an honest error, **never success**; honeypot/timing fields sent | ✅ |
| responsive.spec | No horizontal overflow on 13 key pages at 320, 375, 390, 430, 768, 1024, 1280, 1440, 1920 px; mobile nav targets ≥ 44px | ✅ |
| a11y.spec | axe-core WCAG 2.0/2.1/2.2 A+AA on all 81 routes — no serious/critical violations | ✅ |
| screenshots.spec | Full-page captures in `docs/screenshots/{desktop,mobile}/` (13 pages each) | ✅ |

## Defects found by the suite and fixed

1. Mobile menu panel trapped inside the header (header `backdrop-filter` created a containing block) — panel moved outside `<header>`.
2. LCA page overflowed by 95px at 768px (screen-reader-only text escaping the table scroller) — scroller made `relative`.
3. Insufficient contrast on small grey labels and decorative numerals — `text-subtle` darkened to #586477.
4. Two job pages shared a title — reference ID added to job page titles.
5. Form focus went to "Company" instead of the first invalid field — errors ordered by field order.

## Not tested / limitations

- `public/api/inquiry.php` was **not executed** (no PHP runtime locally); the preview server simulates the
  "not configured" (503) response. Test real delivery on staging.
- Lighthouse / Core Web Vitals were not measured against real hosting (see accessibility & SEO reports; bundle is
  ~103 KB shared JS + ~3 KB per page, no third-party requests).
- Cross-browser: Chromium only. Safari/Firefox spot checks recommended on staging.
- External links (LinkedIn, E-Verify, WBENC, Google Form, ADP) are listed but not fetched.
