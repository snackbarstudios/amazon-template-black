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
      <div sx={{ display: "flex" }}>
        <div>
          <p>{contactDetailsHeading}</p>
          {contactDetails.map(({ adressLine }, index) => (
            <p key={index}>{adressLine}</p>
          ))}
        </div>
        <div>
          <p>{socialMediaHeading}</p>
          {socialMedia.map(({ title, urlLink }, index) => (
            <p key={index}>
              {title}
              {urlLink}
            </p>
          ))}
        </div>
        <div>
          <p>{privacyHeading}</p>
          <p>{privacyTitle}</p>
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
