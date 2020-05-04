/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import LandingpageSection from "../components/landingpageSection";
import Quote from "../components/quote";

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
      <main sx={{ maxWidth: "1024px", margin: "32px auto" }}>
        <section sx={{ paddingX: [2, null] }}>
          <Quote />
          <h2 sx={{ textAlign: "center", marginTop: "-24px" }}>
            {datoCmsLandingPage.quote}
          </h2>
        </section>
        <section sx={{ paddingY: 4 }}>
          {allDatoCmsLandingpageBlock.edges.map((section) => (
            <LandingpageSection key={section.node.id} section={section.node} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
