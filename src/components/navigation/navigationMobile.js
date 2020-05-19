/** @jsx jsx */
import { jsx } from "theme-ui";
import Hamburger from "./hamburger";
import { useState, useEffect } from "react";
import DropDownMobile from "./dropdownMobile";
import NavigationLink from "./navigationLink";
import InstagramIcon from "../Icons/instagramIcon";
import FacebookIcon from "../Icons/facebookIcon";
import Logo from "../logo";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";
import { useLocation } from "@reach/router";

const NavigationMobile = ({ facebook, instagram }) => {
  const [open, setOpen] = useState(false);
  const [showBackground, setBackground] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [landingpage, setLandingPage] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about/") {
      setLandingPage(true);
    }
  }, []);

  const MINIMUM_SCROLL = 80;
  const TIMEOUT_DELAY = 100;

  useDocumentScrollThrottled((callbackData) => {
    const { previousScrollTop, currentScrollTop } = callbackData;
    const isScrolledDown = previousScrollTop < currentScrollTop;
    const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL;

    // adds a bit of delay effect to the header’s hide/show movement after scrolling
    setTimeout(() => {
      setShouldHideHeader(isScrolledDown);
      setBackground(isMinimumScrolled);
    }, TIMEOUT_DELAY);
  });

  return (
    <nav
      sx={{
        height: "60px",
        display: ["flex", "none", null],
        justifyContent: "space-between",
        alignItems: "center",
        visibility: shouldHideHeader ? "hidden" : "visible",
        opacity: shouldHideHeader ? 0 : 1,
        background: showBackground || !landingpage ? "#111111" : "transparent",
        transition: shouldHideHeader
          ? "visibility 10s linear 300ms, opacity 300ms"
          : "visibility 10s linear 300ms, opacity 300ms",
        a: {
          ml: "24px",
        },
      }}
    >
      <Logo />
      <Hamburger setOpen={setOpen} open={open} />

      <DropDownMobile open={open}>
        <ul sx={{ p: 0 }}>
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
        <div sx={{ display: "flex", ml: "40px", mt: 7 }}>
          {instagram && (
            <a href={instagram} target="_blank" rel="noreferrer noopener">
              <InstagramIcon width="30px" fill="white" />
            </a>
          )}
          {facebook && (
            <a
              sx={{ ml: 3 }}
              href={facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              <FacebookIcon width="18px" fill="white" />
            </a>
          )}
        </div>
      </DropDownMobile>
    </nav>
  );
};

export default NavigationMobile;
