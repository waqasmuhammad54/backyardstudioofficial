import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name:      "backyard-studio-cms",
  title:     "Backyard Studio Official CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath:  "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Portfolio").schemaType("portfolio").child(S.documentTypeList("portfolio")),
            S.listItem().title("Blog Posts").schemaType("blogPost").child(S.documentTypeList("blogPost")),
            S.listItem().title("Services").schemaType("service").child(S.documentTypeList("service")),
            S.listItem().title("Testimonials").schemaType("testimonial").child(S.documentTypeList("testimonial")),
            S.listItem().title("Team Members").schemaType("teamMember").child(S.documentTypeList("teamMember")),
            S.listItem().title("Site Settings").child(
              S.document().schemaType("siteSettings").documentId("siteSettings")
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
});
