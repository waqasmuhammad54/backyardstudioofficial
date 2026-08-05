import { BLOG_POSTS } from "@/lib/blogPosts";
import { getDynamicPosts } from "@/lib/dynamicPosts";
import { RETIRED_BLOG_SLUGS } from "@/lib/retiredSlugs";

const BASE = "https://www.backyardstudioofficial.com";

// Multilingual posts are file-based routes, not in BLOG_POSTS
const INTL_POSTS: { path: string; title: string }[] = [
  { path: "/ar/blog/taswirzifaf-dubai-2026", title: "تصوير حفلات الزفاف في دبي 2026" },
  { path: "/ar/blog/asear-tasswirvideo-dubai-2026", title: "أسعار تصوير الفيديو في دبي" },
  { path: "/ar/blog/video-sharikaat-dubai-2026", title: "فيديو الشركات في دبي" },
  { path: "/ar/blog/taswiremolak-dubai-2026", title: "تصوير العقارات في دبي" },
  { path: "/ar/blog/taswirafidiyat-dubai-2026", title: "تصوير الفعاليات في دبي" },
  { path: "/ar/blog/asear-video-sharkati-dubai-2026", title: "أسعار فيديو الشركات في دبي" },
  { path: "/ar/blog/taswir-zifaf-emirati-dubai-2026", title: "تصوير الزفاف الإماراتي في دبي" },
  { path: "/ar/blog/taswir-zifaf-arabi-dubai-2026", title: "تصوير الزفاف العربي في دبي" },
  { path: "/ar/blog/taswir-taaam-dubai-2026", title: "تصوير الطعام في دبي" },
  { path: "/ar/blog/taswir-muatamart-dubai-2026", title: "تصوير المؤتمرات في دبي" },
  { path: "/ar/blog/tasjil-video-faaliyat-dubai-2026", title: "تسجيل فيديو الفعاليات في دبي" },
  { path: "/ar/blog/intaj-klip-musiqi-dubai-2026", title: "إنتاج كليب موسيقي في دبي" },
  { path: "/ru/blog/svadebnyi-fotograf-dubai-2026", title: "Свадебный фотограф в Дубае 2026" },
  { path: "/ru/blog/svadebnyi-fotograf-abu-dhabi-2026", title: "Свадебный фотограф в Абу-Даби" },
  { path: "/ru/blog/stoimost-videosemki-dubai-2026", title: "Стоимость видеосъёмки в Дубае" },
  { path: "/ru/blog/fotografiya-edy-dubai-2026", title: "Фотография еды в Дубае" },
  { path: "/ru/blog/fotografiya-nedvizhimosti-dubai-2026", title: "Фотография недвижимости в Дубае" },
  { path: "/ru/blog/fotosyomka-feropriiatiy-dubai-2026", title: "Фотосъёмка мероприятий в Дубае" },
  { path: "/ru/blog/korporativnoe-video-dubai-2026", title: "Корпоративное видео в Дубае" },
  { path: "/ru/blog/rily-socsietey-dubai-2026", title: "Рилсы для соцсетей в Дубае" },
  { path: "/ru/blog/semka-nedvizhimosti-dubai-2026", title: "Съёмка недвижимости в Дубае" },
  { path: "/zh/blog/hunli-sheying-dubai-2026", title: "迪拜婚礼摄影完整指南 2026" },
  { path: "/zh/blog/wurenji-hangpai-dubai-2026", title: "迪拜无人机航拍指南" },
  { path: "/zh/blog/chanpin-sheying-dubai-2026", title: "迪拜产品摄影" },
  { path: "/zh/blog/fangchan-paizhao-dubai-2026", title: "迪拜房产拍照" },
  { path: "/zh/blog/huodong-paizhao-dubai-2026", title: "迪拜活动拍照" },
  { path: "/zh/blog/meishi-paizhao-dubai-2026", title: "迪拜美食拍照" },
  { path: "/zh/blog/qiye-shipin-dubai-2026", title: "迪拜企业视频" },
  { path: "/zh/blog/qiye-shipin-zhizuo-dubai-2026", title: "迪拜企业视频制作" },
  { path: "/zh/blog/shejiao-meiti-neirong-dubai-2026", title: "迪拜社交媒体内容" },
];

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  // Google reads this feed as a sitemap (467 URLs via sitemap.xml, 195 via this file),
  // so it has to obey the same rules:
  //   - admin-published posts (content/posts.json) belong here, they were missing entirely
  //   - retired slugs must NOT be listed, they 301 elsewhere and advertising a redirect
  //     wastes crawl budget and makes the feed look stale
  const staticSlugs = new Set(BLOG_POSTS.map((p) => p.slug));
  const feedPosts = [
    ...BLOG_POSTS,
    ...getDynamicPosts().filter((p) => !staticSlugs.has(p.slug)),
  ].filter((p) => !RETIRED_BLOG_SLUGS.has(p.slug));

  const en = feedPosts.map((p: { slug: string; title: string; excerpt?: string; date?: string }) => {
    const pub = p.date ? new Date(p.date) : new Date("2026-06-01");
    return `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}/blog/${p.slug}</link>
      <guid>${BASE}/blog/${p.slug}</guid>
      <pubDate>${pub.toUTCString()}</pubDate>${p.excerpt ? `
      <description>${esc(p.excerpt)}</description>` : ""}
    </item>`;
  });

  const intl = INTL_POSTS.map(
    (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>${BASE}${p.path}</link>
      <guid>${BASE}${p.path}</guid>
      <pubDate>${new Date("2026-06-01").toUTCString()}</pubDate>
    </item>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Backyard Studio Official — Production &amp; Wedding Guides Dubai</title>
    <link>${BASE}</link>
    <description>Video production, wedding photography, and content creation guides for Dubai and the UAE — in English, Arabic, Russian, and Chinese.</description>
    <language>en-ae</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${[...en, ...intl].join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
