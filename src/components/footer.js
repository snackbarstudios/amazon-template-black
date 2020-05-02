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
    <footer>
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <div xs={{ flex: "1" }}>
          <h2>{contactDetailsHeading}</h2>
          {contactDetails.map(({ adressLine }, index) => (
            <p key={index}>{adressLine}</p>
          ))}
        </div>
        <div xs={{ flex: "1" }}>
          <h2>{socialMediaHeading}</h2>
          {socialMedia.map(({ title, urlLink }, index) => (
            <p key={index}>
              {title}
              {urlLink}
            </p>
          ))}
        </div>
        <div xs={{ flex: "1" }}>
          <h2>{privacyHeading}</h2>
          <h2>{privacyTitle}</h2>
        </div>
      </div>
      <div>
        <p>
          © {new Date().getFullYear()} {copyright}. Powered by Snackbar Studios
        </p>
      </div>
    </footer>
  );
};

export default Footer;
