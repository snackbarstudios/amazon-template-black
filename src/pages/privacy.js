/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageTitle from "../components/pageTitle";
import MainContainer from "../components/mainContainer";

const PrivacyPage = () => {
  const { datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsPrivacySection {
          pageTitle
          textNode {
            internal {
              content
            }
          }
        }
      }
    `
  );

  // const { pageTitle, textNode } = datoCmsPrivacySection;
  const {
    pageTitle,
    textNode: {
      internal: { content },
    },
  } = datoCmsPrivacySection;
  // console.log(textNode);

  return (
    <Layout>
      <SEO title="Page two" />
      <MainContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <div>{content}</div>
      </MainContainer>
    </Layout>
  );
};

export default PrivacyPage;
