# Harvey Lewis Research — Progress Log

## Session: 2026-05-08

### Status: Phase 1 — Starting

---

## Phase Log

### Phase 1 — Anchor & Verify — COMPLETE (2026-05-08)

Confirmed all core identity facts from Wikipedia and iRunFar. Harvey Lewis: born April 13, 1976, Wheeling WV, grew up Berea OH, lives Cincinnati OH, teacher at SCPA, vegan. Two Badwater wins (2014: ~23:53, 2021: 25:50:23), two Big Dog's Backyard Ultra wins (2021: 85 laps/354 mi; 2023: 108 laps/450 mi world record), Team USA IAU 24-Hour 2012/2013/2014/2017. Social media handles not confirmed from public sources — Facebook, Instagram, personal website all unknown. Written: `data/socials.json`, `01-bio.md` skeleton. Dead links: WCPO article (404), PodiumRunner article (404).

**Sources consulted in Phase 1 (7):**
1. https://en.wikipedia.org/wiki/Harvey_Lewis_(ultrarunner)
2. https://www.irunfar.com/?s=Harvey+Lewis (search index)
3. https://www.irunfar.com/harvey-lewis-2023-big-dogs-backyard-ultra-interview
4. https://www.irunfar.com/2021-badwater-135-race-results
5. https://www.irunfar.com/harvey-lewis-is-the-last-person-standing-at-the-2021-big-dogs-backyard-ultra
6. https://www.irunfar.com/2023-big-dogs-backyard-ultra-results (indexed via search)
7. https://www.instagram.com/harveylewis.ultrarunner/ (JS wall — unconfirmed)

### Phase 2 — Race Results — COMPLETE (2026-05-08)

UltraSignup API (`/service/events.svc/historybyname/Harvey/Lewis/`) returned 124 races for Harvey Lewis (ID 1321450) spanning 1996–2026. DUV does not have Harvey Lewis in their database. Race results saved to `data/race-results.json`. Key findings: 9+ Badwater finishes (2 wins: 2021 confirmed, 2014 win NOT in UltraSignup — needs verification), 5 Big Dog's Backyard entries (2 wins: 2021 world record 85 laps, 2023 world record 108 laps), 5 IAU 24-Hour World Championship appearances. Career began at FANS Ultra 1996 (81.3 miles, 24th place at age ~20).

**Sources consulted in Phase 2:**
1. https://ultrasignup.com/service/events.svc/historybyname/Harvey/Lewis/ (API)
2. https://statistik.d-u-v.org/ (searched — Harvey Lewis not found)

### Phase 3 — Career-Defining Events — COMPLETE (2026-05-08)

Key findings: 2014 Badwater win confirmed (exact time unverified ~23:53); 2021 win at age 45 confirmed with full narrative (came back from 1hr down at mile 90). Two Big Dog's world records: 2021 (85 laps/354mi) and 2023 (108 laps/450mi). AT 2018: finished in 49d 14h, missed FKT, then raced Badwater 5 days later. IAU 24hr: 5 appearances, best 160.34mi (2019, 14th). Marathon des Sables 2016 (250K, 109th). Gobi Trail Ultra 2016 (400K, 11th). Spartathlon: NOT found in any source — flagged as unverified. Arrowhead 135: Wikipedia says "tied for 2nd 2014" but not in UltraSignup. Written: `02-career-highlights.md`.

**Sources consulted in Phase 3:**
1. https://www.irunfar.com/harvey-lewis-is-the-last-person-standing-at-the-2021-big-dogs-backyard-ultra
2. https://www.irunfar.com/2023-big-dogs-backyard-ultra-results
3. https://www.irunfar.com/harvey-lewis-2023-big-dogs-backyard-ultra-interview
4. https://www.irunfar.com/2021-badwater-135-race-results
5. https://www.irunfar.com/this-week-in-running-july-23-2018 (AT FKT attempt)
6. https://www.badwater.com/results-history/ (2014 DB link found; results JS-rendered)

### Phase 4 — Bio & Personal Narrative — COMPLETE (2026-05-08)

Full narrative biography written in `01-bio.md`. Key Phase 4 findings:
- Broken neck ~2004 — C4/C5 vertebrae rebuilt with titanium implants; made him faster. WVXU quote confirmed.
- SCPA teaching: social studies (government) since 2006. Run-commute started ~2013–14 after climate change film promise to students. Route: East Walnut Hills → Mt. Adams → Eden Park → riverside trail → downtown → SCPA (~3 mi each way).
- Vegan timeline: vegetarian 1996, briefly vegan 1998 college, slipped to dairy, fully vegan 2016. Motivated by mother's stroke at 54 (~1995).
- 2020 world record: Badwater Basin → Mt. Whitney summit in 33 hrs 32 min (Aug 11, 2020) — broke Marshall Ulrich's 1991 record.
- 2014 Badwater win time: **23:52** (Cincinnati Enquirer, most authoritative source).
- Activism: 2008 Gandhi Salt March (241 mi, India, earned grant); 2009 Selma→Montgomery (met Amelia Boynton Robinson, 99).
- Rich Roll Podcast: ep658 (Jan 2022) and ep812 (Feb 2024) both confirmed.
- Twitter: @harveylewisruns (confirmed via Rich Roll show notes).
- Flying Pig Marathon: every year since 1999 inception.
- Documentary *Like Harvey Like Son*: AT 2018, Harris Media Co.; premiered Mariemont Theatre Nov 2020.
- Dog: Charlie (rescued, runs long distances, eats vegan).
- Has visited 101 countries across 7 continents.
- Pre-run meal: granola + almond milk + chia seeds + dragon fruit.

**Sources consulted in Phase 4 (12 fetches):**
1. WebSearch: broken neck / SCPA search → confirmed WVXU, CityBeat, NMA links
2. WebSearch: No Meat Athlete podcast Harvey Lewis
3. CityBeat profile (Nov 2020): https://www.citybeat.com/cincinnati/a-look-inside-the-life-of-cincinnati-ultramarathon-runner-and-educator-harvey-lewis/Slideshow/12233155
4. WVXU (July 22, 2014): https://www.wvxu.org/sports/2014-07-22/scpa-teacher-wins-badwater-race
5. No Meat Athlete ep37: https://www.nomeatathlete.com/podcast/radio-37/
6. Viva! article: https://viva.org.uk/blog/vegan-ultrarunner-harvey-lewis-cant-be-stopped/ (indexed, limited content)
7. Great Vegan Athletes: https://www.greatveganathletes.com/harvey-lewis-ultramarathon-runner/
8. Veg Club Magazine: https://vegclubmagazine.com/... (empty page)
9. Rich Roll ep658 (Jan 2022): https://www.richroll.com/podcast/harvey-lewis-658/
10. Rich Roll ep812 (Feb 2024): https://richroll.com/podcast/harvey-lewis-812/
11. Cincinnati Enquirer (Aug 14, 2020): https://www.cincinnati.com/story/news/2020/08/14/cincinnati-runner-breaks-world-record-runs-lowest-highest-points-u-s/3373809001/
12. iRunFar Educator Effect (May 22, 2024): https://www.irunfar.com/the-educator-effect-teachers-in-ultrarunning

### Phase 5 — Voice & Quotes — COMPLETE (2026-05-08)

35 verbatim quotes compiled in `03-quotes.md` across 10 themes. Key quotes: broken neck ("became so much faster"), Big's mode ("powers that exist"), vegan origin (mother's stroke, McDonald's, vegetarian schoolmate), Honey Badger spirit animal (MTA), hand fracture poker game (Trail Running Mag), crewman Judd Poindexter dark-spot quote at 170 miles, "sequoia" student quote, run-commute racing the bus, "toughest finish line is the one right in front of you" (Rich Roll/iRunFar). Audio for NMA ep37, RRP ep658/812, MTA ep all members-only; show notes and attributed quotes captured.

**Sources consulted in Phase 5:** WVXU 2014, CityBeat Nov 2020, Cincinnati Enquirer Aug 2020, Trail Running Mag Oct 2021, Great Vegan Athletes 2021, iRunFar 2023 Big Dog's interview, iRunFar Educator Effect May 2024, Rich Roll ep658+812 show notes, NMA ep37 show notes, MTA episode show notes.

### Phases 6-8 — COMPLETE (2026-05-08)

**Phase 6 (Media)**: Written `05-media.md`. Documentary *Like Harvey Like Son* fully documented (Harvey III + Jr., May 30 2018 start, Best Feature Woodbury 2019, Amazon Prime). 7 YouTube URLs. 6 podcast episodes confirmed (OwlTail index lists 28 total appearances). 7 photo credits. Key find: Harvey's full name is Harvey Lewis **III**.

**Phase 7 (Press)**: Written `04-press.md`. 15+ articles catalogued reverse-chronologically 2024→1999. Key finds: Miriam Diaz Gilbert 2023 (teaches financial literacy + American government), Cincinnati Enquirer 2020 (33:32 world record), Trail Running Mag 2021 (broken hand, poker quote). Runner's World / Outside / Ultrarunning Magazine articles not located — flagged open.

**Phase 8 (Sponsors)**: Written `06-sponsors-affiliations.md`. Confirmed: Brooks Running (current, Charity Miles ep), InsideTracker (MTA ep), Dream Recovery / Todd Anderson (Big's 2023 sleep prep), Athletic Greens (historical). Crew: Judd Poindexter (primary, since MdS 2016), Harvey Lewis Jr. (AT 2018), Todd Anderson. Vegan affiliates: Viva!, Great Vegan Athletes, VegofWA, NMA. Civil rights runs (2008 Gandhi grant, 2009 Selma).

### Phases 9-10 — Cross-Reference & Open Questions — COMPLETE (2026-05-08)

**Phase 9**: Resolved 5 key conflicts: 2014 Badwater time = 23:52 (Enquirer > Wikipedia); IAU appearances = 5 not 4 (Wikipedia missing 2015/2019); vegan timeline = two periods (1998 college + 2016 recommit, not a contradiction); Big's 2023 = 450 mi not 454 (Charity Miles rounding error); teaching subjects = financial literacy + government (Miriam Diaz Gilbert 2023 > "social studies" umbrella terms). 20 facts verified across ≥2 sources.

**Phase 10**: 10 open questions documented (broken neck exact year, Spartathlon unverified, Arrowhead 135 unverified, family private, race "moniker" unnamed, gardening unconfirmed, current Brooks contract scope, teaching status post-2024, Kelly identity, gardening detail). README.md written with file index, 8 key story angles, source tier system, and what's missing.

**ALL FILES**:
- `01-bio.md` — full narrative biography (Harvey Lewis III, Harvey Lewis Jr., all life details with citations)
- `02-career-highlights.md` — career-defining races
- `03-quotes.md` — 35+ verbatim quotes, 10 themes
- `04-press.md` — 15+ press articles, reverse-chronological
- `05-media.md` — documentary, 7 YouTube videos, 6 podcast episodes, photo credits
- `06-sponsors-affiliations.md` — Brooks, InsideTracker, Dream Recovery, Team USA, RunQuest, Viva!, crew
- `07-open-questions.md` — conflicts resolved + 10 open questions + verification flags
- `README.md` — master index with story angles and source tiers
- `data/race-results.json` — 124 races (UltraSignup)
- `data/socials.json` — all handles confirmed

---

## Errors & Dead Links

- WCPO https://www.wcpo.com/sports/harvey-lewis-cspa-teacher-set-to-win-135-mile-badwater-ultra-worlds-toughest-foot-race → 404 (dead link, Phase 1)
- PodiumRunner https://www.podiumrunner.com/events/crazy-running-life-harvey-lewis/ → 404 (dead link, Phase 1)
- Veg Club Magazine https://vegclubmagazine.com/... → page loaded empty (Phase 4)
- badwater.com/results/ → 404 (wrong path; correct: /results-history/)

---

## Conflicts

*(Date/time/fact conflicts between sources logged here)*
