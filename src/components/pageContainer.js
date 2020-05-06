/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const PageContainer = ({ children }) => {
  return (
    <main sx={{ maxWidth: "1140px", margin: "32px auto", px: 3 }}>
      {children}
    </main>
  );
};

export default PageContainer;

PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
