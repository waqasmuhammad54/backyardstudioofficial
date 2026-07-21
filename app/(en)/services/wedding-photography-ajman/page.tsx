import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-ajman";

export const metadata: Metadata = {
  title: "Wedding Photographer Ajman | Beach Resort Weddings from AED 7,500 — Backyard Studio Official",
  description:
    "Wedding photographer in Ajman — Ajman Saray, Fairmont Ajman & Al Zorah beach weddings, mangrove couple shoots. Photo + video from AED 7,500, female crews available, GCAA drone, no travel fees, 48-hour delivery.",
  keywords: [
    "wedding photographer Ajman",
    "wedding photography Ajman",
    "Ajman Saray wedding",
    "Fairmont Ajman wedding photographer",
    "Al Zorah wedding shoot",
    "Ajman bridal hall photographer",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Ajman | From AED 7,500 — Backyard Studio Official",
    description: "Ajman Saray, Fairmont & Al Zorah mangroves. Photo + video, female crews, no travel fees, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-13.webp", width: 1200, height: 630, alt: "Wedding Photographer Ajman — Backyard Studio Official" }],
  },
  twitter: { card: "summary_large_image", title: "Wedding Photographer Ajman | From AED 7,500", description: "Beach resorts & Al Zorah mangroves. Female crews available. 48-hour delivery.", images: ["/images/wedding/wedding-13.webp"] },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Ajman?",
    a: "Our Ajman pricing matches Dubai exactly: Essential photography AED 7,500, Silver photo + video AED 15,500, full-day Gold AED 22,500 with GCAA drone and same-day teaser, Platinum multi-day AED 65,000+. Ajman is 30 minutes from our Dubai base — travel is always free.",
  },
  {
    q: "Which Ajman wedding venues do you cover?",
    a: "Ajman Saray (a Luxury Collection resort), Fairmont Ajman, the Oberoi Beach Resort Al Zorah, Bahi Ajman Palace, Wyndham Garden, private bridal halls across the emirate, and family villa celebrations. The Al Zorah mangroves give Ajman a couple-shoot backdrop no other emirate has.",
  },
  {
    q: "Do you provide female crews for Ajman bridal halls?",
    a: "Yes — all-female photography and videography teams with privacy-first workflows are available for ladies' receptions and Emirati weddings in Ajman, same as our Sharjah coverage.",
  },
  {
    q: "What is special about an Al Zorah mangrove shoot?",
    a: "Golden-hour light through the mangrove channels, mirror-still water, and flamingos in season — a 30-minute couple session there between ceremony and reception produces some of the most distinctive wedding photos in the UAE. Drone aerials over the channels are GCAA-licensed and arranged in advance.",
  },
  {
    q: "How fast do we receive our Ajman wedding photos?",
    a: "Same-day teaser on Gold and Platinum packages, complete edited gallery and highlight film within 48 hours — contractually guaranteed.",
  },
];

const VENUES = [
  { name: "Ajman Saray, a Luxury Collection Resort", desc: "The emirate's flagship beach-wedding venue — lawn and ballroom options." },
  { name: "Fairmont Ajman", desc: "Modern beachfront ceremonies with skyline-free sea views." },
  { name: "Oberoi Al Zorah", desc: "Design-led luxury between golf greens and the mangroves." },
  { name: "Al Zorah Mangroves", desc: "Golden-hour couple shoots through the channels — unique to Ajman." },
  { name: "Bahi Ajman Palace", desc: "Arabesque architecture and courtyard receptions." },
  { name: "Private Bridal Halls & Villas", desc: "Female crews and privacy-first coverage available." },
];

export default function WeddingPhotographyAjmanPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: "https://www.backyardstudioofficial.com/weddings" },
    { name: "Wedding Photographer Ajman", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Ajman",
    description: "Wedding photography and videography in Ajman — beach resorts and Al Zorah mangroves, from AED 7,500 with no travel fees.",
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
        <Image src="/images/wedding/wedding-13.webp" alt="Wedding photographer in Ajman — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/weddings" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Wedding Services
          </Link>
          <p className="eyebrow mb-3">Beach Resorts · Al Zorah Mangroves · No Travel Fees</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER AJMAN</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Backyard Studio Official photographs Ajman weddings at exactly our Dubai prices — from AED 7,500 with zero travel fees. The emirate punches far above its size for weddings: Ajman Saray and Fairmont beach ceremonies, the Oberoi at Al Zorah, and the mangrove channels that give couples a backdrop nowhere else in the UAE can match. Female crews are available for bridal halls, with the same privacy-first workflows we run in Sharjah. 2,400+ UAE productions; founders Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Every package includes professionally edited photos and guaranteed 48-hour delivery; Gold and Platinum add GCAA drone aerials, a second crew pair, and a same-day teaser for Instagram. Compare every tier on the <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
            </p>

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHICH AJMAN VENUES DO YOU COVER?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                From beach resorts to bridal halls — the Ajman venues we shoot most:
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
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY AJMAN — FAQs</h2>
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
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and Ajman venue — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Ajman" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Unique to Ajman</p>
              <p className="font-display text-3xl text-cream">MANGROVES</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Al Zorah golden-hour couple shoots</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Wedding services</p>
              <div className="space-y-2 text-sm">
                <Link href="/weddings" className="block text-silver/70 hover:text-gold transition-colors">All Weddings →</Link>
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography Dubai →</Link>
                <Link href="/services/wedding-photography-sharjah" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photographer Sharjah →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Packages &amp; Prices →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
