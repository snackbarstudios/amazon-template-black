/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Img from "gatsby-image";

const Logo = ({ logo }) => {
  return (
    <Fragment>
      {logo && (
        <Link
          to="/"
          sx={{
            width: ["30px", "30px", "150px"],
            py: 2,
          }}
        >
          <Img fluid={logo.fluid} alt={logo.alt} />
        </Link>
      )}
    </Fragment>
  );
};

export default Logo;

Logo.propTypes = {
  logo: PropTypes.object.isRequired,
};
