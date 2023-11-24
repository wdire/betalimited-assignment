import { Product } from "@/types/product";
import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard";

const tmp_products: Product[] = [
  {
    id: "1",
    name: "Offer Fruits",
    price: 174.24,
    originalPrice: 198,
    rating: 4,
    image:
      "https://pub-f713ae0e826a4438ad18a7ef108a3b77.r2.dev/MiniPeppers.webp",
    discount: "12% off",
  },
  {
    id: "2",
    name: "Lemon",
    price: 215.76,
    originalPrice: 232,
    rating: 4,
    image: "https://pub-f713ae0e826a4438ad18a7ef108a3b77.r2.dev/lime.webp",
    discount: "7% off",
  },
  {
    id: "3",
    name: "Fresh Strawberry",
    price: 98.7,
    originalPrice: 105,
    rating: 5,
    image:
      "https://pub-f713ae0e826a4438ad18a7ef108a3b77.r2.dev/strawberry.webp",
    discount: "6% off",
  },
];

const ProductList = () => {
  return (
    <Grid container gap={2} marginY={4} justifyContent={"center"}>
      {tmp_products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Grid>
  );
};

export default ProductList;
