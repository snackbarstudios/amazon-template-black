/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationDesktop from "./navigation/navigationDesktop";
import NavigationMobile from "./navigation/navigationMobile";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const { datoCmsCompanyInformation } = useStaticQuery(
    graphql`
      query {
        datoCmsCompanyInformation {
          instagramLink
          facebookLink
        }
      }
    `
  );

  const { instagramLink, facebookLink } = datoCmsCompanyInformation;

  return (
    <header
      sx={{
        position: "fixed",
        zIndex: "99",
        top: "0",
        width: "100%",
      }}
    >
      <NavigationDesktop facebook={facebookLink} instagram={instagramLink} />
      <NavigationMobile facebook={facebookLink} instagram={instagramLink} />
    </header>
  );
};

export default Header;
