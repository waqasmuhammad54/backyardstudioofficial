import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-videography";

export const metadata: Metadata = {
  title: "Wedding Videographer Dubai | Cinematic Wedding Videography UAE — Backyard Studio Official",
  description:
    "Dubai's best wedding videographer — a real production house, not a photographer with a camera. Cinematic wedding films from AED 3,500, GCAA drone aerials, same-day teaser, 48-hour delivery. Wedding videography across Dubai, Abu Dhabi & all UAE.",
  keywords: [
    "wedding videographer Dubai",
    "wedding videography UAE",
    "wedding videography UAE packages",
    "wedding videography UAE cost",
    "top 10 best wedding videographer in Dubai",
    "professional videographer Dubai",
    "cinematic wedding film Dubai",
    "wedding video Dubai price",
    "wedding videography Abu Dhabi",
    "photography and videography services in Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Videographer Dubai | Cinematic Wedding Films — Backyard Studio Official",
    description:
      "Cinematic wedding films from AED 3,500 — cinema cameras, GCAA drone, same-day teaser, 48-hour delivery. Dubai, Abu Dhabi & all UAE.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-03.webp", width: 1200, height: 630, alt: "Wedding Videographer Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Videographer Dubai — Backyard Studio Official",
    description: "Cinematic wedding films, GCAA drone, 48-hour delivery. Dubai & all UAE.",
    images: ["/images/wedding/wedding-03.webp"],
  },
};

const FAQS = [
  {
    q: "How much does wedding videography cost in the UAE?",
    a: "Wedding videography in the UAE costs between AED 2,000 and AED 30,000+ depending on crew, gear, and film length. Backyard Studio Official's packages start at AED 3,500 (videographer + photographer, 3-minute highlight film) and AED 8,500 for full-day coverage with 2 videographers, GCAA drone aerials, a 5–8 minute cinematic film, and a same-day teaser. Multi-day Indian and destination weddings start at AED 18,000.",
  },
  {
    q: "What makes Backyard Studio different from other wedding videographers in Dubai?",
    a: "Most Dubai wedding videographers are photographers who added video. Backyard Studio Official is a production company first — the same team that delivers DVCs, TV commercials, and brand films for UAE businesses brings cinema cameras, professional audio, licensed drone pilots, and colour-graded post-production to your wedding. Founders Fahad Iqbal Butt and Syed Mazhar Zaidi have overseen 2,400+ productions.",
  },
  {
    q: "Do your wedding videography packages include drone footage?",
    a: "Yes. Gold (AED 8,500) and Platinum (AED 18,000+) packages include aerial drone cinematography, and our pilots are GCAA licensed — required by UAE law for commercial drone work. Many videographers fly unlicensed; if your venue asks for permits, an unlicensed operator cannot legally film your wedding aerials.",
  },
  {
    q: "How long until we receive our wedding film?",
    a: "Your same-day teaser is ready for Instagram within hours of the event (Gold and Platinum). The full edited highlight film and complete footage are delivered within 48 hours — contractually guaranteed. The UAE industry standard is 4–8 weeks.",
  },
  {
    q: "What is included in a cinematic wedding highlight film?",
    a: "A 5–8 minute colour-graded film cut to licensed music: bridal prep, ceremony with multi-camera coverage and clean audio of vows, drone establishing shots of the venue, candid guest moments, and the reception highlights. Full-length ceremony edits and speeches are included in Platinum or as an add-on.",
  },
  {
    q: "Do you film weddings in Abu Dhabi and the other emirates?",
    a: "Yes — we film weddings across all 7 UAE emirates with no travel fees: Emirates Palace and Saadiyat Island in Abu Dhabi, beach resorts in Ras Al Khaimah and Fujairah, and every Dubai venue from Madinat Jumeirah to Atlantis The Royal.",
  },
  {
    q: "Can we get both wedding photography and videography from one team?",
    a: "Yes — every Backyard Studio wedding package includes both. One coordinated team means the photographer and videographer never block each other's shots, your timeline runs once, and your photos and film share one consistent colour grade.",
  },
  {
    q: "Do you film Emirati, Arabic, Indian, and Pakistani weddings?",
    a: "Yes. We film Emirati bridal halls (female crew available), Khaleeji and Arabic weddings, multi-day Indian and Pakistani celebrations (mehndi, baraat, walima), Filipino, Russian, and Western weddings. We plan coverage around each tradition's key moments — the zaffa entrance, the varmala, the first look — so nothing is missed.",
  },
];

const PACKAGES = [
  {
    name: "Silver",
    price: "AED 3,500",
    label: "Half-Day Film",
    includes: ["1 videographer + 1 photographer", "4 hours of coverage", "3-minute highlight film", "150–200 edited photos", "Licensed music & colour grade", "48-hour delivery"],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 8,500",
    label: "Full-Day Cinematic — Most Popular",
    includes: ["2 videographers + 2 photographers", "10 hours of coverage", "Cinematic highlight film (5–8 min)", "GCAA drone aerials", "Same-day teaser clip", "Multi-camera ceremony + clean vow audio", "400–600 edited photos", "48-hour full delivery"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 18,000+",
    label: "Multi-Day Feature Film",
    includes: ["Full multi-day coverage", "3+ camera crew", "Full-length wedding film + highlights", "Same-day reel for social media", "Drone at every location", "Speeches & full ceremony edits", "1,000+ edited photos", "Pre-wedding shoot included"],
    featured: false,
  },
];

export default function WeddingVideographyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Wedding Videography Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Videography Dubai",
    description: "Cinematic wedding videography in Dubai and across the UAE — cinema cameras, GCAA drone aerials, same-day teaser, 48-hour delivery. From AED 3,500.",
    url: PAGE_URL,
    price: "3500",
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
        <Image src="/images/wedding/wedding-03.webp" alt="Wedding videographer in Dubai filming a cinematic wedding — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">A Production House for Your Wedding · GCAA Drone · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6rem)] leading-none text-cream">WEDDING VIDEOGRAPHER DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Backyard Studio Official is the wedding videographer Dubai couples book when the film matters as much as the day itself. Wedding videography packages start at AED 3,500 and every film is shot on cinema cameras by a crew from a working production house — the same team behind 2,400+ commercial productions, DVCs, and brand films across the UAE. Same-day teaser, GCAA-licensed drone aerials, and your full cinematic film delivered in 48 hours.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Here is the difference most couples discover too late: the majority of wedding videographers in Dubai are photographers who bought a second camera. We come from the other direction — film production first. That means multi-camera ceremony coverage with clean audio of your vows, colour-graded footage that matches from drone to dancefloor, and an editor who cuts story, not slideshows. We have filmed weddings we shot DVCs for the venue the week before — founders Fahad Iqbal Butt and Syed Mazhar Zaidi hold every wedding film to commercial standard.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WEDDING VIDEOGRAPHY PACKAGES &amp; COST</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Wedding videography in the UAE from AED 3,500 — every package includes photography too, so one team covers your entire day. No travel fees in any emirate.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
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
            </div>

            {/* Video */}
            <div className="mt-12">
              <p className="eyebrow mb-6">Watch Our Wedding Films</p>
              <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <VimeoEmbed vimeoId="1194038751" poster="/images/wedding/wedding-01.webp" title="Wedding Films by Backyard Studio" aspectRatio="16/9" />
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>Cinematic wedding films produced by Backyard Studio Official, UAE</p>
            </div>

            {/* Why production house */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-6">WHY HIRE A PRODUCTION HOUSE FOR YOUR WEDDING FILM?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["Cinema cameras + backups", "Full-frame cinema bodies with backup gear on-site. A failed card or camera never costs you a moment."],
                  ["Clean vow audio", "Wireless lavaliers and a dedicated audio recorder — you hear your vows, not the air conditioning."],
                  ["GCAA-licensed drone pilots", "Legal aerial cinematography at any UAE venue, with permits handled by us."],
                  ["Commercial-grade editing", "Colour grading, licensed music, and story-driven cuts from editors who deliver TV commercials weekly."],
                  ["Same-day teaser", "A 30–60 second edit ready for Instagram before your reception ends."],
                  ["48-hour delivery", "Your full film and gallery in 2 days, contractually guaranteed — not 2 months."],
                ].map(([title, desc]) => (
                  <div key={title} className="p-5 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-cream font-semibold text-sm mb-1">{title}</p>
                    <p className="text-silver/60 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING VIDEOGRAPHY UAE — FAQs</h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related reading */}
            <div className="mt-12">
              <p className="eyebrow mb-4">Guides &amp; Pricing</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/blog/wedding-videography-abu-dhabi-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Wedding Videography in Abu Dhabi — 2026 Guide →
                </Link>
                <Link href="/blog/wedding-photographer-cost-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Wedding Photographer &amp; Videographer Cost in Dubai →
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and venue — we reply within 2 hours with availability and a quote.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20videography%20quote" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>Filming across</p>
              <div className="flex flex-wrap gap-2">
                {["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "RAK", "Fujairah", "UAQ"].map((c) => (
                  <span key={c} className="text-xs px-3 py-1 border text-silver/60" style={{ borderColor: "var(--border)" }}>{c}</span>
                ))}
              </div>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Productions Delivered</p>
              <p className="font-display text-3xl text-cream">2,400+</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Weddings, DVCs, commercials &amp; films</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography →</Link>
                <Link href="/services/pre-wedding-shoot" className="block text-silver/70 hover:text-gold transition-colors">Pre-Wedding Shoots →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Wedding Packages &amp; Prices →</Link>
                <Link href="/services/aerial-drone" className="block text-silver/70 hover:text-gold transition-colors">Aerial Drone (GCAA) →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
