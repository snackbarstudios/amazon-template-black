/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import PageSection from "../components/pageSection";

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();
  const { datoCmsLandingPage, datoCmsColorMode } = useStaticQuery(
    graphql`
      query {
        datoCmsColorMode {
          light
          raspberrypie
          oceancalm
        }
        datoCmsColorMode {
          light
          raspberrypie
          oceancalm
        }
        datoCmsLandingPage {
          landinpageSection {
            id
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            blockDescription
            buttonLink {
              ... on DatoCmsProductsPage {
                id
                title
                slug
              }
              ... on DatoCmsContactPage {
                id
                title
                slug
              }
              ... on DatoCmsAboutPage {
                id
                title
                slug
              }
            }
            externalBtnLink
            externalButtonLinkText
            blockTitle
            blockImage {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          quote
        }
      }
    `
  );

  useEffect(() => {
    if (datoCmsColorMode.oceancalm) {
      setColorMode("oceanCalm");
    } else if (datoCmsColorMode.raspberrypie) {
      setColorMode("raspberryPie");
    } else {
      setColorMode("light");
    }
  }, [datoCmsColorMode.oceancalm, datoCmsColorMode.raspberrypie, setColorMode]);

  return (
    <Layout>
      <SEO title="Home" />
      <HeroSection />
      <main>
        <section>
          {datoCmsLandingPage.landinpageSection.map((node) => {
            return <PageSection key={node.id} section={node} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
