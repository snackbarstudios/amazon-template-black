export default {
  colors: {
    text: "#111111",
    background: "#fff",
    white: "#fff",
    primary: "#F1F1EF",
    highlight: "#111111",
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
      fontSize: 4,
      m: 0,
    },
    h3: {
      fontFamily: "heading",
      fontWeight: "light",
      fontSize: 3,
      m: 0,
    },
    h4: {
      fontFamily: "heading",
      fontWeight: "body",
      fontSize: 3,
      m: 0,
    },
    a: {
      display: "inline-block",
      maxWidth: "170px",
      position: "relative",
      textDecoration: "none",
      fontFamily: "body",
      fontWeight: "body",
      fontSize: 1,
      color: "text",
      textTransform: "capitalize",
      paddingX: "10px",
      textAlign: "center",
      zIndex: 2,
      "::after": {
        content: '" "',
        position: "absolute",
        zIndex: -1,
        display: "block",
        width: "100%",
        height: "2px",
        backgroundColor: "highlight",
        transition: "0.2s",
        ml: "-10px",
        marginTop: "5px",
      },
      ":hover": {
        color: "text",
        "::after": {
          height: "40px",
          mt: "-33px",
        },
      },
    },
  },
};
