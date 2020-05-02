/** @jsx jsx */
import { jsx } from "theme-ui";
import OutlineButton from "./outlineButton";

const LandingpageSection = ({ section }) => {
  console.log(section);
  return (
    <div
      sx={{
        display: "flex",
        ":nth-of-type(2)": { flexDirection: "row-reverse" },
      }}
    >
      <div sx={{ flex: "1" }}>
        <img src={section.blockImage.fluid.src} alt={section.blockImage.alt} />
      </div>
      <div sx={{ flex: "1", padding: 4 }}>
        <h2>{section.blockTitle}</h2>
        <p>{section.blockDescription}</p>
        <OutlineButton
          text={section.buttonLink.slug}
          href={section.buttonLink.slug}
        />
      </div>
    </div>
  );
};

export default LandingpageSection;
