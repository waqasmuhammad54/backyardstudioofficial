import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, ArrowUpRight } from "lucide-react";
import { breadcrumbSchema, faqSchema, servicePageSchema, speakableSchema } from "@/lib/structuredData";

const PAGE_URL = "https://www.backyardstudioofficial.com/services/affordable-wedding-photography";

export const metadata: Metadata = {
  title: "Affordable Wedding Photoshoot Dubai | From AED 1,799 — Backyard Studio Official",
  description:
    "Affordable wedding photography in Dubai from AED 1,799 — a professional studio photographer, 100+ edited photos, and 48-hour delivery. Cheap wedding photoshoot prices without amateur results. Compare budget packages, see exactly what's included.",
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
    title: "Affordable Wedding Photoshoot Dubai | From AED 1,799 — Backyard Studio Official",
    description:
      "Professional wedding photography from AED 1,799 — 100+ edited photos, 48-hour delivery. Budget prices, studio standards.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/images/wedding/wedding-11.webp", width: 1200, height: 630, alt: "Affordable Wedding Photoshoot Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Wedding Photoshoot Dubai | From AED 1,799",
    description: "Professional wedding photography on a budget — 100+ edited photos, 48-hour delivery.",
    images: ["/images/wedding/wedding-11.webp"],
  },
};

const FAQS = [
  {
    q: "How much does a cheap wedding photoshoot in Dubai cost?",
    a: "Budget wedding photography in Dubai runs AED 1,000–2,500. Backyard Studio Official's Essential package is AED 1,799 and includes a professional studio photographer for 3 hours, 100+ edited high-resolution photos, an online delivery gallery, and guaranteed 48-hour delivery — the same editing standards and backup gear as our AED 18,000 productions.",
  },
  {
    q: "What is the catch with cheap wedding photographers in Dubai?",
    a: "The usual catches: a single shooter with no backup camera (if it fails, your wedding photos are gone), 'unlimited photos' that arrive barely edited, 3–6 week delivery, and hidden fees for editing or travel. Our Essential package has none of these — backup gear is on every booking, every delivered photo is professionally edited, delivery is contractually 48 hours, and the AED 1,799 price includes everything except optional add-ons you choose yourself.",
  },
  {
    q: "What is included in the AED 1,799 Essential wedding package?",
    a: "1 professional photographer for 3 hours of coverage, 100+ edited high-resolution photos, an online gallery for viewing and sharing, and 48-hour delivery. It fits court weddings, nikah ceremonies, intimate dinners, and small celebrations. Videography can be added from AED 1,200, and extra hours are AED 500 each.",
  },
  {
    q: "Is an affordable package good enough for my wedding?",
    a: "For a 2–4 hour ceremony with up to ~50 guests, yes — one experienced photographer covers it comfortably. For full wedding days, multiple venues, or 100+ guests we recommend Silver (AED 3,500, adds a videographer) or Gold (AED 8,500, 2+2 crew with drone), because a single shooter physically cannot cover prep, ceremony, and reception without missing moments.",
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

const COMPARISON = [
  ["Professional studio photographer", true, true],
  ["100+ edited high-res photos", true, true],
  ["Backup camera gear on-site", true, false],
  ["48-hour guaranteed delivery", true, false],
  ["Written contract & trade licence", true, false],
  ["Replacement photographer if ill", true, false],
  ["Hidden editing/travel fees", false, true],
];

export default function AffordableWeddingPhotographyPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "https://www.backyardstudioofficial.com" },
    { name: "Services", url: "https://www.backyardstudioofficial.com/services" },
    { name: "Affordable Wedding Photography Dubai", url: PAGE_URL },
  ]);
  const service = servicePageSchema({
    name: "Affordable Wedding Photography Dubai",
    description: "Budget-friendly professional wedding photography in Dubai — Essential package AED 1,799 with 100+ edited photos and 48-hour delivery.",
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
        <Image src="/images/wedding/wedding-11.webp" alt="Affordable wedding photoshoot in Dubai — Backyard Studio Official" fill className="object-cover img-cinematic" sizes="100vw" priority />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0.78) 100%)" }} />
        <div className="relative container-xl h-full flex flex-col justify-end pb-12">
          <Link href="/services" className="inline-flex items-center gap-2 text-silver/60 hover:text-gold transition-colors text-xs mb-4">
            <ArrowLeft size={14} /> All Services
          </Link>
          <p className="eyebrow mb-3">From AED 1,799 · No Hidden Fees · 48-Hour Delivery</p>
          <h1 className="font-display text-[clamp(2.2rem,6vw,5rem)] leading-none text-cream">AFFORDABLE WEDDING PHOTOGRAPHY DUBAI</h1>
        </div>
      </div>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container-xl grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-silver/70 leading-relaxed text-base speakable">
              An affordable wedding photoshoot in Dubai does not have to mean an amateur one. Backyard Studio Official&apos;s Essential package costs AED 1,799 — a professional photographer from a 2,400+ production studio, 3 hours of coverage, 100+ professionally edited high-resolution photos, and guaranteed 48-hour delivery. It is the same photographer, the same camera, and the same editing pipeline behind our AED 18,000 weddings — just sized for intimate ceremonies, court weddings, and nikahs.
            </p>
            <p className="text-silver/70 leading-relaxed text-base">
              We built this package after watching too many couples get burned by the cheap end of the Dubai market: single shooters with no backup camera, &quot;unlimited photos&quot; delivered with zero editing, and galleries that arrive six weeks late. Founders Fahad Iqbal Butt and Syed Mazhar Zaidi set one rule for Essential — cut the hours, never the standards.
            </p>

            {/* Price anchor */}
            <div className="mt-10 p-8 border" style={{ borderColor: "var(--gold)", background: "var(--black-2)" }}>
              <p className="text-[0.65rem] tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>Affordable Photography</p>
              <div className="flex flex-wrap items-end gap-4 mb-4">
                <h2 className="font-display text-5xl text-cream">ESSENTIAL</h2>
                <p className="font-display text-4xl" style={{ color: "var(--gold)" }}>AED 1,799</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-2.5 mb-6">
                {["1 professional photographer", "3 hours of coverage", "100+ edited high-res photos", "Online delivery gallery", "48-hour delivery", "Add videography from AED 1,200"].map((item) => (
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
                <a href="https://wa.me/971585882685?text=Hi%2C%20I%27d%20like%20the%20Essential%20wedding%20package%20(AED%201%2C799)" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Comparison */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-3">CHEAP vs AFFORDABLE — WHAT IS THE DIFFERENCE?</h2>
              <p className="text-silver/60 text-sm mb-8 speakable">
                A cheap wedding photographer in Dubai charges AED 1,000–2,500. So does our Essential package. The difference is what you actually get:
              </p>
              <div className="border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="grid grid-cols-3 p-4 text-xs font-semibold uppercase tracking-wider" style={{ background: "var(--black-2)" }}>
                  <span className="text-silver/60">What you get</span>
                  <span className="text-center" style={{ color: "var(--gold)" }}>Essential (AED 1,799)</span>
                  <span className="text-silver/60 text-center">Typical budget operator</span>
                </div>
                {COMPARISON.map(([label, ours, theirs], i) => (
                  <div key={String(label)} className="grid grid-cols-3 items-center p-4 text-sm" style={{ background: i % 2 ? "var(--black-2)" : "transparent", borderTop: "1px solid var(--border)" }}>
                    <span className="text-silver/70">{label}</span>
                    <span className="text-center">{ours ? <Check size={16} className="inline" style={{ color: "var(--gold)" }} /> : <span className="text-silver/40">—</span>}</span>
                    <span className="text-center">{theirs ? <Check size={16} className="inline text-silver/40" /> : <span className="text-silver/40">✕</span>}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* When to upgrade */}
            <div className="mt-12">
              <h2 className="font-display text-4xl text-cream mb-6">WHEN SHOULD YOU SPEND MORE THAN AED 1,799?</h2>
              <p className="text-silver/70 leading-relaxed text-base mb-4">
                Honest answer: Essential fits ceremonies up to about 4 hours and 50 guests. Upgrade when your day is bigger — one photographer cannot cover bridal prep, a ceremony, and a reception in two locations without missing moments. Silver (AED 3,500) adds a videographer and highlight film; Gold (AED 8,500) doubles the crew and adds GCAA drone aerials with a same-day teaser. Compare every tier on our <Link href="/wedding-packages" className="underline hover:text-gold">wedding packages page</Link>.
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
              <p className="font-display text-3xl text-cream">AED 1,799</p>
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
