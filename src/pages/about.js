/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from "../components/pageSection";
import Parallax from "../components/parallax";

const About = () => {
  const { datoCmsAboutPage } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutPage {
          pageTitle
          ingressText
          ingressTitle
          bannerExternalLinkTitle
          bannerExternalLink
          bannerText
          bannerImage {
            fluid {
              src
            }
            alt
          }
          bannerLink {
            ... on DatoCmsProductsPage {
              id
              title
              slug
            }
            ... on DatoCmsContactPage {
              id
              slug
              title
            }
            ... on DatoCmsAboutPage {
              id
              title
              slug
            }
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
            buttonLink {
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
            externalBtnLink
            externalButtonLinkText
            id
          }
        }
      }
    `
  );

  const {
    pageTitle,
    bannerImage,
    bannerText,
    aboutSection,
    ingressText,
    ingressTitle,
    bannerLink,
    bannerExternalLinkTitle,
    bannerExternalLink,
  } = datoCmsAboutPage;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <main>
        <Parallax
          text={bannerText}
          imageURL={bannerImage.fluid.src}
          bannerExternalLink={bannerExternalLink}
          bannerLink={bannerLink}
          bannerExternalLinkTitle={bannerExternalLinkTitle}
        />
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
