/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const MainContainer = ({ children }) => {
  return (
    <main sx={{ maxWidth: "1140px", mx: "auto", px: [3, null, "0px"] }}>
      {children}
    </main>
  );
};

export default MainContainer;

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
