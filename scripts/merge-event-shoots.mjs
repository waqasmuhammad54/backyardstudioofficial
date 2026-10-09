/**
 * Merge /services/event-shoots into /services/event-videography.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * EVIDENCE (GSC, 90 days to 9 Oct 2026, per-page breakdown)
 * ──────────────────────────────────────────────────────────────────────────
 *   page                              clicks  impressions  position
 *   /services/event-video-editing          2           97      12.6
 *   /services/event-videography            1          389      35.5
 *   /services/event-shoots                 0           47      37.4
 *
 * event-shoots earns ZERO clicks, an eighth of the impressions, and the worst
 * position of the three. Measured content overlap with event-videography was
 * 54.3%, and the titles were the same words reordered:
 *   "Event Photography & Videographer Dubai"
 *   "Event Videography & Photography Dubai"
 *
 * Bing AI Performance: neither page is among the 56 cited pages, so no
 * citation equity is at risk. (Standing rule — always check before retiring.)
 *
 * event-video-editing is KEPT: distinct intent (post-production, not shooting)
 * and the best position of the three.
 *
 * ──────────────────────────────────────────────────────────────────────────
 * NOTE ON THE REMOVAL METHOD
 * ──────────────────────────────────────────────────────────────────────────
 * The first version of this script deleted object entries by counting braces.
 * That corrupted the file: FAQ answer strings in this codebase contain brace
 * characters, so the depth counter closed early and the script swallowed the
 * tail of a neighbouring entry, leaving orphaned FAQ lines and a build error.
 *
 * This version keys off INDENTATION instead, which is reliable for this file's
 * formatting: a top-level entry starts with `  "slug": {` and ends with a line
 * that is exactly `  },`. Never count braces through string literals.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(resolve(root, p), "utf8");
const write = (p, s) => writeFileSync(resolve(root, p), s);

const SLUG = "event-shoots";

/** Remove every `  "slug": { … }` block, matching on indentation. */
function removeIndentedEntries(src, slug) {
  let removed = 0;
  for (;;) {
    const lines = src.split("\n");
    // trimEnd() because this file uses CRLF — comparing against a bare "\n"
    // split leaves a trailing \r on every line and every exact match fails
    // silently. The first run of this script reported "removed 0" for exactly
    // that reason and looked like a no-op.
    const start = lines.findIndex((l) => l.trimEnd() === `  "${slug}": {`);
    if (start === -1) break;
    let end = -1;
    for (let i = start + 1; i < lines.length; i++) {
      if (lines[i].trimEnd() === "  },") { end = i; break; }
      // A new top-level key before a close means the assumption broke — bail
      // rather than delete the wrong range.
      if (/^ {2}"[a-z0-9-]+":\s*\{\s*$/.test(lines[i])) break;
    }
    if (end === -1) {
      throw new Error(`could not find the end of the "${slug}" entry starting at line ${start + 1} — aborting rather than guessing`);
    }
    src = [...lines.slice(0, start), ...lines.slice(end + 1)].join("\n");
    removed++;
  }
  return { src, removed };
}

// ── 1. Repoint every internal link ────────────────────────────────────────
const LINK_FILES = [
  "app/(en)/industries/[industry]/[slug]/page.tsx",
  "app/(en)/page.tsx",
  "components/layout/Footer.tsx",
  "components/layout/ArFooter.tsx",
  "components/layout/RuFooter.tsx",
  "components/layout/ZhFooter.tsx",
];

let links = 0;
for (const f of LINK_FILES) {
  const src = read(f);
  const n = (src.match(/\/services\/event-shoots/g) || []).length;
  if (!n) continue;
  write(f, src.split("/services/event-shoots").join("/services/event-videography"));
  links += n;
  console.log(`  repointed ${n} link(s)  ${f}`);
}

// ── 2. Remove the slug from the English dynamic route ─────────────────────
const routePath = "app/(en)/services/[slug]/page.tsx";
let route = read(routePath);

// Slug-list entries: SERVICE_SLUGS and LOCALISED_SERVICE_SLUGS.
route = route.split(`"${SLUG}", `).join("");
// Single-line map entries (SERVICE_VIDEOS, SERVICE_PRICES).
route = route.replace(new RegExp(`\\n\\s*"${SLUG}":\\s*\\{[^\\n]*\\},`, "g"), "");
route = route.replace(new RegExp(`\\n\\s*"${SLUG}":\\s*"[^"]*",`, "g"), "");

const out = removeIndentedEntries(route, SLUG);
route = out.src;
console.log(`  removed ${out.removed} multi-line object entr(ies)`);

write(routePath, route);

const left = (read(routePath).match(new RegExp(SLUG, "g")) || []).length;
console.log(`  residual "${SLUG}" references in the route: ${left}`);

// ── 3. Remove from the sitemap ────────────────────────────────────────────
const smPath = "app/sitemap.ts";
let sm = read(smPath);
if (sm.includes(`"${SLUG}",`)) {
  sm = sm.replace(`"${SLUG}", `, "").replace(`"${SLUG}",`, "");
  write(smPath, sm);
  console.log("  removed from sitemap SERVICES");
} else {
  console.log("  sitemap already clean");
}

// ── 4. Redirects, English plus all three locales ──────────────────────────
const cfgPath = "next.config.mjs";
let cfg = read(cfgPath);
const marker = `      { source: "/services/luxury-lifestyle-photography",`;
if (cfg.includes('source: "/services/event-shoots"')) {
  console.log("  redirects already present");
} else {
  cfg = cfg.replace(
    marker,
    `      // Merged 9 Oct 2026. GSC 90d: event-shoots had 0 clicks / 47 impressions /
      // position 37.4 against event-videography's 1 / 389 / 35.5, with 54.3%
      // content overlap and titles that were the same words reordered. Neither
      // page was cited in Bing AI Performance, so no citation equity was lost.
      // Internal links in all four footers and the homepage were repointed in
      // the same commit rather than left to hop through this redirect.
      //
      // The locale copies go too: hreflang pointing at a redirect is an invalid
      // annotation, and the clusters were made reciprocal on 8 Oct.
      { source: "/services/event-shoots",    destination: "/services/event-videography",    permanent: true },
      { source: "/ar/services/event-shoots", destination: "/ar/services/event-videography", permanent: true },
      { source: "/ru/services/event-shoots", destination: "/ru/services/event-videography", permanent: true },
      { source: "/zh/services/event-shoots", destination: "/zh/services/event-videography", permanent: true },
${marker}`
  );
  write(cfgPath, cfg);
  console.log("  redirects added (en + ar + ru + zh)");
}

console.log(`\nDone. ${links} internal link(s) repointed.`);
