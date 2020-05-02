
/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql, Link } from "gatsby";
import LandingpageSection from "../components/landingpageSection";

const IndexPage = () => {
  const { datoCmsLandingPage, allDatoCmsLandingpageBlock } = useStaticQuery(
    graphql`
      query {
        datoCmsLandingPage {
          quote
        }
        allDatoCmsLandingpageBlock {
          edges {
            node {
              id
              blockTitle
              buttonLink {
                ... on DatoCmsProductsSection {
                  id
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
              blockDescription
              blockImage {
                alt
                fluid {
                  ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <div sx={{ maxWidth: "960px", margin: "0 auto" }}>
        <h1>"</h1>
        <h2 sx={{ textAlign: "center" }}>{datoCmsLandingPage.quote}</h2>
        {allDatoCmsLandingpageBlock.edges.map((section) => (
          <LandingpageSection key={section.node.id} section={section.node} />
        ))}
      </div>
    </Layout>
  );
};

export default IndexPage;
