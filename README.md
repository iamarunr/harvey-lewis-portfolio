# Harvey Lewis Portfolio

> Two-time Badwater 135 champion. Two-time Big's Backyard Ultra world record holder (450 miles / 108 hours). Full-time high school teacher in Cincinnati, Ohio.

This repository contains the complete research dossier, assets, design specifications, and source code for Harvey Lewis's portfolio website.

## Project Structure

- **[`site/`](site/)**: The Astro 5 static portfolio website.
  - Built with Vanilla CSS, responsive layout, and zero gradients/SaaS tropes.
  - Typography: Bitter Variable (slab serif), Inter Variable (body), and JetBrains Mono Variable (microlabels & data).
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
