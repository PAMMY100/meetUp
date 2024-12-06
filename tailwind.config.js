/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        beauRivage: ['Beau Rivage', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        btnColor: {
          base: "var(--color-text-base)",
        }
      },
      gridTemplateColumns: {
        footer: "20% 80%",
        rating: "596px 103px",
        custom: "1fr 1fr 1fr 1fr",
      },
    },
  },
  plugins: [],
});
