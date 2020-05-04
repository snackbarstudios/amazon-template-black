/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const MainContainer = ({ children }) => {
  return (
    <main sx={{ maxWidth: "1024px", margin: "32px auto" }}>{children}</main>
  );
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
