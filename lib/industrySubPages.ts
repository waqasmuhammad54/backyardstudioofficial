/**
 * Industry sub-page slugs, mirrored for sitemap generation.
 * Source of truth: app/(en)/industries/[industry]/[slug]/page.tsx (SUB_INDUSTRY_DATA).
 * Keep in sync when adding a new sub-industry page.
 */

export const INDUSTRY_SUB_PAGES: Record<string, string[]> = {
  "sports": ["padel", "cycling", "running", "cricket", "basketball", "badminton", "motorsport", "football", "fitness"],
  "automotive": ["car-launch", "dealership"],
  "tech": ["saas", "gitex", "startup", "fintech"],
  "healthcare": ["dental"],
  "corporate": ["company-profile", "investor-pitch", "annual-report"],
  "hospitality": ["hotels", "resorts"],
  "real-estate": ["luxury-villa", "off-plan"],
  "fashion": ["model-portfolio", "fashion-reels"],
  "food-beverage": ["restaurants", "menu-photography"],
};
