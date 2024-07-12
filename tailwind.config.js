/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreenLight: '#EAF4EB',
        customGreenDark: '#046F0F',
        customGreenMedium: '#78C043',
        customYellow: '#FDC003',
        customVeryLightGray: '#F4F4F430' , // Added new color
      },
    },
  },
  plugins: [],
}

