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
          sectionTitle
        }
      }
    `
  );

  const { sectionTitle } = datoCmsPrivacySection;

  return (
    <Layout>
      <SEO title="Page two" />
      <h1>{sectionTitle}</h1>
      <p>This is Privacy page</p>
    </Layout>
  );
};

export default PrivacyPage;
