import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أسعار التصوير والإنتاج في دبي 2026 | باكيارد ستوديو أوفيشيال",
  description: "أسعار الإنتاج والتصوير في دبي 2026: تصوير أعراس من 3,500 درهم، فيديو مؤسسي من 15,000 درهم، إعلانات تجارية من 25,000 درهم. عرض سعر مجاني خلال ساعتين.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/pricing",
    languages: {
      "en": "https://www.backyardstudioofficial.com/pricing",
      "ar": "https://www.backyardstudioofficial.com/ar/pricing",
      "ru": "https://www.backyardstudioofficial.com/ru/pricing",
      "zh": "https://www.backyardstudioofficial.com/zh/pricing",
      "x-default": "https://www.backyardstudioofficial.com/pricing",
    },
  },
  openGraph: {
    title: "أسعار التصوير والإنتاج في دبي 2026 | باكيارد ستوديو أوفيشيال",
    description: "أسعار شفافة: أعراس من 3,500 درهم، فيديو مؤسسي من 15,000 درهم، إعلانات من 25,000 درهم. عرض مجاني خلال ساعتين.",
    url: "https://www.backyardstudioofficial.com/ar/pricing",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "أسعار الإنتاج — باكيارد ستوديو أوفيشيال دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "أسعار التصوير والإنتاج دبي 2026",
    description: "أعراس من 3,500 درهم • فيديو مؤسسي من 15,000 درهم • عرض مجاني.",
    images: ["/og-image.jpg"],
  },
};

const PACKAGES = [
  {
    title: "المحتوى الرقمي",
    price: "من 2,500 درهم",
    features: ["ريلز إنستغرام وتيك توك", "يوتيوب شورتس", "تصوير المنتجات البسيطة", "تسليم في 48 ساعة"],
  },
  {
    title: "تصوير حفلات الزفاف",
    price: "من 3,500 درهم",
    features: ["تغطية كاملة لليوم", "مصور + مصور فيديو", "هايلايت في 48 ساعة", "تسليم ملفات عالية الدقة"],
    featured: true,
  },
  {
    title: "الفيديو المؤسسي",
    price: "من 15,000 درهم",
    features: ["فيلم احترافي كامل الإنتاج", "تصوير بالطائرة المسيّرة", "تحرير وألوان سينمائية", "حقوق استخدام كاملة"],
  },
  {
    title: "الإعلانات التجارية",
    price: "من 25,000 درهم",
    features: ["إنتاج DVC كامل", "كاست + تصريح موقع", "موشن جرافيك وصوت احترافي", "تسليم للبث التلفزيوني والرقمي"],
  },
];

export default function ArPricingPage() {
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
              { "@type": "ListItem", "position": 2, "name": "الأسعار", "item": "https://www.backyardstudioofficial.com/ar/pricing" },
            ],
          }),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          أسعار خدماتنا في دبي
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
          أسعار شفافة وعادلة. نقدم عرض سعر مخصص لكل مشروع خلال ساعتين من الاستفسار.
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "1.5rem" }}>
          {PACKAGES.map((pkg) => (
            <div key={pkg.title} style={{
              background: pkg.featured ? "rgba(212,175,55,0.08)" : "rgba(255,255,255,0.03)",
              border: pkg.featured ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.12)",
              borderRadius: "4px",
              padding: "2rem",
              textAlign: "center",
              position: "relative" as const,
            }}>
              {pkg.featured && (
                <div style={{ position: "absolute" as const, top: "-12px", left: "50%", transform: "translateX(-50%)", background: "var(--gold)", color: "#000", padding: "0.2rem 1rem", borderRadius: "2px", fontSize: "0.75rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, whiteSpace: "nowrap" as const }}>
                  الأكثر طلباً
                </div>
              )}
              <h2 style={{ fontFamily: "Cairo, sans-serif", color: pkg.featured ? "var(--gold)" : "var(--cream)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>{pkg.title}</h2>
              <div style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "1.5rem", fontWeight: 900, marginBottom: "1.5rem" }}>{pkg.price}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", fontSize: "0.875rem" }}>
                    ✓ {f}
                  </li>
                ))}
              </ul>
              <a href="/ar/contact" style={{ display: "block", background: pkg.featured ? "var(--gold)" : "transparent", border: pkg.featured ? "none" : "1px solid rgba(212,175,55,0.4)", color: pkg.featured ? "#000" : "var(--gold)", padding: "0.75rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
                احصل على عرض سعر
              </a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", textAlign: "center", marginTop: "2rem", fontSize: "0.875rem" }}>
          جميع الأسعار بالدرهم الإماراتي (AED). الأسعار تقديرية — يتم تحديد السعر النهائي بناءً على متطلبات المشروع.
        </p>
      </section>

      {/* Pricing Transparency */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>شفافية الأسعار — لا رسوم خفية</h2>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            نؤمن في باكيارد ستوديو بأن الوضوح الكامل في التسعير هو أساس الثقة مع عملائنا. عندما تتواصل معنا، تتلقى خلال ساعتين عرض سعر مفصلاً يشمل كل بند: الطاقم، المعدات، ساعات التصوير، مرحلة ما بعد الإنتاج، ورسوم التنقل إن وُجدت. لا توجد رسوم تُكتشف بعد التوقيع.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            الأسعار المذكورة أعلاه هي نقاط انطلاق تقديرية. المشاريع البسيطة (تصوير منتج واحد، ريلز إنستغرام بموقع واحد) قد تكون أقل من السعر المذكور. المشاريع المعقدة (فيلم علامة تجارية بمواقع متعددة وكاست وتصوير جوي) ستتجاوز السعر الأدنى المذكور. الهدف من هذه الأرقام أن تعطيك فكرة عامة قبل أن تتواصل معنا.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            يغطي عرض السعر القياسي لدينا: يوم التصوير الكامل، الطاقم الاحترافي، المعدات (الكاميرات والإضاءة والصوت)، التحرير وتصحيح الألوان، الملفات النهائية بتنسيقات متعددة، وحقوق الاستخدام التجاري الكامل للمحتوى الرقمي. يُحدَّد التسعير الخاص بالبث التلفزيوني واستخدام المحتوى في الإعلانات المدفوعة بشكل منفصل.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", textAlign: "center", marginBottom: "3rem" }}>أسئلة شائعة عن الأسعار</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                q: "هل تقدمون عرض سعر مجاني؟",
                a: "نعم. نُقدِّم عرض سعر مفصلاً ومجانياً خلال ساعتين من استلام الاستفسار، سبعة أيام في الأسبوع. العرض يشمل تفصيلاً كاملاً لكل بند في المشروع. للتواصل: info@backyardstudioofficial.com أو واتساب +971 58 588 2685.",
              },
              {
                q: "ما الذي يشمله سعر تصوير الأعراس؟",
                a: "باقة تصوير الأعراس الأساسية (من 3,500 درهم) تشمل: تغطية يوم الزفاف الكامل بمصور فوتوغرافي ومصور فيديو، هايلايت فيديو بين 3-5 دقائق خلال 48 ساعة، والصور الكاملة المُحررة خلال أسبوعين. الباقات الأعلى تشمل تصوير ما قبل الزفاف، طائرة مسيّرة، وتغطية تمتد ليوم أو يومين.",
              },
              {
                q: "هل تصوير الفيديو المؤسسي يختلف بحسب نوع الشركة؟",
                a: "نعم. السعر يتحدد بناءً على مدة الفيلم، عدد المواقع، الحاجة إلى الكاست (ممثلون أو حضور)، التصوير الجوي، والتأثيرات البصرية في ما بعد الإنتاج. فيلم شركة بمقابلة واحدة وموقع واحد يختلف جذرياً عن إعلان تجاري بمواقع متعددة وكاست كامل.",
              },
              {
                q: "هل يمكن تقسيط مبلغ الإنتاج؟",
                a: "نعم. للمشاريع التي تتجاوز 10,000 درهم، يمكن تقسيم المبلغ إلى دفعتين: 50% عند التوقيع، و50% عند تسليم الملفات النهائية. للمشاريع الكبرى (أعراس موسمية، حملات إنتاج طويلة)، يمكن مناقشة ترتيب دفع مرن يناسب الجدول الزمني للمشروع.",
              },
            ].map((f) => (
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
