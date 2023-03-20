/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["var(--font-bladerunner)"],
      },
      screens: {
        xs: "456px",
        mdx: "868px",
      },
      colors: {
        black: "#1A1A1A",
        primary: "#3898B7",
        body: "#6FC9E5",
        darkBlack: "#0F0F0F",
      },
      boxShadow: {
        button: "3px 3px #3898B799",
      },
    },
  },
  plugins: [],
};
