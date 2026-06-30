import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客户评价 | 4.9星口碑 — 迪拜 Backyard Studio Official",
  description: "来自迪拜及阿联酋客户的真实评价。Backyard Studio Official已服务超过2,400个项目，平均评分4.9/5星，口碑卓著。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "客户评价 | 4.9星 — Backyard Studio Official 迪拜",
    description: "超过127条真实评价，平均4.9/5星。来自迪拜房产商、品牌、新人的反馈。",
    url: "https://www.backyardstudioofficial.com/zh/testimonials",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "客户评价 — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "客户评价 — Backyard Studio Official 迪拜",
    description: "超过127条真实评价，平均4.9/5星。",
    images: ["/og-image.jpg"],
  },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "客户评价", "item": "https://www.backyardstudioofficial.com/zh/testimonials" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.backyardstudioofficial.com/zh/#localbusiness",
        "name": "Backyard Studio Official",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "review": TESTIMONIALS.map((t) => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": t.name },
          "reviewBody": t.text,
          "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": "5" },
        })),
      }) }} />
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
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "客户对Backyard Studio的评价怎样？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们在Google、Instagram和行业平台上收到超过127条评价，平均评分4.9/5星。我们的中文客户特别提到沟通便利和理解需求准确是选择我们的主要原因。大多数客户在第一个项目完成后会再次委托我们进行后续拍摄。"
                }
              },
              {
                "@type": "Question",
                "name": "你们服务过哪些类型的客户？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的客户涵盖各类规模的企业和个人：大型跨国公司（财富500强企业的迪拜分部）、政府及半政府机构、中小型企业、酒店及餐厅、时尚和奢侈品牌、房地产开发商、新人夫妇、个人内容创作者以及华人社区企业。我们在迪拜的中资企业客户中口碑良好。"
                }
              },
              {
                "@type": "Question",
                "name": "首次合作如何开始？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "通过 WhatsApp（+971 58 588 2685）发送您的项目需求，包括：拍摄类型（视频/摄影/两者兼顾）、计划拍摄日期、预算范围、拍摄地点及任何特殊要求。我们将在2小时内回复并安排免费创意咨询电话，通过中文或英文与您详细讨论项目需求。"
                }
              },
              {
                "@type": "Question",
                "name": "如何保证最终效果符合预期？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的制作流程包含明确的创意确认节点：项目启动前提供详细的创意方案和拍摄计划供客户审核；拍摄完成后在交付前提供初剪预览；所有项目包含两轮免费修改。我们的目标是让每位客户对最终交付成果100%满意。"
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
                客户对Backyard Studio的评价怎样？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们在Google、Instagram和行业平台上收到超过127条评价，平均评分4.9/5星。我们的中文客户特别提到沟通便利和理解需求准确是选择我们的主要原因。大多数客户在第一个项目完成后会再次委托我们进行后续拍摄。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们服务过哪些类型的客户？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的客户涵盖各类规模的企业和个人：大型跨国公司（财富500强企业的迪拜分部）、政府及半政府机构、中小型企业、酒店及餐厅、时尚和奢侈品牌、房地产开发商、新人夫妇、个人内容创作者以及华人社区企业。我们在迪拜的中资企业客户中口碑良好。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                首次合作如何开始？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                通过 WhatsApp（+971 58 588 2685）发送您的项目需求，包括：拍摄类型（视频/摄影/两者兼顾）、计划拍摄日期、预算范围、拍摄地点及任何特殊要求。我们将在2小时内回复并安排免费创意咨询电话，通过中文或英文与您详细讨论项目需求。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                如何保证最终效果符合预期？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的制作流程包含明确的创意确认节点：项目启动前提供详细的创意方案和拍摄计划供客户审核；拍摄完成后在交付前提供初剪预览；所有项目包含两轮免费修改。我们的目标是让每位客户对最终交付成果100%满意。
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