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
          title
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title={datoCmsProductsPage.title} />
      <MainContainer>
        <PageTitle>{datoCmsProductsPage.title}</PageTitle>
        <section sx={{ py: 4 }}>
          {/* <PageSection section={aboutSection} /> */}
        </section>
      </MainContainer>
    </Layout>
  );
};

export default Products;
