/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";

const About = () => {
  const { datoCmsAboutSection } = useStaticQuery(
    graphql`
      query {
        datoCmsAboutSection {
          title
        }
      }
    `
  );
  return (
    <Layout>
      <h2>{datoCmsAboutSection.title}</h2>
    </Layout>
  );
};

export default About;
