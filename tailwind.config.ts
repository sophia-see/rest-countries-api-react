import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-background": "#FAFAFA",
        "dark-background": "#202C36",
        "light-foreground": "#111517",
        "dark-foreground": "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
