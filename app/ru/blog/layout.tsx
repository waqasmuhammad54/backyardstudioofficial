import LocalizedBlogPathways from "@/components/blog/LocalizedBlogPathways";

export default function RussianBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<LocalizedBlogPathways locale="ru" /></>;
}
