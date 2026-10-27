import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ALL_PROJECTS } from "@/lib/portfolio-data";
import { BASE_URL, PORTFOLIO_COLLECTIONS, RESOURCE_REVIEW_DATE } from "@/lib/growthResources";
import { breadcrumbSchema, itemListSchema } from "@/lib/structuredData";

const PAGE_URL = `${BASE_URL}/production-portfolio`;
const DESCRIPTION = "Curated Dubai production portfolios for corporate events, fashion, beauty, products, e-commerce and weddings, built only from published Backyard work.";

export const metadata: Metadata = {
  title: { absolute: "Production Portfolio by Industry | Backyard Studio" },
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Production Portfolio by Industry | Backyard Studio",
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Backyard Studio production portfolio" }],
  },
};

export default function ProductionPortfolioPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Production Portfolio", url: PAGE_URL },
  ]);
  const itemList = itemListSchema(
    PORTFOLIO_COLLECTIONS.map((collection) => ({
      name: collection.title,
      url: `${PAGE_URL}/${collection.slug}`,
      description: collection.metaDescription,
    })),
  );
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${PAGE_URL}#webpage`,
    name: "Backyard Studio Production Portfolio by Industry",
    description: DESCRIPTION,
    url: PAGE_URL,
    inLanguage: "en-AE",
    dateModified: RESOURCE_REVIEW_DATE,
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: BASE_URL },
  };

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />

      <section className="container-xl pt-16 pb-14" style={{ maxWidth: "76rem" }}>
        <p className="eyebrow mb-5">Published work · Curated by sector</p>
        <h1 className="font-display leading-[0.95] mb-7" style={{ fontSize: "clamp(3rem,8vw,6.4rem)", color: "var(--cream)" }}>
          PRODUCTION PORTFOLIO<br /><span className="gold-text">BY INDUSTRY</span>
        </h1>
        <p className="speakable max-w-3xl text-lg leading-relaxed" style={{ color: "var(--silver)" }}>
          Browse work in the context of the job you are planning. Every collection below uses projects already published in Backyard Studio&apos;s main portfolio, then adds practical notes on what to inspect, what to brief and which deliverables to request.
        </p>
      </section>

      <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
        <div className="container-xl py-16 grid md:grid-cols-2 gap-6">
          {PORTFOLIO_COLLECTIONS.map((collection) => {
            const firstProject = ALL_PROJECTS.find((project) => collection.projectIds.includes(project.id));
            return (
              <Link
                key={collection.slug}
                href={`/production-portfolio/${collection.slug}`}
                className="group border overflow-hidden hover:border-[var(--gold)] transition-colors"
                style={{ borderColor: "var(--border)", background: "var(--black)" }}
              >
                {firstProject && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={firstProject.image}
                      alt={`${collection.title} published work`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>
                )}
                <div className="p-7">
                  <div className="flex items-start justify-between gap-5 mb-4">
                    <h2 className="font-display text-3xl group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>
                      {collection.shortTitle.toUpperCase()}
                    </h2>
                    <ArrowUpRight size={18} className="shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" style={{ color: "var(--gold)" }} />
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--silver)" }}>{collection.summary}</p>
                  <span className="text-xs" style={{ color: "var(--gold)" }}>{collection.projectIds.length} published projects →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="container-xl py-16 grid lg:grid-cols-2 gap-12" style={{ maxWidth: "76rem" }}>
        <div>
          <p className="eyebrow mb-4">Evidence policy</p>
          <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>NO INVENTED CASE STUDIES</h2>
          <p className="leading-relaxed" style={{ color: "var(--silver)" }}>
            A sector page is published only when the repository contains relevant work that can be linked back to a public project. Additional real-estate, hospitality, healthcare and technology portfolio collections should wait until usable client-approved assets and descriptions are available.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4">Plan the project</p>
          <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>TURN REFERENCES INTO A BRIEF</h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--silver)" }}>
            Reference exact lighting, pacing, interview or framing choices—then record the objective, channels, formats, permissions and success metric in the free brief template.
          </p>
          <Link href="/guides/video-production-brief-template" className="btn-outline inline-flex items-center gap-2">
            <span>Use the production brief</span><ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}
