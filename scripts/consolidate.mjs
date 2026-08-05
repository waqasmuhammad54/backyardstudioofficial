// Keyword-cannibalisation consolidation.
//
// GSC: 191 blog URLs, 163 topic collisions, average position 22.5. Multiple URLs were
// competing for the same query, so none of them ranked. This does three things:
//
//  1. RENAMES admin-published (posts.json) slugs that are either malformed (-2026-2026,
//     a bug in the admin slug generator) or absurdly long, to the short brand-aligned form.
//  2. REMOVES the thin lib/blogPosts.ts entry wherever a much richer posts.json article
//     covers the same query. The blog route resolves ts BEFORE json, so leaving both
//     would keep serving the thin one.
//  3. EMITS the full 301 list for next.config.mjs.
//
// Nothing is deleted outright — every retired URL gets a permanent redirect to the
// surviving page, so links and accumulated authority carry over.
import fs from "node:fs";

// ── 1. posts.json slug renames (old -> new) ─────────────────────────────────
const RENAMES = {
  "tvc-production-uae-tv-commercial-costs-process-guide-2026": "tvc-production-dubai-2026",
  "music-video-production-uae-pricing-process-guide-2026": "music-video-production-dubai-2026",
  "best-video-production-company-in-dubai-for-corporate-video-2026-guide-2026": "corporate-video-production-dubai-2026",
  "product-video-production-uae-pricing-process-guide-2026": "product-videography-dubai-2026",
  "video-podcast-production-dubai-uae-setup-pricing-full-guide-2026-2026": "video-podcast-production-dubai-2026",
  "sports-production-company-in-the-uae-football-cricket-basketball-fight-night-coverage-2026-2026": "sports-production-company-uae-2026",
  "sports-broadcast-production-uae-full-match-coverage-from-aed-25-000-2026-2026": "sports-broadcast-production-uae-2026",
  "car-commercial-production-studio-in-the-uae-full-capability-guide-2026-2026": "car-commercial-production-uae-2026",
};

// ── 2. blogPosts.ts entries to retire because a richer article now owns the slug ──
const TS_REMOVE = [
  "tvc-production-dubai-2026",
  "music-video-production-dubai-2026",
  "corporate-video-production-dubai-2026",
  "product-videography-dubai-2026",
];

// ── 3. same-query cannibalisation merges inside blogPosts.ts (loser -> winner) ──
// These stay in the file (harmless) but are redirected and dropped from the sitemap,
// so only the winner competes.
const MERGES = {
  "headshot-photography-dubai-2026": "headshot-photographer-dubai-2026",
  "business-headshots-dubai-2026": "headshot-photographer-dubai-2026",
  "baby-photographer-dubai-2026": "newborn-photographer-dubai-2026",
  "maternity-photography-dubai-2026": "maternity-photographer-dubai-2026",
  "pregnancy-photoshoot-dubai-2026": "maternity-photographer-dubai-2026",
  "kids-photography-dubai-2026": "kids-photographer-dubai-2026",
  "birthday-party-photographer-dubai-2026": "birthday-photographer-dubai-2026",
  "car-photography-dubai-2026": "automotive-photography-dubai-2026",
  "indian-wedding-photography-dubai": "indian-wedding-photographer-dubai-2026",
  "indian-wedding-photography-dubai-2026": "indian-wedding-photographer-dubai-2026",
  "social-media-content-creation-dubai-2026": "social-media-content-creator-dubai-2026",
  "best-social-media-content-creators-dubai-2026": "social-media-content-creator-dubai-2026",
  "commercial-production-dubai-2026": "tv-commercial-dubai-2026",
  "drone-photography-dubai-2026": "aerial-videography-dubai-2026",
};

// ───────────────────────────────────────────────────────────────────────────
let posts = JSON.parse(fs.readFileSync("content/posts.json", "utf8"));
let renamed = 0;
for (const p of posts) {
  if (RENAMES[p.slug]) {
    console.log(`rename  ${p.slug}\n     -> ${RENAMES[p.slug]}`);
    p.slug = RENAMES[p.slug];
    renamed++;
  }
}
fs.writeFileSync("content/posts.json", JSON.stringify(posts, null, 2) + "\n", "utf8");
console.log(`\nRenamed ${renamed} posts.json slugs.\n`);

// remove superseded ts entries
const PATH = "lib/blogPosts.ts";
const src = fs.readFileSync(PATH, "utf8");
const OPEN_RE = /\r?\n {2}\{\r?\n {4}slug: "/g;
const starts = [...src.matchAll(OPEN_RE)].map((m) => m.index);
const arrayEnd = starts.at(-1) + src.slice(starts.at(-1)).search(/\r?\n\];/);
const entries = starts.map((s, i) => {
  const text = src.slice(s, i + 1 < starts.length ? starts[i + 1] : arrayEnd);
  return { slug: /slug:\s*"([^"]+)"/.exec(text)?.[1], text };
});
const keep = entries.filter((e) => !TS_REMOVE.includes(e.slug));
console.log(`blogPosts.ts entries: ${entries.length} -> ${keep.length} (retired ${entries.length - keep.length} superseded by richer articles)`);
fs.writeFileSync(PATH, src.slice(0, starts[0]) + keep.map((e) => e.text).join("") + src.slice(arrayEnd), "utf8");

// emit redirects + retired-slug list
const redirects = [];
for (const [oldSlug, newSlug] of Object.entries(RENAMES)) redirects.push([oldSlug, newSlug]);
for (const [loser, winner] of Object.entries(MERGES)) redirects.push([loser, winner]);

const lines = redirects
  .map(([a, b]) => `      { source: "/blog/${a}", destination: "/blog/${b}", permanent: true },`)
  .join("\n");
fs.writeFileSync("scripts/_redirects.txt", lines + "\n", "utf8");

const retired = redirects.map(([a]) => a);
fs.writeFileSync(
  "lib/retiredSlugs.ts",
  `// Auto-generated by scripts/consolidate.mjs — do not edit by hand.\n` +
  `// Blog slugs that now 301 elsewhere. The sitemap must not list them: a sitemap full\n` +
  `// of redirects wastes crawl budget and tells Google the file is stale.\n` +
  `export const RETIRED_BLOG_SLUGS = new Set<string>([\n` +
  retired.map((s) => `  "${s}",`).join("\n") +
  `\n]);\n`,
  "utf8"
);

console.log(`\nWrote ${redirects.length} redirects to scripts/_redirects.txt`);
console.log(`Wrote lib/retiredSlugs.ts (${retired.length} slugs)`);
