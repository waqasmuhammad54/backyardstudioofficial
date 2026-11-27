import imageRegistry from "@/data/image-sitemap-registry.json";

export const dynamic = "force-static";
export const revalidate = 86400;

const xmlEscape = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export function GET() {
  const entries = imageRegistry.entries
    .filter((entry) => entry.images.length > 0)
    .map(
      (entry) =>
        `  <url>\n    <loc>${xmlEscape(entry.pageUrl)}</loc>\n${entry.images
          .map((image) => `    <image:image><image:loc>${xmlEscape(image.loc)}</image:loc></image:image>`)
          .join("\n")}\n  </url>`,
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${entries}\n</urlset>\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
