/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Card from "../components/Card";
import Layout from "../components/layout";
import MainContainer from "../components/mainContainer";

const Products = () => {
  const { datoCmsProductsPage } = useStaticQuery(
    graphql`
      query {
        datoCmsProductsPage {
          title
          productPageSection {
            id
            blockTitle
            price
            blockDescription
            blockDescriptionNode {
              childMarkdownRemark {
                html
              }
            }
            externalBtnLink
            externalButtonLinkText
            specificationHeading
            specificationTextNode {
              childMarkdownRemark {
                html
              }
            }
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

  const { title, productPageSection } = datoCmsProductsPage;

  return (
    <Layout>
      <SEO title={title} />
      <MainContainer>
        <section sx={{ paddingX: 4 }}>
          <Card section={productPageSection} />
        </section>
      </MainContainer>
    </Layout>
  );
};

export default Products;
