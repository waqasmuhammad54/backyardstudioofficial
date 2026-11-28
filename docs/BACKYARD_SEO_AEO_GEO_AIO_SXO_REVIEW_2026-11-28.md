# Backyard Studio Official — SEO, AEO, GEO, AIO and SXO review

**Site:** https://www.backyardstudioofficial.com/  
**Evidence cut-off:** 27 November 2026  
**Review completed:** 28 November 2026  
**Scope:** all 505 canonical URLs in the live XML sitemap, source code, current Google Search Console reports, mobile/desktop lab performance, structured data, crawler access, internal links and the conversion path.

## Executive result

The site is technically healthy and already visible in both conventional and generative Google Search. The full live crawl returned **505/505 indexable URLs with HTTP 200**, one canonical and one H1 per page, no missing descriptions or image alt text, no broken internal links and no internal links through redirects. Google Search Console shows no manual action, no security issue, no HTTPS issue, valid robots.txt and inclusion in Search generative AI features.

This review found and fixed five evidence-backed issues:

1. Removed a `SearchAction` that advertised a `/blog?q=` search function the site does not provide.
2. Replaced misleading `VideoObject` markup on 20 portfolio pages. Those pages showed still project work while several schema records pointed to a shared or unrelated Vimeo reel. They now emit accurate `CreativeWork` and `BreadcrumbList` data.
3. Added related-project and planning/service links to portfolio detail pages, connecting proof directly to relevant services, pricing/guides and enquiry intent.
4. Fixed mobile-navigation state/focus semantics, respected reduced-motion preferences in the home carousel and exposed the selected slide state.
5. Corrected AI-crawler documentation so access is not presented as a guarantee of citation, removed a stale Anthropic agent name, removed the unused HowTo-schema generator and supplied the footer logo's rendered size.

No mass URL expansion, fake reviews, invented backlinks, special “AI schema”, word-count padding or unchanged sitemap resubmission was used.

## Current Google evidence

| Signal | Current evidence |
|---|---|
| Search performance | 27 Aug–26 Nov 2026: **564 clicks, 40.1k impressions, 1.4% CTR, average position 17.9**. Last updated three hours before inspection. |
| Google generative AI | **4.09k impressions across 236 pages** in the 3-month beta report. The property inherits **Include** for Search generative AI. |
| Indexing | All-known-pages report (last updated 23 Nov): **513 indexed, 205 excluded**. Sitemap filter: **446 indexed, 58 excluded**. Current live sitemap is newer and has 505 URLs; every one returned 200 in this audit. Ten sampled “crawled, not indexed” examples contained 903–4,399 visible words, so the bucket is not treated as proof of thin content. |
| Old sitemap 404 | GSC still listed `/industries/sports/cycling` from a 12 Jul crawl. It now returns 200 and is in the clean live inventory, so this is stale report state rather than a current 404. |
| HTTPS | 27 Nov: **0 non-HTTPS URLs, no critical issues**. |
| Structured data | 27 Nov: **75 valid breadcrumbs, 0 invalid**; **12 valid video items, 0 invalid**. Portfolio video markup was nevertheless semantically inaccurate and has been corrected. |
| Links | **73 external links** and **18,079 internal links**. Top linking domains shown by GSC: Trustpilot, Vercel, Medium, Lunasol and Grolez. |
| Safety | **No manual actions** and **no security issues**. |
| Field Core Web Vitals | GSC/CrUX has insufficient 90-day data for both mobile and desktop. This is not a failure. |
| Lab performance before fixes | Home mobile: performance 92, accessibility 100, best practices 100, SEO 100; LCP 1.3s, TBT 310ms, CLS 0. Desktop: 98/100/100/100; LCP 0.6s, TBT 0ms, CLS 0. |

## 27 November 2026 guidance applied

- The November 2026 core update ran from **10–24 November** and was complete before this review. A December core update had been announced but had not begun, so no outcome was attributed to it.
- Google’s 27 November sitemap update says nested sitemap indexes are unsupported and HTML sitemaps cannot be submitted in Search Console. Backyard uses a normal XML sitemap and a separate image sitemap; no nested index was introduced.
- Google’s updated 404 guidance says legitimate 404/410 responses do not damage the rest of a site, should not be blocked in robots.txt and should not be redirected to an irrelevant homepage. The current sitemap contains no 404 URL.
- The new Search generative AI control affects whether content can ground and appear in AI Overviews, AI Mode and Discover; it is not a ranking signal and is separate from model-training controls. Backyard is included.
- Google’s current AI guidance still treats AI visibility as core SEO: crawlable pages, helpful original content, clear entities, relevant links, good page experience and accurate structured data. No special AI file or schema guarantees inclusion.

Official references: [Search documentation updates](https://developers.google.com/search/updates), [November 2026 core update](https://status.search.google.com/incidents/WLxcJyC6jMWMfryxsKMc), [December update announcement](https://status.search.google.com/incidents/AXrqxXXdtSjj3672ux7X), [AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide), [generative AI controls](https://developers.google.com/search/docs/fundamentals/gen-ai-controls), [AI attribution and factuality](https://developers.google.com/search/docs/fundamentals/gen-ai-attribution-factuality), [404 and crawl-error guidance](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors), [ranking principles](https://developers.google.com/search/docs/ranking/principles-for-ranking-results), [spam policies](https://developers.google.com/search/docs/essentials/spam-policies), and [Google Search traffic identification](https://developers.google.com/search/docs/monitor-debug/identify-google-search-traffic).

## Five-layer status

### SEO — found on Google

| Point | Result |
|---|---|
| Technical health | Pass: 505/505 sitemap URLs return 200; clean canonicals, H1s, metadata, alt text and internal links. Valid robots and HTTPS. |
| On-page basics | Pass: unique titles/descriptions and one H1 per canonical page. The false internal-search schema was removed. |
| Topic coverage | Strong: service, industry, location, guide, case-study, portfolio and multilingual clusters. No new doorway/location pages were added. |
| Clear brand facts | Strong: one Organization/LocalBusiness source, legal name, phone, map CID, operating areas and controlled `sameAs` profiles. Claims still require ongoing owner verification. |
| Backlinks and mentions | Measured, not fabricated: 73 GSC external links. Further growth should come from credited client case studies, supplier/venue profiles, trade press and genuine co-marketing. |
| Local SEO | Site NAP/area schema is coherent. GBP work is maintained separately; this code review did not change the profile. |

### AEO — the direct answer

| Point | Result |
|---|---|
| Featured snippets | Answer-first summaries, definition/cost blocks, scannable headings and lists are present. No snippet is guaranteed. |
| Answer-first pages | Present on the homepage, pricing, guides, cost report and service templates. |
| Questions by persona and stage | Discovery, price, permits, scope, deliverables, timing and booking questions are covered across guides/services/blogs. |
| Voice answers | Concise visible answers and Speakable markup exist where relevant. Speakable does not guarantee voice-assistant use. |
| FAQ sections | Visible FAQs match the data on relevant pages. FAQ rich results were retired for ordinary commercial sites, so FAQPage is retained only as descriptive data, not a promised SERP feature. |
| People Also Ask | Current content answers question patterns, but ownership of a PAA result can only be measured in live SERPs/GSC and is not guaranteed by schema. |

### GEO — recommended or cited by AI

| Point | Result |
|---|---|
| AI citations | Measured via Google’s beta report: 4.09k impressions and 236 surfaced pages. Other engines require separate observation; no citation count is invented. |
| Trusted-site mentions | GSC confirms Trustpilot, Medium and other linking domains. Quality is reviewed individually; domain counts alone are not endorsement. |
| Reviews | Trustpilot is a confirmed linking domain and the GBP entity is linked. Review claims should match live platform evidence before publication. |
| Reddit and YouTube | Brand-controlled Reddit and YouTube profiles are connected in `sameAs`; genuine project/video publishing is appropriate, manufactured discussion is not. |
| Same brand facts everywhere | The website uses a central brand/profile source. GBP, LinkedIn, Medium and directories still require periodic manual reconciliation. |
| Recommendation tracking | Google generative-AI impressions are now a first-party baseline. Record monthly page-level movement; do not claim causation from one update. |

### AIO — readable and usable by AI

| Point | Result |
|---|---|
| Crawler access | Pass: public pages are crawlable; private `/admin/`, `/studio/` and `/api/` paths remain blocked. Search/retrieval and training crawlers are documented separately. |
| Text AI can read | Pass: server-rendered homepage contains 2,000+ words and all audited pages expose meaningful HTML without requiring interaction. |
| Structured data | Pass after correction: accurate Organization, LocalBusiness, Service, Article, Breadcrumb, CreativeWork and relevant VideoObject data. No special AI-only schema was added. |
| AI Overviews / AI Mode | Search generative AI control is Include; 236 pages already have recorded generative-AI impressions. Inclusion for a particular answer is algorithmic. |
| AI search analytics | Google beta impressions provide a baseline. Referrer data is origin-only and does not reveal queries; GSC remains the query source. |

### SXO — chosen after the click

| Point | Result |
|---|---|
| Intent match | Pricing, services, portfolio, locations and planning guides align with research and booking stages. |
| Fast mobile pages | Home lab performance is 92 with 1.3s LCP and zero CLS. GSC currently lacks enough field data; lab results are not represented as CrUX. |
| Conversion | Quote, contact, phone and WhatsApp paths are present. Portfolio proof now links directly to relevant service/planning pages. |
| Scannable content | Answer-first paragraphs, headings, checklists, price tables, FAQs and cards are widely used. |
| Proof near the button | Portfolio pages show the work before the booking CTA and now provide related examples and category-specific planning links. |
| Return visits | RSS, journal, guides and reference reports create useful revisitable surfaces; this requires analytics retention measurement to quantify. |
| Works for AI agents | SSR content, semantic links/buttons, labelled forms, real 404s and open public routes pass the agentic audit. WebMCP/agent manifests remain optional and were not added as ranking theatre. |

## Content-depth inventory

“Thin content” is not a fixed word-count test. The useful checks are whether a page is unique, satisfies its intent, has original evidence/media, is internally connected and avoids scaled repetition. The crawl found no empty or duplicate-title/description pages. Median visible main-content counts were approximately: blog 1,498 words, guides 1,393, locations 906, industries 854, services 424 and homepage 2,065. Portfolio detail pages are intentionally visual and were the leanest surface (118–143 words before this release); they now carry accurate project schema and related work/service paths rather than padded generic copy.

## Honest constraints and next measurement

- Google can crawl and choose pages; indexing, rankings, featured snippets, PAA placement and AI citations cannot be guaranteed or “submitted” as an outcome.
- GSC’s indexing report is a delayed snapshot. Its one sitemap 404 now returns 200; validation/resubmission is not required for an unchanged working sitemap.
- CrUX has insufficient field traffic, so Lighthouse is reported as lab data only.
- No paid backlink API was configured. GSC is the authoritative first-party link baseline used here.
- External reviews, directory profiles, Reddit posts, YouTube publishing and client-partner outreach must remain genuine representational activity; they are not auto-created by this technical release.

## Verification commands

- `npm run lint`
- `npx tsc --noEmit`
- `npm run check:links`
- `npm run build`
- Full live crawl against all sitemap URLs
- Mobile and desktop Lighthouse checks

