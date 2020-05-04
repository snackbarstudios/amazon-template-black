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
      backgroundColor: "primary",
      color: "primary",
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 10,
      width: "0",
      overflow: "hidden",
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
