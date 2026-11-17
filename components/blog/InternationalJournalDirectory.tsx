import Link from "next/link";
import {
  getInternationalBlogPosts,
  type InternationalBlogLocale,
} from "@/lib/internationalBlogPosts";

type Props = {
  locale: InternationalBlogLocale;
  excludeSlugs: string[];
  heading: string;
  linkLabel: string;
  dir?: "ltr" | "rtl";
};

export default function InternationalJournalDirectory({
  locale,
  excludeSlugs,
  heading,
  linkLabel,
  dir = "ltr",
}: Props) {
  const excluded = new Set(excludeSlugs);
  const posts = getInternationalBlogPosts(locale).filter((post) => !excluded.has(post.slug));
  if (posts.length === 0) return null;

  return (
    <section className="mt-12" aria-labelledby={`${locale}-complete-journal`} dir={dir}>
      <h2
        id={`${locale}-complete-journal`}
        className="text-xl font-semibold mb-5"
        style={{ color: "var(--cream)" }}
      >
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.locale}/blog/${post.slug}`}
            className="rounded-sm border border-[#2a2a2a] bg-[#111] px-4 py-3 text-sm text-[#c0c0c0] hover:border-[#e8c547] hover:text-[#e8c547] transition-colors"
          >
            <span className="block font-semibold leading-relaxed">{post.title}</span>
            <span className="mt-1 block text-xs text-[#666]">{linkLabel}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
