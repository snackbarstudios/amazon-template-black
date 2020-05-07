/** @jsx jsx */
import { jsx } from "theme-ui";
import NavigationLink from "./navigationLink";
import Logo from "./logo";

const NavigationDesktop = () => {
  return (
    <div
      sx={{
        display: ["none", "block"],
        position: "fixed",
        zIndex: "10",
        backgroundColor: "background",
        top: "0",
        width: "100%",
        left: "0",
      }}
    >
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 1,
          px: 4,
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
              marginBottom: "0",
            }}
          >
            <NavigationLink href={`/about/`}>About</NavigationLink>

            <NavigationLink href={`/products/`}>Products</NavigationLink>

            <NavigationLink href={`/contact/`}>Contact</NavigationLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;
