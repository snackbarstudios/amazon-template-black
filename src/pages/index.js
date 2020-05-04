/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import LandingpageSection from "../components/landingpageSection";
import Quote from "../components/quote";

const IndexPage = () => {
  const { datoCmsLandingPage, allDatoCmsLandingPage } = useStaticQuery(
    graphql`
      query {
        datoCmsLandingPage {
          quote
        }
        allDatoCmsLandingPage {
          edges {
            node {
              id
              landinpageSection {
                id
                buttonLink {
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
                blockImage {
                  alt
                  fluid {
                    ...GatsbyDatoCmsFluid
                  }
                }
                blockDescription
                blockTitle
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
          {allDatoCmsLandingPage.edges.map(({node}) => (
            <LandingpageSection key={node.id} section={node} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
