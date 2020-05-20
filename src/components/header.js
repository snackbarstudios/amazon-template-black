/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationDesktop from "./navigation/navigationDesktop";
import NavigationMobile from "./navigation/navigationMobile";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const { datoCmsCompanyInformation, datoCmsLogo } = useStaticQuery(
    graphql`
      query {
        datoCmsCompanyInformation {
          facebookLink
          instagramLink
          twitterLink
          pintrestLink
        }
        datoCmsLogo {
          brandLogo {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
          mobileLogo {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );

  const {
    instagramLink,
    facebookLink,
    pintrestLink,
    twitterLink,
  } = datoCmsCompanyInformation;

  const { mobileLogo, brandLogo } = datoCmsLogo;

  return (
    <header
      sx={{
        position: "fixed",
        zIndex: "99",
        top: "0",
        width: "100%",
      }}
    >
      <NavigationDesktop
        facebook={facebookLink}
        instagram={instagramLink}
        twitter={twitterLink}
        pintrest={pintrestLink}
        brandLogo={brandLogo}
      />
      <NavigationMobile
        facebook={facebookLink}
        instagram={instagramLink}
        twitter={twitterLink}
        pintrest={pintrestLink}
        brandLogo={brandLogo}
        mobileLogo={mobileLogo}
      />
    </header>
  );
};

export default Header;
