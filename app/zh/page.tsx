import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜最佳视频制作公司 | Backyard Studio Official",
  description: "迪拜及阿联酋领先创意制作公司——企业宣传片、婚礼摄影、房产拍摄、无人机航拍。完成超过2,400个项目。获GCAA无人机商业许可证。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh" },
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

export default function ZhHomePage() {
  return (
    <>
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
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", textAlign: "center", color: "var(--cream)", fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 800, marginBottom: "0.75rem" }}>
            我们的服务
          </h2>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", textAlign: "center", color: "rgba(245,240,225,0.5)", marginBottom: "3rem" }}>专业影视制作，覆盖迪拜及阿联酋全境</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SERVICES.map((s, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/zh/services" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", textDecoration: "none", fontSize: "0.9rem" }}>查看全部服务 →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#111", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, marginBottom: "1rem" }}>
          准备好开始您的项目了吗？
        </h2>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
          联系我们获取免费报价。我们可以用中文沟通，让您的迪拜项目更顺畅。
        </p>
        <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>
          立即咨询
        </a>
      </section>
    </>
  );
}
