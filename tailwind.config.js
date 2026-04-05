const animate = require("tailwindcss-animate");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  safelist: ["dark"],
  prefix: "",

  content: [
    "./pages/**/*.{ts,tsx,vue}",
    "./components/**/*.{ts,tsx,vue}",
    "./app/**/*.{ts,tsx,vue}",
    "./src/**/*.{ts,tsx,vue}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(0 0% 13%)",
        input: "hsl(0 0% 13%)",
        ring: "hsl(0 0% 20%)",
        background: "hsl(0 0% 4%)",
        foreground: "hsl(0 0% 96%)",
        primary: {
          DEFAULT: "hsl(0 0% 100%)",
          foreground: "hsl(0 0% 4%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(0 0% 63%)",
        },
        destructive: {
          DEFAULT: "hsl(0 62% 30%)",
          foreground: "hsl(0 0% 96%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(0 0% 33%)",
        },
        accent: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(0 0% 96%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 7%)",
          foreground: "hsl(0 0% 96%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 9%)",
          foreground: "hsl(0 0% 96%)",
        },
      },
      fontFamily: {
        // sans: ["Montserrat", "sans-serif"], // change font default
        brand: ["Montserrat", "sans-serif"], // change font logo/brand
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {height: 0},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: 0},
        },
        "collapsible-down": {
          from: {height: 0},
          to: {height: "var(--radix-collapsible-content-height)"},
        },
        "collapsible-up": {
          from: {height: "var(--radix-collapsible-content-height)"},
          to: {height: 0},
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
      },
    },
  },
  plugins: [animate],
};
