import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        md: "960px",
        lg: "1440px"
      },
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))"
      },
      spacing: {
        available: 'calc(100vh - var(--side-bar-top))',
        nav: 'var(--nav-height)',
        sideBar: 'var(--side-bar-top)',
        global: 'var(--global-margin)'
      },
      transitionProperty: {
        margin: "margin",
        top: "top"
      },
      fontSize: {
        heading: "30px",
        subheading: "25px"
      }
    },
  },
  plugins: [],
} satisfies Config;
