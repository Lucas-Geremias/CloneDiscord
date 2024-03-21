/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'main':"#23272A",
        'plan-fundo':"#f6f6f6"
      },
      backgroundImage: {
        'header': "url('/assets/HeaderBackground.png')"
      },
      fontFamily:{
        'open-sans': ['Open Sans', 'sans-serif'],
        'Luckiest': ['Luckiest Guy', 'cursive']
      }
    },
  },
  plugins: [],
}

