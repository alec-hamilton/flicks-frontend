/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
        mdx: "878px",
      },
      colors: {
        black0: "#0F0F0F",
        black1: "#1A1A1A",
        black2: "#242424",
        primary: "#3898B7",
        body: "#6FC9E5",
      },
      boxShadow: {
        button: "3px 3px #e879f999",
      },
    },
  },
  plugins: [],
};
