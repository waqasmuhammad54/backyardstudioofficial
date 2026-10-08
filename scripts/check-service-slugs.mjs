/**
 * Drift check for dynamic service pages.
 *
 * Four places have to agree for a service page to actually earn traffic:
 *   1. SERVICE_SLUGS in app/(en)/services/[slug]/page.tsx
 *      -> whether the route exists at all (generateStaticParams reads it)
 *   2. SERVICE_DATA in the same file
 *      -> whether it has real content or falls back to the generic template
 *   3. SERVICES in app/sitemap.ts
 *      -> whether it is in the sitemap
 *   4. CATEGORIES in app/(en)/services/page.tsx
 *      -> whether anything on the site LINKS to it
 *
 * (4) is the one that bites, because /services has two arrays: SERVICES is only
 * a lookup table feeding SERVICE_MAP, and CATEGORIES is what renders. A slug in
 * SERVICES but not in any CATEGORIES group is completely invisible — which is
 * exactly what happened to the three life-event pages on 8 Oct 2026. They were
 * live, returning 200, in the sitemap, and unreachable from the services page.
 *
 * Sister script to check-industry-slugs.mjs, same reasoning: an unlinked page is
 * how a URL becomes "Discovered - currently not indexed" and stays there.
 *
 * Run:  node scripts/check-service-slugs.mjs
 * Exits 1 on any mismatch.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(resolve(root, p), "utf8");

const detailFile = read("app/(en)/services/[slug]/page.tsx");
const sitemapFile = read("app/sitemap.ts");
const indexFile = read("app/(en)/services/page.tsx");
const configFile = read("next.config.mjs");

/**
 * Static route folders under app/(en)/services/. These are REAL pages that do
 * not come from SERVICE_SLUGS, so the sitemap listing them is correct. Read
 * from the filesystem rather than guessed — an earlier version of this script
 * guessed and produced five false positives on the wedding-by-emirate routes.
 */
const staticRoutes = new Set(
  readdirSync(resolve(root, "app/(en)/services"))
    .filter(
      (d) =>
        d !== "[slug]" &&
        statSync(join(resolve(root, "app/(en)/services"), d)).isDirectory()
    )
);

/**
 * Slugs that next.config.mjs 301-redirects away. These are intentionally NOT in
 * the sitemap and intentionally NOT linked — flagging them would be noise, and
 * a noisy check is an ignored check. `aerial-drone` is the live example: drone
 * is no longer a bookable service and the route redirects to /services/real-estate.
 */
const redirectedSlugs = new Set(
  [...configFile.matchAll(/source:\s*"\/services\/([a-z0-9-]+)"/g)].map((m) => m[1])
);

const listBetween = (src, startRe) => {
  const start = src.search(startRe);
  if (start === -1) return [];
  const open = src.indexOf("[", start);
  const close = src.indexOf("];", open);
  return [...src.slice(open, close).matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
};

const routeSlugs = [...new Set(listBetween(detailFile, /const SERVICE_SLUGS\s*=/))];
const sitemapSlugs = [...new Set(listBetween(sitemapFile, /const SERVICES\s*=/))];

// SERVICE_DATA keys are two-space-indented quoted keys followed by `: {`
const dataStart = detailFile.search(/const SERVICE_DATA/);
const dataSlugs = new Set(
  [...detailFile.slice(dataStart).matchAll(/^ {2}"([a-z0-9-]+)":\s*\{/gm)].map((m) => m[1])
);

// Every slug appearing inside any CATEGORIES group — these are the links
// rendered on /services itself.
const catStart = indexFile.search(/const CATEGORIES\s*=/);
const catEnd = indexFile.indexOf("\n];", catStart);
const onServicesIndex = new Set(
  [...indexFile.slice(catStart, catEnd).matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1])
);

/**
 * Links from ANYWHERE in the app — footer, homepage, industry pages, blog.
 *
 * Checking only /services is too narrow to call something an orphan, and an
 * earlier version of this script did exactly that and wrongly flagged
 * /services/event-shoots, which is linked from the sitewide footer and the
 * homepage. A false positive in a guard script is expensive: it teaches people
 * to ignore the output.
 */
const SKIP_DIRS = new Set(["node_modules", ".next", ".git", "scripts", "public"]);
const linkedAnywhere = new Set();
(function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full);
    else if (/\.(tsx?|jsx?|mjs)$/.test(entry)) {
      const src = readFileSync(full, "utf8");
      for (const m of src.matchAll(/["'`]\/services\/([a-z0-9-]+)["'`]/g)) {
        linkedAnywhere.add(m[1]);
      }
    }
  }
})(root);

const problems = [];
// Non-fatal: worth knowing, not worth failing a build over.
const notices = [];

for (const slug of routeSlugs) {
  // A redirected slug is supposed to be absent from the sitemap and unlinked.
  if (redirectedSlugs.has(slug)) continue;

  if (!dataSlugs.has(slug)) {
    problems.push(
      `GENERIC FALLBACK CONTENT  /services/${slug}  -> no SERVICE_DATA entry, page renders the boilerplate template`
    );
  }
  if (!sitemapSlugs.includes(slug)) {
    problems.push(
      `MISSING FROM SITEMAP  /services/${slug}  -> add "${slug}" to SERVICES in app/sitemap.ts`
    );
  }
  // Linked = an explicit "/services/<slug>" href anywhere, OR membership of a
  // CATEGORIES group (where /services builds the href from the bare slug, so
  // the full path never appears as a literal string in the source).
  if (!linkedAnywhere.has(slug) && !onServicesIndex.has(slug)) {
    problems.push(
      `ORPHAN (no internal link anywhere)  /services/${slug}  -> add "${slug}" to a CATEGORIES group in app/(en)/services/page.tsx (NOT just the SERVICES lookup array, which only feeds SERVICE_MAP)`
    );
  } else if (!onServicesIndex.has(slug)) {
    notices.push(
      `not listed on /services  /services/${slug}  -> linked elsewhere so not an orphan, but a buyer browsing the services page will never see it`
    );
  }
}

for (const slug of sitemapSlugs) {
  // A sitemap entry is legitimate if it is a dynamic slug OR a real static
  // route folder on disk. Only flag one that is neither — that is a sitemap
  // advertising a 404, which is worse than a missing entry.
  if (!routeSlugs.includes(slug) && !staticRoutes.has(slug)) {
    problems.push(
      `SITEMAP ADVERTISES A 404  /services/${slug}  -> not in SERVICE_SLUGS and no static route folder exists`
    );
  }
}

for (const n of notices) console.log("  NOTE: " + n);

if (problems.length === 0) {
  console.log(
    `OK - ${routeSlugs.length} dynamic service pages; all have content, all in the sitemap, all linked.`
  );
  process.exit(0);
}

console.error(`\n${problems.length} problem(s) across ${routeSlugs.length} service slugs:\n`);
for (const p of problems) console.error("  " + p);
process.exit(1);
