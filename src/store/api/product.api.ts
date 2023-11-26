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
