/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";
import ExternalLink from "../link/externalLink";

const Banner = ({
  image,
  text,
  bannerExternalLink,
  bannerExternalLinkTitle,
  bannerLink,
}) => {
  return (
    <div
      sx={{
        height: ["450px", "600px"],
      }}
    >
      <BackgroundImage
        fluid={image}
        backgroundColor={`#F2EDEE`}
        style={{
          height: "100%",
        }}
      >
        <div
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "primary",
            position: "absolute",
            top: 0,
            left: 0,
            background:
              "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            m: "auto",
            p: 2,
          }}
        >
          <p
            sx={{
              fontFamily: "body",
              lineHeight: "heading",
              fontWeight: "body",
              fontSize: [2, 3],
            }}
          >
            {text}
          </p>
          {bannerLink && (
            <ExternalLink href={bannerLink.slug} text={bannerLink.slug} />
          )}
          {bannerExternalLink?.length > 0 && (
            <ExternalLink
              href={bannerExternalLink}
              text={bannerExternalLinkTitle}
            />
          )}
        </div>
      </BackgroundImage>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string,
  bannerExternalLink: PropTypes.string,
  bannerExternalLinkTitle: PropTypes.string,
  bannerLink: PropTypes.object,
};
