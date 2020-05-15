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
              <Styled.h3>{product.productTitle}</Styled.h3>
              <StyledLink href="/products">View products</StyledLink>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default ProductGallery;
