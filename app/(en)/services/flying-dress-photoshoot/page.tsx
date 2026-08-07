import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/flying-dress-photoshoot";

export const metadata: Metadata = {
  title: "Flying Dress Photoshoot Dubai | Desert & Beach from AED 1,499 — Backyard Studio Official",
  description:
    "Flying dress photoshoot in Dubai from AED 1,499 — flowing dress included, desert dunes, Burj Khalifa & beach locations, golden-hour timing, 50+ edited photos in 48 hours. Dubai's iconic flying dress experience for tourists, brides & birthdays.",
  keywords: [
    "flying dress photoshoot Dubai",
    "flying dress shoot Dubai",
    "flying dress Dubai price",
    "flying dress photoshoot Dubai packages",
    "desert flying dress shoot Dubai",
    "Dubai flying dress experience",
    "red dress photoshoot Dubai",
    "tourist photoshoot Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Flying Dress Photoshoot Dubai | From AED 1,499 — Backyard Studio Official",
    description:
      "Dubai's iconic flying dress shoot — dress included, desert & beach locations, golden-hour timing, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-14.webp", width: 1200, height: 630, alt: "Flying Dress Photoshoot Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flying Dress Photoshoot Dubai | From AED 1,499",
    description: "Dress included, desert & beach locations, 48-hour delivery.",
    images: ["/images/wedding/wedding-14.webp"],
  },
};

const FAQS = [
  {
    q: "How much does a flying dress photoshoot cost in Dubai?",
    a: "A flying dress photoshoot in Dubai costs AED 1,000–4,000 depending on locations and inclusions. Backyard Studio Official's flying dress packages start at AED 1,499 with the dress included, one location, professional posing direction, and 50+ edited photos delivered in 48 hours. Our most popular package (AED 2,499) covers two locations with two dress colours and drone aerials.",
  },
  {
    q: "Is the flying dress included in the price?",
    a: "Yes — every package includes the flowing dress rental with a choice of colours (red, royal blue, yellow, fuchsia, white, and more), fitted over your own clothing. You do not need to buy or bring anything; we also bring clips and accessories to fit the dress to your size on location.",
  },
  {
    q: "Where is the best place for a flying dress shoot in Dubai?",
    a: "The desert dunes at golden hour are the classic flying dress backdrop — the wind, sand, and warm light are what made this shoot famous on Instagram. Other top locations: Kite Beach or JBR with the skyline behind you, the Palm Jumeirah boardwalk with Atlantis, and rooftop shoots facing the Burj Khalifa at sunset.",
  },
  {
    q: "How does the dress 'fly'? Do I need to pose?",
    a: "Our team throws and guides the dress train on a count while the photographer shoots in burst mode — you simply hold the pose we direct. No experience needed; we guide every pose, and most guests get the signature shot within the first 15 minutes. The result: 50+ keepers, not 3 lucky frames.",
  },
  {
    q: "Can couples or groups do a flying dress shoot?",
    a: "Yes — couples shoots (he stands, the dress flies) are our second most-booked format, and we photograph birthday groups, proposals (we coordinate the surprise), and mother-daughter sessions. Extra dresses can be added for AED 300 each so everyone gets a turn.",
  },
  {
    q: "What should I bring to a flying dress photoshoot?",
    a: "Just yourself, a fitted base outfit in a neutral colour (bodysuit or fitted top and leggings work best), and comfortable sandals for the sand. We bring the dress, clips, a reflector, drone (where permitted), and water. Hair down photographs best in the desert wind.",
  },
];

const PACKAGES = [
  {
    name: "Classic",
    price: "AED 1,499",
    label: "Single Location",
    includes: ["1-hour shoot, 1 location", "Flying dress included (your colour choice)", "Professional posing direction", "50+ edited photos", "Online gallery", "48-hour delivery"],
    featured: false,
  },
  {
    name: "Signature",
    price: "AED 2,499",
    label: "Two Locations + Drone — Most Popular",
    includes: ["2-hour shoot, 2 locations", "2 dress colours", "GCAA drone aerials (where permitted)", "100+ edited photos", "Golden-hour scheduling", "10 premium retouched selects", "48-hour delivery"],
    featured: true,
  },
  {
    name: "Luxury",
    price: "AED 3,999",
    label: "Desert + Beach Story",
    includes: ["Half-day shoot, up to 3 locations", "3 dress colours", "Cinematic video reel (30–60 sec)", "Drone at all permitted locations", "200+ edited photos", "Transport coordination", "48-hour delivery"],
    featured: false,
  },
];

const LOCATIONS = [
  { name: "Desert Dunes (Al Qudra / Fossil Rock)", desc: "The iconic shot — wind, sand, and golden-hour light. Best 1–2 hours before sunset." },
  { name: "Kite Beach & JBR", desc: "Skyline backdrop with sea breeze that keeps the dress airborne shot after shot." },
  { name: "Palm Jumeirah Boardwalk", desc: "Atlantis behind you, open sea ahead — strongest with drone aerials." },
  { name: "Downtown Rooftops", desc: "Burj Khalifa at blue hour for the editorial city version of the flying dress." },
];

export default function FlyingDressPhotoshootPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Flying Dress Photoshoot Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Flying Dress Photoshoot Dubai",
    description: "Dubai's iconic flying dress photoshoot — dress included, desert, beach and skyline locations with professional direction and 48-hour delivery. From AED 1,499.",
    url: PAGE_URL,
    price: "1499",
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
        <Image src="/images/wedding/wedding-14.webp" alt="Flying dress photoshoot in the Dubai desert at sunset — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.75) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">Dress Included · From AED 1,499 · Desert, Beach &amp; Skyline</p>
          <h1 className="font-display text-[clamp(2.2rem,6.5vw,5.5rem)] leading-none text-cream">FLYING DRESS PHOTOSHOOT DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              The flying dress photoshoot is Dubai&apos;s most iconic photo experience — and Backyard Studio Official&apos;s packages start at AED 1,499 with the flowing dress included, professional posing direction, and 50+ edited photos delivered within 48 hours. We shoot the classic desert-dunes version at golden hour, beach sessions with the Marina skyline, and rooftop editions facing the Burj Khalifa — with drone aerials flown under GCAA licence available at every permitted location.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              We have flown dresses for tourists ticking off a Dubai bucket list, brides adding a statement session to their wedding package, proposals we helped keep secret, and birthday groups taking turns in three colours. The technique matters more than luck: our team throws and guides the train on a count while the photographer shoots in burst, so you leave with dozens of keepers — not three lucky frames. Founders Fahad Iqbal Butt and Syed Mazhar Zaidi run every session on a production schedule timed to the light.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">FLYING DRESS PACKAGES &amp; PRICES</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Flying dress photoshoot packages in Dubai from AED 1,499 to AED 3,999 — dress rental included in every package, no hidden fees.
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
              <p className="text-xs mt-4" style={{ color: "var(--muted)" }}>
                Add-ons: extra dress colour AED 300 · hair &amp; makeup artist from AED 600 · extra location AED 500.
              </p>
            </div>

            {/* Locations */}
            <div className="mt-12" id="locations">
              <h2 className="font-display text-4xl text-cream mb-3">WHERE DO YOU SHOOT FLYING DRESS SESSIONS?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                The best flying dress locations in Dubai are the desert dunes at golden hour, Kite Beach and JBR, the Palm Jumeirah boardwalk, and Downtown rooftops facing the Burj Khalifa.
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
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">FLYING DRESS DUBAI — FAQs</h2>
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
              <h3 className="font-display text-3xl text-cream mb-2">BOOK YOUR SESSION</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Tell us your dates and dress colour — we reply within 2 hours with golden-hour slots.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20flying%20dress%20photoshoot%20quote" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Dress Colours</p>
              <p className="font-display text-3xl text-cream">10+</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Red, royal blue, yellow, fuchsia, white &amp; more</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/pre-wedding-shoot" className="block text-silver/70 hover:text-gold transition-colors">Pre-Wedding Shoots →</Link>
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography →</Link>
                <Link href="/services/photo-shoots" className="block text-silver/70 hover:text-gold transition-colors">Photo Shoots →</Link>
                <Link href="/blog/pre-wedding-shoot-locations-dubai-2026" className="block text-silver/70 hover:text-gold transition-colors">Dubai Locations Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
