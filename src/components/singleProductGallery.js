/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "./image";
import { createMarkup } from "../utils/functions";
import { Fragment } from "react";

const SingleProductGallery = ({ products }) => {
  return (
    <Fragment>
      <h2 sx={{ textAlign: "center", color: "highlight", mt: [6], mb: "0px" }}>
        Feature products
      </h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row"],
          paddingX: [2, 2, 5],
          paddingY: [4, 4, 5],
        }}
      >
        <div
          sx={{
            flex: "1",
            padding: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Styled.h3>{products[0].productTitle}</Styled.h3>
          <Styled.p>
            <div
              dangerouslySetInnerHTML={createMarkup(
                products[0].productDescrriptionNode.childMarkdownRemark.html
              )}
            />
          </Styled.p>
          <Styled.a href="/products">View product</Styled.a>
        </div>
        <div sx={{ flex: "1", padding: 2 }}>
          <Image
            alt={products[0].productImage.alt}
            image={products[0].productImage.fluid}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SingleProductGallery;
