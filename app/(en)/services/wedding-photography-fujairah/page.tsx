import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-fujairah";

export const metadata: Metadata = {
  title: "Wedding Photographer Fujairah | East Coast Beach Weddings from AED 7,500 — Backyard Studio Official",
  description:
    "Wedding photographer in Fujairah — Le Méridien Al Aqah, Address Beach Resort, Snoopy Island & Hajar mountain backdrops. East coast beach weddings, photo + video from AED 7,500, licensed aerial partners, no travel fees, 48-hour delivery.",
  keywords: [
    "wedding photographer Fujairah",
    "wedding photography Fujairah",
    "Fujairah beach wedding",
    "Le Meridien Al Aqah wedding",
    "east coast UAE wedding photographer",
    "Snoopy Island wedding shoot",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Fujairah | From AED 7,500 — Backyard Studio Official",
    description: "East coast beach weddings — Al Aqah resorts, Snoopy Island, Hajar mountains. licensed aerial partners, no travel fees.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-17.webp", width: 1200, height: 630, alt: "Wedding Photographer Fujairah — Backyard Studio Official" }],
  },
  twitter: { card: "summary_large_image", title: "Wedding Photographer Fujairah | From AED 7,500", description: "East coast beach weddings with mountain backdrops. 48-hour delivery.", images: ["/images/wedding/wedding-17.webp"] },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Fujairah?",
    a: "Identical to Dubai: Essential photography AED 7,500, Silver photo + video AED 15,500, full-day Gold AED 22,500 with drone and same-day teaser, Platinum multi-day AED 65,000+. The two-hour drive to the east coast is on us — zero travel fees in every package.",
  },
  {
    q: "Which Fujairah wedding venues do you cover?",
    a: "Le Méridien Al Aqah Beach Resort, Address Beach Resort Fujairah, Fujairah Rotana, InterContinental Fujairah, Sandy Beach Hotel with Snoopy Island behind you, and private east-coast villas. Each combines Indian Ocean-facing beaches with the Hajar mountains rising directly behind — the most dramatic wedding backdrop in the UAE.",
  },
  {
    q: "What makes Fujairah different for wedding photos?",
    a: "It is the only emirate on the Gulf of Oman: sunrise over the sea (not sunset), the Hajar mountains in your ceremony backdrop, and Snoopy Island's silhouette offshore. We schedule east-coast weddings around sunrise golden hour and mountain-shadow light in the late afternoon — the inverse of a Dubai timeline.",
  },
  {
    q: "Can you fly drones at Fujairah beach weddings?",
    a: "Yes — GCAA-licensed pilots with permissions arranged in advance. Aerials of the Al Aqah coastline with the mountains behind are a signature shot; resort-side approvals usually take us 3–5 working days to arrange.",
  },
  {
    q: "How fast is delivery for Fujairah weddings?",
    a: "Same-day teaser on Gold and Platinum, full edited gallery and highlight film within 48 hours — guaranteed, regardless of emirate.",
  },
];

const VENUES = [
  { name: "Le Méridien Al Aqah", desc: "The east coast's classic beach-wedding resort — lawn ceremonies facing the sea." },
  { name: "Address Beach Resort Fujairah", desc: "New-generation luxury with clean architectural lines and beach access." },
  { name: "Sandy Beach & Snoopy Island", desc: "The iconic island silhouette — strongest at sunrise and with drone aerials." },
  { name: "Fujairah Rotana & InterContinental", desc: "Ballroom receptions with beach ceremony options." },
  { name: "Hajar Mountain Backdrops", desc: "Wadi and mountain-road couple shoots 20 minutes from the coast." },
  { name: "Private East-Coast Villas", desc: "Intimate ceremonies and elopements on quiet stretches of coastline." },
];

export default function WeddingPhotographyFujairahPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: "https://www.backyardstudioofficial.com/weddings" },
    { name: "Wedding Photographer Fujairah", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Fujairah",
    description: "East coast beach wedding photography in Fujairah — Al Aqah resorts, Snoopy Island, Hajar mountains. From AED 7,500, no travel fees.",
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
        <Image src="/images/wedding/wedding-17.webp" alt="Beach wedding photographer in Fujairah — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/weddings" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Wedding Services
          </Link>
          <p className="eyebrow mb-3">East Coast Beaches · Mountain Backdrops · No Travel Fees</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER FUJAIRAH</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Fujairah gives you what no other emirate can — a beach ceremony on the Gulf of Oman with the Hajar mountains rising behind your vows — and Backyard Studio Official photographs it at Dubai prices, from AED 7,500 with zero travel fees. We shoot at Le Méridien Al Aqah, Address Beach Resort, and the Sandy Beach stretch facing Snoopy Island, with drone aerials flown by GCAA-licensed partners of the coastline. 2,400+ UAE productions; founders Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              East-coast light works differently: the sun rises over the sea here, so we build your timeline around sunrise couple portraits and late-afternoon mountain-shadow light. Every package includes 48-hour delivery; Gold adds the drone, a second crew pair, and a same-day teaser. Compare every tier on the <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
            </p>

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHERE DO YOU SHOOT WEDDINGS IN FUJAIRAH?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                The east coast venues we cover most:
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
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY FUJAIRAH — FAQs</h2>
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
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and Fujairah venue — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Fujairah" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Unique to Fujairah</p>
              <p className="font-display text-3xl text-cream">SUNRISE SEA</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>The only emirate with sunrise over the water</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Wedding services</p>
              <div className="space-y-2 text-sm">
                <Link href="/weddings" className="block text-silver/70 hover:text-gold transition-colors">All Weddings →</Link>
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography Dubai →</Link>
                <Link href="/services/wedding-videography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Videography →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Packages &amp; Prices →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
