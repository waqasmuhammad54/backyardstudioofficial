import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты | Backyard Studio Official Дубай — +971 58 588 2685",
  description: "Свяжитесь с Backyard Studio Official в Дубае. WhatsApp: +971 58 588 2685. Ответим в течение 2 часов, 7 дней в неделю. Работаем по всем ОАЭ.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/contact",
    languages: {
      "en": "https://www.backyardstudioofficial.com/contact",
      "ar": "https://www.backyardstudioofficial.com/ar/contact",
      "ru": "https://www.backyardstudioofficial.com/ru/contact",
      "zh": "https://www.backyardstudioofficial.com/zh/contact",
      "x-default": "https://www.backyardstudioofficial.com/contact",
    },
  },
  openGraph: {
    title: "Контакты — Backyard Studio Official Дубай",
    description: "WhatsApp: +971 58 588 2685. Ответ в течение 2 часов. Работаем по всем ОАЭ.",
    url: "https://www.backyardstudioofficial.com/ru/contact",
    siteName: "Backyard Studio Official",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Контакты — Backyard Studio Official Дубай" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Контакты — Backyard Studio Official Дубай",
    description: "WhatsApp +971 58 588 2685. Ответ 2 часа. Все ОАЭ.",
    images: ["/og-image.jpg"],
  },
};

const CONTACT_FAQS = [
  {
    q: "Как связаться с Backyard Studio в Дубае?",
    a: "Напишите нам в WhatsApp по номеру +971 58 588 2685 или отправьте письмо на info@backyardstudioofficial.com. Мы отвечаем в течение 2 часов, 7 дней в неделю.",
  },
  {
    q: "Как получить предложение по стоимости проекта?",
    a: "Опишите ваш проект в WhatsApp или по электронной почте — дату, локацию, тип съёмки и примерный бюджет. Мы пришлём подробное предложение в течение 2 часов.",
  },
  {
    q: "Работаете ли вы в других эмиратах помимо Дубая?",
    a: "Да. Мы работаем во всех 7 эмиратах ОАЭ: Дубай, Абу-Даби, Шарджа, Аджман, Рас-эль-Хайма, Фуджейра и Умм-эль-Кайвайн. Без дополнительной платы за выезд.",
  },
  {
    q: "Каковы сроки выполнения заказа?",
    a: "Хайлайт свадьбы — 48 часов. Корпоративное видео — 7–14 рабочих дней. Контент для соцсетей — 48–72 часа. Для срочных проектов уточняйте при заказе.",
  },
];

export default function RuContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://www.backyardstudioofficial.com/ru" },
          { "@type": "ListItem", "position": 2, "name": "Контакты", "item": "https://www.backyardstudioofficial.com/ru/contact" },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        "mainEntity": CONTACT_FAQS.map((f) => ({
          "@type": "Question", "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }) }} />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1rem" }}>
          Контакты
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto" }}>
          Отвечаем на все запросы в течение 2 часов, 7 дней в неделю.
        </p>
      </section>

      <section style={{ padding: "5rem 2rem", background: