# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Dev server at http://localhost:3000
npm run build     # Production build (outputs to dist/)
npm run preview   # Preview production build locally
npm run start     # Serve the production build via server.js (used by Cloud Run)
npm run lint      # TypeScript type check (tsc --noEmit)
npm run clean     # Remove dist/
```

Set `GEMINI_API_KEY` in `.env.local` (copy from `.env.example`) before running.

## Deployment

Deployed to Google Cloud Run via `Dockerfile` (multi-stage: builds the Vite site, then
serves `dist/` with `server.js`, a minimal Express static file server listening on
`process.env.PORT`). Cloud Run's "Connect repository" continuous deployment rebuilds and
redeploys automatically on every push to `main`.

## Architecture

This is Morgan Pugh's personal portfolio site — a hybrid of a React SPA and static HTML sub-pages, all sharing the same Tailwind v4 design system.

**Two-tier page structure:**

1. **React SPA** (`src/`) — the main entry at `/` (built from `index.html`). `App.tsx` manages a `"career" | "consulting"` state toggle. Switching views swaps between `<CareerPage>` and `<ConsultingPage>` with a Framer Motion `<AnimatePresence>` transition. No router — page navigation is purely state-driven.

2. **Static HTML sub-pages** — `travel/index.html`, `money/index.html`, `projects/index.html`. These are separate Vite entry points (configured in `vite.config.ts` under `rollupOptions.input`). They import the shared stylesheet via `<link rel="stylesheet" href="/src/index.css" />` and use vanilla JS for scroll reveal animations.

**Data layer:** All content (career timeline, impact highlights, skill categories, consulting services, personal facts) lives in `src/data.ts` as exported constants. `src/types.ts` holds the TypeScript interfaces. Components import directly from these files — there is no API or state management library.

**Contact forms:** Currently client-side only. Submit handlers use `setTimeout` to simulate a success state; no email is actually sent.

**Headshot image:** Expected at `public/assets/images/morgan-headshot.jpg`. Both `CareerPage` and the About section have graceful fallbacks if this file is missing.

## Design System

Tailwind v4 is configured entirely in `src/index.css` via `@theme`. Custom tokens:

| Token | Value |
|---|---|
| `primary` | `#030C1B` (near-black navy) |
| `accent-orange` | `#FF4E00` |
| `accent-blue` | `#00A3FF` |
| `neutral-light` | `#F5F8FC` |
| `text-secondary` | `#475569` |

**Font mapping** (non-obvious — `font-sans` is NOT a sans-serif):
- `font-sans` → Lora (a serif body font)
- `font-serif` → Fraunces (the display/heading font)
- `font-mono` → JetBrains Mono

**Custom utilities** defined in `src/index.css`:
- `rounded-organic-1/2/3` — asymmetric border-radius shapes used throughout for visual interest; cards often transition between variants on hover
- `bg-grid-pattern` — subtle dark grid overlay
- `bg-grid-accent` — subtle orange grid overlay
- `.reveal-on-scroll` / `.is-visible` — CSS scroll animation classes; the React SPA drives these via `IntersectionObserver` in `App.tsx`, while static HTML pages use an inline `<script>` at page bottom
