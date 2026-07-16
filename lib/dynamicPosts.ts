import fs from "fs";
import path from "path";
import type { BlogPost } from "./blogPosts";

export function getDynamicPosts(): BlogPost[] {
  try {
    const filePath = path.join(process.cwd(), "content", "posts.json");
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf-8");
    const all = JSON.parse(raw) as (BlogPost & { status?: string })[];
    // Filter out drafts and archived posts from public listing
    return all.filter((p) => !p.status || p.status === "published");
  } catch {
    return [];
  }
}

export function getDynamicPost(slug: string): BlogPost | undefined {
  return getDynamicPosts().find((p) => p.slug === slug);
}
