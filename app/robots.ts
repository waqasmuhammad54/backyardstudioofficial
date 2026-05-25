import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio/", "/api/"],
      },
    ],
    sitemap: "https://www.backyardstudioofficial.com/sitemap.xml",
    host: "https://www.backyardstudioofficial.com",
  };
}
