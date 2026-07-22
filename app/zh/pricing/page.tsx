import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜制作价格2026 | Backyard Studio Official — 套餐与报价",
  description: "迪拜制作价格2026：婚礼摄影从7,500迪拉姆起，DVC广告从15,000迪拉姆起，活动拍摄从3,000迪拉姆起，社交媒体内容从2,500迪拉姆起。2小时内免费报价。",
  keywords: ["迪拜婚礼摄影价格", "阿联酋视频制作费用", "迪拜活动拍摄价格", "迪拜社交媒体内容价格", "迪拜制作套餐2026"],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "迪拜制作价格2026 | Backyard Studio Official",
    description: "透明定价：婚礼从7,500 AED起，DVC从15,000 AED起，活动从3,000 AED起。2小时内免费报价。",
    url: "https://www.backyardstudioofficial.com/zh/pricing",
    siteName: "Backyard Studio Official",
    locale: "zh_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "迪拜制作价格 — Backyard Studio Official" }],
  },
};

const PACKAGES_ZH = [
  {
    category: "婚礼摄影与摄像",
    anchor: "wedding",
    intro: "迪拜最受欢迎的婚礼制作套餐——从专业摄影到高端多日制作均有覆盖。每个套餐当日交付RAW原始素材。",
    plans: [
      { name: "基础版", price: "7,500 AED", label: "经济摄影", desc: "适合小型仪式和公证婚礼的专业摄影摄像服务。", includes: ["1名专业摄影师", "1名摄像师", "3小时拍摄", "30–40张精修照片", "在线Drive链接（照片）+ RAW原始素材", "完整活动剪辑视频（1920×1080）", "10–15个工作日内交付", "RAW素材当日交付"], featured: false },
      { name: "银版", price: "15,500 AED", label: "半天拍摄", desc: "适合民政婚礼、尼卡仪式或小型庆典。", includes: ["2名专业摄影师", "2名摄像师", "3小时拍摄", "70–100张精修照片", "完整活动剪辑视频（1920×1080）", "精华片段剪辑", "10–15个工作日内交付", "RAW素材当日交付"], featured: false },
      { name: "金版", price: "22,500 AED", label: "全天婚礼", desc: "最受欢迎的套餐——照片、视频、精华、Reels及情侣写真全包。", includes: ["2名专业摄影师", "2名摄像师", "3小时拍摄", "1本相册（设计+印刷+装订+粘贴+相册礼盒）", "完整活动剪辑视频（1920×1080）", "精华片段剪辑", "3条精剪Reels", "情侣写真", "故事叙述影片+采访（纪录片风格1920×1080）", "情侣歌曲视频+写真（按客户需求提供道具）", "10–15个工作日内交付", "RAW素材当日交付"], featured: true },
      { name: "铂金版", price: "65,000 AED", label: "高端多日制作", desc: "终极婚礼制作——3名摄影师、3名摄像师、2本相册、纪录片影片。", includes: ["3名专业摄影师（1名人像、1名相册、1名抓拍）", "3名摄像师（1名主机位、1名抓拍）", "1部纪录片风格访谈视频", "3–5小时拍摄", "2本相册（设计+印刷+装订+粘贴+相册礼盒）", "3–5条精剪Reels", "USB软拷贝", "交付时间按活动拍摄时长而定"], featured: false },
    ],
  },
  {
    category: "社交媒体内容创作",
    anchor: "social-media",
    intro: "面向阿联酋品牌的月度内容套餐与单次拍摄服务。每次拍摄均包含图文视频内容。",
    plans: [
      { name: "入门版", price: "2,500 AED", label: "半天拍摄", desc: "单一场地、单一风格——适合产品发布或营销焕新。", includes: ["4小时制作", "3–4条精剪Reels/TikTok", "20–30张精修照片", "故事与信息流格式", "48小时内交付"], featured: false },
      { name: "成长版", price: "5,500 AED", label: "全天内容日", desc: "最受品牌欢迎——一天拍摄即可获得一个月内容。", includes: ["8小时制作", "6–8条精剪Reels/TikTok", "50–80张精修照片", "多场地多风格拍摄", "故事、信息流及广告格式", "话题标签与文案策略", "48小时内交付"], featured: true },
      { name: "月度套餐", price: "8,000+ AED/月", label: "持续内容输出", desc: "每月2个拍摄日——让您的品牌永远不缺优质内容。", includes: ["每月2个拍摄日", "每月12–16条Reels/TikTok", "每月100+张精修照片", "内容日历规划", "热门音频素材筛选", "各平台专属剪辑", "优先24小时交付"], featured: false },
    ],
  },
  {
    category: "DVC数字广告与电视广告",
    anchor: "dvcs",
    intro: "为阿联酋品牌提供广播级商业广告制作服务。从创意简报到交付的一站式创意服务。",
    plans: [
      { name: "数字版", price: "15,000 AED", label: "社交媒体DVC", desc: "适用于Meta、TikTok和YouTube付费推广的高质量商业广告。", includes: ["创意概念与脚本", "1个拍摄日", "专业演员", "30秒主广告片", "15秒剪辑版", "9:16+16:9+1:1格式交付", "2轮修改"], featured: false },
      { name: "广播版", price: "45,000 AED", label: "电视+数字广告", desc: "面向阿联酋电视台播出及数字营销活动的全制作商业广告。", includes: ["完整创意开发", "2–3个拍摄日", "专业选角", "外景勘景", "30秒TVC+剪辑版", "播出规格交付", "阿拉伯语+英语双版本", "3轮修改"], featured: true },
      { name: "高端版", price: "150,000+ AED", label: "高端品牌影片", desc: "适用于奢侈品、政府或大型企业客户的电影级品牌营销活动。", includes: ["阿联酋全境多日制作", "完整制作设计与艺术指导", "大型演员阵容及摄制组", "视觉特效与动态图形", "原创音乐创作", "全平台格式", "国际交付标准"], featured: false },
    ],
  },
  {
    category: "活动拍摄",
    anchor: "events",
    intro: "覆盖阿联酋全部酋长国的专业活动摄影与摄像服务。当日交付社交媒体素材。",
    plans: [
      { name: "基础版", price: "3,000 AED", label: "半天活动", desc: "单机位拍摄最长4小时，含精剪精华片段。", includes: ["1名摄影师或摄像师", "4小时拍摄", "150+张精修照片 或", "3分钟精华视频", "48小时内交付"], featured: false },
      { name: "专业版", price: "7,500 AED", label: "全天活动", desc: "多机位图文视频全覆盖——完整的活动记录套餐。", includes: ["1名摄影师+1名摄像师", "8小时拍摄", "300+张精修照片", "5分钟精华片段", "当日社交媒体短视频", "Reels/TikTok剪辑版", "48小时完整交付"], featured: true },
      { name: "制作版", price: "20,000+ AED", label: "大型活动", desc: "适用于会议、颁奖典礼、产品发布会及大型活动的多组制作。", includes: ["全套多机位摄制组", "可提供多日拍摄", "直播制作", "新闻摄影套餐", "当日社交媒体素材", "完整精剪影片+照片", "广播级交付规格"], featured: false },
    ],
  },
];

const FAQS_ZH = [
  { q: "迪拜婚礼摄影师收费多少？", a: "迪拜婚礼摄影摄像价格从Backyard Studio Official基础套餐的7,500 AED（1名摄影师、1名摄像师、3小时拍摄、精修照片+完整活动视频）到铂金高端套餐的65,000 AED（3名摄影师、3名摄像师、2本相册、纪录片影片、3–5条Reels）不等。我们最受欢迎的金版套餐售价22,500 AED，包含2名摄影师、2名摄像师、1本相册、精华片段、3条Reels、情侣写真及当日RAW素材交付。" },
  { q: "在迪拜和阿联酋拍摄视频要多少钱？", a: "迪拜视频制作费用因类型差异较大：社交媒体Reels每拍摄日从2,500 AED起；活动拍摄从3,000 AED起；企业宣传片从15,000 AED起；DVC广告制作从数字版15,000 AED到高端电视广告150,000+ AED。任何规模项目均可在2小时内获得免费报价。" },
  { q: "阿联酋DVC广告制作费用是多少？", a: "阿联酋数字视频广告（DVC）费用从精简数字商业广告的15,000 AED到全制作电视级品牌影片的150,000+ AED不等。主要成本因素包括：拍摄天数、演员阵容规模、场地复杂程度、后期制作需求（特效、动画）以及所需语言版本数量。" },
  { q: "迪拜社交媒体内容创作费用是多少？", a: "迪拜社交媒体拍摄从半天的2,500 AED起，可产出3–4条Reels及20–30张照片。全天内容日5,500 AED，可交付Instagram、TikTok和YouTube Shorts一个月的完整内容。月度套餐从每月8,000 AED起，包含2个拍摄日和100+可交付内容。" },
  { q: "你们是否为套餐以外的项目提供定制报价？", a: "是的——我们大多数项目都根据您的具体需求进行定制报价。上述套餐仅供参考。请通过WhatsApp或联系表格发送您的项目简报，我们将在2小时内提供详细的定制报价。" },
];

export default function ZhPricingPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS_ZH.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HEADER */}
      <section style={{ background: "#111", padding: "6rem 2rem 4rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>透明定价</p>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2.5rem, 8vw, 5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem" }}>价格与套餐</h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", maxWidth: "600px", margin: "0 auto 2rem", lineHeight: 2 }}>
          各类制作类型的参考套餐。所有价格以阿联酋迪拉姆（AED）计算，增值税另计。2小时内提供定制报价。
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>WhatsApp咨询报价</a>
          <a href="/zh/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>在线询价</a>
        </div>
      </section>

      {/* PACKAGES */}
      {PACKAGES_ZH.map((pkg, pi) => (
        <section key={pkg.anchor} id={pkg.anchor} style={{ padding: "4rem 2rem", background: pi % 2 === 0 ? "#0a0a0a" : "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.6)", fontSize: "0.75rem", letterSpacing: "0.2em", marginBottom: "0.5rem" }}>0{pi + 1}</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem" }}>{pkg.category}</h2>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem", maxWidth: "700px", lineHeight: 1.9 }}>{pkg.intro}</p>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, minmax(${pkg.plans.length >= 4 ? "230px" : "260px"}, 1fr))`, gap: "1.25rem" }}>
              {pkg.plans.map((plan) => (
                <div key={plan.name} style={{ position: "relative", padding: "2rem", border: plan.featured ? "1px solid var(--gold)" : "1px solid rgba(255,255,255,0.08)", borderRadius: "4px", background: "#1a1a1a" }}>
                  {plan.featured && (
                    <div style={{ position: "absolute", top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", fontSize: "0.65rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, padding: "3px 12px", borderRadius: "2px", whiteSpace: "nowrap" }}>最受欢迎</div>
                  )}
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>{plan.label}</p>
                  <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "1.4rem", fontWeight: 900, marginBottom: "0.25rem" }}>{plan.name}</h3>
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{plan.price}</p>
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>{plan.desc}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {plan.includes.map((item, ii) => (
                      <li key={ii} style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.78rem", display: "flex", gap: "0.5rem", alignItems: "flex-start", lineHeight: 1.6 }}>
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>✓</span>{item}
                      </li>
                    ))}
                  </ul>
                  <a href={"/zh/contact"} style={{ display: "block", textAlign: "center", padding: "0.7rem 1rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, fontSize: "0.8rem", borderRadius: "2px", textDecoration: "none", background: plan.featured ? "var(--gold)" : "transparent", color: plan.featured ? "#000" : "rgba(245,240,225,0.5)", border: plan.featured ? "none" : "1px solid rgba(255,255,255,0.12)" }}>获取报价</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* OTHER SERVICES */}
      <section style={{ padding: "4rem 2rem", background: "#111", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "0.75rem" }}>其他服务 — 起步价</h2>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.9rem", marginBottom: "2.5rem" }}>所有项目均可在2小时内获得定制报价。</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1rem" }}>
            {[
              { service: "美食摄影", from: "2,500 AED" },
              { service: "产品拍摄", from: "1,800 AED" },
              { service: "企业形象照", from: "1,500 AED" },
              { service: "房地产摄影", from: "2,000 AED" },
              { service: "客户证言视频", from: "3,500 AED" },
              { service: "播客制作", from: "4,000 AED" },
              { service: "YouTube内容制作", from: "3,500 AED" },
              { service: "汽车摄影", from: "3,000 AED" },
              { service: "时尚大片", from: "5,000 AED" },
              { service: "酒店摄影", from: "8,000 AED" },
              { service: "汽车广告", from: "25,000 AED" },
              { service: "短视频Reels（每拍摄日）", from: "2,500 AED" },
            ].map((s, i) => (
              <div key={i} style={{ padding: "1.25rem", background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.78rem", marginBottom: "0.4rem" }}>{s.service}</p>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem" }}>{s.from}</p>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.25)", fontSize: "0.65rem", marginTop: "0.25rem" }}>起步价</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2.5rem" }}>定价常见问题</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {FAQS_ZH.map((faq, i) => (
              <div key={i} style={{ padding: "1.5rem", background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px" }}>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.75rem" }}>{faq.q}</p>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.9, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#111", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>✦ 准备开始了吗？</p>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem", lineHeight: 1.3 }}>2小时内获取<br /><span style={{ color: "var(--gold)" }}>您的专属报价</span></h2>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.95rem", marginBottom: "2.5rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 2 }}>告诉我们您的项目、档期与预算范围。我们每周7天响应每一份询价，承诺2小时内回复。</p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>立即WhatsApp咨询</a>
          <a href="/zh/contact" style={{ border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>填写联系表格</a>
        </div>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(255,255,255,0.2)", fontSize: "0.72rem", marginTop: "2rem" }}>所有价格以AED计算。适用情况下收取增值税。价格以2026年为准。</p>
      </section>
    </>
  );
}
