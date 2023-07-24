/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
     screens: {
      'mob': {'max': '450px'},
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      boxShadow: {
        'sss': '-0.5px -0.5px 3px 3px rgba(125,111,246,0.5)',
      },
      fontFamily:{
        'ru' : 'russo'
      },
      colors:{
        'rgb' : 'linear-gradient(93.13deg,#7d6ff6 -43.79%,#58e1d9 149.86%)'
      }
    },
  },
  plugins: [],
}

