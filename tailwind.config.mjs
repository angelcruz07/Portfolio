/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        blueray: '#1E3A8A',
        blue: '#2ccbf3ff',
        violet: '#bb99fa',
        green: '#b6d161',
        beige: '#f5b7a4'
      }
    }
  },
  plugins: []
}
