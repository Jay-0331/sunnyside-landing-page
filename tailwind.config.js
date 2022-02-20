module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    extend: {
      backgroundImage: {
        imageheaderdesktop: "url('./images/desktop/image-header.jpg')" ,
        imageheadermobile: "url('./images/mobile/image-header.jpg')",
        transformmobile: "url('./images/mobile/image-transform.jpg')",
        transformdesktop: "url('./images/desktop/image-transform.jpg')",
        standoutmobile: "url('./images/mobile/image-stand-out.jpg')",
        standoutdesktop: "url('./images/desktop/image-stand-out.jpg')",
        graphicdesignmobile: "url('./images/mobile/image-graphic-design.jpg')",
        graphicdesigndesktop: "url('./images/desktop/image-graphic-design.jpg')",
        photographymobile: "url('./images/mobile/image-photography.jpg')",
        photographydesktop: "url('./images/desktop/image-photography.jpg')",
        sugarcubemobile: "url('./images/mobile/image-gallery-sugar-cubes.jpg')",
        sugarcubedesktop: "url('./images/desktop/image-gallery-sugarcubes.jpg')",
        orangemobile: "url('./images/mobile/image-gallery-orange.jpg')",
        orangedesktop: "url('./images/desktop/image-gallery-orange.jpg')",
        milkbottlesmobile: "url('./images/mobile/image-gallery-milkbottles.jpg')",
        milkbottlesdesktop: "url('./images/desktop/image-gallery-milkbottles.jpg')",
        conemobile: "url('./images/mobile/image-gallery-cone.jpg')",
        conedesktop: "url('./images/desktop/image-gallery-cone.jpg')",
        
      },
      colors: {
        primary: {
          'soft-red': 'hsl(7, 99%, 70%)',
          'yellow': 'hsl(51, 100%, 49%)',
          'dark-desaturated-cyan': 'hsl(167, 40%, 24%)',
          'dark-blue': 'hsl(198, 62%, 26%)',
          'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
          'off-white': 'rgb(255,251,248)',
        },
        neutral: {
          'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
          'very-dark-grayish-blue': 'hsl(213, 9%, 39%)',
          'dark-grayish-blue': 'hsl(232, 10%, 55%)',
          'grayish-blue': 'hsl(210, 4%, 67%)',
          'white': 'hsl(0, 0%, 100%)',
        }
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        poppin: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { 
            transform: 'translateY(0) scale(1)',
           },
          '50%': { 
            transform: 'translateY(30%) scale(1.2)',
           },
        },
      },
      fontSize: {
        responsive: ['2.5vw', '3.5vw'],
        headingsmall: ['28px', '43px'],
        heading: ['40px', '46px'],
        paragraph: ['18px', '24px'],
      },  
    },
  },
  plugins: [],
}
