import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Image = ({ image, alt }) => {
  return <Img fluid={image} alt={alt} />;
};

export default Image;

Image.propTypes = {
  image: PropTypes.node.isRequired,
  alt: PropTypes.string.isRequired,
};
