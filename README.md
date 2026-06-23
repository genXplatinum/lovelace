# Love Web Studios (LWS)

A 3D, scroll-driven, multi-page website for **Love Web Studios** — a design studio
founded by Lovepreet Singh. Design direction: *“engineered elegance”* — a gallery-white
editorial surface with a security-engineer's structural language (mono annotations,
hairline grids, an inspector cursor) and a liquid-chrome signature object.

## Tech stack

- **React 19 + Vite** — app framework & build tool
- **Three.js + React Three Fiber + drei** — the 3D liquid-chrome hero
- **GSAP + ScrollTrigger** — the intro loader & scroll animation engine
- **Lenis** — smooth scrolling
- **React Router** — multi-page routing (Home, Work, Services, Studio/About, Contact)
- Custom CSS design system (no UI framework) — see `src/index.css`

## Run it

**One click (easiest):** double-click **`launch.cmd`** (Windows) or run **`./launch.sh`**
(macOS/Linux). It installs everything the first time and opens the site in your browser
automatically. Keep the window open while you work; close it to stop.

**From a terminal instead:**

```bash
npm install      # first time only
npm run dev      # start dev server → http://localhost:5173
```

Other commands:

```bash
npm run build    # production build → /dist
npm run preview  # serve the production build locally → http://localhost:4173
```

> Requires [Node.js](https://nodejs.org) (LTS). The launcher checks for it and tells you
> if it's missing.

## Project structure

```
src/
  index.css            ← design system: colours, fonts, type scale, cursor, buttons
  main.jsx             ← app entry (Router + SmoothScroll providers)
  App.jsx              ← routes + loader + cursor
  data/site.js         ← ★ ALL CONTENT lives here (copy, services, projects, founder bio)
  components/
    Layout.jsx         ← nav + footer + page transitions + 3D canvas (home only)
    Nav.jsx / Footer.jsx
    Loader.jsx         ← intro 000→100 loader
    Cursor.jsx         ← custom inspector cursor
    Logo.jsx           ← the reticle brand mark
    Avatar.jsx         ← founder photo placeholder (see "Swap in your photo")
    Reveal.jsx         ← scroll-reveal wrapper
    three/
      Scene.jsx        ← 3D canvas, lights & environment
      ChromeFlow.jsx   ← the liquid-chrome object
  pages/               ← Home, Work, Services, About, Contact (+ matching .css)
public/
  favicon.svg          ← the LWS reticle mark
```

## Customise

### Content & copy
Everything you'd want to change is in **`src/data/site.js`**: tagline, manifesto,
nav, the four services, the project list, the process steps, stats, the founder bio,
awards, and the capabilities marquee. No need to touch components.

### Swap in your real photo
Save your photo as **`public/founder.jpg`**. It appears automatically in the founder
sections (Home + About) and falls back to the "LS" monogram if the file is missing.
To fine-tune the crop, edit `object-position` in `src/components/Avatar.css`
(currently `30% 18%`, framed for your SecurityVerse shot).

### Swap the logo
The brand mark is an SVG in `src/components/Logo.jsx` (the `Mark` component) and the
favicon is `public/favicon.svg`. Replace the SVG paths with your own mark, or drop in
an `<img>`.

### Colours & fonts
All design tokens are CSS variables at the top of `src/index.css`:
`--paper`, `--ink`, `--signal` (the cobalt accent), and the `--font-*` families.
Fonts are loaded from Google Fonts in `index.html` (Bricolage Grotesque, Inter,
JetBrains Mono).

### The 3D object
`src/components/three/ChromeFlow.jsx` controls the shape, material and motion;
`Scene.jsx` controls the lighting and environment.

## Things to replace before launch

- **Founder bio** in `data/site.js` was drafted from public sources — review & confirm it.
- **Photo** — save yours as `public/founder.jpg` (see above).
- **Phone number** (`site.phone`) is still a placeholder. Instagram & LinkedIn are live.
- **Projects** in `data/site.js` are sample cases — swap for real work + add images.
- **Contact form** currently opens the visitor's email app (mailto). For a hosted form,
  wire the `submit` handler in `pages/Contact.jsx` to a service like Formspree, or your
  own API.

## Put it online

The site builds to a folder of plain static files (`/dist`) — **no Node server is needed
on the host**. Pick whichever route suits you.

### A) Free, permanent URL — Vercel / Netlify (recommended)
1. Go to [vercel.com](https://vercel.com) (or [netlify.com](https://netlify.com)) and sign
   in with GitHub/Google/email.
2. **Add New → Project**. Either import a GitHub repo of this folder, or run
   `npm i -g vercel && vercel` in this folder and follow the one-time login prompt.
3. It auto-detects Vite (build `npm run build`, output `dist`). Click **Deploy**.

You get a free `your-site.vercel.app` URL with HTTPS, and it redeploys automatically on
every change you push. SPA routing is handled for you.

### B) Hostinger / cPanel / any shared hosting
Because it's static, you simply upload the built files:

1. Run **`npm run build`** here → creates the **`dist/`** folder.
2. Open Hostinger **hPanel → Files → File Manager** (or use FTP / FileZilla with the
   credentials from hPanel → Files → FTP Accounts).
3. Go into **`public_html`** and upload the **contents of `dist/`** — `index.html`, the
   `assets/` folder, `favicon.svg`, `founder.jpg`, and the hidden `.htaccess`.
   Upload what's *inside* `dist`, not the folder itself.
   - Fastest way: select everything in `dist`, zip it, upload the zip, then **Extract** it
     inside `public_html` (enable "show hidden files" so `.htaccess` is included).
4. Visit your domain — done. HTTPS is free via hPanel → SSL.

The bundled **`.htaccess`** makes the multi-page routes (`/work`, `/about`, …) work on
refresh and adds caching. Hosting under a subfolder like `domain.com/site/`? Set
`base: '/site/'` in `vite.config.js`, then rebuild and re-upload.

> To update the live site later: change files → `npm run build` → re-upload `dist/`.

### C) Instant temporary URL (no account)
A Cloudflare quick tunnel exposes your local build to a public HTTPS URL with zero signup —
handy for a fast share. It stays live only while your PC and the tunnel process are running,
so use A or B for anything permanent.

**One click:** double-click **`share.cmd`** (Windows). It rebuilds, serves the site, and
prints a fresh `https://….trycloudflare.com` link. Keep the window open to keep it live.

**Manually:**

```bash
npm run build
npx serve -s dist -l 4321                                           # terminal 1
npx cloudflared tunnel --protocol http2 --url http://localhost:4321 # terminal 2
```

> This network blocks UDP, so the **`--protocol http2`** flag is required or the tunnel
> drops with "control stream failure". Use `serve` (not `vite preview`) for tunnels —
> `vite preview` rejects external hostnames with a 403.
