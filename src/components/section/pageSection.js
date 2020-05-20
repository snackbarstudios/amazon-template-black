/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import ExternalLink from "../link/externalLink";
import StyledLink from "../link/styledLink";
import Image from "../image";
import { createMarkup } from "../../utils/functions";

const PageSection = ({ section }) => {
  return (
    <section
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
      <div
        sx={{
          flex: "1",
          p: [3, 4, 6],
          div: { height: "100%", maxHeight: "600px" },
        }}
      >
        <Image image={section.blockImage.fluid} alt={section.blockImage.alt} />
      </div>

      <div
        sx={{
          flex: "1",
          p: [3, 4, 6],
          alignSelf: "center",
        }}
      >
        <Styled.h2 sx={{ color: "highlight", mb: 3 }}>
          {section.blockTitle}
        </Styled.h2>
        <div
          sx={{ mb: 5 }}
          dangerouslySetInnerHTML={createMarkup(
            section.blockDescriptionNode.childMarkdownRemark.html
          )}
        />
        {section.buttonLink && (
          <StyledLink
            href={section.buttonLink.slug}
            color="black"
            hovercolor="white"
          >
            {section.buttonLink.slug}
          </StyledLink>
        )}
        {section.externalBtnLink?.length > 0 && (
          <ExternalLink
            href={section.externalBtnLink}
            rel="noopener noreferrer"
            target="_blank"
            text={section.externalButtonLinkText}
            color="#111111"
            hovercolor="white"
          />
        )}
      </div>
    </section>
  );
};

export default PageSection;

PageSection.propTypes = {
  section: PropTypes.object.isRequired,
};
