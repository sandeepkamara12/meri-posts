/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",  "node_modules/preline/dist/*.js",],
  
  theme: {
    fontFamily: {
      'sans': ["Open Sans", "serif"],
      'serif': ["Oswald", 'serif'],
    },
    extend: {
      boxShadow: {
        notification: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)"
      }
    },
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}

