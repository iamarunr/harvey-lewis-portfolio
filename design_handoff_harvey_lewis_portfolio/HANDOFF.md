# Handoff — Harvey Lewis portfolio → Astro

Source of truth for the design: `Harvey Lewis.dc.html` (dark direction, shipped) and
`Harvey Lewis Editorial.dc.html` (light alternative, per the repo's original DESIGN.md).
Repo association and screen map: `github.md`.

## Tokens (dark direction)

| Token | Value | Role |
|---|---|---|
| `--bg` | `#0B0A09` | Page surface |
| `--bg-deep` | `#100E0D` | Alternating bands (who-he-is, speaking, media) |
| `--ink` | `#EDE4D3` | Primary text (sand) |
| `--ink-dim` | `rgba(237,228,211,0.72)` | Secondary text |
| `--rust` | `#E8511F` | Single accent: CTAs, eyebrows, wins |
| `--line` | `rgba(237,228,211,0.14)` | Hairline rules and 1px grid gaps |
| `--line-strong` | `rgba(237,228,211,0.28)` | Emphasis rules |
| Scrim | `rgba(11,10,9,0.58)` | Flat photo overlay — no gradients |

Type: **Archivo** 400/500/600 for everything (sentence case, never all-caps headlines);
**Anton** for numerals only (450, 108, 2×, 124); **JetBrains Mono** 10–12px uppercase
letter-spaced 0.14–0.2em for eyebrows, labels, data and captions.

Layout: max-width 1240px, 32px side padding. Sharp corners, no border-radius, no shadows —
separation comes from 1px `--line` gaps in grids. Flat color only.

## Section → component map

| Section (in order) | Astro component | Notes |
|---|---|---|
| Hero | `Hero.astro` | Full-bleed `hero-silhouette.jpg`, flat scrim, h1 + 2 CTAs + 4-fact rail. Grid needs `grid-template-columns: minmax(0,1fr)` or the rail overflows on phones. |
| Who he is | `Intro.astro` | Two-up: copy + 2 portraits. `repeat(auto-fit, minmax(330px,1fr))`. |
| Three careers | `Pillars.astro` | 3 cards from `pillars[]`: figure, title, body. |
| Pull quote | `Quote.astro` | Centered, sourced attribution line. |
| Badwater band | `PhotoBand.astro` | Full-bleed photo + overlaid eyebrow/headline. |
| Results | `Results.astro` | Rows from `races.json`. Wrapping flex row (year 64px / event 1 1 220px / detail 1 1 150px / place 90px) — a fixed grid breaks on phones. `WR = world record at the time`. |
| Speaking | `Speaking.astro` | `talks[]` + `speakingFacts[]` + CTA. Fee band currently "On request". |
| Partners | `Partners.astro` | `partners[]` + `reach[]`. Logos not yet supplied — swap the name cards for logo lockups when they arrive. |
| Media kit | `MediaKit.astro` | Quick facts, press list, downloads (files not yet real), 6-photo grid. |
| Enquiries | `Contact.astro` | `ctas[]` → mailto. Replace placeholder `hello@harveylewis.com`. |
| Footer | `Footer.astro` | Photo credit line. |

## Data

- `site/src/data/races.json` already exists — drive `Results.astro` from it; the design shows
  10 selected rows with `place` and an accent color for wins.
- Move `talks`, `speakingFacts`, `partners`, `reach`, `pillars` into `site/src/data/` as JSON
  rather than hardcoding in components.

## Accuracy rules carried into the design

- Harvey no longer holds the backyard ultra world record (Phil Gore, 119 yards, Dead Cow Gully,
  June 2025). Copy says "twice set the world record" and "stood until 2025"; results table uses
  "WR then" with a footnote.
- 2014 Badwater time is `~23:53` (Wikipedia, not in UltraSignup) — keep the tilde.
- Field-size and audience figures are labelled approximate/TBC where unverified.

## Open items before launch

1. Real enquiry address or form endpoint (3 CTAs + speaking CTA currently placeholder).
2. Media-kit files: bio PDF, photo ZIP, results PDF, speaking one-sheet.
3. Partner logos + confirmed sponsor list; audience numbers for Instagram/YouTube/Strava.
4. Photographer credits per image (filenames suggest Mike Trimpe for the `MT-*` set).
5. Accessibility pass: alt text is written, but confirm 4.5:1 on `--ink-dim` over `--bg-deep`.
