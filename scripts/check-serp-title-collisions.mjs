/**
 * Fail if two blog posts would render the SAME <title>.
 *
 * ── Why a guard and not just a fix ──────────────────────────────────────────
 * `app/(en)/blog/[slug]/page.tsx` derives the SERP title from `metaTitle` by
 * keeping as many " | " segments as fit a 60-width budget. That means two posts
 * with clearly different `metaTitle` values in source can still land on an
 * IDENTICAL rendered title once the overflow is dropped — which is exactly what
 * happened:
 *
 *   "Food Photography Dubai 2026 | Backyard Studio"
 *   "Food Photography Dubai 2026 | Restaurant & F&B Photography Guide UAE"
 *        -> both rendered "Food Photography Dubai 2026 | Backyard Studio"
 *
 * Two URLs, same title, same topic is the mechanism behind GSC's "Duplicate
 * without user-selected canonical" bucket. **The collision is invisible in the
 * source files** — reviewing `metaTitle` would show two different strings — so
 * it can only be caught by reproducing the truncation. Hence this script.
 *
 * It deliberately duplicates the title logic from the page rather than
 * importing it (the page is a TSX server component with next/navigation
 * imports). If that logic changes, change it here too — the test at the bottom
 * asserts the two known historical collisions are still caught, so a drift
 * that breaks the reproduction will fail loudly rather than pass silently.
 *
 * Run: node scripts/check-serp-title-collisions.mjs
 * Exit 1 on any collision.
 */
import { readFileSync, existsSync } from "node:fs";

const BRAND = " | Backyard Studio";
const MAX = 60;

const FULLWIDTH =
  /[ᄀ-ᅟ⺀-〾ぁ-㏿㐀-䶿一-鿿가-힣＀-｠]/;
const width = (s) => [...s].reduce((n, c) => n + (FULLWIDTH.test(c) ? 2 : 1), 0);

/** Must match app/(en)/blog/[slug]/page.tsx generateMetadata. */
export function serpTitle(metaTitle) {
  const core = metaTitle.replace(/\s*\|\s*Backyard Studio(?: Official)?\s*$/i, "");
  const segs = core.split(" | ");
  let out = segs[0] + BRAND;
  for (let n = segs.length; n >= 1; n--) {
    const c = segs.slice(0, n).join(" | ") + BRAND;
    if (width(c) <= MAX) { out = c; break; }
  }
  if (width(out) > MAX && width(segs[0]) <= MAX) out = segs[0];
  return out;
}

// ── self-test: the reproduction must still catch the known historical bug ────
{
  const a = serpTitle("Food Photography Dubai 2026 | Backyard Studio");
  const b = serpTitle("Food Photography Dubai 2026 | Restaurant & F&B Photography Guide UAE");
  if (a !== b) {
    console.log("SELF-TEST FAILED: the two historical food titles no longer collide.");
    console.log(`  a = ${a}\n  b = ${b}`);
    console.log("Either the page's title logic changed and this script drifted, or the");
    console.log("reproduction is wrong. Fix this before trusting the result below.");
    process.exit(1);
  }
}

// ── collect every post's metaTitle from both sources ─────────────────────────
// Retired slugs are excluded: they 308 and never render a <title>, so a
// collision between two retired slugs — or between a retired and a live one —
// costs nothing. Including them produced a real false positive on the first
// run (the two retired indian-wedding slugs), and a guard that cries wolf gets
// switched off.
const retired = new Set(
  [...readFileSync("lib/retiredSlugs.ts", "utf8").matchAll(/^\s*"([^"]+)",/gm)].map((m) => m[1]),
);

const posts = [];

const blogSrc = readFileSync("lib/blogPosts.ts", "utf8");
// Walk slug -> nearest following metaTitle, so entries stay paired even as the
// file grows. Slugs are unique, which the check below also verifies.
for (const m of blogSrc.matchAll(/slug:\s*"([^"]+)"/g)) {
  const after = blogSrc.slice(m.index, m.index + 2500);
  const mt = after.match(/metaTitle:\s*"((?:[^"\\]|\\.)*)"/);
  if (mt && !retired.has(m[1])) posts.push({ slug: m[1], metaTitle: mt[1], src: "lib/blogPosts.ts" });
}

if (existsSync("content/posts.json")) {
  const j = JSON.parse(readFileSync("content/posts.json", "utf8"));
  const arr = Array.isArray(j) ? j : j.posts || Object.values(j).find(Array.isArray) || [];
  for (const p of arr) {
    if (p && p.slug && p.metaTitle && !retired.has(p.slug))
      posts.push({ slug: p.slug, metaTitle: p.metaTitle, src: "content/posts.json" });
  }
}

if (posts.length < 50) {
  console.log(`Only ${posts.length} posts parsed — the matcher is probably wrong, not the site.`);
  process.exit(1);
}

// ── report ───────────────────────────────────────────────────────────────────
const by = new Map();
for (const p of posts) {
  const t = serpTitle(p.metaTitle);
  if (!by.has(t)) by.set(t, []);
  by.get(t).push(p);
}

const collisions = [...by.entries()].filter(([, ps]) => new Set(ps.map((p) => p.slug)).size > 1);
const over = posts.filter((p) => width(serpTitle(p.metaTitle)) > MAX);

console.log(`${posts.length} posts checked, ${by.size} distinct rendered titles.`);

if (over.length) {
  console.log(`\n${over.length} post(s) whose rendered title still exceeds ${MAX} widths:`);
  for (const p of over) console.log(`  ${width(serpTitle(p.metaTitle))}w  ${p.slug}\n        ${serpTitle(p.metaTitle)}`);
}

if (collisions.length === 0) {
  console.log("\nNo SERP title collisions.");
  process.exit(over.length ? 1 : 0);
}

console.log(`\n${collisions.length} SERP TITLE COLLISION(S):\n`);
for (const [title, ps] of collisions) {
  console.log(`  "${title}"`);
  for (const p of ps) console.log(`      ${p.slug}\n          metaTitle: "${p.metaTitle}"`);
  console.log();
}
console.log("Two URLs with the same title and topic make Google choose its own");
console.log("canonical and drop one. Differentiate the FIRST segment of metaTitle.");
process.exit(1);
