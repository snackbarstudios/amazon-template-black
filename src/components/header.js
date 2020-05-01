/** @jsx jsx */
import { jsx } from "theme-ui";
import Navigation from "./navigation";

const Header = () => (
  <header
    sx={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <Navigation />
  </header>
);

export default Header;
