/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:{
        "_black":"#191919",
        '_primary': '#F7F3EE',
        '_white':'#FFFFFF',
        '_yellow':'#ffdd00'
      },
      screens: {
        'mb': {'min': '320px', 'max': '1024px'},
        'tab': {'min': '800px', 'max': '1025px'},
        'lap':{'min':'1025px'},
       
      },
    },
  },
  plugins: [],
};
