import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل مع باكيارد ستوديو أوفيشيال | دبي — واتساب +971 58 588 2685",
  description: "تواصل مع باكيارد ستوديو في دبي لحجز تصوير الفعاليات والأعراس والإعلانات في جميع أنحاء الإمارات. نرد خلال ساعتين. واتساب: +971 58 588 2685.",
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
    title: "تواصل مع باكيارد ستوديو أوفيشيال — دبي",
    description: "احجز تصوير الفعاليات والأعراس والإعلانات في الإمارات. نرد خلال ساعتين. واتساب: +971 58 588 2685.",
    url: "https://www.backyardstudioofficial.com/ar/contact",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "تواصل مع باكيارد ستوديو — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل مع باكيارد ستوديو أوفيشيال — دبي",
    description: "نرد خلال ساعتين. واتساب +971 58 588 2685.",
    images: ["/og-image.jpg"],
  },
};

const CONTACT_FAQS = [
  { q: "ما هو رقم واتساب باكيارد ستوديو في دبي؟", a: "يمكنك التواصل معنا عبر واتساب على الرقم +971 58 588 2685. نرد على جميع الاستفسارات خلال ساعتين، 7 أيام في الأسبوع." },
  { q: "كيف أحصل على عرض سعر لتصوير مشروعي؟", a: "تواصل معنا عبر واتساب أو البريد الإلكتروني info@backyardstudioofficial.com مع وصف موجز للمشروع وتاريخ التصوير المطلوب. نرد بعرض سعر مخصص خلال ساعتين." },
  { q: "هل تغطون مناطق خارج دبي؟", a: "نعم. نعمل في جميع إمارات الدولة السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين." },
  { q: "ما هي مدة التسليم لمشاريع التصوير؟", a: "تُسلَّم هايلايت الأعراس والفعاليات في غضون 48 ساعة. الأفلام المؤسسية والإعلانات الكاملة تُسلَّم خلال 7-14 يوم عمل حسب تعقيد المشروع." },
];

export default function ArContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "تواصل معنا", "item": "https://www.backyardstudioofficial.com/ar/contact" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": CONTACT_FAQS.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          تواصل معنا
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          نرد على جميع الاستفسارات خلال ساعتين، 7 أيام في الأسبوع.
        </p>
      </section>

      