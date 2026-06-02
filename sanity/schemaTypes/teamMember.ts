import { defineField, defineType } from "sanity";

export const teamMember = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    defineField({ name: "name",      type: "string", title: "Name",      validation: (r) => r.required() }),
    defineField({ name: "role",      type: "string", title: "Role" }),
    defineField({ name: "bio",       type: "text",   title: "Bio",       rows: 3 }),
    defineField({ name: "photo",     type: "image",  title: "Photo",     options: { hotspot: true } }),
    defineField({ name: "linkedin",  type: "url",    title: "LinkedIn URL" }),
    defineField({ name: "instagram", type: "url",    title: "Instagram URL" }),
    defineField({ name: "order",     type: "number", title: "Sort Order" }),
  ],
  preview: { select: { title: "name", subtitle: "role", media: "photo" } },
});
