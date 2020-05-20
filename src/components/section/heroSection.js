/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import ExternalLink from "../link/externalLink";
import StyledLink from "../link/styledLink";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
            alt
          }
          externalHeroLink {
            id
            linkTitle
            linkUrl
          }
          heroText
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
        }
      }
    `
  );

  const {
    heroImage,
    externalHeroLink,
    heroText,
    heroLink,
  } = datoCmsHeroSection;

  return (
    <BackgroundImage
      fluid={heroImage.fluid}
      backgroundColor={`#F1F1EF`}
      style={{
        height: "100vh",
      }}
    >
      <div
        sx={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          m: "auto",
          p: 2,
          h1: {
            mt: 6,
          },
          a: {
            mt: 4,
          },
        }}
      >
        <Styled.h1 sx={{ maxWidth: "800px" }}>{heroText}</Styled.h1>
        {heroLink && (
          <StyledLink
            href={heroLink.slug}
            text={heroLink.slug}
            color="white"
            hovercolor="#111111"
          />
        )}
        {externalHeroLink?.length > 0 &&
          externalHeroLink.map((link) => {
            return (
              <ExternalLink
                key={link.id}
                href={link.linkUrl}
                text={link.linkTitle}
                color="white"
                hovercolor="#111111"
              />
            );
          })}
      </div>
    </BackgroundImage>
  );
};

export default HeroSection;
