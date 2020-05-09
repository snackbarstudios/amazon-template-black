/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from "../components/pageSection";
import Banner from "../components/banner";

const About = () => {
  const { datoCmsAboutPage } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutPage {
          pageTitle
          ingressText
          ingressTitle
          bannerImage {
            fluid {
              src
            }
            alt
          }

          aboutSection {
            blockDescription
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            blockTitle
            blockImage {
              alt
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );

  const {
    pageTitle,
    bannerImage,
    aboutSection,
    ingressText,
    ingressTitle,
  } = datoCmsAboutPage;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <main>
        <Banner image={bannerImage.fluid} />

        <section
          sx={{
            textAlign: "center",
            pt: 5,
            pb: 4,
            px: 4,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <h2
            sx={{
              fontSize: 3,
              fontFamily: "heading",
              fontWeight: "body",
              color: "text",
              mb: 4,
              display: "block",
            }}
          >
            {ingressTitle}
          </h2>
          <p>{ingressText}</p>
        </section>
        <section sx={{ py: 4 }}>
          {aboutSection.map((section) => (
            <PageSection key={section.id} section={section} />
          ))}
        </section>
      </main>
    </Layout>
  );
};

export default About;
