/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1220px',
      },
      colors: {
        'primary-bg': '#0a192f',
        'secondary-bg': '#6e07f3',
        'third-bg': '#1d2a40',
        'primary-f-col': '#50ceb6',
        'second-f-col': '#8892b0',
        'third-f-col': '#ccd7f7',
        'deap-teal': '#2c7679'
      },
      fontFamily: {
        fontOne: ['Orbitron', 'sans-serif'],
        fontTwo: ['Roboto', 'sans-serif'],
        fontThird: ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

