

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
       zIndex: {
         '-1': '-1',
         '2' : '2'
        },
        transform: {
          '50': 'translate(-50%, -50%)'
        },
        fontSize:{
          '0': '0px',
          'btn': '3vw',
        },
        // screens: {
        //   '2xl': {'max': '1535px'},
        //   // => @media (max-width: 1535px) { ... }
    
        //   'xl': {'max': '1279px'},
        //   // => @media (max-width: 1279px) { ... }
    
        //   'lg': {'max': '1023px'},
        //   // => @media (max-width: 1023px) { ... }
    
        //   'md': {'max': '767px'},
        //   // => @media (max-width: 767px) { ... }
    
        //   'sm': {'max': '639px'},
        //   // => @media (max-width: 639px) { ... }
        // },
        flex: {
          '4' : '4',
          'one': '1'
        },
        backgroundImage: {
          'img-pattern': "url('/src/assets/shambay.png')",
          'gif-texture': "url('/src/assets/shambay.gif')",
         },
         height: {
          'admin': 'calc(100vh - 48px)'
         }

    },
  },
  variants: {
    extend: {
      translate: ['active'],
      visibility: ['active']
    },
  },
  plugins: [
   
  ],
}
