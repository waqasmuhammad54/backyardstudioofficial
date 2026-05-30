import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | 迪拜影视制作公司 Backyard Studio Official",
  description: "了解Backyard Studio Official——迪拜领先的创意制作公司。2019年由Fahad Iqbal Butt和Syed Mazhar Zaidi创立，已完成超过2,400个项目。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/about" },
};

export default function ZhAboutPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          关于 Backyard Studio Official
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "1rem" }}>
          迪拜，阿联酋 — 自2019年
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>我们的故事</h2>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "1rem", marginBottom: "1.5rem" }}>
            Backyard Studio Official于2019年在巴基斯坦拉合尔创立，创始人为<strong style={{ color: "var(--cream)" }}>Fahad Iqbal Butt</strong>——
            一位毕业于国立艺术学院（影视专业）的电影导演与时尚摄影师。2023年，我们正式进驻迪拜，迅速成为阿联酋最受认可的创意制作公司之一。
          </p>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "1rem", marginBottom: "1.5rem" }}>
            后期制作团队由<strong style={{ color: "var(--cream)" }}>Syed Mazhar Zaidi</strong>领衔——
            拥有超过20年从业经验的电影导演与纪录片摄影师，GC大学大众传播硕士，已完成逾50部MV、广告及纪录片。
            他的IMDB档案：{" "}
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>nm14029494</a>。
          </p>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "1rem" }}>
            迄今为止，我们已在阿联酋七个酋长国完成超过<strong style={{ color: "var(--cream)" }}>2,400个项目</strong>。
            我们持有<strong style={{ color: "var(--cream)" }}>GCAA商业无人机拍摄执照</strong>，所有项目均严格遵循国际电影制作标准。
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "2rem", textAlign: "center" }}>
            核心优势
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🎬", title: "2,400+ 完成项目", desc: "覆盖阿联酋全境七个酋长国" },
              { icon: "✈️", title: "GCAA无人机执照", desc: "合法商业航拍，迪拜及全国通行" },
              { icon: "🏆", title: "好莱坞级后期", desc: "DaVinci Resolve调色 · ARRI Cinema级设备" },
              { icon: "🌏", title: "多语言服务", desc: "中文 · 英文 · 阿拉伯语 · 俄语" },
            ].map((item) => (
              <div key={item.title} style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, marginBottom: "0.5rem", fontSize: "1rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#0a0a0a", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>
          准备好与我们合作了吗？
        </h2>
        <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "1rem" }}>
          立即联系我们
        </a>
      </section>
    </>
  );
}
