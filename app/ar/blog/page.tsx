import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدوّنة باكيارد ستوديو | نصائح الإنتاج والتصوير في دبي",
  description: "مقالات ونصائح احترافية حول التصوير والإنتاج في دبي والإمارات. اقرأ آخر المستجدات في عالم الإنتاج الإبداعي.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/ar/blog" },
};

const BLOG_POSTS_AR = [
  {
    title: "إنتاج فيديو الشركات في دبي 2026 — الدليل الكامل",
    desc: "من 8,000 درهم: فيديو مؤسسي احترافي، شهادات العملاء، فيديو المنتجات. أسعار واقعية وعملية من فريق باكيارد ستوديو.",
    href: "/ar/blog/video-sharikaat-dubai-2026",
    date: "مايو 2026",
    featured: true,
  },
  {
    title: "تصوير العقارات في دبي 2026 — دليل الأسعار",
    desc: "من الشقق إلى الفلل الفاخرة ومشاريع المطورين — أسعار واقعية لتصوير العقارات في دبي مع تصوير جوي مرخص من هيئة الطيران.",
    href: "/ar/blog/taswiremolak-dubai-2026",
    date: "مايو 2026",
    featured: true,
  },
  {
    title: "تصوير حفلات الزفاف في دبي 2026 — دليلك الكامل",
    desc: "كيف تختار مصور الأعراس المناسب في دبي؟ أسعار واقعية، الفرق بين الفيديو السينمائي والتوثيقي، وأسئلة جوهرية قبل الحجز.",
    href: "/ar/blog/taswirzifaf-dubai-2026",
    date: "مايو 2026",
    featured: true,
  },
  {
    title: "أسعار تصوير الفيديو في دبي 2026",
    desc: "دليل شامل للأسعار الواقعية — فيديو الشركات، إعلانات تجارية، محتوى السوشيال ميديا، تصوير جوي. أرقام حقيقية من السوق.",
    href: "/ar/blog/asear-tasswirvideo-dubai-2026",
    date: "مايو 2026",
    featured: true,
  },
  {
    title: "أفضل شركات الإنتاج في دبي 2026",
    desc: "دليل شامل لأبرز شركات الإنتاج الإبداعي في دبي — معايير الاختيار، الأسعار، والخدمات.",
    href: "/blog/best-production-companies-dubai-2026",
    date: "مايو 2026",
  },
  {
    title: "تكلفة الإنتاج الفيديو في الإمارات 2026",
    desc: "دليل الأسعار الشامل — من مقاطع السوشيال ميديا إلى الإعلانات التجارية الكبرى.",
    href: "/blog/how-much-does-video-production-cost-dubai-2026",
    date: "مارس 2026",
  },
  {
    title: "التصوير السيارات في دبي 2026",
    desc: "كيف يُنتج الاستوديو محتوى الطائرات المسيّرة وتصوير السيارات في أبرز مواقع دبي.",
    href: "/blog/automotive-photography-dubai-2026",
    date: "مايو 2026",
  },
  {
    title: "تصوير الفنادق الاحترافي في دبي",
    desc: "دليلك لإنتاج محتوى الفنادق والضيافة في دبي — من الغرف إلى الأماكن الخارجية.",
    href: "/blog/hotel-photography-dubai-2026",
    date: "مايو 2026",
  },
];

export default function ArBlogPage() {
  return (
    <>
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          المدوّنة
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          مقالات ونصائح من فريق باكيارد ستوديو حول الإنتاج والتصوير