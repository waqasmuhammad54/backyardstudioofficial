/**
 * Repoint retired slugs inside `relatedSlugs` arrays.
 *
 * The second crawl showed 15 internal links still hitting a 308. They are not
 * hrefs — they are bare slugs in the `relatedSlugs: [...]` arrays in
 * lib/blogPosts.ts, which the blog template turns into /blog/<slug> links.
 * The previous link fix only looked for quoted PATHS, so it could not see them.
 *
 * ⚠️ ONLY `relatedSlugs` ARRAYS ARE TOUCHED.
 *
 * Several of these strings are ALSO the `slug:` of the retired post itself —
 * those entries still exist in blogPosts.ts on purpose, with
 * lib/retiredSlugs.ts keeping them out of the sitemap and next.config.mjs
 * redirecting them. Rewriting a `slug:` would break the redirect target and
 * could resurrect a duplicate. So the replacement is scoped to the inside of
 * relatedSlugs arrays and nothing else.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** retired slug -> surviving slug (destinations observed live by the crawl) */
const MAP = {
  "indian-wedding-photography-dubai": "indian-wedding-photographer-dubai-2026",
  "indian-wedding-photography-dubai-2026": "indian-wedding-photographer-dubai-2026",
  "commercial-production-dubai-2026": "tv-commercial-dubai-2026",
  "drone-photography-dubai-2026": "aerial-videography-dubai-2026",
  "business-headshots-dubai-2026": "headshot-photographer-dubai-2026",
  "headshot-photography-dubai-2026": "headshot-photographer-dubai-2026",
  "birthday-party-photographer-dubai-2026": "birthday-photographer-dubai-2026",
  "car-photography-dubai-2026": "automotive-photography-dubai-2026",
  "maternity-photography-dubai-2026": "maternity-photographer-dubai-2026",
  "kids-photography-dubai-2026": "kids-photographer-dubai-2026",
  "best-social-media-content-creators-dubai-2026": "social-media-content-creator-dubai-2026",
  "social-media-content-creation-dubai-2026": "social-media-content-creator-dubai-2026",
};

const file = resolve(root, "lib/blogPosts.ts");
let src = readFileSync(file, "utf8");

let replaced = 0;
let selfRefsDropped = 0;

src = src.replace(/relatedSlugs:\s*\[([^\]]*)\]/g, (match, body) => {
  let changed = false;
  let out = body;
  for (const [from, to] of Object.entries(MAP)) {
    const needle = `"${from}"`;
    if (!out.includes(needle)) continue;
    const n = out.split(needle).length - 1;
    out = out.split(needle).join(`"${to}"`);
    replaced += n;
    changed = true;
  }
  if (!changed) return match;

  // A rewrite can produce duplicates, or make a post reference itself.
  const slugs = [...out.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
  const unique = [...new Set(slugs)];
  if (unique.length !== slugs.length) selfRefsDropped += slugs.length - unique.length;
  return `relatedSlugs: [${unique.map((s) => `"${s}"`).join(", ")}]`;
});

writeFileSync(file, src);
console.log(`  ${replaced} retired slug reference(s) repointed in relatedSlugs`);
if (selfRefsDropped) console.log(`  ${selfRefsDropped} duplicate(s) removed after rewriting`);

// Second pass: a post must never list itself as related.
let selfLinks = 0;
src = readFileSync(file, "utf8");
src = src.replace(
  /slug:\s*"([a-z0-9-]+)"([\s\S]{0,4000}?)relatedSlugs:\s*\[([^\]]*)\]/g,
  (match, slug, between, body) => {
    if (!body.includes(`"${slug}"`)) return match;
    const kept = [...body.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]).filter((s) => s !== slug);
    selfLinks++;
    return `slug: "${slug}"${between}relatedSlugs: [${kept.map((s) => `"${s}"`).join(", ")}]`;
  }
);
writeFileSync(file, src);
if (selfLinks) console.log(`  ${selfLinks} self-reference(s) removed`);

if (replaced === 0) console.log("NOTHING CHANGED — check the matcher, not the site.");
