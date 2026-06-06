import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "客户评价 | 4.9星口碑 — 迪拜 Backyard Studio Official",
  description: "来自迪拜及阿联酋客户的真实评价。Backyard Studio Official已服务超过2,400个项目，平均评分4.9/5星，口碑卓著。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/testimonials",
    languages: {
      "en": "https://www.backyardstudioofficial.com/testimonials",
      "ar": "https://www.backyardstudioofficial.com/ar/testimonials",
      "ru": "https://www.backyardstudioofficial.com/ru/testimonials",
      "zh": "https://www.backyardstudioofficial.com/zh/testimonials",
      "x-default": "https://www.backyardstudioofficial.com/testimonials",
    },
  },
  openGraph: {
    title: "客户评价 | 4.9星 — Backyard Studio Official 迪拜",
    description: "超过127条真实评价，平均4.9/5星。来自迪拜房产商、品牌、新人的反馈。",
    url: "https://www.backyardstudioofficial.com/zh/testimonials",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "客户评价 — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "客户评价 — Backyard Studio Official 迪拜",
    description: "超过127条真实评价，平均4.9/5星。",
    images: ["/og-image.jpg"],
  },
};

const TESTIMONIALS = [
  {
    name: "Ahmed Al Mansouri",
    role: "房地产开发商，迪拜",
    text: "Backyard Studio为我们的豪华住宅项目制作了令人惊叹的视觉内容。交付迅速，品质超出预期。强烈推荐。",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "婚礼新娘，迪拜",
    text: "我的婚礼视频让全家人感动落泪。Fahad团队极其专业，整个过程非常顺畅。48小时收到集锦，太棒了！",
    rating: 5,
  },
  {
    name: "Marcus Weber",
    role: "品牌总监，全球零售品牌",
    text: "在迪拜我们合作了多家制作公司，Backyard Studio是其中最具创意、效率最高的团队。企业形象片一次过关。",
    rating: 5,
  },
  {
    name: "Fatima Al Rashid",
    role: "活动策划，迪拜",
    text: "我们的年度颁奖晚宴交给Backyard Studio拍摄，从多机位录制到当晚精剪集锦，完美执行，客户反响极佳。",
    rating: 5,
  },
  {
    name: "Liu Wei",
    role: "企业主，迪拜中资企业",
    text: "能用中文沟通非常方便，理解需求准确到位。拍摄的企业宣传片用于融资路演，效果很好。会继续合作。",
    rating: 5,
  },
  {
    name: "Rania Khalid",
    role: "时尚品牌创始人",
    text: "时装大片质量媲美国际顶级杂志。Fahad对光线的掌控令人叹服，每张图片都是艺术品。",
    rating: 5,
  },
];

export default function ZhTestimonialsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "客户评价", "item": "https://www.backyardstudioofficial.com/zh/testimonials" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.backyardstudioofficial.com/zh/#localbusiness",
        "name": "Backyard Studio Official",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "127", "bestRating": "5" },
        "review": TESTIMONIALS.map((t) => ({
          "@type": "Review",
          "author": { "@type": "Person", "name": t.name },
          "reviewBody": t.text,
          "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": "5" },
        })),
      }) }} />
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "'Noto Sans SC', sans-ser