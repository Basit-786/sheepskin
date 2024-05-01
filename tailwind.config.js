/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
      "light-white": "#F5F5F5",
      "secondary": "#648286",
    },
    screens:{
      "xs":"520px"
    }
    },
  },
  plugins: [],
};
