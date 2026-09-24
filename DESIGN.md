# Design System

Captured from the built site: `site/src/styles/road.css` (shared system), `site/src/layouts/Base.astro` (chrome), and page-level styles.

## Theme

Death Valley highway materials. The site reads like a long magazine feature printed on road surfaces: asphalt and salt flat as the two grounds, the painted centre line as the only accent. Real results do the persuading through data graphics built from `races.json`; photography carries the emotion. Flat fills, painted-line rules, zero border-radius. Gradients stay banned (owner rule).

## Color

| Token | Value | Role |
|---|---|---|
| `--asphalt` | `#0e0e0e` | Primary ground. Matches the black of the hero night photograph so the image dissolves into the page. |
| `--asphalt-2` | `#1b1b1a` | Hover on dark buttons. |
| `--salt` | `#e7e6e2` | Light ground for reading and proof sections (`.salt`). Cool grey-white, never cream. |
| `--salt-2` | `#d9d8d2` | Fills on salt (Badwater elevation area). |
| `--line` | `#f2c230` | Road-line yellow. Records, wins, the primary action, current nav item, focus rings on dark. Also a full ground for closing sections (`.yellow`). |
| `--ink` / `--ink-dim` / `--ink-faint` | `#e7e6e2` at 100 / 70 / 50% | Text on asphalt. |
| `--rule` | ink at 16% | Hairlines on asphalt. |
| `--dark` / `--dark-dim` / `--dark-rule` | `#121211`, `#4b4a46`, dark at 18% | Text and rules on salt and yellow. |

Yellow never carries text on salt (contrast); on salt it appears as a filled marker or chip with dark text.

Rhythm: grounds alternate section to section (asphalt → salt → asphalt → salt → yellow close). Every page ends on asphalt footer.

## Typography

Two families, both self-hosted via Fontsource.

- **Big Shoulders** (variable, opsz + wght): display, labels, numerals, nav, buttons. Always uppercase.
  - `.display-1` clamp(60px, 10vw, 184px), weight 900, line-height 0.84
  - `.display-2` clamp(44px, 6.4vw, 104px), weight 800, line-height 0.9
  - `.display-3` clamp(32px, 3.4vw, 56px), weight 800
  - `.label` / `figcaption` 15px, weight 600, tracking 0.06em
  - Hero name on the homepage is the one exception to the scale: clamp(96px, min(17vw, 27svh), 330px).
- **Source Serif 4** (variable, opsz): reading text. Body clamp(18px, 1.15vw, 21px), line-height 1.55; `.lede` clamp(19px, 1.45vw, 25px); `.pull` quotes clamp(26px, 2.6vw, 44px), upright, weight 430. Prose measure 62ch.

No eyebrows or kickers above headings; headings carry themselves. Where a marker adds information it is a fact (a chapter's years on /story), not a section number.

## Layout

- Gutter `--gut: clamp(16px, 4vw, 64px)`; section rhythm `--sec: clamp(96px, 11vw, 190px)`.
- Full-bleed sections; content grids are 12-column or ratio-based per section, collapsing to one column at 900px.
- Lists are **ruled indexes** (`.index`): 2px top rule, 1px row rules. No cards, no boxed grids.
- Inner pages open with `.page-head` (display headline + lede) under the fixed bar.

## Components

- **Bar** (`Base.astro`): fixed; solid asphalt, or transparent over a full-bleed opening (`overlay` prop + `data-opening` element) until it scrolls away. Nav in Big Shoulders; current page underlined in yellow; yellow Enquire button. Under 900px: yellow Menu button opening a full-screen asphalt sheet with 44–64px links (Escape and link-follow close it).
- **Buttons**: `.btn-line` (yellow, dark text), `.btn-dark` (on yellow grounds), `.btn-lg` 60px tall. `.text-link` for secondary actions. One drawn arrow (`Arrow.astro`), rotated 45° for external links.
- **Close list** (`.close-list`): big Big Shoulders route names with description and arrow, on yellow. Used for "Work with Harvey" and the 404.
- **YearsChart**: every race since 1996 as a mark stacked by year; wins yellow, podiums salt, finishes outlined, DNFs hatched. Annotates the 2000–2005 gap. Pointer reads the race into a caption line; on /races marks link to archive rows.
- **Footer**: large stacked name, page and social links, photo credit.

## Motion

One authored moment per surface, all respecting `prefers-reduced-motion` (durations collapse globally):

- Homepage hero name rises in with a clip reveal on load.
- Backyard dial: 111 ticks, one ring per day, accrue to each step's yard count as the reader scrolls (sticky stage; exponential ease-out count).
- Badwater elevation line draws once on entering view.
- /races: jumping to a row flashes it yellow.
- Hovers: arrows nudge 4px, close-list rows shift 12px (transform only).

## Photography

Most supplied photos are 640px web exports and no originals exist. Full-screen treatments are reserved for the high-resolution few (night run, river run, backyard flags shirt, Badwater finish, salt-flat portrait, Architects of Destiny poster). 640px images are shown at or below 340 CSS px (photo strips, chapter photos). Credit Mike Trimpe where known.
