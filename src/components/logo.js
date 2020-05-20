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
    <Link
      to="/"
      sx={{ width: "30px", maxHeight: `70px`, height: "70px", py: 2}}
    >
      {datoCmsLogo.brandLogo && (
        <Img
          fluid={datoCmsLogo.brandLogo.fluid}
          alt={datoCmsLogo.brandLogo.alt}
          style={{ maxHeight: "100%" }}
          imgStyle={{ objectFit: "contain" }}
        />
      )}
    </Link>
  );
};

export default Logo;
