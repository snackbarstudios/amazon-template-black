export default {
  initialColorModeName: "light",
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#FDF6EE",
    highlight: "#B77C16",
    modes: {
      raspberryPie: {
        text: "#000",
        background: "#fff",
        primary: "#F2EDEE",
        highlight: "#63323A",
      },
      oceanCalm: {
        text: "#000",
        background: "#fff",
        primary: "#E8F8FF",
        highlight: "#1B5976",
      },
    },
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: "Source Sans Pro, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  fontSizes: [12, 16, 24, 36, 48, 64],
  fontWeights: {
    body: 400,
    heading: 900,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: "normal",
    caps: "0.2em",
  },
  useBodyStyles: "true",
  useBorderBox: "true",
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
    },
    h1: {
      fontSize: [4, 5],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      marginBottom: 4,
      textTransform: "capitalize",
    },
    h2: {
      fontSize: 2,
      fontFamily: "heading",
      fontWeight: "heading",
      color: "highlight",
    },
    h4: {
      fontSize: [2],
      fontFamily: "heading",
      fontWeight: "body",
      color: "background",
      margin: 0,
      mt: "46px",
      mb: 3,
    },
    p: {
      fontSize: 2,
      fontFamily: "heading",
      fontWeight: "body",
      color: "background",
      margin: 0,
    },
  },
};
