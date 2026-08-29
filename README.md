# Spectrunex — Website

Next.js 14 (App Router) rebuild of the Spectrunex site, re-scoped to five
service lines: **Construction, Commercial Cleaning, Custom Software
Development, Mobile App Development, and AI Automation**, organized under
the same three-pillar structure as the original site.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **lucide-react** for icons
- Native Next.js SEO: Metadata API, `sitemap.ts`, `robots.ts`, dynamic OG
  image, JSON-LD structured data

## Project structure

```
src/
  app/
    layout.tsx          Root layout, global metadata, fonts, JSON-LD
    page.tsx             Home
    about/page.tsx        About
    services/page.tsx     Services
    contact/page.tsx      Contact
    sitemap.ts            /sitemap.xml
    robots.ts             /robots.txt
    opengraph-image.tsx   Auto-generated OG/social share image
    not-found.tsx          Custom 404
    globals.css
  components/
    Header.tsx, Footer.tsx, Hero.tsx, PillarsSection.tsx,
    ServicesGrid.tsx, StatsSection.tsx, CTASection.tsx,
    ContactForm.tsx, JsonLd.tsx
  lib/
    site.ts               Single source of truth: company info, the
                           3 pillars, the 9 services, stats. Edit this
                           file to change copy across the whole site.
public/
  favicon.svg, site.webmanifest
```

## Getting started

Requires Node.js 18.18+ and npm.

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Editing content

Almost all copy — company info, pillars, services, stats — lives in
**`src/lib/site.ts`**. Update it there and it propagates to the homepage,
services page, footer, and structured data automatically.

For page-specific copy (About story, hero headline, etc.), edit the
relevant file in `src/app/*/page.tsx` or `src/components/*.tsx`.

## Brand color tokens

Defined in `tailwind.config.ts` under `colors.navy` and `colors.steel`.
These were matched by eye to the live Spectrunex site's navy/blue palette —
compare against your brand guide and adjust the hex values there if you
have exact values.

## SEO checklist (already wired up)

- [x] Per-page `<title>` / meta description via the Metadata API (`app/**/page.tsx`)
- [x] Canonical URLs on every page
- [x] Open Graph + Twitter Card tags, with a dynamically generated share image (`opengraph-image.tsx`)
- [x] `sitemap.xml` (auto-generated from `app/sitemap.ts`)
- [x] `robots.txt` (auto-generated from `app/robots.ts`)
- [x] JSON-LD: `Organization`, `Service` (offer catalog of all 9 services), and `BreadcrumbList` on inner pages
- [x] Semantic heading hierarchy (single `h1` per page)
- [x] Descriptive link text, alt text on icons marked decorative (`aria-hidden`)
- [x] Skip-to-content link + visible focus states for accessibility/SEO signals
- [x] `viewport` + `theme-color` meta
- [x] Security headers (`next.config.mjs`): X-Content-Type-Options, X-Frame-Options, Referrer-Policy

### Before you go live

1. Set `NEXT_PUBLIC_SITE_URL` / update `siteConfig.url` in `src/lib/site.ts`
   if the final domain differs from `https://www.spectrunex.com`.
2. Submit `https://www.spectrunex.com/sitemap.xml` to Google Search Console
   and Bing Webmaster Tools.
3. Replace the placeholder address/phone/email in `src/lib/site.ts` with
   real details.
4. Connect the contact form (`src/components/ContactForm.tsx`) to a real
   endpoint — it currently only simulates a submission. Options: a Next.js
   API route, Formspree, or Resend.
5. Swap `public/favicon.svg` for your finalized logo mark if you have one.

## Deploying (no terminal required — works from an iPad)

1. Push this project to a GitHub repository (GitHub's mobile web UI
   supports drag-and-drop file upload if you unzip locally first, or use
   the GitHub app).
2. Go to [vercel.com](https://vercel.com), sign in, choose **Add New →
   Project**, and import that GitHub repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.
4. Add your custom domain under **Project → Settings → Domains**.

Every future push to the repo's main branch redeploys automatically.

## Scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # lint
```
# spectrunex
