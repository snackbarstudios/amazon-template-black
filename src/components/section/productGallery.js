/** @jsx jsx */
import { jsx } from "theme-ui";
import { Fragment } from "react";
import Image from "../image";
import StyledLink from "../link/styledLink";

const ProductGallery = ({ products }) => {
  console.log(products)
  return (
    <Fragment>
      <h2 sx={{ textAlign: "center", color: "highlight", mt: [6], mb: "0px" }}>
        Featured products
      </h2>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          p: 4,
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              sx={{ minWidth: "250px", textAlign: "center", pb: 4 }}
            >
              <Image
                image={product.productImage.fluid}
                alt={product.productImage.alt}
              />
              <p>{product.productTitle}</p>
              <StyledLink href="/products">View products</StyledLink>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductGallery;
