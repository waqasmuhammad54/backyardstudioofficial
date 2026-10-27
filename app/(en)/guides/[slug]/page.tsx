import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Download, ExternalLink } from "lucide-react";
import RoiCalculator from "@/components/guides/RoiCalculator";
import {
  BASE_URL,
  RESOURCE_GUIDES,
  RESOURCE_REVIEW_DATE,
  getResourceGuide,
} from "@/lib/growthResources";
import { breadcrumbSchema, itemListSchema } from "@/lib/structuredData";

export function generateStaticParams() {
  return RESOURCE_GUIDES.map((guide) => ({ slug: guide.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getResourceGuide(params.slug);
  if (!guide) return { title: "Guide Not Found", robots: { index: false, follow: false } };

  const url = `${BASE_URL}/guides/${guide.slug}`;
  return {
    title: { absolute: guide.metaTitle },
    description: guide.metaDescription,
    keywords: guide.keywords,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "article",
      publishedTime: RESOURCE_REVIEW_DATE,
      modifiedTime: RESOURCE_REVIEW_DATE,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: guide.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: ["/og-image.jpg"],
    },
  };
}

export default function ResourceGuidePage({ params }: { params: { slug: string } }) {
  const guide = getResourceGuide(params.slug);
  if (!guide) notFound();

  const pageUrl = `${BASE_URL}/guides/${guide.slug}`;
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: BASE_URL },
    { name: "Production Guides", url: `${BASE_URL}/guides` },
    { name: guide.title, url: pageUrl },
  ]);
  const sectionList = itemListSchema(
    guide.sections.map((section) => ({
      name: section.title,
      url: `${pageUrl}#${section.id}`,
      description: section.answer,
    })),
  );
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: guide.title,
    description: guide.metaDescription,
    url: pageUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    inLanguage: "en-AE",
    datePublished: RESOURCE_REVIEW_DATE,
    dateModified: RESOURCE_REVIEW_DATE,
    image: `${BASE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: "Backyard Studio Production Team",
      url: `${BASE_URL}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: "Backyard Studio Official",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo-black.png` },
    },
    citation: guide.sources.map((source) => source.url),
    about: guide.keywords.slice(0, 5).map((name) => ({ "@type": "Thing", name })),
  };

  return (
    <main className="pt-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sectionList) }} />

      <article>
        <header className="container-xl pt-12 pb-12" style={{ maxWidth: "76rem" }}>
          <Link href="/guides" className="inline-flex items-center gap-2 text-xs mb-8 hover:text-[var(--gold)] transition-colors" style={{ color: "var(--muted)" }}>
            <ArrowLeft size={14} /> All production guides
          </Link>
          <p className="eyebrow mb-5">{guide.eyebrow}</p>
          <h1 className="font-display leading-[0.95] mb-7" style={{ fontSize: "clamp(3rem,8vw,6rem)", color: "var(--cream)" }}>
            {guide.title.toUpperCase()}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs mb-8" style={{ color: "var(--muted)" }}>
            <span className="inline-flex items-center gap-2"><Calendar size={13} /> Reviewed 27 October 2026</span>
            <span className="inline-flex items-center gap-2"><Clock size={13} /> {guide.readingTime}</span>
            <span>By Backyard Studio Production Team</span>
          </div>
          <div className="speakable p-7 md:p-9 border max-w-4xl" style={{ borderColor: "rgba(232,197,71,0.4)", background: "var(--black-2)" }}>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "var(--gold)" }}>The short answer</p>
            <p className="text-lg leading-relaxed" style={{ color: "var(--cream)" }}>{guide.summary}</p>
          </div>
          <p className="max-w-4xl mt-5 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{guide.scopeNote}</p>

          {guide.download && (
            <a
              href={guide.download.href}
              download
              className="mt-8 inline-flex items-center gap-3 btn-gold"
            >
              <Download size={16} />
              <span>{guide.download.label}</span>
            </a>
          )}
          {guide.download && <p className="text-xs mt-3" style={{ color: "var(--muted)" }}>{guide.download.detail}</p>}
        </header>

        <div className="border-y" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
          <div className="container-xl py-8" style={{ maxWidth: "76rem" }}>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>In this guide</p>
            <nav aria-label="Guide contents" className="grid md:grid-cols-2 gap-x-10 gap-y-3">
              {guide.sections.map((section, index) => (
                <a key={section.id} href={`#${section.id}`} className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: "var(--silver)" }}>
                  <span style={{ color: "var(--muted)" }}>{String(index + 1).padStart(2, "0")}.</span> {section.title}
                </a>
              ))}
              <a href="#questions" className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: "var(--silver)" }}>
                <span style={{ color: "var(--muted)" }}>Q.</span> Common questions
              </a>
              <a href="#sources" className="text-sm hover:text-[var(--gold)] transition-colors" style={{ color: "var(--silver)" }}>
                <span style={{ color: "var(--muted)" }}>S.</span> Sources reviewed
              </a>
            </nav>
          </div>
        </div>

        <div className="container-xl py-16" style={{ maxWidth: "76rem" }}>
          <div className="grid lg:grid-cols-[minmax(0,1fr)_18rem] gap-14">
            <div>
              {guide.sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 pb-14 mb-14 border-b" style={{ borderColor: "var(--border)" }}>
                  <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-3" style={{ color: "var(--gold)" }}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl mb-5" style={{ color: "var(--cream)" }}>{section.title}</h2>
                  <p className="speakable text-lg leading-relaxed mb-6" style={{ color: "var(--cream)" }}>{section.answer}</p>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="leading-relaxed mb-5" style={{ color: "var(--silver)" }}>{paragraph}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-3 my-7">
                      {section.bullets.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: "var(--silver)" }}>
                          <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="overflow-x-auto my-8 border" style={{ borderColor: "var(--border)" }}>
                      <table className="w-full min-w-[680px] text-left text-sm">
                        <thead style={{ background: "var(--black-3)" }}>
                          <tr>
                            {section.table.headers.map((header) => (
                              <th key={header} className="px-4 py-4 font-semibold" style={{ color: "var(--cream)" }}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={row.join("|")} style={{ borderTop: "1px solid var(--border)", background: rowIndex % 2 ? "var(--black-2)" : "var(--black)" }}>
                              {row.map((cell, cellIndex) => (
                                <td key={`${cellIndex}-${cell}`} className="px-4 py-4 align-top leading-relaxed" style={{ color: cellIndex === 0 ? "var(--cream)" : "var(--silver)" }}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </section>
              ))}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
                <p className="text-[0.65rem] tracking-[0.25em] uppercase mb-4" style={{ color: "var(--gold)" }}>Planning next</p>
                <div className="space-y-4">
                  {guide.related.map((item) => (
                    <Link key={item.href} href={item.href} className="block group">
                      <span className="block text-sm font-semibold group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>{item.label}</span>
                      <span className="block text-xs leading-relaxed mt-1" style={{ color: "var(--muted)" }}>{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="p-6 border" style={{ borderColor: "var(--gold)", background: "var(--black)" }}>
                <p className="font-display text-2xl mb-3" style={{ color: "var(--cream)" }}>PLAN A REAL PROJECT</p>
                <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--silver)" }}>Share the locations, deliverables, deadline and approval owner for a scoped response.</p>
                <Link href="/contact" className="btn-gold inline-flex items-center gap-2 text-xs">
                  <span>Send your brief</span><ArrowUpRight size={13} />
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {guide.tool === "roi-calculator" && <RoiCalculator />}

        <section id="questions" className="scroll-mt-28 border-t" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
          <div className="container-xl py-16" style={{ maxWidth: "76rem" }}>
            <p className="eyebrow mb-4">Direct answers</p>
            <h2 className="font-display text-4xl md:text-5xl mb-10" style={{ color: "var(--cream)" }}>COMMON QUESTIONS</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guide.questions.map((item) => (
                <div key={item.question} className="p-6 border" style={{ borderColor: "var(--border)", background: "var(--black)" }}>
                  <h3 className="font-semibold mb-3" style={{ color: "var(--cream)" }}>{item.question}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>{item.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-xs mt-6" style={{ color: "var(--muted)" }}>
              These visible Q&amp;A blocks are written for readers and answer engines. They are not marked as FAQ rich-result schema because Google no longer displays FAQ rich results for general commercial sites.
            </p>
          </div>
        </section>

        <section id="sources" className="scroll-mt-28 border-t" style={{ borderColor: "var(--border)", background: "var(--black)" }}>
          <div className="container-xl py-16" style={{ maxWidth: "76rem" }}>
            <p className="eyebrow mb-4">Verification trail</p>
            <h2 className="font-display text-4xl md:text-5xl mb-5" style={{ color: "var(--cream)" }}>SOURCES REVIEWED</h2>
            <p className="max-w-3xl leading-relaxed mb-9" style={{ color: "var(--silver)" }}>
              Time-sensitive authority information was checked against the sources below on 27 October 2026. Follow the source link before committing a date or budget because processes can change.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {guide.sources.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 border hover:border-[var(--gold)] transition-colors"
                  style={{ borderColor: "var(--border)", background: "var(--black-2)" }}
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-xs mb-2" style={{ color: "var(--gold)" }}>{source.publisher}</p>
                      <h3 className="font-semibold mb-3 group-hover:text-[var(--gold)] transition-colors" style={{ color: "var(--cream)" }}>{source.label}</h3>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>{source.note}</p>
                    </div>
                    <ExternalLink size={15} className="shrink-0" style={{ color: "var(--gold)" }} />
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-9 max-w-3xl border p-6" style={{ borderColor: "var(--border)", background: "var(--black-2)" }}>
              <h3 className="font-semibold mb-3" style={{ color: "var(--cream)" }}>Reference this guide</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--silver)" }}>
                Journalists, educators and production teams may quote a short passage with a link to this page and attribution to Backyard Studio Official. For a production comment or source check, contact <a href="mailto:info@backyardstudioofficial.com" className="underline hover:text-[var(--gold)] transition-colors">info@backyardstudioofficial.com</a>.
              </p>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
