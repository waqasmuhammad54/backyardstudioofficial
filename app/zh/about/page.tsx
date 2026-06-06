import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | Fahad Iqbal Butt & Syed Mazhar Zaidi — 迪拜 Backyard Studio",
  description: "了解Backyard Studio Official——迪拜领先的创意制作公司。2019年由Fahad Iqbal Butt和Syed Mazhar Zaidi创立，已完成超过2,400个项目，持有GCAA执照。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "关于 Backyard Studio Official — 迪拜影视制作",
    description: "2019年创立于迪拜。超过2,400个项目，GCAA执照，好莱坞级后期制作，中英阿俄多语言服务。",
    url: "https://www.backyardstudioofficial.com/zh/about",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio Official 团队 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "关于 Backyard Studio Official — 迪拜",
    description: "Fahad Iqbal Butt & Syed Mazhar Zaidi。超过2,400个项目。GCAA执照。",
    images: ["/og-image.jpg"],
  },
};

export default function ZhAboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "关于我们", "item": "https://www.backyardstudioofficial.com/zh/about" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.backyardstudioofficial.com/zh/about#fahad",
          "name": "Fahad Iqbal Butt",
          "jobTitle": "Creative Director",
          "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
          "description": "电影导演与时尚摄影师，毕业于巴基斯坦国立艺术学院（影视专业）。2019年创立Backyard Studio Official。",
          "url": "https://www.backyardstudioofficial.com/zh/about",
        },
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "@id": "https://www.backyardstudioofficial.com/zh/about#syed",
          "name": "Syed Mazhar Zaidi",
          "jobTitle": "Director of Photography",
          "worksFor": { "@type": "Organization", "name": "Backyard Studio Official" },
          "description": "拥有20年以上经验的电影导演与纪录片摄影师，GC大学大众传播硕士，已完成50余部MV和广告。",
          "sameAs": ["https://www.imdb.com/name/nm14029494/"],
          "url": "https://www.backyardstudioofficial.com/zh/about",
        },
      ]) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          关于 Backyard Studio Official
        </h1>
        <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "var(--gold)", fontSize: "1rem" }}>
          迪拜，阿联酋 — 自2019年
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Noto Sans SC', sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>我们的故事</h2>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "1rem", marginBottom: "1.5rem" }}>
            Backyard Studio Official于2019年在巴基斯坦拉合尔创立，创始人为<strong style={{ color: "var(--cream)" }}>Fahad Iqbal Butt</strong>——
            一位毕业于国立艺术学院（影视专业）的电影导演与时尚摄影师。2023年，我们正式进驻迪拜，迅速成为阿联酋最受认可的创意制作公司之一。
          </p>
          <p style={{ fontFamily: "'Noto Sans SC', sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 2, fontSize: "1rem", marginBottom: "1.5rem" }}>
            后期制作团队由<strong style={{ color: "var(--cream)" }}>Syed Mazhar Zaidi</strong>领衔——
            拥有超过20年从业经验的电影导演与纪录片摄影师，GC大学大众传播硕士，已完成逾50部MV、广告及纪录片。
            他的IMDB档案：{" "}
         