import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 — Backyard Studio Official | 法哈德·伊克巴尔·巴特与赛义德·马扎尔·扎伊迪 — 迪拜",
  description: "了解Backyard Studio Official——迪拜领先的创意制作公司。2019年由法哈德·伊克巴尔·巴特与赛义德·马扎尔·扎伊迪创立。2,400+项目，GCAA无人机执照，20年+经验。",
  keywords: ["法哈德伊克巴尔巴特", "赛义德马扎尔扎伊迪", "迪拜制作公司", "Backyard Studio团队", "工作室故事", "迪拜最佳摄影工作室"],
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
    title: "关于我们 — Backyard Studio Official | 迪拜",
    description: "迪拜领先创意制作公司。2019年创立，2,400+项目，GCAA执照，团队经验20年+。",
    url: "https://www.backyardstudioofficial.com/zh/about",
    siteName: "Backyard Studio Official",
    locale: "zh_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official团队 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于我们 — Backyard Studio Official — 迪拜",
    description: "2019年由法哈德·伊克巴尔·巴特创立。2,400+项目。GCAA执照。",
    images: ["/og-image.jpg"],
  },
};

const TEAM_ZH = [
  { name: "法哈德·伊克巴尔·巴特", role: "创始人兼首席执行官", photo: "/images/team/fahad.webp", bio: "电影导演与创意企业家，毕业于拉合尔国立艺术学院电影电视专业，持有时装设计学士学位。2019年创立工作室，将情感、工艺与电影叙事融为一体。" },
  { name: "赛义德·马扎尔·扎伊迪", role: "联合创始人兼创意总监", photo: "/images/team/mazhar.webp", bio: "电影导演与纪录片摄影师，20年+经验。记录了900+印巴分治幸存者故事及84座锡克教圣地。担任50+音乐视频摄影指导。与40+国际品牌合作。", link: { label: "查看IMDB档案", href: "https://www.imdb.com/name/nm14029494/" } },
  { name: "沙巴娜·巴希尔", role: "艺术总监", photo: "/images/team/shabana.webp", bio: "主导所有制作项目的视觉形象与创意方向，确保每一帧画面的一致性与精致感。" },
  { name: "贝赫拉姆·沙希德", role: "销售总监", photo: "/images/team/behram.webp", bio: "领导阿联酋市场销售战略与客户开发，与品牌和代理机构建立长期合作伙伴关系。" },
  { name: "瓦卡斯·穆罕默德", role: "战略总监", photo: "/images/team/waqas.webp", bio: "规划工作室增长路径——从市场定位、数字战略到支撑2,400+项目交付的运营框架。" },
  { name: "里姆", role: "业务发展经理", photo: "/images/team/reem.webp", bio: "主导阿联酋市场客户合作与业务拓展，将品牌与工作室的电影级制作能力深度连接。" },
  { name: "拉贾", role: "业务发展经理", photo: "/images/team/rajaa.webp", bio: "开拓新商业机会，建立战略关系，助力阿联酋七大酋长国的品牌获得世界级制作服务。" },
];

const MILESTONES_ZH = [
  { year: "2019", event: "在拉合尔创立——音乐视频、时装影片与电视广告" },
  { year: "2021", event: "在巴基斯坦全境拓展企业与品牌内容业务" },
  { year: "2023", event: "启动阿联酋业务——迪拜总部正式运营" },
  { year: "2024", event: "获得GCAA商业无人机航拍执照，覆盖阿联酋全境" },
  { year: "2025", event: "在阿联酋七大酋长国完成2,400+项目交付" },
  { year: "2026", event: "迈向国际市场——欧洲与亚洲" },
];

export default function ZhAboutPage() {
  const personSchemaFahad = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fahad Iqbal Butt",
    "jobTitle": "创始人兼首席执行官",
    "url": "https://www.backyardstudioofficial.com/zh/about",
    "image": "https://www.backyardstudioofficial.com/images/team/fahad.webp",
    "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
    "alumniOf": [{ "@type": "EducationalOrganization", "name": "National College of Arts, Lahore" }],
  };
  const personSchemaMazhar = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Mazhar Zaidi",
    "jobTitle": "联合创始人兼创意总监",
    "url": "https://www.backyardstudioofficial.com/zh/about",
    "image": "https://www.backyardstudioofficial.com/images/team/mazhar.webp",
    "sameAs": ["https://www.imdb.com/name/nm14029494/"],
    "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaFahad) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaMazhar) }} />

      {/* HERO */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.15em", marginBottom: "1.5rem" }}>我们的故事</p>
          <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.2, marginBottom: "2rem" }}>
            以<span style={{ color: "var(--gold)" }}>愿景</span>筑基。<br />以匠心驱动。
          </h1>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "1.05rem", lineHeight: 2, maxWidth: "680px" }}>
            Backyard Studio Official由导演兼时装摄影师法哈德·伊克巴尔·巴特于2019年创立，从拉合尔一间创意工作室成长为迪拜最具影响力的制作公司之一，服务阿联酋七大酋长国的品牌、艺人与企业。
          </p>
        </div>
      </section>

      {/* FAHAD SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>创始人</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.2 }}>法哈德·伊克巴尔·巴特</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                法哈德·伊克巴尔·巴特是一位创意企业家、电影导演与时装摄影师，在时装与电影制作领域均受过系统专业训练。他在UK Excel监督下获得时装设计学士学位，并在巴基斯坦最具影响力的创意学府——拉合尔国立艺术学院（NCA）完成了电影与电视专业培训。
              </p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                法哈德于2019年在拉合尔创立了Backyard Studio，目标明确：以创意、情感与现代叙事手法打造有影响力的视觉内容。工作室涵盖音乐视频、商业广告、短片、企业内容、婚礼摄影与品牌拍摄等多元业务。
              </p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                除导演工作外，法哈德还与时装杂志摄影师及业界创意人士广泛合作，积累了丰富的时装摄影经验。如今，他为阿联酋的品牌、企业、艺人与创作者持续呈现电影级视觉作品。
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>联系我们</a>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>WhatsApp法哈德</a>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/fahad.webp" alt="法哈德·伊克巴尔·巴特 — Backyard Studio Official迪拜创始人兼CEO" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.1rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>法哈德·伊克巴尔·巴特</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.15em", marginTop: "0.25rem" }}>创始人兼首席执行官</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAZHAR SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/mazhar.webp" alt="赛义德·马扎尔·扎伊迪 — Backyard Studio迪拜联合创始人" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.1rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>赛义德·马扎尔·扎伊迪</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginTop: "0.25rem" }}>联合创始人兼创意总监</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>联合创始人</p>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.2 }}>赛义德·马扎尔·扎伊迪</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                赛义德·马扎尔·扎伊迪是一位电影导演、纪录片摄影师与创意制片人，在巴基斯坦与海湾地区拥有逾20年从业经验。他毕业于拉合尔国立艺术学院（NCA），并在GC大学获得大众传播硕士学位——巴基斯坦最具声望的学术机构之一。
              </p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                其标志性纪录片作品记录了900余名印巴分治幸存者的亲历故事，并走访了巴基斯坦境内84座锡克教圣地（Gurdwara）——这是南亚电影史上最深刻的文化纪录项目之一。
              </p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 2, fontSize: "0.9rem" }}>
                马扎尔担任过50+支音乐视频与商业广告的摄影指导、剪辑师与调色师，并与40余家国内外品牌深度合作。其IMDB认证作品横跨商业广告、短片、音乐视频与品牌纪录片。
              </p>
            </div>
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noreferrer" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", marginTop: "2rem" }}>查看IMDB档案 →</a>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>发展历程</p>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>关键里程碑</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {MILESTONES_ZH.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--gold)", minWidth: "56px", lineHeight: 1 }}>{m.year}</div>
                <div style={{ flex: 1, paddingTop: "0.2rem" }}>
                  <div style={{ width: "100%", height: "1px", background: "rgba(212,175,55,0.15)", marginBottom: "0.75rem" }} />
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.8, margin: 0, fontSize: "0.9rem" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>团队</p>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>认识我们的团队</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {TEAM_ZH.map((member) => (
              <div key={member.name} style={{ border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", position: "relative" }}>
                  <img src={member.photo} alt={member.name + " — " + member.role + " — Backyard Studio迪拜"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "0.65rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{member.role}</p>
                  <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.78rem", lineHeight: 1.8, margin: 0 }}>{member.bio}</p>
                  {member.link && (
                    <a href={member.link.href} target="_blank" rel="noreferrer" style={{ display: "inline-block", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.75rem", textDecoration: "none" }}>{member.link.label} →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "3.5rem 2rem", background: "#111", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2,400+", label: "已完成项目" },
            { num: "7", label: "覆盖酋长国" },
            { num: "6年+", label: "专业经验" },
            { num: "2小时", label: "响应保障" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", marginTop: "0.5rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a", textAlign: "center" }}>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.8rem", letterSpacing: "0.2em", marginBottom: "1rem" }}>✦ 携手共创</p>
        <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.3 }}>今天就启动您的<br /><span style={{ color: "var(--gold)" }}>创意项目</span></h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/zh/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>获取免费报价</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>WhatsApp法哈德</a>
        </div>
      </section>
    </>
  );
}
