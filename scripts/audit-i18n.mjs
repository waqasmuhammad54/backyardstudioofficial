/**
 * Multilingual audit: hreflang reciprocity, locale coverage, and live status.
 *
 * WHY RECIPROCITY MATTERS
 * Google requires hreflang annotations to be mutual. If /ar/services says "my
 * English version is /services" but /services declares no alternates, Google
 * discards the annotation for that cluster entirely. The translations then
 * compete with the English page instead of being served to the right audience,
 * which is strictly worse than having no translations at all.
 *
 * Checks, per URL:
 *   1. does it return 200
 *   2. does it declare hreflang alternates
 *   3. do the alternates it names actually resolve
 *   4. do those alternates point back (reciprocity)
 *   5. is <html lang> correct for the locale
 *   6. how much unique body text it has (thin-content signal)
 *
 * Run: node scripts/audit-i18n.mjs
 */

const BASE = "https://www.backyardstudioofficial.com";
const LOCALES = ["ar", "ru", "zh"];
const CONCURRENCY = 5;

/** Paths to test. EN path plus its three locale counterparts. */
const PATHS = [
  "/", "/services", "/pricing", "/contact", "/about",
  "/portfolio", "/locations", "/blog", "/testimonials",
];

const cache = new Map();

async function fetchPage(url) {
  if (cache.has(url)) return cache.get(url);
  let result;
  try {
    const res = await fetch(url, { redirect: "follow" });
    const html = res.ok ? await res.text() : "";
    result = { status: res.status, finalUrl: res.url, html };
  } catch (e) {
    result = { status: 0, finalUrl: url, html: "", error: String(e) };
  }
  cache.set(url, result);
  return result;
}

const alternatesOf = (html) =>
  [...html.matchAll(/<link[^>]*rel="alternate"[^>]*>/gi)]
    .map((m) => {
      const tag = m[0];
      const lang = (tag.match(/hreflang="([^"]+)"/i) || [])[1];
      const href = (tag.match(/href="([^"]+)"/i) || [])[1];
      return lang && href ? { lang, href } : null;
    })
    .filter(Boolean);

const htmlLangOf = (html) => (html.match(/<html[^>]*lang="([^"]+)"/i) || [])[1] || "";

/** Rough visible-text word count, scripts and tags stripped. */
function wordCount(html) {
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ");
  return text.trim().split(" ").filter((w) => w.length > 1).length;
}

async function pool(items, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx]);
      }
    })
  );
  return out;
}

const allPaths = [];
for (const p of PATHS) {
  allPaths.push(p);
  for (const l of LOCALES) allPaths.push(p === "/" ? `/${l}` : `/${l}${p}`);
}

console.log(`Auditing ${allPaths.length} URLs across EN + ${LOCALES.join(", ")}\n`);

const rows = await pool(allPaths, async (path) => {
  const r = await fetchPage(BASE + path);
  return {
    path,
    status: r.status,
    lang: htmlLangOf(r.html),
    alts: alternatesOf(r.html),
    words: r.html ? wordCount(r.html) : 0,
  };
});

const byPath = new Map(rows.map((r) => [r.path, r]));

const missing = [];
const nonReciprocal = [];
const brokenAlt = [];
const badLang = [];
const thin = [];

for (const r of rows) {
  if (r.status !== 200) {
    missing.push(`${r.path}  -> HTTP ${r.status}`);
    continue;
  }

  const expectedLang = LOCALES.find((l) => r.path === `/${l}` || r.path.startsWith(`/${l}/`)) || "en";
  if (r.lang && !r.lang.startsWith(expectedLang)) {
    badLang.push(`${r.path}  -> <html lang="${r.lang}">, expected "${expectedLang}"`);
  }

  if (r.alts.length === 0) {
    nonReciprocal.push(`${r.path}  -> declares NO hreflang alternates at all`);
  } else {
    for (const a of r.alts) {
      const altPath = a.href.replace(BASE, "") || "/";
      const target = byPath.get(altPath);
      if (target && target.status !== 200) {
        brokenAlt.push(`${r.path}  -> hreflang="${a.lang}" points at ${altPath} which returns ${target.status}`);
      }
      if (target && a.lang !== "x-default" && target.status === 200 && target.alts.length === 0) {
        nonReciprocal.push(
          `${r.path}  -> names ${altPath} as its "${a.lang}" version, but ${altPath} declares no alternates back (Google discards the whole cluster)`
        );
      }
    }
  }

  if (r.words > 0 && r.words < 350) {
    thin.push(`${r.path}  -> ~${r.words} words of total page text`);
  }
}

const section = (title, items) => {
  console.log(`\n${title}  (${items.length})`);
  if (!items.length) { console.log("  none"); return; }
  for (const i of [...new Set(items)]) console.log("  " + i);
};

section("MISSING / NON-200", missing);
section("BROKEN HREFLANG TARGET", brokenAlt);
section("NON-RECIPROCAL HREFLANG", nonReciprocal);
section("WRONG <html lang>", badLang);
section("THIN (<350 words total page text)", thin);

console.log("\n--- word counts by path ---");
for (const r of rows.filter((x) => x.status === 200).sort((a, b) => a.words - b.words)) {
  console.log(`  ${String(r.words).padStart(5)}  ${r.path}`);
}
