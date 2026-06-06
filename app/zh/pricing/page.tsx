import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "摄影摄像价格表 2026 | 迪拜 Backyard Studio Official",
  description: "迪拜及阿联酋摄影摄像服务价格2026。婚礼摄影起价AED 3,500，企业视频起价AED 15,000，无人机航拍起价AED 2,000。免费报价，2小时内回复。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "摄影摄像价格表 2026 — 迪拜 | Backyard Studio Official",
    description: "透明定价：婚礼AED 3,500起，企业视频AED 15,000起，无人机AED 2,000起。2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh/pricing",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official 价格表 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "摄影摄像价格表 2026 — 迪拜",
    description: "婚礼AED 3,500起·企业视频AED 15,000起·无人机AED 2,000起",
    images: ["/og-image.jpg"],
  },
};

const PACKAGES = [
  {
    name: "婚礼摄影 · 基础套餐",
    price: "AED 3,500",
    features: ["8小时拍摄", "1名摄影师 + 1名摄像师", "精剪集锦视频（3-5分钟）", "200+精修照片", "私密网络相册", "48小时集锦交付"],
  },
  {
    name: "婚礼摄影 · 豪华套餐",
    price: "AED 7,500",
    features: ["12小时拍摄", "2名摄影师 + 2名摄像师", "完整婚礼影片（30-45分钟）+ 精剪集锦", "500+精修照片", "无人机航拍", "USB精装礼盒交付"],
    highlight: true,
  },
  {
    name: "企业视频 · 标准套餐",
    price: "AED 15,000",
    features: ["拍摄策划与脚本", "1天拍摄", "专业剪辑与调色", "品牌片（2-3分钟）", "背景音乐授权", "2次修改机会"],
  },
  {
    name: "社交媒体内容 · 月度套餐",
    price: "AED 3,000/月",
    features: ["每月8条短视频Reels", "策划 + 拍摄 + 剪辑", "字幕与配乐", "平台优化发布", "月度数据报告"],
  },
  {
    name: "活动拍摄 · 半日套餐",
    price: "AED 3,500",
    features: ["4小时现场拍摄", "1名摄影师 + 1名摄像师", "当日精选图片交付", "精剪集锦视频（2分钟）"],
  },
  {
    name: "无人机航拍 · 标准套餐",
    price: "AED 2,000",
    features: ["2小时航拍", "GCAA合规操作", "4K超高清素材", "基础剪辑交付", "DJIM30T旗舰设备"],
  },
];

export default function ZhPricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "价格", "item": "https://www.backyardstudioofficial.com/zh/pricing" },
        ],
      }) }} />
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          服务报价
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "560px", margin: "0 auto", lineHeight: 1.8 }}>
          透明定价，无隐藏费用。所有套餐可根据需求定制，联系我们获取专属报价。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.name} style={{
              background: pkg.highlight ? "linear-gradient(135deg,#1a1500,#0a0a0a)" : "#111",
              border: pkg.highlight ? "1px solid var(--gold)" : "1px solid rgba(212,175,55,0.15)",
              borderRadius: "4px", padding: "2rem", position: "relative",
            }}>
              {pkg.highlight && (
                <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", padding: "0.2rem 1rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 700, fontFamily: "'Noto Sans SC', sans-serif" }}>
                  最受欢迎
                </div>
              )}
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.125rem", marginBottom: "0.5rem" }}>{pkg.name}</h2>
              <div style={{ color: "var(--gold)", fontSize: "1.75rem", fontWeight: 900, marginBottom: "1.25rem", fontFamily: "'Noto Sans SC', sans-serif" }}>{pkg.price}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem" }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)",