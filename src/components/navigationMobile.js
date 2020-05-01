/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import { useState } from "react";
import DropDownMobile from "./dropdownMobile";
import NavItem from "./navItem";
import AnchorLink from "./anchorLink";

const NavigationMobile = ({ logo }) => {
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
            fontSize: "36px",
            m: 0,
            width: "100%",
            height: "auto",
            li: { margin: "28px" },
          }}
        >
          <NavItem open={open}>
            <AnchorLink setOpen={setOpen} href={`/about/`}>
              <span onClick={() => setOpen(!open)}>About</span>
            </AnchorLink>
          </NavItem>
          <NavItem open={open}>
            <AnchorLink setOpen={setOpen} href={`/products/`}>
              <span onClick={() => setOpen(!open)}>Products</span>
            </AnchorLink>
          </NavItem>
          <NavItem open={open}>
            <AnchorLink setOpen={setOpen} href={`/contact/`}>
              <span onClick={() => setOpen(!open)}>Contact</span>
            </AnchorLink>
          </NavItem>
        </ul>
      </DropDownMobile>
      <div>
        <img src={logo.fluid.src} alt={logo.alt} />
      </div>
    </div>
  );
};

export default NavigationMobile;
