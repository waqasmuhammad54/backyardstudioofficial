/**
 * Aerial / aviation wording — ONE switch for the whole site, all four languages.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * ⚠️ THIS SUPERSEDES THE AUGUST 2026 "KEEP THE AVIATION REGULATOR SILENT" RULE
 * ──────────────────────────────────────────────────────────────────────────
 * On 8 October 2026 the owner was asked directly and confirmed:
 * **the civil aviation licence is ISSUED AND IN HAND.**
 *
 * That answers the question the August rule existed to manage. In August the
 * instruction was to keep the regulator unnamed because the arrangement was
 * not something we could assert; it now is, on the owner's explicit statement.
 *
 * So the GCAA / in-house licensed drone team wording across EN, AR, RU and ZH
 * is CORRECT and stays. Any future session that finds the old "regulator must
 * be silent everywhere" note in SESSION_CLOSE.md or in memory should treat it
 * as superseded by this file and by the 8 Oct entry — **do not strip the
 * licence claims again.**
 *
 * The only thing still outstanding is the licence reference number. A claim a
 * client can verify is a materially stronger trust signal than one they cannot,
 * and it is also the thing that protects the business if the claim is ever
 * challenged. Fill LICENCE_REFERENCE in when someone has the certificate to
 * hand.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * IF THE LICENCE EVER LAPSES
 * ──────────────────────────────────────────────────────────────────────────
 * Set HOLDS_AVIATION_LICENCE = false and the "pending" wording below takes
 * over wherever aerialCopy() is used. It is accurate, still commercially
 * useful, and avoids a claim that is no longer true.
 */

/**
 * Is the civil aviation licence issued and in hand right now?
 *
 * true as of 8 Oct 2026 — confirmed directly by the owner.
 */
export const HOLDS_AVIATION_LICENCE = true;

/**
 * Real licence reference. Still null: the owner confirmed the licence exists
 * but the number has not been supplied. Not a blocker, but worth filling in —
 * a verifiable credential outperforms an unverifiable one.
 */
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
