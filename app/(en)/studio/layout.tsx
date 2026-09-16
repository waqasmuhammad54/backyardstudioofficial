import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Backyard Studio CMS",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
  // Override (en) layout homepage canonical — keep a self URL while noindex.
  alternates: {
    canonical: "/studio",
  },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
