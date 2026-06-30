import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜企业视频制作2026：品牌影片、宣传片与客户证言",
  description:
    "迪拜专业企业视频制作AED 8,000起——企业品牌片、产品宣传视频、客户证言、招募影片。Backyard Studio为迪拜100+品牌提供服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog/qiye-shipin-dubai-2026",
    languages: {
      zh: "https://www.backyardstudioofficial.com/zh/blog/qiye-shipin-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/corporate-video-production-dubai-2026",
    },
  },
  openGraph: {
    locale: "zh_CN",
    title: "迪拜企业视频制作2026 | Backyard Studio",
    description: "品牌片、客户证言、产品视频——迪拜企业级制作AED 8,000起。",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CorporateVideoZhPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "迪拜企业宣传片制作费用是多少？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "迪拜企业视频制作费用从AED 8,000起（2-3分钟基础企业介绍片）。包含多个访谈、B-Roll素材和动态字幕的完整品牌影片通常在AED 15,000至AED 35,000之间。大型广告级制作视具体需求定制报价。",
        },
      },
      {
        "@type": "Question",
        name: "企业视频制作通常需要多少时间？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "从预制作到最终交付，标准企业影片通常需要2-4周。这包括：创意策划与脚本（3-5天）、拍摄（1-2天）、粗剪（3-5天）、客户修改（2-3轮）、精修与音乐混音（2-3天）。如有急件需求，最快可10天内完成。",
        },
      },
      {
        "@type": "Question",
        name: "你们能提供中英双语的企业视频吗？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "可以。我们为需要覆盖中文和英文受众的企业提供双语版本服务，包括：双语字幕、中英文版本独立剪辑、配音或同期声版本。适合针对华人商业社区或内地市场的企业传播需求。",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "迪拜企业视频制作2026：品牌影片、宣传片与客户证言",
    author: { "@type": "Person", name: "Syed Mazhar Zaidi", jobTitle: "Director — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-06",
    dateModified: "2026-06-06",
    inLanguage: "zh",
    url: "https://www.backyardstudioofficial.com/zh/blog/qiye-shipin-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "'Noto Sans SC', 'Inter', sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.9" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/zh" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>首页</a> / <a href="/zh/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>博客</a> / <span>企业视频制作</span>
        </nav>
        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>企业视频</span>
        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.35, marginBottom: "1rem" }}>
          迪拜企业视频制作2026<br /><span style={{ color: "var(--gold)" }}>品牌影片 · 客户证言 · 产品宣传视频</span>
        </h1>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Syed Mazhar Zaidi</span><span>2026年6月</span><span>8分钟阅读</span>
        </div>
        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1400&q=80" alt="迪拜企业视频拍摄制作现场" style={{ width: "100%", height: "360px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem" }} />
        <p style={{ fontSize: "1.05rem", marginBottom: "1.5rem" }}>研究显示，企业官网首页放置品牌影片后，平均停留时间延长88%，转化率提升80%。在迪拜这个国际化商业中心，一支高质量企业视频不仅是品牌资产，更是赢得客户信任的第一步。</p>
        <p style={{ marginBottom: "2.5rem" }}>Backyard Studio已为迪拜100+企业提供视频制作服务，涵盖科技公司、房地产开发商、零售品牌、医疗机构和教育机构。导演Syed Mazhar Zaidi带领全职团队，从脚本到精修全程负责，确保每个项目准时交付。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>我们制作的企业视频类型</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", marginBottom: "2.5rem" }}>
          {[
            { type: "企业品牌片", desc: "讲述公司故事、价值观与使命的主影片" },
            { type: "客户证言视频", desc: "真实客户访谈，增强可信度与销售转化" },
            { type: "产品宣传视频", desc: "产品功能展示与使用场景演示" },
            { type: "企业文化与招募", desc: "吸引顶尖人才的雇主品牌内容" },
            { type: "活动与峰会记录", desc: "会议、颁奖典礼、产品发布会纪录片" },
            { type: "年报与ESG影片", desc: "面向投资者和合规报告的专业影片" },
          ].map(({ type, desc }) => (
            <div key={type} style={{ padding: "1.25rem", background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "4px" }}>
              <div style={{ fontWeight: 700, color: "var(--gold)", marginBottom: "0.4rem", fontSize: "0.9rem" }}>{type}</div>
              <div style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.825rem", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>中英双语企业视频服务</h2>
        <p style={{ marginBottom: "2.5rem" }}>我们为需要覆盖中文和英文受众的企业提供双语版本，包括双语字幕、独立版本剪辑和配音服务。适合希望进入内地市场或服务迪拜华人商业社区的企业。</p>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.2rem", marginTop: "3rem" }}>2026年企业视频制作收费参考</h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "基础企业介绍片", detail: "2-3分钟 / 1天拍摄 / 字幕 / 背景音乐", price: "AED 8,000 – 12,000" },
            { pkg: "标准品牌影片", detail: "3-5分钟 / 2天拍摄 / 访谈+B-Roll / 动效", price: "AED 15,000 – 25,000" },
            { pkg: "客户证言系列", detail: "3-5条证言视频 / 统一风格 / 剪辑套餐", price: "AED 12,000 – 20,000" },
            { pkg: "旗舰品牌影片", detail: "5+分钟 / 多天拍摄 / 动画 / 导演级制作", price: "AED 35,000+" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1rem", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <span style={{ fontWeight: 700, color: "var(--cream)" }}>{pkg}</span>
              <span style={{ color: "rgba(245,240,225,0.6)", fontSize: "0.875rem" }}>{detail}</span>
              <span style={{ color: "var(--gold)", fontWeight: 600, textAlign: "right" }}>{price}</span>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>常见问题</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3rem" }}>
          {[
            { q: "迪拜企业宣传片制作费用多少？", a: "从AED 8,000起（基础企业介绍片）。完整品牌影片通常在AED 15,000至AED 35,000之间。" },
            { q: "制作周期多长？", a: "标准企业影片2-4周完成。急件最快10天交付。" },
            { q: "可以做中英双语版本吗？", a: "可以。我们提供双语字幕、独立版本剪辑和配音服务。" },
          ].map(({ q, a }) => (
            <details key={q} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", paddingBottom: "1rem" }}>
              <summary style={{ fontWeight: 600, cursor: "pointer", color: "var(--cream)", listStyle: "none", display: "flex", justifyContent: "space-between" }}>
                {q}<span style={{ color: "var(--gold)" }}>+</span>
              </summary>
              <p style={{ marginTop: "0.75rem", color: "rgba(245,240,225,0.7)", lineHeight: "1.8" }}>{a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: "linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(10,10,10,0.5) 100%)", border: "1px solid rgba(212,175,55,0.25)", borderRadius: "4px", padding: "2.5rem", textAlign: "center" }}>
          <h3 style={{ color: "var(--gold)", fontWeight: 800, fontSize: "1.3rem", marginBottom: "0.75rem" }}>开始您的企业影片项目</h3>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1.5rem" }}>联系我们获取免费创意策划方案和报价。</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/971585882685" style={{ background: "var(--gold)", color: "#000", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 700 }}>WhatsApp咨询</a>
            <a href="/zh/pricing" style={{ border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", borderRadius: "2px", textDecoration: "none", fontWeight: 600 }}>查看价格</a>
          </div>
        </div>
      </article>
    
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
              {
                "@type": "Question",
                "name": "Backyard Studio Official 提供哪些核心服务？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们提供迪拜及阿联酋全套影视制作服务，包括：企业宣传片与品牌视频（起价 AED 15,000）、婚礼摄影与摄像（起价 AED 3,500）、活动与颁奖典礼拍摄（起价 AED 2,000）、无人机航拍GCAA持证（起价 AED 2,500）、社交媒体内容制作（起价 AED 3,500）以及产品与商业摄影（起价 AED 1,500）。我们提供从创意策划到后期制作的一站式全流程服务。"
                }
              },
              {
                "@type": "Question",
                "name": "如何用中文联系你们？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们提供完整的中文服务。最快联系方式：WhatsApp 发送信息至 +971 58 588 2685（通常2小时内回复）；电子邮件：info@backyardstudioofficial.com；官网联系表单（中文填写亦可）。我们会用中文回复您的所有询问并提供免费报价。"
                }
              },
              {
                "@type": "Question",
                "name": "你们的工作时间是什么？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们的客户服务时间为周一至周六，上午9时至晚上8时（阿联酋时间，UTC+4）。拍摄服务可根据客户需求安排，包括周五、周六及节假日。WhatsApp 消息在工作时间外也会在次日上午优先回复。"
                }
              },
              {
                "@type": "Question",
                "name": "付款方式有哪些？",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "我们接受多种付款方式：银行转账（AED/USD/CNY均可）、信用卡（Visa/Mastercard）以及现金（阿联酋迪拉姆）。标准付款条款为：签署合约时支付50%定金（不可退款但可转让至新日期），拍摄当日支付余款。对于长期合作客户，我们提供更灵活的付款安排。"
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
                Backyard Studio Official 提供哪些核心服务？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们提供迪拜及阿联酋全套影视制作服务，包括：企业宣传片与品牌视频（起价 AED 15,000）、婚礼摄影与摄像（起价 AED 3,500）、活动与颁奖典礼拍摄（起价 AED 2,000）、无人机航拍GCAA持证（起价 AED 2,500）、社交媒体内容制作（起价 AED 3,500）以及产品与商业摄影（起价 AED 1,500）。我们提供从创意策划到后期制作的一站式全流程服务。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                如何用中文联系你们？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们提供完整的中文服务。最快联系方式：WhatsApp 发送信息至 +971 58 588 2685（通常2小时内回复）；电子邮件：info@backyardstudioofficial.com；官网联系表单（中文填写亦可）。我们会用中文回复您的所有询问并提供免费报价。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                你们的工作时间是什么？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们的客户服务时间为周一至周六，上午9时至晚上8时（阿联酋时间，UTC+4）。拍摄服务可根据客户需求安排，包括周五、周六及节假日。WhatsApp 消息在工作时间外也会在次日上午优先回复。
              </p>
            </div>
            <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                付款方式有哪些？
              </h3>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "0.9rem", margin: 0 }}>
                我们接受多种付款方式：银行转账（AED/USD/CNY均可）、信用卡（Visa/Mastercard）以及现金（阿联酋迪拉姆）。标准付款条款为：签署合约时支付50%定金（不可退款但可转让至新日期），拍摄当日支付余款。对于长期合作客户，我们提供更灵活的付款安排。
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