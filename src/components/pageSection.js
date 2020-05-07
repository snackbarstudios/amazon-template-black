/** @jsx jsx */
import { jsx, Styled, css } from "theme-ui";
import OutlineButton from "./outlineButton";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";

const style = css`
color: 'hotpink,

`;

const PageSection = ({ section }) => {
  console.log(section);
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgroundColor: "primary",
        ":nth-of-type(2)": { flexDirection: [null, "row-reverse"] },
      }}
    >
      <div sx={{ flex: "1" }}>
        <div
          sx={{
            overflow: "hidden",
            height: "100%",
            div: {
              height: "100%",
            },
          }}
        >
          <Image
            image={section.blockImage.fluid}
            alt={section.blockImage.alt}
          />
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <div
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          <Styled.h2>{section.blockTitle}</Styled.h2>
          <p
            dangerouslySetInnerHTML={createMarkup(
              section.blockDescriptionNode.childMarkdownRemark.html
            )}
          />
          {section.buttonLink && (
            <Styled.a
              text={section.buttonLink.slug}
              sx={{
                "::after": {
                  margin: "auto",
                },
              }}
            >
              {section.buttonLink.slug}
            </Styled.a>
          )}
          {section.externalBtnLink?.length > 0 && (
            <OutlineButton
              text={section.externalButtonLinkText}
              href={section.externalBtnLink}
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default PageSection;
