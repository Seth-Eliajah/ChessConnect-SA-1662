/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B4F72',
          dark: '#0D3446',
          light: '#2874A6'
        },
        secondary: {
          DEFAULT: '#D4AC0D',
          dark: '#B7950B',
          light: '#F1C40F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        chess: ['Noto Chess', 'serif']
      }
    },
  },
  plugins: [],
}