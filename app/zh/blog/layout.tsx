import LocalizedBlogPathways from "@/components/blog/LocalizedBlogPathways";

export default function ChineseBlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<LocalizedBlogPathways locale="zh" /></>;
}
