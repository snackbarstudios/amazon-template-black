/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "theme-ui";

const ButtonContainer = ({ children }) => (
  <div
    sx={{
      zIndex: 2,
      position: "absolute",
      bottom: 0,
      marginLeft: [0, 0, "-64px"],
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
