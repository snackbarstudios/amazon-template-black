/** @jsx jsx */
import { jsx } from "theme-ui";
import OutlineButton from "./outlineButton";
import Img from "gatsby-image";

const LandingpageSection = ({ section }) => {
  return (
    <div
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
        <div sx={{ padding: 4 }}>
          <h2>{section.blockTitle}</h2>
          <p>{section.blockDescription}</p>
          <OutlineButton
            text={section.buttonLink.slug}
            href={section.buttonLink.slug}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingpageSection;
