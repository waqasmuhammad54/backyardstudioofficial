import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客户评价 | Backyard Studio Official 迪拜",
  description: "来自阿联酋品牌的100多条五星好评。活动摄影、DVC广告、Reels、社交媒体内容及制作服务，覆盖全部7个酋长国。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "客户评价 | Backyard Studio Official 迪拜",
    description: "100多条五星好评。迪拜最受信赖的制作公司，专注活动、DVC、社交媒体和摄影服务。",
    url: "https://www.backyardstudioofficial.com/zh/testimonials",
    locale: "zh_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "客户评价 — Backyard Studio Official" }],
  },
};

const TESTIMONIALS = [
  { name: "伟明", service: "活动摄影",       stars: 5, quote: "Backyard Studio 为我们的活动提供了真正电影级的摄影服务，专业程度超乎预期。从拍摄准备到最终剪辑，每个环节都精益求精，交付速度也远超承诺。" },
  { name: "晓燕", service: "社交媒体内容",   stars: 5, quote: "他们为我们制作的Reels视频有机播放量达到数百万次。他们真正理解阿联酋市场的受众，知道什么样的内容能在社交媒体上引爆传播。" },
  { name: "建国", service: "企业影片",        stars: 5, quote: "他们为我们制作的企业宣传片成为了公司最有力的营销工具。团队完全理解我们的品牌理念，以电影语言完美呈现了企业文化和价值观。" },
  { name: "丽华", service: "DVC广告",         stars: 5, quote: "DVC广告制作无可挑剔——从场景选取到最终调色，每个细节都让人满意。Backyard Studio 在制作水准上确实高出同行一个层次。" },
  { name: "志远", service: "婚礼摄影",        stars: 5, quote: "我们婚礼的电影级记录超越了所有期待。每一个珍贵时刻都被他们的镜头以最动人的方式定格，这不只是拍摄，而是真正的艺术创作。" },
  { name: "雅琴", service: "Reels制作",       stars: 5, quote: "他们将我的简单想法转化为令人惊艳的视觉内容。每一条Reels都带有独特的创意印记，互动数据表现出色，品牌曝光显著提升。" },
  { name: "浩然", service: "GCAA无人机航拍",  stars: 5, quote: "航拍镜头为我们的项目视频增添了完全不同的视觉维度。所有手续合规，航拍在GCAA官方许可下执行，专业且令人放心。" },
  { name: "秀梅", service: "产品摄影",        stars: 5, quote: "他们拍摄的产品照片显著提升了我们网店的转化率。每一张照片都达到了杂志级别的品质，完全超出了预期。" },
  { name: "天明", service: "活动摄影",        stars: 5, quote: "合作过多个活动项目，他们的稳定性令人印象深刻——无论规模大小，专业态度和创意产出始终如一，是值得长期信赖的合作伙伴。" },
];

export default function ZhTestimonialsPage() {
  return (
    <div style={{ fontFamily: "'Noto Sans SC', sans-serif", paddingTop: "6rem" }}>
      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" as const, borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" as const }}>客户评价</p>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>客户怎么说</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem" }}>
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} style={{ color: "var(--gold)", fontSize: "1.1rem" }}>★</span>
          ))}
          <span style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", marginLeft: "0.5rem", fontSize: "0.85rem" }}>5.0 — 100+ 条评价</span>
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ padding: "1.5rem", background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: "2px", display: "flex", flexDirection: "column" as const }}>
              <span style={{ color: "rgba(212,175,55,0.25)", fontSize: "2rem", lineHeight: 1, marginBottom: "1rem" }}>"</span>
              <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "0.75rem" }}>★</span>
                ))}
              </div>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.88rem", lineHeight: 1.85, flex: 1, marginBottom: "1.25rem" }}>
                "{t.quote}"
              </p>
              <div style={{ borderTop: "1px solid #2a2a2a", paddingTop: "1rem" }}>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "0.4rem" }}>{t.name}</p>
                <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.65rem", color: "var(--gold)", border: "1px solid rgba(212,175,55,0.3)", padding: "0.2rem 0.6rem", borderRadius: "2px" }}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" as const, marginTop: "4rem" }}>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.4)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>准备好加入500多位满意的阿联酋客户了吗？</p>
          <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>立即开始项目 →</a>
        </div>
      </section>
    </div>
  );
}
