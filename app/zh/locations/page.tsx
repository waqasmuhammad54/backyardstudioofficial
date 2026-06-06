import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务地区 | 阿联酋七大酋长国全覆盖 — Backyard Studio Official",
  description: "Backyard Studio Official服务覆盖阿联酋全境七个酋长国：迪拜、阿布扎比、沙迦、阿治曼、哈伊马角、富吉拉、乌姆盖万。无额外差旅费，48小时上门服务。",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/zh/locations",
    languages: {
      "en": "https://www.backyardstudioofficial.com/locations",
      "ar": "https://www.backyardstudioofficial.com/ar/locations",
      "ru": "https://www.backyardstudioofficial.com/ru/locations",
      "zh": "https://www.backyardstudioofficial.com/zh/locations",
      "x-default": "https://www.backyardstudioofficial.com/locations",
    },
  },
  openGraph: {
    title: "服务地区 | 阿联酋七大酋长国 — Backyard Studio Official",
    description: "迪拜、阿布扎比及阿联酋全境摄影摄像服务。48小时上门，无额外差旅费。",
    url: "https://www.backyardstudioofficial.com/zh/locations",
    siteName: "Backyard Studio Official",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "阿联酋摄影摄像服务地区 — Backyard Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "服务地区 — 阿联酋七大酋长国",
    description: "迪拜·阿布扎比·沙迦及全境。48小时上门服务。",
    images: ["/og-image.jpg"],
  },
};

const LOCATIONS = [
  {
    city: "迪拜",
    en: "Dubai",
    desc: "总部所在地。服务区域涵盖迪拜商湾、迪拜码头、棕榈岛、老城区、迪拜溪港、迪拜市中心等所有区域。",
    icon: "🏙️",
  },
  {
    city: "阿布扎比",
    en: "Abu Dhabi",
    desc: "覆盖阿布扎比岛、萨迪亚特岛、亚斯岛、阿布扎比CBD及阿布扎比机场区域。",
    icon: "🕌",
  },
  {
    city: "沙迦",
    en: "Sharjah",
    desc: "沙迦全境摄影摄像服务，包括沙迦海滨、布海拉湖、沙迦文化广场等标志地点。",
    icon: "🌊",
  },
  {
    city: "阿治曼",
    en: "Ajman",
    desc: "阿治曼海滨、阿治曼商业区及周边区域专业拍摄服务。",
    icon: "⛵",
  },
  {
    city: "哈伊马角",
    en: "Ras Al Khaimah",
    desc: "哈伊马角山地、海滩及度假村摄影摄像，无人机航拍一览壮阔山海。",
    icon: "⛰️",
  },
  {
    city: "富吉拉",
    en: "Fujairah",
    desc: "东海岸海滩、富吉拉堡、瓦迪活动摄影全覆盖。",
    icon: "🏖️",
  },
  {
    city: "乌姆盖万",
    en: "Umm Al Quwain",
    desc: "乌姆盖万滨海区域及周边摄影摄像服务。",
    icon: "🌅",
  },
];

export default function ZhLocationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "首页", "item": "https://www.backyardstudioofficial.com/zh" },
          { "@type": "ListItem", "position": 2, "name": "服务地区", "item": "https://www.backyardstudioofficial.com/zh/locations" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "ItemList",
        "name": "阿联酋摄影摄像服务地区 — Backyard Studio Official",
        "itemListElement": LOCATIONS.map((loc, i) => ({
          "@type": "ListItem", "position": i + 1,
          "name": `${loc.city} (${loc.en})`,
          "url": `https://www.backyardstudioofficial.com/locations/${loc.en.toLowerCase().replace(/ /g, "-")}`,
        })),
      }) }} />
      <section style={{ background: "#111", padding: "4rem 