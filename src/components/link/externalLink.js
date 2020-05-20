/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";

const ExternalLink = ({ text, href, color, hovercolor }) => (
  <Styled.a
    sx={{
      fontSize: 2,
      color: color,
      ":hover": {
        color: hovercolor,
      },
      ":active": {
        color: hovercolor,
      },
      ":focus": {
        color: hovercolor,
      },
      "::after": {
        backgroundColor: color,
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
