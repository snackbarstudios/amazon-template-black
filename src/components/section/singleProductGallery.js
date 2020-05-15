/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "../image";
import { createMarkup } from "../../utils/functions";
import { Fragment } from "react";

const SingleProductGallery = ({ products, title }) => {
  return (
    <Fragment>
      <Styled.h2 sx={{ mt: [6], mb: "0px", textAlign: "center" }}>
        {title}
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexDirection: ["column-reverse", "row"],
          paddingY: [2, 4, 5],
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          sx={{
            flex: "1",
            px: [3, 5],
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Styled.h3>{products[0].productTitle}</Styled.h3>
          <div
            dangerouslySetInnerHTML={createMarkup(
              products[0].productDescrriptionNode.childMarkdownRemark.html
            )}
          />
          <Styled.a href="/products">View product</Styled.a>
        </div>
        <div sx={{ flex: "1", px: [3, 5] }}>
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
