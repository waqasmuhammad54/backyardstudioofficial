/**
 * Calibration probe for audit-duplicate-content.mjs.
 *
 * The full audit reported 0 near-duplicate clusters across 460 pages, and
 * reported dropping 0 boilerplate shingles for Arabic and Russian — which
 * cannot be right, because every page on the site shares a navbar and footer.
 * "0 problems found" and "0 things actually measured" look identical in a
 * summary line, so this prints the raw numbers for page sets that are KNOWN to
 * be templated siblings. If these score low, the site really is fine. If they
 * score high, the audit's grouping or threshold is wrong.
 *
 * Run: node scripts/probe-similarity.mjs
 */
const BASE = "https://www.backyardstudioofficial.com";
const SHINGLE = 7;

const SETS = {
  "wedding city siblings (EN)": [
    "/services/wedding-photography-abu-dhabi",
    "/services/wedding-photography-sharjah",
    "/services/wedding-photography-ajman",
    "/services/wedding-photography-fujairah",
    "/services/wedding-photography-umm-al-quwain",
    "/services/wedding-photography-ras-al-khaimah",
  ],
  "abu dhabi area pages (EN)": [
    "/locations/abu-dhabi/yas-island",
    "/locations/abu-dhabi/saadiyat-island",
    "/locations/abu-dhabi/al-maryah-island",
    "/locations/abu-dhabi/corniche",
  ],
  "dubai area pages (EN)": [
    "/locations/dubai/dubai-marina",
    "/locations/dubai/downtown-dubai",
    "/locations/dubai/business-bay",
    "/locations/dubai/palm-jumeirah",
    "/locations/dubai/difc",
    "/locations/dubai/al-quoz",
  ],
  "the two drone pages (EN)": [
    "/locations/dubai/drone-videography",
    "/locations/abu-dhabi/drone-videography",
  ],
  "duplicate RU maternity pair": [
    "/ru/blog/fotosessiya-beremennosti-dubai-2026",
    "/ru/blog/fotografiya-beremennosti-dubai-2026",
  ],
  "AR core pages (boilerplate sanity check)": [
    "/ar", "/ar/services", "/ar/pricing", "/ar/about", "/ar/contact",
  ],
};

const FULLWIDTH =
  /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿ꀀ-꓏가-힣豈-﫿︰-﹯＀-｠]/;

function textOf(html) {
  let s = html;
  const main = s.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (main) s = main[1];
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'");
}

function tokenise(text, lang) {
  if (lang === "zh") return [...text].filter((c) => FULLWIDTH.test(c));
  return text.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 1);
}

const shingles = (t, n) => {
  const s = new Set();
  for (let i = 0; i + n <= t.length; i++) s.add(t.slice(i, i + n).join("\u0001"));
  return s;
};

const jac = (a, b) => {
  let inter = 0;
  const [small, big] = a.size <= b.size ? [a, b] : [b, a];
  for (const x of small) if (big.has(x)) inter++;
  const u = a.size + b.size - inter;
  return u ? inter / u : 0;
};

const langOf = (p) => (p.match(/^\/(ar|ru|zh)(\/|$)/) || [])[1] || "en";

for (const [label, paths] of Object.entries(SETS)) {
  console.log(`\n=== ${label} ===`);
  const docs = [];
  for (const p of paths) {
    const res = await fetch(BASE + p, { redirect: "manual" });
    if (res.status !== 200) { console.log(`  ${p} -> ${res.status}, skipped`); continue; }
    const txt = textOf(await res.text());
    const toks = tokenise(txt, langOf(p));
    docs.push({ p, toks, sh: shingles(toks, SHINGLE) });
    console.log(`  ${String(toks.length).padStart(5)} tokens, ${String(shingles(toks, SHINGLE).size).padStart(5)} shingles  ${p}`);
  }
  if (docs.length < 2) continue;

  // RAW similarity, no boilerplate removal — this is the number that tells us
  // whether the pages themselves are near-identical as Google sees them.
  console.log("  -- raw Jaccard (boilerplate INCLUDED) --");
  let hi = 0;
  for (let i = 0; i < docs.length; i++)
    for (let j = i + 1; j < docs.length; j++) {
      const s = jac(docs[i].sh, docs[j].sh);
      hi = Math.max(hi, s);
      if (s >= 0.2) console.log(`     ${(s * 100).toFixed(0)}%  ${docs[i].p}  <->  ${docs[j].p}`);
    }
  console.log(`     highest: ${(hi * 100).toFixed(0)}%`);

  // How much of each page is shared by MOST of this set (i.e. is template)?
  const freq = new Map();
  for (const d of docs) for (const s of d.sh) freq.set(s, (freq.get(s) || 0) + 1);
  const shared = [...freq.values()].filter((v) => v === docs.length).length;
  const avg = docs.reduce((a, d) => a + d.sh.size, 0) / docs.length;
  console.log(`     ${shared} shingles present on ALL ${docs.length} pages (avg page has ${Math.round(avg)}) = ${((shared / avg) * 100).toFixed(0)}% templated`);
}
