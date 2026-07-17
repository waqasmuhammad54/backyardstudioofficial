import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "عن باكيارد ستوديو أوفيشيال | فهد إقبال بط وسيد مظهر زيدي — دبي",
  description: "تعرّف على استوديو باكيارد أوفيشيال — شركة الإنتاج الإبداعي الرائدة في دبي. تأسست عام 2019 على يد فهد إقبال بط وسيد مظهر زيدي. أكثر من 2,400 مشروع ورخصة GCAA.",
  keywords: ["فهد إقبال بط", "سيد مظهر زيدي", "شركة إنتاج دبي", "فريق باكيارد ستوديو", "قصة الاستوديو", "أفضل استوديو تصوير دبي"],
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

const TEAM_AR = [
  { name: "فهد إقبال بط", role: "المؤسس والرئيس التنفيذي", photo: "/images/team/fahad.webp", bio: "مُخرج سينمائي ورائد أعمال إبداعي، درس السينما والتلفزيون في الكلية الوطنية للفنون بلاهور، ويحمل بكالوريوس في تصميم الأزياء. أسّس الاستوديو عام 2019 برؤية تمزج العاطفة بالحرفية والسرد السينمائي." },
  { name: "سيد مظهر زيدي", role: "المؤسس المشارك ورئيس الإبداع", photo: "/images/team/mazhar.webp", bio: "مخرج سينمائي ومصوّر وثائقي بخبرة تتجاوز 20 عاماً. وثّق أكثر من 900 قصة لضحايا التقسيم و84 معبداً سيخياً. مدير تصوير في 50+ فيديو موسيقي. تعاون مع 40+ علامة تجارية دولية.", link: { label: "ملف IMDB", href: "https://www.imdb.com/name/nm14029494/" } },
  { name: "شبانة بشير", role: "مديرة الفن والهوية البصرية", photo: "/images/team/shabana.webp", bio: "تقود الهوية البصرية والتوجيه الإبداعي في جميع إنتاجات الاستوديو، مضمونةً الاتساق والرقيّ في كل لقطة." },
  { name: "بهرام شاهد", role: "مدير المبيعات", photo: "/images/team/behram.webp", bio: "يقود استراتيجية المبيعات واستقطاب العملاء في السوق الإماراتي، بانياً شراكات طويلة الأمد مع العلامات التجارية والوكالات." },
  { name: "وقاص محمد", role: "مدير الاستراتيجية", photo: "/images/team/waqas.webp", bio: "يرسم خارطة نمو الاستوديو — من التموضع في السوق والاستراتيجية الرقمية إلى الأطر التشغيلية التي تدعم 2,400+ مشروع منجز." },
  { name: "ريم", role: "مدير تطوير الأعمال", photo: "/images/team/reem.webp", bio: "تقود الشراكات مع العملاء وتطوير الأعمال في السوق الإماراتي، مربطةً العلامات التجارية بقدرات الإنتاج السينمائية للاستوديو." },
  { name: "رجاء", role: "مدير تطوير الأعمال", photo: "/images/team/rajaa.webp", bio: "تفتح فرص أعمال جديدة وتبني علاقات استراتيجية، تُمكّن العلامات التجارية عبر الإمارات السبع من الوصول لخدمات الإنتاج العالمية." },
];

const MILESTONES_AR = [
  { year: "2019", event: "التأسيس في لاهور — أفلام موسيقية وتصوير أزياء وإعلانات تجارية" },
  { year: "2021", event: "التوسّع نحو المحتوى المؤسسي والعلامات التجارية عبر باكستان" },
  { year: "2023", event: "انطلاق العمليات في الإمارات — المقرّ الرئيسي في دبي" },
  { year: "2024", event: "الحصول على رخصة GCAA للتصوير الجوي التجاري" },
  { year: "2025", event: "أكثر من 2,400 مشروع منجز عبر إمارات الدولة السبع" },
  { year: "2026", event: "التوجّه نحو الأسواق الدولية — أوروبا وآسيا" },
];

export default function ArAboutPage() {
  const personSchemaFahad = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Fahad Iqbal Butt",
    "jobTitle": "المؤسس والرئيس التنفيذي",
    "url": "https://www.backyardstudioofficial.com/ar/about",
    "image": "https://www.backyardstudioofficial.com/images/team/fahad.webp",
    "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
    "alumniOf": [{ "@type": "EducationalOrganization", "name": "National College of Arts, Lahore" }],
  };
  const personSchemaMazhar = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Mazhar Zaidi",
    "jobTitle": "المؤسس المشارك ورئيس الإبداع",
    "url": "https://www.backyardstudioofficial.com/ar/about",
    "image": "https://www.backyardstudioofficial.com/images/team/mazhar.webp",
    "sameAs": ["https://www.imdb.com/name/nm14029494/"],
    "worksFor": { "@type": "Organization", "name": "باكيارد ستوديو أوفيشيال" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaFahad) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaMazhar) }} />

      {/* HERO */}
      <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)", padding: "6rem 2rem 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 30% 50%, rgba(212,175,55,0.07) 0%, transparent 60%)" }} />
        <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1.5rem" }}>قصتنا</p>
          <h1 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 900, color: "var(--cream)", lineHeight: 1.15, marginBottom: "2rem" }}>
            بُنينا على<br /><span style={{ color: "var(--gold)" }}>الرؤية.</span><br />تحرّكنا بالإتقان.
          </h1>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.65)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: "680px" }}>
            تأسّس باكيارد ستوديو أوفيشيال عام 2019 على يد المخرج ومصوّر الأزياء فهد إقبال بط، وتطوّر من استوديو إبداعي في لاهور إلى أحد أبرز بيوت الإنتاج في دبي — يخدم العلامات التجارية والفنانين والشركات عبر إمارات الدولة السبع.
          </p>
        </div>
      </section>

      {/* FAHAD SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>المؤسّس</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.1 }}>فهد إقبال بط</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                فهد إقبال بط رائد أعمال إبداعي ومُخرج سينمائي ومصوّر أزياء يجمع بين التدريب الأكاديمي الرفيع في مجالَي الأزياء والإنتاج السينمائي. يحمل بكالوريوس في تصميم الأزياء بإشراف مجلس UK Excel، وأتمّ دراساته المتخصصة في السينما والتلفزيون في الكلية الوطنية للفنون (NCA) بلاهور — من أعرق المؤسسات الإبداعية في باكستان.
              </p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                أسّس فهد استوديو باكيارد في لاهور عام 2019 برؤية واضحة: إنتاج محتوى بصري مؤثّر يوازن بين الإبداع والعاطفة وأسلوب السرد الحديث. عمل الاستوديو على أفلام موسيقية وإعلانات تجارية وأفلام قصيرة ومحتوى مؤسسي وتصوير أعراس وعلامات تجارية.
              </p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                إلى جانب الإخراج، بنى فهد خبرة واسعة في تصوير الأزياء، متعاوناً مع مصوّري المجلات والمختصين الإبداعيين في صناعة الموضة. اليوم، يواصل تجسيد أفكاره السينمائية للعلامات التجارية والشركات والفنانين والمبدعين في الإمارات.
              </p>
            </div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
              <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none" }}>تواصل معنا</a>
              <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none" }}>واتساب فهد</a>
            </div>
          </div>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/fahad.webp" alt="فهد إقبال بط — المؤسس والرئيس التنفيذي لباكيارد ستوديو أوفيشيال دبي" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, insetInline: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.2rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>فهد إقبال بط</p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", marginTop: "0.25rem" }}>المؤسس والرئيس التنفيذي</p>
            </div>
          </div>
        </div>
      </section>

      {/* MAZHAR SECTION */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "4px", maxWidth: "400px" }}>
            <img src="/images/team/mazhar.webp" alt="سيد مظهر زيدي — المؤسس المشارك ورئيس الإبداع لباكيارد ستوديو دبي" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", bottom: 0, insetInline: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(5,5,5,0.95) 0%, transparent 100%)" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.2rem", fontWeight: 900, color: "var(--cream)", margin: 0 }}>سيد مظهر زيدي</p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.75rem", letterSpacing: "0.2em", marginTop: "0.25rem" }}>المؤسس المشارك ورئيس الإبداع</p>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>المؤسس المشارك</p>
            <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem", lineHeight: 1.1 }}>سيد مظهر زيدي</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                سيد مظهر زيدي مخرج سينمائي ومصوّر وثائقي ومُنتج إبداعي بخبرة تمتد لعقدَين عبر باكستان ومنطقة الخليج. درس في الكلية الوطنية للفنون (NCA) بلاهور وحصل على ماجستير الاتصال الجماهيري من جامعة GC — من أعرق المؤسسات الأكاديمية في باكستان.
              </p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                يُعدّ أبرز أعماله مشروعه الوثائقي الاستثنائي الذي وثّق فيه أكثر من 900 قصة لضحايا التقسيم الهندي الباكستاني، وغطّى 84 معبداً سيخياً (غوردوارا) عبر أرجاء باكستان — أحد أعمق مشاريع التوثيق الثقافي في تاريخ السينما الجنوب آسيوية.
              </p>
              <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.85, fontSize: "0.95rem" }}>
                عمل مازهر مديراً للتصوير ومحرّراً وملوّناً في أكثر من 50 فيديو موسيقي وإعلاناً تجارياً، وتعاون مع أكثر من 40 علامة تجارية محلية ودولية. أعماله المعتمدة على IMDB تمتد لتشمل إعلانات تجارية وأفلام قصيرة وأفلام موسيقية ومحتوى وثائقي ذا علامة تجارية.
              </p>
            </div>
            <a href="https://www.imdb.com/name/nm14029494/" target="_blank" rel="noreferrer" style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.85rem 2rem", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", marginTop: "2rem" }}>عرض ملف IMDB ←</a>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: "5rem 2rem", background: "#111" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>مسيرتنا</p>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>المحطات الرئيسية</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {MILESTONES_AR.map((m, i) => (
              <div key={i} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--gold)", minWidth: "56px", lineHeight: 1 }}>{m.year}</div>
                <div style={{ flex: 1, paddingTop: "0.2rem" }}>
                  <div style={{ width: "100%", height: "1px", background: "rgba(212,175,55,0.15)", marginBottom: "0.75rem" }} />
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.7)", lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM GRID */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>الفريق</p>
          <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "3rem" }}>تعرّف على فريقنا</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {TEAM_AR.map((member) => (
              <div key={member.name} style={{ border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ aspectRatio: "3/4", overflow: "hidden", position: "relative" }}>
                  <img src={member.photo} alt={member.name + " — " + member.role + " — باكيارد ستوديو دبي"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} loading="lazy" />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "Cairo, sans-serif", color: "var(--cream)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{member.name}</h3>
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "var(--gold)", fontSize: "0.7rem", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{member.role}</p>
                  <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.8rem", lineHeight: 1.7, margin: 0 }}>{member.bio}</p>
                  {member.link && (
                    <a href={member.link.href} target="_blank" rel="noreferrer" style={{ display: "inline-block", color: "var(--gold)", fontSize: "0.72rem", marginTop: "0.75rem", textDecoration: "none" }}>{member.link.label} ←</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: "3.5rem 2rem", background: "#111", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "2,400+", label: "مشروع منجز" },
            { num: "7", label: "إمارات تغطيتنا" },
            { num: "6+", label: "سنوات خبرة" },
            { num: "2 ساعة", label: "ضمان الاستجابة" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Cairo, sans-serif", fontSize: "2.5rem", fontWeight: 900, color: "var(--gold)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "Cairo, sans-serif", color: "rgba(245,240,225,0.55)", fontSize: "0.85rem", marginTop: "0.5rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a", textAlign: "center" }}>
        <p style={{ fontFamily: "Cairo, sans-serif", color: "rgba(212,175,55,0.7)", fontSize: "0.85rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>✦ لنبدع معاً</p>
        <h2 style={{ fontFamily: "Cairo, sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "var(--cream)", marginBottom: "2rem" }}>ابدأ مشروعك<br /><span style={{ color: "var(--gold)" }}>معنا اليوم</span></h2>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/ar/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 700, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>احصل على عرض سعر مجاني</a>
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" style={{ border: "1px solid rgba(212,175,55,0.5)", color: "var(--gold)", padding: "0.9rem 2.5rem", fontFamily: "Cairo, sans-serif", fontWeight: 600, borderRadius: "2px", textDecoration: "none", fontSize: "1rem" }}>واتساب فهد</a>
        </div>
      </section>
    </>
  );
}
