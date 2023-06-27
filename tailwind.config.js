/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['"Barlow"', 'sans-serif']
    },
    extend: {
      margin: {
        '2/12': '16.6%',
        '1/12': '8.3%'
      },
      colors: {
        'blue-900': '#2c2851'
      },
      screens: {
        xs: '400px'
      }
    }
  },
  plugins: []
}
