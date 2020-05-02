/** @jsx jsx */
import { jsx } from "theme-ui";
import OutlineButton from "./outlineButton";
import { useStaticQuery, graphql } from "gatsby";

const HeroSection = () => {
  const { datoCmsHeroSection } = useStaticQuery(
    graphql`
      query {
        datoCmsHeroSection {
          heroLink {
            ... on DatoCmsProductsSection {
              slug
            }
            ... on DatoCmsContactSection {
              id
              slug
            }
            ... on DatoCmsAboutSection {
              id
              slug
            }
          }
          heroTitle
          heroDescription
          heroImage {
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
    heroImage,
  } = datoCmsHeroSection;
  return (
    <div sx={{ display: "flex", height: "60vh" }}>
      <div sx={{ flex: "1", backgroundColor: "primary" }}>
        <div
          sx={{
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <h1 sx={{ color: "highlight" }}>{heroTitle}</h1>
          <p>{heroDescription}</p>
          <OutlineButton text={heroLink.slug} href={heroLink.slug} />
        </div>
      </div>
      <div sx={{ flex: "1" }}>
        <img
          sx={{
            objectFit: "cover",
            objectPosition: "center",
            height: "100%",
            width: "100%",
          }}
          src={heroImage.fluid.src}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;
