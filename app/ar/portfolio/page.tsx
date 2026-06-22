import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

const portfolioSchema = {
  ...buildPortfolioItemListSchema(),
  name: "باكيارد ستوديو أوفيشيال — معرض الأعمال",
  description: "معرض أعمال باكيارد ستوديو الرسمي في دبي والإمارات. 500+ مشروع في تصوير الفيديو والصور الاحترافية.",
  url: "https://www.backyardstudioofficial.com/ar/portfolio",
  inLanguage: "ar",
};

export const metadata: Metadata = {
  title: "معرض الأعمال | باكيارد ستوديو أوفيشيال — دبي",
  description: "تصفح أعمالنا في تصوير الفيديو والصور الاحترافية في دبي والإمارات. أكثر من 2,400 مشروع منجز.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/portfolio" },
};

const ALL_PROJECTS = [
  { src: "/images/events/event-01.webp",       alt: "تصوير الفعاليات المؤسسية في دبي",    cat: "فعاليات" },
  { src: "/images/wedding/wedding-01.webp",    alt: "تصوير حفل زفاف فاخر في دبي",         cat: "أعراس" },
  { src: "/images/creative/creative-04.webp",  alt: "تصوير الأزياء والموضة في دبي",        cat: "أزياء" },
  { src: "/images/events/event-02.webp",       alt: "تغطية المؤتمرات الدولية في دبي",      cat: "فعاليات" },
  { src: "/images/products/product-03.webp",   alt: "تصوير المنتجات الاحترافي دبي",        cat: "منتجات" },
  { src: "/images/wedding/wedding-05.webp",    alt: "تصوير زفاف عربي فاخر في دبي",        cat: "أعراس" },
  { src: "/images/creative/creative-13.webp",  alt: "إنتاج محتوى إبداعي في دبي",           cat: "إبداعي" },
  { src: "/images/events/event-03.webp",       alt: "تصوير حفلات الغالا في دبي",           cat: "فعاليات" },
  { src: "/images/wedding/wedding-16.webp",    alt: "تصوير الزفاف الهندي في دبي",          cat: "أعراس" },
  { src: "/images/creative/creative-05.webp",  alt: "تصوير الأزياء الفاخرة في دبي",        cat: "أزياء" },
  { src: "/images/events/event-04.webp",       alt: "تصوير إطلاق المنتجات في دبي",         cat: "فعاليات" },
  { src: "/images/products/product-01.webp",   alt: "تصوير المنتجات للتجارة الإلكترونية",  cat: "منتجات" },
  { src: "/images/creative/creative-01.webp",  alt: "تصوير البورتريه الاحترافي في دبي",    cat: "إبداعي" },
  { src: "/images/wedding/wedding-02.webp",    alt: "تصوير جلسة ما قبل الزفاف في دبي",    cat: "أعراس" },
  { src: "/images/events/event-05.webp",       alt: "تصوير الفعاليات الحكومية في دبي",     cat: "فعاليات" },
  { src: "/images/creative/creative-06.webp",  alt: "محتوى وسائل التواصل الاجتماعي دبي",  cat: "إبداعي" },
];

export default function ArPortfolioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }} />

      {/* HEADER */}
      <section style={{ background: "#111", padding: "5rem 2rem 3rem", textAlign: "center" }}>
        <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", marginBottom: "1rem", letterSpacing: "0.1em" }}>معرض الأعمال</div>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>أعمالنا</h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "550px", margin: "0 auto", lineHeight: 1.8 }}>
          من فيديوهات الشركات إلى تصوير الأعراس والفعاليات — أكثر من 2,400 مشروع منجز في جميع إمارات الدولة.
        </p>
      </section>

      {/* PROJECT GRID */}
      <section style={{ padding: "3rem 2rem 4rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "0.75rem", marginBottom: "3rem" }}>
            {ALL_PROJECTS.map((p) => (
              <a key={p.src} href="/portfolio" style={{ display: "block", position: "relative", borderRadius: "4px", overflow: "hidden", aspectRatio: "4/3", textDecoration: "none", background: "#111" }}>
                <img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                <div style={{ position: "absolute", 