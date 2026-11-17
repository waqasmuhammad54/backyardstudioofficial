import {
  BLOG_POSTS,
  CATEGORY_SLUGS,
  postMatchesCategory,
  type BlogPost,
  type CategorySlug,
} from "./blogPosts";
import { getDynamicPosts } from "./dynamicPosts";
import { RETIRED_BLOG_SLUGS } from "./retiredSlugs";

/** One canonical English article inventory for pages, hubs, sitemap and RSS. */
export function getAllBlogPosts(): BlogPost[] {
  const bySlug = new Map<string, BlogPost>();

  for (const post of BLOG_POSTS) {
    if (!RETIRED_BLOG_SLUGS.has(post.slug)) bySlug.set(post.slug, post);
  }

  // Admin posts extend the source-authored inventory. Do not replace a curated
  // source article with a second record carrying the same slug.
  for (const post of getDynamicPosts()) {
    if (!RETIRED_BLOG_SLUGS.has(post.slug) && !bySlug.has(post.slug)) {
      bySlug.set(post.slug, post);
    }
  }

  return [...bySlug.values()];
}

export function getBlogPostFromInventory(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function categorySlugForPost(post: BlogPost): CategorySlug {
  return CATEGORY_SLUGS.find((slug) => postMatchesCategory(slug, post.category)) ?? "industry";
}

export function getAllPostsByCategory(categorySlug: CategorySlug): BlogPost[] {
  return getAllBlogPosts().filter((post) => postMatchesCategory(categorySlug, post.category));
}

/**
 * Resolve editorial recommendations, then fill any gaps with neighbouring
 * articles in the same topical hub. Admin posts historically had empty
 * relatedSlugs arrays, leaving dozens of pages without an article-to-article
 * path even though they appeared on the main journal index.
 */
export function getRelatedBlogPosts(post: BlogPost, limit = 3): BlogPost[] {
  const allPosts = getAllBlogPosts();
  const bySlug = new Map(allPosts.map((candidate) => [candidate.slug, candidate]));
  const chosen: BlogPost[] = [];

  const add = (candidate: BlogPost | undefined) => {
    if (!candidate || candidate.slug === post.slug) return;
    if (chosen.some((item) => item.slug === candidate.slug)) return;
    chosen.push(candidate);
  };

  for (const slug of post.relatedSlugs ?? []) add(bySlug.get(slug));

  const hub = categorySlugForPost(post);
  const peers = allPosts.filter((candidate) => postMatchesCategory(hub, candidate.category));
  const currentIndex = peers.findIndex((candidate) => candidate.slug === post.slug);
  if (peers.length > 1 && currentIndex >= 0) {
    for (let offset = 1; offset < peers.length && chosen.length < limit; offset += 1) {
      add(peers[(currentIndex + offset) % peers.length]);
    }
  }

  for (const candidate of allPosts) {
    if (chosen.length >= limit) break;
    add(candidate);
  }

  return chosen.slice(0, limit);
}
