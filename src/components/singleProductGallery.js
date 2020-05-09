/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import Image from "./image";
import { createMarkup } from "../utils/functions";

const SingleProductGallery = ({ products }) => {
  console.log(products);
  return (
    <div sx={{ paddingX: [2, 2, 5], paddingY: [4, 4, 5] }}>
      <Styled.h2 sx={{ textAlign: "center", color: "highlight" }}>
        FEATURED PRODUCT
      </Styled.h2>
      <div sx={{ display: "flex", flexDirection: ["column", "row"] }}>
        <div
          sx={{
            flex: "1",
            paddingX: 2,
            paddingY: 4,
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
          <Styled.a href="/products">VIEW PRODUCT</Styled.a>
        </div>
        <div sx={{ flex: "1", padding: 2 }}>
          <Image
            alt={products[0].productImage.alt}
            image={products[0].productImage.fluid}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleProductGallery;
