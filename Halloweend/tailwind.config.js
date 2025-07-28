/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true, // Memastikan container berada di tengah layar
      padding: '1rem', // Padding default untuk semua layar
      screens: {
        sm: '640px', // Ukuran maksimal container di layar kecil
        md: '768px', // Ukuran maksimal container di layar menengah
        lg: '1024px', // Ukuran maksimal container di layar besar
        xl: '1280px', // Ukuran maksimal container di layar ekstra besar
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#06C2AE',
          200: '#028898',
        },
        secondary: '#FF693A',
      },
    },
  },
  plugins: [],
}
