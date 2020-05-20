/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState } from "react";

import Image from "../image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { createMarkup } from "../../utils/functions";
import ExternalLink from "../link/externalLink";
import Arrow from "../Icons/arrow";
import { toggleText } from "../../utils/functions";

const MobileSlider = ({
  imageGallery,
  price,
  heading,
  descriptionNode,
  specificationTitle,
  specificationListNode,
  externalButtonText,
  externalButtonLink,
}) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesPerRow: 1,
    swipeToSlide: true,
    dots: true,
    focusOnSelect: true,
  };

  const [maxheight, setMaxheight] = useState("90px");
  const [open, setOpen] = useState(false);
  return (
    <article
      sx={{
        display: ["flex", "none", "none"],
        flexDirection: ["column"],
        mt: 4,
        mb: 6,
      }}
    >
      <div sx={{ px: [0, 0, 3], flex: "1" }}>
        <div sx={{ mb: 4 }}>
          <Slider {...settings}>
            {imageGallery.map(({ fluid, alt }, index) => (
              <div key={index}>
                <Image alt={alt} image={fluid} />
              </div>
            ))}
          </Slider>
        </div>
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
        <ExternalLink
          text={externalButtonText}
          href={externalButtonLink}
          hovercolor="white"
          color="#111111"
        />
      </div>
    </article>
  );
};

export default MobileSlider;
