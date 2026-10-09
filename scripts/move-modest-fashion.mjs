/**
 * One-off: move the "modest-fashion" entry from the food-beverage block into
 * the fashion block, where it belongs.
 *
 * It was inserted directly above "menu-photography", and menu-photography sits
 * under food-beverage — so the entry landed in the wrong parent. Left there it
 * would have built /industries/food-beverage/modest-fashion and set
 * parentSlug: "fashion" on it, producing a breadcrumb that disagreed with the
 * URL.
 *
 * Cuts the block by brace depth and re-inserts it immediately after the
 * "fashion" industry key.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const file = resolve(root, "app/(en)/industries/[industry]/[slug]/page.tsx");
const lines = readFileSync(file, "utf8").split(/\r?\n/);

// Find the modest-fashion entry, including the comment block above it.
const slugIdx = lines.findIndex((l) => /^ {4}"modest-fashion":\s*\{\s*$/.test(l));
if (slugIdx === -1) throw new Error("modest-fashion entry not found");

// Walk back over the leading comment block.
let start = slugIdx;
while (start > 0 && /^\s*(\/\*|\*|.*─|$)/.test(lines[start - 1]) && !/^ {4}"/.test(lines[start - 1])) {
  if (/^\s*\/\* ──/.test(lines[start - 1])) { start--; break; }
  start--;
}

// Walk forward to the matching close brace.
let depth = 0;
let end = slugIdx;
for (let i = slugIdx; i < lines.length; i++) {
  for (const ch of lines[i]) {
    if (ch === "{") depth++;
    else if (ch === "}") depth--;
  }
  if (depth === 0 && i > slugIdx) { end = i; break; }
}

const block = lines.slice(start, end + 1);
const without = [...lines.slice(0, start), ...lines.slice(end + 1)];

// Insert right after the fashion industry key.
const fashionIdx = without.findIndex((l) => /^ {2}"fashion":\s*\{\s*$/.test(l));
if (fashionIdx === -1) throw new Error("fashion industry key not found");

const result = [
  ...without.slice(0, fashionIdx + 1),
  ...block,
  ...without.slice(fashionIdx + 1),
];

writeFileSync(file, result.join("\n"));
console.log(`moved ${block.length} lines from food-beverage into fashion`);
