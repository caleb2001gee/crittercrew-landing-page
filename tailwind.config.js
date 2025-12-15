/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        paw: {
          '0%': { 
            transform: 'translateY(0) rotate(0deg)', 
            opacity: '0' 
          },
          '10%': { 
            opacity: '0.4' 
          },
          '50%': { 
            opacity: '0.25' 
          },
          '100%': { 
            transform: 'translateY(-110vh) rotate(15deg)', 
            opacity: '0' 
          }
        }
      },
      animation: {
        paw: 'paw linear infinite'
      }
    },
  },
  plugins: [],
}
