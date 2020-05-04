/** @jsx jsx */
import { jsx } from "theme-ui";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "../components/image";

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
      <div sx={{ width: "100px" }}>
        <Image
          image={datoCmsLogo.brandLogo.fluid}
          alt={datoCmsLogo.brandLogo}
        />
      </div>
    </Link>
  );
};

export default Logo;
