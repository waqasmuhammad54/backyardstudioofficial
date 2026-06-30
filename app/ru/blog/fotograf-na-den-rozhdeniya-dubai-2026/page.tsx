import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотограф на день рождения в Дубае 2026 | Backyard Studio",
  description:
    "Профессиональный фотограф на день рождения в Дубае от AED 800. Дети и взрослые, домашние вечеринки и залы, сдача за 48 часов.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotograf-na-den-rozhdeniya-dubai-2026",
    languages: {
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotograf-na-den-rozhdeniya-dubai-2026",
      en: "https://www.backyardstudioofficial.com/blog/birthday-photographer-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотограф на день рождения в Дубае 2026 | Backyard Studio",
    description: "День рождения в Дубае — в кадре каждый важный момент. От AED 800.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function BirthdayPhotographerRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотограф на день рождения в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Съёмка дня рождения в Дубае начинается от AED 800 за 2 часа (50 обработанных снимков). Расширенная съёмка 3 часа с Reel — AED 1 300. Полный день — от AED 2 200.",
        },
      },
      {
        "@type": "Question",
        name: "Снимаете ли вы дни рождения и детей, и взрослых?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, снимаем дни рождения для всех возрастов. Для детей у нас есть фотографы с опытом работы с детьми. Для взрослых — фокус на документальный стиль, живые эмоции, детали декора и важные моменты вечера.",
        },
      },
      {
        "@type": "Question",
        name: "Какой минимальный срок съёмки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Рекомендуем минимум 2 часа для полноценного покрытия: приход гостей, декор, торт, свечи, игры, семейные снимки. Для большой вечеринки — от 3 часов.",
        },
      },
      {
        "@type": "Question",
        name: "Можно добавить портретную сессию именинника?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Конечно — многие клиенты заказывают портретную мини-сессию за час до начала праздника, пока именинник ещё в идеальном виде и не устал от гостей. Добавляем это к пакету без проблем.",
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article style={{ fontFamily: "Inter, sans-serif", maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem", color: "var(--cream)", lineHeight: "1.85" }}>
        <nav style={{ fontSize: "0.8rem", color: "rgba(245,240,225,0.45)", marginBottom: "2rem" }}>
          <a href="/ru" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Главная</a>{" / "}
          <a href="/ru/blog" style={{ color: "rgba(245,240,225,0.45)", textDecoration: "none" }}>Блог</a>{" / "}
          <span>Фотограф на день рождения в Дубае</span>
        </nav>

        <span style={{ display: "inline-block", background: "rgba(212,175,55,0.15)", color: "var(--gold)", padding: "0.3rem 0.9rem", borderRadius: "2px", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", marginBottom: "1.5rem" }}>
          СЪЁМКА ПРАЗДНИКОВ
        </span>

        <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", lineHeight: 1.25, marginBottom: "1rem" }}>
          Фотограф на день рождения в Дубае 2026
          <br />
          <span style={{ color: "var(--gold)" }}>Каждый важный момент — в кадре</span>
        </h1>

        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "rgba(245,240,225,0.5)", marginBottom: "3rem", flexWrap: "wrap" }}>
          <span>Автор: Фахад Икбал Батт</span>
          <span>22 июня 2026</span>
          <span>6 минут чтения</span>
        </div>

        <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80" alt="Birthday Photographer Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />

        <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          День рождения пролетает в мгновение. Смех, удивлённые лица, задутые свечи, объятия —
          всё это случается быстро и исчезает ещё быстрее. Профессиональный фотограф на вечеринке
          — это человек, который успевает поймать всё, пока вы просто наслаждаетесь праздником.
        </p>

        <p style={{ marginBottom: "2.5rem" }}>
          В Backyard Studio мы снимаем дни рождения в Дубае в документальном стиле: никаких
          остановок для постановочных снимков, только живые эмоции и настоящие моменты.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что мы снимаем?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Декор и детали до прихода гостей, первые реакции при входе, разговоры и смех,
          торт и задувание свечей, подарки, танцы, и финальные семейные снимки. Каждый
          элемент вечеринки — часть истории.
        </p>
        <p style={{ marginBottom: "2.5rem" }}>
          По желанию — постановочные групповые снимки в середине или конце вечеринки, когда
          все в сборе. Делаем это быстро и без лишней суеты, чтобы не прерывать атмосферу.
        </p>

        <div style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.15)", borderRadius: "4px", padding: "1.5rem 2rem", marginBottom: "2rem" }}>
          {[
            { pkg: "Базовое покрытие", detail: "2 часа / 50 снимков", price: "от AED 800" },
            { pkg: "Расширенное", detail: "3 часа / 80 снимков + Reel", price: "от AED 1 300" },
            { pkg: "Полный день", detail: "6 часов / 150+ снимков + видео", price: "от AED 2 200" },
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

        
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Что входит в съёмку дня рождения?
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Наш базовый пакет съёмки дня рождения включает: профессионального фотографа на 
          3–4 часа, репортажные фотографии праздника (торт, гости, именинник), постановочные 
          портреты, обработку и ретушь 80–120 финальных фотографий, онлайн-галерею с 
          приватным доступом. Видео-пакет включает монтаж 3–5 минутного праздничного клипа.
        </p>
        <p style={{ marginBottom: "1.2rem" }}>
          Детские дни рождения, тематические вечеринки, юбилеи и корпоративные праздники — 
          мы работаем с торжествами всех форматов. Команда умеет работать незаметно и при 
          этом не пропускать ключевые моменты. Специальные знания о детской съёмке: как 
          получить искренние улыбки, как работать с быстрыми движениями и как подобрать 
          нужную выдержку в помещении с праздничным освещением.
        </p>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gold)", marginBottom: "1rem", marginTop: "3rem" }}>
          Лучшие площадки для вечеринок в Дубае
        </h2>
        <p style={{ marginBottom: "1.2rem" }}>
          Дубай предлагает широкий выбор: роoftop-террасы с видом на Бурдж Халифа, частные 
          вилы на Пальме, ресторанные залы в DIFC, отельные банкетные залы Jumeirah и 
          Atlantis, а также тематические детские игровые пространства. Мы работаем во всех 
          форматах и знаем, как адаптировать свет и технику под каждую площадку — от тёмных 
          ресторанов до ярких открытых террас.
        </p>

        <div style={{ background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", padding: "2rem", marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "var(--gold)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Заказать фотографа на день рождения</p>
          <p style={{ color: "rgba(245,240,225,0.7)", marginBottom: "1rem", fontSize: "0.9rem" }}>Укажите дату и место — подтвердим бронирование быстро.</p>
          <a href="https://wa.me/971585882685" style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.75rem 2rem", borderRadius: "2px", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
            WhatsApp +971 58 588 2685
          </a>
        </div>
      </article>
    </>
  );
}
