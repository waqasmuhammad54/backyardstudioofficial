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
  "corporate": ["company-profile", "investor-pitch", "annual-report"],
  "hospitality": ["hotels", "resorts"],
  "real-estate": ["luxury-villa", "off-plan", "commercial-property"],
  "fashion": ["model-portfolio", "fashion-reels"],
  "food-beverage": ["restaurants", "menu-photography"],
};
