# Backyard Studio Official — Website

**Domain:** backyardstudioofficial.com  
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Sanity CMS · Vercel

---

## Quick Start

```bash
cd backyard-studio
npm install
cp .env.local.example .env.local
# Fill in .env.local with your real keys (see below)
npm run dev
```

Open http://localhost:3000

---

## Environment Variables

Copy `.env.local.example` → `.env.local` and fill in:

| Variable | Where to get it |
|----------|----------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | sanity.io/manage → your project |
| `SANITY_API_TOKEN` | sanity.io/manage → API → Tokens (Editor role) |
| `RESEND_API_KEY` | resend.com → API Keys |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 → Admin → Data Streams |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Events Manager |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Cloud Console → Maps Embed API |
| `REVALIDATE_SECRET` | Any random string (used for Sanity webhook) |

---

## Sanity CMS Setup

1. Create a Sanity project at https://sanity.io
2. Add your `projectId` to `.env.local`
3. Run `npm run dev` and visit http://localhost:3000/studio
4. Log in with your Sanity account to access the CMS

### Content Types Available:
- **Portfolio** — Add project videos, thumbnails, categories
- **Blog Posts** — Write articles with rich text + images
- **Services** — Edit service descriptions, FAQs, packages
- **Testimonials** — Add client reviews with star ratings
- **Team Members** — Manage the team section
- **Site Settings** — Update contact info, social links, WhatsApp number

---

## Deployment (Vercel)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/backyard-studio.git
git push -u origin main

# 2. Import to Vercel
# Go to vercel.com → New Project → Import from GitHub
# Add all environment variables from .env.local
# Deploy
```

### Custom Domain:
In Vercel → Project → Settings → Domains → Add `backyardstudioofficial.com`

---

## Key Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage (10 sections, single-page scroll) |
| `/services` | All services overview |
| `/services/[slug]` | Individual service pages (10 services) |
| `/portfolio` | Filterable portfolio grid |
| `/portfolio/[slug]` | Project detail with video |
| `/blog` | Blog listing with featured post |
| `/blog/[slug]` | Individual blog posts |
| `/about` | About + team |
| `/contact` | Contact form + map |
| `/locations` | UAE coverage hub |
| `/locations/[city]` | City-specific SEO pages |
| `/testimonials` | All client testimonials |
| `/studio` | Sanity CMS (password protected) |

---

## Update Content Without Code

### Add a new portfolio project:
1. Go to `/studio`
2. Click **Portfolio** → **Create**
3. Fill in title, client, category, video URL, thumbnail
4. Click **Publish** → site updates within 60 seconds

### Publish a blog post:
1. Go to `/studio` → **Blog Posts** → **Create**
2. Write your article using the rich text editor
3. Add SEO title + description
4. Click **Publish**

### Update WhatsApp number:
1. Go to `/studio` → **Site Settings**
2. Update the **WhatsApp Number** field (format: 971501234567)
3. Publish

---

## SEO

- All pages have unique `<title>` and `<meta description>`
- JSON-LD structured data: Organization, LocalBusiness, FAQ, VideoObject, Article
- Sitemap auto-generated at `/sitemap.xml` (includes all UAE location pages)
- `robots.txt` at `/robots.txt`
- Core Web Vitals optimised (Next/Image, font preloading, ISR)

### Google Search Console:
1. Add site at search.google.com/search-console
2. Verify with the meta tag in `app/layout.tsx` (replace `REPLACE_WITH_GSC_VERIFICATION_CODE`)
3. Submit `https://backyardstudioofficial.com/sitemap.xml`

---

## Adding UAE Location Pages

The template supports unlimited location pages. To add a new area:

1. Open `app/locations/[city]/page.tsx`
2. Add a new entry to the `CITY_DATA` object with the area name, description, landmarks, and areas
3. The page is automatically SEO-optimised with city-specific keywords

---

## Tech Notes

- **ISR**: Portfolio + Blog pages revalidate every 60s automatically
- **Webhook**: POST to `/api/revalidate?token=YOUR_SECRET` to trigger instant revalidation from Sanity
- **Images**: All images via `next/image` (automatic WebP, lazy loading, CDN)
- **Fonts**: Inter + Bebas Neue + DM Serif Display (Google Fonts, preloaded)
