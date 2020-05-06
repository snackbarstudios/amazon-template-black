/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import OutlineButton from "./outlineButton";
import Image from "../components/image";

const PageSection = ({ section }) => {
  return (
    <Fragment>
      {section.map((s) => {
        return (
          <article
            key={s.id}
            sx={{
              display: "flex",
              flexDirection: ["column", "row"],
              ":nth-of-type(2)": { flexDirection: [null, "row-reverse"] },
              pb: 4,
            }}
          >
            <div sx={{ flex: "1" }}>
              <div
                sx={{
                  px: [1, 4],
                  py: 4,
                  overflow: "hidden",
                }}
              >
                <Image image={s.blockImage.fluid} alt={s.blockImage.alt} />
              </div>
            </div>
            <div sx={{ flex: "1" }}>
              <div
                sx={{
                  px: [1, 4],
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Styled.h2>{s.blockTitle}</Styled.h2>
                <p>{s.blockDescription}</p>
                {s.buttonLink && (
                  <OutlineButton
                    text={s.buttonLink.slug}
                    href={s.buttonLink.slug}
                  />
                )}
                {s.externalBtnLink?.length > 0 && (
                  <OutlineButton
                    text={s.externalButtonLinkText}
                    href={s.externalBtnLink}
                  />
                )}
              </div>
            </div>
          </article>
        );
      })}
    </Fragment>
  );
};

export default PageSection;
