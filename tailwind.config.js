/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppinsRegular: ['Poppins Regular', 'sans-serif'],
      poppinsMedium: ['Poppins Medium', 'sans-serif'],
      poppinsSemiBold: ['Poppins SemiBold', 'sans-serif'],
      poppinsBold: ['Poppins Bold', 'sans-serif'],
      poppinsExtraBold: ['Poppins ExtraBold', 'sans-serif'],

    },

    extend: {
      colors: {
        
        buttonColor: '#8300c4',
        baseContent: '#30313D',
        baseContentSecondary: '#5C5B61',
        
      },
    },
  },
  plugins: [],
}
