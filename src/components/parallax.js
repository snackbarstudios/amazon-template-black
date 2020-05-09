/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import PropTypes from "prop-types";
import StyledLink from "./styledLink";

const Parallax = ({
  imageURL,
  text,
  bannerExternalLink,
  bannerExternalLinkTitle,
  bannerLink,
}) => {
  return (
    <Fragment>
      <div
        sx={{
          perspective: "1px",
          height: ["400px", "500px"],
          overflowX: "hidden",
          overflowY: "auto",
          /* Hide scrollbar for Chrome, Safari and Opera */
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <div
          sx={{
            height: "700px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            "::after": {
              content: '" "',
              position: "absolute",
              height: ["800px", "100vh"],
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              transform: "translateZ(-1px) scale(2)",
              zIndex: "-1",
              background: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${imageURL}})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            },
          }}
        >
          <div
            sx={{
              justifyContent: "center",
              a: {
                "::after": {
                  margin: "auto",
                },
              },
            }}
          >
            <h1
              sx={{
                fontFamily: "body",
                lineHeight: "heading",
                fontWeight: "body",
                fontSize: [2, 3],
                textAlign: "center",
              }}
            >
              {text}
            </h1>
            {bannerLink && (
              <StyledLink href={bannerLink.slug}>
                <div
                  sx={{
                    fontFamily: "body",
                    lineHeight: "heading",
                    fontWeight: "heading",
                    fontSize: [1, 2],
                    textAlign: "center",
                  }}
                >
                  {bannerLink.slug}
                </div>
              </StyledLink>
            )}
            {bannerExternalLink?.length > 0 && (
              <Styled.a href={bannerExternalLink}>
                {bannerExternalLinkTitle}
              </Styled.a>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Parallax;

Parallax.propTypes = {
  imageURL: PropTypes.string.isRequired,
  text: PropTypes.string,
  bannerExternalLink: PropTypes.string,
  bannerExternalLinkTitle: PropTypes.string,
  bannerLink: PropTypes.object,
};
