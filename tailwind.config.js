/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        fullSpin:{
          "100%":{
            transform:"rotate(-360deg)"
          }
        }
      },
      animation:{
        fullSpin:"fullSpin 8s linear infinite"
      }
    },
  },
  plugins: [],
}

