import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, speakableSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/wedding-packages";

export const metadata: Metadata = {
  title: "Wedding Photoshoot Dubai Packages & Prices 2026 | From AED 1,799 — Backyard Studio Official",
  description:
    "Wedding photoshoot in Dubai — packages & prices 2026. Affordable photography from AED 1,799 (≈ $490 / ₹41,000), photo + video from AED 3,500, full-day from AED 8,500. GCAA drone, same-day teaser, 48-hour delivery. Compare every wedding shoot package & add-ons.",
  keywords: [
    "wedding photoshoot in Dubai packages",
    "wedding photoshoot in Dubai price",
    "wedding shoot Dubai packages",
    "wedding shoot Dubai price",
    "wedding shoot Dubai cost",
    "wedding shoot Dubai cost for couple",
    "wedding photographer Dubai price",
    "wedding videography UAE packages",
    "wedding photoshoot in Dubai price in indian rupees",
    "pre wedding photoshoot package",
    "cheap wedding photoshoot in Dubai",
    "affordable wedding photoshoot in Dubai",
    "cheap wedding photographer Dubai price",
    "best affordable wedding photoshoot in Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photoshoot Dubai — Packages & Prices 2026 | Backyard Studio Official",
    description:
      "Wedding packages from AED 1,799 — affordable photography to multi-day productions. Full price tables, add-ons, INR/USD guide.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-08.webp", width: 1200, height: 630, alt: "Wedding Photoshoot Dubai Packages — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photoshoot Dubai Packages & Prices 2026",
    description: "From AED 1,799 — affordable to multi-day, GCAA drone, 48-hour delivery.",
    images: ["/images/wedding/wedding-08.webp"],
  },
};

const PACKAGES = [
  {
    name: "Essential",
    price: "AED 1,799",
    intl: "≈ USD 490 · INR 41,000",
    label: "Affordable Photography",
    desc: "Our budget-friendly wedding photoshoot — professional photography for intimate ceremonies and court weddings.",
    includes: [
      "1 professional photographer",
      "3 hours of coverage",
      "100+ edited high-resolution photos",
      "Online delivery gallery",
      "48-hour delivery",
      "Add videography from AED 1,200",
    ],
    featured: false,
  },
  {
    name: "Silver",
    price: "AED 3,500",
    intl: "≈ USD 950 · INR 80,000",
    label: "Half-Day Coverage",
    desc: "Civil ceremonies, nikah ceremonies, court weddings, and intimate celebrations up to 4 hours.",
    includes: [
      "1 photographer + 1 videographer",
      "4 hours of coverage",
      "150–200 edited high-resolution photos",
      "3-minute highlight video",
      "Online delivery gallery",
      "48-hour delivery",
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 8,500",
    intl: "≈ USD 2,300 · INR 195,000",
    label: "Full-Day Wedding — Most Popular",
    desc: "Our most-booked package: full wedding day from bridal prep to reception send-off.",
    includes: [
      "2 photographers + 2 videographers",
      "10 hours of coverage",
      "400–600 edited photos",
      "Cinematic highlight film (5–8 min)",
      "Aerial drone footage (GCAA licensed)",
      "Same-day teaser clip for Instagram",
      "48-hour full delivery",
      "Pre-wedding consultation",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 18,000+",
    intl: "≈ USD 4,900 · INR 4.1 lakh+",
    label: "Premium Multi-Day",
    desc: "Indian and Pakistani multi-day weddings, destination celebrations, and large productions.",
    includes: [
      "Full multi-day coverage (mehndi, baraat, walima)",
      "3+ photographers & videographers",
      "1,000+ edited photo gallery",
      "Full-length wedding film + highlights",
      "Same-day reel for social media",
      "Aerial drone — all locations",
      "Pre-wedding shoot included free",
      "48-hour delivery guarantee",
    ],
    featured: false,
  },
];

const ADDONS = [
  ["Pre-wedding photoshoot (2h, 1 location)", "from AED 1,500"],
  ["Extra hour of coverage", "AED 500"],
  ["Additional photographer or videographer", "AED 1,200/day"],
  ["Full-length ceremony edit", "AED 1,500"],
  ["Premium photo album (hardcover)", "from AED 1,200"],
  ["Express 24-hour delivery", "AED 1,000"],
  ["Henna / mehndi night coverage (3h)", "from AED 2,500"],
];

const FAQS = [
  {
    q: "How much does a wedding photoshoot in Dubai cost?",
    a: "A wedding photoshoot in Dubai costs AED 1,500–25,000+ depending on coverage. At Backyard Studio Official: AED 1,799 for our affordable Essential package (photography only, 100+ edited photos), AED 3,500 for half-day photo + video, AED 8,500 for a full wedding day (2+2 crew, drone, same-day teaser), and AED 18,000+ for multi-day Indian/destination weddings.",
  },
  {
    q: "Do you have a cheap or affordable wedding photoshoot package in Dubai?",
    a: "Yes — our Essential package at AED 1,799 is built for couples who want professional wedding photography on a budget: 1 experienced photographer, 3 hours of coverage, 100+ edited high-resolution photos, and the same 48-hour delivery as our premium packages. It is affordable, not amateur — the same photographers who shoot our AED 18,000 weddings shoot Essential bookings. Videography can be added from AED 1,200.",
  },
  {
    q: "What is the wedding photoshoot in Dubai price in Indian rupees?",
    a: "At 2026 exchange rates (1 AED ≈ ₹23), our Silver package (AED 3,500) is approximately ₹80,000, Gold (AED 8,500) is approximately ₹1.95 lakh, and Platinum (AED 18,000+) starts around ₹4.1 lakh. For comparison, a top-tier wedding photography team in Mumbai or Delhi typically charges ₹2–5 lakh per day — Dubai coverage with drone aerials is competitively priced for NRI and destination weddings.",
  },
  {
    q: "What is the difference between the Essential package and budget photographers charging AED 1,500?",
    a: "Budget operators at AED 1,500 typically deliver in 3–6 weeks with no backup gear and no editing standards. Essential (AED 1,799) gets you a photographer from a 2,400+ production studio, backup camera bodies on-site, professionally edited photos, and guaranteed 48-hour delivery. From Silver upward, every package adds videography, larger crews, GCAA drone aerials, and same-day teasers — a wedding cannot be re-shot, so each tier removes more risk.",
  },
  {
    q: "Do your wedding packages include both photography and videography?",
    a: "Yes — every Backyard Studio wedding package includes both photo and video as standard. Most Dubai studios price them separately; combining one coordinated team is cheaper than booking two vendors and produces a consistent look across your gallery and film.",
  },
  {
    q: "Is there a travel fee for weddings in Abu Dhabi or other emirates?",
    a: "No. All packages cover all 7 UAE emirates — Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain — with zero travel fees.",
  },
  {
    q: "How do payments work?",
    a: "A 30% deposit secures your date, with the balance due after delivery. We accept bank transfer, card, and cash. Peak season dates (October–March) typically book 2–4 months ahead.",
  },
  {
    q: "Can packages be customised?",
    a: "Yes. Start from the closest package and add hours, crew, a henna night, an album, or a pre-wedding shoot. Send us your itinerary on WhatsApp and we will quote a tailored package within 2 hours.",
  },
];

export default function WeddingPackagesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Wedding Packages", url: PAGE_URL },
  ]);
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const speakable = speakableSchema(PAGE_URL, ["h1", "h2", ".speakable"]);
  const packageList = itemListSchema(
    PACKAGES.map((p) => ({ name: `${p.name} Wedding Package — ${p.price}`, url: PAGE_URL + "#packages", description: p.desc }))
  );

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(packageList) }} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <Image src="/images/wedding/wedding-08.webp" alt="Wedding photoshoot packages in Dubai — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.8) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <p className="eyebrow mb-3">2026 Prices · Photo + Video in Every Package · No Travel Fees in UAE</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">WEDDING PHOTOSHOOT DUBAI — PACKAGES &amp; PRICES</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl">
          <div className="max-w-3xl space-y-5 mb-14">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Wedding photoshoot packages in Dubai at Backyard Studio Official start at AED 1,799 (≈ USD 490 / ₹41,000) for our affordable Essential photography package, AED 3,500 for half-day photo + video coverage, and AED 8,500 (≈ USD 2,300 / ₹1.95 lakh) for a full wedding day with drone and same-day teaser. From Silver upward every package includes both photography and videography, GCAA-licensed drone on Gold and above, and guaranteed 48-hour delivery on everything. These are the same transparent prices we quote on WhatsApp; no hidden fees, no travel charges anywhere in the UAE.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              We have delivered 2,400+ productions across the UAE since founders Fahad Iqbal Butt and Syed Mazhar Zaidi started the studio — weddings at Burj Al Arab and Emirates Palace, multi-day Indian weddings, Emirati bridal halls, and intimate beach nikahs. Choose your package below, or send us your date for a tailored quote within 2 hours.
            </p>
          </div>

          {/* Package cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16" id="packages">
            {PACKAGES.map((pkg) => (
              <div key={pkg.name} className="p-8 border flex flex-col" style={{ borderColor: pkg.featured ? "var(--gold)" : "var(--border)", background: "var(--black-2)" }}>
                <p className="text-[0.65rem] tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>{pkg.label}</p>
                <h2 className="font-display text-4xl text-cream">{pkg.name}</h2>
                <p className="font-display text-3xl mt-2" style={{ color: "var(--gold)" }}>{pkg.price}</p>
                <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>{pkg.intl}</p>
                <p className="text-silver/60 text-sm my-4 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={15} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <span className="text-silver/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`${pkg.featured ? "btn-gold" : "btn-outline"} w-full justify-center flex items-center gap-2`}>
                  Get This Package <ArrowUpRight size={14} />
                </Link>
              </div>
            ))}
          </div>

          {/* Add-ons */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-display text-4xl text-cream mb-6">POPULAR ADD-ONS</h2>
              <div className="border" style={{ borderColor: "var(--border)" }}>
                {ADDONS.map(([name, price], i) => (
                  <div key={name} className="flex items-center justify-between gap-4 p-4" style={{ background: i % 2 ? "var(--black-2)" : "transparent", borderBottom: i < ADDONS.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span className="text-silver/70 text-sm">{name}</span>
                    <span className="text-cream text-sm whitespace-nowrap font-semibold">{price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-display text-4xl text-cream mb-6">HOW DO WE COMPARE?</h2>
              <p className="text-silver/70 leading-relaxed text-base mb-4 speakable">
                Cheap wedding photographers in Dubai charge AED 1,500–2,500 — usually one shooter, no backup gear, and 3–6 week delivery. Our Essential package (AED 1,799) competes in that range but with studio-grade editing and 48-hour delivery. Mid-market studios charge AED 4,000–8,000 for photo and video booked separately; our Silver and Gold packages include both in one coordinated crew, plus GCAA-licensed aerials and a same-day teaser from Gold up.
              </p>
              <p className="text-silver/70 leading-relaxed text-base">
                For international couples: our Gold package at AED 8,500 is roughly USD 2,300 or ₹1.95 lakh — below what an equivalent two-team setup costs in London, New York, Mumbai, or Delhi, with Dubai's skyline included.
              </p>
              <div className="mt-6 p-6 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
                <p className="text-cream font-semibold text-sm mb-2">Not sure which package fits?</p>
                <p className="text-silver/60 text-sm mb-4">Send your date, venue, and guest count on WhatsApp — tailored quote within 2 hours.</p>
                <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20package%20quote" target="_blank" rel="noreferrer" className="btn-gold w-full justify-center flex items-center gap-2">
                  WhatsApp Us <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="max-w-4xl">
            <h2 className="font-display text-4xl text-cream mb-8">WEDDING PACKAGE PRICES — FAQs</h2>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <div key={faq.q} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                  <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cross links */}
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/services/wedding-photography" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Wedding Photography Dubai →
            </Link>
            <Link href="/services/affordable-wedding-photography" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Affordable Wedding Photography →
            </Link>
            <Link href="/services/flying-dress-photoshoot" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Flying Dress Photoshoot →
            </Link>
            <Link href="/services/wedding-photography-abu-dhabi" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Wedding Photographer Abu Dhabi →
            </Link>
            <Link href="/services/wedding-videography" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Wedding Videography →
            </Link>
            <Link href="/services/pre-wedding-shoot" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Pre-Wedding Shoots →
            </Link>
            <Link href="/blog/wedding-photographer-cost-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              Full 2026 Cost Guide →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
