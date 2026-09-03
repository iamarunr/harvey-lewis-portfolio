# Harvey Lewis Research — Findings

## How to Use
This file accumulates raw findings before they're organized into the dossier files.
Saved after every 2 web fetches per the 2-Action Rule.

---

## Phase 1 — Anchor & Verify

### Batch 1 (fetches 1-4) — 2026-05-08

**Wikipedia**: Page exists at `https://en.wikipedia.org/wiki/Harvey_Lewis_(athlete)` — article title confirmed. Direct curl returns JS/HTML shell; need proper extraction.

**iRunFar**: Confirmed multiple articles exist:
- "A Different Mode: An Interview with Harvey Lewis After His Record-Breaking Win at the 2023 Big Dog's Backyard Ultra" — https://www.irunfar.com/?s=Harvey%20Lewis
- "2023 Big Dog's Backyard Ultra Results: Harvey Lewis Wins After 108 Hours, 450..." (title truncated)
- Feature image: https://s3.amazonaws.com/www.irunfar.com/wp-content/uploads/2023/11/09082201/Harvey-Lewis-2023-Big-Dogs-Backyard-ultra-feature.jpg — Photo credit: Keith Knipling

**Facebook**: Generic "People named Harvey Lewis" results page — his specific profile URL not yet confirmed. Needs direct URL.

**Badwater**: Results page curl returned empty — likely JS-rendered. Need direct fetch.

**Google search**: Blocked/JS-redirected.

### Errors / Dead Links (Batch 1)
- Wikipedia API `/rest_v1/page/summary/Harvey_Lewis_(athlete)` → 404
- Wikipedia `/wiki/Harvey_Lewis_(athlete)` → 404 (wrong title)
- curl on Google search → JS redirect wall
- curl on badwater.com/results → empty (JS-rendered)
- Facebook public profile search → generic, no specific profile found

### Batch 3 — Wikipedia deep search (2026-05-08)

**Confirmed from Wikipedia — Harvey Lewis (ultrarunner)**:
- Full name: Harvey Lewis
- Born: **April 13, 1976**
- Birthplace: Wheeling, West Virginia
- Childhood: Berea, Ohio
- Height: 6 ft (1.8 m); Weight: 169 lb (77 kg)
- Lives in: Cincinnati, Ohio
- Occupation: **High school teacher** (confirmed SCPA — Cincinnati Enquirer ref: "SCPA teacher finishes 1st in 135-mile ultramarathon" — Jack Walsworth, July 24, 2014)
- Diet: **Vegan** — plant-based diet for endurance and recovery

**Running Career (Wikipedia)**:
- Team USA — IAU 24 Hour World Championship: **2012, 2013, 2014, 2017**
- **2014 Badwater win**: just under 23 hours and 53 minutes
- **2014 Arrowhead 135**: tied for 2nd place
- **2023 Big Dog's Backyard Ultra**: 108 laps = 450 miles — broke Backyard Ultra world record

**Wikipedia References to pursue**:
- PodiumRunner: McCracken, Amanda (Aug 7, 2014) "The Crazy Running Life Of Harvey Lewis" — https://www.podiumrunner.com/events/crazy-running-life-harvey-lewis/
- Cincinnati Enquirer: "Finishing strong." May 10, 1999
- Cincinnati Enquirer: Walsworth, Jack. "SCPA teacher finishes 1st in 135-mile ultramarathon." July 24, 2014
- WCPO: "harvey-lewis-cspa-teacher-set-to-win-135-mile-badwater-ultra-worlds-toughest-foot-race"

**NOT found in Wikipedia**: Broken neck injury, Like Harvey Like Son documentary, Appalachian Trail, specific subject taught, run-commute, Big's Backyard 2021

### Batch 5 (fetches 13-14) — 2026-05-08

**Errors**:
- WCPO https://www.wcpo.com/sports/harvey-lewis-cspa-teacher-set-to-win-135-mile-badwater-ultra-worlds-toughest-foot-race → 404 (dead link)
- Instagram @harveylewis.ultrarunner → JS wall / auth wall (handle unconfirmed)

**Quotes captured from iRunFar 2023 Big Dog's interview (Sarah Brady, Nov 10, 2023)**:
- "I was continuously fueled by good vegan foods." — nutrition
- "There are powers that exist to push us beyond what seems reasonable." — mental toughness
- "There was a time where it was unfathomable that someone could make it four days on Big Dog's Backyard. Of course, even the idea of finishing a third day was once thought impossible." — perspective on the sport
- "since I won Big's, I can kind of get away with saying that whoever wins gets an automatic entry into the Barkley Marathons. That would definitely have to be the thing that's going to keep me up some nights." — future goals
- Sleep strategy: 10 deep breaths to calm nervous system; worked with Dream Recovery (Todd Anderson)
- "The night before the race this year, I had one of the three worst nights of sleep I've ever had before a race. I could only fall asleep for three hours, I was too wound up mentally."

**Social media status**: Still unconfirmed from public sources. Need to try alternative handles.

**Phase 1 status**: Core anchor facts confirmed. Moving to write dossier files.

### Batch 4 (fetches 11-12) — 2026-05-08

**iRunFar — 2021 Big Dog's Backyard Ultra (Oct 19, 2021)**:
- **85 laps** = 354.16 miles (85 × 4.166667 mi), world record at the time
- Dates: October 16–19, 2021, Bell Buckle, Tennessee
- Harvey Lewis had **twice previously competed** at Big's and gotten the "assist" (runner-up) both times
- Previously lasted 67 loops
- Final 3: Terumichi Morishita (Japan), Harvey Lewis (Cincinnati, OH), Chris Roberts (Kirkwood, MO)
- Lewis city confirmed: **Cincinnati, Ohio**
- Photo: David Kluthos; final 3 photo courtesy: Tracey Outlaw
- 35 starters; Courtney Dauwalter and Jeff Guterl among notable early finishers

**iRunFar — 2021 Badwater 135 results**:
- **Harvey Lewis: 1st place — 25:50:23** (men's)
- 2nd: Igor Gotsuliak (Ukraine) — 26:35:08
- 3rd: Sergey Ionov (Russia) — 26:49:06
- Was behind Gotsuliak by ~1 hour at mile 90; overtook by mile 122
- Age 45 at time of win; 10th finish, 5th podium, 2nd overall win
- Photo credit: "Photo: Badwater 135"
- 2021 women's winner: Sally McRae — 30:48:47

**Errors (Batch 4)**:
- PodiumRunner article https://www.podiumrunner.com/events/crazy-running-life-harvey-lewis/ → 404

### Batch 2 (fetches 5-8) — 2026-05-08

**Wikipedia disambiguation page** confirms:
- Full article URL: `https://en.wikipedia.org/wiki/Harvey_Lewis_(ultrarunner)`
- Born: **1976** (confirmed)
- Description: "American ultrarunner"

**iRunFar — 2023 Big Dog's Backyard Ultra interview** (by Sarah Brady, Nov 10, 2023):
- URL: https://www.irunfar.com/harvey-lewis-2023-big-dogs-backyard-ultra-interview
- **2023 Big Dog's Backyard Ultra**: October 21–25, 2023, Bell Buckle, Tennessee
- Distance: **450 miles in 108 hours** — surpassed previous backyard world record
- Format: 4.166667-mile loops starting every hour (trail during day, road at night)
- Photo credit: Keith Knipling
- Partial quote captured: Harvey Lewis says "I just feel my ribs are a little bruised, but other than that I feel really great and mentally I'm really excited about the possibilities that Big's opened up in terms of pushing even further limits."

**iRunFar article index** (from search results):
1. "A Different Mode: An Interview with Harvey Lewis After His Record-Breaking Win at the 2023 Big Dog's Backyard Ultra" — Nov 10, 2023 — https://www.irunfar.com/harvey-lewis-2023-big-dogs-backyard-ultra-interview
2. "2023 Big Dog's Backyard Ultra Results: Harvey Lewis Wins After 108 Hours, 450 Miles of Running" — Oct 25, 2023 — https://www.irunfar.com/2023-big-dogs-backyard-ultra-results
3. "Harvey Lewis is the Last Person Standing at the 2021 Big Dog's Backyard Ultra" — Oct 19, 2021 — https://www.irunfar.com/harvey-lewis-is-the-last-person-standing-at-the-2021-big-dogs-backyard-ultra
4. "2021 Badwater 135 Results: McRae Wins First Women's Title, Lewis Gains Second Men's Win" — July 21, 2021 — https://www.irunfar.com/2021-badwater-135-race-results

---

## Phase 2 — Race Results

### Batch 6 (fetches 15-18) — 2026-05-08

**Errors**:
- https://www.badwater.com/results/ → 404 (wrong path)
- https://www.badwater.com/results/2024-badwater-135-results/ → 404
- DUV https://statistik.d-u-v.org/getresultsadv.php?... → 404 (query params don't work as GET)

**Badwater homepage confirms**:
- Results & History at: https://www.badwater.com/results-history/
- Hall of Fame at: https://www.badwater.com/results-history/badwater-hall-of-fame/

**DUV homepage confirms**:
- Correct base URL: https://statistik.d-u-v.org/
- Has "Search for person" feature — form submits to `searchrunner.php` (GET)
- Search returned no results for "Harvey Lewis" — he may not be in DUV database

### Batch 7 — UltraSignup Full Extract — 2026-05-08

**UltraSignup API discovered**: `/service/events.svc/historybyname/{first}/{last}/`
- Harvey Lewis profile: ID 1321450, Age 50, TrophyCount 87, **124 races** (1996–2026)
- Second "Harvey Lewis" profile (ID 2423512) is a different person — confirmed irrelevant

**Full race list saved to**: `data/race-results.json`

**Key highlights extracted**:

**Badwater 135** (9 finishes + 2 DNFs):
- 2014: 23:?? — 1st overall (Wikipedia says "just under 23:53" — need to verify exact time)
- 2021: 25:50:23 — 1st overall ✓
- 2016: 23:40:52 — 2nd overall
- 2013: 25:49:50 — 4th overall
- 2012: 26:15:31 — 4th overall
- 2019: 26:11:18 — 3rd overall (2nd gender)
- 2017: 26:45:59 — 3rd overall
- 2022: 27:16:35 — 4th overall (3rd gender)
- 2023: 27:06:49 — 5th overall (3rd gender)
- 2024: 36:41:22 — 27th overall
- 2025: 26:17:01 — 7th overall
- 2015: 39:12:22 — 48th overall (likely DNF or difficult year)
- 2018: 38:55:30 — 38th overall
- 2011: 30:08:03 — 11th overall
- **Note**: 2014 Badwater result NOT showing in UltraSignup — need alternate source

**Big Dog's Backyard Ultra**:
- 2017: 58 laps — 2nd overall
- 2018: 4 laps — 66th overall (early drop)
- 2021: 85 laps (354.16 mi) — 1st overall ✓ (world record at time)
- 2023: 108 laps (450 mi) — 1st overall ✓ (world record)
- 2024: 316.66 miles — 4th overall

**IAU 24 Hour World Championship**:
- 2012 Katowice: 148.62 mi — 22nd overall
- 2013 Steenbergen: 116.54 mi — 145th overall
- 2015 Turin: 158.39 mi — 9th overall
- 2017 Belfast: 144.19 mi — 48th overall
- 2019 Brive-la-Gaillarde: 160.34 mi — 14th overall

**Other notable races**:
- Marathon des Sables 2016 (250K): 34:47:44 — 109th
- Ultra Trail Gobi Race 2016 (400K): 120:43:03 — 11th
- Barkley Marathons 2022: 20 Miler — 4th (loop finish)
- Barkley Marathons 2023: 20 Miler — 4th (loop finish)
- Australian Backyard Masters 2023: 374.19 mi — 3rd
- Western States 2024: 19:21:46 — 40th overall
- Bigfoot 200 2024: 50:32:58 — 3rd overall
- Bigfoot 200 2025: 65:22:57 — 19th overall
- Burning River 100 2020: 17:48:43 — 1st overall
- Burning River 100 2010: 17:17:37 — 7th overall
- Superior Fall 100 2021: 22:22:44 — 2nd overall
- Rocky Raccoon 100 2011: 17:34:49 — 12th overall
- Tunnel Hill 100 2015: 14:53:21 — 2nd overall
- Desert Solstice 100 2020: 16:20:10 — 13th overall
- FANS 24hr 2012: 142.86 mi — 1st; 2022: 148.68 mi — 1st; 2021: 124.9 mi — 1st
- NorthCoast 24hr: Won 2013 (150.58 mi), 2015 (157.90 mi), 2017 (142.03 mi), 2019 (130.77 mi); 2nd 2014
- FASTtrack 24hr 2018: 153.49 mi — 1st
- Dawn 2 Dusk 2 Dawn 24hr 2023: 137.24 mi — 1st; 2019: 156.34 mi — 2nd
- Ohio's Backyard Ultra 2021: 229.16 mi — 1st; 2025: 208.33 mi — 1st
- South Carolina 24hr 2014: 154.25 mi — 1st
- Mohican 100 2016: 17:52:05 — 2nd
- Canadian Death Race 125K 2023: 14:41:33 — 4th
- Sulphur Springs 160K 2010: 17:12:37 — 1st
- JFK 50 Miler 2012: 6:54:14 — 27th
- Lookout Mountain 50 Miler 2014: 8:26:41 — 8th

**FANS Ultra history** (started 1996):
- 1996: 81.3 mi — 24th; 1997: 92.4 mi — 14th; 1998: 99.9 mi — 15th; 1999: 86 mi — 22nd
- 2006: 111.21 mi — 7th; 2012: 142.86 mi — 1st; 2021: 124.9 mi — 1st; 2022: 148.68 mi — 1st; 2023: 137.24 mi — 1st

**DUV Status**: Harvey Lewis does NOT appear in DUV database. UltraSignup is the complete source.

---

## Phase 3 — Career Events

*(findings logged here)*

---

## Phase 4 — Bio / Personal

### Batch 13 (fetches 11-12 of Phase 4) — 2026-05-08

**From Cincinnati Enquirer Aug 14, 2020 — https://www.cincinnati.com/story/news/2020/08/14/...**:
- **2020 World Record (Badwater Basin → Mt. Whitney summit)**:
  - Date: Tuesday, Aug 11, 2020 (implied from article Aug 14 "last Tuesday")
  - Time: **33 hours 32 minutes** (broke Marshall Ulrich's 1991 record of 33:54)
  - Harvey was 44 years old
  - Park officials couldn't officially endorse the run — permission granted only 2 weeks before
  - Quote: "They [the park officials] couldn't officially endorse what I was doing. But they also didn't, like, say that, 'Oh, that's illegal' or something."
  - At summit: ~29°F — exhausted, rested less than 10 minutes with support team
  - Quote: "Imagine the most tired you've ever been in the Flying Pig, and then you're on top of a mountain where it's 29 degrees and you have to get yourself down."
  - Training target was originally Badwater 2020 — cancelled due to COVID
- **2014 Badwater win time CONFIRMED**: "23 hours and 52 minutes" (Cincinnati Enquirer direct source)
  - Note: Wikipedia says "just under 23 hours and 53 minutes" — Enquirer is more authoritative: **23:52**
- Had run Badwater **9 times** by August 2020
- Death Valley visits: **14 times** as of August 2020
- **Flying Pig Marathon streak**: Run every Flying Pig Marathon since the race's inception — 21 years as of 2019 photo caption = every year since **1999** (Flying Pig started 1999)
- AT 2018: "placing him in the top 10 for fastest journeys through that terrain" — averaged over 42 miles per day
- Quote: "No doctor would ever tell you to run 50 miles a day." (joking reference to AT average pace)

**From iRunFar "Educator Effect" (May 22, 2024, Robbie Harms)**:
- **Run-commute**: Now described as "a decade-long habit" (from May 2024 = since ~2014) — consistent with CityBeat "7 years ago" from 2020
- Backpack description: "the size of a mini-fridge" — carries laptop, clothes, food
- Races his bus on some mornings when students are aboard
- Quote: "That's a great opportunity to show them the benefits of: I'm 47, and … I'm racing a bus? What the hell is going on here?"
- Confirms: teaches **high school social studies** ✓
- Quote on teacher-runner identity: "The ultimate common denominator is this desire to always improve ourselves."
- Interview context: March 2024, less than a week before 2024 Barkley Marathons attempt
- Planning Western States 100 in June 2024 (completed — UltraSignup: 19:21:46, 40th)

### Batch 12 (fetches 9-10 of Phase 4 — Rich Roll eps) — 2026-05-08

**From Rich Roll Podcast ep658 (Jan 31, 2022) — https://www.richroll.com/podcast/harvey-lewis-658/**:
- Episode title: "Ultra Phenom Harvey Lewis On Finding Your 'Why', Nirvana Moments & Winning 300+ Mile Races"
- PULL QUOTE: "The toughest finish line is the one right in front of you."
- Stats at recording: 23 wins across 76 races; 101 countries across seven continents
- YouTube video: https://www.youtube.com/watch?v=X2JkDdmEIR8
- Show notes links:
  - Instagram: @harveylewisultrarunner ✓ CONFIRMED
  - Twitter: @harveylewisruns ✓ CONFIRMED (new)
  - Facebook: facebook.com/harveylewisultrarunner ✓ CONFIRMED
  - YouTube "A day with Harvey Lewis": https://www.youtube.com/watch?v=yvkm8FvDTDU

**From Rich Roll Podcast ep812 (Feb 8, 2024) — https://richroll.com/podcast/harvey-lewis-812/**:
- Episode title: "Harvey Lewis: The 47-Year-Old High School Teacher Who Ran 450 Miles and Broke a World Record"
- PULL QUOTE: "We are all capable of incredible feats. No matter your pursuits, we can all go so much further than we think."
- YouTube video: https://www.youtube.com/watch?v=S3LT2XfyBdo
- Harvey uses a "moniker" during races for cognitive/mental ingenuity — specific name not revealed in show notes

**From Wikipedia — Activism section** (NEW — missed in Phase 1):
- **2008**: Earned a grant to retrace Gandhi's 241-mile Salt March (Harijan Ashram, Ahmedabad → Dandi coastal city, Gujarat, India)
- **2009**: Retraced MLK's Selma to Montgomery march (54 miles, Alabama)
- After 2009 run: met 99-year-old **Amelia Boynton Robinson** (civil rights icon); she said: "I believe God kept me alive 99 years so I can share my story with young people."

**2020 WORLD RECORD — Badwater Basin to Mt. Whitney (NEW)**:
- August 2020: Harvey broke 29-year-old record running from Badwater Basin (lowest point in continental US, -282 ft) to summit of Mt. Whitney (highest point in contiguous US, 14,505 ft)
- Cincinnati Enquirer article (Aug 14, 2020): "'Everything is about the mental strength.' Local runner breaks 29-year-old world record"
- URL: https://www.cincinnati.com/story/news/2020/08/14/cincinnati-runner-breaks-world-record-runs-lowest-highest-points-u-s/3373809001/
- This was just 7 days before Big's Backyard 2020 (October) — back-to-back efforts

**RunQuest Travel**:
- Harvey's personal running travel website: www.runquesttravel.com
- Featured in Marathon Training Academy episode show notes as "website for Harvey Lewis"

**New iRunFar article to fetch**:
- "The Educator Effect: Teachers in Ultrarunning" (May 22, 2024, by Robbie Harms)
- URL: https://www.irunfar.com/the-educator-effect-teachers-in-ultrarunning

**New Social Media (FULLY CONFIRMED)**:
- Instagram: @harveylewisultrarunner
- Twitter: @harveylewisruns
- Facebook: facebook.com/harveylewisultrarunner

### Batch 11 (fetches 7-8 of Phase 4) — 2026-05-08

**From Great Vegan Athletes — https://www.greatveganathletes.com/harvey-lewis-ultramarathon-runner/**:

**CHILDHOOD / ORIGIN STORY (verbatim quotes)**:
- "Back in High school I ate what was in my culture. My Mom was a busy nurse, she didn't have a lot of time so we ate a lot of fast food. Meals were heavier on meat. I was unhealthy overall as kid, I could grab layers of fat around my stomach, and I always had irregularity using the rest room. I had heartburn, challenges like that."
- "I would go to the line in McDonalds, I was dissociated about what I was eating and where it came from."
- "I always liked animals a lot. I explored Pennsylvania, I saw all kinds of animals, even saw a black bear occasionally."
- "I loved animals, my cat, my dog, my fish. But I didn't think anything and would just grab something from McDonalds. Something was picking at me."
- "At my school there was one student who was vegetarian and I said to her 'I'm going to be vegetarian'. So I went to the lunch line and there were no options."
- "When I was 19 my mother had a stroke. She was 54 years old, a nurse, and we had no family history. The nutrition was a big element that we could have done differently." [truncated at source]
- "I also had some exposure early on in the ultra community from vegetarians too. I think Yiannis Kouros was vegan at that time."

**VEGAN TIMELINE (corrected from GVA)**:
- High school: omnivore (fast food, unhealthy)
- Age 19 (~1995): Mother had stroke at 54 — diet rethink begins
- Also ~1995: A vegetarian student at school sparked decision to try vegetarian
- 1996: Became vegetarian; also ran first ultra (FANS 1996, 81.3 mi) — consistent
- 1998: "I went full vegan through the remainder of college in 1998" — then slipped back to dairy/cheese when traveling
- 2016: Re-committed to full veganism

**RECOVERY / VEGAN PERFORMANCE QUOTES**:
- "Recovery time and the ability for the body to rebalance is a massive benefit."
- "I did a 24 hour race in September and did a 100 mile trail race just 13 days later. I won the 24 race and came second at the 100 mile race. That was only five weeks before the Big Dog Ultra. Just having that quick recovery!"
- "Last year I got the course record on the 146 mile route at Badwater and two weeks later I ran the biggest 100 mile race at Ohio and I won that race. It shows you how quickly the body can recover."
- "Also during the race time nutrition is huge. Race fuel doesn't make me sick. I eat something big and don't get sick. Other people are eating meat and dairy and it just doesn't process. You can process more calories at a quicker pace with plant foods."
- "The possibilities that lie out there in 10, 20 30 years for dealing with things like climate change, health, aging population, this is huge – and it's a cheap fix. This is a very inexpensive way of making a dramatic difference."

**RACE NUTRITION (verbatim)**:
- "I love squeezable chia seed fruit, miso soup, foods with sodium and fats, I like variety. I also drink coconut water and Aloe juice. Beans and rice is really nice. Cooked with spices it's perfect."
- "I love different ethnic foods. Bean burritos, stir fry, quinoa and vegetables, soups, as long as it's vegan I'm happy to have it."

**PERSONAL DETAILS**:
- Dog: rescued dog named **Charlie** — runs with Harvey on long runs and eats vegan
- Friend: spends time with Mike Fremont (centenarian vegan runner)
- 24-hour PB: 160.6 miles per GVA (UltraSignup shows 160.34 — slight discrepancy to note)
- First 24-hour race distance: 81.25 miles (consistent with FANS 1996 UltraSignup: 81.3 mi)
- 2021 future goals: Barkley Marathons ("My big target now is the Barkley Marathons") — he's done the 20-miler in 2022 & 2023

**US RECORD**: Most appearances on US 24-hour national team (5 — more than any other man or woman)

**Veg Club Magazine**: page loaded empty — no content indexed.

### Batch 10 (fetches 5-6 of Phase 4) — 2026-05-08

**From CityBeat (more from search)**:
- Run-commute distance: **~3 miles each way**; on the way home often adds 5 miles (runs to Kentucky and back)
- Route stop: Washington Park (where he sees students before school)
- Quote on run-commute: "It's about three miles each way, so it's not a super long distance for me. I just carry my things in my backpack and it's really pretty easy to manage. Oftentimes on my way home, [I'll] run over to Kentucky and back and add on an extra five miles to that normal route."
- **Mental approach / training philosophy**: "The toughest finish line to get to is the one that's in front of you."
  - Techniques: look forward to next small reward at end of each loop — a bit of food, or 2 minutes to lie down before getting back up
  - "It makes you appreciate what you have in life, because after you finish, a meal never tasted so good."
- **Gear mindset (Big's Backyard)**: multiple shoes, socks, shirts, hats + food, energy bars, drink mixes; but insists key to winning is not the body — it's the mind
- **2017 Big Backyard Ultra**: 58 loops / 242 miles — 2nd place (consistent with UltraSignup data)
- **RunQuest**: Affiliated as running travel guide — mentioned in No Meat Athlete podcast context

**From NMA podcast ep37 (indexed summary)**:
- Harvey described as "vegetarian" in 2014 (fully vegan transition came 2016)
- Won 2014 Badwater by 50 minutes — his 4th start (2011, 2012, 2013, 2014)
- Topics confirmed: heat training methods, visualization/mind-focusing, race-day nutrition

**Viva! article indexed** — need to search for specific bio content.

### Batch 9 (fetches 3-4 of Phase 4) — 2026-05-08

**From WVXU (July 22, 2014) — https://www.wvxu.org/sports/2014-07-22/scpa-teacher-wins-badwater-race**:
- Broken neck confirmed, 10 years before 2014 Badwater win (~2004)
- VERBATIM QUOTE (broken neck): "I was fortunate to survive, and after that event I actually have become so much faster. So it's kind of a neat thing; I try to encourage people not to put mental limitations on their abilities."
- VERBATIM QUOTE (win reaction): "It feels like almost a dream, especially because it's something that's been literally a dream for me to accomplish, and it's just a phenomenal feeling."
- Harvey Lewis age at 2014 Badwater win: 38 years old

**From CityBeat profile (Nov 2020) — https://www.citybeat.com/cincinnati/a-look-inside-the-life-of-cincinnati-ultramarathon-runner-and-educator-harvey-lewis/Slideshow/12233155**:
- **Run-commute origin**: ~7 years before 2020 (~2013) — screened a film in his *government class* about climate change and rising sea levels, then promised his students he would stop driving to work. Has been commuting by running ever since.
  - NOTE: "government class" — may teach government within social studies curriculum
- **Run-commute route**: East Walnut Hills (home) → Mount Adams → Eden Park (sunrise view) → riverside trail → downtown cobblestone alleyways → SCPA
- **Vegan motivation**: Mother had a stroke → studied diet/health impact → moved toward plant-based foods
  - Quote: "we would do a lot better if we move toward more plant-based foods for the benefit of curbing the No. 1 killer (diseases) in America."
- **Pre-run meal**: bowl of granola with almond milk, topped with chia seeds and dragon fruit
- **Documentary**: "Like Harvey Like Son" — 2018 AT run, collaborated with Harris Media Company
  - Website: www.likeharveylikeson.com
  - Screened Nov 10 & 12, 2020 at Mariemont Theatre (Cincinnati); streaming release came after
  - AT: 2,190 miles in 49 days
- **Oct 2020**: Big's Backyard Ultra — ran 278 miles (67-loop result, per UltraSignup)
- **Photo credit for CityBeat article**: Vincent DiFrancesco
- **Closing quote/theme**: Lewis "relishes the joys, the challenges, and the peace that running brings to his life, while never forgetting the streets of the city he calls home."

**From No Meat Athlete podcast search — https://www.nomeatathlete.com/podcast/radio-37/**:
- Harvey Lewis won 2014 Badwater by 50 minutes, in his FOURTH attempt (not first — this corrects the phrase "his fourth time")
  - Wait: this says "fourth time taking on the iconic race" — let me check against UltraSignup which shows 2011, 2012, 2013, 2014 = 4th start, 1st win ✓
- Training mileage: **averaged 100 miles per week** for Badwater prep (vs 140+ mi/week for other elites — notably conservative)
- Podcast topics: Badwater appeal, heat training, visualization/mind-focusing, race-day nutrition, RunQuest and international running travel

### Batch 8 (fetches 1-2 of Phase 4) — 2026-05-08

**Broken neck injury (CONFIRMED)**:
- Suffered broken neck ~2004 (10 years before 2014 Badwater win)
- Neurosurgeons rebuilt C4-C5 vertebrae with titanium implants
- Became faster after recovery — extraordinary comeback story
- Source: CityBeat profile (https://www.citybeat.com/cincinnati/a-look-inside-the-life-of-cincinnati-ultramarathon-runner-and-educator-harvey-lewis/Slideshow/12233155) via WebSearch

**SCPA teaching (CONFIRMED)**:
- Subject: Social Studies (confirmed via WebSearch from CityBeat)
- Started teaching at SCPA: 2006 (19 years as of 2024)
- Location: Over-the-Rhine, Cincinnati

**Vegan timeline (CONFIRMED)**:
- Became vegetarian: 1996
- Went fully vegan: 2016
- Key quote: "It's the single most important ingredient to my longevity in the sport."
- Source: No Meat Athlete podcast (https://www.nomeatathlete.com/podcast/radio-37/)

**Facebook confirmed**:
- URL: https://www.facebook.com/harveylewisultrarunner/ (CONFIRMED — was unknown in Phase 1)

**New sources to fetch in Phase 4**:
1. CityBeat profile: https://www.citybeat.com/cincinnati/a-look-inside-the-life-of-cincinnati-ultramarathon-runner-and-educator-harvey-lewis/Slideshow/12233155
2. CityBeat documentary article: https://www.citybeat.com/arts/cincinnati-ultramarathon-runner-and-scpa-teacher-harvey-lewis-is-topic-of-new-athletic-documentary-like-harvey-like-son-12169662/
3. WVXU: https://www.wvxu.org/sports/2014-07-22/scpa-teacher-wins-badwater-race
4. No Meat Athlete podcast: https://www.nomeatathlete.com/podcast/radio-37/
5. Viva! article: https://viva.org.uk/blog/vegan-ultrarunner-harvey-lewis-cant-be-stopped/
6. Great Vegan Athletes: https://www.greatveganathletes.com/harvey-lewis-ultramarathon-runner/
7. Veg Club Magazine: https://vegclubmagazine.com/article/running-on-plants-harvey-lewis-on-ultra-endurance-veganism-and-inspiring-change
8. Necessary Entrepreneur podcast: https://www.thenecessaryentrepreneur.com/30-harvey-lewis-ultrarunner/
9. WCPO 2021: https://www.wcpo.com/news/local-news/hamilton-county/cincinnati/cps-teacher-wins-three-day-non-stop-ultra-race

---

## Phase 5 — Quotes

### Batch 14 (fetches 13-14 of Phase 5) — 2026-05-08

**From Marathon Training Academy ep (Nov 4, 2021) — https://www.marathontrainingacademy.com/harvey-lewis**:
- Audio is members-only; show notes captured
- Got his start in endurance running as a **teenager**
- Took **five years to break 5 hours in the marathon** (slow marathon start → ultra convert)
- **SPIRIT ANIMAL**: Harvey chooses a spirit animal at every race. For Big's 2021 → **The Honey Badger**

**From Trail Running Magazine / Canadian Running — https://runningmagazine.ca/trail-running/harvey-lewis-ran-final-few-yards-at-bigs-with-a-hand-fracture/**:
- Ran final few loops at Big's 2021 with a **broken right hand** (fourth metacarpal, clean fracture) — fell on the course
- Did NOT tell crew or other runners until after winning
- VERBATIM QUOTE: "It's kind of like a poker game. You don't necessarily want to show your cards."
- Ran a 5-mile pumpkin festival race FOUR DAYS later ("casually")
- Ran a mile before going to the ER (to maintain daily run streak — started 2019)
- **Crewman: Judd Poindexter** (met at Marathon des Sables 2016; long-term partnership)
- VERBATIM QUOTE (low at 170 miles): "I let him know, I say it quietly, 'I'm working through something here.' He'd give me a suggestion or a positive statement. About 170 miles in, I was in a dark spot, and he's like, just imagine you're going out for a run to work every time you do that nighttime loop. That was golden – I could keep doing that forever."
- Run-commute confirmed: 5 km each way

**From iRunFar Educator Effect (May 2024) — KEY PASSAGE** [dedication]:
- After winning 2023 Big's (108 laps, 450 miles, finishing Wednesday ~7 p.m.):
  - Slept in a tent at the race site
  - Left around 3 p.m. Thursday
  - Arrived back in Ohio late Thursday night
  - **Friday was a school day**
  - Less than 48 hours after finishing 450 miles, Harvey woke up, strapped on his giant backpack, and ran to school
  - "He had to go teach."
- Also from iRunFar Educator:
  - "A sequoia," Lewis calls each student, "with so much potential in front of you."
  - Lewis "runs up the stairs at his school and gives his students nutrition advice during a 'Tuesday health tip'"
  - QUOTE: "They just see that putting a lot of energy and intention and effort toward something, that you can really grow, and so you're not limited by whatever might limit us in our lives."

---

## Phase 6 — Media

### Batch 15 (fetches 15-16 of Phase 6) — 2026-05-08

**From Like Harvey Like Son website — https://www.likeharveylikeson.com/**:
- **FULL NAME**: Harvey Lewis **III** (father is Harvey Lewis Jr. — film title has double meaning)
- AT start date: **May 30, 2018**
- Father's age during AT: **78 years old** (crew chief)
- Parents divorced early in Harvey's youth — film is partly a father-son reconciliation
- Destination: **Mount Katahdin** (Maine, northern terminus of AT)
- Trailer: https://vimeo.com/383788991
- Director: **Rudy Harris Jr.**
- Producers: TJ Bitter, Mike Trimpe, Rudy Harris Jr.
- Editor: Lindsey Michels
- Executive Producer: Edward Wimmer IV
- Co-Executive Producers: Erin Eimer, Rudy Harris Jr., Tammi Harris
- **Award**: Best Feature Film — Woodbury Film Festival, Salt Lake City, UT (2019)
- Official Selection: Northeast Mountain Film Festival (Dillard, GA)
- Official Selection: Hunter Mountain Film Festival (Hunter, NY)
- **Streaming**: Available on Amazon Prime Video
- WVXU radio interview with Harvey + director Rudy Harris

**YouTube videos confirmed**:
1. "An Interview With Harvey Lewis - We Can Choose To Be Healthier Runners and People" — https://www.youtube.com/watch?v=2gPozkus-QM
2. "Interview with Harvey Lewis" — https://www.youtube.com/watch?v=DMiqzMM0_h8
3. "24 HOUR RACE CRASH COURSE [ULTRA RUNNER HARVEY LEWIS]" — https://www.youtube.com/watch?v=d2HMoa_vmyE (Sept 2019)
4. "Top Mindsets Every Ultrarunner Needs with Harvey Lewis" (Shorts, May 2025) — https://www.youtube.com/shorts/-BitmQ2dL7U
5. "A day with Harvey Lewis" — https://www.youtube.com/watch?v=yvkm8FvDTDU (Rich Roll production)
6. Rich Roll ep658 YouTube: https://www.youtube.com/watch?v=X2JkDdmEIR8
7. Rich Roll ep812 YouTube: https://www.youtube.com/watch?v=S3LT2XfyBdo

**New sources to follow up**:
- Miriam Diaz Gilbert interview: https://www.miriamdiazgilbert.com/post/harvey-lewis-on-racing-his-plant-based-diet-gardening-and-his-documentary-like-harvey-like-son (mentions gardening — new personal detail)
- Charity Miles: https://charitymiles.org/harvey-lewis/ (charity/sponsor angle)

### Batch 16 (fetches 17-18 of Phase 6) — 2026-05-08

**From Miriam Diaz Gilbert interview — https://www.miriamdiazgilbert.com/...**:
- **SUBJECTS TAUGHT CONFIRMED**: financial literacy AND American government (not just "social studies")
- Charity Miles episode also confirms: "first period government class"
- Childhood quote: "I was the second biggest kid in my school."
- Teaching/ultrarunning parallel quote: "patience and balancing and managing different things happening all at once"
- "In terms of profession, anyone can glide into being an ultrarunner."
- Crew philosophy quotes:
  - "I feel like I have a really strong crew. I pick people who have an adaptive personality."
  - "They are flexible. They are going to have fun no matter what's going on. They're going to try hard and to stay positive. Even if they have a negative thought, they don't say a single negative thing."
  - "There's no ego thing going on where one member feels they want control. Being a good crew member involves a lot of selflessness."
- Partial quote on vegan/injury: "I'm fortunate not to experience injury. My ability to rebound is quick with the anti-inflammat..." (truncated)
- Interview context: June 2023 phone call while packing for New Zealand/Australia (Dead Cow Gully Backyard Ultra)

**From Charity Miles "Nice Guys Finish Last" podcast**:
- Podcast: "The Extra Mile — The Official Charity Miles Podcast" (Charity Miles)
- Apple: https://podcasts.apple.com/us/podcast/the-extra-mile-the-official-charity-miles-podcast/id1256271696?i=1000673075256
- Spotify: https://open.spotify.com/episode/5OEjeFYYiklMZBzM7yeDir?si=G_VAnL7-QsiPZd0YvNc0Jw
- Host joined Harvey on run-commute — through Cincinnati, over Ohio River to Kentucky and back
- **Brooks Running**: confirmed sponsor (Charity Miles episode partner)
- Note: article says "454 miles" for Big's 2023 — this is incorrect (correct: 450 miles / 108 laps); likely a rounding/mistake

**SPONSOR CONFIRMED**: Brooks Running

---

## Phase 7 — Press

*(findings logged here)*

---

## Phase 8 — Sponsors

*(findings logged here)*
