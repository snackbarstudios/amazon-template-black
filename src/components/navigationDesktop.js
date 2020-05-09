/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationLink from "./navigationLink";
import Logo from "./logo";

const NavigationDesktop = () => {
  return (
    <div
      sx={{
        display: ["none", "flex"],
        position: "fixed",
        zIndex: 2,
        backgroundColor: "background",
        width: "100%",
        height: "60px",
        px: 4,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div sx={{ display: "flex" }}>
        <Logo />
      </div>

      <div>
        <ul
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <NavigationLink href={`/about/`}>About</NavigationLink>

          <NavigationLink href={`/products/`}>Products</NavigationLink>

          <NavigationLink href={`/contact/`}>Contact</NavigationLink>
        </ul>
      </div>
    </div>
  );
};

export default NavigationDesktop;
