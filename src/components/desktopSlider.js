/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../components/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { createMarkup } from "../utils/functions";
import Outlinebutton from "./outlineButton";

const DesktopSlider = ({
  imageGallery,
  price,
  heading,
  descriptionNode,
  specificationTitle,
  specificationListNode,
  externalButtonText,
  externalButtonLink,
}) => {
  const [focusImage, setFocusImage] = useState();

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: imageGallery.length > 2 ? 3 : 2,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
  };
  return (
    <article
      sx={{
        display: ["none", "flex", "flex"],
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
          {imageGallery.length >= 1 ? (
            <div
              sx={{
                height: "50px",
                width: "300px",
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
                      outline: "none",
                    }}
                    onClick={() => setFocusImage(fluid)}
                  >
                    <Image alt={alt} image={fluid} />
                  </div>
                ))}
              </Slider>
            </div>
          ) : null}
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

          <Outlinebutton text={externalButtonText} href={externalButtonLink} />
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <Image
          alt={imageGallery[0].alt}
          image={focusImage ? focusImage : imageGallery[0].fluid}
        />
      </div>
    </article>
  );
};

export default DesktopSlider;
