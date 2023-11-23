"use client";

import { Product } from "@/types/product";
import { formatPrice } from "@/utils/format.util";
import { Box, Grid, Paper, Rating, Typography, styled } from "@mui/material";
import Image from "next/image";
import React from "react";

import AddToCartButtons from "./AddToCartButtons";

const ProductContainer = styled(Paper)({
  width: "290px",
  overflow: "hidden",
  borderRadius: "8px",
});

const ProductWrapper = styled(Grid)({
  flexDirection: "row",
});

const ImageWrapper = styled(Grid)({
  backgroundColor: "#efefef",
  img: {
    display: "block",
    objectFit: "contain",
    pointerEvents: "none",
  },
});

const DetailsWrapper = styled(Grid)({
  backgroundColor: "#fff",
  padding: "16px",
  flex: 1,
});

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        <ImageWrapper>
          <Image
            src={product.image}
            width={290}
            height={285}
            alt={product.name}
          />
        </ImageWrapper>

        <DetailsWrapper container>
          <Grid container item gap={1} flex={1}>
            <Typography fontWeight={600} variant="body2">
              {product.name}
            </Typography>
            <Grid container gap={1} alignItems={"center"}>
              <Rating
                name="read-only"
                max={5}
                value={product.rating}
                readOnly
                size="small"
              />
              <Typography color={"gray"} variant="body2">
                {`(${product.rating})`}
              </Typography>
            </Grid>
            <Box>
              <Typography
                component={"span"}
                color={"primary.main"}
                fontWeight={600}
                variant="body2"
                marginRight={1}
              >
                {formatPrice(product.price)}
              </Typography>
              <Typography
                component={"span"}
                color={"gray"}
                variant="body2"
                sx={{ textDecoration: "line-through" }}
              >
                {formatPrice(product.originalPrice)}
              </Typography>
            </Box>
          </Grid>
          <Box>
            <AddToCartButtons productId={1} />
          </Box>
        </DetailsWrapper>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductCard;
