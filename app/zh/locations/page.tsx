import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "阿联酋拍摄地点 | 覆盖全部7个酋长国 — Backyard Studio",
  description: "覆盖阿联酋全部7个酋长国的视频和摄影服务。迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。无出行费用。2小时免费报价。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/locations",
    languages: {
      "en": "https://www.backyardstudioofficial.com/locations",
      "ar": "https://www.backyardstudioofficial.com/ar/locations",
      "ru": "https://www.backyardstudioofficial.com/ru/locations",
      "zh": "https://www.backyardstudioofficial.com/zh/locations",
      "x-default": "https://www.backyardstudioofficial.com/locations",
    },
  },
  openGraph: {
    title: "阿联酋全境视频制作 | Backyard Studio Official",
    description: "迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万专业视频摄影服务。无出行费用。2小时免费报价。",
    url: "https://www.backyardstudioofficial.com/zh/locations",
    locale: "zh_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "阿联酋视频制作 — Backyard Studio Official" }],
  },
};

const LOCATIONS_FAQS = [
  { q: "Backyard Studio 覆盖阿联酋全部7个酋长国吗？", a: "是的。Backyard Studio Official 在阿联酋全部7个酋长国提供专业视频和摄影服务：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。我们可在24至48小时内将摄制团队部署至任何酋长国。" },
  { q: "迪拜以外的拍摄需要额外收取出行费用吗？", a: "不需要。Backyard Studio Official 在阿联酋境内拍摄不收取出行费用。无论拍摄地点在迪拜、阿布扎比还是哈伊马角，交通费用均已包含在制作报价中。" },
 { q: "在阿联酋全境提供哪些类型的制作服务？", a: "我们在所有酋长国提供完整的制作服务：活动摄像、婚礼摄影、DVC数字视频广告、Instagram Reels和TikTok内容、企业影片、无人机航拍、客户证言视频和广告拍摄。" },
];

const EMIRATES = [
  { name: "迪拜",    slug: "dubai",          image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", areas: 25, desc: "Downtown市中心、Marina、JBR、DIFC、棕榈岛、商业湾、JLT等。" },
  { name: "阿布扎比", slug: "abu-dhabi",      image: "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=800&q=80", areas: 10, desc: "亚斯岛、萨迪亚特岛、海滨大道、里姆岛、ADGM等。" },
  { name: "沙迦",    slug: "sharjah",         image: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", areas: 5,  desc: "Al Majaz、Al Qasba、沙迦滨水区、Al Khan。" },
  { name: "阿治曼",  slug: "ajman",           image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28f8e?w=800&q=80", areas: 4,  desc: "阿治曼海滨大道、Al Jurf、Al Rashidiya。" },
  { name: "哈伊马角", slug: "ras-al-khaimah", image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800&q=80", areas: 4,  desc: "哈伊马角市区、Al Hamra村、杰贝尔贾伊斯山。" },
  { name: "富查伊拉", slug: "fujairah",       image: "https://images.unsplash.com/photo-1590004987778-bece5c9adab6?w=800&q=80", areas: 3,  desc: "富查伊拉市区、迪巴、霍尔法坎海岸线。" },
  { name: "乌姆盖万", slug: "umm-al-quwain",  image: "https://images.unsplash.com/photo-1597773150796-e5c14ebecbf5?w=800&q=80", areas: 2,  desc: "乌姆盖万市区、梦幻乐园水上公园区域。" },
];

export default function ZhLocationsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": LOCATIONS_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <div style={{ fontFamily: "'Noto Sans SC', sans-serif", paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center" as const, borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" as const }}>全国覆盖</p>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>阿联酋全境服务</h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>
          覆盖阿联酋全部7个酋长国——每座城市、每个社区、每一种创意愿景。
        </p>
      </div>

      {/* Grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.25rem" }}>
          {EMIRATES.map((e) => (
            <a key={e.slug} href={`/locations/${e.slug}`} style={{ display: "block", border: "1px solid #2a2a2a", borderRadius: "2px", overflow: "hidden", background: "#1a1a1a", textDecoration: "none" }}>
              <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                <img src={e.image} alt={`${e.name}视频制作`} style={{ width: "100%", height: "100%", objectFit: "cover" as const, display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
                <div style={{ position: "absolute", bottom: "0.75rem", left: "0.75rem" }}>
                  <span style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.65rem", fontWeight: 700, color: "var(--gold)", background: "rgba(0,0,0,0.7)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>{e.areas}+ 区域</span>
                </div>
              </div>
              <div style={{ padding: "1rem" }}>
                <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, marginBottom: "0.4rem", fontSize: "0.95rem" }}>{e.name}</h2>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", lineHeight: 1.6, margin: 0 }}>{e.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center" as const, marginBottom: "2.5rem" }}>服务覆盖常见问题</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
            {LOCATIONS_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" as const, marginTop: "2.5rem" }}>
            <a href="/zh/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>获取全阿联酋报价 →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
