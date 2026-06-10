import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "摄影摄像服务 | 迪拜专业制作 2026 — Backyard Studio Official",
  description: "迪拜及阿联酋全套制作服务——企业宣传片AED 15,000起、婚礼摄影AED 3,500起、无人机航拍（GCAA）AED 2,000起、社交媒体内容AED 3,000起。2,400+项目完成。2小时免费报价。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/services",
    languages: {
      "en": "https://www.backyardstudioofficial.com/services",
      "ar": "https://www.backyardstudioofficial.com/ar/services",
      "ru": "https://www.backyardstudioofficial.com/ru/services",
      "zh": "https://www.backyardstudioofficial.com/zh/services",
      "x-default": "https://www.backyardstudioofficial.com/services",
    },
  },
  openGraph: {
    title: "摄影摄像服务 — 迪拜及阿联酋 | Backyard Studio Official",
    description: "企业视频、婚礼、活动、无人机航拍、社交媒体内容。透明定价，2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh/services",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official 服务 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "摄影摄像服务 — 迪拜 | Backyard Studio Official",
    description: "企业视频·婚礼·无人机·社交媒体内容。2小时免费报价。",
    images: ["/og-image.jpg"],
  },
};

const SERVICES = [
  {
    icon: "🎬",
    title: "企业视频制作",
    desc: "我们为品牌制作企业形象片、数字广告（DVC）、投资人影片及纪录片。专业视频不只是内容——它是您品牌形象的战略投资。",
    price: "起价 AED 15,000",
  },
  {
    icon: "💍",
    title: "婚礼摄影摄像",
    desc: "以电影级美学记录您婚礼最珍贵的瞬间——涵盖阿拉伯式、印度式及国际婚礼。迪拜及全阿联酋服务，精彩集锦48小时内交付。",
    price: "起价 AED 3,500",
  },
  {
    icon: "🎪",
    title: "活动及发布会拍摄",
    desc: "企业年会、产品发布、峰会、展览、音乐节全程记录。多机位拍摄，同步直播，快速剪辑交付。",
    price: "起价 AED 3,500",
  },
  {
    icon: "✈️",
    title: "无人机航拍",
    desc: "持有GCAA商业无人机执照，提供阿联酋合法航拍服务。建筑、景观、活动全方位空中视角，影视级画质。",
    price: "起价 AED 2,000",
  },
  {
    icon: "📱",
    title: "社交媒体内容",
    desc: "为Instagram、TikTok、YouTube定制内容策略与拍摄制作。短视频、Reels、品牌故事，帮助您的账号快速增长。",
    price: "起价 AED 3,000",
  },
  {
    icon: "📦",
    title: "产品及电商摄影",
    desc: "高端产品棚拍、电商主图、生活方式场景拍摄。亚马逊、Noon、官网及品牌营销全套图片方案。",
    price: "起价 AED 1,500",
  },
  {
    icon: "👗",
    title: "时尚与广告摄影",
    desc: "时装大片、编辑类摄影、品牌广告视觉内容创作。我们与顶级时尚品牌及摄影师长期合作，打造高端视觉体验。",
    price: "起价 AED 5,000",
  },
  {
    icon: "🏨",
    title: "酒店及房地产视觉",
    desc: "酒店宣传片、房地产项目摄影与视频制作。建筑外观、室内空间、配套设施全景展示，提升项目销售吸引力。",
    price: "起价 AED 4,000",
  },
];

const SERVICES_FAQS_ZH = [
  { q: "迪拜视频制作的价格是多少？", a: "迪拜企业宣传片起价AED 15,000，婚礼摄影摄像起价AED 3,500，活动拍摄起价AED 3,500，无人机航拍起价AED 2,000，社交媒体内容起价AED 3,000。我们提供2小时内免费报价。" },
  { q: "你们的无人机航拍是否持有GCAA许可证？", a: "是的，我们持有GCAA（阿联酋民用航空局）颁发的商业无人机飞行执照，可在迪拜及阿联酋全境合法进行商业航拍。" },
  { q: "你们是否覆盖迪拜以外的地区？", a: "我们服务阿联酋全境七个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富吉拉和乌姆盖万，48小时内可上门服务。" },
  { q: "是否可以用中文沟通？", a: "可以，我们提供全程中文服务，熟悉迪拜华人社区及中资企业的需求。" },
];

export default function ZhServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "服务", "item": "https://www.backyardstudioofficial.com/zh/services" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": SERVICES_FAQS_ZH.map((f) => ({
          "@type": "Question", "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          我们的服务
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8 }}>
          迪拜及阿联酋全套创意制作服务，从策划到交付，一站式解决方案。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.75rem" }}>{s.title}</h2>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1rem" }}>{s.desc}</p>
              <span style={{ color: "var(--gold)", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "0.95rem" }}>{s.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            常见问题
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {SERVICES_FAQS_ZH.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          获取免费报价
        </h2>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem" }}>2小时内回复</p>
        <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}>
          立即咨询
        </a>
      </section>
    </>
  );
}
