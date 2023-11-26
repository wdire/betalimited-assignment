import api from "@/utils/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { cartActions } from "../slices/cart.slice";
import { ViewCartResponseItem } from "@/types/cart.type";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId: string, { dispatch }) => {
    const res = await api({
      method: "POST",
      url: "/add-to-cart",
      params: {
        id: productId,
      },
    });
    const data = await res.data;
    dispatch(cartActions.incrementQuantity(productId));
    return data;
  }
);

export const subtractFromCart = createAsyncThunk(
  "cart/subtractFromCart",
  async (productId: string, { dispatch }) => {
    const res = await api({
      method: "POST",
      url: "/subtract-from-cart",
      params: {
        id: productId,
      },
    });
    const data = await res.data;
    dispatch(cartActions.decrementQuantity(productId));
    return data;
  }
);

export const viewCart = createAsyncThunk(
  "cart/viewCart",
  async (signal: AbortSignal, { dispatch }) => {
    const res = await api({
      method: "GET",
      url: "/view-cart",
      signal: signal,
    });
    const data: ViewCartResponseItem[] = await res.data;
    dispatch(
      cartActions.setCartProducts(
        data
          .filter((p) => p.quantity !== 0)
          .map((p) => {
            return {
              id: p.productId,
              quantity: p.quantity,
            };
          })
      )
    );
    return data;
  }
);
