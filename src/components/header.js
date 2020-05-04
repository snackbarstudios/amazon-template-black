/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationDesktop from "./navigationDesktop";
import NavigationMobile from "./navigationMobile";

const Header = () => (
  <header
    sx={{
      background: `white`,
      height: "75px",
    }}
  >
    <NavigationDesktop />
    <NavigationMobile />
  </header>
);

export default Header;
