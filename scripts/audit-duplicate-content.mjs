/**
 * Find near-duplicate pages on the live site, from rendered HTML.
 *
 * ── Why this exists ──────────────────────────────────────────────────────────
 * KEYWORD_MAP.md puts "fix the 38 duplicates" first, ahead of every content
 * build, because nothing else compounds while they sit there. But "38
 * duplicates" came from Search Console's own bucket, which names the URLs and
 * not the reason. This script answers the part GSC does not: WHICH pages are
 * near-identical to WHICH, and by how much.
 *
 * ── Why it reads rendered HTML rather than the source data ───────────────────
 * Google judges the rendered page. Two entries in a PAGES map can look very
 * different in source — different intro arrays, different FAQ objects — and
 * still render 85% identical once shared template chrome, boilerplate CTAs and
 * a near-identical pricing table are included. The reverse is also true. So
 * the only measurement that means anything here is the output.
 *
 * ── Boilerplate is stripped, or everything looks duplicate ───────────────────
 * Every page shares a navbar, footer, WhatsApp button and CTA block. Left in,
 * those alone put the floor around 60% similarity and the signal disappears.
 * The script therefore builds a frequency map of shingles first and discards
 * any shingle appearing on more than BOILERPLATE_RATIO of pages, which removes
 * site chrome without needing to hand-list selectors that will drift.
 *
 * ── Measurement notes ────────────────────────────────────────────────────────
 * - Compares pages within the same LANGUAGE only. An English page and its
 *   Arabic translation share no shingles, so cross-language scores are
 *   meaningless noise, and a legitimate translation is not a duplicate.
 * - Uses word 7-grams and Jaccard similarity on the shingle sets. 7 is long
 *   enough that a shared phrase ("video production in Dubai") does not score,
 *   but short enough to catch a reworded sentence.
 * - Reports CLUSTERS, not pairs: three near-identical city pages are one
 *   problem, not three.
 *
 * Run: node scripts/audit-duplicate-content.mjs [--threshold 0.5] [--limit N]
 * Writes duplicate-content-report.json.
 */
import { writeFileSync } from "node:fs";

const BASE = "https://www.backyardstudioofficial.com";
const CONCURRENCY = 6;
const SHINGLE = 7;
const BOILERPLATE_RATIO = 0.25; // a 7-gram on >25% of pages is site chrome
const MIN_WORDS = 120;          // below this a page is too short to judge

const argv = process.argv.slice(2);
const argOf = (name, dflt) => {
  const i = argv.indexOf(name);
  return i === -1 ? dflt : Number(argv[i + 1]);
};
const THRESHOLD = argOf("--threshold", 0.5);
const LIMIT = argOf("--limit", Infinity);

// ── fetch ────────────────────────────────────────────────────────────────────

async function get(url) {
  try {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status !== 200) return { status: res.status, html: "" };
    return { status: 200, html: await res.text() };
  } catch (e) {
    return { status: 0, html: "", error: String(e) };
  }
}

async function pool(items, worker) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const n = i++;
        out[n] = await worker(items[n], n);
      }
    }),
  );
  return out;
}

// ── text extraction ──────────────────────────────────────────────────────────

/**
 * Pull the human-readable words out of <main>, falling back to <body>.
 * Deliberately crude: script/style/noscript/svg and all JSON-LD are dropped,
 * tags are replaced with spaces (not removed, or "a</p><p>b" becomes "ab"),
 * and entities are decoded before splitting on whitespace.
 */
function textOf(html) {
  let s = html;
  const main = s.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (main) s = main[1];
  else {
    const body = s.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (body) s = body[1];
  }
  s = s
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));
  return s;
}

/**
 * CJK has no spaces, so splitting on whitespace yields almost nothing and every
 * Chinese page would score as "too short to judge". Same measurement trap that
 * produced a false "seven thin Chinese pages" finding earlier in this project.
 * For CJK, each character is its own token.
 */
const FULLWIDTH =
  /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿ꀀ-꓏가-힣豈-﫿︰-﹯＀-｠]/;

function tokenise(text, lang) {
  if (lang === "zh") {
    return [...text].filter((c) => FULLWIDTH.test(c));
  }
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

function shingles(tokens, n) {
  const set = new Set();
  for (let i = 0; i + n <= tokens.length; i++) set.add(tokens.slice(i, i + n).join("\u0001"));
  return set;
}

const langOf = (path) => {
  const m = path.match(/^\/(ar|ru|zh)(\/|$)/);
  return m ? m[1] : "en";
};

// ── main ─────────────────────────────────────────────────────────────────────

console.log("Fetching sitemap…");
const smRes = await get(`${BASE}/sitemap.xml`);
if (smRes.status !== 200) {
  console.log(`sitemap returned ${smRes.status} — aborting`);
  process.exit(1);
}
let urls = [...smRes.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (Number.isFinite(LIMIT)) urls = urls.slice(0, LIMIT);
console.log(`${urls.length} URLs\n`);

console.log("Crawling…");
let done = 0;
const pages = await pool(urls, async (url) => {
  const r = await get(url);
  if (++done % 50 === 0) console.log(`  …${done}`);
  const path = url.replace(BASE, "") || "/";
  const lang = langOf(path);
  const tokens = r.status === 200 ? tokenise(textOf(r.html), lang) : [];
  return { path, lang, status: r.status, tokens };
});

const usable = pages.filter((p) => p.status === 200 && p.tokens.length >= MIN_WORDS);
const skipped = pages.filter((p) => p.status === 200 && p.tokens.length < MIN_WORDS);
console.log(`\n${usable.length} comparable, ${skipped.length} below ${MIN_WORDS} tokens, ${pages.length - usable.length - skipped.length} non-200\n`);

// Per-language boilerplate removal, then compare.
const byLang = {};
for (const p of usable) (byLang[p.lang] ??= []).push(p);

const clusters = [];
const thinPages = skipped.map((p) => ({ path: p.path, tokens: p.tokens.length }));

for (const [lang, group] of Object.entries(byLang)) {
  // frequency of each shingle across this language's pages
  const freq = new Map();
  for (const p of group) {
    p.sh = shingles(p.tokens, SHINGLE);
    for (const s of p.sh) freq.set(s, (freq.get(s) || 0) + 1);
  }
  const cap = Math.max(2, Math.floor(group.length * BOILERPLATE_RATIO));
  let removed = 0;
  for (const p of group) {
    const kept = new Set();
    for (const s of p.sh) if (freq.get(s) <= cap) kept.add(s);
    removed += p.sh.size - kept.size;
    p.body = kept;
  }
  console.log(`[${lang}] ${group.length} pages, dropped ${removed} boilerplate shingle instances (cap ${cap} pages)`);

  // pairwise Jaccard
  const pairs = [];
  for (let i = 0; i < group.length; i++) {
    const a = group[i];
    if (a.body.size < 20) continue;
    for (let j = i + 1; j < group.length; j++) {
      const b = group[j];
      if (b.body.size < 20) continue;
      let inter = 0;
      const [small, big] = a.body.size <= b.body.size ? [a.body, b.body] : [b.body, a.body];
      for (const s of small) if (big.has(s)) inter++;
      const union = a.body.size + b.body.size - inter;
      const sim = union ? inter / union : 0;
      if (sim >= THRESHOLD) pairs.push({ a: a.path, b: b.path, sim });
    }
  }

  // union-find the pairs into clusters, so N near-identical pages are ONE finding
  const parent = new Map();
  const find = (x) => {
    if (!parent.has(x)) parent.set(x, x);
    while (parent.get(x) !== x) { parent.set(x, parent.get(parent.get(x))); x = parent.get(x); }
    return x;
  };
  const union = (x, y) => { const rx = find(x), ry = find(y); if (rx !== ry) parent.set(rx, ry); };
  for (const p of pairs) union(p.a, p.b);

  const groups = new Map();
  for (const key of parent.keys()) {
    const root = find(key);
    (groups.get(root) ?? groups.set(root, []).get(root)).push(key);
  }
  for (const [, members] of groups) {
    if (members.length < 2) continue;
    const inner = pairs.filter((p) => members.includes(p.a) && members.includes(p.b));
    clusters.push({
      lang,
      size: members.length,
      maxSim: Math.max(...inner.map((p) => p.sim)),
      avgSim: inner.reduce((s, p) => s + p.sim, 0) / inner.length,
      members: members.sort(),
      pairs: inner.sort((x, y) => y.sim - x.sim).slice(0, 8),
    });
  }
}

clusters.sort((a, b) => b.size - a.size || b.maxSim - a.maxSim);

console.log(`\n=== ${clusters.length} near-duplicate cluster(s) at >=${THRESHOLD} Jaccard ===\n`);
for (const c of clusters) {
  console.log(`[${c.lang}] ${c.size} pages, max ${(c.maxSim * 100).toFixed(0)}% / avg ${(c.avgSim * 100).toFixed(0)}%`);
  for (const m of c.members) console.log(`     ${m}`);
  for (const p of c.pairs.slice(0, 3)) console.log(`     ~ ${(p.sim * 100).toFixed(0)}%  ${p.a}  <->  ${p.b}`);
  console.log();
}

if (thinPages.length) {
  console.log(`=== ${thinPages.length} page(s) under ${MIN_WORDS} tokens ===`);
  for (const t of thinPages.sort((a, b) => a.tokens - b.tokens)) console.log(`  ${String(t.tokens).padStart(4)}  ${t.path}`);
}

writeFileSync(
  "duplicate-content-report.json",
  JSON.stringify({ generated: new Date().toISOString(), threshold: THRESHOLD, shingle: SHINGLE, clusters, thinPages }, null, 2),
);
console.log(`\nWrote duplicate-content-report.json`);
if (clusters.length === 0 && thinPages.length === 0) {
  console.log("NOTHING FOUND — check the extractor before concluding the site is clean.");
}
