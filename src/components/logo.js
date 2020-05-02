/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

const Logo = () => {
  const { datoCmsLogo } = useStaticQuery(
    graphql`
      query {
        datoCmsLogo {
          brandLogo {
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
    <Link to="/">
      <Img
        fluid={datoCmsLogo.brandLogo.fluid}
        alt={datoCmsLogo.brandLogo.alt}
      />
    </Link>
  );
};

export default Logo;
