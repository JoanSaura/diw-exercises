/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"], // Rango de archivos donde se buscarán las clases de Tailwind
  theme: {
    extend: {
      screens: {
        'tablet': '640px', // Min-width 640px para dispositivos tablet
        'laptop': '1024px', // Min-width 1024px para laptops
        'desktop': '1280px', // Min-width 1280px para desktops
      }
    }
  },
  plugins: [],
}
