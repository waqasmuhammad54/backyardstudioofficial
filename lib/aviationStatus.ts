/**
 * Aerial / aviation wording — ONE switch for the whole site, all four languages.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 * ──────────────────────────────────────────────────────────────────────────
 * Owner stated 8 Oct 2026 that a civil aviation licence is coming soon and
 * asked for the existing wording to stay.
 *
 * The problem is that the published copy did not say "coming soon". It made
 * present-tense ownership claims, in four languages, including in meta
 * descriptions that appear directly in search results:
 *
 *   EN  "in-house GCAA-licensed drone team"            (40x in content/posts.json)
 *   RU  "Backyard Studio Official имеет необходимую лицензию"   = HAS the licence
 *   AR  "رخصة طيران مسيّر من هيئة الطيران المدني"              = licence FROM the CAA
 *   ZH  "是的，航拍在（阿联酋民用航空局）商业无人机飞行执照下执行"   = YES, under a GCAA licence
 *
 * Clients rely on that line as a legal-compliance assurance when they book.
 * Asserting an aviation authorisation before it is issued is a false claim in
 * a regulated category, and the exposure sits with the business.
 *
 * So the capability stays described and no page is removed — but the wording
 * states what is true TODAY, and this file is the single switch that flips it
 * the day the licence is actually in hand.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * HOW TO FLIP IT — when the licence is ISSUED AND IN HAND
 * ──────────────────────────────────────────────────────────────────────────
 *   1. Set HOLDS_AVIATION_LICENCE = true
 *   2. Set LICENCE_REFERENCE to the real licence number/reference
 *   3. Commit, deploy
 *
 * Do not flip it on "approved in principle", "application submitted", or a
 * verbal assurance. In hand, in writing, or it stays false.
 */

/**
 * Is the civil aviation licence ISSUED AND IN HAND right now?
 *
 * false as of 8 Oct 2026 — owner reports it is in progress.
 */
export const HOLDS_AVIATION_LICENCE = false;

/** Real licence reference, filled in only when the licence exists. */
export const LICENCE_REFERENCE: string | null = null;

/**
 * The sentence to use about aerial coverage, in each language.
 *
 * The "pending" wording is accurate and still commercially useful: it tells a
 * client they can get aerial footage inside a production and that permissions
 * are handled, which is the thing they actually want to know. It just does not
 * assert a licence that does not exist yet.
 */
const AERIAL_COPY = {
  en: {
    pending:
      "Aerial coverage is available within productions, with the required permissions arranged in advance for each location.",
    licensed:
      "Aerial coverage is available within productions, flown under our civil aviation licence, with location permissions arranged in advance.",
  },
  ar: {
    pending:
      "التصوير الجوي متاح ضمن الإنتاج، مع ترتيب التصاريح اللازمة مسبقاً لكل موقع.",
    licensed:
      "التصوير الجوي متاح ضمن الإنتاج، ويُنفَّذ بموجب رخصتنا من هيئة الطيران المدني، مع ترتيب تصاريح المواقع مسبقاً.",
  },
  ru: {
    pending:
      "Аэросъёмка доступна в рамках производства; необходимые разрешения для каждой локации оформляются заранее.",
    licensed:
      "Аэросъёмка доступна в рамках производства и выполняется по нашей лицензии гражданской авиации; разрешения для локаций оформляются заранее.",
  },
  zh: {
    pending:
      "航拍可作为制作的一部分提供，每个拍摄地点所需的许可均会提前安排。",
    licensed:
      "航拍可作为制作的一部分提供，依据我们持有的民航局执照执行，拍摄地点许可提前安排。",
  },
} as const;

export type AerialLocale = keyof typeof AERIAL_COPY;

/** The correct aerial sentence for a locale, given current licence status. */
export function aerialCopy(locale: AerialLocale = "en"): string {
  const set = AERIAL_COPY[locale] ?? AERIAL_COPY.en;
  return HOLDS_AVIATION_LICENCE ? set.licensed : set.pending;
}

/**
 * Guard for anywhere that wants to assert the licence directly.
 * Returns false today, so callers render nothing rather than a false claim.
 */
export function canClaimAviationLicence(): boolean {
  return HOLDS_AVIATION_LICENCE && LICENCE_REFERENCE !== null;
}
