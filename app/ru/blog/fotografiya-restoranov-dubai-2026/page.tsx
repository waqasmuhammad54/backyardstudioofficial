import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотосъёмка ресторанов и еды в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональная фуд-фотография и съёмка ресторанов в Дубае — меню, соцсети, рекламные кампании. Контент, который заставляет гостей бронировать столик. От AED 1 800.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-restoranov-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-restoranov-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/food-photography-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотосъёмка ресторанов и еды в Дубае 2026",
    description: "Профессиональная фуд-фотография для ресторанов и кафе в Дубае — меню, соцсети, рекламный контент.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function FoodPhotoRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фуд-фотография для ресторана в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Фуд-фотография для ресторана в Дубае начинается от AED 1 800 за 3-часовую сессию (до 20 блюд). Полный пакет съёмки меню с 60+ блюдами, интерьером и атмосферными кадрами — от AED 5 500.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы для Instagram и TikTok ресторанов в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — создаём контент, специально адаптированный под Instagram и TikTok: вертикальные Reels с едой, Boomerang-форматы, flat-lay для ленты, видео-контент с процессом приготовления. Всё с учётом текущих алгоритмов.",
        },
      },
      {
        "@type": "Question",
        name: "Нужно ли заранее готовить блюда?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — мы рекомендуем согласовать меню за 2–3 дня. Ваши повара готовят блюда для съёмки, мы приносим реквизит, пропсы и свет. Идеально начинать съёмку утром, до открытия — так нет помех от гостей.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы интерьер ресторана?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да — фотосъёмка ресторана часто включает интерьерные кадры: пустой зал при красивом свете, детали декора, бар, вид из окна. Это создаёт полную визуальную историю заведения для сайта и соцсетей.",
        },
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Фотосъёмка ресторанов и еды в Дубае 2026",
    author: { "@type": "Person", name: "Fahad Iqbal Butt", jobTitle: "Творческий директор — Backyard Studio Official" },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
    datePublished: "2026-06-19",
    dateModified: "2026-06-19",
    inLanguage: "ru",
    url: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-restoranov-dubai-2026",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>
          {" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>
          {" / "}
          <span>Фуд-фотография в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          ФУД-ФОТОГРАФИЯ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотосъёмка ресторанов и еды в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Контент, который заставляет бронировать столик</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>19 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "3rem", overflow: "hidden", position: "relative" }}>
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Food Photography Dubai 2026" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
        </div>

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          В Дубае тысячи ресторанов и кафе — и решение, куда идти, люди принимают по Instagram. Размытые
          телефонные фото отпугивают гостей, а качественная фуд-фотография заставляет листать меню снова
          и снова, а потом звонить и бронировать.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          Мы снимаем рестораны, кафе, бейкери, кофейни, cloud kitchen и концепты уличной еды по всему
          Дубаю. Наш подход — создать контент, который работает не только красиво, но и как маркетинговый
          инструмент: побуждает к действию.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что мы снимаем для вашего ресторана
        </h2>

        {[
          { title: "Съёмка меню", detail: "Каждое блюдо в лучшем свете — для печатного меню, PDF-меню, QR-меню и сайта." },
          { title: "Контент для Instagram и TikTok", detail: "Reels, Stories, flat-lay, видео с процессом — контент-план на месяц за один съёмочный день." },
          { title: "Атмосферные кадры", detail: "Живые сцены с гостями за столом, руки над тарелкой, реакция — передаём атмосферу заведения." },
          { title: "Интерьер и пространство", detail: "Пустой зал при красивом свете, детали декора, вход, бар — для Google и TripAdvisor." },
        ].map(({ title, detail }) => (
          <div key={title} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, color: "var(--cream)", marginBottom: "0.3rem" }}>{title}</div>
            <div style={{ fontSize: "0.9rem", color: "rgba(245,240,225,0.65)" }}>{detail}</div>
          </div>
        ))}

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1.5rem", marginTop: "3rem" }}>
          Пакеты фуд-фотографии для ресторанов в Дубае
        </h2>
        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Мини-меню", detail: "3 часа / до 20 блюд / только фото", price: "от AED 1 800" },
            { pkg: "Полное меню", detail: "6 часов / до 50 блюд + интерьер", price: "от AED 3 500" },
            { pkg: "Запуск ресторана", detail: "Полный день / 80+ блюд + видео + соцсети", price: "от AED 6 500" },
            { pkg: "Ежемесячный контент", detail: "4 часа каждый месяц / свежий контент регулярно", price: "от AED 2 800 / мес" },
          ].map(({ pkg, detail, price }) => (
            <div key={pkg} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "0.75rem 0", borderBottom: "1px solid rgba(212,175,55,0.08)" }}>
              <div>
                <div style={{ fontWeight: 700, color: "var(--cream)", fontSize: "0.95rem" }}>{pkg}</div>
                <div style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.5)", marginTop: "0.2rem" }}>{detail}</div>
              </div>
              <div style={{ color: "var(--gold)", fontWeight: 700, whiteSpace: "nowrap", marginLeft: "1rem" }}>{price}</div>
            </div>
          ))}
        </div>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Заказать фуд-фотографа в Дубае</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Напишите нам — обсудим меню, формат и дату. Ответим в течение 2 часов.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
