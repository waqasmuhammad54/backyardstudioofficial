/**
 * Industry sub-page slugs, mirrored for sitemap generation.
 * Source of truth: app/(en)/industries/[industry]/[slug]/page.tsx (SUB_INDUSTRY_DATA).
 *
 * ⚠️ THIS IS A HAND-MAINTAINED MIRROR AND THEREFORE A DRIFT HAZARD.
 * A slug that exists in SUB_INDUSTRY_DATA but not here builds a real, reachable
 * page that is absent from the sitemap. Google then finds it only by following
 * an internal link, which is precisely how pages end up as "Discovered –
 * currently not indexed". A slug here that does NOT exist in SUB_INDUSTRY_DATA
 * is worse: the sitemap advertises a URL that 404s.
 *
 * So: when you add a sub-industry page, you must edit BOTH files, and you must
 * also add a link to it from the parent industry hub's `specialisations` array.
 * Three edits, not one. Verify with `node scripts/check-industry-slugs.mjs`.
 */

export const INDUSTRY_SUB_PAGES: Record<string, string[]> = {
  "sports": ["padel", "cycling", "running", "cricket", "basketball", "badminton", "motorsport", "football", "fitness", "combat-sports"],
  "automotive": ["car-launch", "dealership"],
  "tech": ["saas", "gitex", "startup", "fintech"],
  "healthcare": ["dental", "aesthetic-clinics", "medical-tourism"],
  "corporate": ["company-profile", "investor-pitch", "annual-report", "cleaning-company-content", "manufacturing-video"],
  "hospitality": ["hotels", "resorts", "holiday-home-content"],
  "real-estate": ["luxury-villa", "off-plan", "commercial-property"],
  "fashion": ["model-portfolio", "fashion-reels", "modest-fashion"],
  "food-beverage": ["restaurants", "menu-photography", "food-brand-content"],
};

/** Material-review dates for pages changed independently of the older industry
 * inventory. Sitemap generation uses these without falsely refreshing every
 * established industry URL. */
export const INDUSTRY_SUB_PAGE_LAST_MODIFIED: Record<string, string> = {
  "sports/fitness": "2026-11-16",
  "corporate/cleaning-company-content": "2026-11-16",
  "corporate/manufacturing-video": "2026-11-16",
  "hospitality/holiday-home-content": "2026-11-16",
  "food-beverage/food-brand-content": "2026-11-16",
};
