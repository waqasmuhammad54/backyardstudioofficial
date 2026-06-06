import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜最佳视频制作公司 2026 | Backyard Studio Official",
  description: "迪拜领先制作公司——企业宣传片、婚礼摄影摄像、房产拍摄、无人机航拍（GCAA许可）、社交媒体内容制作。超过2,400个项目完成。2小时内免费报价。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title: "迪拜最佳视频制作公司 2026 | Backyard Studio Official",
    description: "企业宣传片、婚礼摄影、房产拍摄、无人机航拍（GCAA）。超过2,400个项目。2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — 迪拜最佳影视制作" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "迪拜最佳视频制作公司 | Backyard Studio Official",
    description: "超过2,400个项目。GCAA无人机执照。2小时免费报价。",
    images: ["/og-image.jpg"],
  },
};

const SERVICES = [
  { icon: "🎬", title: "企业宣传片", desc: "从8,000迪拉姆起——企业形象片、产品视频、客户证言视频。" },
  { icon: "💍", title: "婚礼摄影摄像", desc: "电影级婚礼摄像与专业婚礼摄影，记录您最珍贵的时刻。" },
  { icon: "🏙️", title: "房产拍摄", desc: "豪华别墅、公寓及开发商项目的专业视频与照片拍摄。" },
  { icon: "🚁", title: "无人机航拍", desc: "持有GCAA商业飞行许可证，可在迪拜全市合法航拍。" },
  { icon: "📱", title: "社交媒体内容", desc: "Instagram、TikTok、YouTube专业内容制作与策划。" },
  { icon: "📺", title: "广告片制作", desc: "电视广告、品牌片、汽车广告，专业级别一站式制作。" },
];

const STATS = [
  { num: "2,400+", label: "完成项目" },
  { num: "7", label: "覆盖全部阿联酋酋长国" },
  { num: "GCAA", label: "无人机商业许可证" },
  { num: "5★", label: "客户满意度" },
];

const FAQS_ZH = [
  { q: "迪拜最好的视频制作公司是哪家？", a: "Backyard Studio Official是2026年迪拜领先的影视制作公司，已完成超过2,400个项目，覆盖阿联酋全境七个酋长国，持有GCAA无人机商业执照，可提供中文服务。" },
  { q: "迪拜专业视频制作费用是多少？", a: "迪拜视频制作价格从企业宣传片AED 15,000起，婚礼摄影AED 3,500起，社交媒体内容AED 3,000起，无人机航拍AED 2,000起。所有项目均提供2小时内免费报价。" },
  { q: "你们是否提供中文服务？", a: "是的，我们可以全程使用中文沟通，了解您的需求并提供专业建议。我们服务迪拜华人社区及中资企业。" },
  { q: "无人机航拍在迪拜合法吗？需要许可证吗？", a: "在迪拜进行商业无人机拍摄必须持有GCAA（阿联酋民用航空局）颁发的商业飞行执照。我们持有该执照，所有航拍均合法合规。" },
];

export default function ZhHomePage() {
  return (
    <>
      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_ZH.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #111 100%)", padding: "6rem 2rem 5rem", textAlign: "center" }}>
        <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.15em" }}>
          迪拜顶级创意制作公司
        </div>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem", lineHeight: 1.3 }}>
          迪拜专业视频制作<br /><span style={{ color: "var(--gold)" }}>让您的品牌焕发光彩</span>
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", maxWidth: "620px", margin: "0 auto 2.5rem", fontSize: "1.05rem", lineHeight: 1.9 }}>
          我们是迪拜华人社区信赖的视频制作团队。企业宣传片、婚礼摄影、房产拍摄、无人机航拍——为您提供一站式专业影视制作服务。
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
            免费咨询报价
          </a>
          <a href="/zh/portfolio" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--cream)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
            查看作品集
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#111", padding: "3rem 2rem", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "2rem", fontWeight: 900 }}>{s.num}</div>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div