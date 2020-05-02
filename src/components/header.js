/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationDesktop from "./navigationDesktop";
import NavigationMobile from "./navigationMobile";

const Header = () => (
  <header
    sx={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <NavigationDesktop />
    <NavigationMobile />
  </header>
);

export default Header;
