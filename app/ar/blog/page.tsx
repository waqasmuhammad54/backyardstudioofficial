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
    desc: "صور الطعام الاحترافية ترفع مبيعات المطاعم وتُحسّن أداء منصا�