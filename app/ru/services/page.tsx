import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Услуги видеосъёмки в Дубае | Цены от 2 000 AED — Backyard Studio Official",
  description: "Полный спектр услуг видеопроизводства в Дубае и ОАЭ: корпоративное видео от 15 000 AED, свадебная съёмка от 3 500 AED, мероприятия, аэросъёмка дроном GCAA, контент для соцсетей.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/services",
    languages: {
      "en": "https://www.backyardstudioofficial.com/services",
      "ar": "https://www.backyardstudioofficial.com/ar/services",
      "ru": "https://www.backyardstudioofficial.com/ru/services",
      "zh": "https://www.backyardstudioofficial.com/zh/services",
      "x-default": "https://www.backyardstudioofficial.com/services",
    },
  },
  openGraph: {
    title: "Услуги видеосъёмки в Дубае — Backyard Studio Official",
    description: "Корпоративное видео, свадьбы, мероприятия, аэросъёмка GCAA, контент для соцсетей. Цены от 2 000 AED.",
    url: "https://www.backyardstudioofficial.com/ru/services",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Услуги видеосъёмки — Backyard Studio Official Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Услуги видеосъёмки в Дубае — Backyard Studio Official",
    description: "Корпоративное видео·свадьбы·аэросъёмка GCAA. Цены от 2 000 AED.",
    images: ["/og-image.jpg"],
  },
};

const SERVICES = [
  { icon: "🎬", title: "Корпоративное видео", desc: "Корпоративные фильмы, бренд-документалки, ролики для инвесторов и рекламные видео. Профессиональная команда, кинематографическое качество.", price: "от 15 000 AED" },
  { icon: "💍", title: "Свадебная съёмка", desc: "Кинематографическая фото и видеосъёмка свадеб любого формата — арабских, индийских, русских, международных. Хайлайт в течение 48 часов.", price: "от 3 500 AED" },
  { icon: "🎉", title: "Съёмка мероприятий", desc: "Конференции, гала-вечера, презентации, корпоративные события — полная профессиональная видеопокрытие по всем эмиратам ОАЭ.", price: "от 3 500 AED" },
  { icon: "🚁", title: "Аэросъёмка дроном", desc: "Кинематографическая аэросъёмка с лицензией GCAA для недвижимости, мероприятий, рекламы и туризма в ОАЭ.", price: "от 2 000 AED" },
  { icon: "📱", title: "Контент для соцсетей", desc: "Instagram Reels, TikTok, YouTube Shorts — контент, заточенный под алгоритмы платформ и реальный охват.", price: "от 2 500 AED" },
  { icon: "🛍️", title: "Предметная и фэшн-съёмка", desc: "Профессиональная фотосъёмка товаров и одежды для e-commerce, каталогов и соцсетей.", price: "от 150 AED / товар" },
  { icon: "🏢", title: "Съёмка недвижимости", desc: "Фото и видео для жилой и коммерческой недвижимости в Дубае — интерьер, экстерьер, аэросъёмка для крупных объектов.", price: "от 1 500 AED" },
  { icon: "🍽️", title: "Фудфотография", desc: "Профессиональная съёмка блюд и интерьеров для ресторанов и отелей — меню, соцсети, рекламные кампании.", price: "от 1 200 AED" },
];

const SERVICES_FAQS = [
  {
    q: "Какие услуги видеопроизводства предлагает Backyard Studio в Дубае?",
    a: "Мы предлагаем полный спектр услуг: корпоративное видео, свадебная съёмка, съёмка мероприятий, аэросъёмка дроном (лицензия GCAA), контент для соцсетей, фотосъёмка недвижимости, фудфотография и предметная съёмка. Более 2,400 проектов по всем ОАЭ.",
  },
  {
    q: "Сколько стоит корпоративное видео в Дубае?",
    a: "Корпоративное видео в Дубае начинается от 15 000 AED. Стоимость зависит от хронометража, локаций и сложно