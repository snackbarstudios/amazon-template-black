/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        display: "block",
        maxWidth: "150px",
        borderColor: "highlight",
        backgroundColor: "highlight",
        color: "background",
        fontWeight: "body",
        fontSize: 1,
        paddingX: 1,
        paddingY: 1,
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "heading",
        ":hover": {
          // color: "background",
          // backgroundColor: "highlight",
          // boxShadow: "0 0 20px 2px rgba(0,0,0,0.17);",
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
