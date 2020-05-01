/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const AnchorLink = ({ children, href, setOpen }) => {
  return (
    <Link
      to={href}
      aria-label={`Link to ${href}`}
      onClick={() => setOpen(false)}
      sx={{ color: "black" }}
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
