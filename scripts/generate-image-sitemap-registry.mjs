import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const inputPath = process.argv[2];
const outputPath = process.argv[3] ?? "data/image-sitemap-registry.json";

if (!inputPath) {
  throw new Error("Usage: node scripts/generate-image-sitemap-registry.mjs <audit-data.json> [output.json]");
}

const audit = JSON.parse(await readFile(inputPath, "utf8"));
const canonicalOrigin = "https://www.backyardstudioofficial.com";
const excludedAsset = /\/(?:logo[^/]*|favicon[^/]*|apple-touch-icon|og-image)\.(?:avif|webp|png|jpe?g|gif|svg)$/i;

const entries = audit.pages
  .filter((page) => page.status === 200 && page.indexable)
  .map((page) => {
    const unique = new Map();

    for (const image of page.images ?? []) {
      if (!image.imageUrl || image.role === "og:image") continue;
      const url = new URL(image.imageUrl);
      if (url.origin !== canonicalOrigin || !url.pathname.startsWith("/images/") || excludedAsset.test(url.pathname)) continue;

      const existing = unique.get(url.href);
      if (!existing || (!existing.alt && image.alt)) {
        unique.set(url.href, {
          loc: url.href,
          alt: image.alt || "",
        });
      }
    }

    return {
      pageUrl: page.url,
      images: [...unique.values()].sort((a, b) => a.loc.localeCompare(b.loc)),
    };
  })
  .filter((entry) => entry.images.length > 0)
  .sort((a, b) => a.pageUrl.localeCompare(b.pageUrl));

const registry = {
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  source: "Verified live canonical crawl",
  pageCount: entries.length,
  imageReferenceCount: entries.reduce((total, entry) => total + entry.images.length, 0),
  uniqueImageCount: new Set(entries.flatMap((entry) => entry.images.map((image) => image.loc))).size,
  entries,
};

await writeFile(path.resolve(outputPath), `${JSON.stringify(registry, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ outputPath: path.resolve(outputPath), ...registry, entries: undefined }, null, 2));
