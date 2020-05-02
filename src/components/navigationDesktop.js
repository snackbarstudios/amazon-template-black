/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";

const NavigationDesktop = ({ logo }) => {
  return (
    <div
      sx={{
        display: ["none", "block"],
        position: "fixed",
        top: "0",
        width: "100%",
        left: "0",
      }}
    >
      <div
        sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}
      >
        <div sx={{ width: "30%" }}>
          <img src={logo.fluid.src} alt={logo.alt} />
        </div>
        <div sx={{ width: "30%" }}>
          <ul sx={{ display: "flex", justifyContent: "flex-end" }}>
            <li sx={{ listStyle: "none", marginX: 2 }}>
              <AnchorLink href={`/about/`}>About</AnchorLink>
            </li>
            <li sx={{ listStyle: "none", marginX: 2 }}>
              <AnchorLink href={`/products/`}>Products</AnchorLink>
            </li>
            <li sx={{ listStyle: "none", marginX: 2 }}>
              <AnchorLink href={`/contact/`}>Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;

NavigationDesktop.propTypes = {
  logo: PropTypes.object.isRequired,
};
