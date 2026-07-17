import posts from "../content/posts.json";
import type { BlogPost } from "./blogPosts";

/**
 * Admin-authored posts are read directly from the committed JSON source.
 * This keeps publishing atomic: the admin API updates one file, which triggers
 * one Vercel build, with no generated TypeScript file that can fall out of sync.
 */
export type DynamicBlogPost = BlogPost & { status?: string; deletedAt?: string };

export const DYNAMIC_POSTS_DATA = posts as unknown as DynamicBlogPost[];

export function getDynamicPosts(): BlogPost[] {
  return DYNAMIC_POSTS_DATA.filter((post) => !post.status || post.status === "published");
}

export function getDynamicPost(slug: string): BlogPost | undefined {
  return getDynamicPosts().find((post) => post.slug === slug);
}
