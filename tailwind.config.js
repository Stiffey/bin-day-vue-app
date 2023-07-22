/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './index.html',
    './src/**/*.{vue,js,ts}',
    './src/views/**/*.{vue,js,ts}',
    './src/components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      'display': ['Gilroy-Bold', 'Sans-serif'],
      'sans': ['Gilroy-Med', 'Sans-serif'],
    }
  },
  plugins: []
}