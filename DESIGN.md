# Design System

Captured from the live code in `site/src/styles/global.css` and page-level styles.

## Theme & Ethos

Ultra-endurance editorial: dark, disciplined, and physical. Sand type on near-black surfaces, sharp razor corners (zero border-radius), hairline rules, and a single vermilion/rust accent. 
Hype adjectives ("world-class", "beast-mode"), rounded buttons, glossy SaaS cards, and purple/blue gradients are strictly banned. Photography provides the visceral drama; the typography and chrome provide precision and gravitas.

## Color Palette

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0b0a09` | Primary page surface (near-black charcoal) |
| `--bg-deep` | `#100e0d` | Elevated cards, alternating bands, drawer |
| `--ink` | `#ede4d3` | Primary text (sand / warm parchment) |
| `--ink-subtle` | `rgba(237, 228, 211, 0.88)` | High-contrast secondary text |
| `--ink-dim` | `rgba(237, 228, 211, 0.72)` | Body text, captions, secondary details |
| `--ink-faint` | `rgba(237, 228, 211, 0.52)` | Mono labels, disabled state, subtle metadata |
| `--rust` | `#e8511f` | Single vermilion accent: key stats, focus outlines, active filters |
| `--line` | `rgba(237, 228, 211, 0.14)` | Hairline grid borders and dividers |
| `--line-strong` | `rgba(237, 228, 211, 0.28)` | Emphasis rules and card hover borders |
| `--surface-hover` | `rgba(237, 228, 211, 0.05)` | Interactive row/card hover feedback |
| `--surface-active` | `rgba(232, 81, 31, 0.12)` | Active selection background tint |

## Typography

- **Headlines & Body**: `Archivo Variable`, 300–900 weight. Modern, clean architectural grotesk with high legibility.
- **Display Serif Contrast**: `Bitter Variable` (`--font-serif`), applied intentionally to pullquotes, documentary highlights, and story chapter titles for literary gravitas.
- **Numerals & Metrics**: `Anton`, condensed bold display typeface reserved exclusively for heroic race numbers, miles, hours, and world records.
- **Data, Eyebrows & Labels**: `JetBrains Mono Variable`, uppercase, letter-spacing `0.08em–0.18em`, for numbered section tags, coordinates, dates, and badges.
- **Fluid Scale**: Base font-size is `clamp(17px, 1.1vw, 19px)`. Hero headline reaches `clamp(38px, 4.8vw, 80px)` and section headings range from `clamp(32px, 3.8vw, 64px)`.

## Canvas & Layout Architecture

- **Max Width**: `--max-w: 1520px` (fluid wide canvas providing full-width presence on modern Retina displays without narrow column compression).
- **Fluid Horizontal Padding**: `--pad-x: clamp(24px, 4vw, 64px)`.
- **Fluid Vertical Rhythm**: `--section-y: clamp(80px, 7vw, 130px)`.
- **Containers**: Sharp right angles (`border-radius: 0`). Card borders use `1px solid var(--line)` hairline dividers instead of box-shadows.
- **Touch Targets**: All interactive elements, navigation links, filters, and CTAs strictly adhere to WCAG minimum 44px × 44px tap targets.

## Motion & Interactivity

- Subdued, intentional transitions: `0.2s–0.3s ease`.
- `Motion.astro` provides progressive viewport reveals (`data-reveal`) driven by `IntersectionObserver` with a single unified rAF batch, preventing layout thrashing.
- Subtle reading progress indicator (`#reading-progress`) tracking scroll position at the screen top.
- Full respect for `@media (prefers-reduced-motion: reduce)`, disabling transform offsets while retaining functional opacity.
