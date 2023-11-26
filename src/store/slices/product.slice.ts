import { Product } from "@/types/product.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { productApi } from "../api";

export type ProductStateType = {
  products: Product[];
  searchValue: string;
  searchResults: Product[];
  isLoading: boolean;
  error: string | null | undefined;
};

const initialState: ProductStateType = {
  products: [],
  searchValue: "",
  searchResults: [],
  isLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    //List Products
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

    // Search Product
    builder.addCase(productApi.searchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(productApi.searchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchResults = action.payload;
    });
    builder.addCase(productApi.searchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const productReducer = productSlice.reducer;
export const productActions = productSlice.actions;
