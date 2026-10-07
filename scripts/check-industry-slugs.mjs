/**
 * Drift check for industry sub-pages.
 *
 * Three places have to agree for a sub-industry page to actually earn traffic:
 *   1. SUB_INDUSTRY_DATA in app/(en)/industries/[industry]/[slug]/page.tsx
 *      -> whether the page exists at all
 *   2. INDUSTRY_SUB_PAGES in lib/industrySubPages.ts
 *      -> whether it is in the sitemap
 *   3. the parent hub's `specialisations` array in app/(en)/industries/[industry]/page.tsx
 *      -> whether anything on the site links to it
 *
 * Miss (2) and Google finds the page only by crawling a link, which is how a
 * page becomes "Discovered - currently not indexed". Miss (3) and it is an
 * orphan, which is how it stays that way. Have (2) without (1) and the sitemap
 * advertises a 404, which is worse than either.
 *
 * Run:  node scripts/check-industry-slugs.mjs
 * Exits 1 on any mismatch so it can be wired into CI later.
 *
 * Regex-based on purpose: these are .tsx files with JSX in them, so they cannot
 * simply be imported from a plain Node script, and a parser dependency is not
 * worth it for three arrays.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(resolve(root, p), "utf8");

const subPageFile = read("app/(en)/industries/[industry]/[slug]/page.tsx");
const hubFile = read("app/(en)/industries/[industry]/page.tsx");
const mirrorFile = read("lib/industrySubPages.ts");

/* ---- 1. what actually exists: SUB_INDUSTRY_DATA ------------------------- */
// Top-level industry keys are indented 2 spaces, slug keys 4.
const actual = {};
let currentIndustry = null;
for (const line of subPageFile.split(/\r?\n/)) {
  const industry = line.match(/^ {2}"([a-z0-9-]+)":\s*\{\s*$/);
  if (industry) {
    currentIndustry = industry[1];
    actual[currentIndustry] = [];
    continue;
  }
  const slug = line.match(/^ {4}"([a-z0-9-]+)":\s*\{\s*$/);
  if (slug && currentIndustry) actual[currentIndustry].push(slug[1]);
}

/* ---- 2. what the sitemap claims: INDUSTRY_SUB_PAGES --------------------- */
const mirror = {};
for (const m of mirrorFile.matchAll(/^ {2}"([a-z0-9-]+)":\s*\[([^\]]*)\]/gm)) {
  mirror[m[1]] = [...m[2].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1]);
}

/* ---- 3. what is linked: every /industries/x/y href in the hub file ------ */
const linked = new Set(
  [...hubFile.matchAll(/href:\s*"\/industries\/([a-z0-9-]+)\/([a-z0-9-]+)"/g)].map(
    (m) => `${m[1]}/${m[2]}`
  )
);

/* ---- compare ------------------------------------------------------------ */
const problems = [];

for (const [industry, slugs] of Object.entries(actual)) {
  for (const slug of slugs) {
    const path = `${industry}/${slug}`;
    if (!(mirror[industry] || []).includes(slug)) {
      problems.push(
        `MISSING FROM SITEMAP  /industries/${path}  -> add "${slug}" to INDUSTRY_SUB_PAGES["${industry}"] in lib/industrySubPages.ts`
      );
    }
    if (!linked.has(path)) {
      problems.push(
        `ORPHAN (no internal link)  /industries/${path}  -> add it to the "${industry}" specialisations array in app/(en)/industries/[industry]/page.tsx`
      );
    }
  }
}

for (const [industry, slugs] of Object.entries(mirror)) {
  for (const slug of slugs) {
    if (!(actual[industry] || []).includes(slug)) {
      problems.push(
        `SITEMAP ADVERTISES A 404  /industries/${industry}/${slug}  -> no such key in SUB_INDUSTRY_DATA`
      );
    }
  }
}

const pageCount = Object.values(actual).reduce((n, s) => n + s.length, 0);

if (problems.length === 0) {
  console.log(
    `OK - ${pageCount} industry sub-pages; all in the sitemap and all linked from their hub.`
  );
  process.exit(0);
}

console.error(`${problems.length} problem(s) found across ${pageCount} sub-pages:\n`);
for (const p of problems) console.error("  " + p);
process.exit(1);
