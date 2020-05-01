/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const NavItem = ({ children, open }) => {
  const item = (action) => {
    let animation = {};
    if (open) {
      switch (action) {
        case "colorChange":
          animation.opacity = 1;
          animation.transform = " translateX(50px)";
          break;
        default:
      }
    }
    return {
      color: "primary",
      fontFamily: "heading",
      fontWeight: "body",
      transition: "all 0.3s ease-out",
      transitionDelay: "0.1s",
      transitionProperty: "opacity, transform",
      transform: " translateX(-20px)",
      opacity: 0,
      ...animation,
    };
  };
  return <li sx={item("colorChange")}>{children}</li>;
};

export default NavItem;

NavItem.propTypes = {
  children: PropTypes.node.isRequired,
};
