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
          companyName
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
    companyName,
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

  const style = {
    heading: {
      color: "background",
      mb: 2,
      mt: 5,
    },
    link: {
      color: "background",
      fontSize: 1,
      textDecoration: "none",
      display: "block",
      ":hover": {
        fontWeight: "heading",
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
        backgroundColor: "text",
        pb: 2,
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
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{contactDetailsHeading}</Styled.h4>
          <div sx={style.hr}>
            <Hr />
          </div>
          <p
            sx={{
              color: "background",
              fontSize: 1,
              m: 0,
              mb: 1,
            }}
          >
            {companyName}
          </p>
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
          <div sx={{ pt: 2 }}>
            <a href={`tel:${phoneNumber}`} sx={style.link}>
              {phoneNumber}
            </a>
            <a href={`mailto:${email}`} sx={style.link}>
              {email}
            </a>
          </div>
        </div>
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{socialMediaHeading}</Styled.h4>
          <div sx={style.hr}>
            <Hr />
          </div>
          {socialMediaLinks.map(({ title, urlLink }, index) => (
            <a
              key={index}
              href={urlLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={style.link}
            >
              {title}
            </a>
          ))}
        </div>
        <div sx={style.flex}>
          <Styled.h4 sx={style.heading}>{privacyHeading}</Styled.h4>
          <div sx={style.hr}>
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
