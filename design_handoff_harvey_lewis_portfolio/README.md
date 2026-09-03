# Handoff: Harvey Lewis portfolio redesign

## Overview

A redesign of harveylewis.com — the professional front door for Harvey Lewis:
two-time Badwater 135 champion, twice a backyard ultra world record setter
(450 miles / 108 hours, Big's Backyard Ultra 2023), and a full-time high school
teacher in Cincinnati. The site's job is to convert curiosity into respect within
one screen and then route three audiences to contact: **sponsors**, **speaking
bookers**, and **media**.

Target codebase: `iamarunr/harvey-lewis-portfolio` (Astro, branch `main`).
The repo currently contains `site/src/styles/global.css`, `site/src/data/races.json`
and `site/src/assets/photos/` — no pages yet. This handoff is the design for those pages.

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes that
show intended look, content and behavior. They are **not production code to copy**.
The task is to **recreate these designs as Astro components** in the existing repo,
using its conventions (`site/src/`, CSS custom properties in `global.css`, data in
`site/src/data/*.json`). Do not port the inline styles verbatim; lift the values into
the repo's token layer and write normal component CSS.

## Fidelity

**High-fidelity.** Final colors, typography, spacing, copy and imagery. Recreate
pixel-accurately. All copy in the prototype is final-draft and fact-checked against
the repo's own research files, with two deliberate exceptions marked below under
"Accuracy rules".

Note: the repo's existing `DESIGN.md` / `global.css` describe a **light** editorial
theme (white / slate #2b3640 / vermilion #e8511f). The shipped direction here is
**dark**, reusing the same vermilion accent. `Harvey Lewis Editorial.dc.html` in this
bundle is a complete implementation of the original light spec if that direction is
preferred — pick one and update `DESIGN.md` accordingly.

## Screens / Views

One page, ten sections, in this order. Page max-width **1240px**, side padding **32px**.
Sharp corners everywhere (no border-radius), no shadows: separation comes from 1px
hairline gaps in grids. **Flat color only — no gradients** (owner constraint).

### 1. Hero
- **Purpose**: establish who he is and route to the two primary CTAs.
- **Layout**: `min-height: 100vh`, `display: grid; grid-template-rows: auto 1fr auto;`
  **`grid-template-columns: minmax(0, 1fr)`** — this is required; without it the fact
  rail's min-content width overflows the viewport on phones and clips the headline.
- **Background**: `photos/hero-silhouette.jpg`, `object-fit: cover; object-position: 50% 42%`,
  overlaid with a flat scrim `rgba(11,10,9,0.58)`.
- **Top row**: wordmark "Harvey Lewis" (mono 11px, 0.16em, uppercase, weight 500) left;
  nav right — Story / Speaking / Results / Media at `rgba(237,228,211,0.78)`, then an
  "Enquiries" button (bg `#E8511F`, text `#0B0A09`, padding 9px 16px). The nav MUST be
  `display: flex; flex-wrap: wrap; gap: 12px 22px; justify-content: flex-end` — a
  non-wrapping nav pushes the button outside the overflow-hidden hero on phones.
- **Center block**:
  - Eyebrow: "Cincinnati, Ohio — ultrarunner & high school teacher", mono 11px, 0.2em, `#E8511F`.
  - H1: "450 miles. 108 hours. He answered the bell every time." — Archivo 600,
    `clamp(32px, 5.4vw, 76px)`, line-height 1.04, letter-spacing -0.02em, max-width 21ch.
  - Body: "Two-time Badwater 135 champion, twice a backyard ultra world record setter,
    and a full-time teacher who trains between class periods." — 19px/1.6,
    `rgba(237,228,211,0.88)`, max-width 52ch.
  - CTAs: "Sponsorship & speaking →" (solid `#E8511F`, text `#0B0A09`, 600, padding 15px 24px,
    hover bg `#EDE4D3`) and "Media kit" (1px border `rgba(237,228,211,0.45)`, hover border `#EDE4D3`).
- **Bottom fact rail**: `repeat(auto-fit, minmax(140px, 1fr))`, gap 20px 32px, 24px top padding,
  1px top rule `rgba(237,228,211,0.28)`. Four cells — Anton 34px figure over mono 10px label:
  450 / "Miles, Big's 2023" · 108 / "Hours without sleep" · 2× / "Badwater 135 champion" ·
  124 / "Races since 1996".

### 2. Who he is  (band: `#100E0D`)
Two-up `repeat(auto-fit, minmax(330px, 1fr))`, gap `clamp(32px, 6vw, 90px)`, centered.
Left: eyebrow "Who he is"; H1 (Archivo 600, `clamp(30px, 3.6vw, 52px)`/1.1, -0.015em, 24ch)
"Harvey Lewis is a high school teacher in Cincinnati who has twice set the backyard ultra
world record."; 18px/1.68 body; the same two CTAs. Right: 2-col grid, 8px gap,
`speaking-students.jpg` and `badwater-finish-night.jpg`, each `aspect-ratio: 3/4`, cover.

### 3. Three careers, one runner
Eyebrow row with 1px bottom rule. Cards `repeat(auto-fit, minmax(260px, 1fr))` with 1px
`rgba(237,228,211,0.14)` gaps and border; each card bg `#0B0A09`, padding 30px 26px:
Anton 40px figure in `#E8511F`, Archivo 600 20px title, 15px/1.66 body at 0.78 opacity.
Content: **450 / The record**, **2× / Badwater champion**, **180 / School days a year**.

### 4. Pull quote
Centered, max-width 900px, Archivo 500 `clamp(22px, 2.8vw, 40px)`/1.3: "We are all capable
of incredible feats. No matter your pursuits, *we can all go so much further than we think.*"
— second clause in `#E8511F`. Attribution mono 11px: "Rich Roll Podcast, ep. 812".

### 5. Badwater photo band
`salt-flat-sunset.jpg` at `height: clamp(340px, 58vh, 620px)`, flat scrim `rgba(11,10,9,0.5)`,
text absolutely positioned bottom-left inside the 1240px container: eyebrow "Badwater 135"
in `#E8511F`, then Archivo 600 `clamp(24px, 3vw, 44px)`/1.12 "135 miles across Death Valley.
Fifteen starts, two wins, five podiums."

### 6. Results
Header row: "Selected results" / "124 races since 1996 · UltraSignup, iRunFar · WR = world
record at the time", 1px bottom rule.
**Each row is a wrapping flex row** — `display: flex; flex-wrap: wrap; gap: 6px 18px;
align-items: baseline; padding: 18px 6px`, 1px bottom border `rgba(237,228,211,0.12)`,
hover bg `rgba(237,228,211,0.05)`. Children:
`year flex: 0 0 64px` (mono 13px, 0.7 opacity) · `event flex: 1 1 220px` (Archivo 500 18px) ·
`detail flex: 1 1 150px` (mono 13px, 0.78) · `place flex: 0 0 112px` (mono 12px, 0.08em,
uppercase; `#E8511F` for wins, `rgba(237,228,211,0.7)` otherwise).
A fixed 4-track grid was tried twice and breaks on phones — use flex.
Rows (drive from `races.json`): 2023 Big Dog's 450.00 mi / 108 yards — 1st · WR then;
2021 Big Dog's 354.16 mi / 85 yards — 1st · WR then; 2021 Badwater 25:50:23 — 1st;
2014 Badwater ~23:53 — 1st; 2019 IAU 24-Hour World Champs 160.34 mi · Team USA — 14th;
2018 Appalachian Trail 2,190 mi / 49d 14h — Finish; 2016 Badwater 23:40:52 — 2nd;
2023 FANS 24-Hour 137.24 mi — 1st; 2015 NorthCoast 24-Hour 157.91 mi — 1st;
2024 Bigfoot 200 50:32:58 — 3rd.

### 7. Speaking  (band: `#100E0D`)
Two-up `repeat(auto-fit, minmax(320px, 1fr))`. Left: H2 "A teacher who can tell you exactly
what the fifth day feels like" (Archivo 600 `clamp(26px, 3.2vw, 46px)`/1.1, 22ch), 18px body,
then three stacked talk cards (1px gaps): tag in `#E8511F` mono 10px, Archivo 600 20px title,
15px/1.62 body —
- *Keynote · 45–60 min* — **One more loop**
- *Corporate · 30–45 min* — **Pacing, not heroics**
- *Schools · 30 min + Q&A* — **Everyone is a sequoia**

Right: `speaking-students.jpg` at `aspect-ratio: 4/5`; below it a 1px-gap stack of
label/value rows (Formats · Audiences · Travel · Fee band "On request" · Lead time); then a
full-width solid `#E8511F` CTA "Check a date →".

### 8. Partners & affiliations
Header row: "Partners & affiliations" / "Audience figures to confirm".
Cards `repeat(auto-fit, minmax(220px, 1fr))`, min-height 130px: kind (mono 10px, 0.62),
name (Archivo 600 19px), note (14px, 0.72) — Brooks Running (current) · InsideTracker
(status to confirm) · Dream Recovery · Team USA IAU 24-Hour (five appearances, a US record) ·
RunQuest Travel · Viva! / Great Vegan Athletes.
Below, a reach strip `repeat(auto-fit, minmax(180px, 1fr))`, Anton 32px over mono 10px:
64k Facebook followers · 2× Rich Roll Podcast guest · 1 feature documentary · TBC for
Instagram/YouTube/Strava.
**When real logos arrive, replace the name cards with logo lockups on `#0B0A09`.**

### 9. Media kit  (band: `#100E0D`)
H2 "Everything a deadline needs". Three panels `repeat(auto-fit, minmax(270px, 1fr))`:
- **Quick facts** — Cincinnati, Ohio · Teacher, Cincinnati Public Schools · Vegan since 1998 ·
  124 races since 1996 · Brooks Running athlete
- **Press** — Rich Roll Podcast (658, 812) · iRunFar "A Different Mode" · Cincinnati Enquirer ·
  CityBeat profile · "Like Harvey Like Son" documentary
- **Downloads** — Short & long bio (PDF) · High-res photography (ZIP) · Speaking one-sheet (PDF);
  rows are space-between links with a 1px bottom rule and a mono format tag.
Then a 6-image grid `repeat(auto-fit, minmax(190px, 1fr))`, 8px gap, each `aspect-ratio: 4/3`:
badwater-dawn, forest-run, desert-road-pair, no-finish-arch, bandana-arch, sunset-portrait.
Caption: "Photography: Mike Trimpe and others · credit required on use".

### 10. Enquiries + footer
H2 "Three ways to bring him in". Three cards `repeat(auto-fit, minmax(270px, 1fr))`,
min-height 260px, `justify-content: space-between`, **hover inverts the whole card to
bg `#E8511F` / text `#0B0A09`**: 01 / Sponsorship — "Partner with Harvey"; 02 / Speaking —
"Book a keynote"; 03 / Media — "Press & interviews". Each links `mailto:` with a prefilled subject.
Footer: 1px top rule, mono 11px 0.62 opacity — "Harvey Lewis · Cincinnati, Ohio", the
placeholder-address warning (in `#E8511F`), photo credit, "Top ↑".

## Interactions & Behavior

Deliberately **static** — an earlier animated version was rejected. There is no scroll
animation, no counters, no autoplay. Implement only:
- **Hover**: nav links → `#EDE4D3`; solid CTAs → bg `#EDE4D3`; outlined CTAs → border `#EDE4D3`;
  results rows → bg `rgba(237,228,211,0.05)`; enquiry cards → full invert to `#E8511F`/`#0B0A09`.
- **Anchor nav**: `html { scroll-behavior: smooth }`; nav targets `#story`, `#speaking`,
  `#results`, `#media`, `#contact`, `#top`.
- **Responsive**: every multi-column block is `repeat(auto-fit, minmax(...))` and collapses
  without media queries. The three hard-won constraints: hero needs
  `grid-template-columns: minmax(0,1fr)`; hero nav needs `flex-wrap: wrap`; results rows must
  be wrapping flex, not a fixed grid.
- **Accessibility**: WCAG 2.1 AA. Real alt text on every photo (written in the prototype).
  Respect `prefers-reduced-motion` for any transition added later.

## State Management

None. The page is static content. The prototype exposes two authoring conveniences that
should become props/config, not runtime state: number of result rows shown (5–10) and
whether the media photo grid renders.

## Design Tokens

Colors
- `--bg: #0B0A09` — page surface
- `--bg-deep: #100E0D` — alternating bands (who-he-is, speaking, media)
- `--ink: #EDE4D3` — primary text (sand)
- `--ink-dim: rgba(237,228,211,0.72)` — secondary text (0.78–0.88 for body over photos)
- `--rust: #E8511F` — the single accent: CTAs, eyebrows, wins, warnings
- `--line: rgba(237,228,211,0.14)` — hairlines and 1px grid gaps
- `--line-strong: rgba(237,228,211,0.28)` — emphasis rules
- Photo scrims: `rgba(11,10,9,0.5)` on bands, `rgba(11,10,9,0.58)` on the hero

Typography — Archivo 400/500/600 (all prose and headlines, **sentence case, never all-caps**);
Anton (numerals only: 450, 108, 2×, 124, 64k); JetBrains Mono 400/500 (eyebrows, labels,
data, captions — 10–13px, uppercase, letter-spacing 0.08–0.2em).
Scale: H1 `clamp(32px, 5.4vw, 76px)`/1.04/-0.02em · section H2 `clamp(26px, 3.6vw, 52px)`/1.1 ·
sub-head 19–20px · body 15–19px/1.55–1.68 · mono 10–13px. Numerals 32–40px (Anton).

Spacing — section padding `90px 32px` (hero `30px 32px` around a 100vh grid);
container 1240px; grid gaps 1px (hairline cards), 8px (photo grids), 20–40px (content),
`clamp(30px, 5vw, 90px)` (two-up splits).

Radius `0` everywhere. Shadows: none.

## Assets

All photography is already in the repo at `site/src/assets/photos/` (this bundle's
`photos/` folder is a copy of the 16 used/considered frames):
hero-silhouette · speaking-students · badwater-finish-night · salt-flat-sunset ·
badwater-dawn · forest-run · desert-road-pair · no-finish-arch · bandana-arch ·
sunset-portrait · portrait-bw · silhouette-night · sunrise-road · after-450 ·
badwater-aerial · vegan-friends.
Credit line required: "Photography: Mike Trimpe and others". No icons or SVG assets are used;
the only glyphs are the text arrows → and ↑.

## Accuracy rules (carry these into the build)

1. **He is no longer the world record holder.** Phil Gore holds it at 119 yards
   (Dead Cow Gully, June 2025). Copy must say he *twice set* the record and that the
   450-mile mark *stood until 2025*; the results table uses "WR then" with the footnote
   "WR = world record at the time". (A 123-yard 2026 mark by Dmitry Klimov was voided.)
2. **2014 Badwater time is `~23:53`** — from Wikipedia, not in UltraSignup. Keep the tilde.
3. Anything unverified is labelled on the page: partner status "to confirm", audience
   figures "TBC" / "Audience figures to confirm", fee band "On request".
4. **The enquiry address is a placeholder** (`hello@harveylewis.com`) on all four CTAs, and the
   footer carries a visible ember warning. Replace both before launch.

## Open items before launch

1. Real enquiry address or form endpoint.
2. Media-kit files: bio PDF, photo ZIP, results PDF, speaking one-sheet.
3. Partner logos + confirmed sponsor list; Instagram / YouTube / Strava numbers.
4. Per-image photographer credits.
5. Confirm dark vs the light `DESIGN.md` direction, then update `DESIGN.md` and `global.css`.

## Files

- `Harvey Lewis.dc.html` — the shipped dark direction. **Primary reference.**
- `Harvey Lewis Editorial.dc.html` — complete light/editorial alternative built to the repo's
  original `DESIGN.md` (white `#ffffff` / `#f6f5f3` bands, slate `#2b3640`, Bitter slab display,
  Inter body, same vermilion accent).
- `photos/` — the photography used, copied from `site/src/assets/photos/`.
- `HANDOFF.md` — condensed token + section→component map, also written to the project root.
- `github.md` — repo association and screen map.

## Suggested build order

1. Tokens into `global.css` (dark set above), fonts via `@fontsource` or the repo's existing setup.
2. `Hero.astro` → `Intro.astro` → `Pillars.astro` → `Quote.astro` → `PhotoBand.astro`.
3. `Results.astro` driven by `site/src/data/races.json` (selected rows + `place` + win flag).
4. `Speaking.astro`, `Partners.astro` — move `talks`, `speakingFacts`, `partners`, `reach`
   into `site/src/data/*.json`.
5. `MediaKit.astro`, `Contact.astro`, `Footer.astro`.
6. Astro `<Image />` for the photography (the hero source is 2736×1824; several others are 640×428
   — check each before relying on it full-bleed).
