import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Camera, Film, Star, MapPin, BookOpen, Globe } from "lucide-react";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/weddings";

export const metadata: Metadata = {
  title: { absolute: "Wedding Photography Dubai | Packages & Films" },
  description:
    "Wedding photography and cinematic films from AED 7,500. Pre-wedding shoots, flying dress, packages across all 7 UAE emirates.",
  keywords: [
    "wedding photography Dubai",
    "wedding videographer Dubai",
    "UAE wedding photographer",
    "wedding packages Dubai",
    "pre wedding shoot Dubai",
    "wedding photographer all emirates",
    "Dubai wedding planning guides",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Weddings — Dubai & UAE Wedding Photography & Films | Backyard Studio Official",
    description: "Wedding photography, cinematic films, pre-wedding shoots & packages across all 7 UAE emirates. From AED 7,500.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-01.webp", width: 1200, height: 630, alt: "Dubai & UAE Weddings — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weddings — Dubai & UAE | Backyard Studio Official",
    description: "Photography, films, pre-wedding & packages across all 7 emirates. From AED 7,500.",
    images: ["/images/wedding/wedding-01.webp"],
  },
};

const SERVICES = [
  { icon: Camera, href: "/services/wedding-photography", title: "Wedding Photography Dubai", desc: "Packages from AED 7,500 — every tier from affordable photography to multi-day productions." },
  { icon: Film, href: "/services/wedding-videography", title: "Wedding Videography", desc: "Coordinated wedding films with package-specific crew, edits and delivery terms." },
  { icon: Star, href: "/services/pre-wedding-shoot", title: "Pre-Wedding Shoots", desc: "Desert, Burj Khalifa & beach couple sessions from AED 1,500, planned around golden hour." },
  { icon: Star, href: "/services/flying-dress-photoshoot", title: "Flying Dress Photoshoot", desc: "Dubai's iconic flying dress experience from AED 1,499 — dress included." },
  { icon: Camera, href: "/services/affordable-wedding-photography", title: "Affordable Wedding Photography", desc: "The Essential package: AED 7,500, studio standards, no hidden fees." },
  { icon: MapPin, href: "/services/wedding-photography-abu-dhabi", title: "Wedding Photographer Abu Dhabi", desc: "Emirates Palace to Yas Island at Dubai prices — zero travel fees." },
  { icon: BookOpen, href: "/wedding-packages", title: "Wedding Packages & Prices 2026", desc: "Every package compared, with USD & INR conversions and add-on pricing." },
];

const EMIRATE_PAGES = [
  { href: "/services/wedding-photography-abu-dhabi", label: "Abu Dhabi" },
  { href: "/services/wedding-photography-sharjah", label: "Sharjah" },
  { href: "/services/wedding-photography-ajman", label: "Ajman" },
  { href: "/services/wedding-photography-ras-al-khaimah", label: "Ras Al Khaimah" },
  { href: "/services/wedding-photography-fujairah", label: "Fujairah" },
  { href: "/services/wedding-photography-umm-al-quwain", label: "Umm Al Quwain" },
];

const EN_GUIDES = [
  { slug: "wedding-photographer-cost-dubai-2026", label: "Wedding Photographer Cost in Dubai — 2026 Price Guide" },
  { slug: "best-wedding-photographers-dubai-2026", label: "Best Wedding Photographers in Dubai 2026" },
  { slug: "pre-wedding-shoot-locations-dubai-2026", label: "Best Pre-Wedding Shoot Locations in Dubai" },
  { slug: "wedding-videography-abu-dhabi-2026", label: "Wedding Videography in Abu Dhabi" },
  { slug: "emirati-wedding-photography-dubai-2026", label: "Emirati Wedding Photography" },
  { slug: "arabic-wedding-photography-dubai-2026", label: "Arabic Wedding Photography" },
  { slug: "indian-wedding-photographer-dubai-2026", label: "Indian Wedding Photographer in Dubai" },
  { slug: "indian-wedding-photography-dubai", label: "Indian Wedding Photography — Full Guide" },
  { slug: "pakistani-wedding-photographer-dubai-2026", label: "Pakistani Wedding Photographer in Dubai" },
  { slug: "desi-wedding-photographer-dubai-2026", label: "Desi Wedding Photographer in Dubai" },
  { slug: "filipino-wedding-photographer-dubai-2026", label: "Filipino Wedding Photographer in Dubai" },
  { slug: "russian-wedding-photographer-dubai-2026", label: "Russian Wedding Photographer in Dubai" },
  { slug: "british-western-wedding-photographer-dubai-2026", label: "British & Western Wedding Photographer" },
  { slug: "moroccan-wedding-photographer-dubai-2026", label: "Moroccan Wedding Photographer in Dubai" },
];

const INTL_GUIDES = [
  { href: "/ar/blog/taswirzifaf-dubai-2026", label: "تصوير حفلات الزفاف في دبي", lang: "العربية" },
  { href: "/ar/blog/taswir-zifaf-emirati-dubai-2026", label: "تصوير الزفاف الإماراتي", lang: "العربية" },
  { href: "/ar/blog/taswir-zifaf-arabi-dubai-2026", label: "تصوير الزفاف العربي", lang: "العربية" },
  { href: "/ar/blog/asear-tasswirvideo-dubai-2026", label: "أسعار تصوير الفيديو في دبي", lang: "العربية" },
  { href: "/ru/blog/svadebnyi-fotograf-dubai-2026", label: "Свадебный фотограф в Дубае", lang: "Русский" },
  { href: "/ru/blog/svadebnyi-fotograf-abu-dhabi-2026", label: "Свадебный фотограф в Абу-Даби", lang: "Русский" },
  { href: "/ru/blog/stoimost-videosemki-dubai-2026", label: "Стоимость видеосъёмки в Дубае", lang: "Русский" },
  { href: "/zh/blog/hunli-sheying-dubai-2026", label: "迪拜婚礼摄影完整指南", lang: "中文" },
  { href: "/zh/blog/wurenji-hangpai-dubai-2026", label: "迪拜无人机航拍指南", lang: "中文" },
];

const FAQS = [
  {
    q: "What wedding services does Backyard Studio Official offer in the UAE?",
    a: "We cover wedding photography and videography, pre-wedding couple shoots, flying-dress photoshoots, henna and mehndi coverage across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain. Any aerial or venue-permission requirements are confirmed for the specific location.",
  },
  {
    q: "How much does a wedding photographer cost in Dubai and the UAE?",
    a: "Current combined photo and video packages are AED 7,500 for Essential, AED 15,500 for Silver, AED 22,500 for Gold and AED 65,000 for Platinum. The package page lists the current crew, hours, edits, albums and delivery terms.",
  },
  {
    q: "Do you serve couples who don't speak English?",
    a: "Yes — our team works in English, Arabic, Urdu/Hindi, and Russian, and our wedding guides are published in English, Arabic, Russian, and Chinese. Around half of our pre-wedding couples fly in from abroad.",
  },
  {
    q: "How fast do we get our wedding photos and film?",
    a: "Essential, Silver and Gold currently list final delivery in 10–15 working days, with RAW data delivered the same day. Platinum timing is confirmed from the event duration and deliverables.",
  },
];

export default function WeddingsHubPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: PAGE_URL },
  ]);
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const servicesList = itemListSchema(
    SERVICES.map((s) => ({ name: s.title, url: "https://www.backyardstudioofficial.com" + s.href, description: s.desc }))
  );

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesList) }} />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/wedding/wedding-16.webp" alt="Weddings by Backyard Studio Official — Dubai and all UAE emirates" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <p className="eyebrow mb-3">Photography · Films · Packages · Guides — All 7 Emirates</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-cream">WEDDINGS</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl">
          <div className="max-w-3xl space-y-5 mb-14">
            <p className="text-silver/70 leading-relaxed text-base">
              Explore Backyard Studio Official&apos;s wedding photography, videography, pre-wedding shoots, flying-dress experience, current packages and planning guides for Dubai and all seven UAE emirates.
            </p>
          </div>

          {/* Services grid */}
          <h2 className="font-display text-4xl text-cream mb-8">WEDDING SERVICES &amp; PACKAGES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className="p-6 border group transition-colors hover:border-gold" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                <s.icon size={20} style={{ color: "var(--gold)" }} className="mb-3" />
                <p className="text-cream font-semibold text-sm mb-2 group-hover:text-gold transition-colors">{s.title} →</p>
                <p className="text-silver/60 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          {/* Emirates */}
          <h2 className="font-display text-4xl text-cream mb-3">WEDDING PHOTOGRAPHER IN EVERY EMIRATE</h2>
          <p className="text-silver/60 text-sm mb-8">
            Explore dedicated coverage pages for each emirate; final travel, venue and permission requirements are confirmed in your written proposal:
          </p>
          <div className="flex flex-wrap gap-3 mb-16">
            <Link href="/services/wedding-photography" className="px-5 py-3 border text-sm text-silver/70 hover:text-gold hover:border-gold transition-colors" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              Dubai →
            </Link>
            {EMIRATE_PAGES.map((e) => (
              <Link key={e.href} href={e.href} className="px-5 py-3 border text-sm text-silver/70 hover:text-gold hover:border-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                {e.label} →
              </Link>
            ))}
          </div>

          {/* EN Guides */}
          <h2 className="font-display text-4xl text-cream mb-8">WEDDING PLANNING GUIDES</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {EN_GUIDES.map((g) => (
              <Link key={g.slug} href={`/blog/${g.slug}`} className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                {g.label} →
              </Link>
            ))}
          </div>

          {/* Multilingual guides */}
          <div className="flex items-center gap-3 mb-3">
            <Globe size={20} style={{ color: "var(--gold)" }} />
            <h2 className="font-display text-4xl text-cream">GUIDES IN العربية · РУССКИЙ · 中文</h2>
          </div>
          <p className="text-silver/60 text-sm mb-8">
            Native-language wedding guides for Arabic, Russian, and Chinese-speaking couples marrying in the UAE:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16">
            {INTL_GUIDES.map((g) => (
              <Link key={g.href} href={g.href} className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                <span className="text-[0.6rem] tracking-widest uppercase block mb-1" style={{ color: "var(--gold)" }}>{g.lang}</span>
                {g.label} →
              </Link>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-4xl mb-16">
            <h2 className="font-display text-4xl text-cream mb-8">WEDDINGS AT BACKYARD STUDIO — FAQs</h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <div key={faq.q} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="p-10 border text-center" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
            <h2 className="font-display text-4xl text-cream mb-3">CHECK YOUR WEDDING DATE</h2>
            <p className="text-silver/60 text-sm mb-6 max-w-xl mx-auto">Send your date, venue, and guest count — we reply within 2 hours with availability and a tailored quote.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="btn-gold flex items-center gap-2">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
