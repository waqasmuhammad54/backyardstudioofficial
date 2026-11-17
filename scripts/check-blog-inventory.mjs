import { existsSync, readFileSync } from "node:fs";

const read = (path) => readFileSync(path, "utf8");
const failures = [];
const inventorySource = read("lib/internationalBlogPosts.ts");
const entries = [...inventorySource.matchAll(/\{ locale: "(ar|ru|zh)", slug: "([^"]+)", title: "([^"]+)" \}/g)]
  .map((match) => ({ locale: match[1], slug: match[2], title: match[3] }));

if (entries.length !== 78) failures.push(`expected 78 canonical translated articles, found ${entries.length}`);

const keys = new Set();
for (const entry of entries) {
  const key = `${entry.locale}/${entry.slug}`;
  if (keys.has(key)) failures.push(`duplicate translated article: ${key}`);
  keys.add(key);
  if (!entry.title.trim()) failures.push(`missing translated title: ${key}`);
  if (!existsSync(`app/${entry.locale}/blog/${entry.slug}/page.tsx`)) {
    failures.push(`inventory route missing: app/${entry.locale}/blog/${entry.slug}/page.tsx`);
  }
}

for (const [path, required] of [
  ["app/rss.xml/route.ts", "INTERNATIONAL_BLOG_POSTS"],
  ["app/sitemap.ts", "INTERNATIONAL_BLOG_POSTS"],
  ["app/ar/blog/page.tsx", "InternationalJournalDirectory"],
  ["app/ru/blog/page.tsx", "InternationalJournalDirectory"],
  ["app/zh/blog/page.tsx", "InternationalJournalDirectory"],
  ["app/(en)/blog/[slug]/page.tsx", "getRelatedBlogPosts"],
  ["app/(en)/blog/[slug]/page.tsx", "data-internal-link-bridge"],
]) {
  if (!read(path).includes(required)) failures.push(`${path} is not driven by ${required}`);
}

if (failures.length > 0) {
  console.error(failures.map((failure) => `BLOG INVENTORY ERROR: ${failure}`).join("\n"));
  process.exit(1);
}

console.log(`OK - ${entries.length} translated articles share one sitemap, RSS and hub inventory; English articles have fallback related links.`);
