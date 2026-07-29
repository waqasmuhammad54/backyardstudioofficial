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
    | "Technology";
  /** Region the engagement sits in. */
  region: "UAE" | "International";
};

export const CLIENTS: Client[] = [
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
