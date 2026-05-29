import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "خدمات التصوير والإنتاج في دبي | باكيارد ستوديو أوفيشيال",
  description: "خدمات إنتاج متكاملة في دبي والإمارات: تصوير فيديو مؤسسي، تصوير الأعراس، الفعاليات، الطائرات المسيّرة، محتوى التواصل الاجتماعي، تصوير المنتجات والأزياء.",
  keywords: ["خدمات تصوير دبي", "انتاج فيديو الإمارات", "تصوير احترافي", "تصوير الاعراس", "انتاج محتوى رقمي"],
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/services" },
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

export default function ArServicesPage() {
  return (
    <>
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
    </>
  );
}
