/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const OutlineButton = ({ text, href }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        borderColor: "highlight",
        color: "highlight",
        paddingX: "10px",
        paddingY: "3",
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
