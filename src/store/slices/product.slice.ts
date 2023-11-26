import { Product } from "@/types/product.type";
import { createSlice } from "@reduxjs/toolkit";
import { productApi } from "../api";

export type ProductStateType = {
  products: Product[];
  isLoading: boolean;
  error: string | null | undefined;
};

const initialState: ProductStateType = {
  products: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productApi.listProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productApi.listProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(productApi.listProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
