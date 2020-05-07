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
            childMarkdownRemark {
              html
            }
          }
        }
      }
    `
  );

  // const { pageTitle, textNode } = datoCmsPrivacySection;
  const { pageTitle, textNode } = datoCmsPrivacySection;
  console.log(textNode);

  function createMarkup() {
    return { __html: textNode.childMarkdownRemark.html };
  }

  return (
    <Layout>
      <SEO title="Page two" />
      <MainContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <div
          sx={{
            px: 4,
            h1: {
              fontSize: [3],
              fontFamily: "heading",
              fontWeight: "heading",
              color: "text"            },
          }}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </MainContainer>
    </Layout>
  );
};

export default PrivacyPage;
