/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      black: "#151515",
      primary: "#9E6E10",
    },
    extend: {
      fontFamily: {
        logo: ["var(--font-bladerunner)"],
      },
      screens: {
        xs: "456px",
        mdx: "868px",
      },
    },
  },
  plugins: [],
};