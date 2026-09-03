# Design

Captured from the live code in `site/src/styles/global.css` and page-level styles.

## Theme

Light, professional-athlete editorial, modeled on chrishoy.com (owner-approved reference): white surfaces with off-white alternating bands, full-bleed photo banners carrying white text, one hot accent. Photography supplies the drama; the chrome stays clean.

## Color

| Token | Value | Role |
|---|---|---|
| `--bg` | `#ffffff` | Page surface |
| `--bg-deep` | `#f6f5f3` | Alternating bands: ticker, quote, tints |
| `--panel` | `#edebe8` | Placeholder panels |
| `--ink` | `#2b3640` | Primary text (slate) |
| `--ink-dim` | `#68727c` | Secondary text |
| `--rust` | `#e8511f` | Single hot accent (vermilion): links, key figures, filters |
| `--line` | `rgba(43,54,64,0.14)` | Hairline rules |
| `--line-strong` | `rgba(43,54,64,0.3)` | Emphasis rules |
| `--dark` | `#212a30` | Footer anchor; light text `#f2f0ec` on it |

Strategy: Restrained neutrals + one vermilion accent. Flat color only; gradients are banned by the owner. Text over photos is white with a soft text-shadow (no gradient scrims).

## Typography

- **Display**: Bitter Variable (slab serif, Vitesse-adjacent), weight 600–700 for headlines, italic accent spans in vermilion.
- **Body**: Inter Variable, 14–18px, line-height 1.55–1.7.
- **Micro**: JetBrains Mono Variable, 11–13px, uppercase, letter-spacing 0.06–0.16em, for eyebrows, labels, data, captions.
- Hierarchy by scale + weight; hero name 108px desktop / 54px mobile; section headlines 36–64px desktop.

## Layout & Components

- Max width 1200px, 32px side padding (20px mobile).
- Hairline-ruled grids instead of card shadows; sharp corners everywhere (no border-radius).
- Numbered mono section labels ("01 / Who he is").
- Photos: object-fit cover in bordered frames; fixed aspect ratios (4/3 cards, 3/4 chapters, 2/3 poster, 16/9 thumbs).
- Breakpoints: 640px primary, 900px for 3-column story grid.

## Motion

Minimal. One 0.4s ease transform (video thumb hover zoom). Any future motion: ease-out curves, no layout-property animation, gated by prefers-reduced-motion.
