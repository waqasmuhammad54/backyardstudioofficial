/**
 * Trim over-length descriptions in `export const metadata` blocks.
 *
 * Covers the remaining individual page files — the static service pages, the
 * Arabic and Russian pages, and the admin-published blog posts in
 * content/posts.json.
 *
 * ⚠️ SCOPING, which is the whole point of this script
 *
 * `description:` is used all over this codebase for body copy, schema fields,
 * card blurbs and openGraph. A broad match previously truncated 63 service
 * pages' body text to ~100 chars. So this only touches a `description:` that
 * is:
 *   - inside an `export const metadata` object, AND
 *   - at exactly two-space indentation (top level of that object)
 *
 * openGraph and twitter descriptions are nested deeper and are deliberately
 * left alone — they do not appear in search results and have no length limit
 * that matters.
 *
 * content/posts.json is handled separately by key name, since JSON has no
 * indentation guarantee.
 *
 * Same trim rules as the other scripts: sentence, then clause, then word;
 * never below 90 chars; a trailing price or CTA is preserved and the cut taken
 * from the middle instead.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const MAX = 155;
const FLOOR = 90;
const TAIL_WORTH_KEEPING = /(AED\s?[\d,]+|free quote|quote in \d|same-day|48[- ]?h(our)?s?|بساعتين|за 2 часа)/i;

function splitTail(d) {
  const m = d.match(/(?:^|[.!?]\s)([^.!?]{3,45}[.!?])\s*$/);
  if (m && TAIL_WORTH_KEEPING.test(m[1])) {
    return { head: d.slice(0, d.length - m[1].length).trim(), tail: m[1].trim() };
  }
  return { head: d, tail: "" };
}
function cutTo(text, limit) {
  if (text.length <= limit) return text;
  const w = text.slice(0, limit + 1);
  const s = Math.max(w.lastIndexOf(". "), w.lastIndexOf("! "), w.lastIndexOf("? "));
  if (s >= FLOOR) return text.slice(0, s + 1).trim();
  let c = -1;
  for (const sep of ["— ", "– ", ", ", "; ", "، "]) c = Math.max(c, w.lastIndexOf(sep));
  if (c >= FLOOR) return text.slice(0, c).trim().replace(/[,;—–،]$/, "");
  const sp = w.lastIndexOf(" ");
  if (sp >= FLOOR) return text.slice(0, sp).trim().replace(/[,;—–،]$/, "");
  return null;
}
function trim(d) {
  if (d.length <= MAX) return null;
  const { head, tail } = splitTail(d);
  if (tail) {
    const budget = MAX - tail.length - 1;
    if (budget >= FLOOR) {
      const ch = cutTo(head, budget);
      if (ch) {
        const j = `${ch.replace(/[.\s]+$/, "")}. ${tail}`;
        if (j.length <= MAX) return j;
      }
    }
  }
  return cutTo(d, MAX);
}

let changed = 0;

// ── 1. page.tsx files, scoped to the metadata object ──────────────────────
const files = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    if (["node_modules", ".next", ".git", "scripts", "public"].includes(e)) continue;
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full);
    else if (e === "page.tsx" || e === "layout.tsx") files.push(full);
  }
})(resolve(root, "app"));

for (const file of files) {
  const rel = relative(root, file).replace(/\\/g, "/");
  const src = readFileSync(file, "utf8");

  const mStart = src.search(/export const metadata[^=]*=\s*\{/);
  if (mStart === -1) continue;
  const mEnd = src.indexOf("\n};", mStart);
  if (mEnd === -1) continue;

  const head = src.slice(0, mStart);
  const block = src.slice(mStart, mEnd + 3);
  const tail = src.slice(mEnd + 3);

  let n = 0;
  const newBlock = block.replace(/\n {2}description:\s*"((?:[^"\\]|\\.)*)"/g, (match, body) => {
    const real = body.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
    if (real.length <= 160) return match;
    const cut = trim(real);
    if (!cut) return match;
    n++;
    console.log(`  ${String(real.length).padStart(3)} -> ${String(cut.length).padStart(3)}  ${rel}`);
    return `\n  description: "${cut.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
  });

  if (n) {
    writeFileSync(file, head + newBlock + tail);
    changed += n;
  }
}

// ── 2. content/posts.json, by key ─────────────────────────────────────────
const postsPath = resolve(root, "content/posts.json");
if (existsSync(postsPath)) {
  const raw = readFileSync(postsPath, "utf8");
  const posts = JSON.parse(raw);
  let n = 0;
  const visit = (o) => {
    if (Array.isArray(o)) return o.forEach(visit);
    if (!o || typeof o !== "object") return;
    // ⚠️ `metaDescription` ONLY.
    //
    // A first version also trimmed `excerpt`, cutting some from 300 chars to
    // under 100. That was wrong on two counts: an excerpt is not a meta
    // description and has no length limit to satisfy, and it is consumed by
    // app/rss.xml, components/home/BlogPreview AND app/llms-full.txt — the
    // file AI engines read. Shortening it reduces what ChatGPT and Copilot
    // can see, and this site gets 56% of its leads from AI assistants. That
    // is a real cost for zero search benefit. Reverted.
    for (const k of ["metaDescription"]) {
      if (typeof o[k] === "string" && o[k].length > 160) {
        const cut = trim(o[k]);
        if (cut && !o[k].includes("\n") && o[k].length < 400) {
          console.log(`  ${String(o[k].length).padStart(3)} -> ${String(cut.length).padStart(3)}  content/posts.json [${k}]`);
          o[k] = cut;
          n++;
        }
      }
    }
    Object.values(o).forEach(visit);
  };
  visit(posts);
  if (n) {
    writeFileSync(postsPath, JSON.stringify(posts, null, 2) + "\n");
    changed += n;
  }
}

console.log(`\n${changed} description(s) trimmed.`);
if (changed === 0) console.log("NOTHING CHANGED — check the matcher, not the site.");
