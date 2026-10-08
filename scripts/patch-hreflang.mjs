/**
 * One-off codemod: give the English core pages the reciprocal hreflang map.
 *
 * Kept in the repo rather than run ad hoc so the change is reviewable and
 * repeatable. Safe to re-run — it skips any file already using alternatesFor.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const targets = [
  ["app/(en)/services/page.tsx", "/services"],
  ["app/(en)/pricing/page.tsx", "/pricing"],
  ["app/(en)/contact/page.tsx", "/contact"],
  ["app/(en)/about/page.tsx", "/about"],
  ["app/(en)/locations/page.tsx", "/locations"],
  ["app/(en)/blog/page.tsx", "/blog"],
  ["app/(en)/testimonials/page.tsx", "/testimonials"],
  ["app/(en)/portfolio/layout.tsx", "/portfolio"],
  // The three locale portfolio pages were the only translated pages that also
  // declared no alternates — so /portfolio had no cluster at all in any language.
  ["app/ar/portfolio/page.tsx", "/portfolio", "ar"],
  ["app/ru/portfolio/page.tsx", "/portfolio", "ru"],
  ["app/zh/portfolio/page.tsx", "/portfolio", "zh"],
];

for (const [rel, path, locale] of targets) {
  const file = resolve(root, rel);
  let src = readFileSync(file, "utf8");

  if (src.includes("alternatesFor(")) {
    console.log(`already done   ${rel}`);
    continue;
  }

  const selfUrl = locale
    ? `https://www.backyardstudioofficial.com/${locale}${path}`
    : `https://www.backyardstudioofficial.com${path}`;
  const needle = `alternates: { canonical: "${selfUrl}" },`;
  if (!src.includes(needle)) {
    console.log(`SKIP no match  ${rel}`);
    continue;
  }

  const call = locale
    ? `alternatesFor("${path}", "${locale}")`
    : `alternatesFor("${path}")`;
  src = src.replace(needle, `alternates: ${call},`);

  // Insert the import after the first existing import line.
  const firstImport = src.match(/^import[^\n]*\n/m);
  src = src.replace(
    firstImport[0],
    firstImport[0] + `import { alternatesFor } from "@/lib/hreflang";\n`
  );

  writeFileSync(file, src);
  console.log(`patched        ${rel}`);
}
