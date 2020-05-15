/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const IngressSection = ({ children }) => {
  return (
    <article
      sx={{
        maxWidth: ["400px", "600px", "800px"],
        mx: "auto",
        mb: [6, null, 8],
        fontFamily: "heading",
        fontSize: [3, 4],
        textAlign: "center",
        lineHeight: "heading",
        px: [3, "0px"],
      }}
    >
      {children}
    </article>
  );
};

export default IngressSection;

IngressSection.propTypes = {
  children: PropTypes.node.isRequired,
};
