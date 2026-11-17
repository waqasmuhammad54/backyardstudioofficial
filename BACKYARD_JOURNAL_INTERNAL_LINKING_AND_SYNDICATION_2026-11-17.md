# Backyard Journal Internal Linking and Syndication Review

**Date:** 17 November 2026  
**Scope:** Backyard Studio Official website journal, multilingual article hubs, RSS, sitemap, Medium and LinkedIn publishing surfaces.

## Executive result

The website release closes the indexing and internal-linking gaps found in the complete 284-article canonical inventory:

- all 284 article URLs return 200, self-canonicalise, remain indexable and have exactly one H1;
- RSS coverage rises from 236/284 to 284/284;
- 50 translated articles missing from their Arabic, Russian or Chinese journal hub are now linked;
- every English article receives three relevant article recommendations, including admin-published posts whose saved `relatedSlugs` list is empty;
- every English article receives a contextual planning bridge to its topic hub, related service/portfolio and pricing;
- every Arabic, Russian and Chinese article receives a language-matched planning bridge to its journal, services, pricing and contact page;
- the sitemap, RSS and translated hubs now share one 78-article translated inventory, with a regression check preventing future drift;
- Medium is now visible in the website footer as well as the Organization `sameAs` graph.

## Evidence before the release

The bounded live audit found:

| Check | Live baseline |
|---|---:|
| Canonical article URLs audited | 284 |
| Non-200 articles | 0 |
| Canonical failures | 0 |
| `noindex` articles | 0 |
| H1 failures | 0 |
| Sitemap URLs | 505 |
| RSS items | 236 |
| Articles missing from RSS | 48 |
| Translated articles missing from their language hub | 50 |
| English articles without an article-to-article link | 74 |
| Articles without an inline body link in stored copy | 269 |

The last figure is intentionally distinguished from crawlability: many stored articles contain no literal link inside their authored HTML, while the shared page template supplies buyer-guide, service, location and CTA links. The release adds a topic-specific content-path bridge and related-article fallback so every article has relevant, crawlable internal paths without bulk-inserting awkward links into hundreds of paragraphs.

## Verified release candidate

The clean local release candidate passed:

- full Next.js production build: 607 generated pages;
- TypeScript: `npx tsc --noEmit` passed;
- existing industry, service, redirect and GSC question-growth link checks;
- new translated-inventory regression check: 78/78 routes present and shared by RSS, sitemap and hubs;
- complete local crawl of all 284 canonical article URLs;
- 0 non-200, canonical, noindex or H1 failures;
- 284 RSS items and 0 articles missing from RSS;
- 0 translated articles missing from Arabic, Russian or Chinese hubs;
- 0 articles without a contextual planning path;
- 0 English articles without an article-to-article recommendation.

## Medium review

The public Medium feed currently exposes the latest 10 stories. Each feed entry contains one Backyard link, and that link is the old `http://www.backyardstudioofficial.com/` homepage rather than the corresponding HTTPS canonical article. Medium blocks automated article-source retrieval with HTTP 403, so the current canonical tag on each story could not be re-certified from the public source during this run.

Medium's current official author workflow supports a canonical pointing to the original website: **Edit story → More settings → Advanced Settings → “This story was originally published elsewhere” → enter the exact Backyard HTTPS article URL**. Only the story author can change it.

Recommended canonical targets for the 10 currently visible Medium stories:

| Medium story topic | Backyard canonical target |
|---|---|
| Company brand portfolio | `/blog/company-brand-portfolio-in-the-uae-client-testimonials-staff-professional-photoshoot-at-your-office-brand-content-from-aed-25-000-2026` |
| Startup pitch and investor video | `/blog/startup-pitch-video-investor-video-production-in-dubai-uae-fundraising-demo-day-product-demo-films-2026-guide-2026` |
| Model, actor and creator portfolios | `/blog/model-actor-creator-portfolio-shoots-and-showreels-in-dubai-uae-comp-cards-headshots-personal-portfolio-content-2026` |
| Holiday-home and Airbnb content | `/blog/holiday-home-airbnb-photography-and-reels-in-dubai-uae-monthly-social-media-content-from-aed-8-000-2026` |
| Recruitment and employer-branding video | `/blog/recruitment-employer-branding-video-production-in-the-uae-hiring-videos-job-ads-careers-content-2026-guide-2026` |
| Yacht and boat production | `/blog/yacht-boat-photography-and-videography-in-dubai-uae-charter-brokerage-owner-content-2026-pricing-guide-2026` |
| Fujairah photographer/videographer | `/blog/fujairah-photographer-videographer-2026-photography-video-production-in-fujairah-uae-2026` |
| Ras Al Khaimah photographer/videographer | `/blog/ras-al-khaimah-photographer-videographer-2026-photography-video-production-in-rak-uae-2026` |
| Ajman photographer/videographer | `/blog/ajman-photographer-videographer-2026-photography-video-production-in-ajman-uae-2026` |
| Sharjah photographer/videographer | `/locations/sharjah` |

For future Medium reposts: publish on Backyard first, confirm the canonical URL is live, import or set the canonical to Backyard, replace the homepage-only link with the exact article link, and retain two to four relevant deep links where useful.

Official reference: https://help.medium.com/hc/en-us/articles/360033930293-Set-a-canonical-link

## LinkedIn review

The signed-in LinkedIn profile shows 10 current long-form articles in the visible article inventory. The newest article, “Social Media Content Creation Packages for Brands in the UAE,” contains more than 20 descriptive deep links to relevant Backyard journal pages plus the homepage. Its internal-link coverage is strong.

The risk is duplication: the LinkedIn version reproduces almost the complete Backyard article. LinkedIn does not expose a Medium-style author canonical control in its documented publishing workflow. Future LinkedIn versions should therefore be original 500–1,000-word adaptations: lead with a platform-native insight, link to the original Backyard article near the top, retain three to five relevant deep links, and end with a discussion question. This preserves LinkedIn reach while keeping the most complete source on Backyard.

Official reference: https://business.linkedin.com/nl/nl/advertise/linkedin-pages/publishing

## Remaining non-blocking enhancement gap

The full audit also observed 25 older translated articles without Article/BlogPosting schema and 74 translated articles without BreadcrumbList markup. This does not block crawling or indexing—the URLs are 200, canonical, indexable, sitemap-listed and hub-linked—but it is a structured-data enhancement backlog. It should be addressed with page-accurate titles, dates and breadcrumbs, not a generic schema injected only to make an audit counter reach zero.

## Publishing rule going forward

1. Publish the complete original on Backyard first.
2. Verify 200, HTTPS self-canonical, sitemap and RSS inclusion.
3. Use Medium's exact canonical setting to point to Backyard.
4. Use an adapted LinkedIn article rather than a full duplicate.
5. Link each syndication copy to the exact original URL, not the homepage.
6. Keep three to five descriptive links to related Backyard resources.
7. Do not submit every syndicated URL to Search Console; submit the Backyard sitemap and priority originals only.

