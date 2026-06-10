import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography";

export const metadata: Metadata = {
  title: "Wedding Photography Dubai | Packages from AED 1,799 — Backyard Studio Official",
  description:
    "Dubai's best wedding photography studio. Affordable wedding photoshoot packages from AED 1,799, full photo + video from AED 3,500 with GCAA drone, same-day teaser & 48-hour delivery. Emirati, Arabic, Indian & Western weddings across all 7 UAE emirates.",
  keywords: [
    "wedding photography Dubai",
    "wedding photographer Dubai",
    "wedding photoshoot in Dubai",
    "wedding photoshoot in Dubai price",
    "wedding photoshoot in Dubai packages",
    "best wedding photographers in Dubai",
    "wedding photographer Dubai price",
    "wedding studio Dubai",
    "wedding photographer Abu Dhabi",
    "bridal photography Dubai",
    "cheap wedding photoshoot in Dubai",
    "affordable wedding photoshoot in Dubai",
    "cheap photographer in Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photography Dubai | Packages from AED 1,799 — Backyard Studio Official",
    description:
      "Wedding photoshoot packages from AED 1,799 — photo + video options, GCAA drone, 48-hour delivery. All 7 UAE emirates.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-01.webp", width: 1200, height: 630, alt: "Wedding Photography Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography Dubai | From AED 1,799 — Backyard Studio Official",
    description: "Photographer + videographer, GCAA drone, same-day teaser, 48-hour delivery. All 7 UAE emirates.",
    images: ["/images/wedding/wedding-01.webp"],
  },
};

const FAQS = [
  {
    q: "How much does wedding photography cost in Dubai?",
    a: "Wedding photography in Dubai costs between AED 1,500 and AED 25,000+ depending on crew size, hours, and deliverables. Backyard Studio Official's wedding packages start at AED 1,799 for our affordable Essential photography package, AED 3,500 for half-day photo + video coverage, and AED 8,500 for our most popular full-day Gold package with 2 photographers, 2 videographers, GCAA-licensed drone, and 48-hour delivery.",
  },
  {
    q: "Do you offer a cheap or affordable wedding photoshoot in Dubai?",
    a: "Yes — our Essential package at AED 1,799 is built for budget-conscious couples: a professional photographer for 3 hours, 100+ edited high-resolution photos, an online gallery, and 48-hour delivery. The same photographers who shoot our premium weddings cover Essential bookings, so affordable never means amateur. Videography can be added from AED 1,200.",
  },
  {
    q: "What is included in a wedding photoshoot package in Dubai?",
    a: "Every Backyard Studio wedding package includes both photography and videography, edited high-resolution photos, a cinematic highlight video, an online delivery gallery, and 48-hour delivery. Gold and Platinum packages add aerial drone footage (we are GCAA licensed), a same-day teaser for social media, and a pre-wedding consultation. We never charge travel fees within the UAE.",
  },
  {
    q: "Why choose Backyard Studio over a cheap wedding photographer in Dubai?",
    a: "Budget photographers in Dubai (AED 1,500–2,500) typically send one shooter with no backup gear, no drone licence, and 2–4 week delivery. Backyard Studio Official has delivered 2,400+ productions; our wedding crews shoot on cinema cameras with backup bodies, our drone pilots are GCAA licensed, and we contractually guarantee 48-hour delivery with a same-day teaser. One wedding cannot be re-shot — founders Fahad Iqbal Butt and Syed Mazhar Zaidi built our packages so nothing is left to chance.",
  },
  {
    q: "Do you photograph Emirati, Arabic, Indian, and Western weddings?",
    a: "Yes. We have photographed Emirati weddings with female-photographer crews for bridal halls, Arabic and Khaleeji weddings, multi-day Indian and Pakistani weddings (mehndi, baraat, walima), Filipino weddings, and Western destination weddings. Our team is multicultural and we plan coverage around each tradition's key moments.",
  },
  {
    q: "Do you cover weddings outside Dubai — Abu Dhabi, Sharjah, RAK?",
    a: "Yes. Backyard Studio Official covers weddings in all 7 UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — with no travel fees within the UAE. We regularly shoot at Emirates Palace and Saadiyat venues in Abu Dhabi and beach resorts in RAK and Fujairah.",
  },
  {
    q: "How fast do we receive our wedding photos?",
    a: "You receive a same-day teaser (Gold and Platinum packages) for Instagram within hours of the event, and your complete edited gallery and highlight film within 48 hours. Most Dubai studios take 2–6 weeks; 48-hour delivery is our standard, contractually guaranteed.",
  },
  {
    q: "Can we book a pre-wedding shoot with our wedding package?",
    a: "Yes. A pre-wedding photoshoot is included free in the Platinum package and can be added to Silver or Gold from AED 1,500. Popular locations include the Burj Khalifa viewpoints, Madinat Jumeirah, the desert at golden hour, and JBR beach. See our dedicated pre-wedding shoot service for details.",
  },
  {
    q: "How do we book a wedding photographer in Dubai with you?",
    a: "Send us your wedding date and venue on WhatsApp or through our contact form — we reply within 2 hours with availability and a tailored quote. A 30% deposit secures your date; the balance is due after delivery. Dates for peak season (October–March) book out 2–4 months ahead.",
  },
];

const PACKAGES = [
  {
    name: "Essential",
    price: "AED 1,799",
    label: "Affordable Photography",
    includes: ["1 professional photographer", "3 hours of coverage", "100+ edited photos", "Online delivery gallery", "48-hour delivery", "Add video from AED 1,200"],
    featured: false,
  },
  {
    name: "Silver",
    price: "AED 3,500",
    label: "Half-Day Coverage",
    includes: ["1 photographer + 1 videographer", "4 hours of coverage", "150–200 edited photos", "3-minute highlight video", "Online delivery gallery", "48-hour delivery"],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 8,500",
    label: "Full-Day Wedding — Most Popular",
    includes: ["2 photographers + 2 videographers", "10 hours of coverage", "400–600 edited photos", "Cinematic highlight film (5–8 min)", "Aerial drone footage (GCAA)", "Same-day teaser clip", "48-hour full delivery", "Pre-wedding consultation"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 18,000+",
    label: "Premium Multi-Day",
    includes: ["Full multi-day coverage", "3+ photographers & videographers", "1,000+ edited photo gallery", "Full-length wedding film", "Same-day reel for social media", "Aerial drone — all locations", "Pre-wedding shoot included", "48-hour delivery guarantee"],
    featured: false,
  },
];

const GALLERY = [
  "/images/wedding/wedding-02.webp",
  "/images/wedding/wedding-05.webp",
  "/images/wedding/wedding-08.webp",
  "/images/wedding/wedding-11.webp",
  "/images/wedding/wedding-14.webp",
  "/images/wedding/wedding-16.webp",
];

const RELATED_POSTS = [
  { slug: "wedding-photographer-cost-dubai-2026", label: "Wedding Photographer Cost in Dubai — Full 2026 Price Guide" },
  { slug: "best-wedding-photographers-dubai-2026", label: "Best Wedding Photographers in Dubai 2026" },
  { slug: "indian-wedding-photographer-dubai-2026", label: "Indian Wedding Photography in Dubai" },
  { slug: "emirati-wedding-photography-dubai-2026", label: "Emirati Wedding Photography in Dubai" },
  { slug: "arabic-wedding-photography-dubai-2026", label: "Arabic Wedding Photography in Dubai" },
  { slug: "pre-wedding-shoot-locations-dubai-2026", label: "Best Pre-Wedding Shoot Locations in Dubai" },
];

export default function WeddingPhotographyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Wedding Photography Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Dubai",
    description: "Professional wedding photography and videography packages in Dubai and across all 7 UAE emirates, from AED 1,799.",
    url: PAGE_URL,
    price: "1799",
  });
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const speakable = speakableSchema(PAGE_URL, ["h1", "h2", ".speakable"]);

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src="/images/wedding/wedding-01.webp" alt="Wedding photography in Dubai by Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">Packages from AED 1,799 · All 7 Emirates · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-cream">WEDDING PHOTOGRAPHY DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Backyard Studio Official is Dubai&apos;s best wedding photography studio, with wedding photoshoot packages in Dubai starting at AED 1,799 for affordable professional photography and AED 3,500 for combined photo + video coverage — every package delivers edited high-resolution photos and guaranteed 48-hour delivery. We have shot weddings at the Burj Al Arab, Atlantis The Royal, Emirates Palace, Address Downtown, and private bridal halls across all 7 UAE emirates — over 2,400 productions delivered since our founding by Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Affordable never means amateur here. Your wedding cannot be re-shot, so even our budget Essential package is covered by the same photographers who shoot our premium productions, with backup cinema cameras on-site. From Silver upward you get a coordinated photo + video crew, GCAA-licensed drone aerials, and a same-day teaser on Instagram before your guests have left the venue. Whether you are planning an intimate nikah, a multi-day Indian wedding, an Emirati bridal hall celebration, or a Western destination wedding on the beach, we build the coverage around your traditions.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WEDDING PHOTOSHOOT PACKAGES &amp; PRICES</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Wedding photography packages in Dubai from AED 1,799 (affordable photography) to AED 18,000+ (multi-day productions). Silver and above include photo + video. No travel fees anywhere in the UAE.
              </p>
              <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {PACKAGES.map((pkg) => (
                  <div key={pkg.name} className="p-6 border flex flex-col" style={{ borderColor: pkg.featured ? "var(--gold)" : "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>{pkg.label}</p>
                    <h3 className="font-display text-3xl text-cream">{pkg.name}</h3>
                    <p className="font-display text-2xl mt-1 mb-4" style={{ color: "var(--gold)" }}>{pkg.price}</p>
                    <ul className="space-y-2 mb-6 flex-1">
                      {pkg.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check size={14} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                          <span className="text-silver/70 text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className={`${pkg.featured ? "btn-gold" : "btn-outline"} w-full justify-center flex items-center gap-2 text-sm`}>
                      Get Quote <ArrowUpRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
                Full price tables, add-ons, and international currency guide on our <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
              </p>
            </div>

            {/* Gallery */}
            <div className="mt-12">
              <p className="eyebrow mb-6">Recent Weddings</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {GALLERY.map((src, i) => (
                  <div key={src} className={`relative overflow-hidden group ${i === 0 ? "col-span-2 md:col-span-1 md:row-span-2" : ""}`}>
                    <div className={`relative ${i === 0 ? "aspect-square md:h-full md:min-h-[280px]" : "aspect-video"}`}>
                      <Image src={src} alt={`Dubai wedding photography by Backyard Studio — ${i + 1}`} fill className="object-cover img-cinematic transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 50vw, 33vw" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Video */}
            <div className="mt-12">
              <p className="eyebrow mb-6">Watch Our Wedding Work</p>
              <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <VimeoEmbed vimeoId="1194038751" poster="/images/wedding/wedding-01.webp" title="Wedding Shoots" aspectRatio="16/9" />
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>Wedding films produced by Backyard Studio Official, UAE</p>
            </div>

            {/* Cultural coverage */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-6">EVERY WEDDING TRADITION, COVERED</h2>
              <p className="text-silver/70 leading-relaxed text-base mb-4">
                Dubai weddings are as diverse as the city. We have shot Emirati weddings where female photographers cover the bridal hall, Pakistani mehndis that run past 3 AM, Indian baraats arriving by vintage car, Filipino church ceremonies, Russian beach weddings on the Palm, and British destination elopements in the desert. Read our culture-specific guides:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {RELATED_POSTS.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    {p.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY DUBAI — FAQs</h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send us your wedding date and venue. We reply within 2 hours with availability and a tailored quote.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20photography%20quote" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>Weddings covered across</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((c) => (
                  <span key={c} className="text-xs px-3 py-1 border text-silver/60" style={{ borderColor: "var(--border)" }}>{c}</span>
                ))}
              </div>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Delivery</p>
              <p className="font-display text-3xl text-cream">48 HOURS</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Same-day teaser on Gold &amp; Platinum</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/wedding-videography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Videography →</Link>
                <Link href="/services/pre-wedding-shoot" className="block text-silver/70 hover:text-gold transition-colors">Pre-Wedding Shoots →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Wedding Packages &amp; Prices →</Link>
                <Link href="/services/affordable-wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Affordable Packages →</Link>
                <Link href="/services/flying-dress-photoshoot" className="block text-silver/70 hover:text-gold transition-colors">Flying Dress Photoshoot →</Link>
                <Link href="/services/wedding-photography-abu-dhabi" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photographer Abu Dhabi →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
