import { CartProductItem } from "@/types/cart.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartStateType = {
  products: CartProductItem[];
};

const initialState: CartStateType = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCartProducts: (state, action: PayloadAction<CartProductItem[]>) => {
      state.products = action.payload;
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload
      );

      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity ? itemInCart.quantity + 1 : 1;
      } else {
        state.products.push({
          id: action.payload,
          quantity: 1,
        });
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload
      );

      if (itemInCart?.quantity && itemInCart?.quantity > 1) {
        itemInCart.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
