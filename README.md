# Eric Analytics — Next.js

Converted from the original Vite + React (readdy.ai) project to **Next.js 15 (App Router)**.

## What changed vs the original project

1. **Vite → Next.js**: `react-router-dom` routing removed; pages now live in `app/` (App Router). `App.tsx`, `main.tsx`, `router/*` are gone — Next.js handles routing/rendering.
2. **All readdy.ai references removed**:
   - The contact form used to POST to `https://readdy.ai/api/form/...`. It now posts to a local API route, `app/api/contact/route.ts`, which you can wire up to email/CRM of your choice (see comments in that file).
   - The `data-readdy-form` attribute, the `__READDY_PROJECT_ID__` / `__READDY_VERSION_ID__` / `__READDY_AI_DOMAIN__` build-time env vars, the readdy ESLint rule, and the readdy Vite plugin references are all gone (they were specific to the old builder and aren't needed in a plain Next.js app).
3. **Images that were hosted on readdy's storage** (`storage.helloreaddy.io`) — 9 images used in the Solution, Impact, and Problem sections — now point at a local folder, `public/images/{solution,impact,problem}/`, with clean, descriptive filenames instead of random hashes.

## ⚠️ One-time step: download the images

The 9 images above were on readdy's private CDN, not this codebase, so the actual image *files* aren't bundled in this zip — only the local paths the code now expects. Run this once after installing dependencies:

```bash
npm install
npm run download-images
```

This runs `scripts/download-images.mjs`, which fetches each image from its original readdy URL and saves it locally under `public/images/...` with the new names. Those URLs are still live at time of writing; if any have expired, replace that image manually in `public/images/`.

(All other images — logo, project screenshots, partner logos — were already on `ericanalytics.net`'s own domain, not readdy's, so those were left as remote URLs. Ping me if you'd like those localized too.)

## Getting started

```bash
npm install
npm run download-images   # one-time, see above
npm run dev
```

Open http://localhost:3000.

## Project structure

```
app/
  layout.tsx        # root layout, metadata, fonts (was index.html)
  page.tsx           # home page (was pages/home/page.tsx)
  not-found.tsx       # 404 page
  api/contact/route.ts # contact form handler (replaces readdy.ai form endpoint)
  globals.css
components/
  feature/Header.tsx, Footer.tsx
  home/*.tsx          # all section components
lib/
  home.ts             # mock data (faqs, testimonials, partner logos, etc.)
public/
  images/solution/    # was storage.helloreaddy.io (5 images)
  images/impact/      # was storage.helloreaddy.io (3 images)
  images/problem/     # was storage.helloreaddy.io (1 image)
scripts/
  download-images.mjs # one-time image mirror script
```
