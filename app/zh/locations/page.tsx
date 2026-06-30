import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务地区 | 阿联酋七大酋长国全覆盖 — Backyard Studio Official",
  description: "Backyard Studio Official服务覆盖阿联酋全境七个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富吉拉、乌姆盖万。无额外差旅费，48小时上门服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/locations",
    languages: {
      "en": "https://www.backyardstudioofficial.com/locations",
      "ar": "https://www.backyardstudioofficial.com/ar/locations",
      "ru": "https://www.backyardstudioofficial.com/ru/locations",
      "zh": "https://www.backyardstudioofficial.com/zh/locations",
      "x-default": "https://www.backyardstudioofficial.com/locations",
    },
  },
  openGraph: {
    title: "服务地区 | 阿联酋七大酋长国 — Backyard Studio Official",
    description: "迪拜、阿布扎比及阿联酋全境摄影摄像服务。48小时上门，无额外差旅费。",
    url: "https://www.backyardstudioofficial.com/zh/locations",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "阿联酋摄影摄像服务地区 — Backyard Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "服务地区 — 阿联酋七大酋长国",
    description: "迪拜·阿布扎比·沙迦及全境。48小时上门服务。",
    images: ["/og-image.jpg"],
  },
};

const LOCATIONS = [
  {
    city: "迪拜",
    en: "Dubai",
    desc: "总部所在地。服务区域涵盖迪拜商湾、迪拜码头、棕榈岛、老城区、迪拜溪港、迪拜市中心等所有区域。",
    icon: "🏙️",
  },
  {
    city: "阿布扎比",
    en: "Abu Dhabi",
    desc: "覆盖阿布扎比岛、萨迪亚特岛、亚斯岛、阿布扎比CBD及阿布扎比机场区域。",
    icon: "🕌",
  },
  {
    city: "沙迦",
    en: "Sharjah",
    desc: "沙迦全境摄影摄像服务，包括沙迦海滨、布海拉湖、沙迦文化广场等标志地点。",
    icon: "🌊",
  },
  {
    city: "阿治曼",
    en: "Ajman",
    desc: "阿治曼海滨、阿治曼商业区及周边区域专业拍摄服务。",
    icon: "⛵",
  },
  {
    city: "哈伊马角",
    en: "Ras Al Khaimah",
    desc: "哈伊马角山地、海滩及度假村摄影摄像，无人机航拍一览壮阔山海。",
    icon: "⛰️",
  },
  {
    city: "富吉拉",
    en: "Fujairah",
    desc: "东海岸海滩、富吉拉堡、瓦迪活动摄影全覆盖。",
    icon: "🏖️",
  },
  {
    city: "乌姆盖万",
    en: "Umm Al Quwain",
    desc: "乌姆盖万滨海区域及周边摄影摄像服务。",
    icon: "🌅",
  },
];

export default function ZhLocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "服务地区", "item": "https://www.backyardstudioofficial.com/zh/locations" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        "name": "阿联酋摄影摄像服务地区 — Backyard Studio Official",
        "itemListElement": LOCATIONS.map((loc, i) => ({
          "@type": "ListItem", "position": i + 1,
          "name": `${loc.city} (${loc.en})`,
          "url": `https://www.backyardstudioofficial.com/locations/${loc.en.toLowerCase().replace(/ /g, "-")}`,
        })),
      }) }} />
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          服务地区
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          覆盖阿联酋全境七个酋长国，随时为您提供专业摄影摄像服务。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {LOCATIONS.map((loc) => (
            <div key={loc.city} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.75rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{loc.icon}</div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.25rem" }}>{loc.city}</h2>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.8rem", marginBottom: "0.75rem" }}>{loc.en}</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.8, fontSize: "0.875rem" }}>{loc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          您的项目在哪里？我们来找您
        </h2>
        <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}>
          预约上门拍摄
        </a>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "你们覆盖阿联酋哪些地区？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们为阿联酋全部七个酋长国提供拍摄服务：迪拜（Dubai）、阿布扎比（Abu Dhabi）、沙迦（Sharjah）、阿治曼（Ajman）、哈伊马角（Ras Al Khaimah）、富查伊拉（Fujairah）和乌姆盖万（Umm Al Quwain）。我们熟悉每个酋长国的主要拍摄地点、许可要求和最佳拍摄条件。"
                }
              },
              {
                "@type": "Question",
                "name": "迪拜最佳摄影摄像地点有哪些？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "迪拜提供无与伦比的拍摄背景选择：哈利法塔和迪拜市中心为城市大片提供标志性天际线；棕榈岛和蓝水岛为海滨拍摄提供奢华背景；迪拜溪畔和历史城区为文化类内容提供地道的阿拉伯氛围；沙漠地区（Al Qudra）在金黄日落下提供梦幻沙漠背景；迪拜设计区（d3）和DIFC为时尚和企业拍摄提供现代建筑背景。"
                }
              },
              {
                "@type": "Question",
                "name": "在阿联酋拍摄需要获得许可吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的，在迪拜的某些公共区域拍摄需要获得相关部门的许可，包括迪拜旅游局（DTCM）和迪拜媒体城等机构的拍摄许可。无人机拍摄必须获得GCAA的飞行计划批准。我们作为专业制作公司，会处理所有必要的拍摄许可申请，让您无需操心行政手续。"
                }
              },
              {
                "@type": "Question",
                "name": "你们是否为海湾地区以外的项目提供服务？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们主要在阿联酋及海湾合作委员会（GCC）国家运营，包括沙特阿拉伯、科威特、卡塔尔、巴林和阿曼。对于阿联酋以外的项目，我们可以提供完整的外景拍摄服务，差旅和住宿费用根据项目情况另行报价。"
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
                你们覆盖阿联酋哪些地区？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们为阿联酋全部七个酋长国提供拍摄服务：迪拜（Dubai）、阿布扎比（Abu Dhabi）、沙迦（Sharjah）、阿治曼（Ajman）、哈伊马角（Ras Al Khaimah）、富查伊拉（Fujairah）和乌姆盖万（Umm Al Quwain）。我们熟悉每个酋长国的主要拍摄地点、许可要求和最佳拍摄条件。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                迪拜最佳摄影摄像地点有哪些？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                迪拜提供无与伦比的拍摄背景选择：哈利法塔和迪拜市中心为城市大片提供标志性天际线；棕榈岛和蓝水岛为海滨拍摄提供奢华背景；迪拜溪畔和历史城区为文化类内容提供地道的阿拉伯氛围；沙漠地区（Al Qudra）在金黄日落下提供梦幻沙漠背景；迪拜设计区（d3）和DIFC为时尚和企业拍摄提供现代建筑背景。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                在阿联酋拍摄需要获得许可吗？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                是的，在迪拜的某些公共区域拍摄需要获得相关部门的许可，包括迪拜旅游局（DTCM）和迪拜媒体城等机构的拍摄许可。无人机拍摄必须获得GCAA的飞行计划批准。我们作为专业制作公司，会处理所有必要的拍摄许可申请，让您无需操心行政手续。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们是否为海湾地区以外的项目提供服务？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们主要在阿联酋及海湾合作委员会（GCC）国家运营，包括沙特阿拉伯、科威特、卡塔尔、巴林和阿曼。对于阿联酋以外的项目，我们可以提供完整的外景拍摄服务，差旅和住宿费用根据项目情况另行报价。
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