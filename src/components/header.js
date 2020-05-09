/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationDesktop from "./navigationDesktop";
import NavigationMobile from "./navigationMobile";

const Header = () => (
  <header
    sx={{
      height: "60px",
      position: "fixed",
      zIndex: "99",
      top: "0",
      width: "100%",
      backgroundColor: "white",
    }}
  >
    <NavigationDesktop />
    <NavigationMobile />
  </header>
);

export default Header;
