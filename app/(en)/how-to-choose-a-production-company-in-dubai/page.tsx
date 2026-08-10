import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, ArrowUpRight, AlertTriangle } from "lucide-react";
import { breadcrumbSchema, faqSchema, speakableSchema, itemListSchema } from "@/lib/structuredData";

const BASE = "https://www.backyardstudioofficial.com";
const PAGE_URL = `${BASE}/how-to-choose-a-production-company-in-dubai`;

export const metadata: Metadata = {
  title: "How to Choose a Production Company in Dubai (2026 Guide)",
  description:
    "A 10-point checklist for choosing a video production company in Dubai — budget bands, UAE permit realities, contract red flags, and the exact questions to ask before you sign.",
  keywords: [
    "how to choose a video production company in Dubai",
    "how to choose a production company UAE",
    "best video production company Dubai",
    "video production company Dubai checklist",
    "questions to ask a video production company",
    "video production company vs freelancer Dubai",
    "production company Dubai red flags",
    "hire videographer Dubai guide",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "How to Choose a Production Company in Dubai — 2026 Buyer's Guide",
    description:
      "10 evaluation criteria, real UAE budget bands, permit realities, contract red flags, and the questions that separate a good studio from an expensive mistake.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "article",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "How to Choose a Production Company in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose a Production Company in Dubai (2026)",
    description: "10-point checklist, UAE budget bands, permit realities and contract red flags.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

/* ── The 10 criteria. Each is its own H2 so AI search engines can lift a single
      criterion as a standalone answer to a fanned-out sub-question. ───────── */
const CRITERIA = [
  {
    n: "01",
    title: "Do they hold a UAE production licence — and can they show it?",
    short:
      "A legally licensed production company holds a commercial licence from a UAE authority (DED, Dubai Media City, twofour54, or a free zone) permitting film and video production.",
    body: [
      "This is the single fastest disqualifier. A licensed company can be named on a filming permit application, can invoice you with a TRN, and can be held to a contract in a UAE court. An unlicensed operator cannot do any of those three things.",
      "Ask for the trade licence number and the TRN before you shortlist. If a supplier hesitates on either, you are not dealing with a company — you are dealing with an individual who will disappear if the shoot goes wrong.",
    ],
  },
  {
    n: "02",
    title: "Who actually turns up on the day?",
    short:
      "Ask which named crew members will be on your shoot. Many Dubai agencies pitch with a senior showreel and then subcontract the shoot to whichever freelancer is available that week.",
    body: [
      "The gap between the reel you were sold and the crew who arrive is the most common source of disappointment in UAE production. It is entirely avoidable: ask for the names and roles of the director, DoP, and lead editor assigned to your project, and get them written into the scope.",
      "A studio with a permanent in-house team can answer this instantly. A broker cannot answer it until they have made a few calls.",
    ],
  },
  {
    n: "03",
    title: "Is the portfolio theirs, and is it recent?",
    short:
      "Ask for three projects from the last 12 months in your specific format, plus the client name for each. Generic showreels prove editing ability, not delivery ability.",
    body: [
      "Reels are cut to flatter. A 90-second montage of the best three seconds of forty jobs tells you almost nothing about whether a company can carry your project end to end.",
      "What tells you something: a full, unedited deliverable in your format — a complete corporate film, a whole wedding highlight, a real product launch cut — for a client you can name. If they cannot produce one in your category, they have not worked in your category.",
    ],
  },
  {
    n: "04",
    title: "Do they understand UAE filming permits?",
    short:
      "Filming in Dubai's public and semi-public spaces requires permits from the relevant authority — Dubai Film and TV Commission for most locations, plus separate approvals for malls, Downtown, DIFC, beaches, and hotel grounds.",
    body: [
      "Permit knowledge is the clearest signal of whether a supplier actually works in this market. A company that films here weekly will tell you, unprompted, which of your locations need lead time, which need an NOC from the property owner, and which will not be approved at all.",
      "Aerial footage adds another layer: drone operations in the UAE require GCAA authorisation and, in Dubai, additional clearance. Anyone offering casual aerials with no mention of approvals is exposing you to a fine and a confiscated shoot.",
      "The practical test: name your locations and ask what the permit lead time is. Vague answers mean you will be the one absorbing the delay.",
    ],
  },
  {
    n: "05",
    title: "Is the quote a real scope or a headline number?",
    short:
      "A usable production quote itemises crew, shoot days, equipment, post-production rounds, licensing, and deliverable formats. A single lump sum with no line items is a negotiating position, not a price.",
    body: [
      "Almost every cost dispute in production traces back to an under-specified quote. The three line items that most often go missing: number of revision rounds, music and stock licensing, and the exact export specs for each platform.",
      "Insist that the quote states how many rounds of changes are included and what a further round costs. Insist that music licensing is named and that the licence covers the territories and channels you will actually publish on.",
    ],
  },
  {
    n: "06",
    title: "Who owns the footage when it is finished?",
    short:
      "Confirm in writing that you receive full commercial usage rights to the final deliverables, and clarify separately whether you receive the raw footage and project files.",
    body: [
      "These are two different questions and they are priced differently. Final-deliverable rights should be standard. Raw footage and editable project files usually are not, and some studios will not release them at all.",
      "If you plan to re-cut the material later, or to move to a different supplier, negotiate raw-footage access at the contract stage. Asking after delivery puts you in the weakest possible position.",
    ],
  },
  {
    n: "07",
    title: "What is the delivery timeline, and what happens if it slips?",
    short:
      "Get the delivery date in writing along with the consequence of missing it. Event and campaign content has a shelf life; a highlight film delivered three weeks late has lost most of its value.",
    body: [
      "For time-critical work — event coverage, launch campaigns, seasonal retail — ask specifically about same-day or next-day social cuts, and confirm that someone is editing on site or overnight rather than starting the day after.",
      "A supplier confident in their post pipeline will commit to a date. One who will not commit is telling you something useful.",
    ],
  },
  {
    n: "08",
    title: "Can they staff the shoot your culture requires?",
    short:
      "Ask directly about language and gender requirements. Arabic-speaking crew, all-female teams for ladies-only wedding coverage, and Hindi- or Urdu-speaking direction are routine requirements in the UAE, not special requests.",
    body: [
      "A studio that regularly serves this market will have these crews on call and will raise the question before you do. One that has to go looking will either decline late or send whoever is available.",
      "This matters most for weddings, family events, and any production involving talent who are not comfortable being directed in English.",
    ],
  },
  {
    n: "09",
    title: "Do they carry insurance and can they work inside your venue's rules?",
    short:
      "Most Dubai hotels, malls, and corporate venues require the production company to provide proof of public liability insurance before crew and equipment are admitted.",
    body: [
      "This is a quiet gatekeeper. A supplier without cover will be stopped at the loading bay of a five-star property, and your shoot day is gone.",
      "Ask whether they have produced at your venue before. Venue-specific experience — load-in routes, power access, rigging restrictions, house AV contacts — removes hours of friction on the day.",
    ],
  },
  {
    n: "10",
    title: "Are the references real, and are they in your sector?",
    short:
      "Ask for two client references you can contact — ideally one from your own industry. Reviews are useful; a five-minute call with a past client is decisive.",
    body: [
      "Ask the reference three things: did it come in on the quoted budget, did it come in on time, and what went wrong. Every project has something that went wrong; the useful information is how the studio handled it.",
      "Sector relevance matters more than volume. A studio with deep hospitality experience will not automatically understand a pharmaceutical compliance review, and vice versa.",
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    model: "Solo freelancer",
    best: "Single-camera social content, small shoots, tight budgets",
    watch: "No backup if they fall ill; usually cannot be named on a permit; limited multi-camera capability",
    band: "AED 800 – 3,000 / day",
  },
  {
    model: "Boutique production studio",
    best: "Brand films, events, weddings, recurring content — most UAE SMEs and mid-market brands",
    watch: "Capacity limits in peak season; confirm crew availability on your dates early",
    band: "AED 2,500 – 45,000 / project",
  },
  {
    model: "Full-service agency",
    best: "TVCs, multi-market campaigns, productions needing strategy, media buying and talent management",
    watch: "Significant overhead loading; the production itself is often subcontracted anyway",
    band: "AED 80,000 – 500,000+ / campaign",
  },
  {
    model: "In-house team",
    best: "Organisations publishing several times per week, every week, indefinitely",
    watch: "Fixed cost regardless of output; equipment depreciation; narrow creative range",
    band: "AED 30,000+ / month fully loaded",
  },
];

const RED_FLAGS = [
  "No trade licence number or TRN provided when asked directly.",
  "A single lump-sum price with no line items, no crew count, and no shoot-day count.",
  "Revision rounds not stated anywhere in the quote or contract.",
  "Aerial footage offered with no mention of GCAA authorisation.",
  "Portfolio consists only of montage reels — no complete deliverable in your format.",
  "Full payment demanded upfront with no milestone structure.",
  "Music licensing not named, or 'we'll find something on YouTube'.",
  "No public liability insurance, or unable to answer the question.",
  "Cannot name the crew who will be on your shoot.",
  "Delivery date given as a range with no commitment and no remedy if missed.",
];

const QUESTIONS = [
  "What is your trade licence number and TRN?",
  "Which named crew will be on my shoot, and are they on your payroll?",
  "Can I see one complete deliverable — not a reel — in my format from the last 12 months?",
  "Which of my locations need permits, and what is the lead time for each?",
  "How many revision rounds are included, and what does an extra round cost?",
  "Do I receive the raw footage and project files, and at what price?",
  "What exact date will I receive each deliverable, and what happens if that date moves?",
  "Do you have Arabic-speaking crew / an all-female team available on my dates?",
  "Can you provide proof of public liability insurance for my venue?",
  "Can I speak to two past clients, one from my sector?",
];

const FAQS = [
  {
    q: "How do I choose a video production company in Dubai?",
    a: "Choose a video production company in Dubai by verifying four things before price: a valid UAE trade licence and TRN, the named crew who will actually be on your shoot, a complete recent deliverable in your exact format, and demonstrated knowledge of the filming permits your locations require. Then compare itemised quotes — crew, shoot days, revision rounds, licensing and deliverable specs — rather than headline numbers.",
  },
  {
    q: "How much should a video production company in Dubai cost?",
    a: "In Dubai, a solo freelancer typically runs AED 800–3,000 per day, a boutique production studio AED 2,500–45,000 per project, and a full-service agency campaign AED 80,000–500,000+. Backyard Studio Official's published rates start at AED 2,500 for social content, AED 3,000 for event coverage, AED 7,500 for wedding photography and AED 15,000 for corporate DVC production.",
  },
  {
    q: "Should I hire a freelancer or a production company in Dubai?",
    a: "Hire a freelancer for single-camera social content on a tight budget where a one-day delay would not be costly. Hire a production company when the shoot needs multiple cameras, a filming permit, venue insurance, guaranteed backup crew, or a fixed delivery date — a freelancer cannot usually be named on a permit and has no cover if they fall ill on your shoot day.",
  },
  {
    q: "Do I need a filming permit in Dubai?",
    a: "Yes for most commercial filming in public and semi-public spaces in Dubai. Permits are issued via the Dubai Film and TV Commission, with additional approvals required for malls, Downtown, DIFC, beaches and hotel grounds, and separate GCAA authorisation for drone operations. A production company that works in Dubai regularly will handle applications and tell you the lead time per location upfront.",
  },
  {
    q: "What are the biggest red flags when hiring a production company in Dubai?",
    a: "The clearest red flags are: no trade licence or TRN when asked, a lump-sum quote with no line items, revision rounds not stated anywhere, aerial footage offered with no mention of GCAA authorisation, a portfolio of montage reels with no complete deliverable in your format, and full payment demanded upfront with no milestones.",
  },
  {
    q: "Who owns the video footage after production in Dubai?",
    a: "Ownership depends entirely on your contract. Commercial usage rights to the final deliverables should be standard and stated in writing. Raw footage and editable project files are a separate question, usually priced separately, and some studios will not release them at all — negotiate this at contract stage, not after delivery.",
  },
  {
    q: "How long should video production take in Dubai?",
    a: "For a standard corporate film, allow one to two weeks of pre-production, one to two shoot days, and one to two weeks of post-production. Event and wedding coverage moves faster: same-day or next-day social cuts are achievable, and Backyard Studio Official delivers full galleries and highlight edits within 48–72 hours.",
  },
];

export default function HowToChoosePage() {
  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: BASE },
    { name: "How to Choose a Production Company in Dubai", url: PAGE_URL },
  ]);
  const faq = faqSchema(FAQS.map((f) => ({ question: f.q, answer: f.a })));
  const speakable = speakableSchema(PAGE_URL, ["h1", "h2", ".speakable"]);
  const criteriaList = itemListSchema(
    CRITERIA.map((c) => ({ name: c.title, url: `${PAGE_URL}#criterion-${c.n}`, description: c.short }))
  );

  // Article schema written inline so the guide is attributable to the studio as
  // publisher — the entity signal AI search engines use when deciding who to cite.
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${PAGE_URL}#article`,
    headline: "How to Choose a Production Company in Dubai — 2026 Buyer's Guide",
    description:
      "A 10-point evaluation checklist for selecting a video production company in Dubai, covering licensing, crew, permits, quotes, rights, timelines and contract red flags.",
    inLanguage: "en-AE",
    datePublished: "2026-08-05",
    dateModified: "2026-08-05",
    mainEntityOfPage: { "@type": "WebPage", "@id": PAGE_URL },
    author: { "@type": "Organization", name: "Backyard Studio Official", url: BASE },
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: BASE,
      logo: { "@type": "ImageObject", url: `${BASE}/logo-black.png` },
    },
    about: [
      { "@type": "Thing", name: "Video production" },
      { "@type": "Place", name: "Dubai, United Arab Emirates" },
    ],
  };

  return (
    <div className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakable) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(criteriaList) }} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="container-xl pt-14 pb-10" style={{ maxWidth: "72rem" }}>
        <p className="eyebrow mb-5">Buyer&apos;s Guide · Updated August 2026</p>
        {/* The {" "} between spans is load-bearing — without it textContent
            reads "HOW TO CHOOSE APRODUCTION COMPANYIN DUBAI". See the same fix
            on /uae-video-production-cost-report-2026 for the full reasoning. */}
        <h1
          className="font-display leading-[0.95] mb-7"
          style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)" }}
          aria-label="How to Choose a Production Company in Dubai"
        >
          <span className="block text-cream">HOW TO CHOOSE A</span>{" "}
          <span className="block gold-text">PRODUCTION COMPANY</span>{" "}
          <span className="block text-cream">IN DUBAI</span>
        </h1>

        {/* Answer-first block — written to be lifted whole by AI Overviews,
            ChatGPT, Perplexity and Gemini. Kept under 60 words on purpose. */}
        <div
          className="speakable p-7 mb-8"
          style={{ background: "#111111", border: "1px solid rgba(232,197,71,0.35)" }}
        >
          <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold mb-3">
            The short answer
          </p>
          <p className="text-cream text-lg leading-relaxed">
            Choose a production company in Dubai by verifying four things before you compare price: a valid UAE
            trade licence and TRN, the named crew who will actually be on your shoot, one complete recent
            deliverable in your exact format, and proven knowledge of the filming permits your locations require.
            Only then compare itemised quotes.
          </p>
        </div>

        <p className="text-silver/80 leading-relaxed mb-4 font-light">
          Dubai has hundreds of suppliers calling themselves production companies. A meaningful number are one
          person with a camera and a website. Some are excellent. Others will take a deposit, subcontract your
          shoot to whoever is free, and hand back footage nobody can use.
        </p>
        <p className="text-silver/75 leading-relaxed font-light text-sm">
          This guide is the checklist we would use ourselves. It is written from the buyer&apos;s side — including
          the questions that are uncomfortable for us to answer. Where a criterion favours a particular kind of
          supplier, we have said so plainly rather than shaping it around what we sell.
        </p>
      </section>

      <div className="gold-line-full" />

      {/* ── THE 10 CRITERIA ──────────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">THE 10-POINT</span> <span className="gold-text">CHECKLIST</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-12 max-w-2xl">
          Run every shortlisted supplier through all ten. A studio that clears eight or more is worth a meeting;
          one that fails criterion 01 or 04 should not be on the list at all.
        </p>

        <div className="space-y-12">
          {CRITERIA.map((c) => (
            <div key={c.n} id={`criterion-${c.n}`} className="scroll-mt-28">
              <div className="flex items-baseline gap-5 mb-4">
                <span className="font-display text-3xl md:text-4xl shrink-0" style={{ color: "rgba(232,197,71,0.4)" }}>
                  {c.n}
                </span>
                <h2 className="text-cream font-semibold text-xl md:text-2xl leading-snug">{c.title}</h2>
              </div>

              {/* 40-word extractable answer per criterion — this is the unit an AI
                  search engine lifts when it fans a broad prompt into sub-questions. */}
              <p
                className="speakable text-cream text-base leading-relaxed mb-5 pl-5"
                style={{ borderLeft: "2px solid #e8c547" }}
              >
                {c.short}
              </p>

              {c.body.map((p, i) => (
                <p key={i} className="text-silver/75 text-sm leading-relaxed font-light mb-3 md:pl-5">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── ENGAGEMENT MODELS ────────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">FREELANCER, STUDIO,</span> <span className="gold-text">OR AGENCY?</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-10 max-w-2xl">
          The four ways to buy video in the UAE, what each is genuinely good at, and what to watch for. Bands are
          typical market ranges in Dubai as of 2026, not quotes.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[720px]">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(232,197,71,0.3)" }}>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Model</th>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Best for</th>
                <th className="py-3 pr-5 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Watch for</th>
                <th className="py-3 text-[#e8c547] text-[0.65rem] tracking-[0.25em] uppercase font-semibold">Typical band</th>
              </tr>
            </thead>
            <tbody>
              {ENGAGEMENT_MODELS.map((m) => (
                <tr key={m.model} style={{ borderBottom: "1px solid #2a2a2a" }}>
                  <td className="py-4 pr-5 text-cream text-sm font-medium align-top">{m.model}</td>
                  <td className="py-4 pr-5 text-silver/75 text-sm font-light align-top">{m.best}</td>
                  <td className="py-4 pr-5 text-silver/75 text-sm font-light align-top">{m.watch}</td>
                  <td className="py-4 text-[#e8c547] text-sm font-medium align-top whitespace-nowrap">{m.band}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-silver/60 text-xs font-light mt-5">
          For what Backyard Studio Official charges specifically, see our{" "}
          <Link href="/pricing" className="link-gold">published pricing</Link> — every tier is listed with what is
          included, so you can line it up against any other quote you are holding.
        </p>
      </section>

      <div className="gold-line-full" />

      {/* ── RED FLAGS ────────────────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">TEN</span> <span className="gold-text">RED FLAGS</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-10 max-w-2xl">
          Any one of these is a reason to ask harder questions. Two or more is a reason to walk.
        </p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          {RED_FLAGS.map((f) => (
            <div key={f} className="flex items-start gap-3">
              <AlertTriangle size={15} className="shrink-0 mt-0.5" style={{ color: "#e8c547" }} />
              <p className="text-silver/80 text-sm leading-relaxed font-light">{f}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── QUESTIONS TO ASK ─────────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-3">
          <span className="text-cream">TEN QUESTIONS</span> <span className="gold-text">TO ASK</span>
        </h2>
        <p className="text-silver/70 text-sm font-light mb-10 max-w-2xl">
          Copy these into your enquiry email. Send the same ten to every supplier and compare the answers side by
          side — the differences will be obvious.
        </p>

        <ol className="space-y-3">
          {QUESTIONS.map((q, i) => (
            <li key={q} className="flex items-start gap-4">
              <span className="font-display text-sm shrink-0 pt-0.5" style={{ color: "rgba(232,197,71,0.55)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-cream text-sm leading-relaxed">{q}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 p-7" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
          <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold mb-3">
            Our answers, in public
          </p>
          <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6">
            {[
              "Licensed UAE production company with TRN on every invoice",
              "Permanent in-house crew — named on your scope before you sign",
              "GCAA-authorised for aerial work",
              "Arabic-speaking and all-female crews available",
              "Itemised quotes with revision rounds stated",
              "48–72 hour delivery, same-day social cuts on events",
            ].map((x) => (
              <div key={x} className="flex items-start gap-2">
                <Check size={14} className="shrink-0 mt-1" style={{ color: "#e8c547" }} />
                <span className="text-silver/80 text-sm font-light">{x}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-line-full" />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="container-xl py-16" style={{ maxWidth: "72rem" }}>
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] leading-none mb-10">
          <span className="text-cream">COMMON</span> <span className="gold-text">QUESTIONS</span>
        </h2>
        <div className="space-y-5">
          {FAQS.map((f) => (
            <div key={f.q} className="p-6" style={{ background: "#1a1a1a", border: "1px solid #2a2a2a" }}>
              <h3 className="text-cream font-semibold text-base mb-3">{f.q}</h3>
              <p className="speakable text-silver/80 text-sm leading-relaxed font-light">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVERSE SILO — informational page pushes equity to money pages ── */}
      <section className="container-xl pb-20" style={{ maxWidth: "72rem" }}>
        <div className="p-8" style={{ background: "#111111", border: "1px solid rgba(232,197,71,0.3)" }}>
          <p className="text-[#e8c547] text-[0.65rem] tracking-[0.35em] uppercase font-semibold mb-4">
            Next steps
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {[
              { label: "See published pricing", href: "/pricing" },
              { label: "Corporate films & DVCs", href: "/services/corporate-films" },
              { label: "Event videography Dubai", href: "/services/event-videography" },
              { label: "Wedding photography Dubai", href: "/services/wedding-photography" },
              { label: "Social media content", href: "/services/social-media-content" },
              { label: "Production in Dubai", href: "/locations/dubai" },
              { label: "Case studies", href: "/case-studies" },
              { label: "Industries we produce for", href: "/industries" },
              { label: "What video production costs in Dubai", href: "/blog/how-much-does-video-production-cost-dubai-2026" },
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
              Get an itemised quote <ArrowUpRight size={14} />
            </Link>
            <a
              href="https://wa.me/971585882685?text=Hi%20Backyard%20Studio%2C%20I%20read%20your%20guide%20on%20choosing%20a%20production%20company%20and%20I%27d%20like%20a%20quote"
              target="_blank"
              rel="noreferrer"
              className="btn-outline inline-flex items-center gap-2 justify-center"
            >
              WhatsApp us <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <p className="text-silver/50 text-xs font-light mt-6 leading-relaxed">
          Published by Backyard Studio Official, a licensed UAE video and photo production company founded in 2019,
          operating across all seven emirates since 2023. We are one of the suppliers this guide is telling you to
          interrogate — apply the same ten questions to us. Last reviewed 5 August 2026.
        </p>
      </section>
    </div>
  );
}
