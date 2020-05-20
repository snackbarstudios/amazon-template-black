/* eslint-disable no-restricted-globals */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState, useEffect } from "react";
import NavigationLink from "./navigationLink";
import Logo from "../logo";
import InstagramIcon from "../Icons/instagramIcon";
import FacebookIcon from "../Icons/facebookIcon";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";
import { useLocation } from "@reach/router";

const NavigationDesktop = ({ facebook, instagram }) => {
  const [landingpage, setLandingPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about/") {
      setLandingPage(true);
    }
  }, [location.pathname]);

  const [showBackground, setBackground] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);

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
        display: ["none", "flex"],
        alignItems: "center",
        position: "fixed",
        zIndex: 2,
        width: "100%",
        height: "70px",
        px: 4,
        py: 2,
        visibility: shouldHideHeader ? "hidden" : "visible",
        opacity: shouldHideHeader ? 0 : 1,
        background: showBackground || !landingpage ? "white" : "transparent",
        transition: shouldHideHeader
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
      }}
    >
      <Logo />
      <ul
        sx={{
          m: "auto",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 0,
          li: {
            a: {
              color: showBackground || !landingpage ? "#111111" : "white",
            },
          },
        }}
      >
        <NavigationLink href={`/about/`}>About</NavigationLink>

        <NavigationLink href={`/products/`}>Products</NavigationLink>

        <NavigationLink href={`/contact/`}>Contact</NavigationLink>
      </ul>
      <div sx={{ display: "flex" }}>
        {instagram && (
          <a href={instagram} target="_blank" rel="noreferrer noopener">
            <InstagramIcon
              width="20px"
              fill={showBackground || !landingpage ? "#111111" : "white"}
            />
          </a>
        )}
        {facebook && (
          <a
            sx={{ ml: 3 }}
            href={facebook}
            target="_blank"
            rel="noreferrer noopener"
          >
            <FacebookIcon
              width="12px"
              fill={showBackground || !landingpage ? "#111111" : "white"}
            />
          </a>
        )}
      </div>
    </nav>
  );
};

export default NavigationDesktop;
