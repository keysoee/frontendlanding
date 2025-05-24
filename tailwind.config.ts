import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(0.9)", opacity: "1" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        pulse: "pulse 1s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
