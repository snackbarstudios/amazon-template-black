/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const ButtonContainer = ({ children }) => (
  <div
    sx={{
      display: ["none", null, "block"],
      zIndex: 2,
      position: "absolute",
      bottom: 0,
      marginLeft: [0, null, "-33px"],
      backgroundColor: "primary",
    }}
  >
    {children}
  </div>
);

export default ButtonContainer;

ButtonContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
