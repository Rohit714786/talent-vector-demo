# Talent Vector — Static Landing Page Demo

SEO-friendly static marketing site built with **Next.js 15**, **React 19**, and **Tailwind CSS 4**, matching the provided Talent Vector design.

## Features

- Semantic HTML (`header`, `main`, `section`, `footer`, proper heading hierarchy)
- Next.js Metadata API (title, description, Open Graph, Twitter cards)
- JSON-LD structured data (Organization + SoftwareApplication)
- `robots.txt` and `sitemap.xml` via App Router
- Responsive, mobile-first layout
- Accessible navigation, forms, and ARIA labels

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Internal Server Error (500) in dev?

Usually a corrupted `.next` cache (e.g. running `build` and `dev` at the same time). Fix:

```bash
# Stop the dev server (Ctrl+C), then:
npm run clean
npm run dev
```

If port 3000 is still in use, stop the old Node process or use the port Next.js prints (e.g. 3001).

## Production Build

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option A — GitHub (recommended)

1. Initialize git and push to GitHub (if you have not already):

   ```bash
   git init
   git add .
   git commit -m "Talent Vector landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USER/talent-vector-demo.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new), import the repository, and deploy.
3. Vercel auto-detects Next.js. No custom build command is required (`npm run build`).

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

Follow the prompts. Production deploy: `vercel --prod`.

### Environment variables (Vercel dashboard → Project → Settings → Environment Variables)

| Variable | When to set |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | **Production** — your final domain, e.g. `https://talent-vector-demo.vercel.app` or custom domain |

If unset, Vercel’s `VERCEL_URL` is used automatically for `metadataBase`, `sitemap.xml`, and `robots.txt`.

After deploy, open your live URL and confirm the site loads.

---

## Check SEO & crawler visibility

Your page is **statically rendered** (HTML includes full content without JavaScript), which is ideal for crawlers.

### 1. Quick checks (replace with your live URL)

```powershell
# Homepage returns 200
(Invoke-WebRequest -Uri "https://YOUR_APP.vercel.app" -UseBasicParsing).StatusCode

# robots.txt allows crawlers + points to sitemap
Invoke-WebRequest -Uri "https://YOUR_APP.vercel.app/robots.txt" -UseBasicParsing | Select-Object -ExpandProperty Content

# sitemap lists your homepage
Invoke-WebRequest -Uri "https://YOUR_APP.vercel.app/sitemap.xml" -UseBasicParsing | Select-Object -ExpandProperty Content
```

**View page source** in the browser (Ctrl+U). You should see:

- `<title>` and `<meta name="description">`
- `<h1>` with hero text (not empty)
- JSON-LD `<script type="application/ld+json">` blocks
- Full section copy in HTML (not a blank `<div id="root">`)

### 2. Google tools (free)

| Tool | URL | What it checks |
|------|-----|----------------|
| **Rich Results Test** | https://search.google.com/test/rich-results | JSON-LD structured data |
| **URL Inspection** | [Google Search Console](https://search.google.com/search-console) (after adding your site) | Whether Google can fetch & index the page |
| **PageSpeed Insights** | https://pagespeed.web.dev | Performance + **SEO** category score |

### 3. Lighthouse (Chrome DevTools)

1. Open your deployed URL in Chrome.
2. F12 → **Lighthouse** tab → Categories: **SEO** → Analyze.
3. Aim for 90+ on SEO; fix any missing meta tags or heading issues reported.

### 4. Third-party crawlers

- https://www.xml-sitemaps.com/validate-xml-sitemap.html — validate `sitemap.xml`
- https://technicalseo.com/tools/robots-txt/ — test `robots.txt`

### What is already implemented

- Semantic HTML (`header`, `main`, `section`, `footer`, single `h1`)
- Metadata API (title, description, Open Graph, Twitter, canonical)
- `robots.txt` (`allow: /`) and `sitemap.xml`
- JSON-LD (Organization + SoftwareApplication)
- Static prerender (`○` in `next build` output)

**Note:** Being “SEO-friendly” does not mean instant Google ranking. Submit your sitemap in Search Console after deploy to request indexing.

## Project Structure

```
app/           → layout, page, globals, robots, sitemap
components/    → Header, Footer, sections
public/        → static assets
```
