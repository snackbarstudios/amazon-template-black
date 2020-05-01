/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Products = () => {
  const { datoCmsProductsSection } = useStaticQuery(
    graphql`
      query {
        datoCmsProductsSection {
          title
        }
      }
    `
  );
  return (
    <Layout>
      <h2>{datoCmsProductsSection.title}</h2>
    </Layout>
  );
};

export default Products;
