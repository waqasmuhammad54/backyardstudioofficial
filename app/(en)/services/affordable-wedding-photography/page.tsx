import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/affordable-wedding-photography";

export const metadata: Metadata = {
  title: "Essential Wedding Package Dubai | AED 7,500 Photo + Video",
  description:
    "See what the AED 7,500 Essential Dubai wedding package includes: photographer, videographer, three hours, edited photos, full event video and delivery terms.",
  keywords: [
    "affordable wedding photoshoot in Dubai",
    "cheap wedding photoshoot in Dubai",
    "cheap wedding photoshoot in Dubai price",
    "cheap wedding photoshoot in Dubai packages",
    "cheap wedding shoot Dubai",
    "cheap wedding photographer Dubai price",
    "cheap photographer in Dubai",
    "best affordable wedding photoshoot in Dubai",
    "budget wedding photographer Dubai",
    "freelance photographer in Dubai",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Essential Wedding Package Dubai | AED 7,500 Photo + Video",
    description:
      "One photographer, one videographer, three hours, edited photos, a full event video and written delivery terms.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-11.webp", width: 1200, height: 630, alt: "Affordable Wedding Photoshoot Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Essential Wedding Package Dubai | AED 7,500",
    description: "See the current photographer, videographer, coverage, edits and delivery details.",
    images: ["/images/wedding/wedding-11.webp"],
  },
};

const FAQS = [
  {
    q: "How much is the Essential wedding package in Dubai?",
    a: "The current Essential package is AED 7,500. It combines one photographer and one videographer for three hours, 30–40 edited photos, a full event video, same-day RAW data and final delivery in 10–15 working days.",
  },
  {
    q: "What should I compare in a lower-cost wedding package?",
    a: "Check whether both photo and video are included, the named crew, coverage hours, edited photo count, video format, revision policy, RAW-file terms and delivery date. Ask for every item in writing before paying a deposit.",
  },
  {
    q: "What is included in the AED 7,500 Essential wedding package?",
    a: "One professional photographer, one videographer, three hours of coverage, 30–40 edited photos, an online drive link, a full event video in 1920×1080, same-day RAW data and final delivery in 10–15 working days.",
  },
  {
    q: "Is an affordable package good enough for my wedding?",
    a: "Essential is designed around three hours and a two-person photo/video crew. If your itinerary needs more locations, more simultaneous coverage, albums, Reels or documentary interviews, compare the Silver, Gold and Platinum scopes before choosing.",
  },
  {
    q: "Should I hire a freelance photographer in Dubai instead?",
    a: "Freelancers can be AED 300–500 cheaper, but check three things: backup equipment, a written contract with delivery dates, and a UAE trade licence (required for paid photography work). A studio booking gets you all three plus a replacement photographer if yours is ever ill — a freelancer who cancels the morning of your wedding has no backup.",
  },
  {
    q: "Can I see the difference between budget and premium results?",
    a: "The Essential package uses the same photographers, cameras, and editing pipeline as our premium weddings — the difference is coverage (hours and crew size), not quality. What changes with bigger packages: videography, drone aerials, same-day teasers, and more locations covered.",
  },
];

export default function AffordableWeddingPhotographyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Affordable Wedding Photography Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Affordable Wedding Photography Dubai",
    description: "Essential wedding photography and videography package in Dubai with one photographer, one videographer and three hours of coverage.",
    url: PAGE_URL,
    price: "7500",
  });
  const faqs = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqs) }} />

      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image src="/images/wedding/wedding-11.webp" alt="Affordable wedding photoshoot in Dubai — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">AED 7,500 · Photo + Video · Current 2026 Scope</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">AFFORDABLE WEDDING PHOTOGRAPHY DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base">
              Backyard Studio Official&apos;s current Essential wedding package costs AED 7,500 and combines one photographer with one videographer for three hours. It is designed for intimate ceremonies, court weddings and nikahs that need both photo and full-event video coverage.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              We built this package after watching too many couples get burned by the cheap end of the Dubai market: single shooters with no backup camera, &quot;unlimited photos&quot; delivered with zero editing, and galleries that arrive six weeks late. Founders Fahad Iqbal Butt and Syed Mazhar Zaidi set one rule for Essential — cut the hours, never the standards.
            </p>

            {/* Price anchor */}
            <div className="mt-10 p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Affordable Photography</p>
              <div className="flex flex-wrap items-end gap-4 mb-4">
                <h2 className="font-display text-5xl text-cream">ESSENTIAL</h2>
                <p className="font-display text-4xl" style={{ color: "var(--gold)" }}>AED 7,500</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                {["1 professional photographer", "1 videographer", "3 hours of coverage", "30–40 edited photos", "Full event video (1920×1080)", "RAW data delivered same day", "10–15 working days final delivery"].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <Check size={15} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                    <span className="text-silver/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-gold flex items-center gap-2">
                  Book Essential <ArrowUpRight size={14} />
                </Link>
                <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20the%20Essential%20wedding%20package%20(AED%207%2C500)" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* When to upgrade */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-6">WHEN SHOULD YOU SPEND MORE THAN AED 7,500?</h2>
              <p className="text-silver/70 leading-relaxed text-base mb-4">
                Essential is scoped for three hours with one photographer and one videographer. Upgrade when your itinerary needs more simultaneous coverage, more edited assets, printed albums, Reels, couple shoots or documentary interviews. Compare every tier on our <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
              </p>
            </div>

            {/* FAQs */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-8">AFFORDABLE WEDDING PHOTOGRAPHY — FAQs</h2>
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
              <h3 className="font-display text-3xl text-cream mb-2">CHECK YOUR DATE</h3>
              <p className="text-silver/60 text-sm mb-6 leading-relaxed">Send your date and ceremony type — we reply within 2 hours with availability.</p>
              <Link href="/contact" className="btn-gold w-full justify-center flex items-center gap-2 mb-3">
                Request a Quote <ArrowUpRight size={14} />
              </Link>
              <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20an%20affordable%20wedding%20photography%20quote" target="_blank" rel="noreferrer" className="btn-outline w-full justify-center flex items-center gap-2">
                WhatsApp Us
              </a>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <div className="w-2 h-2 rounded-full mb-3" style={{ background: "var(--gold)" }} />
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Essential Package</p>
              <p className="font-display text-3xl text-cream">AED 7,500</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>All-inclusive. No hidden fees.</p>
            </div>
            <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: "var(--muted)" }}>Related services</p>
              <div className="space-y-2 text-sm">
                <Link href="/services/wedding-photography" className="block text-silver/70 hover:text-gold transition-colors">Wedding Photography →</Link>
                <Link href="/wedding-packages" className="block text-silver/70 hover:text-gold transition-colors">All Wedding Packages →</Link>
                <Link href="/services/pre-wedding-shoot" className="block text-silver/70 hover:text-gold transition-colors">Pre-Wedding Shoots →</Link>
                <Link href="/blog/wedding-photographer-cost-dubai-2026" className="block text-silver/70 hover:text-gold transition-colors">2026 Cost Guide →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
