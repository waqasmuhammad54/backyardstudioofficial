import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-ras-al-khaimah";

export const metadata: Metadata = {
  title: "Wedding Photographer Ras Al Khaimah | AED 7,500",
  description:
    "Wedding photographer in Ras Al Khaimah — Waldorf Astoria, Ritz-Carlton Al Wadi desert weddings, Rixos Bab Al Bahr & Jebel Jais backdrops. Photo + video from AED 7,500, licensed aerial partners, no travel fees, 48-hour delivery.",
  keywords: [
    "wedding photographer Ras Al Khaimah",
    "wedding photography RAK",
    "RAK beach wedding photographer",
    "Ritz-Carlton Al Wadi wedding",
    "Waldorf Astoria RAK wedding photographer",
    "destination wedding photographer UAE",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Ras Al Khaimah | From AED 7,500 — Backyard Studio Official",
    description: "Beach & desert resort weddings — Waldorf, Ritz-Carlton Al Wadi, Rixos. licensed aerial partners, no travel fees, 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-15.webp", width: 1200, height: 630, alt: "Wedding Photographer Ras Al Khaimah — Backyard Studio Official" }],
  },
  twitter: { card: "summary_large_image", title: "Wedding Photographer Ras Al Khaimah | From AED 7,500", description: "Beach & desert resort weddings with drone aerials. 48-hour delivery.", images: ["/images/wedding/wedding-15.webp"] },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Ras Al Khaimah?",
    a: "The same as our Dubai pricing — Essential photography AED 7,500, Silver photo + video AED 15,500, full-day Gold AED 22,500 with drone aerials and same-day teaser, Platinum multi-day AED 65,000+. RAK resort weddings incur zero travel fees; our crews drive up from Dubai weekly.",
  },
  {
    q: "Which Ras Al Khaimah wedding venues do you cover?",
    a: "Waldorf Astoria Ras Al Khaimah, The Ritz-Carlton Al Wadi Desert (tented desert ceremonies), Rixos Bab Al Bahr and the Al Marjan Island resorts, InterContinental Mina Al Arab, Hilton beach properties, and private beach villas. We scout every venue before the wedding day at no charge.",
  },
  {
    q: "Can you shoot drone footage at RAK beach and desert weddings?",
    a: "Yes — aerial work is fully permitted and we arrange permissions in advance. RAK is one of the best emirates for aerials: Al Marjan Island coastline, Al Wadi desert dunes at sunset, and Jebel Jais mountain backdrops all photograph spectacularly from the air.",
  },
  {
    q: "Do you cover destination weddings for couples flying into RAK?",
    a: "Constantly — RAK's resorts are a destination-wedding hub for UK, Indian, and Russian couples. We coordinate directly with your hotel's events team, handle timeline planning around golden hour, and deliver your complete gallery within 48 hours so you fly home with everything.",
  },
  {
    q: "Can we do a Jebel Jais couple shoot?",
    a: "Yes — a Jebel Jais sunset session is our favourite RAK add-on (from AED 1,500 as a pre-wedding or day-after shoot). The viewing decks and switchback roads above the clouds are unlike anywhere else in the UAE.",
  },
];

const VENUES = [
  { name: "Waldorf Astoria RAK", desc: "Grand ballroom and private beach — the emirate's signature luxury wedding venue." },
  { name: "Ritz-Carlton Al Wadi Desert", desc: "Tented desert ceremonies among the dunes and oryx — pure cinema at golden hour." },
  { name: "Rixos Bab Al Bahr & Al Marjan Island", desc: "Beachfront ceremonies with island coastline drone aerials." },
  { name: "InterContinental Mina Al Arab", desc: "Lagoon and mangrove backdrops on the quiet north coast." },
  { name: "Jebel Jais", desc: "The UAE's highest peak — sunset couple shoots above the clouds." },
  { name: "Private Beach Villas", desc: "Intimate ceremonies and elopements anywhere on the RAK coast." },
];

export default function WeddingPhotographyRAKPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: "https://www.backyardstudioofficial.com/weddings" },
    { name: "Wedding Photographer Ras Al Khaimah", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Ras Al Khaimah",
    description: "Beach and desert resort wedding photography in Ras Al Khaimah — from AED 7,500, licensed aerial partners, no travel fees.",
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
        <Image src="/images/wedding/wedding-15.webp" alt="Beach wedding photographer in Ras Al Khaimah — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/weddings" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Wedding Services
          </Link>
          <p className="eyebrow mb-3">Beach · Desert · Jebel Jais — No Travel Fees · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2rem,5.5vw,4.5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER RAS AL KHAIMAH</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Ras Al Khaimah is the UAE&apos;s destination-wedding emirate, and Backyard Studio Official photographs it at Dubai prices — from AED 7,500 with zero travel fees. We shoot beach ceremonies at Waldorf Astoria and Rixos Bab Al Bahr, tented desert weddings at The Ritz-Carlton Al Wadi, and sunset couple sessions on Jebel Jais above the clouds — with drone aerials over the Al Marjan coastline. 2,400+ UAE productions; founders Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Half the couples we photograph in RAK fly in from abroad. We coordinate with your resort&apos;s events team, plan the timeline around golden hour, and deliver the complete gallery and highlight film within 48 hours — before most couples have left the resort. Compare every tier on the <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
            </p>

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHERE DO YOU SHOOT WEDDINGS IN RAS AL KHAIMAH?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                The best RAK wedding venues we cover — beach, desert, and mountain:
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
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY RAK — FAQs</h2>
              <div className="space-y-3">
                {FAQS.map((faq) => (
                  <div key={faq.q} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                    <p className="text-cream font-semibold text-sm mb-2">{faq.q}</p>
                    <p className="text-silver/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="eyebrow mb-4">Related</p>
              <div className="grid sm:grid-cols-2 gap-3">
                <Link href="/blog/british-western-wedding-photographer-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Western Destination Weddings in the UAE →
                </Link>
                <Link href="/blog/drone-photography-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Drone Photography in the UAE — Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and RAK resort — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Ras%20Al%20Khaimah" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Signature Add-On</p>
              <p className="font-display text-3xl text-cream">JEBEL JAIS</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Sunset couple shoot above the clouds</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Wedding services</p>
              <div className="space-y-2 text-sm">
                <Link href="/weddings" className="block text-silver/70 hover:text-gold transition-colors">All Weddings →</Link>
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography Dubai →</Link>
                <Link href="/services/pre-wedding-shoot" className="block text-silver/70 hover:text-gold transition-colors">Pre-Wedding Shoots →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">Packages &amp; Prices →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
