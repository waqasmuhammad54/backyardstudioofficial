import type { Metadata } from "next";
import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: { absolute: "Production Portfolio Dubai | Backyard Studio" },
  description:
    "Watch Backyard Studio's portfolio — events, weddings, DVCs, social media and brand films across Dubai and all UAE emirates. 2,400+ projects.",
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
