/** @jsx jsx */
import { jsx, useColorMode } from "theme-ui";
import { useEffect } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import MainContainer from "../components/mainContainer";
import HeroSection from "../components/heroSection";
import { useStaticQuery, graphql } from "gatsby";
import PageSection from "../components/pageSection";
import Quote from "../components/quote";

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();
  const {
    datoCmsLandingPage,
    allDatoCmsLandingPage,
    datoCmsColorMode,
  } = useStaticQuery(
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
      <MainContainer>
        <section sx={{ paddingX: [2, null], position: "relative" }}>
          <div sx={{ position: "absolute", left: "20px", top: "-40px" }}>
            <Quote
              width={40}
              fill={
                colorMode === "raspberryPie"
                  ? "#63323A"
                  : colorMode === "oceanCalm"
                  ? "#1B5976"
                  : "#B77C16"
              }
            />
          </div>
          <h2
            sx={{
              marginX: "auto",
              textAlign: "center",
              mb: 4,
              fontSize: 5,
              fontFamily: "body",
              fontWeight: "heading",
              color: "text",
              lineHeight: 1.2,
              mt: "96px",
              textTransform: "uppercase",
            }}
          >
            {datoCmsLandingPage.quote}
          </h2>
          <div sx={{ position: "absolute", right: "20px", bottom: "-40px" }}>
            <Quote
              width={40}
              fill={
                colorMode === "raspberryPie"
                  ? "#63323A"
                  : colorMode === "oceanCalm"
                  ? "#1B5976"
                  : "#B77C16"
              }
            />
          </div>
        </section>
        <section sx={{ paddingX: 4 }}>
          {allDatoCmsLandingPage.edges.map(({ node }) => (
            <PageSection key={node.id} section={node.landinpageSection} />
          ))}
        </section>
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;
