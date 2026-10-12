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

function analyse(url, html) {
  const issues = [];

  const robots = tag(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i) || "";
  if (/noindex/i.test(robots)) issues.push({ type: "NOINDEX", detail: robots });

  const title = tag(html, /<title>([\s\S]*?)<\/title>/i) || "";
  const titleLen = title.replace(/&amp;/g, "&").length;
  if (!title) issues.push({ type: "TITLE_MISSING" });
  else if (titleLen > TITLE_MAX) issues.push({ type: "TITLE_LONG", detail: `${titleLen} chars`, value: title });

  const desc = tag(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || "";
  if (!desc) issues.push({ type: "DESC_MISSING" });
  else if (desc.length > DESC_MAX) issues.push({ type: "DESC_LONG", detail: `${desc.length} chars` });
  else if (desc.length < DESC_MIN) issues.push({ type: "DESC_SHORT", detail: `${desc.length} chars` });

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
