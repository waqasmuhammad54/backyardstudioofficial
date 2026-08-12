/**
 * Title normalisation for the (en) route group.
 *
 * ── The bug this exists to prevent ────────────────────────────────────────────
 *
 * `app/(en)/layout.tsx` sets:
 *
 *     title: { template: "%s | Backyard Studio" }
 *
 * so Next.js appends the brand to any page that returns a bare string title.
 * Most page and service titles in this repo were ALSO authored with the brand
 * baked in ("... — Backyard Studio Official"), which meant the brand shipped
 * twice. Measured on the live site, 12 Aug 2026:
 *
 *     /services/event-shoots
 *       "Event Shoots Dubai | Best Event Videographer & Photographer UAE
 *        — Backyard Studio | Backyard Studio"                        99 chars
 *
 *     /locations/dubai/wedding-photography
 *       "Wedding Photography in Dubai 2026
 *        | Backyard Studio Official | Backyard Studio"               78 chars
 *
 * Google renders roughly 60 characters. Everything past that is cut, so the
 * duplicated brand was silently truncating the differentiating half of the title
 * on ~150 programmatic pages — the same pages GSC shows sitting at position
 * 20-40 with 0% CTR. This is a CTR fix, not a cosmetic one.
 *
 * ── Why normalise instead of editing the data ─────────────────────────────────
 *
 * The titles live in large hand-maintained maps (PAGES, SERVICE_METADATA,
 * SERVICE_DATA). Editing ~150 string literals is a big diff that regresses the
 * moment someone adds a new entry in the old style. Normalising at the single
 * point where metadata is produced means both styles are safe forever.
 */

/** Matches a trailing " | Backyard Studio", " — Backyard Studio Official", etc. */
const BRAND_SUFFIX = /\s*[|–—-]\s*Backyard\s+Studio(?:\s+Official)?\s*$/i;

/**
 * Remove a trailing brand suffix so the layout template can add it exactly once.
 *
 * Only strips from the END, and only one occurrence, so a title that legitimately
 * mentions the brand mid-string (e.g. "Why Backyard Studio publishes prices")
 * is left alone.
 */
export function stripBrandSuffix(title: string): string {
  return title.replace(BRAND_SUFFIX, "").trim();
}

/**
 * What the SERP will actually show, for tests and for og:title.
 * The layout template is not applied to openGraph, so og:title needs the brand
 * added explicitly rather than inherited.
 */
export function withBrand(title: string): string {
  return `${stripBrandSuffix(title)} | Backyard Studio`;
}
