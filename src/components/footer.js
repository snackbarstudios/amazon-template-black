/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Hr from "./hr";

const Footer = () => {
  const { datoCmsFooter, datoCmsPrivacySection } = useStaticQuery(
    graphql`
      query {
        datoCmsFooter {
          contactDetailsHeading
          contactDetails {
            adressLine
          }
          socialMediaHeading
          socialMedia {
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
    contactDetails,
    socialMediaHeading,
    socialMedia,
    privacyHeading,
    privacyLink,
    copyright,
  } = datoCmsFooter;

  const { slug } = datoCmsPrivacySection;

  return (
    <footer
      sx={{
        minHeight: "200px",
        backgroundColor: "text",
        pb: 3,
        px: 4,
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
          <Styled.h4 sx={{ color: "background" }}>
            {contactDetailsHeading}
          </Styled.h4>
          <div sx={{ mb: 3 }}>
            <Hr />
          </div>
          {contactDetails.map(({ adressLine }, index) => (
            <Styled.p sx={{ color: "background" }} key={index}>
              {adressLine}
            </Styled.p>
          ))}
        </div>
        <div sx={{ flex: "1", mx: [0, 3, 5] }}>
          <Styled.h4 sx={{ color: "background" }}>
            {socialMediaHeading}
          </Styled.h4>
          <div sx={{ mb: 3 }}>
            <Hr />
          </div>
          {socialMedia.map(({ title, urlLink }, index) => (
            <a
              key={index}
              href={urlLink}
              target="_blank"
              rel="noreferrer noopener"
              sx={{
                display: "flex",
                flexDirection: "column",
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
          <Styled.h4 sx={{ color: "background" }}>{privacyHeading}</Styled.h4>
          <div sx={{ mb: 3 }}>
            <Hr />
          </div>
          <Link
            to={slug}
            aria-label={`Link to ${slug}`}
            sx={{
              color: "background",
              fontSize: 2,
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
            fontSize: 1,
            mt: 4,
            mb: 0,
          }}
        >
          © {new Date().getFullYear()} {copyright}.
          <a
            href="https://www.snackbarstudios.se/"
            sx={{
              color: "background",
              fontSize: 1,
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
