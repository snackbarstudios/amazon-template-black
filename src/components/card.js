/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState, useEffect } from "react";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";
import { Fragment } from "react";
import Outlinebutton from "./outlineButton";
import DesktopSlider from "./desktopSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = ({ section }) => {
  const [slideImage, setSlideImage] = useState;
  const settings = {
    infinite: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Fragment>
      {section.map(
        (
          {
            heading,
            price,
            descriptionNode,
            specificationTitle,
            specificationListNode,
            externalButtonText,
            externalButtonLink,
            imageGallery,
          },
          index
        ) => (
          <article key={index}>
            <div
              sx={{
                display: "flex",
                flexDirection: ["column-reverse", "row-reverse"],
                mb: 6,
                // border: "1px solid grey",
              }}
            >
              <div sx={{ flex: "1" }}>
                <div sx={{ px: 3 }}>
                  <Styled.h2>{heading}</Styled.h2>
                  <p
                    sx={{
                      fontWeight: "heading",
                      textTransform: "uppercase",
                      my: 2,
                    }}
                  >
                    Price: {price}
                  </p>
                  <div sx={{ my: 2 }}>
                    <div
                      dangerouslySetInnerHTML={createMarkup(
                        descriptionNode.childMarkdownRemark.html
                      )}
                    />
                  </div>
                  <div
                    sx={{
                      height: "50px",
                      width: "300px",
                      p: 3,
                      display: ["none", "inline-block", null],
                    }}
                  >
                    <DesktopSlider imageGallery={imageGallery} />
                  </div>
                  <p
                    sx={{
                      fontWeight: "heading",
                      textTransform: "uppercase",
                      my: 2,
                    }}
                  >
                    {specificationTitle}
                  </p>

                  <div
                    sx={{
                      ul: {
                        variant: "markdownText.ul",
                      },
                    }}
                    dangerouslySetInnerHTML={createMarkup(
                      specificationListNode.childMarkdownRemark.html
                    )}
                  />

                  <Outlinebutton
                    text={externalButtonText}
                    href={externalButtonLink}
                  />
                </div>
              </div>
              <div sx={{ flex: "1", overflow: "hidden" }}>
                <div
                  sx={{
                    height: ["200px", "100%", null],
                    overflow: "hidden",
                    div: {
                      height: "100%",
                    },
                  }}
                >
                  <Slider {...settings}>
                    {imageGallery.map(({ fluid, alt }, index) => (
                      <Image
                        key={index}
                        alt={alt}
                        image={fluid}
                        onClick={() => setSlideImage(fluid)}
                      />
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </article>
        )
      )}
    </Fragment>
  );
};

export default Card;
