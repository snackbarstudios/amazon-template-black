/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const AnchorLink = ({ children, href }) => {
  return (
    <Link
      to={href}
      aria-label={`Link to ${href}`}
      activeClassName="active"
      sx={{
        color: "black",
        textDecoration: "none",
        "&.active": {
          color: "highlight",
        },
      }}
    >
      {children}
    </Link>
  );
};

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
};

export default AnchorLink;
