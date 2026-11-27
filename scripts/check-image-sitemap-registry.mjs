import { readFile } from "node:fs/promises";

const registry = JSON.parse(await readFile("data/image-sitemap-registry.json", "utf8"));
const pageUrls = new Set();
const uniqueImages = new Set();
let references = 0;

for (const entry of registry.entries) {
  if (!entry.pageUrl.startsWith("https://www.backyardstudioofficial.com")) {
    throw new Error(`Non-canonical page URL: ${entry.pageUrl}`);
  }
  if (pageUrls.has(entry.pageUrl)) throw new Error(`Duplicate page: ${entry.pageUrl}`);
  if (!entry.images.length || entry.images.length > 1000) throw new Error(`Invalid image count for ${entry.pageUrl}`);
  pageUrls.add(entry.pageUrl);

  const pageImages = new Set();
  for (const image of entry.images) {
    if (!image.loc.startsWith("https://www.backyardstudioofficial.com/images/")) {
      throw new Error(`Non-owned image URL: ${image.loc}`);
    }
    if (pageImages.has(image.loc)) throw new Error(`Duplicate image on ${entry.pageUrl}: ${image.loc}`);
    pageImages.add(image.loc);
    uniqueImages.add(image.loc);
    references += 1;
  }
}

if (registry.pageCount !== pageUrls.size) throw new Error("pageCount does not match entries");
if (registry.imageReferenceCount !== references) throw new Error("imageReferenceCount does not match entries");
if (registry.uniqueImageCount !== uniqueImages.size) throw new Error("uniqueImageCount does not match entries");

console.log(`Image registry OK: ${pageUrls.size} pages, ${references} references, ${uniqueImages.size} unique images.`);
