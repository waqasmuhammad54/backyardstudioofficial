import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Phone } from "lucide-react";
import { faqSchema, breadcrumbSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  // CTR rebuild (Aug 2026). GSC: this page held position 10.9 on 1,435
  // impressions but converted only 0.6% — roughly 4x below expected for that
  // position. Price-intent searchers scan for numbers, so the range now leads
  // the title, and the description is trimmed under 155 chars so it stops
  // truncating mid-sentence in the SERP.
  title: { absolute: "Video Production Pricing Dubai 2026 — AED 2,500–150,000" },
  description:
    "Every package priced in public. Social from AED 2,500, events AED 3,000, weddings AED 7,500, DVCs AED 15,000. Same price in all 7 emirates.",
  keywords: [
    "video production cost Dubai",
    "photography pricing Dubai UAE",
    "wedding photography price Dubai",
    "DVC cost UAE",
    "social media content creation price Dubai",
    "production company rates Dubai",
    "how much does video production cost UAE",
    "wedding videographer price Dubai",
    "corporate video cost Dubai",
    "event photography price Dubai UAE",
    "food photography cost Dubai",
    "product photography price UAE",
    "TV commercial cost Dubai",
    "real estate photography price Dubai",
  ],
  alternates: { canonical: "https://www.backyardstudioofficial.com/pricing" },
  openGraph: {
    title: "Video Production Pricing Dubai | 2026 Packages & Costs",
    description: "Compare video, photography, wedding, event, DVC, Reels and corporate film packages for Dubai and the UAE.",
    url: "https://www.backyardstudioofficial.com/pricing",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Production Pricing Dubai — Backyard Studio Official" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production Pricing Dubai | 2026 Packages & Costs",
    description: "Compare video, photography and production packages for Dubai and the UAE.",
    images: ["/og-image.jpg"],
  },
};

const PACKAGES = [
  {
    category: "Wedding Photography & Videography",
    anchor: "wedding",
    intro: "Dubai's most requested wedding production packages — from affordable photography to premium multi-day productions. RAW data delivered same day on every package.",
    plans: [
      {
        name: "Essential",
        price: "AED 7,500",
        label: "Affordable Photography",
        desc: "Professional photo + video coverage for intimate ceremonies and court weddings.",
        includes: [
          "1 professional photographer",
          "1 videographer",
          "3 hours of coverage",
          "30–40 edited photos",
          "Online drive link (photos) + RAW data",
          "Full event edited video (1920×1080)",
          "10–15 working days delivery",
          "RAW data delivered same day",
        ],
        cta: "Get Quote",
        featured: false,
      },
      {
        name: "Silver",
        price: "AED 15,500",
        label: "Half-Day Coverage",
        desc: "Perfect for civil ceremonies, nikah ceremonies, or intimate celebrations.",
        includes: [
          "2 professional photographers",
          "2 videographers",
          "3 hours of coverage",
          "70–100 edited photos",
          "Full event edited video (1920×1080)",
          "Event highlights edited",
          "10–15 working days delivery",
          "RAW data delivered same day",
        ],
        cta: "Get Quote",
        featured: false,
      },
      {
        name: "Gold",
        price: "AED 22,500",
        label: "Full-Day Wedding",
        desc: "Our most popular package — full photo, video, highlights, reels, and couple shoot.",
        includes: [
          "2 professional photographers",
          "2 videographers",
          "3 hours of coverage",
          "1 album (Edit+Design+Print+Binding+Pasting+album box)",
          "Full event edited video (1920×1080)",
          "Event highlights edited",
          "3 reels edited",
          "Couple shoot",
          "Story telling film + interview (expository style documentary film 1920×1080)",
          "Couple song video + photo shoot (set included on client requirement)",
          "10–15 working days delivery",
          "RAW data delivered same day",
        ],
        cta: "Get Quote",
        featured: true,
      },
      {
        name: "Platinum",
        price: "AED 65,000",
        label: "Premium Multi-Day",
        desc: "The ultimate wedding production — 3 photographers, 3 videographers, 2 albums, documentary film.",
        includes: [
          "3 professional photographers (1× portrait, 1× album, 1× candid)",
          "3 videographers (1× main, 1× candid)",
          "1× documentary style interviews video",
          "3–5 hours of coverage",
          "2 albums (Edit+Design+Print+Binding+Pasting+album box)",
          "3–5 reels edited",
          "Soft copy USB",
          "Delivery time as per event shoot duration",
        ],
        cta: "Get Quote",
        featured: false,
      },
    ],
  },
  {
    category: "Social Media Content",
    anchor: "social-media",
    intro: "Monthly content packages and one-off social media shoots for UAE brands. Combined photo + video in every session.",
    plans: [
      {
        name: "Starter",
        price: "AED 2,500",
        label: "Half-Day Shoot",
        desc: "One location, one look — perfect for a product launch or campaign refresh.",
        includes: [
          "4 hours of production",
          "3–4 edited Reels/TikToks",
          "20–30 edited photo selects",
          "Stories and feed formats",
          "48-hour delivery",
        ],
        cta: "Get Quote",
        featured: false,
      },
      {
        name: "Growth",
        price: "AED 5,500",
        label: "Full-Day Content Day",
        desc: "Our most popular for brands that need a full month of content from one day.",
        includes: [
          "8 hours of production",
          "6–8 edited Reels/TikToks",
          "50–80 edited photo selects",
          "Multiple locations/looks",
          "Story, feed and ad formats",
          "Hashtag & caption strategy",
          "48-hour delivery",
        ],
        cta: "Get Quote",
        featured: true,
      },
      {
        name: "Monthly Retainer",
        price: "From AED 8,000/mo",
        label: "Always-On Content",
        desc: "2 shoot days per month — your brand never runs out of quality content.",
        includes: [
          "2 shoot days per month",
          "12–16 Reels/TikToks per month",
          "100+ photo selects per month",
          "Content calendar planning",
          "Trending audio sourcing",
          "Platform-specific editing",
          "Priority 24-hour delivery",
        ],
        cta: "Get Quote",
        featured: false,
      },
    ],
  },
  {
    category: "DVCs & TV Commercials",
    anchor: "dvcs",
    intro: "Broadcast-quality commercial production for UAE brands. Full creative service from brief to delivery.",
    plans: [
      {
        name: "Digital",
        price: "AED 15,000",
        label: "Social Media DVC",
        desc: "High-quality commercial for Meta, TikTok and YouTube paid campaigns.",
        includes: [
          "Creative concept & script",
          "1 shoot day",
          "Professional talent",
          "30-second hero ad",
          "15-second cut-down",
          "9:16 + 16:9 + 1:1 delivery",
          "2 rounds of revision",
        ],
        cta: "Get Quote",
        featured: false,
      },
      {
        name: "Broadcast",
        price: "AED 45,000",
        label: "TV & Digital Commercial",
        desc: "Full production commercial for UAE TV broadcast and digital campaigns.",
        includes: [
          "Full creative development",
          "2–3 shoot days",
          "Professional casting",
          "Location scouting",
          "30-second TVC + cuts",
          "Broadcast delivery specs",
          "Arabic + English versions",
          "3 rounds of revision",
        ],
        cta: "Get Quote",
        featured: true,
      },
      {
        name: "Premium",
        price: "AED 150,000+",
        label: "High-End Brand Film",
        desc: "Cinematic brand campaign for luxury, government or enterprise clients.",
        includes: [
          "Multi-day UAE-wide production",
          "Full production design & art direction",
          "Large cast + crew",
          "VFX & motion graphics",
          "Original music composition",
          "All platform formats",
          "International delivery",
        ],
        cta: "Get Quote",
        featured: false,
      },
    ],
  },
  {
    category: "Event Coverage",
    anchor: "events",
    intro: "Professional event photography and videography across all UAE emirates. Same-day social media delivery included.",
    plans: [
      {
        name: "Essential",
        price: "AED 3,000",
        label: "Half-Day Event",
        desc: "Up to 4 hours of single-camera coverage with edited highlight reel.",
        includes: [
          "1 photographer or videographer",
          "4 hours of coverage",
          "150+ edited photos OR",
          "3-minute highlight video",
          "48-hour delivery",
        ],
        cta: "Get Quote",
        featured: false,
      },
      {
        name: "Professional",
        price: "AED 7,500",
        label: "Full-Day Event",
        desc: "Multi-camera photo + video coverage — the complete event documentation package.",
        includes: [
          "1 photographer + 1 videographer",
          "8 hours of coverage",
          "300+ edited photos",
          "5-minute highlight reel",
          "Social media teaser (same-day)",
          "Reels/TikTok cut-downs",
          "48-hour full delivery",
        ],
        cta: "Get Quote",
        featured: true,
      },
      {
        name: "Production",
        price: "AED 20,000+",
        label: "Large-Scale Event",
        desc: "Multi-crew coverage for conferences, galas, product launches and large events.",
        includes: [
          "Full multi-camera crew",
          "Multi-day coverage available",
          "Live-stream production",
          "Press photography package",
          "Same-day social assets",
          "Full edited film + photos",
          "Broadcast-ready delivery",
        ],
        cta: "Get Quote",
        featured: false,
      },
    ],
  },
];

const PRICE_FAQS = [
  {
    question: "How much does a wedding photographer cost in Dubai?",
    answer:
      "Wedding photography and videography in Dubai ranges from AED 7,500 for Backyard Studio Official's Essential package (1 photographer, 1 videographer, 3hrs coverage, edited photos + full event video) to AED 65,000 for the Platinum premium production (3 photographers, 3 videographers, 2 albums, documentary film, 3–5 reels). Our most popular Gold package is AED 22,500 and includes 2 photographers, 2 videographers, 1 album, event highlights, 3 reels, couple shoot, and same-day RAW data delivery.",
  },
  {
    question: "How much does video production cost in Dubai UAE?",
    answer:
      "Video production costs in Dubai range widely by type: social media Reels from AED 2,500 per shoot day; event coverage from AED 3,000; corporate films from AED 15,000; DVC production from AED 15,000 for digital-only to AED 150,000+ for high-end TV commercials. We provide free quotes within 2 hours for any project size.",
  },
  {
    question: "How much does a DVC cost in the UAE?",
    answer:
      "A Digital Video Commercial (DVC) in the UAE costs between AED 15,000 for a streamlined social media commercial and AED 150,000+ for a fully produced TV-grade brand film. The primary cost drivers are shoot days, cast size, location complexity, post-production requirements (VFX, animation), and whether Arabic and English versions are required.",
  },
  {
    question: "How much does social media content creation cost in Dubai?",
    answer:
      "Social media content shoots in Dubai start from AED 2,500 for a half-day shoot producing 3–4 Reels and 20–30 photos. Full-day content days are AED 5,500, delivering a full month of content across Instagram, TikTok, and YouTube Shorts. Monthly retainer packages start from AED 8,000 per month for 2 shoot days and 100+ deliverables.",
  },
  {
    question: "Do you offer custom quotes for projects not in your packages?",
    answer:
      "Yes — the majority of our projects are custom-quoted based on your specific brief. The packages above are starting-point guides. Send us your brief via WhatsApp or our contact form and we will respond with a detailed custom quote within 2 hours.",
  },
];

const PRICING_OFFER_CATALOG = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: "Video & Photography Production Pricing — Dubai & UAE 2026",
  url: "https://www.backyardstudioofficial.com/pricing",
  provider: { "@type": "Organization", name: "Backyard Studio Official", url: "https://www.backyardstudioofficial.com" },
  itemListElement: [
    { "@type": "Offer", name: "Wedding photography & videography — Essential", priceCurrency: "AED", price: "7500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Wedding photography & videography — Silver", priceCurrency: "AED", price: "15500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Wedding photography & videography — Gold", priceCurrency: "AED", price: "22500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Wedding photography & videography — Platinum", priceCurrency: "AED", price: "65000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Social media content — Starter (half day)", priceCurrency: "AED", price: "2500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Social media content — Growth (full day)", priceCurrency: "AED", price: "5500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Social media content — Monthly retainer", priceCurrency: "AED", price: "8000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Event coverage — Essential (half day)", priceCurrency: "AED", price: "3000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Event coverage — Professional (full day)", priceCurrency: "AED", price: "7500", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "Event coverage — Large-scale production", priceCurrency: "AED", price: "20000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "DVC / TV commercial — Digital", priceCurrency: "AED", price: "15000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "DVC / TV commercial — Broadcast", priceCurrency: "AED", price: "45000", areaServed: "United Arab Emirates" },
    { "@type": "Offer", name: "DVC / TV commercial — Premium brand film", priceCurrency: "AED", price: "150000", areaServed: "United Arab Emirates" },
  ],
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "https://www.backyardstudioofficial.com" },
        { name: "Pricing", url: "https://www.backyardstudioofficial.com/pricing" },
      ])) }} />
      {/* Header */}
      <div className="bg-[#111111] py-16 text-center border-b border-[#2a2a2a]">
        <p className="text-[#e8c547] text-xs tracking-[0.4em] uppercase font-semibold mb-3">TRANSPARENT PRICING</p>
        <h1 className="font-display text-5xl md:text-7xl text-white">VIDEO PRODUCTION PRICING DUBAI</h1>
        <p className="text-[#a0a0a0] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Compare starting packages for video production, photography, weddings, events and brand content. Prices are in AED and exclude applicable VAT; final scope is confirmed in an itemised quote.
        </p>
        <div className="flex gap-4 justify-center mt-8">
          <a href="https://wa.me/971585882685" target="_blank" rel="noreferrer" className="btn-gold">WhatsApp for Custom Quote</a>
          <Link href="/contact" className="btn-outline">Request a Quote</Link>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="bg-[#0d0d0d] border-b border-[#2a2a2a] py-4 sticky top-16 z-30">
        <div className="container-xl flex flex-wrap gap-3 justify-center">
          {PACKAGES.map((p) => (
            <a key={p.anchor} href={`#${p.anchor}`} className="text-xs text-[#a0a0a0] hover:text-[#e8c547] transition-colors px-3 py-1 border border-[#2a2a2a] hover:border-[#e8c547]/50">
              {p.category}
            </a>
          ))}
        </div>
      </div>

      {/* Packages */}
      <section className="bg-[#0a0a0a]">
        {PACKAGES.map((pkg, pi) => (
          <div key={pkg.anchor} id={pkg.anchor} className="section-pad border-b border-[#2a2a2a]">
            <div className="container-xl">
              <p className="eyebrow mb-3">{`0${pi + 1}`}</p>
              <h2 className="font-display text-4xl md:text-5xl text-white mb-3">{pkg.category.toUpperCase()}</h2>
              <p className="text-[#a0a0a0] text-sm mb-12 max-w-2xl">{pkg.intro}</p>

              <div className={`grid grid-cols-1 md:grid-cols-2 ${pkg.plans.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-6`}>
                {pkg.plans.map((plan) => (
                  <div
                    key={plan.name}
                    className={`relative p-8 border rounded-sm ${plan.featured ? "border-[#e8c547]" : "border-[#2a2a2a]"} bg-[#111111]`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#e8c547] text-black text-[10px] font-bold px-3 py-0.5 rounded-sm uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}
                    <p className="text-[#e8c547] text-xs tracking-widest uppercase mb-1">{plan.label}</p>
                    <h3 className="text-white font-display text-3xl mb-1">{plan.name.toUpperCase()}</h3>
                    <p className="text-[#e8c547] text-2xl font-bold mb-4">{plan.price}</p>
                    <p className="text-[#a0a0a0] text-xs leading-relaxed mb-6">{plan.desc}</p>
                    <ul className="space-y-2 mb-8">
                      {plan.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-[#a0a0a0]">
                          <Check size={13} className="text-[#e8c547] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${encodeURIComponent(pkg.category)}`}
                      className={`w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold tracking-widest uppercase transition-all ${plan.featured ? "bg-[#e8c547] text-black hover:bg-[#d4b23a]" : "border border-[#2a2a2a] text-[#a0a0a0] hover:border-[#e8c547] hover:text-[#e8c547]"}`}
                    >
                      {plan.cta} <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Price indicators for other services */}
      <section className="section-pad bg-[#111111] border-b border-[#2a2a2a]">
        <div className="container-xl">
          <h2 className="font-display text-4xl text-white mb-3">OTHER SERVICES — STARTING FROM</h2>
          <p className="text-[#a0a0a0] text-sm mb-10">Custom quotes provided for all projects within 2 hours.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { service: "Food Photography", from: "AED 2,500", slug: "food" },
              { service: "Product Shoots", from: "AED 1,800", slug: "product-shoots" },
              { service: "Corporate Headshots", from: "AED 1,500", slug: "corporate-videography" },
              { service: "Real Estate Photography", from: "AED 2,000", slug: "real-estate" },
              { service: "Testimonial Videos", from: "AED 3,500", slug: "testimonial-videos" },
              { service: "Podcast Production", from: "AED 4,000", slug: "podcast" },
              { service: "YouTube Production", from: "AED 3,500", slug: "youtube-content" },
              { service: "Automotive Photography", from: "AED 3,000", slug: "automotive" },
              { service: "Fashion Shoots", from: "AED 5,000", slug: "fashion-shoots" },
              { service: "Hotel Photography", from: "AED 8,000", slug: "hotel-photography" },
              { service: "Car Commercials", from: "AED 25,000", slug: "car-commercials" },
              { service: "Reels (per shoot day)", from: "AED 2,500", slug: "reels-production" },
            ].map((s) => (
              <Link
                key={s.service}
                href={`/services/${s.slug}`}
                className="group p-5 bg-[#1a1a1a] border border-[#2a2a2a] hover:border-[#e8c547]/50 transition-colors"
              >
                <p className="text-[#a0a0a0] text-xs mb-1 group-hover:text-[#e8c547] transition-colors">{s.service}</p>
                <p className="text-white font-bold text-lg">{s.from}</p>
                <p className="text-[#444] text-[10px] mt-1">starting from</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="container-xl max-w-3xl">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(PRICE_FAQS)) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_OFFER_CATALOG) }}
          />
          <h2 className="font-display text-4xl text-white mb-10">PRICING FAQs</h2>
          <div className="space-y-4">
            {PRICE_FAQS.map((faq, i) => (
              <div key={i} className="p-6 bg-[#111111] border border-[#2a2a2a]">
                <p className="text-white font-semibold text-sm mb-2">{faq.question}</p>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intent split. GSC shows this page ranking at ~11 for broad "video production
          cost Dubai" style queries, where the searcher is still comparing rather than
          buying. Route that visitor to the comparison assets instead of losing them. */}
      <section className="py-14 bg-[#0a0a0a] border-t border-[#2a2a2a]">
        <div className="container-xl max-w-3xl">
          <p className="eyebrow mb-4">STILL COMPARING?</p>
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            These prices only mean something next to someone else&apos;s
          </h2>
          <p className="text-[#a0a0a0] text-sm leading-relaxed mb-7">
            We publish our rates so you can benchmark them. If you are holding another
            quote, these two will tell you whether it is a fair one — what the UAE market
            actually charges, and what to check before you sign anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/uae-video-production-cost-report-2026"
              className="flex-1 p-5 border border-[#2a2a2a] bg-[#111111] hover:border-[#e8c547]/50 transition-colors group"
            >
              <p className="text-[#e8c547] text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-2">Data report</p>
              <p className="text-white text-sm font-semibold mb-1 group-hover:text-[#e8c547] transition-colors">
                UAE Video Production Cost Report 2026
              </p>
              <p className="text-[#666] text-xs">Rate bands by format, and where the money goes inside a budget.</p>
            </Link>
            <Link
              href="/how-to-choose-a-production-company-in-dubai"
              className="flex-1 p-5 border border-[#2a2a2a] bg-[#111111] hover:border-[#e8c547]/50 transition-colors group"
            >
              <p className="text-[#e8c547] text-[0.6rem] tracking-[0.3em] uppercase font-semibold mb-2">Buyer&apos;s guide</p>
              <p className="text-white text-sm font-semibold mb-1 group-hover:text-[#e8c547] transition-colors">
                How to Choose a Production Company in Dubai
              </p>
              <p className="text-[#666] text-xs">10-point checklist, red flags, and the questions to ask.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] text-center border-t border-[#2a2a2a]">
        <p className="eyebrow mb-4">READY TO START?</p>
        <h2 className="font-display text-5xl text-white mb-4">GET YOUR QUOTE IN 2 HOURS</h2>
        <p className="text-[#a0a0a0] text-sm mb-8 max-w-md mx-auto">
          Tell us your project, dates, and budget range. We respond to every brief within 2 hours — 7 days a week.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%27d%20like%20a%20quote%20for%20a%20production%20project" target="_blank" rel="noreferrer" className="btn-gold">
            <Phone size={14} /> WhatsApp Us Now
          </a>
          <Link href="/contact" className="btn-outline">Use the Contact Form</Link>
        </div>
        <p className="text-[#444] text-xs mt-6">All prices in AED. VAT applicable where required. Prices correct as of 2026.</p>
      </section>
    </div>
  );
}
