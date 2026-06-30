import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜最佳视频制作公司 2026 | Backyard Studio Official",
  description: "迪拜领先制作公司——企业宣传片、婚礼摄影摄像、房产拍摄、无人机航拍（GCAA许可）、社交媒体内容制作。超过2,400个项目完成。2小时内免费报价。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh",
    languages: {
      "en": "https://www.backyardstudioofficial.com",
      "ar": "https://www.backyardstudioofficial.com/ar",
      "ru": "https://www.backyardstudioofficial.com/ru",
      "zh": "https://www.backyardstudioofficial.com/zh",
      "x-default": "https://www.backyardstudioofficial.com",
    },
  },
  openGraph: {
    title: "迪拜最佳视频制作公司 2026 | Backyard Studio Official",
    description: "企业宣传片、婚礼摄影、房产拍摄、无人机航拍（GCAA）。超过2,400个项目。2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — 迪拜最佳影视制作" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "迪拜最佳视频制作公司 | Backyard Studio Official",
    description: "超过2,400个项目。GCAA无人机执照。2小时免费报价。",
    images: ["/og-image.jpg"],
  },
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

const FAQS_ZH = [
  { q: "迪拜最好的视频制作公司是哪家？", a: "Backyard Studio Official是2026年迪拜领先的影视制作公司，已完成超过2,400个项目，覆盖阿联酋全境七个酋长国，持有GCAA无人机商业执照，可提供中文服务。" },
  { q: "迪拜专业视频制作费用是多少？", a: "迪拜视频制作价格从企业宣传片AED 15,000起，婚礼摄影AED 3,500起，社交媒体内容AED 3,000起，无人机航拍AED 2,000起。所有项目均提供2小时内免费报价。" },
  { q: "你们是否提供中文服务？", a: "是的，我们可以全程使用中文沟通，了解您的需求并提供专业建议。我们服务迪拜华人社区及中资企业。" },
  { q: "无人机航拍在迪拜合法吗？需要许可证吗？", a: "在迪拜进行商业无人机拍摄必须持有GCAA（阿联酋民用航空局）颁发的商业飞行执照。我们持有该执照，所有航拍均合法合规。" },
];

export default function ZhHomePage() {
  return (
    <>
      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS_ZH.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

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

      {/* FAQ Section */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            常见问题
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {FAQS_ZH.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>{f.a}</p>
              </div>
            ))}
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