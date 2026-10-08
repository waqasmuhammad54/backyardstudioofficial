/**
 * Consolidate the northern-emirate city+service pages into their city hubs.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * WHY
 * ──────────────────────────────────────────────────────────────────────────
 * Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain each carried the
 * SAME eight service sub-pages. Five cities x the same eight templates = 41
 * near-identical URLs, and that is the engine behind the "Duplicate without
 * user-selected canonical" bucket (38 pages as of 7 Oct 2026).
 *
 * Adding per-emirate substance on 8 Oct helped across cities (overlap fell
 * 1-5 points) but made same-emirate pairs WORSE — fujairah/birthday vs
 * fujairah/maternity went 51.3% -> 59.2%, because both now carry the same
 * emirate block on top of what they already shared. Differentiating by emirate
 * cannot fix pages that share an emirate and differ only by service.
 *
 * So: collapse them. 41 URLs become 5 stronger hub pages. The CONTENT is not
 * deleted — the hubs render the same service list as descriptive sections (see
 * CITY_SUB_PAGES in app/(en)/locations/[city]/page.tsx).
 *
 * ──────────────────────────────────────────────────────────────────────────
 * SAFETY CHECK PERFORMED FIRST — standing rule, do not skip it
 * ──────────────────────────────────────────────────────────────────────────
 * Bing Webmaster -> AI Performance -> Pages, 3 months to 8 Oct 2026, all 56
 * cited pages reviewed. **Zero citations on any Sharjah, Ajman, RAK, Fujairah
 * or Umm Al Quwain sub-service page.**
 *
 * Dubai and Abu Dhabi sub-pages ARE cited and are therefore NOT touched:
 *   /locations/dubai/product-photography      7
 *   /locations/dubai/maternity-photography    4
 *   /locations/dubai/newborn-photography      1
 *   /locations/dubai/engagement-photography   cited
 *   /locations/dubai/real-estate-photography  cited
 *   /locations/abu-dhabi/birthday-photography 2
 *   /locations/abu-dhabi/wedding-photography  2
 *
 * The 5 Aug 2026 cleanup retired the single most-cited URL on the domain
 * because nobody ran this check. It was run this time.
 *
 * Redirects: `fallbackFor()` in the [service] route sends any unbuilt
 * combination for a known city to /locations/<city> with a 308. KNOWN_CITIES is
 * now an explicit list of the seven emirates, so removing every sub-page for a
 * city does NOT remove the city from that set. Verify before deploying.
 *
 * Run: node scripts/consolidate-northern-emirates.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const CITIES = ["sharjah", "ajman", "ras-al-khaimah", "fujairah", "umm-al-quwain"];

// ── 1. Remove the PAGES entries from the [service] route ──────────────────
const routeFile = resolve(root, "app/(en)/locations/[city]/[service]/page.tsx");
let route = readFileSync(routeFile, "utf8");

const lines = route.split(/\r?\n/);
const out = [];
let removing = false;
let depth = 0;
let removed = 0;

for (const line of lines) {
  if (!removing) {
    const m = line.match(/^ {2}"([a-z-]+)\/([a-z0-9-]+)":\s*\{\s*$/);
    if (m && CITIES.includes(m[1])) {
      removing = true;
      depth = 1;
      removed++;
      continue;
    }
    out.push(line);
  } else {
    // Track brace depth to find the end of this entry object.
    for (const ch of line) {
      if (ch === "{") depth++;
      else if (ch === "}") depth--;
    }
    if (depth <= 0) removing = false;
  }
}

route = out.join("\n");
writeFileSync(routeFile, route);
console.log(`PAGES entries removed: ${removed}`);

// ── 2. Remove the sitemap entries ─────────────────────────────────────────
const sitemapFile = resolve(root, "app/sitemap.ts");
let sitemap = readFileSync(sitemapFile, "utf8");

const before = sitemap.split(/\r?\n/).length;
sitemap = sitemap
  .split(/\r?\n/)
  .filter((l) => !CITIES.some((c) => l.includes(`/locations/${c}/`)))
  .join("\n");
const after = sitemap.split(/\r?\n/).length;
writeFileSync(sitemapFile, sitemap);
console.log(`sitemap lines removed: ${before - after}`);

// ── 3. Report what now remains, so the result is verifiable ───────────────
const remaining = [...route.matchAll(/^ {2}"([a-z-]+)\/([a-z0-9-]+)":\s*\{\s*$/gm)];
const byCity = {};
for (const m of remaining) (byCity[m[1]] = byCity[m[1]] || []).push(m[2]);
console.log("\nRemaining city+service pages:");
for (const [c, s] of Object.entries(byCity)) console.log(`  ${c.padEnd(16)}${s.length}`);
console.log(`  TOTAL           ${remaining.length}`);
