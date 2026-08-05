import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "أسعار الفيديو الشركاتي في دبي 2026 | باكيارد",
  description:
    "تكلفة إنتاج الفيديو الشركاتي في دبي — أفلام العلامات التجارية، DVCs والمحتوى المؤسسي في الإمارات. باكيارد ستوديو — عرض سعر مجاني خلال ساعتين.",
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/ar/blog/asear-video-sharkati-dubai-2026",
    languages: {
      en: "https://www.backyardstudioofficial.com/blog/how-much-does-video-production-cost-dubai-2026",
      ar: "https://www.backyardstudioofficial.com/ar/blog/asear-video-sharkati-dubai-2026",
    },
  },
  openGraph: {
    locale: "ar_AE",
    title: "أسعار إنتاج الفيديو الشركاتي في دبي 2026",
    description: "دليل شامل لتكاليف إنتاج الفيديو الشركاتي في دبي — DVCs وأفلام العلامات التجارية والمحتوى الرقمي.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function CorporateVideoPricingArPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "كم تكلفة إنتاج فيديو شركاتي في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "تتراوح تكلفة الفيديو الشركاتي في دبي بين AED 5,000 لفيديو بسيط لمدة دقيقتين، وتصل إلى AED 200,000+ للأفلام التوثيقية عالية الإنتاج. أفلام العلامات التجارية الاحترافية تتراوح بين AED 15,000 و AED 60,000 وهو النطاق الأكثر شيوعاً للشركات الإماراتية المعروفة.",
        },
      },
      {
        "@type": "Question",
        name: "ما الفرق بين DVC والفيديو الشركاتي العادي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DVC (إعلان الفيديو الرقمي) هو محتوى مُصمَّم أساساً للحملات الإعلانية على منصات مثل ميتا وتيك توك ويوتيوب، مع تركيز على الأداء والتحويل. أما الفيديو الشركاتي فيشمل طيفاً أوسع — من أفلام الثقافة المؤسسية إلى الفيديوهات التعليمية وشهادات العملاء والتقارير السنوية — وهدفه بناء الصورة أكثر من التحويل المباشر.",
        },
      },
      {
        "@type": "Question",
        name: "ما العوامل التي تحدد تكلفة إنتاج الفيديو في دبي؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "أبرز العوامل التي تؤثر على السعر: عدد أيام التصوير، حجم الفريق (مخرج + مصور + تقني صوت + مسؤول إضاءة + منسق إنتاج)، متطلبات المواقع وتصاريح التصوير، الحاجة إلى ممثلين أو مذيعين، مستوى ما بعد الإنتاج (مونتاج + تدرج لوني + موشن جرافيك + ترخيص موسيقى)، والعدد النهائي من النسخ المطلوبة للمنصات المختلفة.",
        },
      },
      {
        "@type": "Question",
        name: "هل تنتجون فيديوهات شركاتية باللغة العربية؟",
        acceptedAnswer: {
          "@type": "Answer",
          text: "نعم، ننتج محتوى شركاتياً كاملاً باللغة العربية — سواء ثنائي اللغة (عربي وإنجليزي) أو عربي بالكامل. يشمل ذلك الكتابة الإبداعية بالعربية، توفير مقدمين ناطقين بالعربية، التعليق الصوتي، والترجمة والعناوين بالخط العربي الاحترافي لمختلف اللهجات الخليجية.",
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
      { "@type": "ListItem", position: 3, name: "أسعار إنتاج الفيديو الشركاتي في دبي 2026", item: "https://www.backyardstudioofficial.com/ar/blog/asear-video-sharkati-dubai-2026" },
    ],
  };

  return (
    <div className="min-h-screen" dir="rtl" lang="ar" style={{ background: "var(--black)", color: "var(--cream)" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="relative pt-32 pb-16 px-6" style={{ background: "linear-gradient(to bottom, #0a0a0a, #111)" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "var(--gold)" }}>
            باكيارد ستوديو أوفيشيال · دبي
          </p>
          <h1 className="font-display text-4xl md:text-6xl leading-tight mb-6" style={{ color: "var(--cream)" }}>
            أسعار إنتاج الفيديو الشركاتي في دبي 2026
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
            دليل شامل وشفاف لتكاليف إنتاج الفيديو الشركاتي في دبي والإمارات — من الفيديوهات البسيطة لوسائل التواصل إلى أفلام العلامات التجارية الاحترافية والإعلانات الرقمية DVCs.
          </p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 space-y-12">

        <div style={{ width: "100%", height: "420px", borderRadius: "4px", marginBottom: "2rem", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Asear Video Sharkati Dubai 2026" style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "4px", marginBottom: "3rem", display: "block" }} loading="lazy" />
        </div>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            لماذا يتفاوت سعر الفيديو الشركاتي في دبي بهذا الشكل؟
          </h2>
          <p className="text-base leading-relaxed mb-4" style={{ color: "var(--silver)" }}>
            عندما تبحث عن إنتاج فيديو شركاتي في دبي، ستجد أسعاراً تتراوح بين AED 3,000 وAED 300,000 لما يُوصف بأنه "فيديو شركاتي قصير". هذا التفاوت الهائل ليس مجرد فارق في الأسعار — بل هو فارق حقيقي في النطاق، والجودة، والنتائج.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>
            في باكيارد ستوديو، أنتجنا أكثر من 2,400 مشروع للشركات في الإمارات منذ 2016، بدءاً من الفيديوهات البسيطة لوسائل التواصل وصولاً إلى أفلام الشركات الكبرى متعددة الأيام. نفهم بالضبط أين تذهب كل درهم من ميزانيتك — وهذا ما سنشاركه معك هنا.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-6" style={{ color: "var(--gold)" }}>
            جدول أسعار إنتاج الفيديو الشركاتي — دبي 2026
          </h2>
          <div className="space-y-4">
            {[
              {
                range: "AED 5,000 – 15,000",
                label: "فيديو شركاتي أساسي",
                items: ["يوم تصوير واحد، فريق صغير", "موقع واحد أو موقعان", "مونتاج احترافي بسيط", "مناسب لفيديوهات التواصل الداخلي وشهادات العملاء"],
              },
              {
                range: "AED 15,000 – 40,000",
                label: "فيديو شركاتي احترافي (الأكثر طلباً)",
                items: ["يومان تصوير مع فريق كامل", "مواقع متعددة وإضاءة احترافية", "تدرج لوني + ميكساج صوتي + موشن جرافيك", "نسخ متعددة للمنصات المختلفة"],
              },
              {
                range: "AED 45,000 – 150,000",
                label: "فيلم علامة تجارية عالي الإنتاج",
                items: ["أيام تصوير متعددة + ممثلون محترفون", "مؤثرات بصرية + رسوم متحركة", "موسيقى مرخصة أو مؤلفة خصيصاً", "مخرجة سينمائية وفريق ما بعد إنتاج متكامل"],
              },
              {
                range: "AED 150,000+",
                label: "إنتاج حملة إعلانية تلفزيونية",
                items: ["إعلانات تلفزيونية + مواد الحملة الكاملة", "ممثلون مشهورون أو وجوه معروفة", "إنتاج ما بعد يشمل VFX والمعالجة المتقدمة", "عدة نسخ للأسواق والمنصات المختلفة"],
              },
            ].map((tier, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: "rgba(212,175,55,0.04)", border: "1px solid rgba(212,175,55,0.2)" }}>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-2xl font-bold" style={{ color: "var(--gold)" }}>{tier.range}</span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full" style={{ background: "rgba(212,175,55,0.15)", color: "var(--gold)" }}>{tier.label}</span>
                </div>
                <ul className="space-y-2">
                  {tier.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--silver)" }}>
                      <span style={{ color: "var(--gold)" }}>·</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            أنواع الفيديو الشركاتي وأسعاره في دبي
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { type: "DVC (إعلان فيديو رقمي)", price: "من AED 8,000", desc: "للحملات الإعلانية على ميتا وتيك توك ويوتيوب" },
              { type: "فيلم العلامة التجارية", price: "من AED 15,000", desc: "لموقع الشركة وقنوات التواصل والعروض التقديمية" },
              { type: "فيديو شهادات العملاء", price: "من AED 1,800 / شهادة", desc: "تصوير احترافي لآراء العملاء بأسلوب موثوق" },
              { type: "الفيلم التوثيقي الشركاتي", price: "من AED 25,000", desc: "لقصة الشركة والثقافة المؤسسية والمستثمرين" },
              { type: "فيديو إطلاق المنتج", price: "من AED 10,000", desc: "للكشف عن المنتجات الجديدة بأسلوب سينمائي" },
              { type: "المحتوى الشركاتي لوسائل التواصل", price: "من AED 3,500 / شهر", desc: "باقات شهرية للمحتوى المنتظم على المنصات" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-lg" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.12)" }}>
                <h3 className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{item.type}</h3>
                <p className="text-lg font-bold mb-2" style={{ color: "var(--gold)" }}>{item.price}</p>
                <p className="text-sm" style={{ color: "var(--silver)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>
            العوامل التي تؤثر على سعر الفيديو الشركاتي
          </h2>
          <p className="text-base leading-relaxed mb-6" style={{ color: "var(--silver)" }}>
            فهم هذه العوامل يساعدك على اتخاذ قرار مدروس عند مقارنة العروض المختلفة:
          </p>
          <div className="space-y-4">
            {[
              { factor: "حجم الفريق وتخصصاته", detail: "الفرق بين مصور واحد يحمل كاميرا وفريق يضم مخرجاً ومصوراً وتقني صوت ومسؤول إضاءة ومنسق إنتاج — يظهر في كل لقطة." },
              { factor: "ما بعد الإنتاج (Post-Production)", detail: "المونتاج الأساسي يختلف جذرياً عن التدرج اللوني الاحترافي + المعالجة الصوتية + الموشن جرافيك + ترخيص الموسيقى. هذه المرحلة وحدها قد تمثل 40-50% من تكلفة الإنتاج." },
              { factor: "التصوير الجوي بالطائرات المسيّرة", detail: "يتطلب رخصة GCAA التجارية — وليس مجرد تصريح ترفيهي. التصوير الجوي غير المرخص يعرضك لغرامات تصل إلى AED 50,000." },
              { factor: "عدد النسخ النهائية", detail: "كل منصة لها مواصفات مختلفة — 16:9 لليوتيوب، 9:16 للريلز وتيك توك، 1:1 للفيد. كل نسخة إضافية تضيف وقتاً في المونتاج." },
              { factor: "الموقع وتصاريح التصوير", detail: "بعض مواقع دبي تتطلب تصاريح من هيئة دبي للسياحة أو جهات أخرى. نتولى هذه الإجراءات بالكامل كجزء من خدمتنا." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-lg" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)" }}>
                <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: "rgba(212,175,55,0.2)", color: "var(--gold)" }}>{i + 1}</span>
                <div>
                  <p className="font-semibold mb-1" style={{ color: "var(--cream)" }}>{item.factor}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl mb-8" style={{ color: "var(--gold)" }}>أسئلة شائعة</h2>
          <div className="space-y-6">
            {[
              { q: "كم تكلفة إنتاج فيديو شركاتي في دبي؟", a: "تبدأ من AED 5,000 للفيديوهات البسيطة وترتفع إلى AED 200,000+ للأفلام الاحترافية الكبيرة. النطاق الأكثر شيوعاً للشركات الإماراتية هو AED 15,000 – AED 40,000 للفيديو الشركاتي الاحترافي." },
              { q: "كم من الوقت يستغرق إنتاج فيديو شركاتي؟", a: "الفيديو الشركاتي القياسي (2-5 دقائق) يستغرق عادة 3-5 أسابيع من البداية حتى التسليم: أسبوع لما قبل الإنتاج، 1-2 يوم تصوير، و2-3 أسابيع لما بعد الإنتاج. المشاريع العاجلة متاحة بتكلفة إضافية." },
              { q: "هل تنتجون فيديوهات للجهات الحكومية والقطاع العام في الإمارات؟", a: "نعم، لدينا خبرة واسعة مع الجهات الحكومية الإماراتية والمناطق الحرة والمؤسسات العامة، بما في ذلك الالتزام بدلائل الهوية البصرية الرسمية وبروتوكولات التصوير في المواقع الحساسة." },
              { q: "ماذا لو احتجنا فيديو باللغة العربية؟", a: "نقدم خدمة إنتاج متكاملة باللغة العربية — كتابة إبداعية، مذيعون ومقدمون ناطقون بالعربية، تعليق صوتي، ترجمة، وعناوين بخط عربي احترافي. نخدم أيضاً الأسواق ثنائية اللغة (عربي + إنجليزي) في إطار مشروع واحد." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(212,175,55,0.15)" }}>
                <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--cream)" }}>{faq.q}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--silver)" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center p-10 rounded-2xl" style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.25)" }}>
          <h2 className="font-display text-3xl mb-4" style={{ color: "var(--gold)" }}>احصل على عرض سعر لمشروعك</h2>
          <p className="mb-8 text-lg" style={{ color: "var(--silver)" }}>
            شاركنا تفاصيل مشروعك وسنرسل لك عرض سعر تفصيلياً خلال ساعتين — شفافاً وبدون رسوم خفية.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/ar/contact" className="inline-block px-8 py-4 rounded font-semibold" style={{ background: "var(--gold)", color: "#000" }}>
              عرض سعر مجاني
            </a>
            <a href="https://wa.me/971585882685" className="inline-block px-8 py-4 rounded font-semibold border" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
              واتساب: +971 58 588 2685
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
