import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 | 迪拜摄影摄像干货 2026 — Backyard Studio Official",
  description: "迪拜及阿联酋摄影摄像行业资讯、拍摄攻略与价格指南2026——婚礼摄影费用、企业视频制作、无人机航拍规定。中文专业内容，助您深入了解迪拜创意制作行业。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog",
    languages: {
      "en": "https://www.backyardstudioofficial.com/blog",
      "ar": "https://www.backyardstudioofficial.com/ar/blog",
      "ru": "https://www.backyardstudioofficial.com/ru/blog",
      "zh": "https://www.backyardstudioofficial.com/zh/blog",
      "x-default": "https://www.backyardstudioofficial.com/blog",
    },
  },
  openGraph: {
    title: "博客 | 迪拜摄影摄像干货 2026",
    description: "中文摄影摄像资讯：婚礼、企业视频、无人机航拍、价格指南。",
    url: "https://www.backyardstudioofficial.com/zh/blog",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio 博客 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 — 迪拜摄影摄像干货 2026",
    description: "中文摄影摄像资讯：婚礼、企业视频、无人机。",
    images: ["/og-image.jpg"],
  },
};

const BLOG_POSTS_ZH = [
  {
    slug: "hunli-sheying-dubai-2026",
    title: "2026年迪拜婚礼摄影完全指南：价格、地点与注意事项",
    excerpt: "在迪拜举办婚礼？本文为您详解婚礼摄影摄像费用（AED 3,500起）、最佳拍摄地点及如何选择专业团队。",
    date: "2026年5月",
    readTime: "8分钟",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业视频制作：如何用影片提升品牌价值",
    excerpt: "一支专业企业影片能带来多大回报？我们分析了迪拜市场上100+企业视频案例，总结出最有效的制作策略。",
    date: "2026年4月",
    readTime: "6分钟",
  },
  {
    slug: "wurenji-hangpai-dubai-2026",
    title: "迪拜无人机航拍：GCAA法规、费用与最佳拍摄地点",
    excerpt: "在阿联酋进行无人机拍摄必须了解GCAA法规。本文为您梳理合法航拍要求、常见违规风险及专业航拍费用。",
    date: "2026年3月",
    readTime: "7分钟",
  },
  {
    slug: "shejiao-meiti-neirong-dubai-2026",
    title: "迪拜社交媒体短视频制作2026：Reels与TikTok拍摄指南",
    excerpt: "Instagram Reels、TikTok、小红书内容一站式制作——迪拜场景拍摄、专业剪辑、双语字幕。AED 1,800起，支持华人博主与品牌。",
    date: "2026年6月",
    readTime: "7分钟",
  },
  {
    slug: "fangchan-paizhao-dubai-2026",
    title: "迪拜房产摄影2026：价格、套餐与拍摄攻略",
    excerpt: "从Marina公寓到Palm Jumeirah豪宅——专业房产摄影AED 2,500起，GCAA认证无人机航拍，48小时交付，提升房源点击率118%。",
    date: "2026年6月",
    readTime: "7分钟",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业视频制作2026：品牌影片、宣传片与客户证言",
    excerpt: "Backyard Studio为迪拜100+品牌制作企业影片——AED 8,000起，支持中英双语版本，2-4周交付，提升网站转化率80%。",
    date: "2026年6月",
    readTime: "8分钟",
  },
  {
    slug: "huodong-paizhao-dubai-2026",
    title: "迪拜活动摄影2026：企业年会、展会与发布会拍摄",
    excerpt: "DWTC、Madinat Jumeirah、Atlantis常驻拍摄团队——活动摄影AED 2,500起，精选集锦当天交付，覆盖GITEX等大型展会。",
    date: "2026年6月",
    readTime: "6分钟",
  },
  {
    slug: "meishi-paizhao-dubai-2026",
    title: "迪拜美食摄影2026：餐厅菜单与外卖平台拍摄指南",
    excerpt: "符合Talabat、Deliveroo规格的专业美食摄影——AED 1,500起，道具齐全，48小时交付，帮助餐厅提升外卖订单25-40%。",
    date: "2026年6月",
    readTime: "6分钟",
  },
];

export default function ZhBlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "博客", "item": "https://www.backyardstudioofficial.com/zh/blog" },
        ],
      }) }} />
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          博客
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          迪拜摄影摄像行业深度内容，助您做出更明智的选择。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {BLOG_POSTS_ZH.map((post) => (
            <article key={post.slug} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                <span style={{ color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", fontFamily: "'Noto Sans SC', sans-serif" }}>{post.date}</span>
                <span style={{ color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", fontFamily: "'Noto Sans SC', sans-serif" }}>· {post.readTime}阅读</span>
              </div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                {post.title}
              </h2>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                {post.excerpt}
              </p>
              <a href={`/zh/blog/${post.slug}`} style={{ color: "var(--gold)", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                阅读全文 →
              </a>
            </article>
          ))}
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "Backyard Studio的博客涵盖哪些主题？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的中文博客涵盖迪拜摄影摄像行业的实用指南和专业知识，包括：阿联酋商业无人机拍摄法规解读（GCAA执照要求）、婚礼摄影如何选择摄影师的建议、迪拜各类拍摄地点指南、食物摄影技巧、企业视频制作流程详解、社交媒体内容策略以及摄影摄像定价参考等。"
                }
              },
              {
                "@type": "Question",
                "name": "如何获取最新的迪拜摄影资讯？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "订阅我们的博客更新，或在Instagram（@backyardstudioofficial）和TikTok上关注我们，我们定期分享幕后花絮、拍摄技巧和行业资讯。我们的英文博客包含更多深度内容，涵盖超过150篇关于迪拜摄影、摄像和内容创作的专业文章。"
                }
              },
              {
                "@type": "Question",
                "name": "这些博客文章对我预约拍摄有帮助吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的。每篇博客文章都附有清晰的定价指引和预约方式。阅读完相关文章后，您可以通过 WhatsApp（+971 58 588 2685）直接联系我们获取免费报价和创意咨询。我们的客户服务团队支持中文沟通，回复时间通常在2小时以内。"
                }
              },
              {
                "@type": "Question",
                "name": "你们是否提供摄影摄像技巧分享？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的，除了服务介绍，我们也分享实用的摄影技巧和行业知识。无论您是正在考虑进入摄影行业的新手，还是想提升自媒体内容质量的创作者，亦或是需要为企业选购最适合拍摄服务的决策者，我们的博客都提供了客观实用的参考信息。"
                }
              },
        ],
      }) }} />

      <section style={{ padding: "4rem 2rem 5rem", background: "#0d0d0d" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "2rem", textAlign: "center" }}>
            常见问题解答
          </h2>
          <div style={{ display: "flex", flexDirection: "column" }}>

            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                Backyard Studio的博客涵盖哪些主题？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的中文博客涵盖迪拜摄影摄像行业的实用指南和专业知识，包括：阿联酋商业无人机拍摄法规解读（GCAA执照要求）、婚礼摄影如何选择摄影师的建议、迪拜各类拍摄地点指南、食物摄影技巧、企业视频制作流程详解、社交媒体内容策略以及摄影摄像定价参考等。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                如何获取最新的迪拜摄影资讯？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                订阅我们的博客更新，或在Instagram（@backyardstudioofficial）和TikTok上关注我们，我们定期分享幕后花絮、拍摄技巧和行业资讯。我们的英文博客包含更多深度内容，涵盖超过150篇关于迪拜摄影、摄像和内容创作的专业文章。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                这些博客文章对我预约拍摄有帮助吗？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                是的。每篇博客文章都附有清晰的定价指引和预约方式。阅读完相关文章后，您可以通过 WhatsApp（+971 58 588 2685）直接联系我们获取免费报价和创意咨询。我们的客户服务团队支持中文沟通，回复时间通常在2小时以内。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们是否提供摄影摄像技巧分享？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                是的，除了服务介绍，我们也分享实用的摄影技巧和行业知识。无论您是正在考虑进入摄影行业的新手，还是想提升自媒体内容质量的创作者，亦或是需要为企业选购最适合拍摄服务的决策者，我们的博客都提供了客观实用的参考信息。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "3rem 2rem", background: "#111", textAlign: "center" }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
          还有疑问？我们提供中文服务，随时为您解答。
        </p>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem" }}>
          WhatsApp: +971 58 588 2685 · 工作日2小时内回复
        </p>
        <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>
          获取免费报价
        </a>
      </section>
    </>
  );
}