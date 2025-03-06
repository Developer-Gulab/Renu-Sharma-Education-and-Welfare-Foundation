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
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}