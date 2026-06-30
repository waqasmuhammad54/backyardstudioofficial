import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "联系我们 | 迪拜摄影摄像 Backyard Studio Official — +971 58 588 2685",
  description: "联系迪拜Backyard Studio Official。电话/WhatsApp：+971 58 588 2685。中文服务，2小时内回复报价。覆盖阿联酋全境。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/contact",
    languages: {
      "en": "https://www.backyardstudioofficial.com/contact",
      "ar": "https://www.backyardstudioofficial.com/ar/contact",
      "ru": "https://www.backyardstudioofficial.com/ru/contact",
      "zh": "https://www.backyardstudioofficial.com/zh/contact",
      "x-default": "https://www.backyardstudioofficial.com/contact",
    },
  },
  openGraph: {
    title: "联系 Backyard Studio Official — 迪拜影视制作",
    description: "中文服务，2小时内回复。WhatsApp：+971 58 588 2685。",
    url: "https://www.backyardstudioofficial.com/zh/contact",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "联系 Backyard Studio Official — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "联系 Backyard Studio Official — 迪拜",
    description: "中文服务。WhatsApp +971 58 588 2685。2小时内回复。",
    images: ["/og-image.jpg"],
  },
};

export default function ZhContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "联系我们", "item": "https://www.backyardstudioofficial.com/zh/contact" },
        ],
      }) }} />
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
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "如何预约拍摄服务？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "最快的方式是通过 WhatsApp 发送消息至 +971 58 588 2685，我们通常在2小时内回复。您也可以通过上方的联系表单或电子邮件 info@backyardstudioofficial.com 与我们联系。我们提供完整的中文服务支持。"
                }
              },
              {
                "@type": "Question",
                "name": "你们的服务区域覆盖哪里？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们覆盖阿联酋全部七个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。对于迪拜以外的拍摄，我们通常不收取额外的交通费，具体请在报价时确认。我们也接受沙特、科威特、卡塔尔等海湾国家的项目委托。"
                }
              },
              {
                "@type": "Question",
                "name": "报价需要多长时间？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "发送项目需求后，我们通常在2个工作小时内提供初步报价。详细项目报价（包含完整范围说明、拍摄日程和交付清单）在24小时内提供。所有报价均免费，无任何附加义务。"
                }
              },
              {
                "@type": "Question",
                "name": "是否有最低预算要求？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的摄影服务起价为 AED 1,200（2小时人像或证件照拍摄）。视频制作最低项目预算为 AED 3,500（单日社交媒体视频拍摄）。婚礼摄影起价 AED 3,500。企业视频制作起价 AED 15,000。具体报价根据项目规模、拍摄时间、人员配置和交付要求而定。"
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
                如何预约拍摄服务？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                最快的方式是通过 WhatsApp 发送消息至 +971 58 588 2685，我们通常在2小时内回复。您也可以通过上方的联系表单或电子邮件 info@backyardstudioofficial.com 与我们联系。我们提供完整的中文服务支持。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们的服务区域覆盖哪里？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们覆盖阿联酋全部七个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。对于迪拜以外的拍摄，我们通常不收取额外的交通费，具体请在报价时确认。我们也接受沙特、科威特、卡塔尔等海湾国家的项目委托。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                报价需要多长时间？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                发送项目需求后，我们通常在2个工作小时内提供初步报价。详细项目报价（包含完整范围说明、拍摄日程和交付清单）在24小时内提供。所有报价均免费，无任何附加义务。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                是否有最低预算要求？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的摄影服务起价为 AED 1,200（2小时人像或证件照拍摄）。视频制作最低项目预算为 AED 3,500（单日社交媒体视频拍摄）。婚礼摄影起价 AED 3,500。企业视频制作起价 AED 15,000。具体报价根据项目规模、拍摄时间、人员配置和交付要求而定。
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