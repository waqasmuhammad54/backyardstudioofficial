import type { Metadata } from "next";
import LocalizedContactForm from "@/components/contact/LocalizedContactForm";

export const metadata: Metadata = {
  title: "联系我们 | Backyard Studio Official 迪拜 — 免费报价",
  description: "2小时内获得免费报价。活动摄影、婚礼、DVC广告、Reels、企业影片、无人机航拍。覆盖阿联酋全部7个酋长国。WhatsApp: +971 58 588 2685。",
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
    title: "联系 Backyard Studio Official | 免费报价 — 迪拜阿联酋",
    description: "2小时内免费报价。活动、婚礼、DVC、Reels、TikTok、企业影片和无人机航拍，覆盖阿联酋全部7个酋长国。可通过WhatsApp联系。",
    url: "https://www.backyardstudioofficial.com/zh/contact",
    siteName: "Backyard Studio Official",
    locale: "zh_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "联系 Backyard Studio Official — 迪拜阿联酋" }],
  },
};

const CONTACT_FAQS = [
  { q: "如何获取 Backyard Studio 迪拜的报价？", a: "您可以通过三种方式获得免费报价：填写本页联系表单、发送 WhatsApp 消息至 +971 58 588 2685，或发送邮件至 info@backyardstudioofficial.com。我们每周7天均在2小时内回复。" },
  { q: "Backyard Studio 多久回复咨询？", a: "Backyard Studio Official 保证在2小时内回复所有项目咨询——包括晚间和周末。如需当日紧急拍摄，请直接拨打或发送 WhatsApp 至 +971 58 588 2685。" },
  { q: "Backyard Studio 在迪拜的位置？", a: "Backyard Studio Official 总部位于迪拜，覆盖阿联酋全部7个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富查伊拉和乌姆盖万。我们可在24至48小时内将摄制团队部署至任何酋长国。" },
  { q: "制作简报应包含哪些信息？", a: "为获得最准确的报价，请提供：拍摄日期（或大致时间）、首选地点、所需内容类型（视频/摄影/两者）、大致时长或交付物清单，以及任何参考素材或情绪板。" },
];

export default function ZhContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CONTACT_FAQS.map((f) => ({
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
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" as const }}>联系我们</p>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>开始您的项目</h1>
        <p style={{ color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>发送项目简报，我们将在2小时内回复。让我们一起创作精彩内容。</p>
      </div>

      {/* Contact grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>发送项目简报</h2>
            <LocalizedContactForm locale="zh" />
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>联系方式</h2>
              {[
                { icon: "📱", label: "WhatsApp", value: "+971 58 588 2685", href: "https://wa.me/971585882685" },
                { icon: "📧", label: "电子邮箱", value: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
                { icon: "📍", label: "总部地址", value: "迪拜，阿联酋", href: null },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "0.9rem", textDecoration: "none" }}>{c.value}</a>
                    ) : (
                      <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontSize: "0.9rem", margin: 0 }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid var(--gold)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "0.5rem" }}>平均响应时间</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--cream)", marginBottom: "0.25rem" }}>2小时</p>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", margin: 0 }}>每周7天响应所有咨询</p>
            </div>
            <div style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: "0.75rem" }}>覆盖全部酋长国</p>
              <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.5rem" }}>
                {["迪拜","阿布扎比","沙迦","阿治曼","哈伊马角","富查伊拉","乌姆盖万"].map((e) => (
                  <span key={e} style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "0.75rem", color: "rgba(245,240,225,0.55)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px" }}>{e}</span>
                ))}
              </div>
            </div>
            <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center" as const, background: "#25D366", color: "#fff", padding: "1rem 2rem", fontFamily: "'Noto Sans SC', sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>
              WhatsApp 立即咨询 →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center" as const, marginBottom: "2.5rem" }}>常见问题</h2>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "1.25rem" }}>
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
