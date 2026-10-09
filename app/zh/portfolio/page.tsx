import type { Metadata } from "next";
import { alternatesFor } from "@/lib/hreflang";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

const portfolioSchema = {
  ...buildPortfolioItemListSchema(),
  name: "Backyard Studio Official — 作品集",
  description: "Backyard Studio Official精选作品集。企业视频、婚礼摄影、无人机航拍、时尚大片——超过500个迪拜及阿联酋项目。",
  url: "https://www.backyardstudioofficial.com/zh/portfolio",
  inLanguage: "zh",
};

export const metadata: Metadata = {
  title: "作品集 | 迪拜摄影摄像作品精选",
  description: "Backyard Studio Official精选作品集。企业视频、婚礼摄影、无人机航拍、时尚大片——超过2,400个迪拜及阿联酋项目。",
  alternates: alternatesFor("/portfolio", "zh"),
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

      {/* Substantive Chinese prose. Added 9 Oct 2026: this page measured 385
          CJK characters, the only genuinely thin Chinese page on the site once
          the counts were redone properly (word counts under-measure Chinese
          badly — it has no spaces). Written as content for Chinese-speaking
          clients deciding whether to brief us, not as translated marketing. */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "820px", margin: "0 auto", fontFamily: "'Noto Sans SC', sans-serif" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3.5vw,2rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "2rem" }}>
            怎么看一家制作公司的作品集
          </h2>
          <div style={{ color: "rgba(245,240,225,0.72)", lineHeight: 2, fontSize: "0.95rem", display: "flex", flexDirection: "column" as const, gap: "1.4rem" }}>
            <p>
              <strong style={{ color: "var(--gold)" }}>先看一致性，再看单张最好的。</strong>
              任何一家公司都能拿出几张漂亮的照片，那通常代表运气或者那一天的条件特别好。真正有参考价值的是：同一个项目里的几十张图，风格、色温、曝光是不是统一。商业项目交付的是一整套素材，不是一张封面——如果一组里只有三张能用，那套素材实际上是不合格的。
            </p>
            <p>
              <strong style={{ color: "var(--gold)" }}>看有没有难拍的场景。</strong>
              户外日落、棚内布光，这些条件可控，拍好不难。值得注意的是混合光源的室内活动、暗环境下的舞台、以及快速移动的人物——这些场景骗不了人，出来的结果直接反映团队的技术水平和现场判断。
            </p>
            <p>
              <strong style={{ color: "var(--gold)" }}>问清楚谁在现场。</strong>
              很多公司用来提案的作品，和实际派去拍摄的团队不是同一批人。我们的做法是在报价阶段就写明当天到场的人员配置：几位摄影、几位摄像、是否配灯光助理和现场导演。这一条写在合同里，而不是口头承诺。
            </p>
            <p>
              <strong style={{ color: "var(--gold)" }}>关于这个页面。</strong>
              以下展示的是部分项目精选。完整案例、同类项目的全套交付素材、以及具体的拍摄方案，可以在沟通时按行业提供。如果您正在比较几家供应商，建议直接要求对方提供一个完整项目的全部成片，而不是精选集——这是最快能看出差距的方式。
            </p>
          </div>
        </div>
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
    </>
  );
}
