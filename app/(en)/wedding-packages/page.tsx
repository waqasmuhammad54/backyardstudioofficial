import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/wedding-packages";

export const metadata: Metadata = {
  title: "Wedding Photography Packages Dubai | Prices 2026",
  description:
    "Compare current Dubai wedding photography and videography packages from AED 7,500, including crew, coverage, edits, albums and delivery details.",
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
    title: "Wedding Photography Packages Dubai | Prices 2026",
    description:
      "Compare current photo and video wedding packages from AED 7,500 to AED 65,000, with inclusions and delivery details.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-08.webp", width: 1200, height: 630, alt: "Wedding Photoshoot Dubai Packages — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photography Packages Dubai | Prices 2026",
    description: "Compare current photo and video wedding packages, inclusions and delivery details.",
    images: ["/images/wedding/wedding-08.webp"],
  },
};

const PACKAGES = [
  {
    name: "Essential",
    price: "AED 7,500",
    intl: "Photography + videography",
    label: "Intimate Coverage",
    desc: "Professional photo and video coverage for intimate ceremonies and court weddings.",
    includes: [
      "1 professional photographer",
      "1 videographer",
      "3 hours of coverage",
      "30–40 edited photos",
      "Online drive link for photos + RAW data",
      "Full event edited video (1920×1080)",
      "10–15 working days delivery",
      "RAW data delivered same day",
    ],
    featured: false,
  },
  {
    name: "Silver",
    price: "AED 15,500",
    intl: "2 photographers + 2 videographers",
    label: "Half-Day Coverage",
    desc: "A coordinated four-person crew for civil ceremonies, nikahs and intimate celebrations.",
    includes: [
      "2 professional photographers",
      "2 videographers",
      "3 hours of coverage",
      "70–100 edited photos",
      "Full event edited video (1920×1080)",
      "Event highlights edit",
      "10–15 working days delivery",
      "RAW data delivered same day",
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 22,500",
    intl: "Photo, video, album, Reels + couple shoot",
    label: "Full-Day Wedding — Most Popular",
    desc: "A complete photo, video, album, highlights, Reels and couple-shoot package.",
    includes: [
      "2 professional photographers",
      "2 videographers",
      "3 hours of coverage",
      "1 edited, designed and printed album with box",
      "Full event video + event highlights",
      "3 edited Reels",
      "Couple photo and song-video shoot",
      "Documentary-style story film + interview",
      "10–15 working days delivery",
      "RAW data delivered same day",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 65,000",
    intl: "3 photographers + 3 videographers",
    label: "Premium Multi-Day",
    desc: "A premium production with dedicated portrait, album, candid, video and documentary coverage.",
    includes: [
      "3 professional photographers: portrait, album and candid",
      "3 videographers",
      "Documentary-style interview film",
      "3–5 hours of coverage",
      "2 edited, designed and printed albums with boxes",
      "3–5 edited Reels",
      "Soft-copy USB",
      "Delivery timeline confirmed from the event duration",
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
    a: "Backyard Studio Official's current wedding photography and videography packages are AED 7,500 for Essential, AED 15,500 for Silver, AED 22,500 for Gold, and AED 65,000 for Platinum. The final written proposal confirms the crew, coverage, deliverables, VAT and any selected add-ons before booking.",
  },
  {
    q: "What is included in the Essential wedding package?",
    a: "The AED 7,500 Essential package includes one photographer, one videographer, three hours of coverage, 30–40 edited photos, a full event video, same-day RAW data and final delivery in 10–15 working days.",
  },
  {
    q: "Can you quote the package in another currency?",
    a: "The contract and invoice are issued in AED. Your bank or card provider determines the conversion to USD, INR or another currency on the payment date, so we do not publish fixed exchange-rate estimates.",
  },
  {
    q: "How should we compare wedding production packages?",
    a: "Compare the confirmed crew size, coverage hours, photo count, video deliverables, album specifications, revision terms, delivery timing and any permit or travel costs. Backyard Studio provides these items in a written proposal before the date is secured.",
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
  const packageList = itemListSchema(
    PACKAGES.map((p) => ({ name: `${p.name} Wedding Package — ${p.price}`, url: PAGE_URL + "#packages", description: p.desc }))
  );

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />
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
            <p className="text-silver/70 leading-relaxed text-base">
              Current Dubai wedding photography and videography packages start at AED 7,500 for Essential coverage and extend to AED 65,000 for a premium six-person production. Every tier below lists its crew, coverage, edits and delivery terms so couples can compare scope before requesting an itemised proposal.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Package pricing was updated on 10 July 2026. Send your date, venue, ceremony schedule and guest count for a tailored quote; any venue permissions, travel requirements or optional add-ons will be confirmed in writing before booking.
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
              <p className="text-silver/70 leading-relaxed text-base mb-4">
                Compare packages by production scope, not only the headline price. Ask every supplier to specify crew size, coverage hours, the number and format of final assets, album specifications, revision terms and the final delivery schedule.
              </p>
              <p className="text-silver/70 leading-relaxed text-base">
                Backyard Studio confirms these items in an itemised AED proposal. Currency conversions are left to the payment provider so the page does not publish exchange rates that quickly become inaccurate.
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
