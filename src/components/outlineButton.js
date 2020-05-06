/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        display: "block",
        width: ["100%", "200px", null],
        // width: fullWidth ? "100%" : "150px",
        borderColor: "highlight",
        backgroundColor: ["highlight", "highlight", "transparent"],
        color: ["primary", "primary", "highlight"],
        fontWeight: "body",
        fontSize: 2,
        paddingX: 2,
        paddingY: 2,
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "heading",
        ":hover": {
          color: "primary",
          backgroundColor: "highlight",
        },
      }}
      href={href}
    >
      {text}
    </a>
  );
};

OutlineButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default OutlineButton;
