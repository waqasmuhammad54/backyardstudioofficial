# GSC question growth — 17 November 2026

## Scope

Search Console question export: 77 queries, 558 impressions and 0 clicks for the selected 16-month window. Changes were limited to existing intent owners so the site does not create additional pages competing for the same queries.

## Owner decisions

| Query family | Owner URL | Decision |
|---|---|---|
| Video production cost in Dubai | `/uae-video-production-cost-report-2026` | Keep as the citable, exact-answer data report. `/pricing` remains the transactional package owner; the existing cost blog remains an editorial explainer. |
| Start/make a podcast in UAE or Dubai | `/blog/video-podcast-production-dubai-2026` | Reworked into an answer-first launch guide with workflow, compliance caution, setup models, equipment chain, publishing and measurement. |
| Vlogging setup cost UAE | `/blog/video-podcast-production-dubai-2026` | Added as a clearly labelled subsection; uses a full-kit budgeting method rather than unstable product-price claims. |
| Corporate video cost UAE | `/blog/corporate-videography-uae-pricing-process-booking-guide-2026` | Reworked around published Backyard Studio starting bands, quote comparability and the UAE production workflow. |
| Can you film / how to get a permit / permit cost in Dubai | `/guides/dubai-filming-permit` | Added exact questions and direct answers while keeping DFTC as the primary source and separating authority, owner and specialist approvals. |

## Internal linking

- Podcast and corporate service pages link to their informational owner guides.
- The pricing page links to both question guides.
- The cost report links to the corporate cost guide, podcast guide and filming-permit guide.
- The filming-permit guide links back to the cost report and corporate cost guide.

## Structured data and content safeguards

- Blog posts retain self-canonical Article, BreadcrumbList, FAQPage and Speakable markup already emitted by the shared template.
- `dateModified` is now available on blog records and reflects the material 17 November review without falsifying the original publication date.
- Admin-authored JSON posts receive editorial overlays at read time so a later blog-admin publish cannot silently restore the former markdown-like HTML.
- The podcast and corporate-cost guides use new text-free, subject-specific WebP hero assets with center-safe compositions for desktop and mobile crops.
- `scripts/check-gsc-question-growth-20261117.mjs` protects the intent owners, internal links, update date and rendered-content hygiene.

## Competitor pattern review

Current leaders for the selected queries generally use an exact-question H1, a two- or three-sentence answer block, tiered tables, explanatory H2s and FAQs. The Backyard pages now cover those useful patterns with original structure, Backyard's own published prices and official DFTC sourcing. No competitor text was copied.
