/**
 * Trim over-length meta descriptions to a clean boundary.
 *
 * The live crawl found 126 descriptions over 160 characters. The overshoot is
 * mostly small — 76 are 161-180, 40 are 181-220, 10 are over 220 — so these
 * need trimming at a sentence boundary, not rewriting.
 *
 * TARGET: <= 155 characters, which leaves headroom against Google's ~160
 * truncation point.
 *
 * HOW IT CUTS, in order of preference:
 *   1. the last sentence ending (. ! ?) at or before 155
 *   2. failing that, the last clause break (— – , ;) at or before 155
 *   3. failing that, the last whole word
 * It never cuts mid-word and never appends an ellipsis — Google adds its own.
 *
 * SAFETY: if a cut would leave under 90 characters the description is LEFT
 * ALONE and reported instead. A 70-character description is a worse outcome
 * than a 170-character one: the first wastes the slot, the second merely gets
 * its tail truncated. Those need a human rewrite, not a machine cut.
 *
 * Only the `metaDescription:` key is touched. Not `description:`, which in
 * this codebase is also used for body copy, schema fields and openGraph.
 *
 * Prints every change and a total. See backyard-codemod-failure-modes —
 * several scripts this week reported success while doing nothing.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const FILES = [
  // NOT app/(en)/services/[slug]/page.tsx — that file has a SERVICE_DATA
  // object whose `description:` is the full page body copy. Matching
  // `description:` there truncated 63 service pages to ~100 characters.
  // It is handled separately and safely by scripts/trim-service-metadata.mjs.
  "lib/blogPosts.ts",
  "app/(en)/locations/[city]/[service]/page.tsx",
  "app/(en)/industries/[industry]/[slug]/page.tsx",
  "app/(en)/industries/[industry]/page.tsx",
  "lib/caseStudies.ts",
];

const MAX = 155;
const FLOOR = 90;

/**
 * ⚠️ PRESERVE THE PRICE AND THE CTA.
 *
 * A first version of this script trimmed purely from the end, which quietly
 * deleted "From AED 1,500." and "Free quote in 2 hours." off dozens of
 * descriptions. Published rates are this site's single strongest snippet
 * differentiator — almost nobody in this SERP publishes prices — so cutting
 * them to satisfy a character count would have been a net loss even though
 * the metric would have gone green.
 *
 * So the tail is protected: if the final sentence looks like a price or a
 * call to action, it is kept and the trim takes material out of the MIDDLE
 * instead.
 */
const TAIL_WORTH_KEEPING = /(AED\s?[\d,]+|free quote|quote in \d|same-day|48[- ]?h(our)?s?)/i;

function splitTail(desc) {
  // Last sentence, if there is one and it is short enough to be a CTA.
  const m = desc.match(/(?:^|[.!?]\s)([^.!?]{3,40}[.!?])\s*$/);
  if (m && TAIL_WORTH_KEEPING.test(m[1])) {
    return { head: desc.slice(0, desc.length - m[1].length).trim(), tail: m[1].trim() };
  }
  return { head: desc, tail: "" };
}

function cutTo(text, limit) {
  if (text.length <= limit) return text;
  const win = text.slice(0, limit + 1);

  const sentence = Math.max(win.lastIndexOf(". "), win.lastIndexOf("! "), win.lastIndexOf("? "));
  if (sentence >= FLOOR) return text.slice(0, sentence + 1).trim();

  let clause = -1;
  for (const sep of ["— ", "– ", ", ", "; "]) clause = Math.max(clause, win.lastIndexOf(sep));
  if (clause >= FLOOR) return text.slice(0, clause).trim().replace(/[,;—–]$/, "");

  const word = win.lastIndexOf(" ");
  if (word >= FLOOR) return text.slice(0, word).trim().replace(/[,;—–]$/, "");

  return null;
}

function trim(desc) {
  if (desc.length <= MAX) return null;

  const { head, tail } = splitTail(desc);

  if (tail) {
    // Reserve room for the tail plus the space before it.
    const budget = MAX - tail.length - 1;
    if (budget >= FLOOR) {
      const cutHead = cutTo(head, budget);
      if (cutHead) {
        const joined = `${cutHead.replace(/[.\s]+$/, "")}. ${tail}`;
        if (joined.length <= MAX) return joined;
      }
    }
    // Tail too long to preserve alongside anything useful — fall through.
  }

  return cutTo(desc, MAX);
}

let changed = 0;
let skipped = 0;
const skippedList = [];

for (const rel of FILES) {
  const file = resolve(root, rel);
  let src = readFileSync(file, "utf8");
  let fileChanged = 0;

  // ONLY `metaDescription:`. Never a bare `description:` — in this codebase
  // that key is also used for page body copy, schema fields and openGraph.
  src = src.replace(/(metaDescription):\s*"((?:[^"\\]|\\.)*)"/g, (match, key, body) => {
    // Work on the real string: unescape, measure, re-escape.
    const real = body.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    if (real.length <= 160) return match;

    const cut = trim(real);
    if (!cut) {
      skipped++;
      skippedList.push(`${rel}  (${real.length}) ${real.slice(0, 70)}…`);
      return match;
    }
    changed++;
    fileChanged++;
    const esc = cut.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `metaDescription: "${esc}"`;
  });

  if (fileChanged) {
    writeFileSync(file, src);
    console.log(`  ${String(fileChanged).padStart(4)}  ${rel}`);
  }
}

console.log(`\n${changed} description(s) trimmed to <= ${MAX} chars.`);
if (skipped) {
  console.log(`\n${skipped} left alone — a safe cut would have dropped them under ${FLOOR} chars.`);
  console.log("These need a human rewrite rather than a machine trim:");
  for (const s of skippedList.slice(0, 20)) console.log("   " + s);
}
if (changed === 0) {
  console.log("NOTHING CHANGED — if that is unexpected, the matcher is wrong, not the site.");
}
