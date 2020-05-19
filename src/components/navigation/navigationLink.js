/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";

const NavigationLink = ({ children, href, open }) => {
  return (
    <li
      sx={{
        listStyle: "none",
        position: "relative",
        height: ["auto", "25px"],
        ml: 4,
        mt: [4, "0px"],
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
          fontFamily: "body",
          fontSize: [4, 2],
          color: "white",
          zIndex: 2,
          "::after": {
            content: '" "',
            display: "block",
            width: "0%",
            borderBottom: "1px solid",
            borderColor: ["highlight", "white"],
            transition: "0.2s",
            borderRadius: "2px",
            margin: "auto",
          },
          ":hover": {
            "::after": {
              width: "100%",
            },
          },
          ":active": {
            "::after": {
              width: "100%",
            },
          },
          "&.active": {
            "::after": {
              width: "100%",
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
