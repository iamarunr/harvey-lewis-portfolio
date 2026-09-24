# Harvey Lewis Portfolio

> High school teacher in Cincinnati, Ohio. Two-time Badwater 135 champion. Set the Big's Backyard Ultra world record twice (2021, 2023: 450 miles / 108 hours).

This repository contains the complete research dossier, assets, design specifications, and source code for Harvey Lewis's portfolio website.

## Project Structure

- **[`site/`](site/)**: The Astro 5 static portfolio website.
  - Vanilla CSS on a shared system (`src/styles/road.css`, `src/layouts/Base.astro`); see [`DESIGN.md`](DESIGN.md).
  - Typography: Big Shoulders (display, labels, numerals) and Source Serif 4 (reading text).
  - Race numbers across the site are derived from `src/data/races.json` via `src/lib/races.ts`.
  - High-performance static build optimized for Cloudflare Pages.
- **[`research/`](research/)**: Full, source-cited research dossier covering biographical narrative, palmarès (124 races), 35+ verbatim quotes, media appearances, press archives, and sponsor affiliations.
- **[`Photos/`](Photos/)**: Original high-resolution photography credited to Mike Trimpe, Gareth Roberts, Keith Knipling, and courtesy of Harvey Lewis.
- **[`PRODUCT.md`](PRODUCT.md)**: Product strategy, target audiences, brand voice, and anti-references.
- **[`DESIGN.md`](DESIGN.md)**: Design system tokens, color palettes, typography scale, and layout guidelines.

## Quick Start (Running Locally)

```bash
# Navigate to the website directory
cd site

# Install dependencies
npm install

# Start the local development server
npm run dev

# Build for production
npm run build
```

The local development server runs at `http://localhost:4323/`.
