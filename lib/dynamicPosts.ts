import type { BlogPost } from "./blogPosts";
// Use static JSON import so the file is bundled by the compiler and available
// both during SSG (generateStaticParams) and at runtime on Vercel serverless.
// fs.readFileSync with process.cwd() is NOT bundled by @vercel/nft and fails
// at runtime on Vercel — this import approach resolves that.
import postsData from "../content/posts.json";

export function getDynamicPosts(): BlogPost[] {
  try {
    const all = postsData as unknown as (BlogPost & { status?: string })[];
    // Filter out drafts and archived posts from public listing
    return all.filter((p) => !p.status || p.status === "published");
  } catch {
    return [];
  }
}

export function getDynamicPost(slug: string): BlogPost | undefined {
  return getDynamicPosts().find((p) => p.slug === slug);
}
