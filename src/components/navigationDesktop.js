/** @jsx jsx */
import { jsx } from "theme-ui";
import AnchorLink from "./anchorLink";
import Logo from "./logo";

const NavigationDesktop = () => {
  return (
    <div
      sx={{
        display: ["none", "block"],
        position: "fixed",
        zIndex: "99",
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
          padding: 3,
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
            <li
              sx={{
                listStyle: "none",
                marginX: 2,
                marginBottom: "0",
              }}
            >
              <AnchorLink href={`/about/`}>About</AnchorLink>
            </li>
            <li sx={{ listStyle: "none", marginX: 2, marginBottom: "0" }}>
              <AnchorLink href={`/products/`}>Products</AnchorLink>
            </li>
            <li sx={{ listStyle: "none", marginX: 2, marginBottom: "0" }}>
              <AnchorLink href={`/contact/`}>Contact</AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationDesktop;
