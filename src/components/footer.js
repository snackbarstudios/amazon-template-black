/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import { createMarkup } from "../utils/functions";
import InstagramIcon from "./Icons/instagramIcon";
import FacebookIcon from "./Icons/facebookIcon";
import NavigationLink from "./navigation/navigationLink";

const Footer = () => {
  const { datoCmsFooter, datoCmsCompanyInformation } = useStaticQuery(
    graphql`
      query {
        datoCmsFooter {
          copyright
          privacyPolicyLink {
            title
            pageTitle
            slug
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

  const { copyright, privacyPolicyLink } = datoCmsFooter;

  const { slug } = privacyPolicyLink;

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
  };

  const linkStyle = {
    display: "block",
    textDecoration: "none",
    fontFamily: "body",
    color: "text",
    p: {
      display: "inline-block",
      mx: 0,
      my: 0,

      "::after": {
        content: '" "',
        display: "block",
        width: "0%",
        borderBottom: "1px solid",
        borderColor: "text",
        transition: "0.2s",
        borderRadius: "2px",
        mr: "auto",
      },
      ":hover": {
        "::after": {
          width: "100%",
        },
      },
      ":active": {
        "::after": {
          width: "100%",
        },
      },
      "&.active": {
        "::after": {
          width: "100%",
        },
      },
    },
  };

  return (
    <footer
      sx={{
        backgroundColor: "primary",
        p: [3, 4, 6],
      }}
    >
      <div sx={{ display: "flex" }}>
        <div>
          <Styled.h4 sx={{ mb: 2 }}>{companyName}</Styled.h4>
          <div
            sx={{
              mb: 2,
              p: {
                variant: "markdownText.p",
                color: "text",
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              companyAddressNode.childMarkdownRemark.html
            )}
          />
          <a sx={linkStyle} href={`tel:${companyPhone}`}>
            <p>{companyPhone}</p>
          </a>
          <a sx={linkStyle} href={`mailto:${companyEmail}`}>
            <p>{companyEmail}</p>
          </a>
          <p
            sx={{
              color: "text",
              fontSize: 0,
            }}
          >
            © {new Date().getFullYear()} {copyright}.
            <a
              href="https://www.snackbarstudios.se/"
              sx={{
                color: "text",
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
        <div>
          <div sx={{ display: "flex", flexDirection: "column" }}>
            <div sx={{ display: "flex" }}>
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <InstagramIcon width="25px" fill="black" />
                </a>
              )}
              {facebookLink && (
                <a
                  sx={{ ml: 3 }}
                  href={facebookLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FacebookIcon width="16px" fill="black" />
                </a>
              )}
            </div>

            <Link to={`/about/`} aria-label={`Link to about`}>
              About
            </Link>
            <Link to={`/products/`} aria-label={`Link to products`}>
              Products
            </Link>
            <Link to={`/contact/`} aria-label={`Link to contact`}>
              Contact
            </Link>
            <Link to={slug} aria-label={`Link to ${slug}`}>
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
