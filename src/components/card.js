/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../components/image";
import { createMarkup } from "../utils/functions";

const Card = ({ section }) => {
  console.log(section);
  return (
    <article>
      <div sx={{ flex: "1", backgroundColor: "primary" }}>
        <div
          sx={{
            overflow: "hidden",
            height: "100%",
            div: {
              height: "100%",
            },
          }}
        >
          hej
          {/* <Image
            image={section.blockImage.fluid}
            alt={section.blockImage.alt}
          /> */}
        </div>
      </div>
      <div sx={{ flex: "1", backgroundColor: "yellow" }}>
        <div
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            p: 5,
          }}
        >
          {/* <p
            dangerouslySetInnerHTML={createMarkup(
              section.blockDescriptionNode.childMarkdownRemark.html
            )}
          /> */}

          {/* {section.buttonLink && (
            <Styled.a
              text={section.buttonLink.slug}
              sx={{
                "::after": {
                  margin: "auto",
                },
              }}
            >
              {section.buttonLink.slug}
            </Styled.a>
          )} */}
        </div>
      </div>
    </article>
  );
};

export default Card;
