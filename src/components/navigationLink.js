/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const NavigationLink = ({ children, href, open }) => {
  return (
    <li
      sx={{
        listStyle: "none",
        ml: 4,
        position: "relative",
        height: "24px",
        pl: 1,
      }}
    >
      <Link
        to={href}
        aria-label={`Link to ${href}`}
        activeClassName="active"
        sx={{
          display: "inline-block",
          position: "relative",
          textDecoration: "none",
          fontFamily: "heading",
          fontWeight: "heading",
          color: "text",
          zIndex: 2,
          "::after": {
            position: "absolute",
            zIndex: -1,
            content: '" "',
            display: "block",
            width: "120%",
            ml: "-20%",
            height: "12px",
            backgroundColor: "primary",
            borderRadius: "2px",
            mt: "-15px",
            opacity: 0,
            transition: "1s",
          },
          ":hover": {
            "::after": {
              opacity: 1,
            },
          },
          ":active": {
            "::after": {
              opacity: 1,
            },
          },
          "&.active": {
            "::after": {
              opacity: 1,
            },
          },
        }}
      >
        {children}
      </Link>
    </li>
  );
};

NavigationLink.defaultProps = {
  open: false,
};

NavigationLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default NavigationLink;
