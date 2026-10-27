import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Calculator, CheckSquare, FileText } from "lucide-react";
import { BASE_URL, RESOURCE_GUIDES, RESOURCE_REVIEW_DATE } from "@/lib/growthResources";
import { breadcrumbSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = `${BASE_URL}/guides`;
const DESCRIPTION = "Practical Dubai production guides for filming permits, drone approvals, production briefs and corporate video ROI, reviewed against primary sources.";

export const metadata: Metadata = {
  title: { absolute: "Video Production Guides Dubai | Backyard Studio" },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Dubai Video Production Guides | Backyard Studio",
    description: "Permit, drone, briefing and ROI resources for teams planning video production in Dubai and the UAE.",
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio production guides" }],
  },
};

const ICONS = [BookOpen, CheckSquare, FileText, Calculator];

export default function GuidesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Production Guides", url: PAGE_URL },
  ]);
  const itemList = itemListSchema(
    RESOURCE_GUIDES.map((guide) => ({
      name: guide.title,
      url: `${PAGE_URL}/${guide.slug}`,
      description: guide.metaDescription,
    })),
  );
  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    url: PAGE_URL,
    name: "Backyard Studio Production Guides",
    description: DESCRIPTION,
    inLanguage: "en-AE",
    dateModified: RESOURCE_REVIEW_DATE,
    isPartOf: { "@type": "WebSite", name: "Backyard Studio Official", url: BASE_URL },
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: BASE_URL },
  };

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection) }} />

      <section className="container-xl pt-16 pb-14" style={{ maxWidth: "76rem" }}>
        <p className="eyebrow mb-5">Planning resources · Reviewed 27 October 2026</p>
        <h1 className="font-display leading-[0.95] mb-7" style={{ fontSize: "clamp(3rem,8vw,6.4rem)", color: "var(--cream)" }}>
          PRODUCTION GUIDES<br /><span className="gold-text">FOR DUBAI TEAMS</span>
        </h1>
        <p className="speakable max-w-3xl text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
          Use these free resources to plan a compliant shoot, brief suppliers accurately and connect video spend to a measurable business result. Regulatory pages cite the responsible authorities; the brief and calculator are practical tools you can use with any production company.
        </p>
      </section>

      <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
        <div className="container-xl py-16 grid md:grid-cols-2 gap-6">
          {RESOURCE_GUIDES.map((guide, index) => {
            const Icon = ICONS[index] ?? BookOpen;
            return (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group p-7 md:p-9 border transition-all hover:border-[var(--gold)]"
                style={{ borderColor: "var(--border)", background: "var(--black)" }}
              >
                <div className="flex items-start justify-between gap-6 mb-7">
                  <Icon size={26} style={{ color: "var(--gold)" }} />
                  <ArrowUpRight size={18} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" style={{ color: "var(--gold)" }} />
                </div>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-3" style={{ color: "var(--muted)" }}>{guide.eyebrow}</p>
                <h2 className="font-display text-3xl mb-4 group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>
                  {guide.title}
                </h2>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--silver)" }}>{guide.metaDescription}</p>
                <span className="text-xs" style={{ color: "var(--gold)" }}>{guide.readingTime} →</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-xl py-16 grid lg:grid-cols-2 gap-10" style={{ maxWidth: "76rem" }}>
        <div>
          <p className="eyebrow mb-4">Evidence standard</p>
          <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>USEFUL BEFORE OPTIMISED</h2>
          <p className="leading-relaxed" style={{ color: "var(--silver)" }}>
            The permit and drone guides distinguish registration, location consent and operational permission instead of collapsing them into one vague “permit”. Sources and review dates are visible so a producer can verify time-sensitive rules at the authority website.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Published proof</p>
          <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>SEE WORK BY SECTOR</h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--silver)" }}>
            Browse curated corporate, events, fashion, beauty, product and wedding examples built only from projects already published on Backyard Studio.
          </p>
          <Link href="/production-portfolio" className="btn-outline inline-flex items-center gap-2">
            <span>Industry portfolio collections</span><ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
