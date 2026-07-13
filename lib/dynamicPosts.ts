import fs from "fs";
import path from "path";
import type { BlogPost } from "./blogPosts";

export function getDynamicPosts(): BlogPost[] {
  try {
    const filePath = path.join(process.cwd(), "content", "posts.json");
    if (!fs.existsSync(filePath)) return [];
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as BlogPost[];
  } catch {
    return [];
  }
}

export function getDynamicPost(slug: string): BlogPost | undefined {
  return getDynamicPosts().find((p) => p.slug === slug);
}
