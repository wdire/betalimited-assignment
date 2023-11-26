import api from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const listProducts = createAsyncThunk(
  "product/listProducts",
  async (signal: AbortSignal) => {
    const res = await api("/products", {
      signal: signal,
    });
    const data = await res.data;
    return data;
  }
);

export const searchProduct = createAsyncThunk(
  "product/searchProduct",
  async ({ searchQuery }: { searchQuery: string }) => {
    if (searchQuery.length > 0) {
      const res = await api("/search", {
        method: "GET",
        params: {
          name: searchQuery,
        },
      });
      const data = await res.data;
      return data;
    } else {
      return [];
    }
  }
);
