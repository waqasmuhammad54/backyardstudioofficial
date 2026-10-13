/**
 * Full technical-SEO crawl of the live site.
 *
 * Checks, per URL, against the sitemap:
 *   - HTTP status (and any redirect)
 *   - noindex / nofollow robots meta
 *   - <title> length  (target <= 60; flagged > 60)
 *   - meta description length (target <= 155; flagged > 160 or missing)
 *   - canonical present, self-referencing, absolute, https
 *   - exactly one <h1>
 *   - heading hierarchy (no skipped levels, e.g. h2 -> h4)
 *   - images missing alt text
 *   - presence of JSON-LD schema
 *   - internal links that 404 or redirect (sampled across the crawl)
 *
 * Writes a JSON report so fixes can be driven from data rather than guesses.
 *
 * Run: node scripts/audit-technical-seo.mjs [limit]
 */
import { writeFileSync } from "node:fs";

const BASE = "https://www.backyardstudioofficial.com";
const CONCURRENCY = 6;
const LIMIT = Number(process.argv[2]) || Infinity;

const TITLE_MAX = 60;
const DESC_MAX = 160;
const DESC_MIN = 70;

const get = async (url) => {
  try {
    const res = await fetch(url, { redirect: "manual" });
    if (res.status >= 300 && res.status < 400) {
      return { status: res.status, location: res.headers.get("location"), html: "" };
    }
    return { status: res.status, html: res.status === 200 ? await res.text() : "" };
  } catch (e) {
    return { status: 0, html: "", error: String(e) };
  }
};

const tag = (html, re) => (html.match(re) || [])[1];

/**
 * Decode the handful of entities Next.js actually emits into <title> and
 * meta content. Without this, `&amp;` counts as 5 characters when Google
 * renders 1, and a 59-character title gets reported as 63 and "fixed".
 */
const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2F;|&#47;/g, "/")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)));

/**
 * ⚠️ Google truncates titles and descriptions by PIXEL WIDTH (~600px on
 * desktop), not by character count. Counting characters is a Latin-calibrated
 * proxy, and on this site it was wrong in BOTH directions at once:
 *
 *   - CJK glyphs are full-width, roughly 2x a Latin lowercase letter. A
 *     66-character Chinese title is ~96 Latin-widths — badly truncated — yet
 *     a flat 60-char limit barely flagged it, and would not have flagged a
 *     55-character one that is just as broken.
 *   - Conversely CJK packs far more meaning per character, so a 70-char
 *     DESC_MIN flagged four Chinese pages as "thin" when they are not.
 *     Padding real pages with filler to satisfy a Latin metric is the same
 *     class of error as the trim that deleted "From AED 1,500." — the number
 *     goes green and the page gets worse.
 *
 * So measure width, not length: CJK and other full-width glyphs count 2, the
 * rest count 1. The thresholds below stay at the familiar Latin values, which
 * now mean "60 Latin characters WIDE" and behave correctly for Arabic and
 * Cyrillic (near-Latin width) and for mixed titles where a Latin brand suffix
 * trails Chinese copy — no script-detection guess required.
 */
const FULLWIDTH =
  /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿ꀀ-꓏가-힣豈-﫿︰-﹯＀-｠￠-￦]/;
const width = (s) => [...s].reduce((w, c) => w + (FULLWIDTH.test(c) ? 2 : 1), 0);

function analyse(url, html) {
  const issues = [];

  const robots = tag(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i) || "";
  if (/noindex/i.test(robots)) issues.push({ type: "NOINDEX", detail: robots });

  const title = decode(tag(html, /<title>([\s\S]*?)<\/title>/i) || "");
  const titleW = width(title);
  if (!title) issues.push({ type: "TITLE_MISSING" });
  else if (titleW > TITLE_MAX)
    issues.push({
      type: "TITLE_LONG",
      detail: `${titleW} widths / ${title.length} chars (max ${TITLE_MAX})`,
      value: title,
    });

  // Doubled brand suffix — the Next.js `title.template` appends "| Brand" to
  // a bare string, so a title that already ends in the brand gets it twice.
  // This has now been introduced four separate times (EN in August, locale
  // pages twice, case studies once), so it is checked rather than remembered.
  const brandDouble = title.match(
    /(Backyard(?:\s+Studio)?)\s*\|\s*Backyard\s+Studio|(باكيارد(?:\s+ستوديو)?)\s*\|\s*باكيارد\s+ستوديو/i,
  );
  if (brandDouble) issues.push({ type: "TITLE_BRAND_DOUBLED", detail: brandDouble[0], value: title });

  const desc = decode(tag(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || "");
  const descW = width(desc);
  if (!desc) issues.push({ type: "DESC_MISSING" });
  else if (descW > DESC_MAX)
    issues.push({
      type: "DESC_LONG",
      detail: `${descW} widths / ${desc.length} chars (max ${DESC_MAX})`,
      value: desc,
    });
  else if (descW < DESC_MIN)
    issues.push({
      type: "DESC_SHORT",
      detail: `${descW} widths / ${desc.length} chars (min ${DESC_MIN})`,
      value: desc,
    });

  const canonical = tag(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  if (!canonical) issues.push({ type: "CANONICAL_MISSING" });
  else {
    if (!canonical.startsWith("https://")) issues.push({ type: "CANONICAL_NOT_HTTPS", detail: canonical });
    const self = canonical.replace(/\/$/, "") === url.replace(/\/$/, "");
    if (!self) issues.push({ type: "CANONICAL_CROSS", detail: canonical });
  }

  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length === 0) issues.push({ type: "H1_MISSING" });
  else if (h1s.length > 1) issues.push({ type: "H1_MULTIPLE", detail: `${h1s.length}` });

  // Heading order: collect levels in document order, flag any jump > 1.
  const levels = [...html.matchAll(/<h([1-6])[^>]*>/gi)].map((m) => Number(m[1]));
  let prev = 0;
  for (const lvl of levels) {
    if (prev && lvl > prev + 1) {
      issues.push({ type: "HEADING_SKIP", detail: `h${prev} -> h${lvl}` });
      break;
    }
    prev = lvl;
  }

  // Images without alt. next/image renders <img ... alt="">; empty alt is
  // valid for decorative images, so only a MISSING alt attribute is flagged.
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);
  const noAlt = imgs.filter((t) => !/\salt\s*=/.test(t));
  if (noAlt.length) issues.push({ type: "IMG_NO_ALT", detail: `${noAlt.length} of ${imgs.length}` });

  if (!/application\/ld\+json/.test(html)) issues.push({ type: "SCHEMA_MISSING" });

  const internal = [...html.matchAll(/href="(\/[^"#?][^"]*)"/g)].map((m) => m[1]);

  return { issues, internal: [...new Set(internal)], titleLen, descLen: desc.length };
}

async function pool(items, fn) {
  const out = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (i < items.length) {
        const idx = i++;
        out[idx] = await fn(items[idx], idx);
      }
    })
  );
  return out;
}

// ── sitemap ───────────────────────────────────────────────────────────────
console.log("Fetching sitemap…");
const smRes = await fetch(`${BASE}/sitemap.xml`);
const sm = await smRes.text();
let urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
console.log(`sitemap: ${urls.length} URLs (sitemap.xml status ${smRes.status})`);
if (urls.length > LIMIT) urls = urls.slice(0, LIMIT);

// ── robots.txt ────────────────────────────────────────────────────────────
const robotsRes = await fetch(`${BASE}/robots.txt`);
const robotsTxt = robotsRes.ok ? await robotsRes.text() : "";
console.log(`robots.txt: status ${robotsRes.status}, ${robotsTxt.split("\n").length} lines, sitemap declared: ${/sitemap:/i.test(robotsTxt)}`);

// ── https enforcement ─────────────────────────────────────────────────────
try {
  const httpRes = await fetch("http://backyardstudioofficial.com/", { redirect: "manual" });
  console.log(`http://apex -> ${httpRes.status} ${httpRes.headers.get("location") || ""}`);
} catch { console.log("http://apex -> fetch failed"); }

// ── crawl ─────────────────────────────────────────────────────────────────
console.log(`\nCrawling ${urls.length} URLs…`);
const pages = await pool(urls, async (url, i) => {
  if (i % 50 === 0 && i) console.log(`  …${i}`);
  const r = await get(url);
  if (r.status !== 200) return { url, status: r.status, location: r.location, issues: [{ type: `HTTP_${r.status}`, detail: r.location || "" }], internal: [] };
  return { url, status: 200, ...analyse(url, r.html) };
});

// ── internal link check (unique targets, sampled) ─────────────────────────
const allInternal = new Set();
for (const p of pages) for (const l of p.internal || []) allInternal.add(l);
const linkTargets = [...allInternal].filter((l) => !/^\/(api|_next)/.test(l));
console.log(`\nChecking ${linkTargets.length} unique internal link targets…`);
const linkResults = await pool(linkTargets, async (path) => {
  const r = await get(BASE + path);
  return { path, status: r.status, location: r.location };
});

const broken = linkResults.filter((l) => l.status === 0 || l.status >= 400);
const redirecting = linkResults.filter((l) => l.status >= 300 && l.status < 400);

// ── report ────────────────────────────────────────────────────────────────
const counts = {};
for (const p of pages) for (const is of p.issues || []) counts[is.type] = (counts[is.type] || 0) + 1;

console.log("\n================ ISSUE SUMMARY ================");
for (const [k, v] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(v).padStart(4)}  ${k}`);
}
console.log(`  ${String(broken.length).padStart(4)}  BROKEN_INTERNAL_LINK`);
console.log(`  ${String(redirecting.length).padStart(4)}  INTERNAL_LINK_REDIRECTS`);

if (broken.length) {
  console.log("\nBroken internal links:");
  for (const b of broken.slice(0, 30)) console.log(`   ${b.status}  ${b.path}`);
}
if (redirecting.length) {
  console.log("\nInternal links that redirect:");
  for (const b of redirecting.slice(0, 30)) console.log(`   ${b.status}  ${b.path} -> ${b.location || ""}`);
}

writeFileSync(
  "technical-seo-report.json",
  JSON.stringify({ generated: new Date().toISOString(), counts, pages, broken, redirecting }, null, 2)
);
console.log("\nFull report written to technical-seo-report.json");
