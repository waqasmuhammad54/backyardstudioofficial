import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-abu-dhabi";

export const metadata: Metadata = {
  title: "Wedding Photographer Abu Dhabi | From AED 7,500",
  description:
    "Wedding photographer in Abu Dhabi — photography & videography packages from AED 7,500 with no travel fees. Emirates Palace, Saadiyat, Yas Island & bridal hall coverage. licensed aerial partners, same-day teaser, 48-hour delivery. Emirati, Arabic, Indian & Western weddings.",
  keywords: [
    "wedding photographer Abu Dhabi",
    "wedding photography Abu Dhabi",
    "wedding videography Abu Dhabi",
    "wedding videographer Abu Dhabi",
    "Abu Dhabi wedding packages",
    "Emirati wedding photographer Abu Dhabi",
    "wedding photoshoot Abu Dhabi price",
    "Emirates Palace wedding photographer",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Abu Dhabi | From AED 7,500 — Backyard Studio Official",
    description:
      "Photo + video wedding packages in Abu Dhabi with no travel fees — Emirates Palace, Saadiyat, Yas Island. licensed aerial partners, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-09.webp", width: 1200, height: 630, alt: "Wedding Photographer Abu Dhabi — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Photographer Abu Dhabi | From AED 7,500",
    description: "Photo + video packages, no travel fees, licensed aerial partners, 48-hour delivery.",
    images: ["/images/wedding/wedding-09.webp"],
  },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Abu Dhabi?",
    a: "Wedding photography in Abu Dhabi costs AED 7,500–65,000+ depending on coverage. Backyard Studio Official's packages are identical in Abu Dhabi and Dubai — Essential photography from AED 7,500, half-day photo + video from AED 15,500, full-day Gold from AED 22,500 with drone aerials and same-day teaser — and we never charge travel fees anywhere in the UAE.",
  },
  {
    q: "Do you charge extra to cover a wedding in Abu Dhabi?",
    a: "No. Travel within all 7 UAE emirates is included in every package. An Emirates Palace wedding costs the same as one at Address Downtown — our Dubai-based crews mobilise to Abu Dhabi multiple times a week.",
  },
  {
    q: "Which Abu Dhabi wedding venues have you photographed?",
    a: "We regularly shoot at Emirates Palace Mandarin Oriental, the St. Regis and Park Hyatt on Saadiyat Island, W Abu Dhabi and Hilton on Yas Island, Conrad Etihad Towers, the Corniche beach venues, and private bridal halls and majlis venues across the city. We scout any new venue before the wedding day at no charge.",
  },
  {
    q: "Can you photograph Emirati weddings in Abu Dhabi with a female crew?",
    a: "Yes. We provide all-female photography and videography crews for bridal halls and ladies' receptions, with strict no-male-access workflows and private delivery galleries. Emirati and Khaleeji weddings are one of our most-booked categories in Abu Dhabi.",
  },
  {
    q: "Do your Abu Dhabi packages include drone footage?",
    a: "Yes — Gold and Platinum packages include aerial drone cinematography, and all aerial work is fully permitted. Note that some Abu Dhabi locations (Corniche, certain island venues) require additional permissions, which we arrange in advance as part of the package.",
  },
  {
    q: "How fast is delivery for Abu Dhabi weddings?",
    a: "The same as everywhere we shoot: a same-day teaser on Gold and Platinum packages, and the full edited gallery plus highlight film within 48 hours, contractually guaranteed.",
  },
];

const VENUES = [
  { name: "Emirates Palace Mandarin Oriental", desc: "The gold-standard ballroom and gardens — we know every photo spot and lighting window." },
  { name: "Saadiyat Island Resorts", desc: "St. Regis and Park Hyatt beach ceremonies with white-sand golden hours." },
  { name: "Yas Island", desc: "W Abu Dhabi and waterfront venues — modern backdrops and marina night shots." },
  { name: "Conrad Etihad Towers", desc: "Skyline elevation and dramatic city views over the Corniche." },
  { name: "Corniche & Beach Venues", desc: "Public-beach permits arranged; sunset ceremonies over the Gulf." },
  { name: "Bridal Halls & Majlis Venues", desc: "Female crews available, privacy-first workflows for Emirati weddings." },
];

const PACKAGES = [
  {
    name: "Essential",
    price: "AED 7,500",
    label: "Affordable Photography",
    includes: ["1 professional photographer", "3 hours of coverage", "100+ edited photos", "Online gallery", "48-hour delivery"],
    featured: false,
  },
  {
    name: "Gold",
    price: "AED 22,500",
    label: "Full-Day Wedding — Most Popular",
    includes: ["2 photographers + 2 videographers", "10 hours of coverage", "400–600 edited photos", "Cinematic highlight film (5–8 min)", "Drone aerials", "Same-day teaser clip", "48-hour full delivery"],
    featured: true,
  },
  {
    name: "Platinum",
    price: "AED 65,000+",
    label: "Premium Multi-Day",
    includes: ["Full multi-day coverage", "3+ photographers & videographers", "1,000+ edited photos", "Full-length wedding film", "Drone at all locations", "Pre-wedding shoot included"],
    featured: false,
  },
];

export default function WeddingPhotographyAbuDhabiPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Wedding Photographer Abu Dhabi", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Abu Dhabi",
    description: "Wedding photography and videography in Abu Dhabi — Emirates Palace, Saadiyat, Yas Island and bridal halls, with no travel fees. From AED 7,500.",
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
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/wedding/wedding-09.webp" alt="Wedding photographer in Abu Dhabi — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">No Travel Fees · Emirates Palace to Yas Island · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER ABU DHABI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Backyard Studio Official is a wedding photographer Abu Dhabi couples book at Dubai prices — packages from AED 7,500 for professional photography and AED 22,500 for a full wedding day with two photographers, two videographers, drone aerials, and a same-day teaser, with zero travel fees anywhere in the UAE. We shoot in Abu Dhabi multiple times a week: Emirates Palace ballrooms, Saadiyat beach ceremonies, Yas Island receptions, and private bridal halls across the capital.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Every Abu Dhabi wedding gets the same production standards founders Fahad Iqbal Butt and Syed Mazhar Zaidi set for our 2,400+ UAE productions — paired shooters with backup cinema gear, venue scouting before the day, drone permissions arranged in advance, and your complete gallery delivered within 48 hours. For Emirati weddings, all-female crews with privacy-first workflows are available for bridal halls and ladies&apos; receptions.
            </p>

            {/* Packages */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">ABU DHABI WEDDING PACKAGES &amp; PRICES</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Wedding packages in Abu Dhabi from AED 7,500 — identical pricing to Dubai, no travel fees. Full tiers on our <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
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

            {/* Venues */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHICH ABU DHABI WEDDING VENUES DO YOU COVER?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                We photograph weddings at every major Abu Dhabi venue — Emirates Palace, Saadiyat Island resorts, Yas Island, Conrad Etihad Towers, the Corniche, and private bridal halls.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {VENUES.map((v) => (
                  <div key={v.name} className="p-5 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <div className="flex items-start gap-3">
                      <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                      <div>
                        <p className="text-cream font-semibold text-sm mb-1">{v.name}</p>
                        <p className="text-silver/60 text-xs leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY ABU DHABI — FAQs</h2>
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
              <p className="eyebrow mb-4">Guides</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/blog/wedding-videography-abu-dhabi-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Wedding Videography in Abu Dhabi — 2026 Guide →
                </Link>
                <Link href="/blog/abu-dhabi-photographer-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Hiring a Photographer in Abu Dhabi →
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and Abu Dhabi venue — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Abu%20Dhabi" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Travel Fees to Abu Dhabi</p>
              <p className="font-display text-3xl text-cream">AED 0</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Included in every package, all 7 emirates</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography Dubai →</Link>
                <Link href="/services/wedding-videography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Videography →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">All Wedding Packages →</Link>
                <Link href="/locations/abu-dhabi" className="block text-silver/70 hover:text-gold transition-colors">Production in Abu Dhabi →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
