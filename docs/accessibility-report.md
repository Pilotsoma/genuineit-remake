# Accessibility report

Target: WCAG 2.2 AA. This is a self-assessment — **not** a certification.

## Automated

axe-core 4.14 via `@axe-core/playwright` on all 81 routes (tags wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa):
no serious or critical violations (24 Nov 2026). Contrast issues found earlier were fixed (see test report).

## Implemented

- Semantic landmarks (`header`, `nav` ×3 with labels, `main#main`, `footer`), skip link, one `h1` per page.
- Mega menus: real buttons with `aria-expanded`/`aria-controls`, Escape closes and returns focus, click-outside closes, hover is an enhancement only.
- Mobile menu: focus moved into panel, focus trap, Escape closes, body scroll locked, targets ≥ 44px (tested).
- Visible `:focus-visible` outline (blue on light, cyan on dark).
- Forms: explicit labels, required markers, `aria-invalid` + `aria-describedby` errors, focus on first error, live region for status, honeypot hidden from AT.
- LCA table: `caption`, `th scope="col"`, row headers; mobile card view; search/filter result counts in `aria-live`; PDF links have accessible names including the LCA number.
- Careers filters use `aria-pressed`.
- Decorative SVG art `aria-hidden`; globe has `role="img"` + label; logos have organization names as alt.
- Reduced motion: all animation/transition disabled under `prefers-reduced-motion`; content never depends on animation (reveal content is visible without JS).
- Colour tokens chosen for ≥ 4.5:1 body text; cyan used for text only on navy.

## Manual checks performed

Keyboard-only navigation through header, mega menu, mobile menu, forms and LCA search (via Playwright keyboard tests
and browser review); 320px reflow on key pages.

## Known gaps / recommendations

- Screen reader testing with NVDA/JAWS/VoiceOver not yet performed — do this on staging.
- The official logo's tagline is very small at header size (decorative; full text is in the alt text).
- Third-party logos are displayed as supplied; some have low internal contrast (cannot be altered).
- Legacy PDFs (LCA, brochure) are not tagged PDFs; the brochure is an image-only PDF.
