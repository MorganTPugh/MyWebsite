---
target: travel/costa-rica/index.html
total_score: 28
p0_count: 2
p1_count: 2
timestamp: 2026-07-12T05-14-53Z
slug: travel-costa-rica-index-html
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No active-section indicator in nav on scroll; otherwise n/a for a static content page |
| 2 | Match System / Real World | 4 | Warm, specific, first-person travel-blog voice throughout |
| 3 | User Control and Freedom | 2 | No back-to-top control on a very long single-scroll page |
| 4 | Consistency and Standards | 3 | Internally consistent, but identical to the main recruiter-facing site's system |
| 5 | Error Prevention | 3 | n/a — no forms/inputs on this page directly |
| 6 | Recognition Rather Than Recall | 3 | Nav labeled clearly, anchors work |
| 7 | Flexibility and Efficiency | 2 | No way to jump to photos/gallery without a full scroll; no lazy-loading on 20+ images |
| 8 | Aesthetic and Minimalist Design | 2 | Repetition of identical structural patterns (5x heading formula, 4x alternating block, 1x card row) makes the page feel padded rather than every element earning its place |
| 9 | Error Recovery | 3 | n/a |
| 10 | Help and Documentation | 3 | n/a for a blog page |
| **Total** | | **28/40** | **Good — solid foundation, address weak areas** |

## Anti-Patterns Verdict

**Start here. Does this look AI-generated?** Not egregiously — the literal AI tells (gradient text, glassmorphism, eyebrow badges, 01/02/03 scaffolding) were already stripped out in earlier passes. But it fails a subtler, second-order test: **it looks like a template, just a nice one.** The exact same navy/orange/blue palette, the exact same Fraunces+Lora pairing, the exact same rounded-organic card shapes, and — new since the last pass — a *repeated heading formula* ("[plain lead-in], *[italic accent-color phrase]*.") used verbatim 5 times across Hero, Spark, Route, Wedding, and Gallery. That formula wasn't there to be a tell when I wrote it once; repeating it as the section grammar makes it one. This is precisely why it doesn't yet read as "a professional, gorgeous travel blog" — it reads as "Morgan's portfolio site, travel edition."

**Deterministic scan** (`detect.mjs`, exit code 2, 2 findings):
- `overused-font` (warning): Fraunces is named directly in Impeccable's own reflex-reject list — it's on so many AI-generated sites it's stopped feeling distinctive. Legitimate finding, though the skill's own rule is that *identity-preservation wins when a brand already committed to a font* — Fraunces is the whole site's display face, not something I'd rip out. Worth knowing, not worth fixing here.
- `single-font` (warning): **False positive.** The detector's static scan only parsed the first family in the Google Fonts URL; the page actually pulls three families (Fraunces, Lora, JetBrains Mono) and uses all three via the site's design tokens (`font-serif`/`font-sans`/`font-mono`). No action needed.

**Visual evidence**: Both independent sub-agents (design review + browser/detector pass) stalled on a known screenshot-after-scroll bug in this environment (I hit the identical failure earlier this session — `computer` returns a blank frame after any non-zero scroll position, reproducible even on a blank tab). I did the design review directly instead, and I have prior verified screenshots from this session confirming the sections described below actually render as described.

## Overall Impression

The bones are good — real copy, a genuinely bespoke traced-map illustration, a strong Wedding-day photo sequence — but the page is long relative to what it needs to say, and its visual system is a carbon copy of the recruiter-facing site rather than its own thing. The single biggest opportunity: let the Wedding section's treatment (big full-bleed strips, fewer/larger images) become the whole page's visual language instead of the one section that breaks from the formula.

## What's Working

1. **The Costa Rica route map** — a real traced country silhouette with geographically-accurate pin placement, not a generic dots-on-a-box graphic. Bespoke, on-brand for a logistics-minded travel planner, and rare to see this much custom illustration effort.
2. **The Wedding section's photo rhythm** — full-bleed landscape strips alternating with paired portraits is the most editorial, least templated moment on the page. It should be the model, not the exception.
3. **Copy voice** — specific, funny, personal ("the wedding cartel," "$2,000 to move 25 people, twice," the nurse-shark story). Genuinely hard for a competitor to fake; this is the page's real differentiator.

## Priority Issues

**[P0] Page is too long relative to its content density**
Why it matters: You explicitly asked to cut scroll time. Right now: full-bleed hero → Spark → Route (map + 5 cards) → 4 stacked full-width Day blocks → Wedding (5 stacked image/text chunks across 8 photos) → 2 more After-Wedding blocks → a *second*, separate 12-photo masonry gallery → two 70vh-tall video embeds → a stats strip → footer. A visitor scrolls through 10+ major blocks before reaching bottom, with real duplication of effort (narrative photos AND a separate gallery of more photos).
Fix: Consolidate the 4 day-by-day blocks into a denser magazine-style layout (2-up photo+caption grid instead of 4 full-width stacked sections); tighten Wedding to fewer, larger moments; and — per your explicit ask — cut the two YouTube embeds entirely (recovers up to ~140vh of pure video real estate on mobile alone).
Suggested command: `$impeccable distill`

**[P0] Visual system is identical to the main site, not distinct as requested**
Why it matters: You want this page to look more creative than the rest of the site, like a real travel blog. Right now it shares the exact same restrained navy/orange/blue palette, the same font pairing, the same button and card shapes as the recruiter-facing career page — nothing signals "travel blog" specifically. On top of that, the "[plain], *[italic accent]*." heading formula repeats verbatim 5 times, which is itself becoming a new scaffolding tell.
Fix: Commit to a bolder, more editorial visual identity for trip pages specifically — richer color strategy, varied heading treatments (not every section needs the same italic-punchline formula), pull-quote or marginalia typographic moments, maybe photo captions as a real design element (common in print travel editorial, absent here entirely).
Suggested command: `$impeccable colorize`, `$impeccable typeset`, then `$impeccable bolder`

**[P1] The 5 Route stop-cards are an identical card grid**
Why it matters: Same bordered white rounded-2xl card, pill badge, heading, one line of text, repeated 5 times — the exact "identical card grid" pattern earlier passes eliminated elsewhere on this page but reintroduced here.
Fix: Vary the treatment, or fold the labels directly onto/beside the map instead of a separate uniform card row.
Suggested command: `$impeccable layout`

**[P1] No conversion path at the bottom of a very long page**
Why it matters: The dedicated closing CTA section was removed in an earlier pass (correctly — it was over-selling complex trips). But that left the page with *zero* invitation to act after the Gallery/Stats/Footer — a visitor who scrolls all the way down lands on nav links with no reinforcement of the pitch. The only conversion paths are the tiny header button and the two hero buttons, all above a very long scroll.
Fix: A light-touch, non-salesy closing moment (not a return to "plan a trip this complex") — even just a warmer, on-brand sign-off with one clear link back to `/travel/#intake`.
Suggested command: `$impeccable clarify`

**[P2] Low-opacity white text on dark navy**
Why it matters: `text-white/80` and `text-white/70` on the Wedding section's `#030C1B` background risk falling under the 4.5:1 AA contrast minimum — PRODUCT.md already flags this exact pattern as a known sitewide issue.
Fix: Verify and bump toward `text-white/90`+ where contrast is close.
Suggested command: `$impeccable audit`

**[P3] No lazy-loading on 20+ images**
Why it matters: A photo-heavy page this long with no `loading="lazy"` will hurt perceived performance, especially on mobile.
Suggested command: `$impeccable optimize`

## Persona Red Flags

**Jordan (confused first-timer, evaluating whether to hire Morgan)**: Reaches the bottom of a very long scroll (Gallery → Stats → Footer) with no reinforcement of "here's how to work with me" — the pitch just stops. Also can't tell, visually, which Wedding-section photos are the "wow, she can produce something this polished" proof point vs. the casual gallery snapshots below — the quality gap between a wedding-photographer portrait and a poolside phone pic sitting in the same masonry grid isn't acknowledged anywhere on the page.

**Casey (distracted mobile user)**: The Wedding section alone is five consecutive full-width or near-full-width photo blocks stacked vertically on mobile — a lot of one-handed thumb-scrolling before reaching "After the Wedding." The two YouTube embeds are `aspect-[9/16] max-h-[70vh]` — on a phone that's two videos each eating 70% of the visible screen back-to-back, forcing scroll-past before the gallery even starts.

## Minor Observations

- `rounded-organic-1/2/3` used with restraint (not over-rounded past the 32px+ ban) — good discipline compared to typical AI defaults.
- No Open Graph / social share image meta tags on a page explicitly meant to be a shareable "blog" — a miss for a page built to sell travel-planning services via word of mouth.
- The "0 / Traditional Venues" stat (fixed in the prior pass to be factually honest) still reads slightly flat as a "stat" — low priority, not worth more time.
- Route map SVG inlines a raw 1024x1024-unit traced path directly in the HTML — functionally fine, but it's a lot of markup weight for one graphic; worth knowing if page-weight ever becomes a concern.

## Questions to Consider

- What if the Wedding section's visual language (full-bleed strips, fewer/bigger images) *was* the whole page, instead of the one section that breaks the pattern?
- Do all 4 travel days need their own full-width stacked block, or could 3 of them share one dense spread with a single lead photo and smaller supporting thumbnails?
- If a visitor never scrolls past the hero, does the page still make the sale? Right now the hero's two buttons are the only conversion path most visitors will actually see.
