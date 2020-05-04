/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

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
          ingress {
            ingressText
            ingressTitle
          }
          slug
          title
          pageTitle
        }
      }
    `
  );
  return (
    <Layout>
      <h2>{datoCmsAboutPage.title}</h2>
    </Layout>
  );
};

export default About;
