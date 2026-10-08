/**
 * hreflang helper — one source of truth for language alternates.
 *
 * WHY THIS EXISTS
 * ---------------
 * Audited 8 Oct 2026 (scripts/audit-i18n.mjs). Every locale page declared its
 * alternates correctly, and **every English counterpart declared none at all**.
 *
 *   /ar/services  ->  "my English version is /services"
 *   /services     ->  (silence)
 *
 * **Google requires hreflang to be reciprocal.** When page A names B as its
 * translation and B does not name A back, Google discards the annotation for
 * the whole cluster. So none of the Arabic, Russian or Chinese work was being
 * served as a translation of anything — the pages were treated as unrelated
 * documents competing with the English site rather than complementing it.
 *
 * That is strictly worse than having no translations: the effort was spent and
 * the benefit was thrown away at the last step.
 *
 * Every locale page that has an English counterpart, AND that English
 * counterpart, must emit the same complete `languages` map. Hand-writing the
 * map in 36+ places is how the drift happened in the first place, so don't:
 * call `alternatesFor()`.
 *
 * NOT for locale-native blog posts. The AR, RU and ZH blogs have their own
 * slugs on their own topics with no one-to-one English equivalent. Declaring a
 * translation relationship that does not exist is a false signal — those pages
 * keep a plain self-canonical and no `languages` map.
 */

export const BASE_URL = "https://www.backyardstudioofficial.com";

/** Locales with a full mirrored page set under /<locale>/. */
export const LOCALES = ["ar", "ru", "zh"] as const;
export type Locale = (typeof LOCALES)[number];

/**
 * Build the complete, reciprocal `languages` map for a page.
 *
 * @param enPath The ENGLISH path, always — e.g. "/services", "/", "/pricing".
 *               Pass the English path even when calling from a locale page;
 *               the locale URLs are derived from it. This is deliberate: it
 *               guarantees all four pages in a cluster emit an identical map,
 *               which is the thing Google is checking.
 */
export function languagesFor(enPath: string): Record<string, string> {
  const clean = enPath === "/" ? "" : enPath.replace(/\/$/, "");
  const en = `${BASE_URL}${clean}`;

  const languages: Record<string, string> = { en };
  for (const locale of LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${clean}`;
  }
  // x-default points at English: it is the fallback for users whose language
  // does not match any version, not a fifth translation.
  languages["x-default"] = en;

  return languages;
}

/**
 * Ready-made `alternates` object for a Next.js `metadata` export.
 *
 * @param enPath The English path for this cluster.
 * @param locale Omit for the English page; pass the locale for a translated one.
 */
export function alternatesFor(enPath: string, locale?: Locale) {
  const clean = enPath === "/" ? "" : enPath.replace(/\/$/, "");
  const canonical = locale
    ? `${BASE_URL}/${locale}${clean}`
    : `${BASE_URL}${clean}` || BASE_URL;

  return {
    canonical: canonical || BASE_URL,
    languages: languagesFor(enPath),
  };
}
