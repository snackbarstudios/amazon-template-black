/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState } from "react";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";
import { Fragment } from "react";
import Outlinebutton from "./outlineButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Card = ({ section }) => {
  const [slideImage, setSlideImage] = useState();
  const [focusImage, setFocusImage] = useState(null);
  console.log(focusImage);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
  };
  const settingsMain = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
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
                    <Slider {...settings}>
                      {imageGallery.map(({ fluid, alt }, index) => (
                        <div
                          key={index}
                          sx={{
                            width: "80px",
                            height: "80px",
                            div: {
                              height: "100%",
                              zIndex: 5000,
                            },
                          }}
                          onClick={() => setFocusImage(fluid)}
                        >
                          <Image alt={alt} image={fluid} />
                        </div>
                      ))}
                    </Slider>
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
                  <Slider {...settingsMain}>
                    {imageGallery.map(({ fluid, alt }, index) => (
                      <div
                        key={index}
                        sx={{
                          height: "100%",
                          div: {
                            height: "100%",
                          },
                        }}
                      >
                        <Image
                          alt={alt}
                          image={focusImage ? focusImage : fluid}
                        />
                      </div>
                    ))}
                  </Slider>
                  {/* <Image
                    image={focusImage ? focusImage : imageGallery[0].fluid}
                    alt="#"
                  /> */}
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
