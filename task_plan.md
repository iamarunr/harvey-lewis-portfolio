# Harvey Lewis Research — Task Plan

## Project
Build a complete, source-cited research dossier for Harvey Lewis's portfolio website.
Output: `research/harvey-lewis/` with structured markdown + JSON files.

## 2-Action Rule
Save findings to file after every 2 web fetches. No accumulating in context.

---

## Phases

### Phase 1 — Anchor & Verify (≤10 sources)
- [x] Fetch Wikipedia page for Harvey Lewis — https://en.wikipedia.org/wiki/Harvey_Lewis_(ultrarunner)
- [x] Fetch official Facebook page — FAILED: generic results only, direct URL not found
- [x] Search for Instagram handle — FAILED: @harveylewis.ultrarunner returned JS wall, unconfirmed
- [x] Search for personal website — not found from public sources
- [x] Lock down: full legal name, DOB, hometown, school/role, city — ALL CONFIRMED
- [x] Write `data/socials.json` — done (handles marked unconfirmed)
- [x] Start `01-bio.md` (skeleton with confirmed facts) — done
- [x] Log phase summary to `progress.md` — done

**Confirmed anchor facts (Phase 1):**
- Full name: Harvey Lewis
- DOB: April 13, 1976 | Birthplace: Wheeling, WV | Childhood: Berea, OH
- Height: 6 ft / Weight: 169 lb
- School: SCPA (Cincinnati) — confirmed Cincinnati Enquirer July 24, 2014
- Current city: Cincinnati, Ohio | Diet: Vegan

### Phase 2 — Race Results / Palmarès — COMPLETE
- [x] Fetch Badwater official results archive — skipped (UltraSignup is comprehensive)
- [x] Fetch DUV — Harvey Lewis NOT in DUV database
- [x] Fetch UltraSignup API — `/service/events.svc/historybyname/Harvey/Lewis/` — 124 races, ID 1321450
- [x] Build `data/race-results.json` — done (124 races, 1996–2026)
- [x] Log phase summary to `progress.md`
**Note**: 2014 Badwater win time (23:53) not in UltraSignup — need to verify from another source in Phase 3.

### Phase 3 — Career-Defining Events — COMPLETE
- [x] Badwater 135 wins (2014, 2021) + all finishes — documented; 2014 exact time unverified
- [x] Big's Backyard Ultra 2021 (85 laps, 354 mi WR) + 2023 (108 laps, 450 mi WR)
- [x] Appalachian Trail 2018 — 49 days 14 hrs, missed FKT, raced Badwater 5 days later
- [x] IAU 24-Hour World Championships — 5 appearances (2012, 2013, 2015, 2017, 2019)
- [ ] Spartathlon — NOT FOUND in any source; likely unverified; flag as open question
- [x] Marathon des Sables 2016 — 250K, 109th, 34:47:44
- [x] Gobi Trail Ultra 2016 — 400K, 11th, 120:43:03
- [ ] Arrowhead 135 — Wikipedia says "tied for 2nd 2014"; not in UltraSignup; flag as open question
- [x] Dead Cow Gully — referenced as site of Phil Gore's 102-lap WR (June 2023), broken by Lewis at Big's 2023
- [x] Write `02-career-highlights.md` — done
- [x] Log phase summary to `progress.md`

### Phase 4 — Bio & Personal Narrative — COMPLETE (2026-05-08)
- [x] Childhood/origins (Berea OH, unhealthy diet, fast food, animals)
- [x] How he got into running (vegetarian 1996 → FANS Ultra 1996 same year)
- [x] Broken neck recovery (~2004, C4-C5, titanium, became faster after)
- [x] Teaching at SCPA in Over-the-Rhine (social studies/government, since 2006)
- [x] Run-commute habit (~2013-14, climate film promise, 3 mi/day, races bus)
- [x] Vegan/vegetarian lifestyle (1996 veg → 1998 vegan → slipped → 2016 fully vegan)
- [x] Training philosophy (100 mi/wk, mental focus, micro-goals, deep breathing)
- [x] Activism (Gandhi Salt March 2008, Selma 2009, Amelia Boynton Robinson)
- [x] Documentary *Like Harvey Like Son* (AT 2018, Harris Media, Mariemont Nov 2020)
- [x] 2020 World Record: Badwater Basin → Mt. Whitney (33:32, broke 29-yr Ulrich record)
- [x] Write full narrative `01-bio.md`
- [x] Log phase summary to `progress.md`

### Phase 5 — Voice & Quotes — COMPLETE (2026-05-08)
- [x] Mine No Meat Athlete podcast ep37 (show notes; audio members-only)
- [x] Mine Rich Roll ep658 (Jan 2022) + ep812 (Feb 2024) — show notes + themes
- [x] Mine Marathon Training Academy ep (Nov 2021) — show notes; audio members-only
- [x] Mine iRunFar interviews (2023 Big Dog's, 2021 Big Dog's, 2021 Badwater, Educator Effect)
- [x] Mine print interviews (CityBeat, WVXU, Cincinnati Enquirer, Great Vegan Athletes, Trail Running Mag)
- [x] 35+ verbatim quotes collected
- [x] Write `03-quotes.md` (10 themes: mental toughness, Big's, sleep, plant-based, origin, broken neck, teaching, run-commute, Badwater, small moments)
- [x] Log phase summary to `progress.md`

### Phase 6 — Media Inventory — COMPLETE (2026-05-08)
- [x] Documentary *Like Harvey Like Son* — full details (Harvey Lewis III, father Jr. 78yo, AT May 30 2018, Best Feature Woodbury Festival, Amazon Prime, Vimeo trailer)
- [x] YouTube videos — 7 confirmed URLs
- [x] Podcasts — 6 confirmed episodes (Rich Roll x2, NMA, MTA, Charity Miles, OwlTail index of 28 total)
- [x] Photo credits — 7 confirmed (Knipling, Trimpe, Outlaw, DiFrancesco)
- [x] Write `05-media.md`
- [x] Log phase summary to `progress.md`

### Phase 7 — Press Archive — COMPLETE (2026-05-08)
- [x] iRunFar — 4 articles (2024 Educator Effect, 2023 Big Dog's interview + results, 2021 Big Dog's, 2021 Badwater, 2018 TWIR)
- [x] Cincinnati CityBeat — 2 articles (Nov 2020 profile, documentary preview)
- [x] WVXU — 2014 Badwater win
- [x] Cincinnati Enquirer — 2020 world record, 2014 win (Jack Walsworth), 2018 AT, 1999 (archived)
- [x] Trail Running Magazine — 2 articles (hand fracture, 570km record)
- [x] Miriam Diaz Gilbert — 2023 interview
- [x] Runner's World / Outside / Ultrarunning Magazine — not found in research; flagged open
- [x] Write `04-press.md` (reverse-chronological 2024→1999)
- [x] Log phase summary to `progress.md`

### Phase 8 — Sponsors & Affiliations — COMPLETE (2026-05-08)
- [x] Current sponsors: Brooks Running, InsideTracker, Dream Recovery (sleep)
- [x] Historical: Athletic Greens (~2021)
- [x] Team USA — 5 IAU 24-Hour appearances (2012, 2013, 2015, 2017, 2019) — US record
- [x] Charities: Charity Miles, civil rights commemorative runs (2008 Gandhi, 2009 Selma)
- [x] Vegan advocacy: Viva!, Great Vegan Athletes, VegofWA, NMA
- [x] Crew network: Judd Poindexter (primary crew, MdS 2016), Harvey Lewis Jr. (father/AT 2018), Todd Anderson (Dream Recovery 2023)
- [x] RunQuest Travel — his running travel company
- [x] Write `06-sponsors-affiliations.md`
- [x] Log phase summary to `progress.md`

### Phase 9 — Cross-Reference & Fact-Check — COMPLETE (2026-05-08)
- [x] Key conflicts resolved: 2014 Badwater time (23:52 confirmed), IAU appearances (5 not 4), vegan timeline (two periods), Big's 2023 distance (450 not 454), teaching subjects (financial literacy + government)
- [x] Facts verified across ≥2 sources: 20+ anchor facts confirmed
- [x] Conflicts documented in `07-open-questions.md` Part A
- [x] Unverified flags documented in `07-open-questions.md` Part D

### Phase 10 — Open Questions & Final Review — COMPLETE (2026-05-08)
- [x] 10 open questions documented (broken neck exact year, Spartathlon, Arrowhead, family, moniker, gardening, current sponsorship, etc.)
- [x] Write `07-open-questions.md`
- [x] Write `README.md` (full index with story angles, source tiers, what's missing)
- [x] Final review of all files

## Current Phase
**ALL PHASES COMPLETE — 2026-05-08**

---

## Decisions & Notes
- Source priority: official race results → established running media → local Cincinnati press → his interviews/podcasts
- Skip: Reddit, forums, fan wikis, AI-generated summaries
- Public info only — no speculation on family/personal details not on record
- All claims must link to a source

## Current Phase
**Phase 5 — Voice & Quotes** (next)
- Rich Roll ep658 + ep812 indexed — need to mine transcript/quotes
- No Meat Athlete ep37 indexed — audio-only episode, show notes captured
- iRunFar interviews (2023 Big Dog's, 2021 Big Dog's, 2021 Badwater) — already indexed
- Marathon Training Academy episode — not yet fetched
- Aim for 30+ verbatim quotes grouped by theme
