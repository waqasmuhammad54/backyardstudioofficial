import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "تصوير الفعاليات في دبي 2026 | باكيارد ستوديو",
  description:
    "احجز أفضل مصور فعاليات في دبي. تغطية احترافية للمؤتمرات والحفلات والمعارض في الإمارات. باكيارد ستوديو — 2,400+ مشروع، رد في ساعتين.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/taswirafidiyat-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/event-photography-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/taswirafidiyat-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "تصوير الفعاليات في دبي 2026 — المؤتمرات والحفلات والمعارض",
    description:
      "دليل شامل لتصوير الفعاليات في دبي — الأسعار، ما يجب توقعه، وكيف تختار الفريق المناسب.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function EventPhotographyArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة تصوير الفعاليات في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تبدأ أسعار تصوير الفعاليات في دبي من AED 2,000 لجلسة تصوير 4 ساعات بمصور واحد. التغطية الكاملة ليوم كامل (8 ساعات) تتراوح بين AED 3,500 و AED 5,000. الفعاليات الكبيرة التي تتطلب فريقاً من المصورين والمصورين الفوتوغرافيين تُسعَّر بناءً على الحجم والمدة.",
        },
      },
      {
        "@type": "Question",
        name: "ما الذي يشمله تصوير الفعاليات الاحترافي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "التغطية الاحترافية للفعاليات مع باكيارد ستوديو تشمل: مكالمة تحضيرية قبل الفعالية، الوصول المبكر للتجهيز، تصوير جميع اللحظات الرئيسية، تسليم مجموعة مختارة من الصور الجاهزة للنشر خلال 6 ساعات من انتهاء الفعالية، وتسليم المجموعة الكاملة المعدلة خلال 48 ساعة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تغطون الفعاليات خارج دبي في أبوظبي والشارقة؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، يغطي فريق باكيارد ستوديو الفعاليات في جميع إمارات الدولة السبع. لدينا تجربة واسعة في تصوير الفعاليات في أبوظبي (ADNEC، فندق الإمارات بالاس) والشارقة ورأس الخيمة والفجيرة وعجمان وأم القيوين. تكاليف التنقل مشمولة في معظم الباقات.",
        },
      },
      {
        "@type": "Question",
        name: "كيف نضمن التقاط جميع اللحظات المهمة في فعاليتنا؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نبدأ بمكالمة تحضيرية مفصلة نستعرض فيها جدول الفعالية ونحدد اللحظات الأساسية التي لا يمكن تفويتها — مثل توزيع الجوائز، كلمات المتحدثين، لقطات الضيوف المميزين. يصل فريقنا قبل الضيوف بـ45-60 دقيقة لتقييم الإضاءة وتجهيز المعدات.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.backyardstudioofficial.com/ar" },
      { "@type": "ListItem", position: 2, name: "المدونة", item: "https://www.backyardstudioofficial.com/ar/blog" },
      { "@type": "ListItem", position: 3, name: "تصوير الفعاليات في دبي 2026", item: "https://www.backyardstudioofficial.com/ar/blog/taswirafidiyat-dubai-2026" },
    ],
  };

  return (
    <div className="min-h-screen" dir="rtl" lang="ar" style={{ background: "var(--black)", color: "var(--cream)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <div className="relative pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
            باكيارد ستوديو أوفيشيال · دبي
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "var(--cream)" }}>
            تصوير الفعاليات في دبي 2026
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
            دليل شامل لتوثيق المؤتمرات والحفلات الشركاتية والمعارض والفعاليات الخاصة في دبي وجميع إمارات الدولة — الأسعار، ما يجب توقعه، وكيف تختار فريق التصوير المناسب.
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "2rem", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80" alt="Taswirafidiyat Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />
        </div>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            ما الذي يميز تصوير الفعاليات في دبي؟
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            دبي من أكثر مدن العالم حيوية في مجال الفعاليات — من المؤتمرات الدولية الكبرى في مركز دبي التجاري العالمي، إلى حفلات الغالا الفاخرة في برج العرب وفنادق النخلة، وصولاً إلى إطلاقات المنتجات والمعارض التجارية. هذا المستوى من الأحداث يستوجب فريق تصوير يفهم المعايير البصرية المطلوبة ويعمل بكفاءة تحت الضغط.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            في باكيارد ستوديو، غطينا أكثر من 500 فعالية في الإمارات منذ تأسيسنا عام 2016 — من اجتماعات مجالس الإدارة الحصرية إلى مؤتمرات بحضور 5,000 مشارك. الخبرة العملية في المواقع، وفهم إيقاع يوم الفعالية، والقدرة على التقاط اللحظات العفوية التي تجعل الصورة حية — هذا ما يفرق بين التوثيق المهني والتصوير العادي.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            ما الذي يتضمنه تصوير الفعاليات الاحترافي؟
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            عندما تحجز مع باكيارد ستوديو، تبدأ العملية قبل يوم الفعالية بفترة كافية. نُجري مكالمة تحضيرية نستعرض فيها:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "جدول الفعالية الكامل مع التوقيتات",
              "اللحظات الأساسية التي لا يمكن تفويتها (توزيع الجوائز، خطابات الافتتاح، لقطات الشخصيات البارزة)",
              "أسماء وأوصاف الضيوف المميزين الذين يجب تصويرهم",
              "أسلوب التصوير المطلوب (توثيقي، تحريري، رسمي)",
              "كيفية استخدام الصور لاحقاً (وسائل التواصل، البيان الصحفي، التقرير السنوي)",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: "var(--silver)" }}>
                <span style={{ color: "var(--gold)", marginTop: "2px" }}>✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            في يوم الفعالية، يصل فريقنا قبل الضيوف بـ45-60 دقيقة لتقييم الإضاءة واختبار الإعدادات وتنسيق المواقع مع فريق إدارة الفعالية. نعمل بشكل غير مزعج وبحرفية تامة طوال الفعالية.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            أنواع الفعاليات التي نغطيها في دبي
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "المؤتمرات والقمم", desc: "تغطية شاملة للمتحدثين والحضور واللحظات الرئيسية في أكبر قاعات دبي وأبوظبي." },
              { title: "حفلات الغالا وتوزيع الجوائز", desc: "التقاط لحظات التكريم والاحتفال بمستوى احترافي يليق بأرقى المناسبات." },
              { title: "إطلاق المنتجات", desc: "توثيق لحظة الكشف عن المنتج، تفاعل الحضور، وجماليات التصميم والعلامة التجارية." },
              { title: "المعارض التجارية", desc: "تغطية منهجية لجميع الأجنحة واللحظات الشبكية والتفاعلات المهمة طوال أيام المعرض." },
              { title: "الفعاليات الشركاتية الداخلية", desc: "توثيق مؤتمرات الفرق، أيام الفريق، الإطلاقات الداخلية، وأنشطة بناء الفريق." },
              { title: "الفعاليات الخاصة والاحتفالية", desc: "من حفلات الأعمال إلى الاحتفالات الخاصة، بمستوى احترافي وتوثيق لا يُنسى." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-lg border" style={{ borderColor: "rgba(212,175,55,0.2)", background: "rgba(212,175,55,0.03)" }}>
                <h3 className="font-semibold mb-2" style={{ color: "var(--gold)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            أسعار تصوير الفعاليات في دبي 2026
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--silver)" }}>
            الشفافية في التسعير مبدأ أساسي لدينا. إليك النطاقات الفعلية لتصوير الفعاليات:
          </p>
          <div className="space-y-4">
            {[
              { range: "AED 2,000 – 2,800", label: "نصف يوم (4 ساعات، مصور واحد)", desc: "مناسب للفعاليات الصغيرة، اجتماعات الأعمال، وإطلاقات المنتجات المحدودة." },
              { range: "AED 3,500 – 5,000", label: "يوم كامل (8 ساعات، مصور واحد)", desc: "التغطية الأكثر طلباً — تناسب معظم الفعاليات الشركاتية والحفلات الاحتفالية." },
              { range: "AED 5,000 – 8,000", label: "فريق متكامل (مصور + كاميرا + طاقم دعم)", desc: "للفعاليات الكبيرة ذات القاعات المتعددة أو التي تتطلب تغطية متزامنة من زوايا مختلفة." },
              { range: "AED 500 إضافية", label: "خدمة التسليم السريع (خلال 4 ساعات)", desc: "50 صورة جاهزة للنشر على وسائل التواصل خلال 4 ساعات من انتهاء الفعالية." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <div className="flex-shrink-0 text-right" style={{ minWidth: "160px" }}>
                  <span className="font-bold text-lg" style={{ color: "var(--gold)" }}>{item.range}</span>
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{item.label}</p>
                  <p className="text-sm" style={{ color: "var(--silver)" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            كيف تبدأ ملخصاً ناجحاً لفعاليتك؟
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            جودة الملخص الذي تقدمه لفريق التصوير هي أكبر عامل يحدد جودة النتائج — بعد مهارة المصور طبعاً. الملخص الجيد يتضمن:
          </p>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            أولاً، جدول الفعالية الكامل مع التوقيتات الدقيقة. ثانياً، قائمة اللقطات الأساسية (الشخص الذي يجب تصويره، اللحظة التي لا يمكن تفويتها، الجائزة أو المنتج الذي يجب توثيقه). ثالثاً، وصف للضيوف البارزين الذين يجب التعرف عليهم وتصويرهم بشكل خاص. رابعاً، الغرض النهائي من الصور — النشر الإعلامي يحتاج صوراً أفقية بدقة عالية، التواصل الاجتماعي يحتاج صوراً رأسية جاهزة للنشر الفوري.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            الـ30 دقيقة التي تستثمرها في إعداد ملخص مفصل تترجم إلى مجموعة صور أكثر دقة وتطابقاً لاحتياجاتك.
          </p>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="font-display text-3xl mb-8" style={{ color: "var(--gold)" }}>أسئلة شائعة</h2>
          <div className="space-y-6">
            {[
              { q: "كم تكلفة تصوير الفعاليات في دبي؟", a: "تبدأ من AED 2,000 لجلسة 4 ساعات بمصور واحد، وترتفع إلى AED 5,000+ للفعاليات الكبيرة التي تتطلب فريقاً متكاملاً. نوفر عرض سعر تفصيلي خلال ساعتين من استلام طلبك." },
              { q: "متى نستلم الصور بعد الفعالية؟", a: "نسلم مجموعة مختارة من 50-100 صورة جاهزة للنشر على وسائل التواصل خلال 6 ساعات من انتهاء الفعالية لمن يطلب هذه الخدمة. المجموعة الكاملة المعدلة تُسلَّم خلال 48 ساعة للفعاليات العادية." },
              { q: "هل تغطون الفعاليات في جميع إمارات الدولة؟", a: "نعم، نغطي الفعاليات في جميع الإمارات السبع ولدينا تجربة في أبرز المواقع الإماراتية كـ ADNEC وفندق الإمارات بالاس في أبوظبي، ومركز الشارقة للمعارض، والفنادق الكبرى في رأس الخيمة." },
              { q: "كيف نضمن عدم تفويت أي لحظة مهمة؟", a: "من خلال المكالمة التحضيرية التفصيلية قبل الفعالية، والوصول المبكر لتقييم المكان، والعمل بفريق يضم مصورين اثنين على الأقل للفعاليات الكبيرة — مما يضمن تغطية متزامنة لجميع اللحظات المهمة." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--cream)" }}>{faq.q}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center p-10 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>احجز فريق تصوير فعاليتك</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--silver)" }}>
            تواصل معنا اليوم للحصول على عرض سعر مخصص لفعاليتك. نرد خلال ساعتين، 7 أيام في الأسبوع.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ar/contact" className="inline-block px-8 py-4 rounded font-semibold transition-all" style={{ background: "var(--gold)", color: "#000" }}>
              احصل على عرض سعر مجاني
            </a>
            <a href="https://wa.me/971585882685" className="inline-block px-8 py-4 rounded font-semibold border transition-all" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
              واتساب: +971 58 588 2685
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
