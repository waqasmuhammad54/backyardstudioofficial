# Backyard Studio CTO gap review — 20 November 2026

## Inputs reviewed

- `Backyard_Studio_Questions_Competitor_OnPage_Report_2026-11-20.docx`
- `Backyard_Studio_Master_Gap_List_2026-11-20.docx`
- Current production source and generated production build
- Current Google Search structured-data and people-first-content guidance
- Current GoogleChrome modern-web-guidance repository

## Executive decision

The reports are useful as a search-demand and competitor snapshot, but several conclusions are not safe to implement literally. In particular, the site already emits `LocalBusiness`, `ProfessionalService`, `Organization`, and `sameAs` data globally. Adding another LocalBusiness object to every page would duplicate an existing implementation rather than fix a gap.

The recommendation to rewrite 48 pages around exact-match questions was not adopted. Ranking data alone does not prove that existing pages need wholesale title/H1 changes, and a bulk search-first rewrite would risk harming established pages. The recommendation to add `VideoObject` to every page was also rejected: video schema must describe a real, visible, page-matched video with verifiable properties.

## Implemented corrections

1. Improved the live-streaming title for the report's strongest near-page-one opportunity while retaining the published price in the description and visible page content.
2. Removed deprecated `HowTo` structured-data output from dynamic service pages. Existing visible process content remains available to users.
3. Replaced the blanket real-estate drone legality claim with mission-specific, approval-dependent wording and a ground-camera fallback.
4. Retired the stale `/blog/drone-videography-rules-dubai-2026` article and permanently redirected it to the newer, source-backed `/guides/drone-filming-checklist-dubai` canonical owner.
5. Repaired internal links and the `llms.txt` discovery reference so they point to the maintained checklist instead of the retired article.
6. Preserved the valid, page-visible `VideoObject` on the event-videography page and did not fabricate video metadata for unrelated service pages.

## Validation completed

- TypeScript strict type check passed.
- All service, industry, internal-redirect, blog-inventory, and GSC question-growth regression checks passed.
- Optimized Next.js production build passed: 606 static pages generated.
- Local production verification confirmed:
  - live-streaming title is updated;
  - LocalBusiness remains present;
  - deprecated HowTo output is absent from service pages;
  - real-estate wording is corrected;
  - the event-videography page retains valid VideoObject data;
  - the retired drone article returns a permanent redirect;
  - the retired URL is absent from the sitemap;
  - the replacement checklist is live in the build with its self-canonical URL.

## Deferred work requiring evidence or off-site execution

- Authority growth, quality editorial mentions, supplier/venue partnerships, and directory citations are off-site marketing work, not a code-only fix.
- Any additional `VideoObject` should be added only after a matching public video, thumbnail, publication date, and visible embed are verified.
- Broad exact-match rewrites should be decided page by page using current Search Console performance, conversion intent, and content quality—not from one competitor snapshot.
- The wider claim audit still identifies older pages containing third-party names, operational assertions, and lead-time claims. Those need owner evidence or separate editorial correction; they are not silently certified by this release.

## Rollback

Revert the release commit to restore the previous article, metadata, links, and structured-data output. The retired URL has a single explicit redirect, so rollback is straightforward.
