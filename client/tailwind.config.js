/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgba(217, 217, 217, 1)',
        lightGray: 'rgba(142, 142, 142, 1)',
        lightWhite: 'rgba(226, 226, 226, 1)',
        lightYellow : 'rgba(224,198,64,1)',
        dullBalck : 'background: rgba(35, 19, 0, 1)'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Dancing: ["Dancing Script", "serif"],
      },
    },
  },
  plugins: [],
}
