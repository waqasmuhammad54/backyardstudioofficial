import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({ name: "title",            type: "string",  title: "Service Title",       validation: (r) => r.required() }),
    defineField({ name: "slug",             type: "slug",    title: "Slug",                options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "icon",             type: "image",   title: "Service Icon (SVG/PNG)" }),
    defineField({ name: "shortDescription", type: "text",    title: "Short Description",   rows: 2 }),
    defineField({ name: "fullDescription",  type: "array",   title: "Full Description",    of: [{ type: "block" }] }),
    defineField({ name: "includes",         type: "array",   title: "What's Included",     of: [{ type: "string" }] }),
    defineField({ name: "heroImage",        type: "image",   title: "Hero Image",          options: { hotspot: true } }),
    defineField({ name: "heroVideoUrl",     type: "url",     title: "Hero Video URL" }),
    defineField({
      name: "faqs", type: "array", title: "FAQs",
      of: [{
        type: "object",
        fields: [
          { name: "question", type: "string", title: "Question" },
          { name: "answer",   type: "text",   title: "Answer" },
        ],
      }],
    }),
    defineField({
      name: "packages", type: "array", title: "Pricing Packages",
      of: [{
        type: "object",
        fields: [
          { name: "name",     type: "string", title: "Package Name" },
          { name: "price",    type: "string", title: "Price (or 'On Request')" },
          { name: "features", type: "array",  title: "Features", of: [{ type: "string" }] },
        ],
      }],
    }),
    defineField({ name: "order", type: "number", title: "Sort Order" }),
  ],
  preview: { select: { title: "title", media: "icon" } },
});
