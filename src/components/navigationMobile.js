/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import { useState } from "react";
import DropDownMobile from "./dropdownMobile";
import NavItem from "./navItem";
import AnchorLink from "./anchorLink";
import Logo from "./logo";

const NavigationMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      sx={{
        display: ["block", "none", null],
        height: "70px",
        backgroundColor: "white",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
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
          <NavItem open={open}>
            <AnchorLink open={open} href={`/about/`}>
              About
            </AnchorLink>
          </NavItem>
          <NavItem open={open}>
            <AnchorLink open={open} href={`/products/`}>
              Products
            </AnchorLink>
          </NavItem>
          <NavItem open={open}>
            <AnchorLink open={open} href={`/contact/`}>
              Contact
            </AnchorLink>
          </NavItem>
        </ul>
      </DropDownMobile>
      <div sx={{ display: "flex" }}>
        <Logo />
      </div>
    </div>
  );
};

export default NavigationMobile;
