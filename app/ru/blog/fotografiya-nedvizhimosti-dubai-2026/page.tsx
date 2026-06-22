import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Фотография недвижимости Дубай 2026 | Backyard",
  description:
    "Фотосъёмка недвижимости в Дубае от AED 1,500. Интерьеры, экстерьеры, аэросъёмка дроном (GCAA), видеотуры. Backyard Studio — доставка за 24 часа.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-nedvizhimosti-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/real-estate-photography-dubai-2026",
      ru: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-nedvizhimosti-dubai-2026",
    },
  },
  openGraph: {
    locale: "ru_RU",
    title: "Фотография недвижимости в Дубае 2026",
    description: "Профессиональная съёмка квартир, вилл и коммерческой недвижимости в Дубае. GCAA-дрон, видеотуры, доставка за 24 часа.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RealEstatePhotographyRuPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Сколько стоит фотосъёмка недвижимости в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Профессиональная фотосъёмка недвижимости в Дубае начинается от AED 1,500 за стандартную квартиру или апартаменты. Съёмка виллы или пентхауса — от AED 2,500. Пакеты с аэросъёмкой дроном, видеотуром и вечерней съёмкой — от AED 3,500 до AED 7,000. Мы предоставляем прозрачный расчёт стоимости в течение 2 часов после запроса.",
        },
      },
      {
        "@type": "Question",
        name: "Как быстро вы доставляете фотографии объекта?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Стандартный срок доставки обработанных фотографий — 24 часа после съёмки. Видеотур — 48 часов. Для срочных листингов доступна экспресс-доставка в течение 12 часов за дополнительную плату. Все материалы передаются через защищённую ссылку для скачивания.",
        },
      },
      {
        "@type": "Question",
        name: "Можно ли снимать дрон для объектов недвижимости в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, команда Backyard Studio имеет коммерческую лицензию GCAA для полётов по всему ОАЭ. Аэросъёмка резко повышает привлекательность листинга — особенно для вилл, пентхаусов и объектов с видом. Все полёты легальны, застрахованы и согласованы с соответствующими органами.",
        },
      },
      {
        "@type": "Question",
        name: "Какие типы объектов вы снимаете в Дубае?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Мы снимаем все типы недвижимости: квартиры, виллы, таунхаусы, пентхаусы, коммерческие офисы, торговые площади, отели и сервисные апартаменты, а также шоу-квартиры девелоперов для продажи объектов на стадии строительства.",
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
      { "@type": "ListItem", position: 3, name: "Фотография недвижимости в Дубае 2026", item: "https://www.backyardstudioofficial.com/ru/blog/fotografiya-nedvizhimosti-dubai-2026" },
    ],
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--black)", color: "var(--cream)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
            Backyard Studio Official · Дубай · ОАЭ
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "var(--cream)" }}>
            Фотография недвижимости в Дубае 2026
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
            Полное руководство по профессиональной фото и видеосъёмке недвижимости в Дубае — цены, что входит в пакеты, как подготовить объект и почему качество снимков напрямую влияет на скорость продажи и цену сделки.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "2rem", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&q=80" alt="Fotografiya Nedvizhimosti Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />
        </div>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            Почему качество фото недвижимости в Дубае так важно?
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            Рынок недвижимости Дубая — один из самых конкурентных в мире. Сотни похожих объектов борются за внимание покупателей и арендаторов в одном и том же ценовом диапазоне. В этих условиях первое впечатление от листинга формируется за 3–5 секунд — именно столько времени требуется потенциальному покупателю, чтобы решить, стоит ли читать дальше.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            Исследования показывают: объекты с профессиональными фотографиями продаются в среднем на 32% быстрее и на 11% дороже, чем аналогичные объекты со смартфонными снимками. В дубайском контексте, где речь может идти о сделках на AED 500,000–50,000,000+, вложение в качественную съёмку — это инвестиция с очевидной отдачей.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-6" style={{ color: "var(--gold)" }}>
            Что включает профессиональная съёмка недвижимости в Дубае?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Интерьерная фотография", desc: "Съёмка каждого помещения с правильным балансом естественного и искусственного света. Профессиональные углы, которые передают простор и пропорции." },
              { title: "Экстерьерная фотография", desc: "Фасад здания, вид с улицы, общие планы жилого комплекса — в оптимальное время дня для наилучшего освещения." },
              { title: "Вечерняя/сумеречная съёмка", desc: "Одна из самых эффективных техник для премиальных объектов — тёплый свет из окон на фоне синего неба создаёт незабываемое первое впечатление." },
              { title: "Аэросъёмка дроном (GCAA)", desc: "Вид сверху раскрывает расположение объекта, вид из окна, близость к морю или паркам — то, что невозможно показать с земли." },
              { title: "Видеотур", desc: "Плавный видео-обход объекта (60–90 секунд) для листингов, социальных сетей и рекламных кампаний." },
              { title: "Шоу-квартиры и off-plan", desc: "Специализированная съёмка модельных квартир и CGI-наложение для объектов, которые ещё строятся." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--gold)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-6" style={{ color: "var(--gold)" }}>
            Цены на съёмку недвижимости в Дубае — 2026
          </h2>
          <div className="space-y-4">
            {[
              { type: "Стандартная квартира / студия", price: "от AED 1,500", desc: "15–25 фото, полная обработка, доставка за 24 ч. До 1,500 кв. футов." },
              { type: "Вилла / таунхаус / пентхаус", price: "от AED 2,500", desc: "25–40 фото, фото экстерьера, доставка за 24 ч. Большие площади и несколько этажей." },
              { type: "Пакет с аэросъёмкой", price: "от AED 3,500", desc: "Фото интерьера + экстерьера + 5–8 аэроснимков дроном (GCAA). Для объектов с видом или расположенных в закрытых комплексах." },
              { type: "Полный пакет (фото + видео + дрон)", price: "от AED 5,000", desc: "Полный набор: фотографии, видеотур 60–90 секунд, аэросъёмка. Для листингов премиум-класса." },
              { type: "Вечерняя / сумеречная съёмка", price: "+ AED 800", desc: "Дополнительная сессия в сумерках для максимально эффектного визуального результата." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg flex-wrap" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <div style={{ minWidth: "130px" }}>
                  <p className="font-bold" style={{ color: "var(--gold)" }}>{item.price}</p>
                </div>
                <div className="flex-1">
                  <p className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{item.type}</p>
                  <p className="text-sm" style={{ color: "var(--silver)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            Как подготовить объект к профессиональной фотосъёмке?
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--silver)" }}>
            Правильная подготовка объекта повышает качество финального результата не меньше, чем профессиональное оборудование. Мы отправляем чек-лист всем клиентам перед съёмкой, но вот ключевые моменты:
          </p>
          <div className="space-y-3">
            {[
              "Уберите личные вещи, лишние предметы и всё, что загромождает пространство — меньше вещей визуально увеличивает площадь",
              "Включите весь свет: лампы, торшеры, подсветку кухонного гарнитура — тёплое освещение делает пространство уютнее",
              "Откройте шторы и жалюзи для максимального использования естественного света",
              "Уберите личные фотографии и предметы гигиены из ванных комнат",
              "Обеспечьте доступ к балкону или террасе — это часто лучший кадр в листинге",
              "Для вечерней съёмки — убедитесь, что все лампочки работают и не мигают",
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-3" style={{ color: "var(--silver)" }}>
                <span className="flex-shrink-0 font-bold" style={{ color: "var(--gold)" }}>{i + 1}.</span>
                <span className="text-sm leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-8" style={{ color: "var(--gold)" }}>Часто задаваемые вопросы</h2>
          <div className="space-y-6">
            {[
              { q: "Сколько стоит фотосъёмка недвижимости в Дубае?", a: "От AED 1,500 за стандартную квартиру до AED 7,000+ за полный пакет с дроном и видеотуром для виллы или пентхауса. Стоимость зависит от площади объекта, набора услуг и срочности." },
              { q: "Как быстро мы получим фотографии?", a: "Отредактированные фотографии — в течение 24 часов после съёмки. Видеотур — 48 часов. Экспресс-доставка за 12 часов доступна по запросу." },
              { q: "Вы снимаете объекты за пределами Дубая?", a: "Да, мы работаем по всем эмиратам ОАЭ — Абу-Даби, Шарджа, Рас-эль-Хайма, Фуджейра и другие. Стоимость выезда уточняйте при запросе." },
              { q: "Можно ли снять дрон в жилых комплексах Дубая?", a: "В большинстве случаев — да, при наличии нашей GCAA-лицензии и согласования с управляющей компанией комплекса. Мы берём на себя всю организацию. В некоторых закрытых комплексах могут требоваться дополнительные разрешения." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--cream)" }}>{faq.q}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center p-10 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>Заказать съёмку недвижимости в Дубае</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--silver)" }}>
            Укажите адрес объекта, площадь и желаемую дату — и мы вышлем точную стоимость в течение 2 часов, 7 дней в неделю.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ru/contact" className="inline-block px-8 py-4 rounded font-semibold" style={{ background: "var(--gold)", color: "#000" }}>
              Получить бесплатный расчёт
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
