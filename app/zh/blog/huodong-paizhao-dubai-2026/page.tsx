import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜活动摄影2026：企业年会、展会与发布会拍摄",
  description:
    "迪拜专业活动摄影AED 2,500起——企业年会、展会、产品发布、颁奖典礼。DWTC、Madinat、Atlantis常驻拍摄团队，当天交付精选集锦。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog/huodong-paizhao-dubai-2026",
    languages: {
      zh: "https://www.backyardstudioofficial.com/zh/blog/huodong-paizhao-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/conference-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "zh_CN",
    title: "迪拜活动摄影2026 | Backyard Studio",
    description: "企业年会、展会、发布会——迪拜活动摄影AED 2,500起，当天交付。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EventsZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "迪拜活动摄影费用是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "迪拜活动摄影费用从AED 2,500起（半天拍摄）。全天（8小时）拍摄收费在AED 4,500至AED 7,500之间。大型多场馆活动（需要2名摄影师）报价在AED 8,000至AED 11,000之间。",
        },
      },
      {
        "@type": "Question",
        name: "多久可以收到活动照片？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "精选集锦（20-30张精修图）在活动结束后4-6小时内交付，适合当天社交媒体发布。完整图库（300-500张精修图）在3-5个工作日内交付。",
        },
      },
      {
        "@type": "Question",
        name: "你们在GITEX和Arab Health等大型展会拍摄经验丰富吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "是的。我们在DWTC的大型行业展会（GITEX、Arab Health、Big 5、Cityscape等）积累了丰富经验，熟悉展会现场的证件办理流程、灯光环境特点和展位拍摄逻辑。",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/zh" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>首页</a> / <a href="/zh/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>博客</a> / <span>活动摄影</span>
        </nav>
        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>活动摄影</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "1rem" }}>
          迪拜活动摄影2026<br /><span style={{ color: "var(--gold)" }}>展会 · 年会 · 发布会 · 颁奖典礼</span>
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Fahad Iqbal Butt</span><span>2026年6月</span><span>6分钟阅读</span>
        </div>
        <div style={{ width: "100%", height: "360px", background: "linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(10,10,10,0.9) 100%)", borderRadius: "4px", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(212,175,55,0.12)" }}>
          <span style={{ color: "rgba(212,175,55,0.4)", fontSize: "4rem" }}>🎪</span>
        </div>
        <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>每一场企业活动都是一笔投资。场地租赁、餐饮、布置、嘉宾——这一切的价值，最终体现在活动结束后能否留下有力的视觉记录。发布到领英的精选图、发给媒体的新闻稿配图、存入企业档案的历史影像——这些都从专业摄影师的镜头开始。</p>
        <p style={{ marginBottom: "2.5rem" }}>Backyard Studio的摄影团队长期服务迪拜企业活动市场，熟悉DWTC、Madinat Jumeirah、Atlantis等主要场馆的拍摄条件与工作流程。我们提供当天精选集锦交付，让您的内容在活动热度最高峰时即刻上线。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>我们服务的活动类型</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {["企业年会 / 颁奖典礼", "行业展会 / 博览会", "产品发布会", "投资者大会 / 论坛", "开业典礼 / 剪彩仪式", "企业晚宴 / Gala"].map((type) => (
            <div key={type} style={{ padding: "0.75rem 1rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "2px", color: "rgba(245,240,225,0.75)", fontSize: "0.875rem", textAlign: "center" }}>
              {type}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>2026年活动摄影收费参考</h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "半天拍摄", detail: "4小时 / 1摄影师 / 100-150张精修图", price: "AED 2,500" },
            { pkg: "全天拍摄", detail: "8小时 / 1摄影师 / 250+张 / 当天集锦", price: "AED 4,500 – 6,000" },
            { pkg: "双摄影师套餐", detail: "多场馆 / 2摄影师 / 400+张 / 全程覆盖", price: "AED 8,000 – 11,000" },
            { pkg: "摄影+摄像组合", detail: "1摄影师+1摄像师 / 集锦视频2-3分钟", price: "AED 7,500 – 12,000" },
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
            { q: "迪拜活动摄影费用多少？", a: "从AED 2,500起（半天）。全天4,500-7,500 AED。双摄影师套餐8,000-11,000 AED。" },
            { q: "多久交付照片？", a: "当天精选集锦4-6小时内交付。完整图库3-5个工作日。" },
            { q: "在GITEX等大型展会拍摄有经验吗？", a: "是的，我们在DWTC的GITEX、Arab Health等大型行业展会积累了丰富经验。" },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>有即将举办的活动？</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>提前预约——迪拜旺季档期通常提前2-4周满档。</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp咨询</a>
            <a href="/zh/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>查看价格</a>
          </div>
        </div>
      </article>
    </>
  );
}
