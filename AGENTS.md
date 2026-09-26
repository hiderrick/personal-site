# Project guide

Single-page portfolio using Vite, vanilla JavaScript, and Three.js WebGPU.

## Commands

- `npm run dev` — local development server.
- `npm run build` — production build in `dist/`.
- `npm run preview` — preview the production build.

## Structure

- `index.html`: portfolio content, CSS, loading UI, section links, and scroll progress bar.
- `scene.js`: 3D rendering, island labels, scene parameters, and scroll-driven camera waypoints.
- `WaterPlane.js` / `WaterCaustics.js`: water simulation and caustics.
- `public/`: static assets served at the site root, including the resume and avatar.

## Constraints and verification

- Keep Vite's `build.target: 'esnext'`; renderer initialization uses top-level `await`.
- The scene requires WebGPU; the loading UI reports unavailable support or initialization failures.
- When changing sections, preserve anchor targets and check the `.sections .section` / `.finale` camera mapping in `scene.js`.
- Preserve keyboard focus indicators and reduced-motion support for scroll navigation. Keep progress updates throttled with `requestAnimationFrame`.
- No automated test suite is configured. For code changes, run `npm run build`; verify UI changes on desktop/mobile, including scrolling and keyboard navigation.
