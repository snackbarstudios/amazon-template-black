/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import StyledLink from "./styledLink";
import Image from "./image";
import { createMarkup } from "../utils/functions";

const PageSection = ({ section }) => {
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgroundColor: "primary",
        ":nth-of-type(2)": {
          flexDirection: [null, "row-reverse"],
          backgroundColor: ["background", "primary"],
        },
      }}
    >
      <div sx={{ flex: "1", div: { height: "100%" } }}>
        <Image image={section.blockImage.fluid} alt={section.blockImage.alt} />
      </div>
      <div sx={{ flex: "1" }}>
        <div
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            px: [4, 6],
            py: [6],
          }}
        >
          <Styled.h2 sx={{ color: "highlight", mb: 3 }}>
            {section.blockTitle}
          </Styled.h2>
          <p
            sx={{ m: 0 }}
            dangerouslySetInnerHTML={createMarkup(
              section.blockDescriptionNode.childMarkdownRemark.html
            )}
          />
          {section.buttonLink && (
            <StyledLink href={section.buttonLink.slug}>
              {section.buttonLink.slug}
            </StyledLink>
          )}
          {section.externalBtnLink?.length > 0 && (
            <Styled.a
              href={section.externalBtnLink}
              rel="noopener noreferrer"
              target="_blank"
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
