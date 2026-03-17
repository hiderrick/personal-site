# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Build for production
npm run preview   # Preview production build
```

No test suite is configured.

## Architecture

Single-page portfolio built with **React 19 + Vite + TypeScript**. TailwindCSS is loaded via CDN in `index.html` rather than as an npm package — the Tailwind config (dark mode, custom colors) lives in a `<script>` block in that file.

### Data Flow

All portfolio content lives in [constants.ts](constants.ts). To update any displayed information (bio, skills, experience, projects, awards), edit only that file. The TypeScript interfaces for these structures are in [types.ts](types.ts).

### Component Structure

[App.tsx](App.tsx) orchestrates all page sections. Each section is a component in [components/](components/) wrapped with the reusable `Section` component which provides consistent heading style (green `//` prefix + gradient underline).

### Notable Patterns

- **TailwindCSS via CDN** — no PostCSS pipeline; custom color scheme (forest green `#15803d`) and dark mode config are defined in `index.html`
- **Import maps** — React and Lucide icons are resolved via CDN import maps in `index.html`, so they don't bundle into the output
- **Floating tech bubbles** — animated around the headshot in `Hero.tsx`; bubble icons use the Devicon CDN library (also loaded in `index.html`)
- **Path alias** — `@/*` resolves to the repo root (configured in both `vite.config.ts` and `tsconfig.json`)
- **Gemini API key** — injected at build time via `GEMINI_API_KEY` env var (see `vite.config.ts`); not currently used in any component

### Static Assets

Public assets ([public/](public/)): `FloatingHead.png` (headshot), `georgia-tech-logo.png`, `derrick_chen_resume.pdf`.
