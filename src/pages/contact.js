/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import MainContainer from "../components/mainContainer";

const Contact = () => {
  const { datoCmsContactPage } = useStaticQuery(
    graphql`
      query {
        datoCmsContactPage {
          phoneNumber
          pageTitle
          companyName
          email
          mapLink {
            latitude
            longitude
          }
        }
      }
    `
  );
  const { pageTitle } = datoCmsContactPage;

  return (
    <Layout>
      <MainContainer>
        <PageTitle>{pageTitle}</PageTitle>
      </MainContainer>
    </Layout>
  );
};

export default Contact;
