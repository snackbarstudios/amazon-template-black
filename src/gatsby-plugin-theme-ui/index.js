import { noAuto } from "@fortawesome/fontawesome-svg-core";

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
  space: [0, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512],
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
      margin: 0,
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
    a: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: [1],
      color: "highlight",
      ":hover": {
        color: "primary",
      },
    },
    ul: {
      li: {
        margin: 0,
      },
    },
  },

  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
      margin: 0,
    },
    h1: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: [4, 5],
      margin: 0,
      textTransform: "capitalize",
    },
    h2: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: 2,
      margin: 0,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "heading",
      fontSize: [2],
      margin: 0,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "body",
      fontSize: 2,
      color: "background",
      margin: 0,
    },
    a: {
      color: "highlight",
      textTransform: "capitalize",
      fontWeight: "heading",
      textDecoration: "none",
      "::after": {
        content: '" "',
        display: "block",
        width: "10%",
        pt: 1,
        borderBottom: "2px solid",
        borderColor: "highlight",
        transition: "0.2s",
        borderRadius: "2px",
      },
      ":hover::after": {
        width: "20%",
      },
    },
  },
};
