/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import PageSection from "../components/pageSection";
import Layout from "../components/layout";
import MainContainer from "../components/mainContainer";
import PageTitle from "../components/pageTitle";

const Products = () => {
  const { datoCmsProductsPage } = useStaticQuery(
    graphql`
      query {
        datoCmsProductsPage {
          pageTitle
          productPageSection {
            id
            blockDescription
            blockTitle
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
                slug
                title
              }
            }
            externalButtonLinkText
            externalBtnLink
            blockImage {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `
  );

  const { pageTitle, productPageSection } = datoCmsProductsPage;

  return (
    <Layout>
      <SEO title={pageTitle} />
      <MainContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <section sx={{ paddingX: 4 }}>
          <PageSection
            section={productPageSection}
            key={productPageSection.id}
          />
        </section>
      </MainContainer>
    </Layout>
  );
};

export default Products;
