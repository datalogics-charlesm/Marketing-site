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
    colors: {
      'dk-blue-shade-1': '#021733',
      'dk-blue-shade-2':'#063573',
    },
  },
  daisyui:{
    themes: [ 
      { 
    mytheme: {
      "primary": "#0C70F2",
      "secondary": "#F224AC",
      "accent": "#F2A20C",
      "neutral": "#063573",
      "base-100": "#051026",
      "info": "#FFFFFF",
      "success": "#36D399",
      "warning": "#F2D424",
      "error": "#F23924",
    }, 
  }, 
], 
  },
  plugins: [require('daisyui')],
}
