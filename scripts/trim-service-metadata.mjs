/**
 * Trim over-length descriptions in SERVICE_METADATA only.
 *
 * ⚠️ WHY THIS IS A SEPARATE, NARROWLY SCOPED SCRIPT
 *
 * app/(en)/services/[slug]/page.tsx contains TWO objects whose entries both use
 * a `description:` key:
 *
 *   SERVICE_METADATA.description  — the meta description. ~160 chars. Trim it.
 *   SERVICE_DATA.description      — THE FULL PAGE BODY COPY. Multiple
 *                                   paragraphs, thousands of characters.
 *                                   Trimming it DESTROYS THE PAGE.
 *
 * A first attempt matched `description:` across the whole file and truncated 63
 * SERVICE_DATA body fields to about 100 characters — every service page's
 * content, gone. Caught by spot-checking the output, reverted from HEAD.
 *
 * So this script does NOT regex the file. It finds the SERVICE_METADATA block
 * by its boundaries, operates only inside that slice, and then asserts that
 * SERVICE_DATA is byte-identical before writing. If the assertion fails it
 * writes nothing.
 *
 * Trimming rules are the same as scripts/trim-meta-descriptions.mjs: cut at a
 * sentence, then a clause, then a word; never below 90 chars; and preserve a
 * trailing price or CTA, because published rates are the differentiator.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = resolve(root, "app/(en)/services/[slug]/page.tsx");

const MAX = 155;
const FLOOR = 90;
const TAIL_WORTH_KEEPING = /(AED\s?[\d,]+|free quote|quote in \d|same-day|48[- ]?h(our)?s?)/i;

function splitTail(desc) {
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
    const budget = MAX - tail.length - 1;
    if (budget >= FLOOR) {
      const cutHead = cutTo(head, budget);
      if (cutHead) {
        const joined = `${cutHead.replace(/[.\s]+$/, "")}. ${tail}`;
        if (joined.length <= MAX) return joined;
      }
    }
  }
  return cutTo(desc, MAX);
}

const original = readFileSync(FILE, "utf8");

/** Slice out exactly the SERVICE_METADATA object. */
const startKey = "const SERVICE_METADATA";
const start = original.indexOf(startKey);
if (start === -1) throw new Error("SERVICE_METADATA not found — aborting");

// It ends at the first line that is exactly "};" at column 0 after the start.
const endMarker = original.indexOf("\n};", start);
if (endMarker === -1) throw new Error("could not find the end of SERVICE_METADATA — aborting");
const end = endMarker + 3;

const before = original.slice(0, start);
const block = original.slice(start, end);
const after = original.slice(end);

// Guard: SERVICE_DATA must not be inside the slice we are about to edit.
if (block.includes("const SERVICE_DATA")) {
  throw new Error("SERVICE_DATA fell inside the SERVICE_METADATA slice — aborting rather than risking the page copy");
}

let changed = 0;
const newBlock = block.replace(/description:\s*"((?:[^"\\]|\\.)*)"/g, (match, body) => {
  const real = body.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
  if (real.length <= 160) return match;
  const cut = trim(real);
  if (!cut) return match;
  changed++;
  console.log(`  ${real.length} -> ${cut.length}  ${cut.slice(0, 80)}…`);
  return `description: "${cut.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
});

const updated = before + newBlock + after;

// Final assertion: everything outside SERVICE_METADATA is byte-identical.
if (updated.slice(0, start) !== original.slice(0, start) || updated.slice(start + newBlock.length) !== after) {
  throw new Error("content outside SERVICE_METADATA changed — refusing to write");
}

if (changed) {
  writeFileSync(FILE, updated);
  console.log(`\n${changed} SERVICE_METADATA description(s) trimmed. SERVICE_DATA untouched.`);
} else {
  console.log("\nNothing over the limit.");
}
