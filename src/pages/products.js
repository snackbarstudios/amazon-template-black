/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Products = () => {
  const { datoCmsProductsPage } = useStaticQuery(
    graphql`
      query {
        datoCmsProductsPage {
          title
        }
      }
    `
  );
  return (
    <Layout>
      <h2>{datoCmsProductsPage.title}</h2>
    </Layout>
  );
};

export default Products;
