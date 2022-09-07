/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'azul-claro': '#404782',
      'blanco-leve': 'rgba(255,255,255,0.20)',
      'azul-oscuro': '#1A1F46',
      'naranja': '#FD6A03',
    },
  },
  plugins: [],
}
