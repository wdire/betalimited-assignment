"use client";

import { ProductListItem } from "@/types/product.type";
import { formatPrice } from "@/utils/format.util";
import {
  Box,
  Chip,
  Grid,
  Paper,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import QuantityButtons from "./QuantityButtons";
import { grey } from "@mui/material/colors";

const ProductContainer = styled(Paper)({
  width: "290px",
  overflow: "hidden",
  borderRadius: "8px",
});

const ProductWrapper = styled(Grid)({
  position: "relative",
  flexDirection: "row",
});

const ImageWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  img: {
    display: "block",
    objectFit: "contain",
    pointerEvents: "none",
  },
}));

const DetailsWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: "16px",
  flex: 1,
  alignItems: "flex-end",
  minHeight: "124px",
}));

const ProductCard = ({ product }: { product: ProductListItem }) => {
  return (
    <ProductContainer>
      <ProductWrapper>
        {product.discount && (
          <Chip
            sx={{
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
            color="primary"
            label={product.discount}
          />
        )}
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
              <Typography
                sx={(theme) => ({ color: theme.palette.grey[700] })}
                variant="body2"
              >
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
                variant="body2"
                color={grey[700]}
                sx={(theme) => ({
                  color: theme.palette.grey[700],
                  textDecoration: "line-through",
                })}
              >
                {formatPrice(product.originalPrice)}
              </Typography>
            </Box>
          </Grid>
          <Box>
            <QuantityButtons product={product} />
          </Box>
        </DetailsWrapper>
      </ProductWrapper>
    </ProductContainer>
  );
};

export default ProductCard;
