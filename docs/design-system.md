# Design system

Tokens are defined once in `src/styles/globals.css` (`@theme`, Tailwind v4) and used as utilities (`bg-ink-900`, `text-blue-600`…).

## Colour

| Token | Hex | Use |
|---|---|---|
| ink-950 / ink-900 | #050d1a / #081426 | footer, header, dark bands, hero |
| ink-800 | #10243d | secondary navy |
| logo | #004087 | sampled from the previous logo field |
| blue-600 / 700 | #1455d9 / #0f44b3 | primary actions, links, accents on light |
| cyan-400 | #00c9e8 | accent on dark only |
| cyan-600 | #007f94 | cyan for text on light |
| platinum / mist | #f4f7fb / #eaf0f7 | alternating light bands, hovers |
| text / text-muted / text-subtle | #111827 / #475569 / #586477 | body hierarchy (all ≥ 4.5:1 on white and platinum) |
| line / line-strong | #e2e8f0 / #cbd5e1 | borders |

The official logo has a white wordmark, so it is only placed on navy: the header is navy (transparent over the home
hero) and the footer is navy.

## Typography

Manrope (display, 500–800) and Inter (body), both variable fonts self-hosted from `src/fonts/` (SIL OFL).
Fluid sizes via `clamp()`: hero 42→80px, page 36→64px, section 30→48px, lead 17→20px, body 16–17px.
Headings: tight tracking (−0.02 to −0.035em), `text-wrap: balance`.

## Layout

Max content width 1320px + fluid gutter (20→64px) via `.container-x`; section rhythm `--section-y` (72→136px);
8px spacing grid; radii 6–20px; two restrained shadows (`card`, `lift`).

## Components

`layout/` Header (mega menu, keyboard + Escape), MobileNavigation (focus trap, 44px+ targets), Footer, Logo, Breadcrumbs (+BreadcrumbList schema).
`sections/` PageHero (dark/light), SectionHeading, BlockRenderer (6 list layouts, split, quote, prose), DetailTemplate, CatalogGroups, ServiceCard, IndustryCard, ClientLogoGrid, CTASection, ContactDetails.
`forms/` InquiryForm (business, staffing, partnership, general).
`careers/` JobsExplorer. `compliance/` LcaExplorer. `graphics/` NetworkGlobe, PatternArt (seeded original SVG art used instead of stock photography). `ui/` LinkButton, TextLink, Icon, RevealController.

## Motion

150–650ms ease-out: hero text rise, scroll reveals (`data-reveal`, content visible without JS), card lift, underline
links, menu fade, globe arc flow and node pulse. All disabled under `prefers-reduced-motion`.

## Imagery

No licensed photography was available, so imagery is original abstract SVG (globe, contour, node graphs) generated
deterministically in code. Replace with licensed photography by swapping `PatternArt` in cards/heroes.
