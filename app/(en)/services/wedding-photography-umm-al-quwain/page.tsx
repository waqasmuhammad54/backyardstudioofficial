import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-umm-al-quwain";

export const metadata: Metadata = {
  title: "Wedding Photographer Umm Al Quwain | Intimate Beach Weddings from AED 1,799 — Backyard Studio Official",
  description:
    "Wedding photographer in Umm Al Quwain — intimate beach ceremonies, mangrove lagoon couple shoots & family villa weddings. Photo + video from AED 1,799, GCAA drone, no travel fees, 48-hour delivery.",
  keywords: [
    "wedding photographer Umm Al Quwain",
    "wedding photography UAQ",
    "UAQ beach wedding",
    "intimate wedding photographer UAE",
    "elopement photographer UAE",
    "small wedding photographer Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Umm Al Quwain | From AED 1,799 — Backyard Studio Official",
    description: "Intimate beach & villa weddings, mangrove lagoon shoots. No travel fees, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-18.webp", width: 1200, height: 630, alt: "Wedding Photographer Umm Al Quwain — Backyard Studio Official" }],
  },
  twitter: { card: "summary_large_image", title: "Wedding Photographer Umm Al Quwain | From AED 1,799", description: "Intimate beach & villa weddings. 48-hour delivery, no travel fees.", images: ["/images/wedding/wedding-18.webp"] },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Umm Al Quwain?",
    a: "The same as every emirate we serve: Essential photography AED 1,799, Silver photo + video AED 3,500, full-day Gold AED 8,500 with drone and same-day teaser, Platinum from AED 18,000. UAQ is under an hour from our Dubai base and travel is always free.",
  },
  {
    q: "Where do you shoot weddings in Umm Al Quwain?",
    a: "Beach ceremonies along the UAQ coastline, family villa weddings, the Khor Al Beidah mangrove lagoon for couple shoots, hotel venues like the Vienna-style beach resorts on the lagoon, and traditional majlis celebrations. UAQ's quiet coastline suits couples who want privacy over spectacle.",
  },
  {
    q: "Is Umm Al Quwain good for an intimate wedding or elopement?",
    a: "It is the UAE's best-kept secret for exactly that — empty beaches, no crowds, easy permissions for small private ceremonies, and sunset light over the lagoon. Our Essential (AED 1,799) and Silver (AED 3,500) packages fit UAQ elopements and sub-50-guest weddings perfectly.",
  },
  {
    q: "Can you fly a drone over UAQ beaches and the lagoon?",
    a: "Yes — GCAA-licensed pilots, with permissions arranged in advance. Aerials over the Khor Al Beidah flats at low tide, with flamingos in winter season, are a signature UAQ shot.",
  },
  {
    q: "How fast is delivery?",
    a: "Same-day teaser on Gold and Platinum, and the complete edited gallery plus highlight film within 48 hours — guaranteed.",
  },
];

const VENUES = [
  { name: "UAQ Beach Ceremonies", desc: "Quiet, uncrowded sand — the most private beach weddings in the UAE." },
  { name: "Khor Al Beidah Lagoon", desc: "Mangrove flats, still water, and winter flamingos for couple shoots." },
  { name: "Family Villas & Majlis", desc: "Traditional celebrations photographed with privacy-first workflows." },
  { name: "Lagoon Resorts", desc: "Small-format resort ceremonies on the inner lagoon." },
  { name: "Old Town & Harbour", desc: "Heritage walls and dhow harbour textures for a different couple-shoot look." },
  { name: "Elopements Anywhere", desc: "Two people, one photographer, golden hour — from AED 1,799." },
];

export default function WeddingPhotographyUAQPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: "https://www.backyardstudioofficial.com/weddings" },
    { name: "Wedding Photographer Umm Al Quwain", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Umm Al Quwain",
    description: "Intimate beach and villa wedding photography in Umm Al Quwain — from AED 1,799 with no travel fees.",
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

      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/wedding/wedding-18.webp" alt="Intimate beach wedding photographer in Umm Al Quwain — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/weddings" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Wedding Services
          </Link>
          <p className="eyebrow mb-3">Intimate Beaches · Lagoon Shoots · No Travel Fees</p>
          <h1 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER UMM AL QUWAIN</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Umm Al Quwain is where UAE couples go when they want their wedding quiet — empty beaches, the Khor Al Beidah lagoon, no crowds — and Backyard Studio Official photographs it from AED 1,799 with zero travel fees. Intimate ceremonies and elopements are the emirate&apos;s strength, and our Essential and Silver packages are built for exactly that scale. 2,400+ UAE productions; founders Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Every booking includes professionally edited photos and guaranteed 48-hour delivery; Gold adds a full second crew pair, GCAA drone aerials over the lagoon flats, and a same-day teaser. Compare every tier on the <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
            </p>

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHERE DO YOU SHOOT IN UMM AL QUWAIN?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                Beaches, lagoon, villas, and heritage corners — UAQ&apos;s best wedding settings:
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

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY UAQ — FAQs</h2>
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

          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and UAQ location — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Umm%20Al%20Quwain" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Best For</p>
              <p className="font-display text-3xl text-cream">ELOPEMENTS</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Private beaches, from AED 1,799</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Wedding services</p>
              <div className="space-y-2 text-sm">
                <Link href="/weddings" className="block text-silver/70 hover:text-gold transition-colors">All Weddings →</Link>
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography Dubai →</Link>
                <Link href="/services/wedding-photography-ras-al-khaimah" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photographer RAK →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Packages &amp; Prices →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
