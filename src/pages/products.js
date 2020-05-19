/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Card from "../components/productCard/card";
import Layout from "../components/layout";
import MainContainer from "../components/mainContainer";

const Products = () => {
  const { datoCmsProductsPage } = useStaticQuery(
    graphql`
      query {
        datoCmsProductsPage {
          title
          slug
          productBlock {
            id
            heading
            price
            descriptionNode {
              childMarkdownRemark {
                html
              }
            }
            specificationTitle
            specificationListNode {
              childMarkdownRemark {
                html
              }
            }
            externalButtonText
            externalButtonLink
            imageGallery {
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

  const { title, productBlock } = datoCmsProductsPage;
  return (
    <Layout>
      <SEO title={title} />
      <MainContainer>
        <section sx={{ paddingX: [0, 0, 4], pt: "118px" }}>
          <Card section={productBlock} />
        </section>
      </MainContainer>
    </Layout>
  );
};

export default Products;
