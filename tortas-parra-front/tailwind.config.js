/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette', 'cursive'],
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],
      },
      colors: {
        'main': '#dfd9d9',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

