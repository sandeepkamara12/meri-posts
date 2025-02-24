/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "node_modules/preline/dist/*.js",],
  
  theme: {
    fontFamily: {
      'sans': ["Open Sans", "serif"],
      'serif': ["Oswald", 'serif'],
    },
    extend: {
      
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}

