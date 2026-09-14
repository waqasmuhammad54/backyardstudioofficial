import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { breadcrumbSchema, faqSchema, speakableSchema } from "@/lib/structuredData";

const BASE = "https://www.backyardstudioofficial.com";
const PAGE_URL = `${BASE}/uae-video-production-cost-report-2026`;

export const metadata: Metadata = {
  title: "UAE Video Production Cost Report 2026",
  description:
    "What video production actually costs in the UAE in 2026 — rate bands by format, where the money goes inside a budget, UAE-specific cost drivers, and seasonal pricing. Free to cite.",
  keywords: [
    "video production cost UAE 2026",
    "video production cost Dubai",
    "how much does a corporate video cost Dubai",
    "UAE video production rates",
    "Dubai videographer day rate",
    "video production budget breakdown UAE",
    "Dubai filming permit cost",
    "production company rates Abu Dhabi",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "UAE Video Production Cost Report 2026",
    description:
      "Rate bands by format, budget composition, UAE-specific cost drivers and seasonality. Published data, free to cite with attribution.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "UAE Video Production Cost Report 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UAE Video Production Cost Report 2026",
    description: "Rate bands, budget composition and UAE-specific cost drivers. Free to cite.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

/* Every figure below is either (a) Backyard Studio Official's own published rate
   card — verifiable at /pricing — or (b) an observed market range, labelled as
   such. No survey is claimed and none is implied. */

const RATE_BANDS = [
  {
    format: "Social media content shoot",
    entry: "AED 2,500",
    mid: "AED 5,500",
    upper: "AED 8,000",
    note: "Half-day starter through full monthly content bank. Priced per content day, not per asset.",
  },
  {
    format: "Event photography & videography",
    entry: "AED 3,000",
    mid: "AED 7,500",
    upper: "AED 20,000+",
    note: "Single shooter half-day through multi-day, multi-camera conference coverage.",
  },
  {
    format: "Wedding photography",
    entry: "AED 7,500",
    mid: "AED 15,500",
    upper: "AED 65,000",
    note: "Essential half-day, full-day, premium multi-camera, and multi-day luxury productions.",
  },
  {
    format: "Corporate film / DVC",
    entry: "AED 15,000",
    mid: "AED 45,000",
    upper: "AED 150,000+",
    note: "Single-day corporate film through full brand DVC with cast, location and large-scale TVC work.",
  },
];

const MARKET_CONTEXT = [
  { supplier: "Solo freelancer", band: "AED 800 – 3,000 / day", note: "Single camera, no permit standing, no backup crew." },
  { supplier: "Boutique production studio", band: "AED 2,500 – 45,000 / project", note: "In-house crew, permits handled, fixed delivery dates." },
  { supplier: "Full-service agency", band: "AED 80,000 – 500,000+ / campaign", note: "Strategy, talent and media layered on top of production." },
  { supplier: "In-house team", band: "AED 30,000+ / month", note: "Fully loaded cost including salaries, kit and depreciation." },
];

const BUDGET_SPLIT = [
  { line: "Crew (director, DoP, camera, sound, assistants)", share: "30 – 40%", note: "The largest single line on almost every UAE production." },
  { line: "Post-production (edit, colour, sound, graphics)", share: "20 – 30%", note: "Rises sharply with motion graphics or multi-language versioning." },
  { line: "Equipment & rental", share: "10 – 20%", note: "Cinema bodies, lighting, grip, and specialist rigs." },
  { line: "Location, permits & venue costs", share: "5 – 15%", note: "Highly variable. Downtown, malls and hotel grounds sit at the top of the range." },
  { line: "Talent, styling, art direction", share: "5 – 15%", note: "Zero on a documentary-style corporate film; dominant on a TVC." },
  { line: "Contingency", share: "5 – 10%", note: "Weather, permit delays, and reshoot risk. Budgets without it overrun." },
];

const UAE_DRIVERS = [
  {
    h: "Filming permits are a real line item, not a formality",
    p: "Commercial filming across most of Dubai's public and semi-public space requires permits, with separate approvals for malls, Downtown, DIFC, beaches and hotel grounds. Lead times vary by location and directly affect scheduling cost — a permit that takes a week to clear can force a second shoot day.",
  },
  {
    h: "Aerial work carries an authorisation cost",
    p: "Drone operations in the UAE require aviation authorisation, and Dubai adds further clearance. Quotes that include aerials without referencing approvals are either absorbing an unbudgeted cost or planning to fly without one.",
  },
  {
    h: "Venue insurance is a gate, not an extra",
    p: "Most five-star hotels, malls and corporate venues require proof of public liability insurance before crew and equipment are admitted. Suppliers without cover are stopped at the loading bay — which converts a saving into a lost shoot day.",
  },
  {
    h: "Language and gender requirements change the crew sheet",
    p: "Arabic-speaking direction, and all-female crews for ladies-only wedding coverage, are routine requirements in this market. Both affect crew availability and therefore cost, particularly in peak wedding season.",
  },
  {
    h: "Seasonality moves rates more than most buyers expect",
    p: "October to April is peak season across events, weddings and corporate production, and crew availability tightens accordingly. July and August are the softest months for outdoor work — heat limits daylight shooting windows but indoor and studio production is meaningfully easier to book.",
  },
  {
    h: "Multi-language versioning is priced in post, not production",
    p: "English and Arabic deliverables from one shoot is standard practice in the UAE. The cost sits in post — subtitling, voice-over, and graphics re-versioning — and is the line most often left out of an under-specified quote.",
  },
];

/* Answer-first FAQs for exact AEO intents. Numbers below are only those
   already published on /pricing and in the rate-band table on this page.
   Schema text must stay plain (no JSX); visible HTML adds deep links. */
const FAQS = [
  {
    q: "How much does video production cost in Dubai in 2026?",
    a: "Video production in Dubai in 2026 spans published bands of AED 2,500–8,000 for social media content shoots, AED 3,000–20,000+ for event photography and videography, AED 7,500–65,000 for wedding photography and videography, and AED 15,000–150,000+ for corporate films and DVCs. Those entry/mid/upper figures are Backyard Studio Official's listed rates on the pricing page — the same bands summarised in Section 01 of this report.",
    links: [
      { href: "/pricing", label: "Published pricing packages" },
      { href: "/services/corporate-films", label: "Corporate films" },
      { href: "/services/reels", label: "Reels / social content" },
      { href: "/services/wedding-photography", label: "Wedding photography" },
    ],
  },
  {
    q: "What's included in a typical corporate / Reels / wedding video budget?",
    a: "A typical corporate Digital DVC at AED 15,000 includes creative concept and script, one shoot day, professional talent, a 30-second hero ad plus 15-second cut-down, multi-format delivery (9:16, 16:9, 1:1), and two revision rounds. A Reels / social Starter day at AED 2,500 covers four hours of production, 3–4 edited Reels/TikToks, 20–30 photo selects, stories and feed formats, and 48-hour delivery. A wedding Essential package at AED 7,500 includes one photographer and one videographer, three hours of coverage, 30–40 edited photos, a full event edited video, and same-day RAW data. Mid and upper tiers add crew, shoot hours, albums, highlights, and multi-day commercial scope — see the pricing page for the full itemised lists.",
    links: [
      { href: "/pricing", label: "Full itemised packages on /pricing" },
      { href: "/services/corporate-films", label: "Corporate / DVC budgets" },
      { href: "/services/reels", label: "Reels budgets from AED 2,500" },
      { href: "/services/wedding-photography", label: "Wedding budgets from AED 7,500" },
    ],
  },
  {
    q: "Why do quotes vary so widely (crew, shoot days, usage rights)?",
    a: "Quotes move mainly with crew size and day count, then with what is included after the shoot. On a typical UAE production budget, crew is the largest line at 30–40%, followed by post-production at 20–30%. One shoot day versus two–three days (Digital AED 15,000 vs Broadcast AED 45,000) multiplies crew, kit and location cost. Permits, venue insurance, Arabic/English versioning, cast, and aerial authorisation are the UAE-specific lines most often missing from a thin quote. Usage and delivery rights also differ by channel — social-only cut-downs versus broadcast-ready TVC delivery — so two quotes that look similar on day rate can diverge once rights and versioning are specified.",
    links: [
      { href: "/pricing", label: "Compare published package scopes" },
      { href: "/how-to-choose-a-production-company-in-dubai", label: "What to check before you sign" },
    ],
  },
  {
    q: "What's a realistic starter budget vs a full commercial?",
    a: "A realistic starter budget on published rates is AED 2,500 for a half-day Reels/social content shoot, AED 3,000 for essential event coverage, AED 7,500 for an Essential wedding photo+video package, or AED 15,000 for a Digital DVC / single-day corporate film. A full commercial sits higher: Broadcast DVC packages list at AED 45,000 (2–3 shoot days, casting, location scouting, Arabic + English versions), and Premium brand campaigns start at AED 150,000+ for multi-day UAE-wide production with larger cast and crew. Choose the band that matches shoot days and deliverables — not a single average day rate.",
    links: [
      { href: "/pricing", label: "Starter packages vs commercial tiers" },
      { href: "/services/reels", label: "Reels starter from AED 2,500" },
      { href: "/services/corporate-films", label: "DVC / commercial tiers" },
    ],
  },
  {
    q: "How does Backyard's published pricing compare to getting a custom quote?",
    a: "Published packages on the pricing page are fixed starting-point guides — the same AED bands used in this report — so you can benchmark another quote before you brief anyone. Most projects are still custom-quoted from your brief, dates and usage needs; Backyard Studio Official responds with an itemised quote within about two hours. Use the published card to check that crew, shoot days and deliverables are in the right band, then request a custom quote when scope, locations or rights sit outside a standard package.",
    links: [
      { href: "/pricing", label: "See published pricing" },
      { href: "/contact", label: "Request a custom quote" },
    ],
  },
  {
    q: "Can I cite this report?",
    a: "Yes. This report is free to cite and quote with attribution to Backyard Studio Official, linking to backyardstudioofficial.com. No permission request is needed. Journalists and researchers wanting additional detail can contact info@backyardstudioofficial.com.",
    links: [],
  },
];

export default function CostReportPage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "UAE Video Production Cost Report 2026", url: PAGE_URL },
  ]);
  const faq = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const speakable = speakableSchema(PAGE_URL, ["h1", "h2", ".speakable"]);

  const report = {
    "@context": "https://schema.org",
    "@type": "Report",
    "@id": `${PAGE_URL}#report`,
    headline: "UAE Video Production Cost Report 2026",
    name: "UAE Video Production Cost Report 2026",
    description:
      "Published rate bands by production format, budget composition, UAE-specific cost drivers and seasonality for video production in the United Arab Emirates in 2026.",
    inLanguage: "en-AE",
    datePublished: "2026-08-05",
    dateModified: "2026-09-14",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Organization", name: "Backyard Studio Official", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo-black.png` },
    },
    spatialCoverage: { "@type": "Country", name: "United Arab Emirates" },
    temporalCoverage: "2026",
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    about: [
      { "@type": "Thing", name: "Video production costs" },
      { "@type": "Place", name: "United Arab Emirates" },
    ],
  };

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(report) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="container-xl pt-14 pb-10" style={{ maxWidth: "72rem" }}>
        <p className="eyebrow mb-5">Data Report · Published 5 August 2026 · Free to cite</p>
        {/* The {" "} between spans is load-bearing. Without it the h1's
            textContent reads "UAE VIDEO PRODUCTIONCOST REPORT 2026" — the spans
            are display:block so it looks right, but Google, screen readers and
            LLMs all read textContent, not the rendered layout. The whitespace
            node collapses to nothing visible between block elements, so this
            costs no layout and fixes the machine-readable title. aria-label
            makes the intended reading explicit. Do not remove either. */}
        <h1
          className="font-display leading-[0.95] mb-7"
          style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)" }}
          aria-label="UAE Video Production Cost Report 2026"
        >
          <span className="block text-cream">UAE VIDEO PRODUCTION</span>{" "}
          <span className="block gold-text">COST REPORT 2026</span>
        </h1>

        <div
          className="speakable p-7 mb-8"
          style={{ background: "#111111", border: "1px solid rgba(232,197,71,0.35)" }}
        >
          <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold mb-3">
            Headline finding
          </p>
          <p className="text-cream text-lg leading-relaxed">
            Video production in the UAE in 2026 spans AED 2,500 for a social content day to AED 150,000+ for a
            full-scale commercial. Crew is the largest cost line on almost every production at 30–40% of budget,
            followed by post-production at 20–30%. Permits, venue insurance and language versioning are the three
            costs most often missing from a quote.
          </p>
        </div>

        <p className="text-silver/80 leading-relaxed font-light">
          Buyers in this market consistently struggle to benchmark a production quote, because almost nobody
          publishes rates. This report puts structured numbers on the table: what the bands actually are by
          format, how a budget divides internally, and which UAE-specific costs turn a cheap quote into an
          expensive project.
        </p>
      </section>

      <div className="gold-line-full" />

      {/* ── SECTION 1: RATE BANDS ────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">01 —</span> <span className="gold-text">RATE BANDS BY FORMAT</span>
        </h2>
        <p className="speakable text-silver/80 text-sm font-light mb-10 max-w-3xl leading-relaxed">
          Published rate bands for the four highest-volume production formats in the UAE. These are Backyard
          Studio Official&apos;s own listed rates, verifiable on our{" "}
          <Link href="/pricing" className="link-gold">pricing page</Link>
          {" "}(Reels/social from AED 2,500, wedding packages from AED 7,500, corporate/DVC from AED 15,000), published
          here so buyers have a fixed reference point to benchmark other quotes against.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(232,197,71,0.3)" }}>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Format</th>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Entry</th>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Mid</th>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Upper</th>
                <th className="py-3 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">What moves it</th>
              </tr>
            </thead>
            <tbody>
              {RATE_BANDS.map((r) => (
                <tr key={r.format} style={{ borderBottom: "1px solid #2a2a2a" }}>
                  <td className="py-4 pr-5 text-cream text-sm font-medium align-top">{r.format}</td>
                  <td className="py-4 pr-5 text-[#e8c547] text-sm font-medium align-top whitespace-nowrap">{r.entry}</td>
                  <td className="py-4 pr-5 text-[#e8c547] text-sm font-medium align-top whitespace-nowrap">{r.mid}</td>
                  <td className="py-4 pr-5 text-[#e8c547] text-sm font-medium align-top whitespace-nowrap">{r.upper}</td>
                  <td className="py-4 text-silver/75 text-sm font-light align-top">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="text-cream font-semibold text-lg mt-14 mb-4">Wider market context</h3>
        <p className="speakable text-silver/80 text-sm font-light mb-6 max-w-3xl leading-relaxed">
          Observed ranges across supplier types in the UAE market. These are not our rates — they are the bands a
          buyer will encounter when they run a competitive process.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {MARKET_CONTEXT.map((m) => (
            <div key={m.supplier} className="p-5" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              <p className="text-cream text-sm font-semibold mb-1">{m.supplier}</p>
              <p className="text-[#e8c547] text-sm font-medium mb-2">{m.band}</p>
              <p className="text-silver/70 text-xs font-light leading-relaxed">{m.note}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── SECTION 2: BUDGET COMPOSITION ────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">02 —</span> <span className="gold-text">WHERE THE MONEY GOES</span>
        </h2>
        <p className="speakable text-silver/80 text-sm font-light mb-10 max-w-3xl leading-relaxed">
          How a UAE production budget divides internally. Understanding this is the fastest way to read a quote:
          if a supplier&apos;s crew line is well under 30%, either the crew is thin or the number is hiding
          somewhere else.
        </p>

        <div className="space-y-3">
          {BUDGET_SPLIT.map((b) => (
            <div
              key={b.line}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5"
              style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}
            >
              <span className="font-display text-xl shrink-0 w-24" style={{ color: "#e8c547" }}>
                {b.share}
              </span>
              <div>
                <p className="text-cream text-sm font-medium">{b.line}</p>
                <p className="text-silver/70 text-xs font-light mt-0.5">{b.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── SECTION 3: UAE-SPECIFIC DRIVERS ──────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">03 —</span> <span className="gold-text">UAE COST DRIVERS</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-10 max-w-3xl">
          Six cost factors specific to producing in the Emirates. These are the items that most often separate a
          quote that holds from one that does not.
        </p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {UAE_DRIVERS.map((d) => (
            <div key={d.h}>
              <h3 className="text-cream font-semibold text-base mb-2.5">{d.h}</h3>
              <p className="speakable text-silver/75 text-sm font-light leading-relaxed">{d.p}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── METHODOLOGY — required for the report to be citable ──────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-8">
          <span className="text-cream">METHODOLOGY &</span> <span className="gold-text">SOURCES</span>
        </h2>
        <div className="p-7 space-y-4" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
          <p className="text-silver/80 text-sm font-light leading-relaxed">
            <span className="text-cream font-medium">Rate bands (Section 01)</span> are Backyard Studio
            Official&apos;s own published rates as listed on our{" "}
            <Link href="/pricing" className="link-gold">pricing page</Link>, current as of 5 August 2026. They are
            reproduced here so the figures in this report are independently verifiable rather than anonymous.
          </p>
          <p className="text-silver/80 text-sm font-light leading-relaxed">
            <span className="text-cream font-medium">Wider market ranges</span> are observed bands encountered in
            competitive UAE processes across freelancer, boutique studio, agency and in-house models. They are
            presented as ranges, not averages, and no survey is claimed.
          </p>
          <p className="text-silver/80 text-sm font-light leading-relaxed">
            <span className="text-cream font-medium">Budget composition (Section 02)</span> reflects the
            structure Backyard Studio Official uses when building production budgets in the UAE. Shares are given
            as ranges because the mix shifts substantially between documentary-style corporate work and
            talent-led commercial work.
          </p>
          <p className="text-silver/80 text-sm font-light leading-relaxed">
            <span className="text-cream font-medium">UAE cost drivers (Section 03)</span> describe regulatory and
            operational conditions applicable to commercial production in the Emirates, including permit
            requirements and aviation authorisation for aerial work. Buyers should confirm current requirements with
            the relevant authority for their specific locations and dates.
          </p>
          <p className="text-silver/70 text-xs font-light leading-relaxed pt-2" style={{ borderTop: "1px solid #2a2a2a" }}>
            All figures are in UAE dirhams (AED) and exclude VAT unless stated. Ranges describe typical projects
            and are not quotes. For a project-specific figure, request an itemised quote.
          </p>
        </div>
      </section>

      {/* ── CITATION BLOCK — this is what earns the link ─────────────────── */}
      <section className="container-xl pb-10" style={{ maxWidth: "72rem" }}>
        <div className="p-7" style={{ background: "#111111", border: "1px solid rgba(232,197,71,0.3)" }}>
          <div className="flex items-center gap-2 mb-4">
            <Quote size={15} style={{ color: "#e8c547" }} />
            <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold">
              How to cite this report
            </p>
          </div>
          <p className="text-silver/80 text-sm font-light leading-relaxed mb-5">
            This report is free to quote, reproduce and cite with attribution. No permission request is required.
            Journalists, analysts and researchers wanting additional detail or comment can reach us at{" "}
            <a href="mailto:info@backyardstudioofficial.com" className="link-gold">
              info@backyardstudioofficial.com
            </a>
            .
          </p>
          <div className="p-4 text-xs leading-relaxed font-mono" style={{ background: "#0a0a0a", border: "1px solid #2a2a2a", color: "var(--silver)" }}>
            Backyard Studio Official (2026). <em>UAE Video Production Cost Report 2026</em>. Dubai, United Arab
            Emirates. Available at: https://www.backyardstudioofficial.com/uae-video-production-cost-report-2026
          </div>
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── FAQ — visible answer-first HTML; JSON-LD mirrors these Q&As only ─ */}
      <section className="container-xl py-16" id="faq" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-4">
          <span className="text-cream">REPORT</span> <span className="gold-text">FAQ</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-10 max-w-3xl leading-relaxed">
          Straight answers to the questions buyers ask before they open a brief — with AED bands tied to our{" "}
          <Link href="/pricing" className="link-gold">published pricing</Link>, not invented averages.
        </p>
        <div className="space-y-5">
          {FAQS.map((f) => (
            <div key={f.q} className="p-6" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              <h3 className="text-cream font-semibold text-base mb-3">{f.q}</h3>
              <p className="speakable text-silver/80 text-sm leading-relaxed font-light">{f.a}</p>
              {f.links.length > 0 && (
                <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                  {f.links.map((l) => (
                    <Link key={l.href + l.label} href={l.href} className="link-gold inline-flex items-center gap-1">
                      {l.label} <ArrowUpRight size={11} />
                    </Link>
                  ))}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── REVERSE SILO ─────────────────────────────────────────────────── */}
      <section className="container-xl pb-20" style={{ maxWidth: "72rem" }}>
        <div className="p-8" style={{ background: "#111111", border: "1px solid rgba(232,197,71,0.3)" }}>
          <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold mb-4">
            Put a number on your project
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {[
              { label: "Full published pricing", href: "/pricing" },
              { label: "How to choose a production company", href: "/how-to-choose-a-production-company-in-dubai" },
              { label: "Corporate films & DVCs", href: "/services/corporate-films" },
              { label: "Event videography", href: "/services/event-videography" },
              { label: "Wedding photography", href: "/services/wedding-photography" },
              { label: "Social media content", href: "/services/social-media-content" },
              { label: "Production in Dubai", href: "/locations/dubai" },
              { label: "Production in Abu Dhabi", href: "/locations/abu-dhabi" },
              { label: "Case studies", href: "/case-studies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-2 text-silver/80 hover:text-[#e8c547] transition-colors text-sm"
              >
                <span className="text-[#e8c547]">&#8594;</span> {l.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-6" style={{ borderTop: "1px solid #2a2a2a" }}>
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2 justify-center">
              Request an itemised quote <ArrowUpRight size={14} />
            </Link>
            <a
              href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%20read%20the%20UAE%20Production%20Cost%20Report%20and%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 justify-center"
            >
              WhatsApp us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <p className="text-silver/50 text-xs font-light mt-6 leading-relaxed">
          Published by Backyard Studio Official, a licensed UAE video and photo production company founded in
          2019, operating across all seven emirates since 2023. Last reviewed 5 August 2026.
        </p>
      </section>
    </div>
  );
}
