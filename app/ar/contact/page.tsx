import type { Metadata } from "next";
import LocalizedContactForm from "@/components/contact/LocalizedContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا | باكيارد ستوديو أوفيشيال دبي — عرض سعر مجاني",
  description: "احصل على عرض سعر مجاني خلال ساعتين. تصوير فعاليات، أعراس، إعلانات، ريلز، أفلام مؤسسية، طائرة مسيّرة. جميع إمارات الدولة. واتساب: +971 58 588 2685.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/contact",
    languages: {
      "en": "https://www.backyardstudioofficial.com/contact",
      "ar": "https://www.backyardstudioofficial.com/ar/contact",
      "ru": "https://www.backyardstudioofficial.com/ru/contact",
      "zh": "https://www.backyardstudioofficial.com/zh/contact",
      "x-default": "https://www.backyardstudioofficial.com/contact",
    },
  },
  openGraph: {
    title: "تواصل مع باكيارد ستوديو أوفيشيال | عرض سعر مجاني — دبي الإمارات",
    description: "احصل على عرض سعر مجاني خلال ساعتين. فعاليات، أعراس، إعلانات، ريلز، أفلام مؤسسية وتصوير جوي في جميع إمارات الدولة. واتساب متاح.",
    url: "https://www.backyardstudioofficial.com/ar/contact",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "تواصل مع باكيارد ستوديو — دبي الإمارات" }],
  },
};

const CONTACT_FAQS = [
  { q: "كيف أحصل على عرض سعر من باكيارد ستوديو في دبي؟", a: "يمكنك الحصول على عرض سعر مجاني بثلاث طرق: ملء نموذج التواصل في هذه الصفحة، أو إرسال رسالة واتساب على +971 58 588 2685، أو البريد الإلكتروني info@backyardstudioofficial.com. نرد خلال ساعتين 7 أيام في الأسبوع." },
  { q: "ما مدة استجابة باكيارد ستوديو للاستفسارات؟", a: "نضمن الرد على جميع الاستفسارات خلال ساعتين بما فيها المساء وعطل نهاية الأسبوع. للتصوير العاجل في نفس اليوم، اتصل بنا أو تواصل عبر واتساب مباشرة على +971 58 588 2685." },
  { q: "أين يقع باكيارد ستوديو في دبي؟", a: "يتمركز باكيارد ستوديو أوفيشيال في دبي ويغطي جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. يمكننا تجهيز فريق التصوير في أي إمارة خلال 24-48 ساعة." },
  { q: "ما المعلومات التي أحتاج لتضمينها في موجز مشروعي؟", a: "للحصول على أدق عرض سعر، أرسل: تاريخ التصوير المطلوب أو الجدول الزمني التقريبي، الموقع المفضل، نوع المحتوى (فيديو/تصوير فوتوغرافي/كليهما)، المدة التقريبية أو المخرجات المطلوبة، وأي مراجع أو مزاج بصري لديك." },
];

export default function ArContactPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CONTACT_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
      { "@type": "ListItem", "position": 2, "name": "تواصل معنا", "item": "https://www.backyardstudioofficial.com/ar/contact" },
    ],
  };

  return (
    <div dir="rtl" style={{ fontFamily: "Cairo, sans-serif", paddingTop: "6rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      {/* Hero */}
      <div style={{ background: "#111", padding: "4rem 2rem", textAlign: "center", borderBottom: "1px solid #2a2a2a" }}>
        <p style={{ color: "rgba(212,175,55,0.8)", fontSize: "0.7rem", letterSpacing: "0.3em", marginBottom: "0.75rem", textTransform: "uppercase" }}>تواصل معنا</p>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem,8vw,5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>احجز مشروعك</h1>
        <p style={{ color: "rgba(245,240,225,0.5)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.8, fontSize: "0.9rem" }}>أرسل لنا موجزك وسنرد خلال ساعتين. دعنا نصنع شيئاً سينمائياً معاً.</p>
      </div>

      {/* Contact grid */}
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>أرسل موجزك</h2>
            <LocalizedContactForm locale="ar" />
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>معلومات التواصل</h2>
              {[
                { icon: "📱", label: "واتساب", value: "+971 58 588 2685", href: "https://wa.me/971585882685" },
                { icon: "📧", label: "البريد الإلكتروني", value: "info@backyardstudioofficial.com", href: "mailto:info@backyardstudioofficial.com" },
                { icon: "📍", label: "المقر الرئيسي", value: "دبي، الإمارات العربية المتحدة", href: null },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "1.25rem" }}>{c.icon}</span>
                  <div>
                    <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontSize: "0.9rem", textDecoration: "none" }}>{c.value}</a>
                    ) : (
                      <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontSize: "0.9rem", margin: 0 }}>{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ padding: "1.5rem", border: "1px solid var(--gold)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.5rem" }}>وقت الاستجابة</p>
              <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "2rem", fontWeight: 900, color: "var(--cream)", marginBottom: "0.25rem" }}>ساعتان</p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.8rem", margin: 0 }}>نضمن الرد على جميع الاستفسارات 7 أيام في الأسبوع</p>
            </div>

            <div style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,0.08)", background: "#111", borderRadius: "4px" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.75rem" }}>نغطي جميع الإمارات</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {["دبي", "أبوظبي", "الشارقة", "عجمان", "رأس الخيمة", "الفجيرة", "أم القيوين"].map((e) => (
                  <span key={e} style={{ fontFamily: "Cairo, sans-serif", fontSize: "0.75rem", color: "rgba(245,240,225,0.55)", padding: "0.25rem 0.65rem", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "2px" }}>{e}</span>
                ))}
              </div>
            </div>

            <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ display: "block", textAlign: "center", background: "#25D366", color: "#fff", padding: "1rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "0.9rem" }}>
              تواصل عبر واتساب الآن →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "4rem 2rem", borderTop: "1px solid #2a2a2a", background: "var(--ink)" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem,4vw,2.5rem)", fontWeight: 900, color: "var(--cream)", textAlign: "center", marginBottom: "2.5rem" }}>أسئلة شائعة</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {CONTACT_FAQS.map((faq) => (
              <div key={faq.q} style={{ borderBottom: "1px solid #2a2a2a", paddingBottom: "1.25rem" }}>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{faq.q}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
