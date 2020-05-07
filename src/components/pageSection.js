/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import OutlineButton from "./outlineButton";
import Image from "../components/image";

const PageSection = ({ section }) => {
  console.log(section);
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgrounColor: "primary",
        ":nth-of-type(2)": { flexDirection: [null, "row-reverse"] },
        pb: 4,
      }}
    >
      <div sx={{ flex: "1" }}>
        <div
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        
          <Styled.h2>{section.blockTitle}</Styled.h2>
          {/* <p>{s.blockDescription}</p>
          {s.buttonLink && (
            <OutlineButton text={s.buttonLink.slug} href={s.buttonLink.slug} />
          )}
          {s.externalBtnLink?.length > 0 && (
            <OutlineButton
              text={s.externalButtonLinkText}
              href={s.externalBtnLink}
            />
          )} */}
        </div>
      </div>
      {/* <div sx={{ flex: "1" }}> */}
        {/* <div
          sx={{
            py: 4,
            overflow: "hidden",
          }}
        >
          <Image image={s.blockImage.fluid} alt={s.blockImage.alt} />
        </div> */}
      {/* </div > */}
    </article>
  );
};

export default PageSection;
