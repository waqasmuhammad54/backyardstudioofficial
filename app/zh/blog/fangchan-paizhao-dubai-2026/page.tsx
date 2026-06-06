import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜房产摄影2026：价格、套餐与拍摄攻略",
  description:
    "迪拜专业房产摄影AED 2,500起——公寓、别墅、开发商项目。GCAA认证无人机航拍，48小时交付。Backyard Studio专业团队为您服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog/fangchan-paizhao-dubai-2026",
    languages: {
      zh: "https://www.backyardstudioofficial.com/zh/blog/fangchan-paizhao-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/real-estate-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "zh_CN",
    title: "迪拜房产摄影2026 | Backyard Studio",
    description: "迪拜专业房产摄影AED 2,500起，GCAA认证无人机，48小时交付。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RealEstateZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "迪拜房产摄影收费标准是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "迪拜房产摄影费用从AED 2,500起（普通公寓室内拍摄）。豪华别墅完整套餐（包含无人机航拍、日落时分拍摄及视频导览）通常在AED 6,000至AED 15,000之间，具体取决于物业规模和所需内容类型。",
        },
      },
      {
        "@type": "Question",
        name: "房产摄影需要多长时间完成拍摄？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "一套普通公寓（1-2居室）的室内拍摄通常需要2-3小时。豪华别墅或大型物业可能需要5-8小时，包括外观、室内各空间、游泳池及周边环境拍摄。我们提供48小时标准交付，急件可安排24小时加急交付。",
        },
      },
      {
        "@type": "Question",
        name: "你们有GCAA认证的无人机拍摄许可吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "有。我们的无人机飞手持有GCAA（阿联酋民航局）认证，所有航拍项目均依法合规操作。在迪拜进行无人机拍摄必须持有相关资质，选择未经认证的飞手存在法律风险，请务必向拍摄团队索取证件。",
        },
      },
      {
        "@type": "Question",
        name: "房产视频导览与静态照片哪个更有效？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "两者相辅相成。静态照片适合房源列表展示（Property Finder、Bayut等平台），视频导览则显著提升买家兴趣——数据显示，附有视频的房源比纯图片房源获得多出403%的询盘。建议结合使用：静态图用于平台展示，视频用于社交媒体推广。",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "迪拜房产摄影2026：价格、套餐与拍摄攻略",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Lead Photographer — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "zh",
    url: "https://www.backyardstudioofficial.com/zh/blog/fangchan-paizhao-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/zh" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>首页</a> / <a href="/zh/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>博客</a> / <span>房产摄影</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          房产摄影
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "1rem" }}>
          迪拜房产摄影2026
          <br /><span style={{ color: "var(--gold)" }}>价格透明 · 48小时交付 · GCAA认证航拍</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Fahad Iqbal Butt</span><span>2026年6月</span><span>7分钟阅读</span>
        </div>

        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80" alt="迪拜豪华公寓室内房产摄影" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem" }} />

        <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>
          迪拜房产市场竞争激烈。Property Finder和Bayut上每天新增数百条房源，买家和租客的注意力就是稀缺资源。研究表明，高质量房产照片能使房源点击率提升118%，而专业视频导览更能让询盘量增加403%。
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Backyard Studio为迪拜房产开发商、中介和私人业主提供专业房产摄影摄像服务。从Marina的高层公寓到Palm Jumeirah的顶层豪宅，我们深知每个区域的光线特点和最佳拍摄时机。
        </p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>我们服务的房产类型</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0.75rem", marginBottom: "2.5rem" }}>
          {["公寓 / 高层住宅", "独栋别墅 / 联排别墅", "豪华顶层公寓", "商业地产 / 写字楼", "开发商楼盘（预售）", "酒店式公寓"].map((type) => (
            <div key={type} style={{ padding: "0.75rem 1rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "2px", color: "rgba(245,240,225,0.75)", fontSize: "0.875rem", textAlign: "center" }}>
              {type}
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>拍摄内容与服务亮点</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem", marginBottom: "2.5rem" }}>
          {[
            { item: "专业室内摄影", detail: "广角镜头、HDR合成、灯光调整，展现最佳室内空间感" },
            { item: "GCAA认证无人机航拍", detail: "合法低空航拍，捕捉建筑外观、周边配套及海景/城景全貌" },
            { item: "黄金时段拍摄", detail: "日出日落时段的外立面拍摄，呈现迪拜独特光线氛围" },
            { item: "房产视频导览", detail: "2-4分钟专业剪辑，配合背景音乐和字幕，适用于社交媒体推广" },
            { item: "虚拟布景（Virtual Staging）", detail: "空房通过AI布景提升视觉效果，费用远低于实体布置" },
          ].map(({ item, detail }) => (
            <div key={item} style={{ padding: "1rem 1.25rem", background: "rgba(212,175,55,0.05)", borderLeft: "3px solid var(--gold)", borderRadius: "2px" }}>
              <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.2rem" }}>{item}</div>
              <div style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>2026年迪拜房产摄影收费参考</h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "普通公寓", detail: "1-2居室 / 室内拍摄 / 15-25张精修照片", price: "AED 2,500" },
            { pkg: "豪华公寓", detail: "大户型 / 无人机 / 30-40张 / 视频短片", price: "AED 4,500 – 7,000" },
            { pkg: "别墅套餐", detail: "全屋 + 花园 + 泳池 + 无人机 / 50+张 + 视频导览", price: "AED 7,500 – 12,000" },
            { pkg: "开发商项目", detail: "多套房源 / 渲染图对比 / 项目宣传视频", price: "定制报价" },
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
            { q: "迪拜房产摄影收费标准是多少？", a: "普通公寓从AED 2,500起，豪华别墅完整套餐在AED 7,500至AED 12,000之间。" },
            { q: "有GCAA认证无人机拍摄资质吗？", a: "有。我们所有无人机拍摄均持GCAA认证，完全合法合规。" },
            { q: "多久能收到照片？", a: "标准48小时交付。急件可安排24小时加急，需额外收费。" },
            { q: "视频导览比照片更有效吗？", a: "两者结合效果最佳。数据显示附有视频的房源询盘量提升403%。" },
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
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>准备好预约拍摄了吗？</h3>
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
