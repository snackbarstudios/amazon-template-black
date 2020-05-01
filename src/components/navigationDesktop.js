/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import NavItem from "./navItem";
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
        <div>
          <img src={logo.fluid.src} alt={logo.alt} />
        </div>
        <div>
          <ul sx={{ display: "flex" }}>
            <NavItem>
              <AnchorLink href={`#`}>link</AnchorLink>
            </NavItem>
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
