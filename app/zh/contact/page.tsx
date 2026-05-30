import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 迪拜摄影摄像 Backyard Studio Official",
  description: "联系迪拜Backyard Studio Official。电话：+971 58 588 2685。微信咨询，中文服务，2小时内回复报价。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/contact" },
};

export default function ZhContactPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          联系我们
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          中文服务，2小时内回复。欢迎通过WhatsApp或电话直接联系我们。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { icon: "📞", label: "电话 / WhatsApp", value: "+971 58 588 2685", href: "tel:+971585882685" },
              { icon: "✉️", label: "电子邮箱", value: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
              { icon: "📍", label: "所在地", value: "迪拜，阿联酋", href: null },
              { icon: "⏰", label: "工作时间", value: "周一至周六 · 上午9时 – 晚上8时", href: null },
            ].map((item) => (
              <div key={item.label} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", marginBottom: "0.25rem" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "1rem", fontWeight: 600, textDecoration: "none" }}>{item.value}</a>
                ) : (
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "1rem", fontWeight: 600, margin: 0 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "2rem" }}>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "1.5rem" }}>
              发送询价信息
            </h2>
            <form action="https://formsubmit.co/info@backyardstudioofficial.com" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <input type="hidden" name="_subject" value="新询价 — 中文网站" />
              <input type="hidden" name="_next" value="https://www.backyardstudioofficial.com/zh/contact" />
              <input
                type="text" name="name" placeholder="您的姓名" required
                style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "2px", padding: "0.75rem 1rem", color: "var(--cream)", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", outline: "none" }}
              />
              <input
                type="email" name="email" placeholder="电子邮箱" required
                style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "2px", padding: "0.75rem 1rem", color: "var(--cream)", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", outline: "none" }}
              />
              <input
                type="tel" name="phone" placeholder="电话 / WhatsApp号码"
                style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "2px", padding: "0.75rem 1rem", color: "var(--cream)", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", outline: "none" }}
              />
              <select name="service" style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "2px", padding: "0.75rem 1rem", color: "var(--cream)", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", outline: "none" }}>
                <option value="">选择服务类型</option>
                <option value="wedding">婚礼摄影摄像</option>
                <option value="corporate">企业视频制作</option>
                <option value="event">活动及发布会</option>
                <option value="drone">无人机航拍</option>
                <option value="social">社交媒体内容</option>
                <option value="product">产品及电商摄影</option>
                <option value="other">其他</option>
              </select>
              <textarea
                name="message" placeholder="请描述您的项目需求（日期、地点、预算等）" rows={4} required
                style={{ background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "2px", padding: "0.75rem 1rem", color: "var(--cream)", fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.9rem", outline: "none", resize: "vertical" }}
              />
              <button type="submit" style={{ background: "var(--gold)", color: "#000", border: "none", padding: "0.9rem", borderRadius: "2px", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "1rem", cursor: "pointer" }}>
                提交询价
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
