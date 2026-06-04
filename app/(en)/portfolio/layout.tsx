import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Portfolio | Backyard Studio Official Dubai",
  description:
    "Watch Backyard Studio's portfolio — events, weddings, DVCs, social media and brand films produced across Dubai and all UAE emirates. 2,400+ projects delivered.",
  alternates: { canonical: "https://www.backyardstudioofficial.com/portfolio" },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  const schema = buildPortfolioItemListSchema();
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  );
}
