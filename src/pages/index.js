/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import PageSection from "../components/pageSection";
import Parallax from "../components/parallax";

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
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
          ingress
          bannerExternalLink
          bannerExternalLinkTitle
          bannerLink {
            ... on DatoCmsProductsPage {
              id
              slug
              title
            }
            ... on DatoCmsContactPage {
              id
              slug
              title
            }
            ... on DatoCmsAboutPage {
              id
              slug
              title
            }
          }
          bannerText
          parallaxImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
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

  const {
    landinpageSection,
    ingress,
    parallaxImage,
    bannerText,
    bannerExternalLink,
    bannerExternalLinkTitle,
    bannerLink,
  } = datoCmsLandingPage;
  return (
    <Layout>
 <SEO title="Home" />
      <HeroSection />
      <main>
        <section sx={{ my: 6 }}>
          <p
            sx={{ textAlign: "center", maxWidth: "800px", m: "0 auto", mb: 6 }}
          >
            {ingress}
          </p>
          <aside sx={{ mb: 6 }}>
            <Parallax
              text={bannerText}
              imageURL={parallaxImage.fluid.src}
              bannerExternalLink={bannerExternalLink}
              bannerLink={bannerLink}
              bannerExternalLinkTitle={bannerExternalLinkTitle}
            />
          </aside>
          {landinpageSection.map((node) => {
            return <PageSection key={node.id} section={node} />;
          })}
        </section>
      </main>
    </Layout>
  );
};

export default IndexPage;
