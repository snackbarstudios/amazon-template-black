/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const DropDownMobile = ({ children, open }) => {
  const slide = (action) => {
    let animation = {};
    if (open) {
      switch (action) {
        case "dropdown":
          animation.visibility = "visible";
          animation.height = "100vh";
          break;
        default:
      }
    }
    return {
      backgroundColor: "grey",
      color: "primary",
      display: "flex",
      flexDirection: "column",
      height: "0",
      position: "absolute",
      left: 0,
      top: 0,
      zIndex: 10,
      width: "100%",
      visibility: "hidden",
      justifyContent: "center",
      transition: "all 0.6s ease-out ",

      ...animation,
    };
  };

  return <div sx={slide("dropdown")}>{children}</div>;
};

export default DropDownMobile;

DropDownMobile.propTypes = {
  children: PropTypes.node.isRequired,
};
