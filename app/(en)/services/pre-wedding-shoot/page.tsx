import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight, MapPin } from "lucide-react";
import VimeoEmbed from "@/components/shared/VimeoEmbed";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/pre-wedding-shoot";

export const metadata: Metadata = {
  title: "Pre-Wedding Photoshoot Dubai | Packages from AED 1,500 — Backyard Studio Official",
  description:
    "Pre-wedding photoshoot in Dubai from AED 1,500 — desert sunset, Burj Khalifa, Madinat Jumeirah & beach locations. Couple shoots with cinematic photo + video, licensed aerial partners, 48-hour delivery. Top pre-wedding photographers in Dubai.",
  keywords: [
    "pre wedding photoshoot Dubai",
    "pre wedding photoshoot Dubai price",
    "pre wedding photoshoot package",
    "pre wedding shoot Dubai locations",
    "pre wedding photographers in Dubai",
    "couple photoshoot Dubai",
    "engagement photoshoot Dubai",
    "desert photoshoot Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Pre-Wedding Photoshoot Dubai | From AED 1,500 — Backyard Studio Official",
    description:
      "Desert, Burj Khalifa, Madinat Jumeirah & beach pre-wedding shoots. Photo + video, licensed aerial partners, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-05.webp", width: 1200, height: 630, alt: "Pre-Wedding Photoshoot Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pre-Wedding Photoshoot Dubai | From AED 1,500",
    description: "Desert, Burj Khalifa & beach pre-wedding shoots. Photo + video, 48-hour delivery.",
    images: ["/images/wedding/wedding-05.webp"],
  },
};

const FAQS = [
  {
    q: "How much does a pre-wedding photoshoot cost in Dubai?",
    a: "A pre-wedding photoshoot in Dubai costs between AED 1,000 and AED 6,000 depending on locations, duration, and whether video is included. Backyard Studio Official's pre-wedding packages start at AED 1,500 for a 2-hour single-location shoot with 50+ edited photos, and AED 3,000 for our most popular multi-location package with photo + cinematic video and drone aerials.",
  },
  {
    q: "What are the best pre-wedding shoot locations in Dubai?",
    a: "The most popular pre-wedding shoot locations in Dubai are the desert dunes at golden hour (Al Qudra or Fossil Rock), the Burj Khalifa viewpoints from Sheikh Mohammed bin Rashid Boulevard, Madinat Jumeirah's traditional architecture with Burj Al Arab backdrop, JBR and Kite Beach at sunset, Dubai Creek and Al Fahidi's heritage lanes, and the Palm Jumeirah boardwalk. We scout and secure permissions for every location before your shoot.",
  },
  {
    q: "Do we need a permit for a pre-wedding photoshoot in Dubai?",
    a: "Public-space personal shoots are generally permitted, but some locations — hotel grounds, Madinat Jumeirah, certain Downtown spots, and any drone footage — require permissions or permits. Backyard Studio handles location permissions and aerial work is flown by GCAA-licensed partner operators, so your aerials are always legal.",
  },
  {
    q: "What should we wear for a pre-wedding shoot in Dubai?",
    a: "We recommend two outfits: one formal (gown/suit or traditional dress) and one casual, switched between locations. Light, flowing fabrics photograph beautifully against desert and beach backdrops. Our team shares a full styling and timing guide after booking — golden hour scheduling is built into every package.",
  },
  {
    q: "Can tourists book a pre-wedding photoshoot in Dubai?",
    a: "Yes — about half our pre-wedding couples fly in from India, the UK, Russia, and China specifically for a Dubai shoot. We handle locations, timing, and transport planning, and deliver your full gallery within 48 hours so you have everything before you fly home.",
  },
  {
    q: "Is a pre-wedding shoot included in your wedding packages?",
    a: "A pre-wedding photoshoot is included free in our top-tier wedding package and can be added to any other wedding package from AED 1,500 — lower than booking it standalone. Current wedding package rates are published on our pricing page.",
  },
];

const PACKAGES = [
  {
    name: "Classic",
    price: "AED 1,500",
    label: "Single Location",
    includes: ["2-hour shoot, 1 location", "1 photographer", "50+ edited photos", "Online gallery", "48-hour delivery"],
    featured: false,
  },
  {
    name: "Signature",
    price: "AED 3,000",
    label: "Multi-Location + Film — Most Popular",
    includes: ["4-hour shoot, 2–3 locations", "Photographer + videographer", "100+ edited photos", "60–90 sec cinematic film", "GCAA drone aerials", "Golden-hour scheduling", "48-hour delivery"],
    featured: true,
  },
  {
    name: "Luxury",
    price: "AED 5,500",
    label: "Full-Day Story",
    includes: ["8-hour shoot, up to 4 locations", "2 photographers + videographer", "200+ edited photos", "3-minute cinematic film", "Drone at all permitted locations", "Styling consultation", "Location permits handled", "48-hour delivery"],
    featured: false,
  },
];

const LOCATIONS = [
  { name: "Desert Dunes at Golden Hour", desc: "Al Qudra & Fossil Rock — the classic Dubai pre-wedding backdrop." },
  { name: "Burj Khalifa & Downtown", desc: "Boulevard viewpoints and fountain backdrops at blue hour." },
  { name: "Madinat Jumeirah", desc: "Traditional wind towers with the Burj Al Arab behind you." },
  { name: "JBR & Kite Beach", desc: "Sunset golden light with the Marina or Burj Al Arab skyline." },
  { name: "Al Fahidi & Dubai Creek", desc: "Heritage lanes, abras, and old-Dubai texture." },
  { name: "Palm Jumeirah Boardwalk", desc: "Atlantis backdrop and open sea — best with drone aerials." },
];

export default function PreWeddingShootPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Pre-Wedding Photoshoot Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Pre-Wedding Photoshoot Dubai",
    description: "Pre-wedding and couple photoshoots in Dubai — desert, Burj Khalifa, beach and heritage locations with photo, cinematic video and aerial via licensed partners. From AED 1,500.",
    url: PAGE_URL,
    price: "1500",
  });
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const speakable = speakableSchema(PAGE_URL, ["h1", "h2", ".speakable"]);
  const locationsList = itemListSchema(
    LOCATIONS.map((l) => ({ name: l.name, url: PAGE_URL + "#locations", description: l.desc }))
  );

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsList) }} />

      {/* Hero */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <Image src="/images/wedding/wedding-05.webp" alt="Pre-wedding photoshoot in Dubai — couple at sunset by Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">From AED 1,500 · Desert, Burj Khalifa &amp; Beach · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.2rem,6.5vw,5.5rem)] leading-none text-cream">PRE-WEDDING PHOTOSHOOT DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              A pre-wedding photoshoot in Dubai with Backyard Studio Official starts at AED 1,500 — and our most popular package (AED 3,000) covers 2–3 locations in one golden-hour-planned session with both photos and a cinematic film. We have shot couples on the Al Qudra dunes at sunset, under the Burj Khalifa at blue hour, and on Kite Beach as the Burj Al Arab lights up — with drone aerials flown by GCAA-licensed partners and the full edited gallery delivered in 48 hours.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Half the couples we shoot fly into Dubai just for this — from India, the UK, Russia, and China. We plan everything around light and logistics: locations sequenced so you hit each one at its best hour, permissions handled in advance, and a styling guide sent before you pack. Founders Fahad Iqbal Butt and Syed Mazhar Zaidi built the same production discipline into pre-wedding shoots that runs our commercial sets.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">PRE-WEDDING PHOTOSHOOT PACKAGES &amp; PRICES</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Pre-wedding photoshoot packages in Dubai from AED 1,500 to AED 5,500. Every package includes editing, online gallery, and 48-hour delivery.
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

            {/* Locations */}
            <div className="mt-12" id="locations">
              <h2 className="font-display text-4xl text-cream mb-3">WHERE ARE THE BEST PRE-WEDDING SHOOT LOCATIONS IN DUBAI?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                The best pre-wedding shoot locations in Dubai are the desert at golden hour, Downtown's Burj Khalifa viewpoints, Madinat Jumeirah, the beaches at sunset, Al Fahidi heritage district, and Palm Jumeirah. Here is how we shoot each:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {LOCATIONS.map((loc) => (
                  <div key={loc.name} className="p-5 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <div>
                        <p className="text-cream font-semibold text-sm mb-1">{loc.name}</p>
                        <p className="text-silver/60 text-xs leading-relaxed">{loc.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
                Full guide with timing, permits, and sample shots: <Link href="/blog/pre-wedding-shoot-locations-dubai-2026" className="underline hover:text-gold">Best Pre-Wedding Shoot Locations in Dubai — 2026</Link>
              </p>
            </div>

            {/* Video */}
            <div className="mt-12">
              <p className="eyebrow mb-6">Watch a Couple Shoot</p>
              <div className="overflow-hidden border" style={{ borderColor: "var(--border)" }}>
                <VimeoEmbed vimeoId="1194038771" poster="/images/wedding/wedding-05.webp" title="Couple Shoots" aspectRatio="16/9" />
              </div>
              <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>Pre-wedding films produced by Backyard Studio Official, UAE</p>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">PRE-WEDDING SHOOT DUBAI — FAQs</h2>
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
              <h3 className="font-display text-3xl text-cream mb-2">PLAN YOUR SHOOT</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Tell us your dates and dream locations — we reply within 2 hours with a plan and quote.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20pre-wedding%20shoot%20quote" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Golden Hour</p>
              <p className="font-display text-3xl text-cream">PLANNED IN</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Every shoot scheduled around the best light</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography →</Link>
                <Link href="/services/wedding-videography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Videography →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Wedding Packages &amp; Prices →</Link>
                <Link href="/blog/pre-wedding-shoot-locations-dubai-2026" className="block text-silver/70 hover:text-gold transition-colors">Locations Guide 2026 →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
