export default {
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#EFE5DA",
    highlight: "#B77C16",
  },
  breakpoints: ["40em", "56em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 96, 128, 256, 512],
  fonts: {
    body: "Avenir Next",
    heading: "Avenir Next",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 700,
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
      fontSize: [36, 48],
      fontFamily: "heading",
      fontWeight: "heading",
      color: "text",
      textTransform: "uppercase",
      marginBottom: 4,
    },
    h2: {
      fontSize: [24],
      fontFamily: "heading",
      fontWeight: "body",
      color: "text",
      marginBottom: 4,
      display: "block",
      "::after": {
        content: '" "',
        display: "block",
        width: "20%",
        paddingTop: 1,
        borderBottom: "2px solid",
        borderColor: "highlight",
      },
    },
  },
};
