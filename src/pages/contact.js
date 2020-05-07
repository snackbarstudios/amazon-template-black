/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import PageContainer from "../components/pageContainer";
import MainContainer from "../components/mainContainer";
import Image from "../components/image";

const Contact = () => {
  const { datoCmsContactPage } = useStaticQuery(
    graphql`
      query {
        datoCmsContactPage {
          phoneNumber
          pageTitle
          companyName
          email
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
    phoneNumber,
    pageTitle,
    companyName,
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
      fontSize: 2,
      textDecoration: "none",
      display: "block",
      ":hover": {
        color: "highlight",
      },
    },
    image: {
      width: "100%",
      height: "100%",
      mb: [4, "0px", null],
      div: {
        width: "100%",
        height: "100%",
      },
    },
  };

  return (
    <Layout>
      <MainContainer>
        <PageContainer>
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
                <Styled.h1>{pageTitle}</Styled.h1>
                <Styled.h1>{companyName}</Styled.h1>
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
                <Image image={image.fluid} />
              </div>
            </div>
          </div>
        </PageContainer>
      </MainContainer>
    </Layout>
  );
};

export default Contact;
