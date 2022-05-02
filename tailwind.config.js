module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'dmsans':"'DM Sans'",
        'opensans':"'Open Sans'",
      },
      colors:{
        black:'#100C07',
        secondary:"#85EB7D",
        primary:"#FFFFFF",
        silver:"#B1B1B1",
        ligreen:'#CFFFCB',
        grey:'#818181',
        darkgreen:'#2F602C',
        green:'#4E9A47',
        darkgrey:'#5E5E5E',
      },
      backgroundImage:{
        'hero-illustration':"url('./images/search-icon.png')",
        'cardbg':' linear-gradient(-70.13deg, #85EB7D -48.23%, rgba(133, 235, 125, 0.1375) 30.07%, rgba(133, 235, 125, 0) 97.26%)',
      },
      padding:{
        '92':'22.1rem',
        '98':'31rem',
      },
      spacing:{
        '55':'60%'
      },
      boxShadow: {
        '1md':'-1px -1px 0px #818181'
      }
    },
    container:{
      center:true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
