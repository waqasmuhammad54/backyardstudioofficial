import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { ALL_PROJECTS } from "@/lib/portfolio-data";
import {
  BASE_URL,
  PORTFOLIO_COLLECTIONS,
  RESOURCE_REVIEW_DATE,
  getPortfolioCollection,
} from "@/lib/growthResources";
import { breadcrumbSchema, itemListSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return PORTFOLIO_COLLECTIONS.map((collection) => ({ sector: collection.slug }));
}

export function generateMetadata({ params }: { params: { sector: string } }): Metadata {
  const collection = getPortfolioCollection(params.sector);
  if (!collection) return { title: "Portfolio Collection Not Found", robots: { index: false, follow: false } };
  const url = `${BASE_URL}/production-portfolio/${collection.slug}`;
  const firstProject = ALL_PROJECTS.find((project) => collection.projectIds.includes(project.id));

  return {
    title: { absolute: collection.metaTitle },
    description: collection.metaDescription,
    keywords: collection.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: collection.metaTitle,
      description: collection.metaDescription,
      url,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "website",
      images: [{ url: firstProject?.image ?? "/og-image.jpg", width: 1200, height: 630, alt: collection.title }],
    },
  };
}

export default function ProductionPortfolioCollectionPage({ params }: { params: { sector: string } }) {
  const collection = getPortfolioCollection(params.sector);
  if (!collection) notFound();

  const projects = collection.projectIds
    .map((id) => ALL_PROJECTS.find((project) => project.id === id))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const pageUrl = `${BASE_URL}/production-portfolio/${collection.slug}`;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Production Portfolio", url: `${BASE_URL}/production-portfolio` },
    { name: collection.title, url: pageUrl },
  ]);
  const projectList = itemListSchema(
    projects.map((project) => ({
      name: project.title,
      url: `${BASE_URL}/portfolio/${project.slug}`,
      description: project.description,
    })),
  );
  const collectionPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: collection.title,
    description: collection.metaDescription,
    url: pageUrl,
    inLanguage: "en-AE",
    dateModified: RESOURCE_REVIEW_DATE,
    publisher: { "@type": "Organization", name: "Backyard Studio Official", url: BASE_URL },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: `${BASE_URL}/portfolio/${project.slug}`,
      image: `${BASE_URL}${project.image}`,
      locationCreated: project.location,
    })),
  };

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectList) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPage) }} />
      <section className="container-xl pt-12 pb-12" style={{ maxWidth: "76rem" }}>
        <Link href="/production-portfolio" className="inline-flex items-center gap-2 text-xs mb-8 hover:text-[var(--gold)] transition-colors" style={{ color: "var(--muted)" }}>
          <ArrowLeft size={14} /> All industry collections
        </Link>
        <p className="eyebrow mb-5">{collection.eyebrow}</p>
        <h1 className="font-display leading-[0.95] mb-7" style={{ fontSize: "clamp(3rem,8vw,5.8rem)", color: "var(--cream)" }}>
          {collection.title.toUpperCase()}
        </h1>
        <p className="speakable max-w-4xl text-lg leading-relaxed" style={{ color: "var(--silver)" }}>{collection.summary}</p>
        <p className="max-w-4xl text-xs leading-relaxed mt-5" style={{ color: "var(--muted)" }}>{collection.honestNote}</p>
      </section>

      <section className="border-y" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
        <div className="container-xl py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group border overflow-hidden hover:border-[var(--gold)] transition-colors"
              style={{ borderColor: "var(--border)", background: "var(--black)" }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} production in ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute left-4 bottom-4 text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "var(--gold)" }}>
                  {project.location} · {project.year}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="font-display text-2xl group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>{project.title}</h2>
                  <ArrowUpRight size={16} className="shrink-0" style={{ color: "var(--gold)" }} />
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-xl py-16" style={{ maxWidth: "76rem" }}>
        <div className="grid lg:grid-cols-2 gap-14">
          <div>
            <p className="eyebrow mb-4">Portfolio review</p>
            <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>{collection.planningTitle.toUpperCase()}</h2>
            <p className="leading-relaxed mb-7" style={{ color: "var(--silver)" }}>{collection.planningIntro}</p>
            <ul className="space-y-4">
              {collection.planningPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--silver)" }}>
                  <Check size={16} className="shrink-0 mt-0.5" style={{ color: "var(--gold)" }} />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Brief these outputs</p>
            <h2 className="font-display text-4xl mb-5" style={{ color: "var(--cream)" }}>TYPICAL DELIVERABLES</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-9">
              {collection.deliverables.map((deliverable) => (
                <div key={deliverable} className="p-4 border text-sm" style={{ borderColor: "var(--border)", color: "var(--silver)", background: "var(--black-2)" }}>
                  {deliverable}
                </div>
              ))}
            </div>
            <Link href="/guides/video-production-brief-template" className="btn-outline inline-flex items-center gap-2">
              <span>Download the production brief</span><ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
        <div className="container-xl py-16" style={{ maxWidth: "76rem" }}>
          <p className="eyebrow mb-4">Related services and planning</p>
          <h2 className="font-display text-4xl mb-9" style={{ color: "var(--cream)" }}>CONTINUE FROM THE EVIDENCE</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ...collection.serviceLinks,
              { label: "Start a project", href: "/contact", description: "Share the brief, deadline and reference projects for a scoped response." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group p-6 border hover:border-[var(--gold)] transition-colors" style={{ borderColor: "var(--border)", background: "var(--black)" }}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-semibold group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>{item.label}</h3>
                  <ArrowUpRight size={15} className="shrink-0" style={{ color: "var(--gold)" }} />
                </div>
                <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
