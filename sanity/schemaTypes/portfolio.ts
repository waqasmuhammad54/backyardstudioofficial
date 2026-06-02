import { defineField, defineType } from "sanity";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portfolio",
  type: "document",
  fields: [
    defineField({ name: "title",       type: "string",   title: "Project Title",   validation: (r) => r.required() }),
    defineField({ name: "slug",        type: "slug",     title: "Slug",            options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "client",      type: "string",   title: "Client Name" }),
    defineField({ name: "category",    type: "string",   title: "Category",
      options: { list: ["Events","DVCs","Reels","Social Media","Ads","Testimonials","Corporate","Aerial","Photo Shoots"] } }),
    defineField({ name: "location",    type: "string",   title: "UAE Location (e.g. Dubai Marina)" }),
    defineField({ name: "year",        type: "number",   title: "Year" }),
    defineField({ name: "thumbnail",   type: "image",    title: "Thumbnail",       options: { hotspot: true } }),
    defineField({ name: "videoUrl",    type: "url",      title: "Video URL (YouTube/Vimeo)" }),
    defineField({ name: "description", type: "array",    title: "Description",     of: [{ type: "block" }] }),
    defineField({ name: "gallery",     type: "array",    title: "Image Gallery",   of: [{ type: "image", options: { hotspot: true } }] }),
    defineField({ name: "featured",    type: "boolean",  title: "Featured?",       initialValue: false }),
    defineField({ name: "order",       type: "number",   title: "Sort Order" }),
    defineField({
      name: "seo", type: "object", title: "SEO",
      fields: [
        { name: "metaTitle",       type: "string", title: "Meta Title" },
        { name: "metaDescription", type: "text",   title: "Meta Description" },
      ],
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "client", media: "thumbnail" } },
});
