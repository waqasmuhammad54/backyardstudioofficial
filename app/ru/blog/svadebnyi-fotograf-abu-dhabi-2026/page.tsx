import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Свадебный фотограф Абу-Даби 2026 | Backyard Studio",
  description:
    "Свадебная съёмка в Абу-Даби от AED 4,000. Emirates Palace, Yas Island, Saadiyat. GCAA-дрон. Backyard Studio — ответ за 2 часа, съёмка по всем 7 эмиратам.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-abu-dhabi-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/wedding-videography-abu-dhabi-2026",
      ru: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-abu-dhabi-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Свадебный фотограф в Абу-Даби 2026",
    description: "Профессиональная свадебная съёмка в Абу-Даби — Emirates Palace, Yas Island, Saadiyat Island. Цены, пакеты, дроны.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function WeddingPhotographerAbuDhabiRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит свадебная съёмка в Абу-Даби?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Свадебная съёмка в Абу-Даби начинается от AED 4,000 за базовый пакет с одним видеографом на полный день и кинематографическим клипом 3–5 минут. Премиум-пакеты с двумя видеографами, дроном (GCAA-лицензия), полнометражным фильмом и экспресс-монтажем стоят от AED 9,000 до AED 18,000. Съёмка для роскошных площадок — Emirates Palace, Qasr Al Watan — от AED 15,000.",
        },
      },
      {
        "@type": "Question",
        name: "Работает ли Backyard Studio в Абу-Даби?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, Backyard Studio Official ведёт съёмку по всем 7 эмиратам ОАЭ, включая Абу-Даби. Мы снимали свадьбы в Emirates Palace, Jumeirah at Saadiyat Island, St. Regis Saadiyat, Yas Viceroy, Al Raha Beach Hotel и других ведущих отелях столицы. Дорога до Абу-Даби включена в стоимость пакетов.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро мы получим свадебный клип после съёмки в Абу-Даби?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Тизер 1–2 минуты для публикации в соцсетях мы передаём в течение 48 часов после свадьбы. Полный кинематографический клип (4–8 минут) — в течение 3–4 недель. Полная запись церемонии и банкета — в течение 6 недель. Экспресс-доставка доступна по запросу.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снимать дрон на свадьбе в Абу-Даби?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, аэросъёмка выполняется по коммерческой лицензии GCAA на управление дронами по всей территории ОАЭ, включая Абу-Даби. Аэросъёмка Emirates Palace или пляжей Yas Island добавляет эффектный визуальный план, недостижимый с земли. Все полёты полностью легальны и застрахованы.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Главная", item: "https://www.backyardstudioofficial.com/ru" },
      { "@type": "ListItem", position: 2, name: "Блог", item: "https://www.backyardstudioofficial.com/ru/blog" },
      { "@type": "ListItem", position: 3, name: "Свадебный фотограф в Абу-Даби 2026", item: "https://www.backyardstudioofficial.com/ru/blog/svadebnyi-fotograf-abu-dhabi-2026" },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--black)", color: "var(--cream)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
            Backyard Studio Official · Абу-Даби · ОАЭ
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "var(--cream)" }}>
            Свадебный фотограф в Абу-Даби 2026
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
            Профессиональная свадебная фото и видеосъёмка в Абу-Даби — от Emirates Palace до Saadiyat Island. Цены, пакеты, лучшие площадки и всё, что нужно знать перед бронированием.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "2rem", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80" alt="Svadebnyi Fotograf Abu Dhabi 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />
        </div>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            Чем свадьба в Абу-Даби отличается от свадьбы в Дубае?
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            Абу-Даби — столица ОАЭ — отличается своим особым характером. Здесь меньше туристической суеты и больше архитектурного величия. Emirates Palace, Qasr Al Watan, St. Regis Saadiyat — эти площадки создают визуальный масштаб, который просто не с чем сравнить. Именно поэтому свадьбы в Абу-Даби требуют фотографов и видеографов с реальным опытом съёмки на местных площадках.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            Команда Backyard Studio снимала свадьбы в Абу-Даби с 2022 года. Мы знаем особенности освещения в Emirates Palace, понимаем логистику работы с координаторами местных отелей и умеем позиционировать камеры так, чтобы передать весь масштаб этих потрясающих пространств.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-6" style={{ color: "var(--gold)" }}>
            Лучшие свадебные площадки в Абу-Даби для фото и видео
          </h2>
          <div className="space-y-4">
            {[
              { name: "Emirates Palace", desc: "Самая снимаемая свадебная площадка в ОАЭ. Золотые детали, огромные люстры и вид на Персидский залив создают кинематографическую картинку без лишних усилий." },
              { name: "Saadiyat Island (Jumeirah & St. Regis)", desc: "Более камерная современная роскошь. Выход к пляжу, белая архитектура и закаты над морем — идеально для пар, предпочитающих лёгкую элегантность." },
              { name: "Yas Island (Viceroy, W Abu Dhabi)", desc: "Футуристическая эстетика и вид на трассу Формулы-1. Подходит для современных пар, которым важен уникальный и нестандартный образ." },
              { name: "Al Raha Beach Hotel", desc: "Прекрасный выбор для вечерних церемоний у воды. Тихая атмосфера, красивые отражения в закатном свете." },
              { name: "Fairmont Bab Al Bahr", desc: "Вид на Sheikh Zayed Grand Mosque — один из самых узнаваемых фонов в ОАЭ для свадебной съёмки." },
            ].map((venue, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.18)" }}>
                <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--gold)" }}>{venue.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{venue.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-6" style={{ color: "var(--gold)" }}>
            Пакеты и цены — свадебная съёмка в Абу-Даби 2026
          </h2>
          <div className="space-y-4">
            {[
              { name: "Базовый пакет", price: "от AED 4,000", includes: ["1 видеограф, полный день (10–12 ч)", "Кинематографический клип 3–5 минут", "Доставка материала в течение 5 рабочих дней", "Дорога Дубай–Абу-Даби включена"] },
              { name: "Популярный пакет", price: "от AED 9,000 – 12,000", includes: ["2 видеографа, полный день", "GCAA-дрон (аэросъёмка)", "Клип 6–8 минут + запись церемонии", "Тизер в течение 48 часов", "USB-бокс в подарок"] },
              { name: "Премиум (Emirates Palace и аналоги)", price: "от AED 15,000", includes: ["3 оператора + режиссёр", "Аэросъёмка + студийная техника Cinema grade", "Полнометражный фильм + highlight + соцсети-версии", "Профессиональный цветокор и саунд-дизайн"] },
            ].map((pkg, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.2)" }}>
                <div className="flex justify-between items-start flex-wrap gap-2 mb-4">
                  <h3 className="font-semibold text-xl" style={{ color: "var(--cream)" }}>{pkg.name}</h3>
                  <span className="font-bold text-xl" style={{ color: "var(--gold)" }}>{pkg.price}</span>
                </div>
                <ul className="space-y-2">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--silver)" }}>
                      <span style={{ color: "var(--gold)" }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-8" style={{ color: "var(--gold)" }}>Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {[
              { q: "Сколько стоит свадебная съёмка в Абу-Даби?", a: "От AED 4,000 за базовый пакет до AED 18,000+ за полный премиум с дроном, двумя операторами и полнометражным фильмом. Съёмка на Emirates Palace — от AED 15,000." },
              { q: "Вы работаете за пределами Дубая — в Абу-Даби и других эмиратах?", a: "Да, мы снимаем по всем 7 эмиратам ОАЭ. Дорога до Абу-Даби, Шарджи, Рас-эль-Хаймы и других эмиратов включена в стоимость большинства наших пакетов." },
              { q: "Когда лучше бронировать фотографа на свадьбу в Абу-Даби?", a: "На свадебный сезон (октябрь–март) рекомендуем бронировать за 6–12 месяцев, особенно на выходные дни. Для будних дней и несезонных месяцев обычно достаточно 2–3 месяцев." },
              { q: "Можно ли снимать дрон в Emirates Palace?", a: "Да, с действующей GCAA-лицензией на полёт и предварительным согласованием с менеджментом площадки. Мы берём на себя всю координацию с отелем — вам не нужно этим заниматься самостоятельно." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--cream)" }}>{faq.q}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center p-10 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>Забронировать свадебную съёмку в Абу-Даби</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--silver)" }}>
            Свяжитесь с нами сегодня — укажите дату, площадку и примерное количество гостей, и мы вышлем персональное предложение в течение 2 часов.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ru/contact" className="inline-block px-8 py-4 rounded font-semibold" style={{ background: "var(--gold)", color: "#000" }}>
              Получить бесплатную консультацию
            </a>
            <a href="https://wa.me/971585882685" className="inline-block px-8 py-4 rounded font-semibold border" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
              WhatsApp: +971 58 588 2685
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
