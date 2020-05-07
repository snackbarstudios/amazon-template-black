/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageSection from "../components/pageSection";
import MainContainer from "../components/mainContainer";
import PageTitle from "../components/pageTitle";
import Image from "../components/image";

const About = () => {
  const { datoCmsAboutPage } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutPage {
          banner {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          slug
          title
          pageTitle
          ingressText
          ingressTitle
          aboutSection {
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
    `
  );

  const {
    banner,
    ingressText,
    ingressTitle,
    pageTitle,
    aboutSection,
  } = datoCmsAboutPage;

  return (
    <Layout>
      <SEO title={ingressTitle} />
      <MainContainer>
        <div sx={{ height: "400px" }}>
          <Image image={banner.fluid} />
        </div>
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
              fontSize: 4,
              fontFamily: "heading",
              fontWeight: "body",
              color: "text",
              mb: 4,
              display: "block",
              "::after": {
                content: '" "',
                display: "block",
                width: "15%",
                mx: "auto",
                pt: 3,
                borderBottom: "2px solid",
                borderColor: "highlight",
              },
            }}
          >
            {ingressTitle}
          </h2>
          <p>{ingressText}</p>
        </section>
        <section sx={{ py: 4 }}>
          <PageSection section={aboutSection} />
        </section>
      </MainContainer>
    </Layout>
  );
};

export default About;
