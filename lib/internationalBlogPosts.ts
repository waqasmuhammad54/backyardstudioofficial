export type InternationalBlogLocale = "ar" | "ru" | "zh";

export type InternationalBlogPost = {
  locale: InternationalBlogLocale;
  slug: string;
  title: string;
};

/**
 * Canonical inventory for every non-English journal article.
 *
 * Keep the sitemap, language hubs and RSS feed driven by this one list. The
 * three surfaces previously drifted apart, leaving 50 live articles without a
 * link from their own language hub and 48 absent from RSS.
 */
export const INTERNATIONAL_BLOG_POSTS: readonly InternationalBlogPost[] = [
  { locale: "ar", slug: "asear-tasswirvideo-dubai-2026", title: "أسعار تصوير الفيديو في دبي 2026" },
  { locale: "ar", slug: "asear-video-sharkati-dubai-2026", title: "أسعار الفيديو الشركاتي في دبي 2026" },
  { locale: "ar", slug: "baqat-taswir-zifaf-dubai-asaar-2026", title: "باقات تصوير الأعراس في دبي 2026 — الأسعار" },
  { locale: "ar", slug: "intaj-klip-musiqi-dubai-2026", title: "إنتاج كليب موسيقي في دبي والإمارات" },
  { locale: "ar", slug: "musawir-eid-milad-dubai-2026", title: "مصور حفلات عيد الميلاد في دبي 2026" },
  { locale: "ar", slug: "musawir-khetuba-ihtirafiya-dubai-2026", title: "مصور جلسات الخطوبة الاحترافي في دبي 2026" },
  { locale: "ar", slug: "sani-muhtawa-shbaka-ijtimaia-dubai-2026", title: "صانع محتوى اجتماعي في دبي 2026" },
  { locale: "ar", slug: "tasjil-video-faaliyat-dubai-2026", title: "تصوير فيديو الفعاليات في دبي 2026" },
  { locale: "ar", slug: "taswir-afraah-arabiya-dubai-2026", title: "تصوير الأفراح العربية في دبي 2026" },
  { locale: "ar", slug: "taswir-aqariya-dubai-2026", title: "تصوير عقاري في دبي 2026" },
  { locale: "ar", slug: "taswir-aris-hindi-dubai-2026", title: "تصوير أعراس هندية في دبي 2026" },
  { locale: "ar", slug: "taswir-atfal-dubai-2026", title: "تصوير أطفال في دبي 2026" },
  { locale: "ar", slug: "taswir-atfal-ihtirafiya-dubai-2026", title: "تصوير الأطفال الاحترافي في دبي 2026" },
  { locale: "ar", slug: "taswir-atfal-mawludeen-dubai-2026", title: "جلسات تصوير المواليد الجدد في دبي 2026" },
  { locale: "ar", slug: "taswir-brand-shakhsi-dubai-2026", title: "تصوير البراند الشخصي في دبي 2026" },
  { locale: "ar", slug: "taswir-haml-dubai-2026", title: "تصوير الحمل في دبي 2026" },
  { locale: "ar", slug: "taswir-headshot-mihni-dubai-2026", title: "تصوير الهيد شوت الاحترافي في دبي 2026" },
  { locale: "ar", slug: "taswir-intaj-dubai-2026", title: "تصوير منتجات في دبي 2026" },
  { locale: "ar", slug: "taswir-khetuba-dubai-2026", title: "تصوير الخطوبة في دبي 2026" },
  { locale: "ar", slug: "taswir-mataam-ihtirafi-dubai-2026", title: "تصوير الطعام الاحترافي في دبي 2026" },
  { locale: "ar", slug: "taswir-mawaalid-dubai-2026", title: "دليل تصوير المواليد في دبي 2026" },
  { locale: "ar", slug: "taswir-moda-ihtirafiya-dubai-2026", title: "تصوير الموضة الاحترافي في دبي 2026" },
  { locale: "ar", slug: "taswir-muatamart-dubai-2026", title: "تصوير المؤتمرات والفعاليات في دبي" },
  { locale: "ar", slug: "taswir-muntajat-tijaria-dubai-2026", title: "تصوير المنتجات التجارية في دبي 2026" },
  { locale: "ar", slug: "taswir-nikah-dubai-2026", title: "تصوير النكاح في دبي 2026" },
  { locale: "ar", slug: "taswir-nisa-dubai-2026", title: "تصوير نساء في دبي 2026" },
  { locale: "ar", slug: "taswir-riyadi-dubai-2026", title: "تصوير رياضي في دبي 2026" },
  { locale: "ar", slug: "taswir-taaam-dubai-2026", title: "تصوير الطعام في دبي 2026 | F&B الإمارات" },
  { locale: "ar", slug: "taswir-uslub-hayat-dubai-2026", title: "تصوير أسلوب الحياة في دبي 2026" },
  { locale: "ar", slug: "taswir-zifaf-arabi-dubai-2026", title: "تصوير حفلات الزفاف العربية في دبي" },
  { locale: "ar", slug: "taswir-zifaf-emirati-dubai-2026", title: "تصوير حفلات الزفاف الإماراتية في دبي" },
  { locale: "ar", slug: "taswir-zifaf-hindi-dubai-2026", title: "تصوير حفلات الأعراس الهندية في دبي 2026" },
  { locale: "ar", slug: "taswir-zifaf-wajiha-dubai-2026", title: "تصوير أعراس الوجهة في دبي 2026" },
  { locale: "ar", slug: "taswirafidiyat-dubai-2026", title: "تصوير الفعاليات في دبي 2026" },
  { locale: "ar", slug: "taswiremolak-dubai-2026", title: "تصوير العقارات في دبي 2026" },
  { locale: "ar", slug: "taswirzifaf-dubai-2026", title: "تصوير الزفاف في دبي 2026" },
  { locale: "ar", slug: "video-sharikaat-dubai-2026", title: "إنتاج فيديو الشركات دبي 2026" },
  { locale: "ru", slug: "arabskaya-svadba-fotografiya-dubai-2026", title: "Арабская свадьба фотосъёмка в Дубае 2026" },
  { locale: "ru", slug: "detskiy-fotograf-dubai-2026", title: "Детский фотограф в Дубае 2026" },
  { locale: "ru", slug: "fashion-fotografiya-dubai-2026", title: "Фэшн фотография в Дубае 2026" },
  { locale: "ru", slug: "fotograf-na-den-rozhdeniya-dubai-2026", title: "Фотограф на день рождения в Дубае 2026" },
  { locale: "ru", slug: "fotograf-na-pomolvku-dubai-2026", title: "Фотограф на помолвку в Дубае 2026" },
  { locale: "ru", slug: "fotograf-novorozhdennykh-dubai-2026", title: "Фотограф новорождённых Дубай 2026" },
  { locale: "ru", slug: "fotograf-para-dubai-2026", title: "Фотограф для пар в Дубае 2026" },
  { locale: "ru", slug: "fotografiya-detey-dubai-2026", title: "Фотография детей в Дубае 2026" },
  { locale: "ru", slug: "fotografiya-edy-dubai-2026", title: "Фудфотография для ресторанов в Дубае" },
  { locale: "ru", slug: "fotografiya-nedvizhimosti-dubai-2026", title: "Фотография недвижимости Дубай 2026" },
  { locale: "ru", slug: "fotografiya-restoranov-dubai-2026", title: "Фотосъёмка ресторанов и еды в Дубае 2026" },
  { locale: "ru", slug: "fotografiya-tovarov-dubai-2026", title: "Фотосъёмка товаров в Дубае 2026" },
  { locale: "ru", slug: "fotosessiya-beremennosti-dubai-2026", title: "Фотосессия беременности в Дубае 2026" },
  { locale: "ru", slug: "fotosessiya-novorozhdennykh-dubai-2026", title: "Фотосессия новорождённых в Дубае 2026" },
  { locale: "ru", slug: "fotosyomka-feropriiatiy-dubai-2026", title: "Фотосъёмка мероприятий в Дубае 2026" },
  { locale: "ru", slug: "headshot-fotografiya-dubai-2026", title: "Хедшот фотография в Дубае 2026" },
  { locale: "ru", slug: "indiyskaya-svadba-fotografiya-dubai-2026", title: "Индийская свадьба фотосъёмка в Дубае 2026" },
  { locale: "ru", slug: "korporativnoe-video-dubai-2026", title: "Корпоративное видео Дубай 2026" },
  { locale: "ru", slug: "kreator-kontenta-sotssetey-dubai-2026", title: "Контент для соцсетей в Дубае 2026" },
  { locale: "ru", slug: "layfstayl-fotografiya-dubai-2026", title: "Лайфстайл фотосъёмка в Дубае 2026" },
  { locale: "ru", slug: "nikah-fotografiya-dubai-2026", title: "Никах фотосъёмка в Дубае 2026" },
  { locale: "ru", slug: "personal-brending-fotografiya-dubai-2026", title: "Фотосъёмка личного бренда в Дубае 2026" },
  { locale: "ru", slug: "predsvadebnaya-fotosessiya-dubai-2026", title: "Предсвадебная фотосессия в Дубае 2026" },
  { locale: "ru", slug: "rily-socsietey-dubai-2026", title: "Рилсы и контент для соцсетей в Дубае 2026" },
  { locale: "ru", slug: "semeinaya-fotosessiya-dubai-2026", title: "Семейная фотосессия Дубай 2026" },
  { locale: "ru", slug: "semka-nedvizhimosti-dubai-2026", title: "Съёмка недвижимости Дубай 2026" },
  { locale: "ru", slug: "sportivnyi-fotograf-dubai-2026", title: "Спортивный фотограф в Дубае 2026" },
  { locale: "ru", slug: "stoimost-videosemki-dubai-2026", title: "Стоимость видеосъёмки Дубай 2026" },
  { locale: "ru", slug: "svadebnyi-fotograf-abu-dhabi-2026", title: "Свадебный фотограф Абу-Даби 2026" },
  { locale: "ru", slug: "svadebnyi-fotograf-dubai-2026", title: "Свадебный фотограф Дубай 2026" },
  { locale: "ru", slug: "svadebnyi-fotograf-indiyskaya-svadba-dubai-2026", title: "Фотограф на индийскую свадьбу в Дубае 2026" },
  { locale: "ru", slug: "vyezdnaya-svadba-dubai-2026", title: "Выездная свадьба в Дубае 2026 — фотосъёмка" },
  { locale: "zh", slug: "chanpin-sheying-dubai-2026", title: "迪拜产品摄影指南2026" },
  { locale: "zh", slug: "fangchan-paizhao-dubai-2026", title: "迪拜房产摄影价格与套餐2026" },
  { locale: "zh", slug: "hunli-sheying-dubai-2026", title: "迪拜婚礼摄影价格与地点2026" },
  { locale: "zh", slug: "huodong-paizhao-dubai-2026", title: "迪拜企业活动摄影指南2026" },
  { locale: "zh", slug: "meishi-paizhao-dubai-2026", title: "迪拜餐厅与菜单摄影指南2026" },
  { locale: "zh", slug: "qiye-shipin-dubai-2026", title: "迪拜企业宣传片与客户证言2026" },
  { locale: "zh", slug: "qiye-shipin-zhizuo-dubai-2026", title: "迪拜企业视频制作指南2026" },
  { locale: "zh", slug: "shejiao-meiti-neirong-dubai-2026", title: "迪拜Reels与TikTok短视频制作2026" },
  { locale: "zh", slug: "wurenji-hangpai-dubai-2026", title: "迪拜无人机航拍法规与价格2026" },
];

export function getInternationalBlogPosts(locale: InternationalBlogLocale) {
  return INTERNATIONAL_BLOG_POSTS.filter((post) => post.locale === locale);
}

