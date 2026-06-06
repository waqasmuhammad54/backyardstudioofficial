import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Minimal root layout — language-specific layouts live in (en)/, ar/, ru/
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
