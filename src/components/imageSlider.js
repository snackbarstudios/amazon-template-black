/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import { useRef } from "react";
import { Fade } from "react-slideshow-image";

import ButtonContainer from "./ButtonContainer";
import ImageSliderContainer from "./ImageSliderContainer";
import NavigationButton from "./NavigationButton";

const ImageSlider = ({ slides }) => {
  const fadeImages = [];
  slides.forEach((slide) => {
    fadeImages.push(slide);
  });
  const slideRef = useRef(null);

  function next() {
    if (
      slideRef &&
      slideRef.current &&
      typeof slideRef.current.goNext === "function"
    ) {
      slideRef.current.goNext();
    }
  }
  function prev() {
    if (
      slideRef &&
      slideRef.current &&
      typeof slideRef.current.goNext === "function"
    ) {
      slideRef.current.goBack();
    }
  }
  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: false,
  };

  return (
    <ImageSliderContainer>
      <Fade
        ref={slideRef}
        {...fadeProperties}
        sx={{
          height: "100%",
          width: "100%",
          div: {
            height: "100%",
            width: "100%",
          },
          ".react-slideshow-fade-wrapper": {
            position: "relative",
          },
          ".react-slideshow-fade-images-wrap": {
            position: "absolute",
          },
        }}
      >
        {fadeImages.length > 0
          ? fadeImages.map(({ fluid }, index) => (
              <Img fluid={fluid} key={index} alt="slide" />
            ))
          : null}
      </Fade>

      <ButtonContainer>
        <NavigationButton handleClick={prev} />
        <NavigationButton handleClick={next} isNext />
      </ButtonContainer>
    </ImageSliderContainer>
  );
};

export default ImageSlider;

ImageSlider.propTypes = {
  slides: PropTypes.array.isRequired,
};

