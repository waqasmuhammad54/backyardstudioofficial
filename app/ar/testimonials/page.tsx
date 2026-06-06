import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "آراء العملاء | باكيارد ستوديو أوفيشيال — تقييم 4.9 نجمة — دبي",
  description: "اقرأ آراء عملائنا من الشركات والأفراد في دبي والإمارات — تصوير الفعاليات، الأعراس، الفيديو المؤسسي والمحتوى الرقمي. أكثر من 2,400 مشروع. تقييم 4.9/5.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "آراء العملاء | باكيارد ستوديو أوفيشيال — تقييم 4.9 نجمة",
    description: "ماذا يقول عملاؤنا في دبي والإمارات. أكثر من 127 تقييم، متوسط 4.9/5 نجمة.",
    url: "https://www.backyardstudioofficial.com/ar/testimonials",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "آراء عملاء باكيارد ستوديو أوفيشيال" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "آراء العملاء — باكيارد ستوديو أوفيشيال دبي",
    description: "أكثر من 127 تقييم. متوسط 4.9/5 نجمة. عملاء من دبي وجميع الإمارات.",
    images: ["/og-image.jpg"],
  },
};

const TESTIMONIALS = [
  { name: "أحمد الرشيدي", role: "المدير التنفيذي، مجموعة بريميوم للعقارات", text: "فريق باكيارد ستوديو يفهم متطلبات السوق الإماراتي تماماً. جودة الإنتاج والالتزام بالمواعيد كانا استثنائيين. الفيديو الذي أنتجوه لمشروع فللنا الفاخرة رفع مبيعاتنا بشكل ملحوظ.", stars: 5 },
  { name: "سارة المنصوري", role: "مديرة التسويق، فندق جراند بلازا دبي", text: "أنتجوا لنا محتوى مرئياً احترافياً لمنصات التواصل الاجتماعي بأسرع وقت وأعلى جودة. العمل معهم كان تجربة سلسة ومثمرة.", stars: 5 },
  { name: "محمد الهاشمي", role: "مؤسس، شركة الابتكار للتكنولوجيا", text: "طلبنا فيديو تعريفي للشركة وتجاوز التوقعات بكثير. الفريق محترف، ملتزم، ومبدع. سنتعاون معهم في كل مشاريعنا القادمة.", stars: 5 },
  { name: "نورة الكعبي", role: "مصممة أزياء، دبي", text: "صوّروا مجموعتي الجديدة بأسلوب راقٍ يعكس هوية العلامة التجارية بدقة. الصور والفيديوهات كانت أفضل مما تخيّلت.", stars: 5 },
  { name: "خالد الشامسي", role: "مدير عمليات، مجموعة الضيافة الدولية", text: "أعمل معهم منذ ثلاث سنوات لإنتاج محتوى فنادقنا في دبي وأبوظبي. الاحترافية والإبداع ثابتان في كل مشروع.", stars: 5 },
  { name: "ليلى عبدالله", role: "صاحبة Leil Bridal", text: "التصوير السينمائي لحفل زفافي كان أجمل من أحلامي. سيد مظهر زيدي أمسك كل لحظة بعدسته بمهارة استثنائية.", stars: 5 },
];

export default function ArTestimonialsPage() {
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
              { "@type": "ListItem", "position": 2, "name": "آراء العملاء", "item": "https://www.backyardstudioofficial.com/ar/testimonials" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.backyardstudioofficial.com/ar/#localbusiness",
            "name": "باكيارد ستوديو أوفيشيال",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "rev