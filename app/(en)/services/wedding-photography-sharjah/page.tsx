import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight, MapPin } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/wedding-photography-sharjah";

export const metadata: Metadata = {
  title: "Wedding Photographer Sharjah | From AED 7,500",
  description:
    "Wedding photographer in Sharjah — photography & videography packages from AED 7,500 with no travel fees. Ladies' hall coverage with female crews, Al Majaz & Khalid Lagoon shoots, licensed aerial partners, 48-hour delivery.",
  keywords: [
    "wedding photographer Sharjah",
    "wedding photography Sharjah",
    "wedding videographer Sharjah",
    "Sharjah wedding packages",
    "ladies wedding photographer Sharjah",
    "Emirati wedding photographer Sharjah",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Wedding Photographer Sharjah | From AED 7,500 — Backyard Studio Official",
    description: "Photo + video wedding packages in Sharjah, female crews available, no travel fees. 48-hour delivery.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-12.webp", width: 1200, height: 630, alt: "Wedding Photographer Sharjah — Backyard Studio Official" }],
  },
  twitter: { card: "summary_large_image", title: "Wedding Photographer Sharjah | From AED 7,500", description: "Photo + video packages, female crews available, 48-hour delivery.", images: ["/images/wedding/wedding-12.webp"] },
};

const FAQS = [
  {
    q: "How much does a wedding photographer cost in Sharjah?",
    a: "Identical to our Dubai pricing: Essential photography from AED 7,500, Silver photo + video from AED 15,500, full-day Gold from AED 22,500 with GCAA drone and same-day teaser, and Platinum multi-day from AED 65,000. No travel fees apply anywhere in Sharjah — city, Khor Fakkan, or Kalba.",
  },
  {
    q: "Do you provide female photographers for ladies' wedding halls in Sharjah?",
    a: "Yes. All-female photography and videography crews are one of our most requested services in Sharjah. We follow strict no-male-access workflows for ladies' halls, deliver to a private gallery, and can assign a female editor on request.",
  },
  {
    q: "Which Sharjah venues do you cover?",
    a: "We photograph weddings at Sharjah Ladies Club, Al Majaz Waterfront venues, Sheraton Sharjah Beach Resort, Coral Beach Resort, Occidental Sharjah Grand, private bridal halls across the city, and family majlis celebrations. Al Noor Island and the Khalid Lagoon corniche make beautiful couple-shoot backdrops.",
  },
  {
    q: "Are your shoots appropriate for Sharjah's conservative settings?",
    a: "Yes — we have deep experience with Emirati and conservative Arab weddings in Sharjah: gender-separated coverage, modest framing standards, privacy-first delivery, and crews briefed on hall etiquette. Your family's comfort sets the rules and we work inside them.",
  },
  {
    q: "How fast is delivery for Sharjah weddings?",
    a: "Same as everywhere: a same-day teaser on Gold and Platinum packages and the full edited gallery plus film within 48 hours, contractually guaranteed.",
  },
];

const VENUES = [
  { name: "Sharjah Ladies Club", desc: "Female-crew coverage with full privacy workflows for ladies' events." },
  { name: "Al Majaz Waterfront", desc: "Fountain and lagoon backdrops — strongest at blue hour." },
  { name: "Sheraton & Coral Beach Resorts", desc: "Beach ceremonies and resort ballrooms on the Sharjah coast." },
  { name: "Al Noor Island", desc: "Butterfly house and lit gardens for evening couple shoots." },
  { name: "Private Bridal Halls & Majlis", desc: "Gender-separated coverage with modest framing standards." },
  { name: "Khor Fakkan & Kalba", desc: "East-coast beach and mountain backdrops — still zero travel fees." },
];

export default function WeddingPhotographySharjahPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Weddings", url: "https://www.backyardstudioofficial.com/weddings" },
    { name: "Wedding Photographer Sharjah", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Wedding Photography Sharjah",
    description: "Wedding photography and videography in Sharjah with female crews available — from AED 7,500, no travel fees.",
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
        <Image src="/images/wedding/wedding-12.webp" alt="Wedding photographer in Sharjah — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/weddings" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Wedding Services
          </Link>
          <p className="eyebrow mb-3">Female Crews Available · No Travel Fees · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">WEDDING PHOTOGRAPHER SHARJAH</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              Backyard Studio Official covers Sharjah weddings at the same prices as Dubai — photography from AED 7,500, full photo + video days from AED 22,500 — with zero travel fees anywhere in the emirate, including Khor Fakkan and Kalba. Sharjah is where our all-female crews work most: ladies' halls at Sharjah Ladies Club, bridal halls across the city, and Emirati weddings where privacy rules everything. 2,400+ UAE productions, founders Fahad Iqbal Butt and Syed Mazhar Zaidi.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              Every package includes professionally edited photos and 48-hour delivery; Gold and Platinum add a second crew pair, drone aerials flown under GCAA licence (where venue permissions allow), and a same-day teaser. Couple sessions at Al Majaz Waterfront and Al Noor Island slot beautifully between the ceremony and reception. Compare every tier on the <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
            </p>

            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">WHICH SHARJAH VENUES DO YOU COVER?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                We photograph weddings across all of Sharjah — ladies' clubs, waterfront venues, beach resorts, and private halls:
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
              <h2 className="font-display text-4xl text-cream mb-8">WEDDING PHOTOGRAPHY SHARJAH — FAQs</h2>
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
                <Link href="/blog/emirati-wedding-photography-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Emirati Wedding Photography — Full Guide →
                </Link>
                <Link href="/blog/arabic-wedding-photography-dubai-2026" className="p-4 border text-sm text-silver/70 hover:text-gold transition-colors" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                  Arabic Wedding Photography Guide →
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-5 lg:pt-2">
            <div className="p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your wedding date and Sharjah venue — we reply within 2 hours.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20a%20wedding%20quote%20for%20Sharjah" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Female Crews</p>
              <p className="font-display text-3xl text-cream">AVAILABLE</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>Privacy-first ladies&apos; hall coverage</p>
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
