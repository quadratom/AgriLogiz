/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/src/assets/agriuser.png')",
        'custom-green-gradient': 'linear-gradient(to bottom, var(--tw-gradient-stops))'
      },
      colors: {
        customGreenLight: '#EAF4EB',
        customGreenDark: '#046F0F',
        customGreenMedium: '#78C043',
        customYellow: '#FDC003',
        customVeryLightGray: '#F4F4F430' , // Added new color
        customGreenSemiLight : '#D9D9D9',
        customgreenBlack: '#1E211E' ,
        customred: '#FF0F00' 
      },
      gradientColorStops: theme => ({
        'custom-green-medium': theme('colors.customGreenMedium'),
        'custom-green-dark': theme('colors.customGreenDark'),
      }),
    },
  },
  plugins: [],
}

