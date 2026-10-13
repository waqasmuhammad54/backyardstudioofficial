/**
 * Find pages whose TITLE / DESCRIPTION / H1 collide or nearly collide.
 *
 * ── Why this, after audit-duplicate-content.mjs found nothing ────────────────
 * That script measured body prose across all 460 pages and found a site-wide
 * maximum similarity of 21%. The templated wedding-city pages score 5%. So the
 * body copy on this site is genuinely differentiated, and GSC's "Duplicate
 * without user-selected canonical" bucket is NOT being caused by duplicate
 * prose.
 *
 * On a site with differentiated bodies, that bucket is usually driven by
 * duplicate SIGNALS instead: two pages whose title, description and H1 say the
 * same thing make Google treat them as the same intent and pick one canonical
 * itself, regardless of how different the paragraphs are. That is a different
 * defect with a different fix — rewrite the signal, do not merge the page —
 * which is why it is measured separately rather than folded into the other
 * script.
 *
 * Also reports:
 *   - exact collisions, which are unambiguous bugs
 *   - thin pages by WIDTH, not character or word count (CJK is full-width and
 *     space-free; counting either way has already produced one false "thin
 *     Chinese pages" finding on this project)
 *
 * Compares within the same language only: an English title and its Arabic
 * translation share no tokens, and a translation is not a duplicate.
 *
 * Run: node scripts/audit-duplicate-signals.mjs [--threshold 0.6]
 * Writes duplicate-signals-report.json.
 */
import { writeFileSync } from "node:fs";

const BASE = "https://www.backyardstudioofficial.com";
const CONCURRENCY = 6;

const argv = process.argv.slice(2);
const i = argv.indexOf("--threshold");
const THRESHOLD = i === -1 ? 0.6 : Number(argv[i + 1]);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));

const FULLWIDTH =
  /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿ꀀ-꓏가-힣豈-﫿︰-﹯＀-｠]/;
const width = (s) => [...s].reduce((w, c) => w + (FULLWIDTH.test(c) ? 2 : 1), 0);

async function get(url) {
  try {
    const r = await fetch(url, { redirect: "manual" });
    return { status: r.status, html: r.status === 200 ? await r.text() : "" };
  } catch (e) { return { status: 0, html: "" }; }
}
async function pool(items, worker) {
  const out = []; let n = 0;
  await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
    while (n < items.length) { const k = n++; out[k] = await worker(items[k], k); }
  }));
  return out;
}

const tag = (h, re) => decode((h.match(re) || [])[1] || "").replace(/\s+/g, " ").trim();
const langOf = (p) => (p.match(/^\/(ar|ru|zh)(\/|$)/) || [])[1] || "en";

/**
 * Strip the brand suffix before comparing. Every title ends in the brand, so
 * leaving it in inflates every pair by a constant and compresses the range
 * where the real signal lives.
 */
const BRAND = /\s*[|—–-]\s*(Backyard Studio(?: Official)?|باكيارد ستوديو)\s*$/i;

function toks(s, lang) {
  const core = s.replace(BRAND, "");
  if (lang === "zh") return new Set([...core].filter((c) => FULLWIDTH.test(c)));
  return new Set(core.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").split(/\s+/).filter((w) => w.length > 1));
}
const jac = (a, b) => {
  let x = 0; const [s, g] = a.size <= b.size ? [a, b] : [b, a];
  for (const t of s) if (g.has(t)) x++;
  const u = a.size + b.size - x;
  return u ? x / u : 0;
};

console.log("Fetching sitemap…");
const sm = await get(`${BASE}/sitemap.xml`);
if (sm.status !== 200) { console.log(`sitemap ${sm.status} — abort`); process.exit(1); }
const urls = [...sm.html.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
console.log(`${urls.length} URLs\n`);

let done = 0;
const pages = (await pool(urls, async (u) => {
  const r = await get(u);
  if (++done % 100 === 0) console.log(`  …${done}`);
  if (r.status !== 200) return null;
  const path = u.replace(BASE, "") || "/";
  const h1s = [...r.html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)]
    .map((m) => decode(m[1].replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim());
  const body = (() => {
    const m = r.html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    const s = (m ? m[1] : r.html)
      .replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ").replace(/<[^>]+>/g, " ");
    return decode(s).replace(/\s+/g, " ").trim();
  })();
  return {
    path, lang: langOf(path),
    title: tag(r.html, /<title>([\s\S]*?)<\/title>/i),
    desc: tag(r.html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    h1: h1s[0] || "",
    bodyWidth: width(body),
  };
})).filter(Boolean);

console.log(`\n${pages.length} pages fetched\n`);

const report = { generated: new Date().toISOString(), threshold: THRESHOLD, exact: {}, near: [], thin: [] };

// ── exact collisions ─────────────────────────────────────────────────────────
for (const field of ["title", "desc", "h1"]) {
  const by = new Map();
  for (const p of pages) {
    const v = p[field];
    if (!v) continue;
    (by.get(v) ?? by.set(v, []).get(v)).push(p.path);
  }
  const dupes = [...by.entries()].filter(([, ps]) => ps.length > 1)
    .map(([v, ps]) => ({ value: v, pages: ps.sort() }))
    .sort((a, b) => b.pages.length - a.pages.length);
  report.exact[field] = dupes;
  console.log(`=== EXACT duplicate ${field}: ${dupes.length} value(s) across ${dupes.reduce((s, d) => s + d.pages.length, 0)} pages ===`);
  for (const d of dupes.slice(0, 12)) {
    console.log(`  ${d.pages.length}x  "${d.value.slice(0, 80)}"`);
    for (const pp of d.pages.slice(0, 6)) console.log(`        ${pp}`);
  }
  console.log();
}

// ── near-identical signal sets, within language ──────────────────────────────
const byLang = {};
for (const p of pages) (byLang[p.lang] ??= []).push(p);
for (const [lang, group] of Object.entries(byLang)) {
  for (const p of group) {
    p.tT = toks(p.title, lang);
    p.tD = toks(p.desc, lang);
    p.tH = toks(p.h1, lang);
  }
  for (let a = 0; a < group.length; a++)
    for (let b = a + 1; b < group.length; b++) {
      const x = group[a], y = group[b];
      const st = jac(x.tT, y.tT), sd = jac(x.tD, y.tD), sh = jac(x.tH, y.tH);
      // A page is a signal-duplicate when the title AND one of desc/H1 agree.
      // Title alone is too noisy on a site where every title names the city.
      const combined = (st + Math.max(sd, sh)) / 2;
      if (st >= THRESHOLD && combined >= THRESHOLD)
        report.near.push({ lang, a: x.path, b: y.path, title: +st.toFixed(2), desc: +sd.toFixed(2), h1: +sh.toFixed(2), combined: +combined.toFixed(2) });
    }
}
report.near.sort((p, q) => q.combined - p.combined);
console.log(`=== NEAR-identical signals (title >=${THRESHOLD} AND title+best(desc,h1) >=${THRESHOLD}): ${report.near.length} pair(s) ===`);
for (const n of report.near.slice(0, 40))
  console.log(`  ${(n.combined * 100).toFixed(0)}%  [t${(n.title * 100).toFixed(0)} d${(n.desc * 100).toFixed(0)} h${(n.h1 * 100).toFixed(0)}]  ${n.a}  <->  ${n.b}`);

// ── thin, by width ───────────────────────────────────────────────────────────
const THIN = 1200; // Latin-equivalent widths of <main> text
report.thin = pages.filter((p) => p.bodyWidth < THIN)
  .map((p) => ({ path: p.path, width: p.bodyWidth, lang: p.lang }))
  .sort((a, b) => a.width - b.width);
console.log(`\n=== Pages under ${THIN} widths of main content: ${report.thin.length} ===`);
for (const t of report.thin) console.log(`  ${String(t.width).padStart(5)}w  [${t.lang}]  ${t.path}`);

writeFileSync("duplicate-signals-report.json", JSON.stringify(report, null, 2));
console.log(`\nWrote duplicate-signals-report.json`);
const total = Object.values(report.exact).reduce((s, d) => s + d.length, 0) + report.near.length + report.thin.length;
if (total === 0) console.log("NOTHING FOUND across all three checks — verify the extractor before concluding the site is clean.");
else console.log(`${total} finding(s) total.`);
