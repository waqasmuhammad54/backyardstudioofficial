import { groq } from "next-sanity";

// Portfolio
export const ALL_PORTFOLIO = groq`
  *[_type == "portfolio"] | order(order asc) {
    _id, title, slug, client, category, location, year, thumbnail, videoUrl, featured
  }
`;

export const FEATURED_PORTFOLIO = groq`
  *[_type == "portfolio" && featured == true] | order(order asc)[0...6] {
    _id, title, slug, client, category, location, year, thumbnail, videoUrl
  }
`;

export const PORTFOLIO_BY_SLUG = groq`
  *[_type == "portfolio" && slug.current == $slug][0] {
    _id, title, slug, client, category, location, year, thumbnail, videoUrl, description, gallery
  }
`;

// Blog
export const ALL_BLOG_POSTS = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id, title, slug, publishedAt, featuredImage, excerpt, category, tags
  }
`;

export const LATEST_BLOG_POSTS = groq`
  *[_type == "blogPost"] | order(publishedAt desc)[0...3] {
    _id, title, slug, publishedAt, featuredImage, excerpt, category
  }
`;

export const BLOG_POST_BY_SLUG = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id, title, slug, publishedAt, featuredImage, excerpt, category, tags, body
  }
`;

// Services
export const ALL_SERVICES = groq`
  *[_type == "service"] | order(order asc) {
    _id, title, slug, icon, shortDescription
  }
`;

export const SERVICE_BY_SLUG = groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id, title, slug, icon, shortDescription, fullDescription, includes, heroImage, heroVideoUrl, faqs, packages
  }
`;

// Testimonials
export const FEATURED_TESTIMONIALS = groq`
  *[_type == "testimonial" && featured == true][0...6] {
    _id, clientName, clientRole, company, quote, rating, serviceType, videoTestimonial
  }
`;

export const ALL_TESTIMONIALS = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id, clientName, clientRole, company, companyLogo, quote, rating, serviceType, videoTestimonial
  }
`;

// Team
export const ALL_TEAM = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id, name, role, bio, photo, linkedin, instagram
  }
`;

// Site Settings
export const SITE_SETTINGS = groq`
  *[_type == "siteSettings"][0] {
    siteTitle, siteDescription, logo, showreelUrl, whatsappNumber, email, phone, address,
    instagramUrl, tiktokUrl, youtubeUrl, defaultOgImage, gaId, metaPixelId
  }
`;
