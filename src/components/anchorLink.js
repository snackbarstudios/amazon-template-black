/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { Fragment } from "react";

const AnchorLink = ({ children, href, open }) => {
  const slide = (action) => {
    let animation = {};
    if (open) {
      switch (action) {
        case "hideText":
          animation.opacity = "1";
          animation.transitionDelay = "0.2s";
          animation.transition = "opacity 0.5s";
          break;
        default:
      }
    }
    return {
      fontWeight: ["heading", "bold", "bold"],
      textDecoration: "none",
      textTransform: "uppercase",
      color: ["primary", "background"],
      opacity: "0",
      transition: "opacity 0.1s",
      ":hover": {
        fontWeight: "heading",
      },
      ":focus": { fontWeight: "heading" },
      ...animation,
    };
  };
  return (
    <Fragment>
      <Link
        to={href}
        aria-label={`Link to ${href}`}
        activeClassName="active"
        sx={
          (slide("hideText"),
          {
            color: "text",
            display: "inline-block",
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
            "&.active": {
              color: "highlight",
            },
          })
        }
      >
        {children}
      </Link>
    </Fragment>
  );
};

AnchorLink.defaultProps = {
  open: false,
};

AnchorLink.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

export default AnchorLink;
