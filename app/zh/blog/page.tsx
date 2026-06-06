import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "博客 | 迪拜摄影摄像干货 2026 — Backyard Studio Official",
  description: "迪拜及阿联酋摄影摄像行业资讯、拍摄攻略与价格指南2026——婚礼摄影费用、企业视频制作、无人机航拍规定。中文专业内容，助您深入了解迪拜创意制作行业。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/blog",
    languages: {
      "en": "https://www.backyardstudioofficial.com/blog",
      "ar": "https://www.backyardstudioofficial.com/ar/blog",
      "ru": "https://www.backyardstudioofficial.com/ru/blog",
      "zh": "https://www.backyardstudioofficial.com/zh/blog",
      "x-default": "https://www.backyardstudioofficial.com/blog",
    },
  },
  openGraph: {
    title: "博客 | 迪拜摄影摄像干货 2026",
    description: "中文摄影摄像资讯：婚礼、企业视频、无人机航拍、价格指南。",
    url: "https://www.backyardstudioofficial.com/zh/blog",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio 博客 — 迪拜" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "博客 — 迪拜摄影摄像干货 2026",
    description: "中文摄影摄像资讯：婚礼、企业视频、无人机。",
    images: ["/og-image.jpg"],
  },
};

const BLOG_POSTS_ZH = [
  {
    slug: "hunli-sheying-dubai-2026",
    title: "2026年迪拜婚礼摄影完全指南：价格、地点与注意事项",
    excerpt: "在迪拜举办婚礼？本文为您详解婚礼摄影摄像费用（AED 3,500起）、最佳拍摄地点及如何选择专业团队。",
    date: "2026年5月",
    readTime: "8分钟",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业视频制作：如何用影片提升品牌价值",
    excerpt: "一支专业企业影片能带来多大回报？我们分析了迪拜市场上100+企业视频案例，总结出最有效的制作策略。",
    date: "2026年4月",
    readTime: "6分钟",
  },
  {
    slug: "wurenji-hangpai-dubai-2026",
    title: "迪拜无人机航拍：GCAA法规、费用与最佳拍摄地点",
    excerpt: "在阿联酋进行无人机拍摄必须了解GCAA法规。本文为您梳理合法航拍要求、常见违规风险及专业航拍费用。",
    date: "2026年3月",
    readTime: "7分钟",
  },
  {
    slug: "shejiao-meiti-neirong-dubai-2026",
    title: "迪拜社交媒体短视频制作2026：Reels与TikTok拍摄指南",
    excerpt: "Instagram Reels、TikTok、小红书内容一站式制作——迪拜场景拍摄、专业剪辑、双语字幕。AED 1,800起，支持华人博主与品牌。",
    date: "2026年6月",
    readTime: "7分钟",
  },
  {
    slug: "fangchan-paizhao-dubai-2026",
    title: "迪拜房产摄影2026：价格、套餐与拍摄攻略",
    excerpt: "从Marina公寓到Palm Jumeirah豪宅——专业房产摄影AED 2,500起，GCAA认证无人机航拍，48小时交付，提升房源点击率118%。",
    date: "2026年6月",
    readTime: "7分钟",
  },
  {
    slug: "qiye-shipin-dubai-2026",
    title: "迪拜企业视频制作2026：品牌影片、宣传片与客户证言",
    excerpt: "Backyard Studio为迪拜100+品牌制作企业影片——AED 8,000起，支持中英双语版本，2-4周交付，提升网站转化率80%。",
    date: "2026年6月",
    readTime: "8分钟",
  },
  {
    slug: "huodong-paizhao-dubai-2026",
    title: "迪拜活动摄影2026：企业年会、展会与发布会拍摄",
    excerpt: "DWTC、Madinat Jumeirah、Atlantis常驻拍摄团队——活动摄影AED 2,500起，精选集锦当天交付，覆盖GITEX等大型展会。",
    date: "2026年6月",
    readTime: "6分钟",
  },
  {
    slug: "meishi-paizhao-dubai-2026",
    title: "迪拜美食摄影2026：餐厅菜单与外卖平台拍摄指南",
    excerpt: "�