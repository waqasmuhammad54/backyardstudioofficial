/**
 * Repoint internal links that currently hit a 308.
 *
 * Found by scripts/audit-technical-seo.mjs, which crawls the live sitemap and
 * resolves every unique internal link target. 63 links across blog body
 * content, the industries index and various data files were pointing at URLs
 * that redirect.
 *
 * WHY THE EXISTING GUARD MISSED THESE
 * scripts/check-internal-redirects.mjs only knows about LITERAL `source:`
 * entries in next.config.mjs. Most of these redirects are produced at runtime
 * by `fallbackFor()` in the [city]/[service] route, which 308s any unbuilt
 * combination for a known city to that city's hub. A static scan of the config
 * cannot see them. That blind spot is why this needed a live crawl to find.
 *
 * Roughly half were self-inflicted: consolidating the 41 northern-emirate
 * sub-pages on 8 Oct turned every existing internal link to those URLs into a
 * redirect hop. The links were in blog copy, which the consolidation did not
 * touch.
 *
 * The mapping is the audit's own observed destinations, not guesses.
 *
 * Re-runnable. Prints counts — see backyard-codemod-failure-modes: three
 * scripts this week reported success while doing nothing.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** path -> final destination, as observed live by the audit crawl. */
const MAP = {
  "/industries/technology": "/industries/tech",
  "/blog/indian-wedding-photography-dubai": "/blog/indian-wedding-photographer-dubai-2026",
  "/blog/indian-wedding-photography-dubai-2026": "/blog/indian-wedding-photographer-dubai-2026",
  "/blog/commercial-production-dubai-2026": "/blog/tv-commercial-dubai-2026",
  "/blog/drone-photography-dubai-2026": "/blog/aerial-videography-dubai-2026",
  "/blog/business-headshots-dubai-2026": "/blog/headshot-photographer-dubai-2026",
  "/blog/headshot-photography-dubai-2026": "/blog/headshot-photographer-dubai-2026",
  "/blog/birthday-party-photographer-dubai-2026": "/blog/birthday-photographer-dubai-2026",
  "/blog/car-photography-dubai-2026": "/blog/automotive-photography-dubai-2026",
  "/blog/maternity-photography-dubai-2026": "/blog/maternity-photographer-dubai-2026",
  "/blog/kids-photography-dubai-2026": "/blog/kids-photographer-dubai-2026",
  "/blog/best-social-media-content-creators-dubai-2026": "/blog/social-media-content-creator-dubai-2026",
  "/blog/social-media-content-creation-dubai-2026": "/blog/social-media-content-creator-dubai-2026",
  "/locations/dubai/drone-videography": "/locations/dubai",
  "/locations/abu-dhabi/drone-videography": "/locations/abu-dhabi",
};

// The northern-emirate sub-service links: same shape, generated rather than
// listed, so the mapping stays readable.
const CONSOLIDATED = ["sharjah", "ajman", "ras-al-khaimah", "fujairah", "umm-al-quwain"];
const SUB_SERVICES = [
  "social-media-content", "event-photography", "food-photography",
  "product-photography", "corporate-video", "real-estate-photography",
  "personal-branding-photography", "headshot-photography",
  "engagement-photography", "maternity-photography", "newborn-photography",
  "fashion-photography", "birthday-photography", "kids-photography",
];
for (const city of CONSOLIDATED) {
  // Wedding has a dedicated page per emirate — that is where it should go.
  MAP[`/locations/${city}/wedding-photography`] = `/services/wedding-photography-${city}`;
  for (const s of SUB_SERVICES) MAP[`/locations/${city}/${s}`] = `/locations/${city}`;
}

// Longest paths first, so /locations/x/y is replaced before /locations/x.
const ORDERED = Object.keys(MAP).sort((a, b) => b.length - a.length);

const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts", "public"]);
const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(tsx?|json|mjs)$/.test(entry)) files.push(full);
  }
})(root);

let totalReplacements = 0;
let filesTouched = 0;

for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, "/");

  // next.config.mjs DEFINES these redirects — rewriting its sources would
  // delete the redirects entirely. lib/retiredSlugs.ts legitimately lists
  // retired slugs. The audit report is data, not source.
  if (rel === "next.config.mjs") continue;
  if (rel === "lib/retiredSlugs.ts") continue;
  if (rel === "technical-seo-report.json") continue;

  let src = readFileSync(file, "utf8");
  const before = src;
  let fileCount = 0;

  for (const from of ORDERED) {
    const to = MAP[from];
    // Quoted hrefs and markdown links only — never bare text, which could be
    // prose describing a URL rather than linking to it.
    for (const [open, close] of [['"', '"'], ["'", "'"], ["(", ")"]]) {
      const needle = `${open}${from}${close}`;
      if (!src.includes(needle)) continue;
      const n = src.split(needle).length - 1;
      src = src.split(needle).join(`${open}${to}${close}`);
      fileCount += n;
    }
  }

  if (src !== before) {
    writeFileSync(file, src);
    filesTouched++;
    totalReplacements += fileCount;
    console.log(`  ${String(fileCount).padStart(3)}  ${rel}`);
  }
}

console.log(`\n${totalReplacements} link(s) repointed across ${filesTouched} file(s).`);
if (totalReplacements === 0) {
  console.log("NOTHING CHANGED — if that is unexpected, the matcher is wrong, not the site.");
}
