import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | Fahad Iqbal Butt & Syed Mazhar Zaidi — 迪拜 Backyard Studio",
  description: "了解Backyard Studio Official——迪拜领先的创意制作公司。2019年由Fahad Iqbal Butt和Syed Mazhar Zaidi创立，已完成超过2,400个项目，持有GCAA执照。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "关于 Backyard Studio Official — 迪拜影视制作",
    description: "2019年创立于迪拜。超过2,400个项目，GCAA执照，好莱坞级后期制作，中英阿俄多语言服务。",
    url: "https://www.backyardstudioofficial.com/zh/about",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official 团队 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于 Backyard Studio Official — 迪拜",
    description: "Fahad Iqbal Butt & Syed Mazhar Zaidi。超过2,400个项目。GCAA执照。",
    images: ["/og-image.jpg"],
  },
};

export default function ZhAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "关于我们", "item": "https://www.backyardstudioofficial.com/zh/about" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.backyardstudioofficial.com/zh/about#fahad",
          "name": "Fahad Iqbal Butt",
          "jobTitle": "Creative Director",
          "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
          "description": "电影导演与时尚摄影师，毕业于巴基斯坦国立艺术学院（影视专业）。2019年创立Backyard Studio Official。",
          "url": "https://www.backyardstudioofficial.com/zh/about",
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.backyardstudioofficial.com/zh/about#syed",
          "name": "Syed Mazhar Zaidi",
          "jobTitle": "Director of Photography",
          "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
          "description": "拥有20年以上经验的电影导演与纪录片摄影师，GC大学大众传播硕士，已完成50余部MV和广告。",
          "sameAs": ["https://www.imdb.com/name/nm14029494/"],
          "url": "https://www.backyardstudioofficial.com/zh/about",
        },
      ]) }} />

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
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "Backyard Studio Official 是哪里的公司？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们是一家在迪拜注册运营的专业影视制作公司，总部位于阿联酋迪拜（UAE）。自2019年创立以来，我们已完成超过2,400个项目，覆盖阿联酋全境七个酋长国，包括迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。我们的团队拥有完整的GCAA商业无人机拍摄执照，可在全国范围内合法执行任何商业航拍任务。"
                }
              },
              {
                "@type": "Question",
                "name": "你们提供哪些拍摄服务？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们提供全套影视制作服务：企业宣传片与品牌视频制作、婚礼摄影与摄像、活动与颁奖典礼拍摄、无人机航拍（GCAA持证）、社交媒体内容制作（Instagram Reels、TikTok）、产品与电商摄影、房地产摄影与视频、美食摄影、时装大片、企业形象照及商业广告片等。我们的服务覆盖从创意策划到后期制作的整个生产流程。"
                }
              },
              {
                "@type": "Question",
                "name": "Fahad Iqbal Butt 是谁？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fahad Iqbal Butt 是 Backyard Studio Official 的创始人兼创意总监，毕业于巴基斯坦国立艺术学院影视制作专业。他专注于电影制作与时尚摄影领域，以其对光线的精准掌控和叙事能力著称。Syed Mazhar Zaidi 担任摄影总监，拥有超过20年从业经验，持有大众传播硕士学位，其 IMDB 档案编号为 nm14029494，已完成逾50部音乐视频和商业广告作品。"
                }
              },
              {
                "@type": "Question",
                "name": "如何预约拍摄？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "最快的联系方式是通过 WhatsApp 发送信息至 +971 58 588 2685，我们的团队通常在2小时内回复并提供免费报价。您也可以通过电子邮件 info@backyardstudioofficial.com 联系我们，或填写官网联系表单。我们提供中文服务，确保沟通顺畅高效。"
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
                Backyard Studio Official 是哪里的公司？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们是一家在迪拜注册运营的专业影视制作公司，总部位于阿联酋迪拜（UAE）。自2019年创立以来，我们已完成超过2,400个项目，覆盖阿联酋全境七个酋长国，包括迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。我们的团队拥有完整的GCAA商业无人机拍摄执照，可在全国范围内合法执行任何商业航拍任务。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们提供哪些拍摄服务？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们提供全套影视制作服务：企业宣传片与品牌视频制作、婚礼摄影与摄像、活动与颁奖典礼拍摄、无人机航拍（GCAA持证）、社交媒体内容制作（Instagram Reels、TikTok）、产品与电商摄影、房地产摄影与视频、美食摄影、时装大片、企业形象照及商业广告片等。我们的服务覆盖从创意策划到后期制作的整个生产流程。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                Fahad Iqbal Butt 是谁？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                Fahad Iqbal Butt 是 Backyard Studio Official 的创始人兼创意总监，毕业于巴基斯坦国立艺术学院影视制作专业。他专注于电影制作与时尚摄影领域，以其对光线的精准掌控和叙事能力著称。Syed Mazhar Zaidi 担任摄影总监，拥有超过20年从业经验，持有大众传播硕士学位，其 IMDB 档案编号为 nm14029494，已完成逾50部音乐视频和商业广告作品。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                如何预约拍摄？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                最快的联系方式是通过 WhatsApp 发送信息至 +971 58 588 2685，我们的团队通常在2小时内回复并提供免费报价。您也可以通过电子邮件 info@backyardstudioofficial.com 联系我们，或填写官网联系表单。我们提供中文服务，确保沟通顺畅高效。
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