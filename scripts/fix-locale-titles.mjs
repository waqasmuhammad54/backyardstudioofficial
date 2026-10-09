/**
 * Strip the doubled brand from AR / RU / ZH page titles.
 *
 * Each locale layout sets a title template:
 *   ar  template: "%s | باكيارد ستوديو"
 *   ru  template: "%s | Backyard Studio"
 *   zh  template: "%s | Backyard Studio Official"
 *
 * and the pages ALSO author the brand into their own title, so it ships twice:
 *
 *   /zh/about     89 chars  "关于我们 — Backyard Studio Official | … | Backyard Studio Official"
 *   /ru/services  91 chars  "Услуги видеосъёмки … — Backyard Studio Official | Backyard Studio"
 *   /ar/services  82 chars  "… | باكيارد ستوديو أوفيشيال | باكيارد ستوديو"
 *
 * Google renders about 60 characters, so the duplicated brand truncates the
 * differentiating half of every locale title.
 *
 * This is the exact bug lib/seoTitle.ts fixed for English in August. That fix
 * was never applied to the locales — same lesson as the GCAA sweep and the
 * sameAs drift: a fix is not finished until it has been checked in all four
 * languages.
 *
 * Rewrites the string literals rather than stripping at runtime, so the change
 * is visible and reviewable in the diff.
 *
 * NOT touched:
 *   - `default:` in the layouts — not templated, the brand belongs there
 *   - `title: { absolute: ... }` — opts out of the template by design
 *   - openGraph / twitter titles — they do not inherit the template, so they
 *     are supposed to carry the brand
 *
 * Re-runnable.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** Longest first, so "Official" is removed before the shorter form matches. */
const BRANDS = [
  "Backyard Studio Official",
  "Backyard Studio",
  "باكيارد ستوديو أوفيشيال",
  "باكيارد ستوديو",
];

/**
 * Separator characters that can sit between the title and the brand.
 * Listed as literal characters rather than built into a regex character class
 * — an earlier version used `[\|—–-]` and silently failed to match
 * the em dash, stripping 1 title instead of 20. Dumb and verifiable beats
 * clever here.
 */
const SEPARATORS = ["|", "—", "–", "-"];

function stripBrand(title) {
  let out = title.trim();
  let changed = true;
  // Loop: some titles carry the brand more than once.
  while (changed) {
    changed = false;
    for (const brand of BRANDS) {
      if (!out.endsWith(brand)) continue;
      const head = out.slice(0, out.length - brand.length).trimEnd();
      const lastChar = head.slice(-1);
      if (SEPARATORS.includes(lastChar)) {
        out = head.slice(0, -1).trimEnd();
        changed = true;
      }
    }
  }
  return out;
}

const files = [];
for (const locale of ["ar", "ru", "zh"]) {
  (function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (entry === "page.tsx") files.push(full);
    }
  })(resolve(root, "app", locale));
}

let touched = 0;
let total = 0;

for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, "/");
  let src = readFileSync(file, "utf8");
  const original = src;

  // Only plain `title: "..."` inside the metadata export. Object forms
  // (absolute / default / template) and og/twitter titles are left alone.
  src = src.replace(/(\n([ \t]*)title:[ \t]*)"((?:[^"\\]|\\.)*)"/g, (match, lead, indent, title) => {
    // openGraph / twitter titles are nested deeper than the top-level metadata
    // key and SHOULD keep the brand, because they do not inherit the template.
    //
    // `indent` is the whitespace BEFORE `title:` only. An earlier version
    // measured the whitespace after the colon too, which made every top-level
    // title look over-indented and skipped all of them — the script reported
    // success having changed almost nothing.
    if (indent.length !== 2) return match;

    const stripped = stripBrand(title);
    if (stripped === title || stripped.length < 10) return match;
    total++;
    console.log(`  ${rel}`);
    console.log(`     - ${title}`);
    console.log(`     + ${stripped}`);
    return `${lead}"${stripped}"`;
  });

  if (src !== original) {
    writeFileSync(file, src);
    touched++;
  }
}

console.log(`\n${total} title(s) de-duplicated across ${touched} file(s).`);
