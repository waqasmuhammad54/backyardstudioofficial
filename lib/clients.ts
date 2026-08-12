/**
 * Brands Backyard Studio Official has produced work for.
 *
 * These are real, named client relationships — the strongest E-E-A-T signal
 * the site has. Named, verifiable clients are what Google's quality framework
 * rewards and what AI answer engines cite; anonymous claims ("a Fortune 500
 * client") are unverifiable and carry no weight.
 *
 * Only add a brand here if work was genuinely delivered for them.
 */

export type Client = {
  /** Brand name exactly as it should be displayed and read by search/LLMs. */
  name: string;
  /** Broad sector — used for grouping on the clients section. */
  sector:
    | "Telecom"
    | "Aviation"
    | "FMCG"
    | "Food & Beverage"
    | "Industrial"
    | "Government"
    | "Automotive"
    | "Technology"
    | "Legal"
    | "Real Estate"
    | "Sports & Fitness";
  /** Region the engagement sits in. */
  region: "UAE" | "International";
  /**
   * Client website, where one exists and the relationship is current.
   *
   * Only set this for clients happy to be linked. An agency linking to the
   * clients whose work it produced is ordinary editorial practice — it is how a
   * portfolio has always worked, and it is verifiable, which is exactly what
   * makes it an E-E-A-T signal rather than an unsupported claim.
   *
   * The reciprocal credit link ("Video production by Backyard Studio Official")
   * belongs on the CLIENT's site. That direction is attribution and is the one
   * that carries weight here. Do not turn this into sitewide footer links in
   * both directions across every page — a handful of contextual, relevant links
   * reads as a real relationship; 400 boilerplate links reads as an exchange.
   */
  website?: string;
  /** What was produced. Kept short and factual — no superlatives. */
  work?: string;
};

export const CLIENTS: Client[] = [
  // ── UAE — current production clients (linked) ────────────────
  // These are live engagements where Backyard produces the video and web
  // content. Linked because the work is real and verifiable; the corresponding
  // "Video production by Backyard Studio Official" credit sits on their side.
  {
    name: "Dubai Legal Expert",
    sector: "Legal",
    region: "UAE",
    website: "https://dubailegalexpert.com",
    work: "Law firm brand film and practice-area video for a UAE firm handling arbitration, criminal defence, family, property and debt matters.",
  },
  {
    name: "The Deedbox",
    sector: "Legal",
    region: "UAE",
    website: "https://thedeedbox.com",
    work: "Explainer and service video for a UAE wills and powers-of-attorney service.",
  },
  {
    name: "Distress Property Finder",
    sector: "Real Estate",
    region: "UAE",
    website: "https://distresspropertyfinder.com",
    work: "Property listing photography and walkthrough video for distressed and off-plan resale stock in Dubai.",
  },
  {
    name: "Judhur Al Bait",
    sector: "Real Estate",
    region: "UAE",
    website: "https://judhuralbait.com",
    work: "Listing photography and property video for luxury, residential and commercial sales and rentals.",
  },
  {
    name: "DKing Combat",
    sector: "Sports & Fitness",
    region: "UAE",
    website: "https://dkingcombat.com",
    work: "Training and promotional video for a Dubai self-defence, Krav Maga and combat sports gym.",
  },

  // ── UAE / Gulf ──────────────────────────────────────────────
  { name: "du",                      sector: "Telecom",          region: "UAE" },
  { name: "Etisalat",                sector: "Telecom",          region: "UAE" },
  { name: "Emirates",                sector: "Aviation",         region: "UAE" },
  { name: "Coffee Planet",           sector: "Food & Beverage",  region: "UAE" },
  { name: "Happy Cow Cheese",        sector: "Food & Beverage",  region: "UAE" },

  // ── International ───────────────────────────────────────────
  { name: "Coca-Cola",               sector: "FMCG",             region: "International" },
  { name: "Nestlé EveryDay",         sector: "FMCG",             region: "International" },
  { name: "Nestlé Fruita Vitals",    sector: "FMCG",             region: "International" },
  { name: "Bibigo",                  sector: "Food & Beverage",  region: "International" },
  { name: "Mumtaz Table Margarine",  sector: "Food & Beverage",  region: "International" },
  { name: "Engro Fertilizers",       sector: "Industrial",       region: "International" },
  { name: "Total PARCO",             sector: "Industrial",       region: "International" },
  { name: "Government of Punjab",    sector: "Government",       region: "International" },
  { name: "PakWheels.com",           sector: "Technology",       region: "International" },
];

/** Flat list of names — used for the homepage marquee and llms.txt. */
export const CLIENT_NAMES: string[] = CLIENTS.map((c) => c.name);

/** UAE-based clients only. */
export const UAE_CLIENTS: Client[] = CLIENTS.filter((c) => c.region === "UAE");
