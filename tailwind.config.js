/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff347f",
        primary1: "#c9356c",
        secondary: "#BDC3C7",
        dark: "#0f172a",
      },
      fontFamily: {
        silkscreen: ['Silkscreen'],
        barlow: ['Barlow Condensed'],
        montserrat: ['Montserrat'],
      },
      backgroundImage: {
        'parallax': "url('/src/assets/images/parallax3.jpg')",
        'parallax2': "url('/src/assets/images/parallax1.jpg')",
        'parallax3': "url('/src/assets/images/parallax2.jpg')",
        'parallax4': "url('/src/assets/images/parallax4.jpg')",
      }
    },
  },
  plugins: [],
}

