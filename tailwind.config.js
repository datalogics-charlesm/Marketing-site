/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {},

    fontFamily: {
      filson: ['filson-pro', 'sans-serif'],
      venn: ['venn-pro', 'sans-serif'],
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#0C70F2',
          'primary-focus':'#063573',
          secondary: '#F224AC',
          accent: '#F2A20C',
          neutral: '#063573',
          'base-100': '#051026',
          'base-content':'#021733',
          info: '#FFFFFF',
          success: '#36D399',
          warning: '#F2D424',
          error: '#F23924',
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
