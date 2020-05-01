/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const Contact = () => {
  const { datoCmsContactSection } = useStaticQuery(
    graphql`
      query {
        datoCmsContactSection {
          title
        }
      }
    `
  );

  return (
    <Layout>
      <h2>{datoCmsContactSection.title}</h2>
    </Layout>
  );
};

export default Contact;
