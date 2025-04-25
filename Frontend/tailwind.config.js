/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lora: ["Lora", "serif"],
        dancing: ["Dancing Script", "cursive"],
        playfair: ["Playfair Display", "serif"],
        ubuntu: ["Ubuntu"],
      },
      animation: {
        gradient: "gradient 4s ease infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      }
      
    },
  },
  plugins: [
    require('daisyui'),
  ],
}