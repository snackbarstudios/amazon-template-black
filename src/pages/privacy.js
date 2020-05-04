/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const PrivacyPage = () => {
  const { datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsPrivacySection {
          title
        }
      }
    `
  );

  const { title } = datoCmsPrivacySection;

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{title}</h1>
      <p>This is Privacy page</p>
    </Layout>
  );
};

export default PrivacyPage;
