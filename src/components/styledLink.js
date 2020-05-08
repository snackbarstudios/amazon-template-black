/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const StyledLink = ({ children, href, open }) => {
  return (
    <Link
      to={href}
      aria-label={`Link to ${href}`}
      activeClassName="active"
      sx={{
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
          width: "15%",
        },
      }}
    >
      {children}
    </Link>
  );
};

StyledLink.defaultProps = {
  open: false,
};

StyledLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default StyledLink;
