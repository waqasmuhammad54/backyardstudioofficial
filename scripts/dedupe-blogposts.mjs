// Removes duplicate slug entries from lib/blogPosts.ts.
//
// getBlogPost() uses BLOG_POSTS.find(), so when two entries share a slug the FIRST wins
// and every later one is unreachable dead code. 164 entries / 148 distinct slugs means
// 16 posts are currently unserveable. This keeps the richest version of each slug
// (longest `content`) and drops the rest.
//
// Entries are located by the literal opening sequence rather than brace matching, because
// the HTML content field contains braces and would break a naive matcher.
import fs from "node:fs";

const PATH = "lib/blogPosts.ts";
// Always work from the pristine backup if one exists, so re-runs are idempotent.
const SRC_PATH = fs.existsSync(PATH + ".bak") ? PATH + ".bak" : PATH;
const src = fs.readFileSync(SRC_PATH, "utf8");
console.log(`Reading from: ${SRC_PATH}`);

// The file is CRLF, so match line breaks tolerantly rather than with literal "\n".
const OPEN_RE = /\r?\n {2}\{\r?\n {4}slug: "/g;
const starts = [...src.matchAll(OPEN_RE)].map((m) => m.index);
if (starts.length === 0) { console.error("Could not locate any entries"); process.exit(1); }

const tailIdx = src.slice(starts[starts.length - 1]).search(/\r?\n\];/);
if (tailIdx < 0) { console.error("Could not locate array close"); process.exit(1); }
const arrayEnd = starts[starts.length - 1] + tailIdx;

const entries = starts.map((s, i) => {
  const end = i + 1 < starts.length ? starts[i + 1] : arrayEnd;
  const text = src.slice(s, end);
  const slug = /slug:\s*"([^"]+)"/.exec(text)?.[1] ?? `??${i}`;
  // Total entry length is the reliable richness proxy here — the content field is a
  // backtick template literal containing arbitrary HTML, so extracting it cleanly is
  // fragile. Entry length tracks it closely enough to pick the fuller article.
  return { i, slug, text, len: text.length, faqs: (text.match(/question:/g) || []).length };
});

console.log(`Parsed entries: ${entries.length}`);
const distinct = new Set(entries.map((e) => e.slug));
console.log(`Distinct slugs: ${distinct.size}`);

// group and pick a winner per slug
const bySlug = new Map();
for (const e of entries) {
  if (!bySlug.has(e.slug)) bySlug.set(e.slug, []);
  bySlug.get(e.slug).push(e);
}

const drop = new Set();
console.log("\n=== DUPLICATE RESOLUTION ===");
for (const [slug, group] of bySlug) {
  if (group.length < 2) continue;
  const winner = group.reduce((a, b) => (b.len > a.len ? b : a));
  const upgraded = winner !== group[0] ? "   (upgrade: richer copy was previously unreachable)" : "";
  console.log(`\n${slug}  (${group.length} copies)${upgraded}`);
  for (const g of group) {
    const mark = g === winner ? "KEEP  " : "DROP  ";
    if (g !== winner) drop.add(g.i);
    console.log(`   ${mark} entry#${g.i}  ${g.len} chars, ${g.faqs} faqs`);
  }
}

if (drop.size === 0) { console.log("\nNothing to drop."); process.exit(0); }

const kept = entries.filter((e) => !drop.has(e.i));
const rebuilt = src.slice(0, starts[0]) + kept.map((e) => e.text).join("") + src.slice(arrayEnd);

fs.writeFileSync(PATH + ".bak", src, "utf8");
fs.writeFileSync(PATH, rebuilt, "utf8");

console.log(`\nDropped ${drop.size} duplicate entries.`);
console.log(`Entries: ${entries.length} -> ${kept.length}`);
console.log(`Backup written to ${PATH}.bak`);
