import { defineField, defineType } from "sanity";

export const blogPost = defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "title",        type: "string",   title: "Title",           validation: (r) => r.required() }),
    defineField({ name: "slug",         type: "slug",     title: "Slug",            options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "publishedAt",  type: "datetime", title: "Published At" }),
    defineField({ name: "featuredImage",type: "image",    title: "Featured Image",  options: { hotspot: true } }),
    defineField({ name: "excerpt",      type: "text",     title: "Excerpt",         rows: 3 }),
    defineField({ name: "category",     type: "string",   title: "Category",
      options: { list: ["Behind the Scenes","Tips & Tricks","UAE Locations","Industry News","Case Studies","Gear Reviews","Social Media"] } }),
    defineField({ name: "tags",         type: "array",    title: "Tags",            of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "body",         type: "array",    title: "Body",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({
      name: "seo", type: "object", title: "SEO",
      fields: [
        { name: "metaTitle",       type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text",   title: "Meta Description" },
        { name: "ogImage",         type: "image",  title: "OG Image" },
      ],
    }),
  ],
  preview: { select: { title: "title", subtitle: "category", media: "featuredImage" } },
});
