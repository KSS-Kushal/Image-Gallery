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
      },
      backgroundImage:{
        "login":"conic-gradient(from 180deg at 50% 50%, #FFE4D6 0deg, #D6E6FF 85.65deg, #FFEFA4 184.4deg, #D9FFDE 274.94deg, #FFE4D6 360deg);"
      },
      gridTemplateColumns:{
        "auto": "repeat(auto-fill, minmax(300px, 1fr));"
      }
    },
  },
  plugins: [],
}

