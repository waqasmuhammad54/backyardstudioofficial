import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدوّنة باكيارد ستوديو | نصائح الإنتاج والتصوير في دبي والإمارات 2026",
  description: "مقالات ونصائح احترافية حول التصوير والإنتاج في دبي والإمارات 2026 — أسعار التصوير، تصوير الأعراس، مواقع التصوير، استراتيجية المحتوى الرقمي. من فريق باكيارد ستوديو.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog",
    languages: {
      "en": "https://www.backyardstudioofficial.com/blog",
      "ar": "https://www.backyardstudioofficial.com/ar/blog",
      "ru": "https://www.backyardstudioofficial.com/ru/blog",
      "zh": "https://www.backyardstudioofficial.com/zh/blog",
      "x-default": "https://www.backyardstudioofficial.com/blog",
    },
  },
  openGraph: {
    title: "مدوّنة باكيارد ستوديو | نصائح الإنتاج والتصوير دبي 2026",
    description: "أسعار التصوير، تصوير الأعراس، مواقع التصوير، واستراتيجية المحتوى الرقمي في الإمارات.",
    url: "https://www.backyardstudioofficial.com/ar/blog",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "مدوّنة باكيارد ستوديو — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدوّنة باكيارد ستوديو — دبي 2026",
    description: "نصائح الإنتاج والتصوير في الإمارات. مقالات باللغة العربية.",
    images: ["/og-image.jpg"],
  },
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
  {
    title: "تصوير حفلات الزفاف الإماراتية في دبي 2026",
    desc: "خبرة متخصصة في أعراس الخليج الإماراتية — الحناء، الصبحة، فريق عربي يفهم الخصوصية الثقافية. من AED 8,000.",
    href: "/ar/blog/taswir-zifaf-emirati-dubai-2026",
    date: "يونيو 2026",
    featured: true,
  },
  {
    title: "تصوير حفلات الزفاف العربية في دبي 2026",
    desc: "لبنانية، خليجية، مصرية — فريق عربي يفهم كل ثقافة ويوثّق كل لحظة بعيون تعرف معناها. من AED 6,000.",
    href: "/ar/blog/taswir-zifaf-arabi-dubai-2026",
    date: "يونيو 2026",
    featured: true,
  },
  {
    title: "تصوير الطعام في دبي 2026 — للمطاعم والعلامات التجارية",
    desc: "صور الطعام الاحترافية ترفع مبيعات المطاعم وتُحسّن أداء منصات التوصيل. أسعار تبدأ من AED 1,500.",
    href: "/ar/blog/taswir-taaam-dubai-2026",
    date: "يونيو 2026",
  },
  {
    title: "تصوير المؤتمرات والفعاليات في دبي 2026",
    desc: "تغطية DWTC وMadinat وAtlantis. هايلايت سوشيال بنفس اليوم. إطلاق منتجات، معارض، حفلات شركات.",
    href: "/ar/blog/taswir-muatamart-dubai-2026",
    date: "يونيو 2026",
  },
  {
    title: "تصوير فيديو الفعاليات في دبي 2026",
 desc: "هايلايت جاهز للنشر في ساعات، كاميرات متعددة، لقطات جوية. من AED 3,500.",
    href: "/ar/blog/tasjil-video-faaliyat-dubai-2026",
    date: "يونيو 2026",
  },
  {
    title: "إنتاج كليب موسيقي في دبي 2026",
    desc: "رؤية إخراجية سينمائية للفنانين العرب والخليجيين. معالجة Treatment + تصاريح + تدرج لوني. من AED 8,000.",
    href: "/ar/blog/intaj-klip-musiqi-dubai-2026",
    date: "يونيو 2026",
  },
  {
    title: "تصوير الخطوبة في دبي 2026 — جلسة لا تُنسى",
    desc: "جلسة تصوير الخطوبة في أجمل مواقع دبي — كريك هاربر، البستكية، جميرا، الداون تاون. من AED 1,500. مصور متخصص بالمناسبات العاطفية.",
    href: "/ar/blog/taswir-khetuba-dubai-2026",
    date: "يونيو 2026",
    featured: true,
  },
  {
    title: "تصوير المواليد في دبي 2026 — جلسة النيوبورن المثالية",
    desc: "وثّق أول أيام طفلك بجلسة نيوبورن آمنة واحترافية. استديو مدفأ، أقمشة معقمة، تسليم الصور خلال 5 أيام. من AED 900.",
    href: "/ar/blog/taswir-mawaalid-dubai-2026",
    date: "يونيو 2026",
  },
];

export default function ArBlogPage() {
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
              { "@type": "ListItem", "position": 2, "name": "المدوّنة", "item": "https://www.backyardstudioofficial.com/ar/blog" },
            ],
          }),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          المدوّنة
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          مقالات ونصائح من فريق باكيارد ستوديو حول الإنتاج والتصوير في دبي والإمارات.
        </p>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
          {BLOG_POSTS_AR.map((post) => (
            <a key={post.href} href={post.href} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", padding: "2rem", transition: "border-color 0.3s" }}>
              <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.8rem", marginBottom: "0.5rem" }}>{post.date}</div>
              <h2 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.75rem" }}>{post.title}</h2>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", lineHeight: 1.6 }}>{post.desc}</p>
              <span style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.875rem", marginTop: "1rem", display: "block" }}>اقرأ المزيد &larr;</span>
            </a>
          ))}
        </div>
        <p style={{ fontFamily: "Cairo, sans-serif", textAlign: "center", marginTop: "2rem", color: "rgba(245,240,225,0.4)", fontSize: "0.875rem" }}>
          جميع المقالات متاحة باللغة الإنجليزية. <a href="/blog" style={{ color: "var(--gold)" }}>تصفح المدوّنة الكاملة &rarr;</a>
        </p>
      </section>
    </>
  );
}
