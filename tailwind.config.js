/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bg: "#1d3557",
      mWhite: "#E8F1F2",
      mGreen: "#5EFC8D",
      mDarkGreen: "#469d89",
      mSky: "#b2f7ef",
      mBlack: "#1E1E24",
      mRed: "#ff5a5f",
      mBlue: "#3993DD",
    },
  },
  plugins: [],
};
