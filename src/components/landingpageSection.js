/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import OutlineButton from "./outlineButton";
import Img from "gatsby-image";

const LandingpageSection = ({ section }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        ":nth-of-type(2)": { flexDirection: [null, "row-reverse"] },
      }}
    >
      <div sx={{ flex: "1" }}>
        <Img fluid={section.blockImage.fluid} alt={section.blockImage.alt} />
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
  );
};

export default LandingpageSection;
