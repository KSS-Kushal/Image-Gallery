/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        // Configure your color palette here
        'dark' : "#060047",
        'mid-dark' : '#B3005E',
        'normal' : '#E90064',
        'light' : '#FF5F9E'
      }
    },
  },
  plugins: [],
}

