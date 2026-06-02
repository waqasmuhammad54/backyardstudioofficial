import { buildPortfolioItemListSchema } from "@/lib/portfolio-data";

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
