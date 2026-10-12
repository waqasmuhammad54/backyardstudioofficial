/**
 * Guard: flag title / meta-description lengths that Google will truncate.
 *
 * Reads the report produced by scripts/audit-technical-seo.mjs (a LIVE crawl)
 * rather than guessing from source, because the final rendered title includes
 * whatever the layout template appends — which is exactly the thing that made
 * 94 locale titles too long without anyone noticing.
 *
 *   titles        > 60 chars  — Google renders roughly 60
 *   descriptions  > 160       — truncated
 *   descriptions  <  70       — wasting available space
 *
 * Run the crawl first:
 *   node scripts/audit-technical-seo.mjs
 *   node scripts/check-meta-lengths.mjs [--max N]
 *
 * Exits 1 when anything is over the hard limits, so it can gate a release.
 * `--max N` tolerates a known backlog while it is being worked through, so the
 * check can be wired into CI before the backlog is cleared rather than after.
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const reportPath = resolve(root, "technical-seo-report.json");

if (!existsSync(reportPath)) {
  console.error("No technical-seo-report.json. Run: node scripts/audit-technical-seo.mjs");
  process.exit(2);
}

const argMax = process.argv.indexOf("--max");
const TOLERATE = argMax > -1 ? Number(process.argv[argMax + 1]) : 0;

const report = JSON.parse(readFileSync(reportPath, "utf8"));
const age = Math.round((Date.now() - new Date(report.generated).getTime()) / 36e5);
if (age > 24) {
  console.log(`⚠  report is ${age}h old — re-run the crawl for current numbers\n`);
}

const pick = (type) =>
  report.pages
    .filter((p) => (p.issues || []).some((i) => i.type === type))
    .map((p) => ({
      url: p.url.replace("https://www.backyardstudioofficial.com", "") || "/",
      detail: (p.issues.find((i) => i.type === type) || {}).detail,
      len: type === "TITLE_LONG" ? p.titleLen : p.descLen,
    }))
    .sort((a, b) => b.len - a.len);

const titles = pick("TITLE_LONG");
const descLong = pick("DESC_LONG");
const descShort = pick("DESC_SHORT");

const section = (label, rows, limit = 15) => {
  console.log(`\n${label}: ${rows.length}`);
  for (const r of rows.slice(0, limit)) console.log(`  ${String(r.len).padStart(4)}  ${r.url}`);
  if (rows.length > limit) console.log(`  … and ${rows.length - limit} more`);
};

section("TITLES over 60 chars", titles);
section("DESCRIPTIONS over 160 chars", descLong);
section("DESCRIPTIONS under 70 chars", descShort);

const hard = titles.length + descLong.length;
console.log(`\nTotal over hard limits: ${hard} (tolerating ${TOLERATE})`);

if (hard > TOLERATE) {
  console.error(`FAIL — ${hard} page(s) exceed the limits.`);
  process.exit(1);
}
console.log("OK");
