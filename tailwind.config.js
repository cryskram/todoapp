/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1d3557",
        mWhite: "#E8F1F2",
        mGreen: "#5EFC8D",
        mDarkGreen: "#469d89",
        mSky: "#b2f7ef",
        mOrange: "#f9c74f",
        mDarkRed: "#d62828",
        mBlack: "#1E1E24",
        mRed: "#ff5a5f",
        mBlue: "#3993DD",
        mTodoBg: "#4e598c",
        mTodoDescText: "#BDC2DA",
      },
    },
  },
  plugins: [],
};
