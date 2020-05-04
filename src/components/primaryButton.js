/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const PrimaryButton = ({ text, href }) => {
  return (
    <a
      sx={{
        border: "1px solid",
        borderColor: "highlight",
        backgroundColor: "highlight",
        color: "white",
        paddingX: "10px",
        paddingY: 2,
        textTransform: "uppercase",
        textDecoration: "none",
        fontFamily: "heading",
        ":hover": {
          color: "highlight",
          backgroundColor: "text",
        },
      }}
      href={href}
    >
      {text}
    </a>
  );
};

PrimaryButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default PrimaryButton;
