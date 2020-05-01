/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import NavigationMobile from "./navigationMobile";
import NavigationDesktop from "./navigationDesktop";

const Navigation = () => {
  const { datoCmsHeader } = useStaticQuery(
    graphql`
      query {
        datoCmsHeader {
          logo {
            alt
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    `
  );
  return (
    <div>
      <NavigationMobile logo={datoCmsHeader.logo} />
      <NavigationDesktop logo={datoCmsHeader.logo} />
    </div>
  );
};

export default Navigation;
