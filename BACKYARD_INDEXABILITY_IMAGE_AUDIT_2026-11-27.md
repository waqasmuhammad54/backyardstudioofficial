# Backyard Studio Official — indexability, content and image audit

Audit date: 27 November 2026  
Canonical origin: https://www.backyardstudioofficial.com  
Audit scope: every URL declared in the live XML sitemap, plus images used on those pages

## Executive result

- 504 sitemap URLs crawled.
- 504 returned HTTP 200.
- 504 were publicly indexable; none declared `noindex`.
- 504 had canonical tags. The only apparent canonical difference was the homepage slash normalisation (`https://www...com` to `https://www...com/`), not a conflicting canonical.
- No page was missing an H1 and no page had multiple H1 elements.
- No duplicate title group and no duplicate meta-description group was found in the live inventory.
- 290 unique images were observed across 3,243 page uses.
- No rendered image use was missing alt text.
- The old sitemap contained no `<image:image>` entries.

These checks establish crawlability and public indexability. They do not prove that Google has selected every URL for its index; Google Search Console's Page indexing report remains the source of truth for indexed, discovered, crawled and excluded counts.

## Thin-content review

The initial word-count screen flagged 18 pages for manual review.

- Sixteen were Chinese pages. Whitespace-based English word counts were invalid for those documents. Manual CJK character counts ranged from 695 to 1,489 characters, so they were not thin.
- Two corporate portfolio records — `/portfolio/annual-conference` and `/portfolio/year-end-celebration` — lacked the planning guidance used on other portfolio categories. A shared, evidence-safe corporate coverage section was added. It explains programme, speakers, audio, venue access, deliverable formats and approvals without inventing client outcomes.
- Visual portfolio pages were assessed with their unique project metadata, images/video and page purpose. A short prose count alone is not a reliable thin-content test for a visual work sample.

## Image discovery implementation

A new image sitemap route is ready at:

- `https://www.backyardstudioofficial.com/sitemap-images.xml`

The route uses only Google-supported image sitemap elements:

- `<image:image>`
- `<image:loc>`

The registry contains:

- 196 canonical pages with owned images
- 705 page-to-image references
- 106 unique images hosted under `https://www.backyardstudioofficial.com/images/`

Logos, favicons, social Open Graph assets and third-party stock/Unsplash hosts are excluded. Third-party images remain documented in the full audit inventory, but are not declared as Backyard-owned image sitemap assets.

`robots.txt` declares both the standard sitemap and the image sitemap.

## Detailed audit files

The complete exports are stored in the workspace audit folder:

`D:\Claude Project\Backyard\reports\backyard-indexability-image-2026-11-27\`

- `pages.csv` — all 504 sitemap URLs with status, canonical, title, description, H1 and content measurements
- `images.csv` — all 290 unique images with page mappings, alt text, format and loading-use details
- `audit-data.json` — complete crawl dataset
- `summary.json` — aggregate counts

The production image registry is stored at `data/image-sitemap-registry.json` and has a validation script at `scripts/check-image-sitemap-registry.mjs`.

## Service and location expansion added during this release

- Added a substantial, location-specific Al Ain production hub with official destination and production references.
- Added Al Ain to the standard sitemap, location navigation, LocalBusiness/Organization `areaServed` data and Arabic, Russian and Chinese location indexes.
- Added a 39-service catalogue to every UAE location hub, with contextual internal links to the canonical service pages.
- Expanded LocalBusiness `hasOfferCatalog` structured data from nine broad entries to the same 39-service catalogue.
- Updated `llms.txt` and `llms-full.txt` so AI systems can resolve the complete service coverage and the dedicated Al Ain hub.
- Avoided creating hundreds of service/city doorway pages. Existing Search Console history showed that near-identical location/service variants can be treated as duplicates even with self-canonicals; the hub-and-spoke structure consolidates authority instead.

## Validation completed

- TypeScript check passed.
- ESLint passed.
- Internal link, service slug, industry slug, redirect and multilingual inventory checks passed.
- Production build passed with 608 generated pages.
- Local production verification confirmed HTTP 200 for `/locations/al-ain`, `/sitemap.xml`, `/sitemap-images.xml` and `/robots.txt`.
- The Al Ain page exposed a self-canonical, official references and the complete service-link catalogue.

## Search Console follow-up

After production deployment:

1. Verify the Page indexing report for the `https://www.backyardstudioofficial.com/` property.
2. Submit `https://www.backyardstudioofficial.com/sitemap-images.xml` in Search Console.
3. Inspect `/locations/al-ain` and request indexing once the live page is verified.
4. Monitor image results and Page indexing reasons; a submitted sitemap aids discovery but does not guarantee indexing.
