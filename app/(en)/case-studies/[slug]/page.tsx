import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CASE_STUDIES, getCaseStudy } from "@/lib/caseStudies";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = getCaseStudy(params.slug);
  if (!cs) return { title: "Case Study Not Found" };
  return {
    title: { absolute: `${cs.metaTitle} | Backyard Studio` },
    description: cs.metaDescription,
    keywords: cs.keywords,
    alternates: {
      canonical: `https://www.backyardstudioofficial.com/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url: `https://www.backyardstudioofficial.com/case-studies/${cs.slug}`,
      siteName: "Backyard Studio Official",
      locale: "en_AE",
      type: "article",
      images: [{ url: cs.image, width: 1200, height: 630, alt: `${cs.client} — ${cs.projectType}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: cs.metaTitle,
      description: cs.metaDescription,
      images: [cs.image],
    },
  };
}

export default function CaseStudyPage({ params }: Props) {
  const cs = getCaseStudy(params.slug);
  if (!cs) notFound();

  const relatedStudies = CASE_STUDIES.filter((s) => s.slug !== cs.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.backyardstudioofficial.com" },
              { "@type": "ListItem", position: 2, name: "Case Studies", item: "https://www.backyardstudioofficial.com/case-studies" },
              { "@type": "ListItem", position: 3, name: cs.client, item: `https://www.backyardstudioofficial.com/case-studies/${cs.slug}` },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: cs.headline,
            description: cs.metaDescription,
            image: cs.image,
            datePublished: cs.dateISO,
            author: { "@type": "Organization", name: "Backyard Studio Official" },
            publisher: {
              "@type": "Organization",
              name: "Backyard Studio Official",
              logo: { "@type": "ImageObject", url: "https://www.backyardstudioofficial.com/logo.png" },
            },
            mainEntityOfPage: `https://www.backyardstudioofficial.com/case-studies/${cs.slug}`,
          }),
        }}
      />

      {/* Hero image */}
      <div style={{ position: "relative", height: "420px", overflow: "hidden" }}>
        <Image
          src={cs.image}
          alt={`${cs.client} — ${cs.projectType} case study`}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%)" }} />
        <div style={{ position: "absolute", bottom: "2.5rem", left: "2rem", right: "2rem", maxWidth: "800px" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "Inter, sans-serif", background: "var(--gold)", color: "#000", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {cs.industry}
            </span>
            <span style={{ fontFamily: "Inter, sans-serif", background: "rgba(255,255,255,0.12)", color: "var(--cream)", fontSize: "0.7rem", fontWeight: 600, padding: "0.2rem 0.6rem", borderRadius: "2px" }}>
              {cs.projectType}
            </span>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", fontSize: "0.85rem", marginBottom: "0.5rem" }}>
            {cs.client}
          </p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 800, color: "var(--cream)", lineHeight: 1.2, margin: 0 }}>
            {cs.headline}
          </h1>
        </div>
      </div>

      {/* Stats strip */}
      <section style={{ background: "#0d0d0d", borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: `repeat(${cs.stats.length}, 1fr)`, gap: "1rem", textAlign: "center" }}>
          {cs.stats.map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{s.metric}</div>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.75rem", marginTop: "0.35rem", lineHeight: 1.35 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>

          {/* Services used */}
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Services delivered
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {cs.services.map((svc) => (
                <span key={svc} style={{ fontFamily: "Inter, sans-serif", background: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.25)", color: "var(--gold)", fontSize: "0.8rem", padding: "0.3rem 0.75rem", borderRadius: "2px" }}>
                  {svc}
                </span>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div
            style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.8)", lineHeight: 1.9, fontSize: "0.975rem" }}
            dangerouslySetInnerHTML={{ __html: cs.content }}
          />

          {/* Quote */}
          {cs.quote && (
            <blockquote style={{ margin: "3rem 0", borderLeft: "3px solid var(--gold)", paddingLeft: "1.5rem" }}>
              <p style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "1.05rem", lineHeight: 1.7, fontStyle: "italic", marginBottom: "0.75rem" }}>
                "{cs.quote}"
              </p>
              <footer style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.85rem" }}>
                {cs.quoteName}{cs.quoteRole ? `, ${cs.quoteRole}` : ""}
              </footer>
            </blockquote>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "4rem 2rem", background: "#111", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--cream)", marginBottom: "0.75rem" }}>
          Want results like this for your project?
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "480px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Free quote within 2 hours. Call or WhatsApp +971 58 588 2685 or email info@backyardstudioofficial.com.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/contact" style={{ background: "var(--gold)", color: "#000", padding: "0.85rem 2rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.9rem" }}>
            Get a Free Quote
          </a>
          <Link href="/case-studies" style={{ background: "transparent", border: "1px solid rgba(212,175,55,0.4)", color: "var(--gold)", padding: "0.85rem 2rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
            See All Case Studies
          </Link>
        </div>
      </section>

      {/* Related */}
      {relatedStudies.length > 0 && (
        <section style={{ padding: "4rem 2rem", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
              More case studies
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {relatedStudies.map((r) => (
                <Link key={r.slug} href={`/case-studies/${r.slug}`} style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.1)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ position: "relative", height: "160px" }}>
                    <Image src={r.image} alt={r.client} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)" }} />
                  </div>
                  <div style={{ padding: "1.25rem" }}>
                    <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.4)", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "0.4rem" }}>{r.industry}</p>
                    <h3 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "0.95rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "0.5rem" }}>{r.headline}</h3>
                    <span style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.8rem" }}>Read case study →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
