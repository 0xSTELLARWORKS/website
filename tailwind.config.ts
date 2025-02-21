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
        heading: "var(--heading)",
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
        },
        underline: {
          '0%': { width: '0', marginLeft: 'auto', marginRight: 'auto' },
          '25%': { width: '20%' },
          '35%': { width: '20%' },
          '100%': { width: '100%', marginLeft: 'auto', marginRight: 'auto'  }
        }
      },
      animation: {
        appear: 'appear 500ms ease-in-out',
        fade: 'fade 500ms ease-in-out',
        underline: 'underline 500ms ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config;
