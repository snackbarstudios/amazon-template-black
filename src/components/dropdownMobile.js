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
      backgroundColor: "background",
      color: "primary",
      position: "absolute",
      overflow: "hidden",
      left: 0,
      top: 0,
      zIndex: 10,
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
