/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#242320',
        secondary:'#a35709',
        dark:'#1b1a17',
        light:'#ff8303',
        extraLight:'#F0E3CA'

      }
    },
  },
  plugins: [],
}

