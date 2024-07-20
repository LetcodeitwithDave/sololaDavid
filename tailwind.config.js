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
        
        buttonColor: '#6C63FF',
        
      },
    },
  },
  plugins: [],
}
