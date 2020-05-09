/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href, fullWidth }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        display: "block",
        maxWidth: "170px",
        borderColor: "highlight",
        backgroundColor: "highlight",
        color: "background",
        fontWeight: "body",
        fontSize: 1,
        paddingX: 2,
        paddingY: 1,
        textAlign: "center",
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "heading",
        ":hover": {
          boxShadow: "0 0 20px 2px rgba(0,0,0,0.17);",
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
