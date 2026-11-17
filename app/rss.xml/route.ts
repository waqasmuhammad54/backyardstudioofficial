import { getAllBlogPosts } from "@/lib/blogInventory";
import { INTERNATIONAL_BLOG_POSTS } from "@/lib/internationalBlogPosts";

const BASE = "https://www.backyardstudioofficial.com";

function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
export async function GET() {
  // This feed is a discovery surface as well as a reader feed. It must use the
  // same canonical inventories as the article routes, language hubs and XML
  // sitemap; hand-maintained copies previously omitted 48 live articles.
  const englishItems = getAllBlogPosts().map((post) => {
    const published = new Date(post.dateISO || post.date || "2026-06-01");
    return `    <item>
      <title>${esc(post.title)}</title>
      <link>${BASE}/blog/${post.slug}</link>
      <guid>${BASE}/blog/${post.slug}</guid>
      <pubDate>${published.toUTCString()}</pubDate>${post.excerpt ? `
      <description>${esc(post.excerpt)}</description>` : ""}
    </item>`;
  });

  const internationalItems = INTERNATIONAL_BLOG_POSTS.map((post) => {
    const url = `${BASE}/${post.locale}/blog/${post.slug}`;
    return `    <item>
      <title>${esc(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date("2026-06-01").toUTCString()}</pubDate>
    </item>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Backyard Studio Official — Production &amp; Wedding Guides Dubai</title>
    <link>${BASE}</link>
    <description>Video production, wedding photography, and content creation guides for Dubai and the UAE — in English, Arabic, Russian, and Chinese.</description>
    <language>en-ae</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${[...englishItems, ...internationalItems].join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
