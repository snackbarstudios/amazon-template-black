/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import OutlineButton from "./outlineButton";
import { useStaticQuery, graphql } from "gatsby";
import ImageSlider from "./imageSlider";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroLink {
            ... on DatoCmsProductsPage {
              id
              slug
            }
            ... on DatoCmsContactPage {
              id
              slug
            }
            ... on DatoCmsAboutPage {
              id
              slug
            }
          }
          heroTitle
          heroDescription
          heroImageSlider {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
  const {
    heroLink,
    heroTitle,
    heroDescription,
    heroImageSlider,
  } = datoCmsHeroSection;
  return (
    <div
      sx={{
        display: "flex",
        height: ["100vh", "50vh", "80vh"],
        flexDirection: ["column-reverse", "row"],
        mt: "-80px",
      }}
    >
      <div sx={{ flex: "1", backgroundColor: "primary" }}>
        <div
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <Styled.h1 sx={{ color: "highlight" }}>{heroTitle}</Styled.h1>
          <p>{heroDescription}</p>
          <OutlineButton text={heroLink.slug} href={heroLink.slug} />
        </div>
      </div>
      <div sx={{ flex: "1", position: "relative" }}>
        <ImageSlider slides={heroImageSlider} />
      </div>
    </div>
  );
};

export default HeroSection;
