/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";

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
      <img
        src={datoCmsLogo.brandLogo.fluid.src}
        alt={datoCmsLogo.brandLogo.alt}
        sx={{ marginBottom: "0" }}
      />
    </Link>
  );
};

export default Logo;
