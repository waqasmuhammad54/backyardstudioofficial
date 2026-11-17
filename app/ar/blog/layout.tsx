import LocalizedBlogPathways from "@/components/blog/LocalizedBlogPathways";

export default function ArabicBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<LocalizedBlogPathways locale="ar" /></>;
}
