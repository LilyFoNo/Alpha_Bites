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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        delicious: ['Delicious_Handrawn', 'sans-serif'],
        ephesis: ['Ephesis', 'sans-serif'],
        gowun: ['Gowun_Dodum', 'sans-serif'],
        mali: ['Mali', 'sans-serif'],
        tomorrow: ['Tomorrow', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
