import "./globals.css";
import { Inter, Bebas_Neue, Playfair_Display, DM_Serif_Display } from "next/font/google";
import { headers } from "next/headers";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const fontVars = `${inter.variable} ${bebasNeue.variable} ${playfair.variable} ${dmSerif.variable}`;
  const headersList = headers();
  const pathname = headersLis