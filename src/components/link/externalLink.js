/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";

const ExternalLink = ({ text, href }) => (
  <Styled.a
    sx={{
      backgroundColor: "black",
      minWidth: "150px",
      paddingX: 4,
      paddingY: "12px",
      textAlign: "center",
      border: "none",
      ":hover": {
        backgroundColor: "white",
        color: "highlight",
      },
    }}
    href={href}
  >
    {text}
  </Styled.a>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ExternalLink;
