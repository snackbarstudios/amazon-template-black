/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const DropDownMobile = ({ children, open }) => {
  const slide = (action) => {
    let animation = {};
    if (open) {
      switch (action) {
        case "dropdown":
          animation.width = "100%";
          animation.transition = "all 0.4s ease-in";
          break;
        default:
      }
    }
    return {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 10,
      backgroundColor: "background",
      color: "primary",
      overflow: "hidden",
      height: "100vh",
      width: "0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      transition: "all 0.4s ease-out ",
      ...animation,
    };
  };

  return <div sx={slide("dropdown")}>{children}</div>;
};

export default DropDownMobile;

DropDownMobile.propTypes = {
  children: PropTypes.node.isRequired,
};
