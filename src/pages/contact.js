/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import PageContainer from "../components/pageContainer";
import MainContainer from "../components/mainContainer";
import Image from "../components/image";
import OutlineButton from "../components/outlineButton";

const Contact = () => {
  // const { datoCmsContactPage } = useStaticQuery(
  //   graphql`
  //     query {
  //       datoCmsContactPage {
  //         phoneNumber
  //         pageTitle
  //         companyName
  //         address {
  //           addressLine
  //         }
  //         email
  //         mapButtonText
  //         mapButtonLink {
  //           latitude
  //           longitude
  //         }
  //         image {
  //           alt
  //           fluid {
  //             ...GatsbyDatoCmsFluid
  //           }
  //         }
  //       }
  //     }
  //   `
  // );
  // const {
  //   phoneNumber,
  //   pageTitle,
  //   companyName,
  //   address,
  //   email,
  //   mapButtonText,
  //   mapButtonLink,
  //   image,
  // } = datoCmsContactPage;

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
      overflow: "hidden",
      mb: [4, "0px", null],
    },
  };

  return (
    <Layout>
      {/* <MainContainer>
        <PageTitle>{pageTitle}</PageTitle>
        <PageContainer>
          <div
            sx={{
              display: "flex",
              flexDirection: ["column-reverse", "row", null],
            }}
          >
            <div sx={{ flex: 1, pr: ["0px", 4, null], pt: ["0px", null, 4] }}>
              <Styled.h2>{companyName}</Styled.h2>
              {address.map(({ addressLine }, index) => (
                <p key={index} sx={style.paragraph}>
                  {addressLine}
                </p>
              ))}
              <div sx={{ mt: 4, mb: [4, null, 5] }}>
                <a href={`tel:${phoneNumber}`} sx={style.a}>
                  {phoneNumber}
                </a>
                <a href={`mailto:${email}`} sx={style.a}>
                  {email}
                </a>
              </div>
              <OutlineButton
                text={mapButtonText}
                target="_blank"
                rel="noreferrer noopener"
                href={`https://www.google.com/maps/search/?api=1&query${mapButtonLink.latitude}${mapButtonLink.longitude}`}
              />
            </div>
            <div sx={{ flex: 2 }}>
              <div sx={style.image}>
                <Image image={image.fluid} />
              </div>
            </div>
          </div>
        </PageContainer>
      </MainContainer> */}
    </Layout>
  );
};

export default Contact;
