# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Dev server at localhost:5173
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview production build
```

No test suite configured.

**Build requirement:** `vite.config.js` sets `build.target: 'esnext'` — this is mandatory because `scene.js` uses top-level `await renderer.init()`, which older Vite targets (es2020) reject.

## Architecture

Single-page 3D scroll portfolio built with **vanilla JS + Three.js WebGPU** (no framework). Deployed to Vercel as project `portfolio-v2`.

### How it works

`index.html` is the entire app — it defines the HTML scroll structure and all CSS. `scene.js` runs the Three.js engine and reads the DOM to drive the camera.

**Scroll → camera mapping:**
- `scene.js` queries `.sections .section` elements and `.finale` at runtime
- `waypoints[]` (5 entries) maps each scroll snap section to a 3D camera position + look-at target
- As the user scrolls, `updateCameraProgress()` picks the active waypoint and triggers a smooth eased transition (`quadInOut`, 1.25s)
- Reaching `.finale` triggers a Gaussian blur post-process effect

**Rendering pipeline** (Three.js WebGPU + TSL):
- `WebGPURenderer` with SSGI, SSR, and TRAA post-processing nodes
- `WaterPlane.js` — GPU compute shader (ping-pong buffers) for interactive water simulation; responds to mouse position
- `WaterCaustics.js` — TSL caustics shader projected onto the ocean floor
- All 3D geometry uses merged static meshes (`mergeGeometries`) for performance; only animated objects (bouncing spheres, flags, clouds) use live `InstancedMesh`

**WebGPU requirement:** Requires Chrome 113+ or Edge 113+. The renderer will fail silently on Safari or Firefox.

### Content locations

All portfolio content lives in **`index.html`** — there is no separate data/constants file:
- Splash, 4 content sections, and finale are hardcoded HTML
- Island sign labels are string literals in `scene.js` (`createSign(...)` calls, lines ~523–618)
- Scene parameters (fog, lighting, camera FOV, sky colors) are in the `params` object at the top of `scene.js`

### Public assets

`/public/` — served at root:
- `FloatingHead.png` — headshot used in splash
- `derrick_chen_resume.pdf` — linked from Skills & Contact section
- `georgia-tech-logo.png` — unused but preserved
