import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteTitle",       type: "string", title: "Site Title" }),
    defineField({ name: "siteDescription", type: "text",   title: "Site Description" }),
    defineField({ name: "logo",            type: "image",  title: "Logo" }),
    defineField({ name: "showreelUrl",     type: "url",    title: "Showreel URL (YouTube/Vimeo)" }),
    defineField({ name: "whatsappNumber",  type: "string", title: "WhatsApp Number (e.g. 971501234567)" }),
    defineField({ name: "email",           type: "string", title: "Contact Email" }),
    defineField({ name: "phone",           type: "string", title: "Phone Number" }),
    defineField({ name: "address",         type: "text",   title: "Address" }),
    defineField({ name: "instagramUrl",    type: "url",    title: "Instagram URL" }),
    defineField({ name: "tiktokUrl",       type: "url",    title: "TikTok URL" }),
    defineField({ name: "youtubeUrl",      type: "url",    title: "YouTube URL" }),
    defineField({ name: "defaultOgImage",  type: "image",  title: "Default OG Image" }),
    defineField({ name: "gaId",            type: "string", title: "Google Analytics ID (G-XXXXXXX)" }),
    defineField({ name: "metaPixelId",     type: "string", title: "Meta Pixel ID" }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
