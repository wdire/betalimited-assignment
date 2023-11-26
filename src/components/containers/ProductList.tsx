"use client";

import { Button, Grid } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import ProductCard from "../ProductCard";
import { useAppDispatch, useAppSelector } from "@/store";
import { productApi } from "@/store/api";
import Loading from "../common/Loading";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { error, isLoading, products } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(productApi.listProducts(abortController.signal));

    return () => abortController.abort();
  }, [dispatch]);

  const renderProducts = useMemo(() => {
    if (error && error !== "canceled") {
      console.error("Error", error);
    }

    if (products.length > 0 && isLoading === false) {
      return products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      });
    } else {
      return <Loading />;
    }
  }, [products, isLoading, error]);

  return (
    <>
      <Grid container gap={2} marginY={4} justifyContent={"center"}>
        {renderProducts}
      </Grid>
      {products.length > 0 && (
        <Grid container justifyContent={"center"} mb={4}>
          <Button variant="contained" sx={{ textAlign: "center" }}>
            Load More...
          </Button>
        </Grid>
      )}
    </>
  );
};

export default ProductList;
