/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import StyledLink from "./styledLink";
import Image from "./image";
import { createMarkup } from "../utils/functions";

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
            p: 6,
            a: {
              "::after": {
                mx: "auto",
              },
            },
          }}
        >
          <Styled.h2 sx={{ color: "highlight", mb: 3 }}>
            {section.blockTitle}
          </Styled.h2>
          <p
            dangerouslySetInnerHTML={createMarkup(
              section.blockDescriptionNode.childMarkdownRemark.html
            )}
          />
          {section.buttonLink && (
            <StyledLink
              href={section.buttonLink.slug}
              sx={{
                fontSize: 1,
                "::after": {
                  margin: "auto",
                },
              }}
            >
              {section.buttonLink.slug}
            </StyledLink>
          )}
          {section.externalBtnLink?.length > 0 && (
            <Styled.a
              href={section.externalBtnLink}
              sx={{
                fontSize: 1,
                "::after": {
                  margin: "auto",
                },
              }}
            >
              {section.externalButtonLinkText}
            </Styled.a>
          )}
        </div>
      </div>
    </article>
  );
};

export default PageSection;
