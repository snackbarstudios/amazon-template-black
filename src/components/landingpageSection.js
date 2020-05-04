/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import OutlineButton from "./outlineButton";
import Img from "gatsby-image";

const LandingpageSection = ({ section }) => {
  const { landinpageSection } = section;

  console.log(landinpageSection)
  return (
    <Fragment>
      {landinpageSection.map((section) => (
        <article
          key={section.id}
          sx={{
            display: "flex",
            flexDirection: ["column", "row"],
            ":nth-of-type(2)": { flexDirection: [null, "row-reverse"] },
          }}
        >
          <div sx={{ flex: "1" }}>
            <Img
              fluid={section.blockImage.fluid}
              alt={section.blockImage.alt}
            />
          </div>
          <div sx={{ flex: "1" }}>
            <div
              sx={{
                padding: 4,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Styled.h2>{section.blockTitle}</Styled.h2>
              <p>{section.blockDescription}</p>
              <OutlineButton
                text={section.buttonLink.slug}
                href={section.buttonLink.slug}
              />
            </div>
          </div>
        </article>
      ))}
    </Fragment>
  );
};

export default LandingpageSection;
