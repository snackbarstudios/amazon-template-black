/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import Hamburger from "./hamburger";
import { useState, useEffect } from "react";
import DropDownMobile from "./dropdownMobile";
import NavigationLink from "./navigationLink";
import InstagramIcon from "../Icons/instagramIcon";
import FacebookIcon from "../Icons/facebookIcon";
import TwitterIcon from "../Icons/twitterIcon";
import PintrestIcon from "../Icons/pintrestIcon";
import Logo from "../logo";
import useDocumentScrollThrottled from "../../hooks/useDocumentScrollThrottled";
import { useLocation } from "@reach/router";

const NavigationMobile = ({
  facebook,
  instagram,
  twitter,
  pintrest,
  mobileLogo,
  brandLogo,
}) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [showBackground, setBackground] = useState(false);
  const [shouldHideHeader, setShouldHideHeader] = useState(false);
  const [landingpage, setLandingPage] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "/about/") {
      setLandingPage(true);
    }
  }, [location.pathname]);

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
        display: ["flex", null, "none"],
        justifyContent: "space-between",
        alignItems: "center",
        background: showBackground || !landingpage ? "white" : "transparent",
        transition: shouldHideHeader
          ? ".6s cubic-bezier(.5,0,.5,1)"
          : ".6s cubic-bezier(.5,0,.5,1)",
        a: {
          ml: "24px",
        },
      }}
    >
      <Logo logo={mobileLogo ? mobileLogo : brandLogo} />
      <Hamburger
        setOpen={setOpen}
        open={open}
        color={showBackground || !landingpage ? "#111111" : "white"}
      />

      <DropDownMobile open={open}>
        <ul
          sx={{
            p: 0,
            li: {
              a: {
                color: "white",
              },
            },
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
          {twitter && (
            <a
              sx={{ ml: 3 }}
              href={twitter}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TwitterIcon width="30px" fill="white" />
            </a>
          )}
          {pintrest && (
            <a
              sx={{ ml: 3 }}
              href={pintrest}
              target="_blank"
              rel="noreferrer noopener"
            >
              <PintrestIcon width="22px" fill="white" />
            </a>
          )}
        </div>
      </DropDownMobile>
    </nav>
  );
};

export default NavigationMobile;

NavigationMobile.propTypes = {
  facebook: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  mobileLogo: PropTypes.object,
  brandLogo: PropTypes.object.isRequired,
};
