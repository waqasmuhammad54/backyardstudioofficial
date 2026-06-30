import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

const portfolioSchema = {
  ...buildPortfolioItemListSchema(),
  name: "Backyard Studio Official — 作品集",
  description: "Backyard Studio Official精选作品集。企业视频、婚礼摄影、无人机航拍、时尚大片——超过500个迪拜及阿联酋项目。",
  url: "https://www.backyardstudioofficial.com/zh/portfolio",
  inLanguage: "zh",
};

export const metadata: Metadata = {
  title: "作品集 | 迪拜摄影摄像作品 Backyard Studio Official",
  description: "Backyard Studio Official精选作品集。企业视频、婚礼摄影、无人机航拍、时尚大片——超过2,400个迪拜及阿联酋项目。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/portfolio" },
};

const CATEGORIES = [
  { label: "全部作品", value: "all" },
  { label: "企业视频", value: "corporate" },
  { label: "婚礼摄影", value: "wedding" },
  { label: "无人机航拍", value: "drone" },
  { label: "社交媒体", value: "social" },
  { label: "时尚摄影", value: "fashion" },
];

export default function ZhPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          作品集
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          超过2,400个项目，以下为部分精选展示。
        </p>
      </section>

      <section style={{ padding: "3rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", justifyContent: "center", marginBottom: "3rem" }}>
            {CATEGORIES.map((cat) => (
              <span key={cat.value} style={{ background: cat.value === "all" ? "var(--gold)" : "rgba(212,175,55,0.1)", color: cat.value === "all" ? "#000" : "var(--gold)", border: "1px solid var(--gold)", padding: "0.4rem 1.1rem", borderRadius: "2px", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.875rem", cursor: "pointer" }}>
                {cat.label}
              </span>
            ))}
          </div>

          {/* Vimeo Showreel */}
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1rem", textAlign: "center" }}>
              精彩混剪
            </h2>
            <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", borderRadius: "4px", border: "1px solid rgba(212,175,55,0.2)" }}>
              <iframe
                src="https://www.youtube.com/embed/oJddzb2DKTU?rel=0&modestbranding=1"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Backyard Studio Official — Showreel"
              />
            </div>
          </div>

          {/* More videos grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "企业品牌影片", desc: "2024年迪拜精选企业项目", vimeoId: "oJddzb2DKTU" },
              { title: "婚礼摄影合集", desc: "迪拜婚礼精彩瞬间", vimeoId: "oJddzb2DKTU" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={`https://www.youtube.com/embed/${item.vimeoId}?rel=0&modestbranding=1`}
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                    allow="autoplay; fullscreen"
                    title={item.title}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{item.title}</h3>
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", marginBottom: "1rem" }}>
              查看更多作品，请访问我们的社交媒体
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
              <a href="https://www.instagram.com/backyardstudioofficial" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid var(--gold)", padding: "0.6rem 1.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                Instagram
              </a>
              <a href="https://www.youtube.com/@BackyardStudioofficialuae" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid var(--gold)", padding: "0.6rem 1.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "你们做过哪些类型的项目？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的作品集涵盖婚礼影片、企业品牌视频、无人机航拍、时装大片、美食摄影、活动纪录片、社交媒体短视频（Reels/TikTok）、房地产视频漫游、产品电商摄影以及广告商业片等类别。每个项目类别都有专属的创作团队和制作流程。"
                }
              },
              {
                "@type": "Question",
                "name": "你们有在迪拜拍摄的实际案例吗？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "是的。我们在迪拜完成了数百个项目，包括迪拜世界贸易中心举行的大型企业活动、棕榈岛豪华婚礼、迪拜市中心商业广告、哈利法塔周边无人机航拍以及各大五星级酒店的品牌宣传内容。我们熟悉迪拜的每一个主要拍摄地点、拍摄许可要求和最佳拍摄时机。"
                }
              },
              {
                "@type": "Question",
                "name": "项目交付时间是多久？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "拍摄当天可交付60秒社交媒体精华片段（同日交付版）；标准活动集锦视频和摄影作品集于48小时内完成；婚礼纪录片在14至21个工作日内交付；企业宣传片通常在7至14个工作日内完成。如有紧急需求，我们也提供加急交付服务，请提前告知。"
                }
              },
              {
                "@type": "Question",
                "name": "你们如何保证视频质量？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们使用好莱坞级专业设备，包括 ARRI 电影摄影机、Sony Cinema Line 系列、DaVinci Resolve 调色系统及专业音频设备。后期制作由资深剪辑师和调色师完成，确保每个项目达到国际广播级标准。所有项目均包含两轮修改，直至客户100%满意为止。"
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
                你们做过哪些类型的项目？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的作品集涵盖婚礼影片、企业品牌视频、无人机航拍、时装大片、美食摄影、活动纪录片、社交媒体短视频（Reels/TikTok）、房地产视频漫游、产品电商摄影以及广告商业片等类别。每个项目类别都有专属的创作团队和制作流程。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们有在迪拜拍摄的实际案例吗？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                是的。我们在迪拜完成了数百个项目，包括迪拜世界贸易中心举行的大型企业活动、棕榈岛豪华婚礼、迪拜市中心商业广告、哈利法塔周边无人机航拍以及各大五星级酒店的品牌宣传内容。我们熟悉迪拜的每一个主要拍摄地点、拍摄许可要求和最佳拍摄时机。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                项目交付时间是多久？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                拍摄当天可交付60秒社交媒体精华片段（同日交付版）；标准活动集锦视频和摄影作品集于48小时内完成；婚礼纪录片在14至21个工作日内交付；企业宣传片通常在7至14个工作日内完成。如有紧急需求，我们也提供加急交付服务，请提前告知。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们如何保证视频质量？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们使用好莱坞级专业设备，包括 ARRI 电影摄影机、Sony Cinema Line 系列、DaVinci Resolve 调色系统及专业音频设备。后期制作由资深剪辑师和调色师完成，确保每个项目达到国际广播级标准。所有项目均包含两轮修改，直至客户100%满意为止。
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