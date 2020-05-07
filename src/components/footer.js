/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Hr from "./hr";
import { createMarkup } from "../utils/functions";

const Footer = () => {
  const { datoCmsFooter, datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsFooter {
          contactDetailsHeading
          adressNode {
            childMarkdownRemark {
              html
            }
          }
          email
          phoneNumber
          socialMediaHeading
          socialMediaLinks {
            title
            urlLink
          }
          privacyHeading
          privacyLink
          copyright
        }
        datoCmsPrivacySection {
          slug
        }
      }
    `
  );

  const {
    contactDetailsHeading,
    adressNode,
    email,
    phoneNumber,
    socialMediaHeading,
    socialMediaLinks,
    privacyHeading,
    privacyLink,
    copyright,
  } = datoCmsFooter;

  const { slug } = datoCmsPrivacySection;

  return (
    <footer
      sx={{
        backgroundColor: "text",
        pb: 3,
        px: [3, "0px", null],
      }}
    >
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row", null],
          justifyContent: "space-between",
        }}
      >
        <div sx={{ flex: "1", mx: [0, 3, 5] }}>
          <Styled.h4 sx={{ color: "background", mb: 2, mt: 4 }}>
            {contactDetailsHeading}
          </Styled.h4>
          <div sx={{ mb: 2 }}>
            <Hr />
          </div>
          <div
            sx={{
              p: {
                variant: "markdownText.p",
                color: "background",
              },
            }}
            dangerouslySetInnerHTML={createMarkup(
              adressNode.childMarkdownRemark.html
            )}
          />
          <a
            href={`tel:${phoneNumber}`}
            sx={{
              color: "background",
              fontSize: 1,
              textDecoration: "none",
              display: "block",
              ":hover": {
                fontWeight: "heading",
              },
            }}
          >
            {phoneNumber}
          </a>
          <a
            href={`mailto:${email}`}
            sx={{
              color: "background",
              fontSize: 1,
              textDecoration: "none",
              display: "block",
              ":hover": {
                fontWeight: "heading",
              },
            }}
          >
            {email}
          </a>
        </div>
        <div sx={{ flex: "1", mx: [0, 3, 5] }}>
          <Styled.h4 sx={{ color: "background", mb: 2, mt: 4 }}>
            {socialMediaHeading}
          </Styled.h4>
          <div sx={{ mb: 2 }}>
            <Hr />
          </div>
          {socialMediaLinks.map(({ title, urlLink }, index) => (
            <a
              key={index}
              href={urlLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                fontSize: 1,
                display: "block",
                color: "background",
                textDecoration: "none",
                ":hover": {
                  fontWeight: "heading",
                },
              }}
            >
              {title}
            </a>
          ))}
        </div>
        <div sx={{ flex: "1", mx: [0, 3, 5] }}>
          <Styled.h4 sx={{ color: "background", mb: 2, mt: 4 }}>
            {privacyHeading}
          </Styled.h4>
          <div sx={{ mb: 2 }}>
            <Hr />
          </div>
          <Link
            to={slug}
            aria-label={`Link to ${slug}`}
            sx={{
              color: "background",
              fontSize: 1,
              textDecoration: "none",
              ":hover": {
                fontWeight: "heading",
              },
            }}
          >
            {privacyLink}
          </Link>
        </div>
      </div>
      <div sx={{ mx: [0, 3, 5] }}>
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
    </footer>
  );
};

export default Footer;
