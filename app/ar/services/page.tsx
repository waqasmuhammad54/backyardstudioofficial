import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات التصوير والإنتاج في دبي والإمارات | باكيارد ستوديو أوفيشيال",
  description: "خدمات إنتاج متكاملة في دبي والإمارات: تصوير فيديو مؤسسي من 15,000 درهم، تصوير الأعراس من 3,500 درهم، الفعاليات، الطائرات المسيّرة GCAA، محتوى رقمي. عرض سعر مجاني.",
  keywords: ["خدمات تصوير دبي", "انتاج فيديو الإمارات", "تصوير احترافي", "تصوير الاعراس دبي", "انتاج محتوى رقمي", "تصوير بالطائرة المسيرة دبي", "خدمات الإنتاج دبي"],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/services",
    languages: {
      "en": "https://www.backyardstudioofficial.com/services",
      "ar": "https://www.backyardstudioofficial.com/ar/services",
      "ru": "https://www.backyardstudioofficial.com/ru/services",
      "zh": "https://www.backyardstudioofficial.com/zh/services",
      "x-default": "https://www.backyardstudioofficial.com/services",
    },
  },
  openGraph: {
    title: "خدمات التصوير والإنتاج في دبي والإمارات | باكيارد ستوديو أوفيشيال",
    description: "خدمات إنتاج متكاملة: فيديو مؤسسي، أعراس، فعاليات، طائرات مسيّرة GCAA، محتوى رقمي. أسعار شفافة وعرض مجاني.",
    url: "https://www.backyardstudioofficial.com/ar/services",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "خدمات باكيارد ستوديو أوفيشيال — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات التصوير والإنتاج — دبي والإمارات",
    description: "فيديو مؤسسي، أعراس، فعاليات، طائرات مسيّرة GCAA. عرض مجاني خلال ساعتين.",
    images: ["/og-image.jpg"],
  },
};

const SERVICES = [
  {
    icon: "🎬",
    title: "إنتاج الفيديو المؤسسي",
    desc: "نُنتج أفلام الشركات والعلامات التجارية، الإعلانات التجارية الرقمية (DVCs)، فيديوهات المستثمرين، وأفلام الوثائقية للمؤسسات الكبرى. نحن نؤمن أن الفيديو الاحترافي ليس مجرد محتوى — بل هو استثمار في صورة علامتك التجارية.",
    price: "يبدأ من 15,000 درهم",
  },
  {
    icon: "💍",
    title: "تصوير حفلات الزفاف",
    desc: "نوثّق أجمل لحظات يوم الزفاف بأسلوب سينمائي راقٍ — تصوير فوتوغرافي وفيديو للأعراس العربية والهندية والدولية في دبي وجميع الإمارات. نُسلّم الهايلايت في غضون 48 ساعة.",
    price: "يبدأ من 3,500 درهم",
  },
  {
    icon: "🎉",
    title: "تصوير الفعاليات والمناسبات",
    desc: "تغطية احترافية للمؤتمرات، الغالا، إطلاق المنتجات، الأحداث الحكومية، والفعاليات المؤسسية — بفريق متخصص ومعدات احترافية.",
    price: "يبدأ من 3,500 درهم",
  },
  {
    icon: "🚁",
    title: "تصوير بالطائرة المسيّرة GCAA",
    desc: "تصوير جوي بتصريح معتمد من الهيئة العامة للطيران المدني (GCAA) — للعقارات، الفعاليات، والإعلانات في دبي وجميع الإمارات السبع.",
    price: "يبدأ من 2,000 درهم",
  },
  {
    icon: "📱",
    title: "محتوى وسائل التواصل الاجتماعي",
    desc: "إنتاج ريلز إنستغرام، مقاطع تيك توك، يوتيوب شورتس، وحزم المحتوى المتكاملة. محتوى صُمِّم خصيصاً للخوارزميات — يرفع التفاعل ويوسع الانتشار.",
    price: "يبدأ من 2,500 درهم",
  },
  {
    icon: "🛍️",
    title: "تصوير المنتجات والأزياء",
    desc: "تصوير احترافي للمنتجات والأزياء للتجارة الإلكترونية، الكتالوجات، وحسابات التواصل الاجتماعي — بإضاءة احترافية وإخراج فني متكامل.",
    price: "يبدأ من 150 درهم للمنتج",
  },
  {
    icon: "🏢",
    title: "تصوير العقارات",
    desc: "تصوير احترافي وفيديو للعقارات السكنية والتجارية في دبي — داخلي وخارجي، مع خيار التصوير الجوي للمشاريع الكبرى.",
    price: "يبدأ من 1,500 درهم",
  },
  {
    icon: "🍽️",
    title: "تصوير الأطعمة والمطاعم",
    desc: "تصوير فوتوغرافي وفيديو احترافي للأطعمة، المطاعم، والفنادق — لقوائم الطعام، حسابات التواصل الاجتماعي، والحملات التسويقية.",
    price: "يبدأ من 1,200 درهم",
  },
];

const SERVICES_FAQS = [
  { q: "ما هي خدمات الإنتاج التي تقدمها باكيارد ستوديو في دبي؟", a: "نقدم طيفاً كاملاً من خدمات الإنتاج: فيديو مؤسسي، تصوير الأعراس والفعاليات، تصوير جوي بترخيص GCAA، محتوى وسائل التواصل الاجتماعي، تصوير المنتجات والأزياء، والعقارات." },
  { q: "ما هو سعر تصوير الفيديو المؤسسي في دبي؟", a: "يبدأ الفيديو المؤسسي الاحترافي من 15,000 درهم. الإعلانات التجارية الكبرى (DVC) تبدأ من 25,000 درهم. نقدم عرض سعر مجاني خلال ساعتين." },
  { q: "هل تمتلكون رخصة GCAA للتصوير بالطائرات المسيّرة؟", a: "نعم. نحمل رخصة GCAA المعتمدة (الهيئة العامة للطيران المدني) للتصوير الجوي التجاري في جميع إمارات الدولة. تبدأ أسعار التصوير الجوي من 2,000 درهم." },
  { q: "هل تعملون خارج دبي في الإمارات الأخرى؟", a: "نعم، نغطي جميع الإمارات السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. نتحرك في غضون 48 ساعة لأي مشروع." },
];

export default function ArServicesPage() {
  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "الخدمات", "item": "https://www.backyardstudioofficial.com/ar/services" },
            ],
          }),
        }}
      />
      {/* ItemList of services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "خدمات باكيارد ستوديو أوفيشيال",
            "itemListElement": SERVICES.map((s, i) => ({
              "@type": "ListItem",
              "position": i + 1,
              "name": s.title,
              "description": s.desc,
            })),
          }),
        }}
      />
      {/* FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": SERVICES_FAQS.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": { "@type": "Answer", "text": f.a },
            })),
          }),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          خدماتنا الإبداعية في دبي والإمارات
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          حلول إنتاج متكاملة للعلامات التجارية، الشركات، والأفراد. من الفيديو المؤسسي إلى تصوير الأعراس — نحن هنا لتحويل رؤيتك إلى محتوى مؤثر.
        </p>
      </section>
      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem" }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
              <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.6rem" }}>{s.title}</h2>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1rem" }}>{s.desc}</p>
              <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 600, fontSize: "0.9rem" }}>{s.price}</span>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "1rem" }}>
            احصل على عرض سعر مجاني
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(1.5rem, 3.5vw, 2rem)", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>
            أسئلة شائعة عن خدماتنا
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {SERVICES_FAQS.map((f) => (
              <div key={f.q} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem" }}>{f.q}</h3>
                <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
