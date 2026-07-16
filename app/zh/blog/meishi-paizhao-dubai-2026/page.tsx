import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜美食摄影2026：餐厅菜单与外卖平台拍摄指南",
  description:
    "迪拜专业美食摄影AED 1,500起——菜单拍摄、Talabat/Deliveroo外卖图、社交媒体内容。48小时交付。Backyard Studio为200+餐厅服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog/meishi-paizhao-dubai-2026",
    languages: {
      zh: "https://www.backyardstudioofficial.com/zh/blog/meishi-paizhao-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "zh_CN",
    title: "迪拜美食摄影2026 | Backyard Studio",
    description: "菜单、Talabat、Instagram——迪拜美食摄影AED 1,500起，48小时交付。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FoodPhotoZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "迪拜餐厅菜单摄影费用是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "迪拜餐厅菜单摄影费用从AED 1,500起（半天拍摄，15-25道菜品）。完整菜单（40-60道菜）拍摄通常在AED 3,500至AED 6,000之间，视造型风格、道具需求和场景数量而定。",
        },
      },
      {
        "@type": "Question",
        name: "你们拍摄的照片符合Talabat和Deliveroo的图片规格要求吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "是的。我们熟悉Talabat、Deliveroo和Noon Food的图片技术规格，包括分辨率、宽高比和背景要求。我们的照片经过专门优化，在移动端浏览时呈现最佳转化效果。",
        },
      },
      {
        "@type": "Question",
        name: "拍摄美食需要我们提供道具吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "不需要。我们配备完整的道具库，包括各类背景板、餐具、织物和装饰元素。拍摄前我们会与您确认品牌风格和视觉调性，确保道具选择与您的品牌形象一致。您只需带来菜品即可。",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "迪拜美食摄影2026：餐厅菜单与外卖平台拍摄指南",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Lead Photographer — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "zh",
    url: "https://www.backyardstudioofficial.com/zh/blog/meishi-paizhao-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/zh" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>首页</a> / <a href="/zh/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>博客</a> / <span>美食摄影</span>
        </nav>
        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>美食摄影</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "1rem" }}>
          迪拜美食摄影2026<br /><span style={{ color: "var(--gold)" }}>让每道菜都像它最美味的那一刻</span>
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Fahad Iqbal Butt</span><span>2026年6月</span><span>6分钟阅读</span>
        </div>
        <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1400&q=80" alt="迪拜餐厅美食摄影专业布光" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem" }} />
        <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>迪拜是全球餐饮竞争最激烈的城市之一。仅Talabat平台就有数千家餐厅，顾客的选择就在0.5秒内完成。外卖平台数据显示：拥有专业菜品照片的餐厅，订单量比无图或低质图片的同类餐厅高出25-40%。</p>
        <p style={{ marginBottom: "2.5rem" }}>Backyard Studio为迪拜200+餐厅、咖啡厅和食品品牌提供美食摄影服务，涵盖从快餐连锁到米其林级别的高端餐厅。我们理解不同风格的美食呈现逻辑——暗调高端感、清爽极简风、生活化场景感——并根据您的品牌定位量身打造视觉语言。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>我们服务的客户类型</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
          {[
            { client: "餐厅与咖啡厅", detail: "完整菜单拍摄、季节性更新、堂食氛围图" },
            { client: "外卖平台商家", detail: "符合Talabat、Deliveroo、Noon Food规格的专项拍摄" },
            { client: "食品品牌与FMCG", detail: "产品包装摄影、电商主图、广告宣传图" },
            { client: "酒店餐厅", detail: "Fine Dining菜品、下午茶、早餐展示等高端呈现" },
            { client: "烘焙坊与甜品店", detail: "甜点细节特写、节庆系列、打卡场景内容" },
          ].map(({ client, detail }) => (
            <div key={client} style={{ padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderLeft: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.2rem" }}>{client}</div>
              <div style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>2026年美食摄影收费参考</h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "入门套餐", detail: "半天 / 15-25道菜品 / 1种拍摄风格", price: "AED 1,500 – 2,500" },
            { pkg: "菜单套餐", detail: "全天 / 40-60道 / 2种风格 / 道具included", price: "AED 3,500 – 6,000" },
            { pkg: "月度套餐", detail: "2次拍摄/月 / 季节性更新 / 社交媒体图", price: "AED 4,500/月" },
            { pkg: "品牌广告套餐", detail: "广告级拍摄 / 多场景 / 视频+图片组合", price: "AED 8,000+" },
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
            { q: "迪拜餐厅菜单摄影费用多少？", a: "从AED 1,500起（半天，15-25道菜）。完整菜单40-60道在AED 3,500-6,000之间。" },
            { q: "照片符合Talabat规格要求吗？", a: "是的，我们熟悉Talabat、Deliveroo、Noon Food的技术规格，专门优化移动端转化效果。" },
            { q: "需要自带道具吗？", a: "不需要。我们配备完整道具库，您只需带来菜品即可。" },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>升级您的菜单视觉</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>联系我们获取免费报价，通常当天回复。</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp咨询</a>
            <a href="/zh/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>查看价格</a>
          </div>
        </div>
      </article>
    </>
  );
}
