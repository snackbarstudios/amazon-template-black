/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";
import MainContainer from "../components/mainContainer";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";

const Contact = () => {
  const { datoCmsContactPage, datoCmsCompanyInformation } = useStaticQuery(
    graphql`
      query {
        datoCmsContactPage {
          title
          slug
          pageTitle
          image {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
        datoCmsCompanyInformation {
          companyAddressNode {
            childMarkdownRemark {
              html
            }
          }
          companyEmail
          companyName
          companyPhone
        }
      }
    `
  );

  const { pageTitle, title, image } = datoCmsContactPage;

  const {
    companyAddressNode,
    companyEmail,
    companyName,
    companyPhone,
  } = datoCmsCompanyInformation;

  const style = {
    paragraph: {
      fontSize: 2,
      fontFamily: "heading",
      fontWeight: "body",
      color: "text",
      margin: 0,
    },
    a: {
      color: "text",
      fontSize: 1,
      textDecoration: "none",
      display: "block",
      ":hover": {
        color: "highlight",
      },
    },
    image: {
      width: "100%",
      height: "100%",
      div: {
        width: "100%",
        height: "100%",
      },
    },
  };

  return (
    <Layout>
      <SEO title={title} />
      <MainContainer>
        <div
          sx={{
            paddingX: [0, 0, 4],
            pt: "118px",
            pb: "48px",
            display: "flex",
            flexDirection: ["column-reverse", "row", null],
          }}
        >
          <div
            sx={{
              flex: 1,
              backgroundColor: "primary",
            }}
          >
            <div sx={{ p: 5 }}>
              <div
                sx={{
                  color: "highlight",
                  fontFamily: "body",
                  textTransform: "uppercase",
                }}
              >
                <h1>{pageTitle}</h1>
              </div>
              <div sx={{ my: 3, color: "highlight" }}>
                <Styled.h2>{companyName}</Styled.h2>
              </div>
              <div
                sx={{
                  p: {
                    variant: "markdownText.p",
                  },
                  h1: {
                    variant: "markdownText.heading",
                  },
                  a: {
                    variant: "markdownText.a",
                  },
                }}
                dangerouslySetInnerHTML={createMarkup(
                  companyAddressNode.childMarkdownRemark.html
                )}
              />

              <div sx={{ mt: 4 }}>
                <a href={`tel:${companyPhone}`} sx={style.a}>
                  {companyPhone}
                </a>
                <a href={`mailto:${companyEmail}`} sx={style.a}>
                  {companyEmail}
                </a>
              </div>
            </div>
          </div>
          <div sx={{ flex: 1 }}>
            <div sx={style.image}>
              <Image alt={image.alt} image={image.fluid} />
            </div>
          </div>
        </div>
      </MainContainer>
    </Layout>
  );
};

export default Contact;
