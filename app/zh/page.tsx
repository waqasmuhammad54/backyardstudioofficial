import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "迪拜最佳视频制作公司 2026 | Backyard Studio Official",
 description: "迪拜领先制作公司——企业宣传片、婚礼摄影摄像、房产拍摄、无人机航拍（飞行许可）、社交媒体内容制作。超过2,400个项目完成。2小时内免费报价。",
  keywords: ["迪拜视频制作公司", "迪拜摄影公司", "迪拜婚礼摄影", "迪拜企业宣传片", "迪拜无人机航拍", "阿联酋影视制作", "迪拜社交媒体内容", "迪拜中文服务制作公司"],
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
 description: "企业宣传片、婚礼摄影、房产拍摄、无人机航拍。超过2,400个项目。2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official — 迪拜最佳影视制作" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "迪拜最佳视频制作公司 | Backyard Studio Official",
 description: "超过2,400个项目。无人机航拍。2小时免费报价。",
    images: ["/og-image.jpg"],
  },
};

const SERVICES_ZH = [
  { icon: "🎬", title: "企业宣传片", desc: "从AED 15,000起——企业形象片、产品视频、投资人路演视频，专业展现您的品牌实力。" },
  { icon: "💍", title: "婚礼摄影摄像", desc: "电影级婚礼摄像与专业婚礼摄影，记录您最珍贵的时刻。48小时内交付精华剪辑。" },
  { icon: "🏙️", title: "房产拍摄", desc: "豪华别墅、公寓及开发商项目的专业视频与照片拍摄，助您更快成交。" },
 { icon: "🚁", title: "无人机航拍", desc: "航拍在商业飞行许可下执行，可在迪拜及阿联酋全境合法作业。" },
  { icon: "📱", title: "社交媒体内容", desc: "小红书、Instagram、TikTok、YouTube专业内容制作，算法友好，互动率高。" },
  { icon: "📺", title: "广告片制作", desc: "电视广告、品牌片、汽车广告，专业级别一站式制作，从创意到交付。" },
];

const STATS_ZH = [
  { num: "2,400+", label: "完成项目" },
  { num: "7", label: "覆盖全部酋长国" },
 { num: "", label: "无人机商业执照" },
  { num: "5★", label: "客户满意度" },
];

const PROCESS_ZH = [
  { num: "01", title: "免费咨询", desc: "用中文与您沟通，了解您的项目需求和创意愿景。我们在2小时内回复并提供专业建议。" },
  { num: "02", title: "创意策划", desc: "制定详细的制作方案，包括创意概念、时间计划和透明的价格报价，无隐藏费用。" },
  { num: "03", title: "拍摄准备", desc: "选定拍摄地点、组建团队、准备设备，撰写脚本。拍摄日前一切就绪。" },
  { num: "04", title: "拍摄执行", desc: "以电影级标准执行创意方案，专业团队准时到达，设备齐全。" },
  { num: "05", title: "后期制作与交付", desc: "专业剪辑、调色、音频处理，按时交付多种格式文件，适用于各大平台。" },
];

const UAE_CITIES_ZH = [
  { city: "迪拜", en: "Dubai", icon: "🏙️", note: "总部所在地" },
  { city: "阿布扎比", en: "Abu Dhabi", icon: "🕌", note: "48小时内可达" },
  { city: "沙迦", en: "Sharjah", icon: "🎨", note: "48小时内可达" },
  { city: "阿治曼", en: "Ajman", icon: "🌊", note: "48小时内可达" },
  { city: "哈伊马角", en: "Ras Al Khaimah", icon: "⛰️", note: "48小时内可达" },
  { city: "富查伊拉", en: "Fujairah", icon: "🌊", note: "48小时内可达" },
  { city: "乌姆盖万", en: "Umm Al Quwain", icon: "⚓", note: "48小时内可达" },
];

const TESTIMONIALS_ZH = [
  {
    name: "张伟 & 李梅",
    role: "婚礼客户 — 迪拜棕榈岛",
    text: "我们在迪拜的婚礼由Backyard Studio全程记录，拍摄效果超乎想象。团队可以用中文沟通，完全理解我们的需求。48小时内就收到了精华剪辑，朋友们都称赞不已！",
    stars: 5,
  },
  {
    name: "陈总",
    role: "总经理，华联国际贸易 DMCC",
    text: "我们委托他们制作公司宣传片用于融资路演，最终成品专业且大气，完全符合我们的品牌定位。整个过程沟通顺畅，准时交付，非常值得推荐给在迪拜的中资企业。",
    stars: 5,
  },
  {
    name: "刘芳",
    role: "小红书博主 / 生活方式内容创作者",
    text: "和Backyard Studio合作制作了一套迪拜旅拍内容，风格和质感都超出预期。他们非常了解中文社交媒体的用户审美，拍出来的东西非常适合小红书和抖音。强烈推荐！",
    stars: 5,
  },
];

const BLOG_POSTS_ZH = [
  {
    slug: "hunli-sheying-dubai-2026",
    title: "迪拜婚礼摄影完全指南2026：如何选择专业摄影团队",
    date: "2026年5月",
    tag: "婚礼摄影",
  },
  {
    slug: "wurenji-hangpai-dubai-2026",
 title: "迪拜无人机航拍：飞行许可证与拍摄限制完全指南",
    date: "2026年4月",
    tag: "无人机航拍",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业宣传片制作全流程：从创意到交付",
    date: "2026年3月",
    tag: "企业视频",
  },
];

const FAQS_ZH = [
  {
    q: "迪拜最好的视频制作公司是哪家？",
 a: "Backyard Studio Official是2026年迪拜领先的影视制作公司，已完成超过2,400个项目，覆盖阿联酋全境七个酋长国，航拍均在商业飞行执照下执行，全程提供中文服务。",
  },
  {
    q: "迪拜专业视频制作费用是多少？",
    a: "迪拜视频制作价格：企业宣传片从AED 15,000起；婚礼摄影摄像从AED 3,500起；社交媒体内容从AED 3,000起；无人机航拍从AED 2,000起。所有项目提供2小时内免费报价。",
  },
  {
    q: "你们是否提供中文服务？",
    a: "是的，我们可以全程使用中文沟通，了解您的需求并提供专业建议。我们服务迪拜华人社区及中资企业，熟悉中国客户的审美偏好和内容需求。",
  },
  {
    q: "在迪拜商业无人机航拍是否需要许可证？",
 a: "在迪拜进行商业无人机拍摄必须持有（阿联酋民用航空局）颁发的商业飞行执照。所有航拍均在合法许可下依法合规执行，并会为特定区域申请必要的飞行许可。",
  },
  {
    q: "你们覆盖阿联酋哪些地区？",
    a: "我们覆盖阿联酋全部七个酋长国：迪拜（总部）、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。紧急项目可在48小时内赶赴任何酋长国。",
  },
  {
    q: "婚礼拍摄套餐包含哪些内容？",
    a: "标准婚礼套餐包括：专业摄影师和摄像师各一名、仪式及宴会全程拍摄、48小时内交付3-5分钟精华剪辑、3周内交付完整婚礼电影（20-40分钟）、高清婚礼照片图库。可选增项：无人机航拍、第二摄像师、Instagram Reels短片。",
  },
  {
    q: "后期制作交货时间是多久？",
    a: "根据项目类型：婚礼精华剪辑48小时内；完整婚礼视频2-3周；企业宣传片5-10个工作日（含修改）；社交媒体内容3-5个工作日。需要加急交付的项目可单独协商，加收加急费用。",
  },
  {
    q: "可以拍摄适合中国社交媒体平台的内容吗？",
    a: "可以。我们了解小红书、抖音、微信等中国社交媒体平台的内容风格和算法偏好，能够制作符合中国用户审美的视频和照片内容。特别适合在迪拜的中国品牌和内容创作者。",
  },
];

export default function ZhHomePage() {
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

      {/* HERO */}
      <section style={{ minHeight: "90vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "4rem 2rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(212,175,55,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: "900px" }}>
          <div style={{ display: "inline-block", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", borderRadius: "2px", padding: "0.35rem 1rem", marginBottom: "1.5rem" }}>
            <span style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.8rem", letterSpacing: "0.1em", fontWeight: 500 }}>迪拜，阿联酋 — 成立于2019年</span>
          </div>
          <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1.5rem", lineHeight: 1.3 }}>
            迪拜专业视频制作<br />
            <span style={{ color: "var(--gold)" }}>让您的品牌焕发光彩</span>
          </h1>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", maxWidth: "660px", margin: "0 auto 2.5rem", fontSize: "1.05rem", lineHeight: 1.9 }}>
            迪拜华人社区信赖的影视制作团队。企业宣传片、婚礼摄影、房产拍摄、无人机航拍——为您提供一站式专业影视制作服务，全程中文沟通。
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>免费咨询报价</a>
            <a href="/zh/portfolio" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>查看作品集</a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#111", padding: "2.5rem 2rem", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {STATS_ZH.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "2rem", fontWeight: 900 }}>{s.num}</div>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.85rem", marginTop: "0.25rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOWREEL */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 精选视频作品</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, color: "var(--cream)", margin: 0 }}>观看我们的作品</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {[
              { id: "1194038771", label: "婚前写真与情侣拍摄" },
              { id: "1194038751", label: "婚礼摄影摄像" },
              { id: "1194038719", label: "时装与创意拍摄" },
            ].map((v) => (
              <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                  <iframe src={"https://player.vimeo.com/video/" + v.id + "?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1"} style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }} allow="autoplay; fullscreen; picture-in-picture" title={v.label} loading="lazy" />
                </div>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", fontWeight: 800, marginBottom: "0.75rem" }}>我们的服务</h2>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)" }}>专业影视制作，覆盖迪拜及阿联酋全境</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {SERVICES_ZH.map((s) => (
              <div key={s.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.9rem", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <a href="/zh/services" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>查看全部服务 →</a>
          </div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 精选作品</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, color: "var(--cream)", margin: 0 }}>作品集精选</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
            {[
              { src: "/images/events/event-01.webp", alt: "迪拜活动摄影" },
              { src: "/images/creative/creative-04.webp", alt: "迪拜时装拍摄" },
              { src: "/images/products/product-03.webp", alt: "迪拜产品摄影" },
              { src: "/images/wedding/wedding-01.webp", alt: "迪拜婚礼摄影" },
              { src: "/images/events/event-04.webp", alt: "迪拜企业活动" },
              { src: "/images/creative/creative-13.webp", alt: "迪拜创意内容制作" },
            ].map((img) => (
              <a key={img.src} href="/zh/portfolio" style={{ display: "block", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", border: "1px solid rgba(212,175,55,0.08)" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/zh/portfolio" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.8rem 2rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>查看全部作品 →</a>
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section style={{ background: "#0a0a0a" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: "3px" }}>
          {[
            { src: "/images/events/event-01.webp", alt: "迪拜活动" },
            { src: "/images/creative/creative-04.webp", alt: "时装创意" },
            { src: "/images/wedding/wedding-01.webp", alt: "迪拜婚礼" },
            { src: "/images/products/product-03.webp", alt: "产品摄影" },
            { src: "/images/events/event-03.webp", alt: "企业活动" },
            { src: "/images/creative/creative-13.webp", alt: "创意制作" },
            { src: "/images/wedding/wedding-16.webp", alt: "婚礼摄影" },
            { src: "/images/creative/creative-05.webp", alt: "时尚摄影" },
          ].map((img) => (
            <div key={img.src} style={{ aspectRatio: "1", overflow: "hidden" }}>
              <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>✦ 关于我们</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1.25rem" }}>迪拜领先的创意制作公司</h2>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.9, marginBottom: "1rem", fontSize: "0.93rem" }}>
              Backyard Studio Official 于2019年由<strong style={{ color: "var(--cream)" }}>Fahad Iqbal Butt</strong>创立，他曾就读于拉合尔国立艺术学院影视专业。今天，我们已成为迪拜最受认可的创意制作公司之一。
            </p>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.9, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
 后期制作团队由<strong style={{ color: "var(--cream)" }}>Syed Mazhar Zaidi</strong>领导，拥有20年以上电影导演和纪录片拍摄经验。我们航拍均在商业飞行执照下执行，覆盖阿联酋全部七个酋长国。
            </p>
            <a href="/zh/about" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>了解我们的故事 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            {[
              { label: "婚礼摄影", val: "500+" },
              { label: "企业宣传片", val: "300+" },
              { label: "活动拍摄", val: "400+" },
              { label: "广告片", val: "200+" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(212,175,55,0.05)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.25rem", textAlign: "center" }}>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.75rem", fontWeight: 900, color: "var(--gold)" }}>{item.val}</div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.8rem", marginTop: "0.25rem" }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 我们的工作流程</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--cream)" }}>从创意到交付</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {PROCESS_ZH.map((step) => (
              <div key={step.num} style={{ padding: "2rem", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "rgba(212,175,55,0.15)", lineHeight: 1, marginBottom: "0.75rem" }}>{step.num}</div>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{step.title}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.88rem", lineHeight: 1.8, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UAE COVERAGE */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 服务覆盖范围</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--cream)" }}>覆盖阿联酋全境</h2>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", marginTop: "0.75rem" }}>我们的机动团队可在48小时内抵达阿联酋任何酋长国</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
            {UAE_CITIES_ZH.map((c) => (
              <div key={c.city} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{c.icon}</div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.05rem" }}>{c.city}</div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", marginTop: "0.25rem" }}>{c.en}</div>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.5rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 客户评价</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--cream)" }}>客户怎么说</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {TESTIMONIALS_ZH.map((t) => (
              <div key={t.name} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
                <div style={{ marginBottom: "1rem" }}>
                  {"★".repeat(t.stars).split("").map((s, i) => (
                    <span key={i} style={{ color: "var(--gold)", fontSize: "1rem" }}>{s}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.8)", fontSize: "0.93rem", lineHeight: 1.8, marginBottom: "1.25rem", fontStyle: "italic" }}>&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", marginTop: "0.2rem" }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>✦ 专业博客</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--cream)" }}>最新文章与专业指南</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2rem" }}>
            {BLOG_POSTS_ZH.map((post) => (
              <a key={post.slug} href={"/zh/blog/" + post.slug} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.75rem" }}>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.75rem", fontWeight: 600, marginBottom: "0.75rem", background: "rgba(212,175,55,0.08)", padding: "0.2rem 0.6rem", borderRadius: "2px", display: "inline-block" }}>{post.tag}</div>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.95rem", lineHeight: 1.55, marginBottom: "0.75rem" }}>{post.title}</h3>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.78rem" }}>{post.date}</div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="/zh/blog" style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", textDecoration: "none", fontWeight: 600, borderBottom: "1px solid var(--gold)", paddingBottom: "2px" }}>查看全部文章 →</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 800, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>常见问题</h2>
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
      <section style={{ padding: "4rem 2rem", background: "linear-gradient(135deg, #1a1408 0%, #0a0a0a 100%)", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.2)" }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>✦ 开始您的项目</p>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 800, marginBottom: "1rem" }}>准备好开始了吗？</h2>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.8 }}>
          联系我们获取免费报价。我们全程提供中文服务，让您的迪拜项目更顺畅。2小时内必有回复。
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>立即咨询</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>WhatsApp联系</a>
        </div>
      </section>
    </>
  );
}
