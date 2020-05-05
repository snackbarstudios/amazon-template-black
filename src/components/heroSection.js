/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
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
        height: ["calc(100vh - 60px)"],
        flexDirection: ["column-reverse", null, "row"],
      }}
    >
      <div sx={{ flex: "2", backgroundColor: "primary" }}>
        <div
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: ["flex-end", "center", "flex-end"],
            height: "100%",
          }}
        >
          <Styled.h1 sx={{ color: "highlight", lineHeight: 1, mb: "24px" }}>
            {heroTitle}
          </Styled.h1>
          <p
            sx={{
              color: "white",
              fontSize: [3, 4],
              fontWeight: "heading",
              mb: 4,
            }}
          >
            {heroDescription}
          </p>
          <a
            href={heroLink.slug}
            sx={{
              color: "highlight",
              textTransform: "capitalize",
              fontSize: [3, 4],
              fontWeight: "heading",
              textDecoration: "none",
              position: "relative",
              mb: [0, null, 4],

              "::after": {
                content: '" "',
                display: "block",
                width: "15%",
                pt: 2,
                borderBottom: "2px solid",
                borderColor: "highlight",
                transition: "0.2s",
                borderRadius: "2px",
              },
              ":hover::after": {
                width: "30%",
              },
            }}
          >
            {heroLink.slug}
          </a>
        </div>
      </div>
      <div
        sx={{
          flex: "3",
          position: "relative",
          pt: [0, null, 4],
          backgroundColor: "primary",
        }}
      >
        <ImageSlider slides={heroImageSlider} />
      </div>
    </div>
  );
};

export default HeroSection;
