/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { createMarkup } from "../../utils/functions";
import ExternalLink from "../link/externalLink";
import Arrow from "../Icons/arrow";

function toggleText(open, setOpen, changeHeight) {
  if (open) {
    changeHeight("60px");
    setOpen(!open);
  } else {
    changeHeight("1000px");
    setOpen(!open);
  }
}

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
  const [maxheight, setMaxheight] = useState("90px");
  const [open, setOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow:
      imageGallery.length > 5
        ? 6
        : imageGallery.length > 4
        ? 5
        : imageGallery.length > 3
        ? 4
        : imageGallery.length > 2
        ? 3
        : imageGallery.length > 1
        ? 2
        : 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    focusOnSelect: true,
  };
  return (
    <article
      sx={{
        display: ["none", "flex", "flex"],
        flexDirection: ["column-reverse", "row-reverse"],
        mb: 4,
      }}
    >
      <div sx={{ flex: "1" }}>
        <div sx={{ px: 3, ml: [2, null, 6] }}>
          <Styled.h2>{heading}</Styled.h2>
          <p
            sx={{
              fontWeight: "heading",
              my: 3,
            }}
          >
            {price}
          </p>
          <div sx={{ my: 3 }}>
            <div
              sx={{
                maxHeight: maxheight,
                overflow: "hidden",
                transition: "max-height .5s ease-in-out",
              }}
              dangerouslySetInnerHTML={createMarkup(
                descriptionNode.childMarkdownRemark.html
              )}
            />
          </div>
          <button
            sx={{
              outline: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              background: "transparent",
              cursor: "poiter",
              p: {
                ml: 1,
              },
              div: {
                svg: {
                  transform: open ? "rotate(180deg)" : "rotate(0deg)",
                },
              },
            }}
            onClick={() => toggleText(open, setOpen, setMaxheight)}
          >
            <Arrow fill="#111111" width="12px" />
            <p> View more</p>
          </button>
          <p
            sx={{
              fontWeight: "heading",
              textTransform: "uppercase",
              my: 3,
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
          <div sx={{ py: 3 }}>
            <ExternalLink
              text={externalButtonText}
              href={externalButtonLink}
              hovercolor="white"
              color="#111111"
            />
          </div>
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <Image
          alt={imageGallery[0].alt}
          image={focusImage ? focusImage : imageGallery[0].fluid}
        />
        {imageGallery.length >= 2 ? (
          <div
            sx={{
              width:
                imageGallery.length > 5
                  ? "calc(75px * 6)"
                  : imageGallery.length > 4
                  ? "calc(75px * 5)"
                  : imageGallery.length > 3
                  ? "calc(75px * 4)"
                  : imageGallery.length > 2
                  ? "calc(75px * 3)"
                  : "calc(75px * 2)",
              display: ["none", "block"],
              mx: "auto",
            }}
          >
            <Slider {...settings}>
              {imageGallery.map(({ fluid, alt }, index) => (
                <div
                  key={index}
                  sx={{
                    width: "100px",
                    height: "100px",
                    outline: "none",
                    mt: 4,
                  }}
                  onClick={() => setFocusImage(fluid)}
                >
                  <Image
                    sx={{ width: "100px", height: "100px" }}
                    alt={alt}
                    image={fluid}
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default DesktopSlider;
