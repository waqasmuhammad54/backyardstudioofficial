import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 | 迪拜摄影摄像干货 Backyard Studio Official",
  description: "迪拜及阿联酋摄影摄像行业资讯、拍摄攻略、价格指南。中文专业内容，助您了解迪拜创意制作行业。",
  alternates: { canonical: "https://www.backyardstudioofficial.com/zh/blog" },
};

const BLOG_POSTS_ZH = [
  {
    slug: "hunli-sheying-dubai-2026",
    title: "2026年迪拜婚礼摄影完全指南：价格、地点与注意事项",
    excerpt: "在迪拜举办婚礼？本文为您详解婚礼摄影摄像费用（AED 3,500起）、最佳拍摄地点及如何选择专业团队。",
    date: "2026年5月",
    readTime: "8分钟",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业视频制作：如何用影片提升品牌价值",
    excerpt: "一支专业企业影片能带来多大回报？我们分析了迪拜市场上100+企业视频案例，总结出最有效的制作策略。",
    date: "2026年4月",
    readTime: "6分钟",
  },
  {
    slug: "wurenji-hangpai-dubai-2026",
    title: "迪拜无人机航拍：GCAA法规、费用与最佳拍摄地点",
    excerpt: "在阿联酋进行无人机拍摄必须了解GCAA法规。本文为您梳理合法航拍要求、常见违规风险及专业航拍费用。",
    date: "2026年3月",
    readTime: "7分钟",
  },
  {
    slug: "shejiao-meiti-neirong-dubai-2026",
    title: "迪拜品牌社交媒体内容策略：Instagram与TikTok实战指南",
    excerpt: "针对迪拜市场的社交媒体内容策略，包括最佳发布时间、内容形式选择及本地化技巧，助您账号快速增长。",
    date: "2026年2月",
    readTime: "9分钟",
  },
];

export default function ZhBlogPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          博客
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.8 }}>
          迪拜摄影摄像行业深度内容，助您做出更明智的选择。
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "2rem" }}>
          {BLOG_POSTS_ZH.map((post) => (
            <article key={post.slug} style={{ background: "#111", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem" }}>
                <span style={{ color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", fontFamily: "'Noto Sans SC', sans-serif" }}>{post.date}</span>
                <span style={{ color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", fontFamily: "'Noto Sans SC', sans-serif" }}>· {post.readTime}阅读</span>
              </div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.25rem", marginBottom: "0.75rem", lineHeight: 1.5 }}>
                {post.title}
              </h2>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                {post.excerpt}
              </p>
              <a href={`/zh/blog/${post.slug}`} style={{ color: "var(--gold)", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>
                阅读全文 →
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
