/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import PageContainer from "../components/pageContainer";
import MainContainer from "../components/mainContainer";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";

const Contact = () => {
  const { datoCmsContactPage } = useStaticQuery(
    graphql`
      query {
        datoCmsContactPage {
          pageTitle
          phoneNumber
          email
          companyName
          adressNode {
            childMarkdownRemark {
              html
            }
          }
          image {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
  const {
    pageTitle,
    companyName,
    adressNode,
    phoneNumber,
    email,
    image,
  } = datoCmsContactPage;

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
      <MainContainer>
        {/* <PageContainer> */}
        <div
          sx={{
            display: "flex",
            flexDirection: ["column-reverse", "row", null],
            width: "100%",
            height: "100%",
          }}
        >
          <div
            sx={{
              flex: 1,
              backgroundColor: "primary",
            }}
          >
            <div sx={{ p: 5 }}>
              <div sx={{ color: "highlight" }}>
                <Styled.h2>{pageTitle}</Styled.h2>
              </div>
              <div sx={{ my: 3 }}>
                <Styled.h3>{companyName}</Styled.h3>
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
                  adressNode.childMarkdownRemark.html
                )}
              />

              <div sx={{ mt: 4 }}>
                <a href={`tel:${phoneNumber}`} sx={style.a}>
                  {phoneNumber}
                </a>
                <a href={`mailto:${email}`} sx={style.a}>
                  {email}
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
        {/* </PageContainer> */}
      </MainContainer>
    </Layout>
  );
};

export default Contact;
