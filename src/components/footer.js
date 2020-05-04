/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Footer = () => {
  const { datoCmsFooter } = useStaticQuery(
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
          privacyTitle
          copyright
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
    privacyTitle,
    copyright,
  } = datoCmsFooter;

  return (
    <footer sx={{ background: "black", paddingY: 3, paddingX: 5 }}>
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <div xs={{ flex: "1" }}>
          <h2 sx={{ color: "white" }}>{contactDetailsHeading}</h2>
          {contactDetails.map(({ adressLine }, index) => (
            <p sx={{ color: "white" }} key={index}>
              {adressLine}
            </p>
          ))}
        </div>
        <div xs={{ flex: "1" }}>
          <h2 sx={{ color: "white" }}>{socialMediaHeading}</h2>
          {socialMedia.map(({ title, urlLink }, index) => (
            <p sx={{ color: "white" }} key={index}>
              {title}
              {urlLink}
            </p>
          ))}
        </div>
        <div xs={{ flex: "1" }}>
          <h2 sx={{ color: "white" }}>{privacyHeading}</h2>
          <h2 sx={{ color: "white" }}>{privacyTitle}</h2>
        </div>
      </div>
      <div>
        <p sx={{ color: "white" }}>
          © {new Date().getFullYear()} {copyright}. Powered by Snackbar Studios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
