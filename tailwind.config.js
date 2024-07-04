/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'teal-blue': '#123557',
        'primary-blue': "#072F57",
        'secondary-orange': '#EB7150',
        'primary-orange': '#f55d33',
        'secondary-cyan': '#E8FBFF',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}

