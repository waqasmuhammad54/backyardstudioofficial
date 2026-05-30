import type { Metadata } from "next";

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
                src="https://player.vimeo.com/video/1074232475?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                allow="autoplay; fullscreen; picture-in-picture"
                title="Backyard Studio Official — Showreel"
              />
            </div>
          </div>

          {/* More videos grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {[
              { title: "企业品牌影片", desc: "2024年迪拜精选企业项目", vimeoId: "1074232475" },
              { title: "婚礼摄影合集", desc: "迪拜婚礼精彩瞬间", vimeoId: "1074232475" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", overflow: "hidden" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe
                    src={`https://player.vimeo.com/video/${item.vimeoId}?h=0&badge=0`}
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
              <a href="https://vimeo.com/backyardstudioofficial" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid var(--gold)", padding: "0.6rem 1.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                Vimeo
              </a>
              <a href="https://www.youtube.com/@backyardstudioofficial" target="_blank" rel="noopener noreferrer" style={{ background: "rgba(212,175,55,0.1)", color: "var(--gold)", border: "1px solid var(--gold)", padding: "0.6rem 1.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", fontWeight: 600 }}>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
