import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        foreground: "#F7F7F7",
        muted: "#909090",
        "muted-dark": "#505050",
        surface: "#111111",
        "surface-light": "#181818",
        border: "rgba(255, 255, 255, 0.08)",
        "border-strong": "rgba(255, 255, 255, 0.18)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Pro Text"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-massive": ["clamp(3.5rem, 10vw, 10rem)", { lineHeight: "0.88", letterSpacing: "-0.04em" }],
        "display-hero": ["clamp(2.8rem, 7vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.035em" }],
        "display-title": ["clamp(2rem, 4vw, 3.8rem)", { lineHeight: "0.96", letterSpacing: "-0.03em" }],
      },
      transitionTimingFunction: {
        "apple-ease": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
