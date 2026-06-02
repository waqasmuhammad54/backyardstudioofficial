import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "clientName",        type: "string",  title: "Client Name",   validation: (r) => r.required() }),
    defineField({ name: "clientRole",        type: "string",  title: "Role" }),
    defineField({ name: "company",           type: "string",  title: "Company" }),
    defineField({ name: "companyLogo",       type: "image",   title: "Company Logo" }),
    defineField({ name: "quote",             type: "text",    title: "Quote",         rows: 4,  validation: (r) => r.required() }),
    defineField({ name: "rating",            type: "number",  title: "Rating (1–5)",  validation: (r) => r.required().min(1).max(5) }),
    defineField({ name: "serviceType",       type: "string",  title: "Service Type",
      options: { list: ["Event Shoots","DVCs","Reels","Social Media","Ads","Testimonials","Corporate","Aerial"] } }),
    defineField({ name: "videoTestimonial",  type: "url",     title: "Video Testimonial URL" }),
    defineField({ name: "featured",          type: "boolean", title: "Featured?",     initialValue: false }),
  ],
  preview: { select: { title: "clientName", subtitle: "company" } },
});
