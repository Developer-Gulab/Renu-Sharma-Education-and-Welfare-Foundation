/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        sweep: 'sweep 0.8s ease-in-out forwards',
      },
      keyframes: {
        sweep: {
          '0%': { left: '-75%' },
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
