import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "摄影摄像服务 | 迪拜专业制作 Backyard Studio Official",
  description: "迪拜及阿联酋全套创意制作服务：企业视频、婚礼摄影、活动拍摄、无人机航拍、社交媒体内容、产品及时尚摄影。即时报价。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/services" },
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

export default function ZhServicesPage() {
  return (
    <>
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
