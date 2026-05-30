import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客户评价 | 迪拜 Backyard Studio Official",
  description: "来自迪拜及阿联酋客户的真实评价。Backyard Studio Official已服务超过2,400个项目，口碑卓著。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/testimonials" },
};

const TESTIMONIALS = [
  {
    name: "Ahmed Al Mansouri",
    role: "房地产开发商，迪拜",
    text: "Backyard Studio为我们的豪华住宅项目制作了令人惊叹的视觉内容。交付迅速，品质超出预期。强烈推荐。",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "婚礼新娘，迪拜",
    text: "我的婚礼视频让全家人感动落泪。Fahad团队极其专业，整个过程非常顺畅。48小时收到集锦，太棒了！",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    role: "品牌总监，全球零售品牌",
    text: "在迪拜我们合作了多家制作公司，Backyard Studio是其中最具创意、效率最高的团队。企业形象片一次过关。",
    rating: 5,
  },
  {
    name: "Fatima Al Rashid",
    role: "活动策划，迪拜",
    text: "我们的年度颁奖晚宴交给Backyard Studio拍摄，从多机位录制到当晚精剪集锦，完美执行，客户反响极佳。",
    rating: 5,
  },
  {
    name: "Liu Wei",
    role: "企业主，迪拜中资企业",
    text: "能用中文沟通非常方便，理解需求准确到位。拍摄的企业宣传片用于融资路演，效果很好。会继续合作。",
    rating: 5,
  },
  {
    name: "Rania Khalid",
    role: "时尚品牌创始人",
    text: "时装大片质量媲美国际顶级杂志。Fahad对光线的掌控令人叹服，每张图片都是艺术品。",
    rating: 5,
  },
];

export default function ZhTestimonialsPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          客户评价
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          超过2,400个项目，来自真实客户的声音。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {TESTIMONIALS.map((t) => (
            <div key={t.name} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                {"★".repeat(t.rating).split("").map((star, i) => (
                  <span key={i} style={{ color: "var(--gold)", fontSize: "1rem" }}>{star}</span>
                ))}
              </div>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.8)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", margin: 0 }}>{t.name}</p>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", margin: 0 }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.25rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          成为我们的下一位满意客户
        </h2>
        <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700 }}>
          立即预约
        </a>
      </section>
    </>
  );
}
