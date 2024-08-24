import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter Variable", "sans-serif"],
        caveat: ["Caveat Variable", "cursive"],
      },
    },
  },
  plugins: [],
} satisfies Config;
