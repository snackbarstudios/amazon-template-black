/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";

const IngressSection = ({ children }) => {
  return (
    <article
      sx={{
        maxWidth: ["400px", "600px"],
        mx: "auto",
        mb: [6, 8],
        fontFamily: "heading",
        fontSize: 4,
        textAlign: "center",
        lineHeight: "heading",
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
