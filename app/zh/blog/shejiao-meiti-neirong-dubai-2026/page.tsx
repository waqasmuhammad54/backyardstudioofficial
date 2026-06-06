import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜社交媒体短视频制作2026：Reels与TikTok拍摄指南",
  description:
    "迪拜品牌短视频拍摄AED 1,800起——Instagram Reels、TikTok、小红书内容制作。专业剪辑、字幕、多平台格式交付。Backyard Studio为您服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog/shejiao-meiti-neirong-dubai-2026",
    languages: {
      zh: "https://www.backyardstudioofficial.com/zh/blog/shejiao-meiti-neirong-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/social-media-content-creation-dubai-2026",
    },
  },
  openGraph: {
    locale: "zh_CN",
    title: "迪拜社交媒体短视频制作2026 | Backyard Studio",
    description: "Reels、TikTok、小红书——迪拜专业短视频制作AED 1,800起。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function SocialMediaZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "在迪拜拍摄Instagram Reels费用是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "迪拜Instagram Reels拍摄费用从AED 1,800起（半天拍摄，产出3-5条成品视频）。按月套餐（12-16条视频/月）通常在AED 7,500至AED 12,000之间，包含内容策划、拍摄、剪辑和字幕制作。",
        },
      },
      {
        "@type": "Question",
        name: "你们是否为中文品牌和博主提供专属内容服务？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "是的。我们为在迪拜的中文品牌、博主和MCN机构提供内容制作服务，熟悉小红书、抖音海外版等平台的内容逻辑。我们能制作适合华人审美的双语内容。",
        },
      },
      {
        "@type": "Question",
        name: "一个拍摄日能产出多少条视频？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "完整拍摄日（8小时）通常可产出6-10条成品短视频。提前做好分镜脚本，产量可提升至12-15条简洁格式视频。",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "迪拜社交媒体短视频制作2026：Reels与TikTok拍摄指南",
    author: { "@type": "Person", name: "Syed Mazhar Zaidi", jobTitle: "Director — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "zh",
    url: "https://www.backyardstudioofficial.com/zh/blog/shejiao-meiti-neirong-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/zh" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>首页</a> / <a href="/zh/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>博客</a> / <span>社交媒体内容</span>
        </nav>
        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>短视频内容</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "1rem" }}>
          迪拜社交媒体短视频制作2026<br /><span style={{ color: "var(--gold)" }}>Reels · TikTok · 小红书内容一站式服务</span>
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Syed Mazhar Zaidi</span><span>2026年6月</span><span>7分钟阅读</span>
        </div>
        <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1400&q=80" alt="迪拜品牌短视频拍摄制作现场" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem" }} />
        <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>迪拜是全球最上镜的城市之一。哈利法塔、棕榈岛、金色沙漠——这些场景是品牌内容天然的视觉背书。问题不在于迪拜美不美，而在于你的内容是否能在用户滑动屏幕的1.5秒内留住眼球。</p>
        <p style={{ marginBottom: "2.5rem" }}>Backyard Studio为迪拜的品牌、餐厅、博主和企业制作Instagram Reels、TikTok、YouTube Shorts和小红书内容。我们把每一条短视频都当作微型叙事——开头有钩子，中段有价值，结尾有行动召唤。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>我们制作的内容类型</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
          {[
            { type: "品牌Reels", detail: "产品展示、品牌故事、幕后花絮——适合Instagram和TikTok主页" },
            { type: "美食短视频", detail: "餐厅出品展示、制作过程、食评场景——带动外卖和到店流量" },
            { type: "博主合作内容", detail: "为华人KOL/KOC量身制作的双语内容，熟悉小红书和TikTok算法" },
            { type: "广告素材（UGC风格）", detail: "模拟真实用户内容风格的付费广告素材，转化率高于传统广告" },
            { type: "企业LinkedIn视频", detail: "商务感十足的Thought Leadership内容，面向B2B受众" },
          ].map(({ type, detail }) => (
            <div key={type} style={{ padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderLeft: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.2rem" }}>{type}</div>
              <div style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>迪拜华人社区的内容机遇</h2>
        <p style={{ marginBottom: "2.5rem" }}>迪拜的中文社区规模庞大且持续增长。我们熟悉小红书的图文与视频逻辑、TikTok的推流机制。制作迪拜场景下的中文内容，我们比任何本地机构都更了解两个世界的交汇点。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>2026年短视频制作收费参考</h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "单次拍摄", detail: "半天 / 3-5条成品视频 / 剪辑+字幕", price: "AED 1,800 – 3,000" },
            { pkg: "全天套餐", detail: "全天 / 6-10条视频 / 多场景切换", price: "AED 4,500 – 7,000" },
            { pkg: "月度套餐", detail: "2次拍摄/月 / 12-16条视频 / 内容策划", price: "AED 7,500 – 12,000/月" },
            { pkg: "广告UGC套餐", detail: "付费广告素材 / A/B测试版本 / 无水印", price: "AED 2,500 – 5,000" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
              <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "right" }}>{price}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>常见问题</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "拍摄Reels费用多少？", a: "从AED 1,800起（半天，3-5条视频）。月度套餐从AED 7,500起。" },
            { q: "你们做小红书内容吗？", a: "是的，我们熟悉小红书、TikTok和Instagram的内容逻辑，可制作双语内容。" },
            { q: "一天能拍几条？", a: "全天拍摄通常产出6-10条成品视频。" },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.8" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>开始制作您的内容</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>通过WhatsApp联系我们，当天获得报价方案。</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp咨询</a>
            <a href="/zh/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>查看价格</a>
          </div>
        </div>
      </article>
    </>
  );
}
