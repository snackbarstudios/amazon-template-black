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
        display: ["block", "none", null],
        padding: 3,
      }}
    >
      <Hamburger setOpen={setOpen} open={open} />
      <DropDownMobile open={open}>
        <ul
          sx={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            fontSize: 5,
            m: 0,
            width: "100%",
            height: "auto",
            li: { margin: "28px" },
          }}
        >
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
      <div sx={{ display: "flex" }}>
        <Logo />
      </div>
    </div>
  );
};

export default NavigationMobile;
