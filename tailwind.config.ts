import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#d4a017",
          light:   "#f5d878",
          pale:    "#fdf0c0",
          dim:     "#9a7010",
          dark:    "#5c3f00",
        },
        ink: {
          DEFAULT: "#050505",
          2: "#0a0a0a",
          3: "#111111",
          4: "#181818",
          5: "#1f1f1f",
        },
        cream: "#f5f0e8",
        silver: "#b8b8b8",
      },
      fontFamily: {
        sans:    ["'Inter'",            "sans-serif"],
        display: ["'Bebas Neue'",       "sans-serif"],
        serif:   ["'Playfair Display'", "serif"],
        dm:      ["'DM Serif Display'", "serif"],
      },
      screens: { xs: "380px" },
      animation: {
        "marquee":     "marquee 30s linear infinite",
        "marquee-rev": "marquee-rev 30s linear infinite",
        "fade-up":     "fadeUp 0.8s cubic-bezier(0.23,1,0.32,1) forwards",
        "gold-pulse":  "goldPulse 3s ease infinite",
      },
      keyframes: {
        marquee:    { "0%": { transform:"translateX(0)"    }, "100%": { transform:"translateX(-50%)" } },
        "marquee-rev": { "0%": { transform:"translateX(-50%)" }, "100%": { transform:"translateX(0)"    } },
        fadeUp:     { "0%": { opacity:"0", transform:"translateY(40px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        goldPulse:  { "0%,100%": { boxShadow:"0 0 20px rgba(212,160,23,0.3)" }, "50%": { boxShadow:"0 0 60px rgba(212,160,23,0.6)" } },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
