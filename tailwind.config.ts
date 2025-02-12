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
        subheading: "20px",
        cta: "25px"
      },
      keyframes: {
        appear: {
          '0%': { opacity: '0%', transform: "translateY(100px)" },
          '100%': { opacity: '100%', transform: "translateY(0%)" },
        },
        fade: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' },
        }
      },
      animation: {
        appear: 'appear 500ms ease-in-out',
        fade: 'fade 500ms ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
