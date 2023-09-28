/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'BarlowLight':["'BarlowCondensed-Light'"],
      'BarlowMedium':["'BarlowCondensed-Medium'"],
      'BarlowRegular':["'BarlowCondensed-Regular'"],
      'BarlowSemiBold':["'BarlowCondensed-SemiBold'"],
      'BellefairRegular':["'Bellefair-Regular'"],

    },
    extend: {
      colors:{
        'lightPurple':'#d0d6f9'
      }
    },
    
  },
  plugins: [],
}