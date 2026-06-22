import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

const portfolioSchema = {
  ...buildPortfolioItemListSchema(),
  name: "Backyard Studio Official — معرض الأعمال",
  description: "معرض أعمال باكيارد ستوديو — فيديو الشركات، تصوير حفلات الزفاف، العقارات ومحتوى السوشيال ميديا في دبي والإمارات. أكثر من 2,400 مشروع.",
  url: "https://www.backyardstudioofficial.com/ar/portfolio",
  inLanguage: "ar",
};

export const metadata: Metadata = {
  title: "معرض الأعمال | باكيارد ستوديو أوفيشيال — دبي",
  description: "معرض أعمال باكيارد ستوديو — فيديو الشركات، تصوير الأعراس، العقارات، الفنادق والمحتوى الرقمي في دبي والإمارات.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/portfolio" },
};

const ALL_PROJECTS = [
  { src: "/images/events/event-01.webp",      alt: "تصوير الفعاليات المؤسسية في دبي",    cat: "فعاليات" },
  { src: "/images/wedding/wedding-01.webp",   alt: "تصوير حفل زفاف فاخر في دبي",        cat: "أعراس" },
  { src: "/images/creative/creative-04.webp", alt: "تصوير الأزياء في دبي",               cat: "إبداعي" },
  { src: "/images/events/event-02.webp",      alt: "تصوير المؤتمرات الدولية في دبي",      cat: "فعاليات" },
  { src: "/images/products/product-03.webp",  alt: "تصوير المنتجات الاحترافي دبي",       cat: "منتجات" },
  { src: "/images/wedding/wedding-05.webp",   alt: "تصوير حفل زفاف عربي في دبي",         cat: "أعراس" },
  { src: "/images/creative/creative-13.webp", alt: "إنتاج محتوى إبداعي في دبي",          cat: "محتوى" },
  { src: "/images/events/event-03.webp",      alt: "تصوير حفلات الغالا في دبي",          cat: "فعاليات" },
  { src: "/images/wedding/wedding-16.webp",   alt: "تصوير زفاف هندي في دبي",             cat: "أعراس" },
  { src: "/images/creative/creative-05.webp", alt: "تصوير موضة راقية في دبي",            cat: "إبداعي" },
  { src: "/images/events/event-04.webp",      alt: "تصوير إطلاق منتج في دبي",            cat: "فعاليات" },
  { src: "/images/products/product-01.webp",  alt: "تصوير المنتجات للتجارة الإلكترونية", cat: "منتجات" },
  { src: "/images/creative/creative-01.webp", alt: "تصوير البورتريه الاحترافي في دبي",   cat: "محتوى" },
  { src: "/images/wedding/wedding-02.webp",   alt: "جلسة تصوير ما قبل الزفاف في دبي",   cat: "أعراس" },
  { src: "/images/events/event-05.webp",      alt: "تصوير الفعاليات الحكومية في دبي",    cat: "فعاليات" },
  { src: "/images/creative/creative-06.webp", alt: "محتوى السوشيال ميديا دبي",           cat: "محتوى" },
];

export default function ArPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />

      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>معرض الأعمال</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>أعمالنا</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          من الأفلام المؤسسية إلى تصوير حفلات الزفاف — أكثر من 2,400 مشروع منجز في جميع أنحاء الإمارات.
        </p>
      </section>

      <section style={{ padding: "3rem 2rem 4rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
            {ALL_PROJECTS.map((p) => (
              <a key={p.src} href="/portfolio" style={{ display: "block", position: "relative", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", textDecoration: "none", background: "#111" }}>
                <img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0.6rem 0.9rem", background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <span style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.9)", fontSize: "0.75rem" }}>{p.alt.split(" في")[0]}</span>
                  <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.7rem", background: "rgba(212,175,55,0.15)", padding: "0.2rem 0.5rem", borderRadius: "2px" }}>{p.cat}</span>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginBottom: "3rem" }}>
            <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>أعمالنا المرئية</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {[
                { id: "1194038771", label: "تصوير الأزواج" },
                { id: "1194038751", label: "تصوير حفلات الزفاف" },
                { id: "1194038719", label: "تصوير الأزياء والموضة" },
              ].map((v) => (
                <div key={v.id} style={{ borderRadius: "4px", overflow: "hidden", background: "#111", border: "1px solid rgba(212,175,55,0.12)" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479&dnt=1`}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
                      allow="autoplay; fullscreen; picture-in-picture"
                      title={v.label}
                      loading="lazy"
                    />
                  </div>
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "0.85rem", padding: "0.75rem 1rem", margin: 0, textAlign: "center" }}>{v.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "6px", padding: "2.5rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.4rem", marginBottom: "1rem" }}>هل أنت مستعد لمناقشة مشروعك؟</h2>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", marginBottom: "1.5rem", lineHeight: 1.8 }}>تقييم مجاني للمشروع خلال ساعتين. تواصل معنا الآن.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/ar/contact" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>تواصل معنا</a>
              <a href="/portfolio" style={{ display: "inline-block", border: "1px solid var(--gold)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>معرض الأعمال الكامل</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
