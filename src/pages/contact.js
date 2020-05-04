/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Contact = () => {
  const { datoCmsContactPage } = useStaticQuery(
    graphql`
      query {
        datoCmsContactPage {
          title
          slug
        }
      }
    `
  );

  return (
    <Layout>
      <h2>{datoCmsContactPage.title}</h2>
    </Layout>
  );
};

export default Contact;
