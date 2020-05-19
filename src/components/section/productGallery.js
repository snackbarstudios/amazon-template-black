/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Fragment } from "react";
import Image from "../image";
import StyledLink from "../link/styledLink";

const ProductGallery = ({ products, title }) => {
  return (
    <Fragment>
      <Styled.h2 sx={{ mt: [6], mb: "0px", textAlign: "center" }}>
        {title}
      </Styled.h2>
      <div
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          px: 4,
        }}
      >
        {products.map((product) => {
          return (
            <div
              key={product.id}
              sx={{
                minWidth: ["250px", "150px", "250px"],
                textAlign: "center",
                pb: 4,
              }}
            >
              <Image
                image={product.productImage.fluid}
                alt={product.productImage.alt}
              />
              <Styled.h3 sx={{ mb: 4 }}>{product.productTitle}</Styled.h3>
              <StyledLink href="/products" color="#111111" hovercolor="white">
                View products
              </StyledLink>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductGallery;
