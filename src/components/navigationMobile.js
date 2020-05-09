/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import { useState } from "react";
import DropDownMobile from "./dropdownMobile";
import NavigationLink from "./navigationLink";
import Logo from "./logo";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      sx={{
        height: "60px",
        display: ["flex", "none", null],
        justifyContent: "space-between",
        alignItems: "center",
        a: {
          ml: "24px",
        },
      }}
    >
      <Logo />
      <Hamburger setOpen={setOpen} open={open} />

      <DropDownMobile open={open}>
        <ul>
          <NavigationLink open={open} href={`/about/`}>
            About
          </NavigationLink>
          <NavigationLink open={open} href={`/products/`}>
            Products
          </NavigationLink>

          <NavigationLink open={open} href={`/contact/`}>
            Contact
          </NavigationLink>
        </ul>
      </DropDownMobile>
    </div>
  );
};

export default NavigationMobile;
