import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CASE_STUDIES } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: { absolute: "Case Studies | Video Production Dubai — Backyard Studio" },
  description: "Real results from real projects. See how Backyard Studio's video production and photography in Dubai drove property sales, social media growth, and brand recognition for UAE clients.",
  keywords: [
    "video production case studies dubai",
    "production company portfolio dubai",
    "corporate video results dubai",
    "real estate video campaign dubai",
    "hotel brand film dubai",
    "fashion campaign production dubai",
  ],
  alternates: {
    canonical: "https://www.backyardstudioofficial.com/case-studies",
  },
  openGraph: {
    title: "Case Studies | Video Production Dubai — Backyard Studio",
    description: "Real results: AED 180M in property reservations, 4.2M social Reel views, 800K+ LinkedIn impressions. See our full case study portfolio.",
    url: "https://www.backyardstudioofficial.com/case-studies",
    siteName: "Backyard Studio Official",
    locale: "en_AE",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Case Studies — Backyard Studio Official Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — Backyard Studio Official Dubai",
    description: "Real results from video production and photography in Dubai. See how we drove measurable outcomes for UAE brands.",
    images: ["/og-image.jpg"],
  },
};

export default function CaseStudiesIndexPage() {
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
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Backyard Studio Case Studies",
            description: "Video production and photography case studies from Backyard Studio Official Dubai",
            numberOfItems: CASE_STUDIES.length,
            itemListElement: CASE_STUDIES.map((cs, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: cs.headline,
              url: `https://www.backyardstudioofficial.com/case-studies/${cs.slug}`,
            })),
          }),
        }}
      />

      {/* Hero */}
      <section style={{ background: "#111", padding: "4rem 2rem 3rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem" }}>
          Portfolio
        </p>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "var(--cream)", marginBottom: "1.25rem", lineHeight: 1.15 }}>
          Case Studies
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.65)", maxWidth: "600px", margin: "0 auto", lineHeight: 1.8, fontSize: "1rem" }}>
          Production work is only worth as much as what it delivers for the client. Here is what our work has actually done — property sales generated, followers grown, impressions earned, and brands repositioned.
        </p>
      </section>

      {/* Stats bar */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid rgba(212,175,55,0.12)", borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "2rem" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1.5rem", textAlign: "center" }}>
          {[
            { metric: "AED 180M", label: "property reservations from one campaign" },
            { metric: "4.2M", label: "organic Reel views for F&B client" },
            { metric: "800K+", label: "LinkedIn impressions from GITEX coverage" },
            { metric: "2.1M", label: "fashion campaign impressions in launch week" },
          ].map((s) => (
            <div key={s.label}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 800, color: "var(--gold)", lineHeight: 1 }}>{s.metric}</div>
              <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.8rem", marginTop: "0.4rem", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Case study cards */}
      <section style={{ padding: "5rem 2rem", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
          {CASE_STUDIES.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              style={{ textDecoration: "none", display: "block", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(212,175,55,0.12)", borderRadius: "4px", overflow: "hidden", transition: "border-color 0.2s" }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <Image
                  src={cs.image}
                  alt={`${cs.client} — ${cs.projectType}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%)" }} />
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", background: "var(--gold)", color: "#000", fontSize: "0.7rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {cs.industry}
                  </span>
                </div>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.45)", fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {cs.client} — {cs.projectType}
                </p>
                <h2 style={{ fontFamily: "Inter, sans-serif", color: "var(--cream)", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.4, marginBottom: "1rem" }}>
                  {cs.headline}
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                  {cs.stats.slice(0, 2).map((st) => (
                    <div key={st.label} style={{ background: "rgba(212,175,55,0.06)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "2px", padding: "0.3rem 0.6rem", textAlign: "center" }}>
                      <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.9rem", fontWeight: 800 }}>{st.metric}</div>
                      <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.5)", fontSize: "0.65rem" }}>{st.label}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: "Inter, sans-serif", color: "var(--gold)", fontSize: "0.85rem", fontWeight: 600 }}>
                  Read case study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 2rem", background: "#111", textAlign: "center", borderTop: "1px solid rgba(212,175,55,0.1)" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontSize: "1.75rem", fontWeight: 700, color: "var(--cream)", marginBottom: "1rem" }}>
          Want results like these for your brand?
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(245,240,225,0.6)", maxWidth: "500px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
          Get a detailed project quote within 2 hours. Call or WhatsApp +971 58 588 2685 or email info@backyardstudioofficial.com.
        </p>
        <a
          href="/contact"
          style={{ display: "inline-block", background: "var(--gold)", color: "#000", padding: "0.9rem 2.5rem", borderRadius: "2px", textDecoration: "none", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem" }}
        >
          Get a Free Quote
        </a>
      </section>
    </>
  );
}
