import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography";

export const metadata: Metadata = {
  title: "Wedding Photography Dubai | Photo & Video Packages",
  description:
    "Wedding photography and videography in Dubai from AED 7,500. Compare current crew, coverage, album, video and delivery options for UAE weddings.",
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
    title: "Wedding Photography Dubai | Photo & Video Packages",
    description:
      "Current wedding photography and videography packages from AED 7,500, with detailed crew, deliverables and delivery terms.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-01.webp", width: 1200, height: 630, alt: "Wedding Photography Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography Dubai | From AED 7,500 — Backyard Studio Official",
    description: "Current photo and video wedding packages from AED 7,500 across the UAE.",
    images: ["/images/wedding/wedding-01.webp"],
  },
};

const FAQS = [
  {
    q: "How much does wedding photography cost in Dubai?",
    a: "Backyard Studio Official's current wedding photography and videography packages are AED 7,500, AED 15,500, AED 22,500 and AED 65,000. Each tier lists the crew, coverage, edits, albums and delivery terms; the final scope is confirmed in writing.",
  },
  {
    q: "Do you offer a cheap or affordable wedding photoshoot in Dubai?",
    a: "The Essential package is the lowest current tier at AED 7,500. It includes one photographer, one videographer, three hours of coverage, 30–40 edited photos, a full event video, same-day RAW data and final delivery in 10–15 working days.",
  },
  {
    q: "What is included in a wedding photoshoot package in Dubai?",
    a: "Every current package includes photography and videography. Crew size, photo count, video edits, albums, Reels and delivery timing vary by tier and are listed on the wedding packages page.",
  },
  {
    q: "What should we compare before choosing a wedding photographer?",
    a: "Compare the named crew, coverage hours, backup plan, photo count, video formats, album specifications, revision policy, delivery schedule and contract terms. We confirm these details in an itemised proposal before booking.",
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
    a: "Essential, Silver and Gold currently list final delivery in 10–15 working days, with RAW data delivered the same day. Platinum timing is confirmed from the event duration and final scope.",
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
    price: "AED 7,500",
    label: "Affordable Photography",
    includes: ["1 professional photographer", "1 videographer", "3 hours of coverage", "30–40 edited photos", "Full event edited video", "10–15 working days delivery", "RAW data delivered same day"],
    featured: false,
  },
  {
    name: "Silver",
    price: "AED 15,500",
    label: "Half-Day Coverage",
    includes: ["2 professional photographers", "2 videographers", "3 hours of coverage", "70–100 edited photos", "Full event edited video", "Event highlights edit", "10–15 working days delivery", "RAW data delivered same day"],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 22,500",
    label: "Full-Day Wedding — Most Popular",
    includes: ["2 photographers + 2 videographers", "3 hours of coverage", "1 printed album with box", "Full event video + highlights", "3 edited Reels", "Couple photo and song-video shoot", "Documentary story film + interview", "10–15 working days delivery", "RAW data delivered same day"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 65,000",
    label: "Premium Multi-Day",
    includes: ["3 professional photographers", "3 videographers", "Documentary interview film", "3–5 hours of coverage", "2 printed albums with boxes", "3–5 edited Reels", "Soft-copy USB", "Delivery confirmed from event duration"],
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
    description: "Professional wedding photography and videography packages in Dubai and across all 7 UAE emirates, from AED 7,500.",
    url: PAGE_URL,
    price: "7500",
  });
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src="/images/wedding/wedding-01.webp" alt="Wedding photography in Dubai by Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">Packages from AED 7,500 · All 7 Emirates · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-cream">WEDDING PHOTOGRAPHY DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base">
              Backyard Studio Official provides coordinated wedding photography and videography across Dubai and all seven UAE emirates. Current combined packages start at AED 7,500 and list the assigned crew, coverage time, edited assets, albums and delivery schedule before you enquire.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Whether you are planning an intimate nikah, an Indian or Pakistani celebration, an Emirati bridal-hall event or a destination wedding, the final written proposal is tailored to the ceremony schedule, venue access and required deliverables.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WEDDING PHOTOSHOOT PACKAGES &amp; PRICES</h2>
              <p className="text-silver/60 text-sm mb-8">
                Wedding photography packages in Dubai from AED 7,500 (affordable photography) to AED 65,000 (multi-day productions). Silver and above include photo + video. No travel fees anywhere in the UAE.
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
