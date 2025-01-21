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
        "main-light-background": "#FAFAFA",
        "main-light-foreground": "#111517",

        "main-dark-background": "#202C36",
        "main-dark-foreground": "#FFFFFF",

        "light-background": "#FFFFFF",
        "light-foreground": "#111517",
        
        "dark-background": "#2B3844",
        "dark-foreground": "#FFFFFF",
      },
    },
  },
  plugins: [],
} satisfies Config;
