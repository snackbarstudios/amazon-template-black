/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Hr from "./hr";
import { createMarkup } from "../utils/functions";

const Footer = () => {
  const { datoCmsFooter, datoCmsCompanyInformation } = useStaticQuery(
    graphql`
      query {
        datoCmsFooter {
          copyright
          privacyPolicyLink {
            title
            pageTitle
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
          facebookLink
          instagramLink
        }
      }
    `
  );

  const {
    companyAddressNode,
    companyEmail,
    companyName,
    companyPhone,
    facebookLink,
    instagramLink,
  } = datoCmsCompanyInformation;

  const {
    copyright,
    privacyPolicyLink
  } = datoCmsFooter;

  // const { slug } = datoCmsPrivacySection;

  const style = {
    heading: {
      color: "text",
      mb: 2,
      mt: 3,
    },
    link: {
      color: "text",
      fontSize: 1,
      textDecoration: "none",
      display: "block",
      ":hover": {
        color: "highlight",
      },
    },
    flex: {
      flex: "1",
      mx: [0, 3, 5],
    },
    hr: {
      mb: 2,
    },
  };

  return (
    <footer
      sx={{
        backgroundColor: "primary",
        pb: 2,
        px: [3, "0px", null],
      }}
    >
      <div sx={{ display: "flex" }}>
        <div>
          <Styled.h3>{companyName}</Styled.h3>
          <div
            sx={{
              p: {
                variant: "markdownText.p",
                color: "text",
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              companyAddressNode.childMarkdownRemark.html
            )}
          />
          <p>{companyEmail}</p>
          <p>{companyPhone}</p>
          <p
            sx={{
              color: "background",
              fontSize: 0,
              mt: 4,
              mb: 0,
            }}
          >
            © {new Date().getFullYear()} {copyright}.
            <a
              href="https://www.snackbarstudios.se/"
              sx={{
                color: "background",
                fontSize: 0,
                textDecoration: "none",
                ":hover": {
                  fontWeight: "heading",
                },
              }}
            >
              &nbsp;Powered by Snackbar Studios
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
