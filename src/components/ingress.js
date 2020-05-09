/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const Ingress = ({ children }) => {
  return (
    <div
      sx={{
        textAlign: "center",
        maxWidth: ["300px", "800px"],
        m: "0 auto",
        mb: 6,
        p: [2],
      }}
    >
      {children}{" "}
    </div>
  );
};

export default Ingress;

Ingress.propTypes = {
  children: PropTypes.node.isRequired,
};
