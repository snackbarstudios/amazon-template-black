export default {
  colors: {
    text: "#000",
    background: "#fff",
    white: "#fff",
    primary: "#F1F1EF",
    highlight: "#000",
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  fontSizes: [14, 16, 18, 24, 36, 48, 64],
  fontWeights: {
    body: 200,
    light: 200,
    bold: 400,
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
  // variants can use custom, user-defined names
  markdownText: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
      color: "text",
      fontSize: [2],
    },
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1],
    },
    p: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1],
      m: 0,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    a: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: 1,
      color: "highlight",
      ":hover": {
        color: "primary",
      },
    },
    ul: {
      pl: 2,
      li: {
        m: 0,
      },
    },
  },

  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
      fontSize: 1,
      m: 0,
    },
    h1: {
      fontFamily: "heading",
      fontSize: [4, 6],
      lineHeight: "heading",
      fontWeight: "light",
      m: 0,
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: [4, 5],
      m: 0,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: [3, 4],
      m: 0,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "body",
      fontSize: 3,
      m: 0,
    },
    a: {
      fontFamily: "body",
      fontWeight: "bold",
      fontSize: 2,
      color: "white",
      m: 0,
      textDecoration: "none",
      textTransform: "uppercase",
    },
  },
};
