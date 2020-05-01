/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import AnchorLink from "./anchorLink";

const NavigationDesktop = ({ logo }) => {
  return (
    <div
      sx={{
        display: ["none", "block"],
      }}
    >
      <div
        sx={{ display: "flex", justifyContent: "space-between", padding: 3 }}
      >
        <div sx={{ width: "30%" }}>
          <img src={logo.fluid.src} alt={logo.alt} />
        </div>
        <div sx={{ width: "30%" }}>
          <ul sx={{ display: "flex", width: "100%" }}>
            <li sx={{ listStyle: "none" }}>
              <AnchorLink href={`#`}>link</AnchorLink>
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
