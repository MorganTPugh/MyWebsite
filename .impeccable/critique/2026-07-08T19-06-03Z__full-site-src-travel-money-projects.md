---
target: full site (src/, travel/, money/, projects/)
total_score: 23
p0_count: 2
p1_count: 2
timestamp: 2026-07-08T19-06-03Z
slug: full-site-src-travel-money-projects
---
#### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Forms show pending/success states well; resume download gives zero feedback that it silently fails |
| 2 | Match Between System and Real World | 3 | Plain, non-jargon language throughout |
| 3 | User Control and Freedom | 3 | Easy nav, form reset, no trapping modals |
| 4 | Consistency and Standards | 2 | Job titles/dates on-site don't match the underlying resume data |
| 5 | Error Prevention | 2 | No check that `/resume.pdf` exists before wiring 4 download links to it |
| 6 | Recognition Rather Than Recall | 2 | Two unlabeled floating icon buttons (compass, palette) require hover-to-discover |
| 7 | Flexibility and Efficiency of Use | 2 | Not a major factor for a brand site; no real penalty beyond baseline |
| 8 | Aesthetic and Minimalist Design | 2 | Eyebrow labels, numbered steps, organic-blob radii, and two competing floating widgets on every page |
| 9 | Error Recovery | 1 | Broken resume download fails completely silently — worst kind of failure |
| 10 | Help and Documentation | 3 | Not documentation-heavy by nature; reassurance copy ("I respond within 48 hours") is present where it counts |
| **Total** | | **23/40** | **Acceptable — significant improvements needed** |

#### Anti-Patterns Verdict

**LLM assessment**: Yes, at a glance this reads as AI-generated. The tell isn't any single element — it's the repetition: a tiny uppercase tracked "eyebrow" label sits above almost every section heading across all five pages (WHAT I BRING, MEASURABLE IMPACT, EXPERTISE, SERVICES, METHODOLOGY, COACHING FOCUS...). Combined with Fraunces-italic display type + JetBrains Mono micro-labels + heavy monochrome restraint, this is a close match for what the design skill's own reference calls the "editorial-typographic" lane — display serif + small mono labels + ruled restraint — one of the most saturated AI aesthetic families of 2025-2026. None of it is broken taste in isolation; it's just the default a generative tool reaches for, applied uniformly instead of once, deliberately.

**Deterministic scan** (`detect.mjs` over `src/components`, `src/index.css`, and the three static pages):
- **Side-tab accent borders** (`border-l-4` / `border-l-2`) — flagged as *"the most recognizable tell of AI-generated UIs"* at 3 locations: [CareerPage.tsx:663](src/components/CareerPage.tsx:663) (the "Generalist Archetype" callout), [ConsultingPage.tsx:106](src/components/ConsultingPage.tsx:106) (the services intro), and `money/index.html:103` (the pull-quote).
- **Overused/AI-tell font** — Fraunces flagged independently by the detector in `src/index.css:1` and all three static pages, on top of it also appearing on the skill's own hand-maintained "reflex-reject" list of training-data-default fonts (alongside Lora, which this site also uses for body text).
- **Numbered section markers (01/02/03)** — flagged as advisory on `travel/index.html` and `projects/index.html`.
- **Bounce easing** — `animate-bounce` on the ThemeSelector's notification dot ([ThemeSelector.tsx:220](src/components/ThemeSelector.tsx:220)), flagged as a dated/tacky easing choice.
- **False positive to note**: the detector flags `travel/`, `money/`, and `projects/` as "single font for everything" because each `<head>` only `<link>`s Fraunces directly — but all three also load `/src/index.css`, which `@import`s Lora and JetBrains Mono, so the pages are not actually single-font in practice.

**Browser evidence**: Screenshotted the career hero, consulting hero, and travel hero, and confirmed live in the rendered DOM that the travel page's hero content is being clipped out of view (detailed under Priority Issues below) — this is a rendering bug the static detector can't catch, only live inspection could.

#### Overall Impression

The content underneath is genuinely strong — 9+ years, real numbers, a distinctive AI-builder angle — but two real bugs (one that breaks the primary "hire me" conversion action, one that breaks a paid-service page's entire hero) are shipping right now, and the visual layer leans on the exact scaffolding (tracked eyebrows, numbered steps, side-stripe callouts, an overused font pairing) that reads as templated rather than authored. The biggest opportunity isn't a redesign — it's (1) fixing what's silently broken, (2) reconciling the story the site tells with the story the resume tells, and (3) leading with the most specific, hardest-to-fake proof points instead of the safest ones.

#### What's Working

- **The personal "About" narrative** (childhood in Overland Park, KU rowing team, Coast FIRE framing, the shelter-volunteering + rescue-org side project) is genuinely warm, specific, and well-written — exactly the "warm & approachable" register you said you want, and a strong contrast to the more corporate career sections.
- **The consulting services copy** ("a stalled project, a confusing budget, a 12-person trip, a fundraising deck due Friday") is concrete and specific rather than generic — it passes the "show, don't tell" test the generalist-positioning material argues for.
- **The Impact Highlights structure** (metric + headline + story) is a smart way to make enterprise achievements legible to a fast-skimming recruiter, and the underlying numbers (73% YoY growth, $15M+ portfolio, 500+ enabled employees) are legitimately strong.

#### Priority Issues

**[P0] The travel page's entire hero is invisible to visitors**
- **Why it matters**: Travel Planning is one of three paid services this site exists to sell, and its landing page's headline, subhead, and both CTA buttons render with zero visible content — confirmed live: the browser parses `<div ... />` (self-closing) as an *opening* tag in plain HTML (only JSX/XML support that syntax), which swallows the next four elements — including the entire content column — into the background-image wrapper's `absolute inset-0` box, where `overflow-hidden` on the parent clips it out of view. Anyone landing on `/travel/` today sees a blank navy rectangle under the header.
- **Fix**: Replace every `<div ... />` with an explicit `<div ...></div>` in `travel/index.html`. Four instances: [line 48](travel/index.html:48) (hero gradient overlay) and [lines 162, 177, 192](travel/index.html:162) (the three trip-portfolio image overlays) — those three are likely breaking their own card layouts the same way and should be checked after the fix.
- **Suggested command**: `$impeccable audit travel/index.html`

**[P0] The "Download Resume" button doesn't download a resume**
- **Why it matters**: `/resume.pdf` doesn't exist in `public/`. Because this is a Vite SPA, the request falls through to the SPA fallback and returns your `index.html`/JS bundle with a 200 status — confirmed live via `fetch('/resume.pdf')`. Every recruiter who clicks "Resume" (desktop nav, mobile nav, or the mobile header icon — 3 separate links, all pointing at the same missing file) downloads a file named `Morgan_Pugh_Resume.pdf` that is actually your website's source code. This fails completely silently; there's no error state to even notice.
- **Fix**: Export an actual PDF resume (the Notion "M Resume v2" content is a solid source) and place it at `public/resume.pdf`.
- **Suggested command**: none needed — this is a content/asset fix, not a design one.

**[P1] The site's career timeline doesn't match your actual resume**
- **Why it matters**: The site lists "Product Manager" (Sept 2022 – Nov 2025) and "Senior Business Change Manager" (Nov 2025 – present). Your Notion resume ("M Resume v2") lists "Business Change Manager" (Sept 2022 – Nov 2024) and "Senior Business Change Manager" (Nov 2024 – present) — different mid-tier title *and* the promotion date is a full year off. A recruiter who pulls your LinkedIn or asks for a PDF resume (once P0 #2 is fixed) will see a third, different version. Small inconsistencies like this are exactly what makes a hiring manager quietly discount everything else on the page.
- **Fix**: Reconcile [data.ts:126-168](src/data.ts:126) against whichever resume version is current, and make that the single source of truth for the PDF export too.
- **Suggested command**: none needed — a content reconciliation, not a design one.

**[P1] The most differentiated proof points aren't on the site at all**
- **Why it matters**: You're job-hunting on a "generalist" positioning thesis (per the material you've been reading) — the pitch is that the *combination* is the value, not any one lane. But the two most specific, hardest-to-fake stories in your background are missing entirely: independently catching a systemic underpricing bug in a third-party risk model that even the vendor had missed (escalated, investigated 20-50 cases, got a confirmed patch), and running an AI-driven competitive intelligence project analyzing three years of competitor 10-Ks. The current 4 Impact Highlights ([data.ts:3-32](src/data.ts:3)) are all solid but safe — process improvements and GTM metrics that a lot of ops candidates could plausibly claim. The risk-model catch and the AI competitive-intel work are the ones nobody else can say.
- **Fix**: Add (or swap in) an Impact Highlight for the risk-scoring catch — it's a stronger "systems thinker" story than any of the current four, and it's real, specific, and verifiable. Fold the AI competitive-intel work into either an Impact Highlight or the Skills section, since "AI & Emerging Tech" is already a named category there.
- **Suggested command**: `$impeccable clarify src/data.ts` (for the highlight copy itself)

**[P2] Two floating widgets compete with each other and, on mobile, physically overlap your primary CTA**
- **Why it matters**: The `NavigationCompass` (bottom-left) and `ThemeSelector` "Live Palette Swapper" (bottom-right) both float persistently, both animate continuously (spin, bounce, pulse, ping), and both duplicate links already in the top navbar. On a 375px mobile viewport, confirmed via screenshot, both buttons visually overlap the "Explore My Services" button at the bottom of the hero — a real tap-target collision, not just visual noise. You told me directly you want this to feel less "demo," more "hire me" — these two widgets are the clearest embodiment of that gap. A recruiter's first 10 seconds are spent registering two pulsing corner buttons before they've even read the headline.
- **Fix**: Cut the NavigationCompass entirely (it's redundant with the navbar). Keep the theme swapper if you want the technical flex, but demote it — smaller, unanimated trigger, or move it into a settings/about-page context instead of a permanent bouncing badge on every page.
- **Suggested command**: `$impeccable quieter src/components/NavigationCompass.tsx src/components/ThemeSelector.tsx`

**[P2] Low-opacity white text on navy backgrounds falls short of WCAG AA contrast**
- **Why it matters**: `text-white/40` on the `#030C1B` primary background computes to roughly **3.6:1** — below the 4.5:1 required for text this small (10-11px mono labels). `placeholder:text-white/20` is far worse (~2:1) and affects every form field on both contact forms. This isn't a hypothetical edge case; it's the footer nav links, card meta-labels, and all placeholder text across the site.
- **Fix**: Bump these to at least `/70` for real body-adjacent text, and never go below roughly `/60` for placeholder text specifically (placeholders need the same 4.5:1 as body text, not a muted-by-default treatment).
- **Suggested command**: `$impeccable audit` (accessibility pass) or fold into the `quieter`/`polish` pass above

#### Persona Red Flags

**Dana (Hiring Manager, your primary audience)**: Opens the site expecting to quickly validate the resume you sent. Clicks "Resume" in the nav to double check a date — gets a corrupted download instead of a PDF (P0). If she'd gotten a real PDF, she'd have found a title/date mismatch against the site (P1). Either way, the first thing she does on this site actively damages trust rather than building it.

**Riley (Deliberate Stress Tester)**: This is effectively what I did during this review. Clicked the "Resume" download — got the site's own source code back, silently, with a 200 status and no error anywhere. Navigated to `/travel/` — got a blank navy rectangle instead of a hero. Both are exactly the kind of "looks like it works but doesn't" failure this persona is built to catch, and both would be invisible to you unless someone actually clicked through in a real browser.

**Casey (Distracted Mobile User)**: On a 375px viewport, the NavigationCompass and ThemeSelector buttons sit directly on top of the "Explore My Services" pill button — confirmed via screenshot. A thumb aiming for that CTA has a real chance of hitting a floating widget instead.

#### Minor Observations

- Full-serif typography (Fraunces display + Lora body) skews editorial/blog rather than "operator" — worth a deliberate gut-check against the "warm + builder" personality you confirmed, since a body sans could read crisper for the career-facing pages while keeping Fraunces for display accents.
- The "How It Works" 1-2-3 steps on the Consulting page are a legitimate real sequence (a genuine 3-step process), unlike the decorative STEP 01/02/03 on the travel/projects pages — that distinction is worth preserving if you simplify the numbered-marker pattern elsewhere.
- `rounded-organic-1/2/3` (up to 48px on one corner) is applied almost everywhere — hero photo frame, every card grid, every service card. It's a distinctive signature, but at this frequency it reads more "template default" than "considered choice." Consider reserving it for 1-2 signature moments rather than the default card treatment.
- Headshot fallback logic (graceful placeholder if the image 404s) is well-built defensive UX — no issue found here, the image loads correctly.

#### Questions to Consider

- If a recruiter can only remember one story from this site, is it currently the 73% growth number — or should it be the bug nobody else caught?
- What would this site look like if the eyebrow label and the numbered step were both banned outright, and each section had to earn its own distinct visual treatment?
- Is the theme-swapper a feature for visitors, or a portfolio piece for you? If it's the latter, does it need to live on every single page?
