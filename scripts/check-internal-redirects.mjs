/**
 * Finds internal links that point at a URL which next.config.mjs 301-redirects.
 *
 * Every one of these costs something real: the crawler spends two requests to
 * reach one page, a fraction of the link equity is lost at the hop, and on a
 * site with 589 pages that waste compounds across the whole crawl budget. They
 * are also invisible — the page still works, so nothing ever surfaces them.
 *
 * Run:  node scripts/check-internal-redirects.mjs
 * Exits 1 if any are found.
 *
 * Only literal `source` values are checked. Patterned sources (/:path*,
 * /locations/:city/...) are skipped, because matching those properly needs the
 * router and a false positive here would be worse than a miss.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/* ---- collect literal redirect sources ----------------------------------- */
const config = readFileSync(resolve(root, "next.config.mjs"), "utf8");
const sources = new Set();
for (const m of config.matchAll(/source:\s*"([^"]+)"/g)) {
  const s = m[1];
  if (s.includes(":") || s.includes("*")) continue; // patterned, skip
  sources.add(s.replace(/\/$/, ""));
}

/* ---- walk the source tree ----------------------------------------------- */
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts", "public"]);
const files = [];
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(tsx?|jsx?|mjs)$/.test(entry)) files.push(full);
  }
})(root);

/* ---- find hrefs that hit a redirect source ------------------------------ */
const hits = [];
for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, "/");
  if (rel === "next.config.mjs") continue;
  // lib/retiredSlugs.ts legitimately lists retired slugs — that is its job.
  if (rel === "lib/retiredSlugs.ts") continue;

  const lines = readFileSync(file, "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    for (const m of line.matchAll(/href:?=?\s*["'`](\/[^"'`\s{}]*)["'`]/g)) {
      const href = m[1].replace(/\/$/, "").split("#")[0].split("?")[0];
      if (sources.has(href)) {
        hits.push({ file: rel, line: i + 1, href });
      }
    }
  });
}

if (hits.length === 0) {
  console.log(
    `OK - no internal links point at any of the ${sources.size} literal redirect sources.`
  );
  process.exit(0);
}

console.error(`${hits.length} internal link(s) pointing at a 301 source:\n`);
for (const h of hits) {
  const dest = config.match(
    new RegExp(
      `source:\\s*"${h.href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}/?",\\s*destination:\\s*"([^"]+)"`
    )
  );
  console.error(
    `  ${h.file}:${h.line}  ${h.href}` + (dest ? `  ->  use ${dest[1]}` : "")
  );
}
process.exit(1);
