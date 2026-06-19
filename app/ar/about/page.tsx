import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
  description: "تعرّف على استوديو باكيارد أوفيشيال — شركة الإنتاج الإبداعي الرائدة في دبي. تأسست عام 2019 على يد فهد إقبال بط وسيد مظهر زيدي. أكثر من 2,400 مشروع ورخصة GCAA.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/about",
    languages: {
      "en": "https://www.backyardstudioofficial.com/about",
      "ar": "https://www.backyardstudioofficial.com/ar/about",
      "ru": "https://www.backyardstudioofficial.com/ru/about",
      "zh": "https://www.backyardstudioofficial.com/zh/about",
      "x-default": "https://www.backyardstudioofficial.com/about",
    },
  },
  openGraph: {
    title: "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
    description: "شركة الإنتاج الإبداعي الرائدة في دبي. تأسست 2019. أكثر من 2,400 مشروع، رخصة GCAA، فريق بخبرة 20+ عاماً.",
    url: "https://www.backyardstudioofficial.com/ar/about",
    siteName: "باكيارد ستوديو أوفيشيال",
    locale: "ar_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "فريق باكيارد ستوديو أوفيشيال — دبي" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عن باكيارد ستوديو أوفيشيال — دبي",
    description: "تأسست 2019 على يد فهد إقبال بط. أكثر من 2,400 مشروع. رخصة GCAA.",
    images: ["/og-image.jpg"],
  },
};

export default function ArAboutPage() {
  return (
    <>
      {/* BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "الرئيسية", "item": "https://www.backyardstudioofficial.com/ar" },
              { "@type": "ListItem", "position": 2, "name": "عن الاستوديو", "item": "https://www.backyardstudioofficial.com/ar/about" },
            ],
          }),
        }}
      />
      {/* Person schemas — Fahad & Syed */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.backyardstudioofficial.com/ar/about#fahad",
              "name": "فهد إقبال بط",
              "alternateName": "Fahad Iqbal Butt",
              "jobTitle": "المدير الإبداعي ومؤسس الاستوديو",
              "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
              "description": "مخرج سينمائي ومصور أزياء، خريج كلية الفنون الوطنية — لاهور. مؤسس باكيارد ستوديو أوفيشيال عام 2019.",
              "url": "https://www.backyardstudioofficial.com/ar/about",
            },
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "@id": "https://www.backyardstudioofficial.com/ar/about#syed",
              "name": "سيد مظهر زيدي",
              "alternateName": "Syed Mazhar Zaidi",
              "jobTitle": "مدير التصوير ورئيس ما بعد الإنتاج",
              "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
              "description": "مخرج سينمائي ومصور وثائقي بخبرة 20+ عاماً. ماجستير في الاتصال الجماهيري. أكثر من 50 كليب وإعلان ووثائقي.",
              "sameAs": ["https://www.imdb.com/name/nm14029494/"],
              "url": "https://www.backyardstudioofficial.com/ar/about",
            },
          ]),
        }}
      />

      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "1rem" }}>
          عن استوديو باكيارد أوفيشيال
        </h1>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "1rem" }}>دبي، الإمارات العربية المتحدة — منذ 2019</p>
      </section>

      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>قصتنا</h2>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            تأسس استوديو باكيارد أوفيشيال عام 2019 في لاهور، باكستان، على يد <strong style={{color:"var(--cream)"}}>فهد إقبال بط</strong>،
            المخرج السينمائي ومصور الأزياء الذي درس الفيلم والتلفزيون في الكلية الوطنية للفنون. انتقلنا إلى دبي عام 2023، ومنذ ذلك الحين أصبحنا واحدة من أبرز شركات الإنتاج الإبداعي في الإمارات.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.5rem" }}>
            يترأس فريق ما بعد الإنتاج لدينا <strong style={{color:"var(--cream)"}}>سيد مظهر زيدي</strong>،
            المخرج السينمائي والمصور الوثائقي بخبرة تتجاوز 20 عاماً. حاصل على الماجستير في الاتصال الجماهيري من جامعة GC، وأنجز أكثر من 50 مقطع موسيقي وإعلاناً تجارياً وفيلماً وثائقياً.
            يمكنك الاطلاع على ملفه في IMDB:{" "}
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)" }}>nm14029494</a>.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "1rem" }}>
            أنجزنا حتى اليوم أكثر من <strong style={{color:"var(--cream)"}}>2,400 مشروع</strong> عبر جميع إمارات الدولة السبع.
            نحمل رخصة <strong style={{color:"var(--cream)"}}>GCAA</strong> للتصوير الجوي التجاري، ونلتزم بمعايير الإنتاج السينمائي العالمية في كل مشروع.
          </p>
        </div>
      </section>

      {/* Founders detail */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "2.5rem", textAlign: "center" }}>فريق القيادة</h2>

          <div style={{ marginBottom: "3rem", borderRight: "3px solid var(--gold)", paddingRight: "1.5rem" }}>
            <h3 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>فهد إقبال بط — المدير الإبداعي ومؤسس الاستوديو</h3>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1rem" }}>
              درس فهد إقبال بط الفيلم والتلفزيون في الكلية الوطنية للفنون (NCA) بلاهور، إحدى أعرق مؤسسات الفنون في جنوب آسيا. بعد سنوات من العمل في مجالَي الأزياء والسينما، أسس استوديو باكيارد أوفيشيال عام 2019 برؤية واضحة: تقديم محتوى بصري بمستوى عالمي يخدم السوق الخليجية.
            </p>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
              منذ انتقال الاستوديو إلى دبي عام 2023، قاد فهد أكثر من 800 مشروع في الإمارات — من أفلام العلامات التجارية الكبرى في وسط المدينة، إلى جلسات التصوير في بيئات الصحراء والخليج. يؤمن فهد أن كل لقطة يجب أن تخدم قصة واضحة، ولهذا السبب نبدأ كل مشروع بفهم عميق لهوية العميل ورسالته قبل أي تصوير.
            </p>
          </div>

          <div style={{ borderRight: "3px solid var(--gold)", paddingRight: "1.5rem" }}>
            <h3 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)", marginBottom: "0.5rem" }}>سيد مظهر زيدي — مدير التصوير ورئيس ما بعد الإنتاج</h3>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1rem" }}>
              يحمل سيد مظهر زيدي ماجستير في الاتصال الجماهيري من جامعة GC، وخبرة تتجاوز عشرين عاماً في مجال الإخراج السينمائي والتصوير الوثائقي. أنجز أكثر من 50 مقطعاً موسيقياً وإعلاناً تجارياً وفيلماً وثائقياً خلال مسيرته، ويمكنك الاطلاع على سجله المهني في قاعدة بيانات IMDB (رقم: nm14029494).
            </p>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
              في باكيارد ستوديو، يشرف مظهر على مرحلة ما بعد الإنتاج بأكملها — التحرير، تصحيح الألوان، المونتاج الصوتي، والتصميم الحركي. هذا المستوى من الخبرة في ما بعد الإنتاج هو ما يُحوِّل لقطات جيدة إلى محتوى استثنائي. نؤمن أن التصوير هو نصف العمل فقط، والنصف الآخر يُصنع في غرفة المونتاج.
            </p>
          </div>
        </div>
      </section>

      {/* Approach + Stats */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1.5rem" }}>منهجنا في العمل</h2>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            نعمل بنظام الاستوديو الكامل الخدمات (Full-Service): نبدأ بجلسة إحاطة تفصيلية لفهم أهداف المشروع، ثم ننتقل إلى مرحلة ما قبل الإنتاج (سيناريو، لوحة القصة، اختيار الطاقم والمواقع)، ثم يوم أو أيام التصوير، وأخيراً ما بعد الإنتاج الكامل. نُسلِّم المشروع النهائي بتنسيقات متعددة تناسب جميع المنصات الرقمية والبث التلفزيوني.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.5rem" }}>
            نغطي جميع إمارات الدولة السبع: دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين. تبدأ أعمالنا في المدن الساحلية والمراكز التجارية، وتمتد إلى مخيمات الصحراء وشواطئ المحيط الهندي. نحمل رخصة GCAA المعتمدة التي تتيح لنا التصوير الجوي التجاري في جميع مناطق الدولة.
          </p>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.75)", lineHeight: 1.9, fontSize: "0.95rem" }}>
            نحرص على الشفافية الكاملة في التسعير — لا رسوم خفية ولا مفاجآت. نُقدِّم عرض سعر مفصلاً خلال ساعتين من الاستفسار، يوضح كل بند من بنود التكلفة. وبعد التعاقد، يحصل كل عميل على مدير مشروع مخصص يتابعه من أول رسالة حتى تسليم الملفات النهائية.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "3rem 2rem", background: "#111", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2,400+", label: "مشروع منجز" },
            { num: "7", label: "إمارات" },
            { num: "8+", label: "سنوات خبرة" },
            { num: "ساعتان", label: "وقت الاستجابة" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "2.25rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.875rem", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "4rem 2rem", background: "#111", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.5rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
            هل تريد العمل معنا؟
          </h2>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Cairo, sans-serif", fontWeight: 700 }}>
            تواصل مع فريقنا
          </a>
        </div>
      </section>
    </>
  );
}
