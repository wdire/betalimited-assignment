import { Product, ProductListItem } from "@/types/product";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartStateType = {
  products: ProductListItem[];
};

const initialState: CartStateType = {
  products: [],
};

// Note: in the case of improving this project and using "persist," it would be better to store IDs of products instead of keeping product data.

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    incrementQuantity: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity ? itemInCart.quantity + 1 : 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    decrementQuantity: (state, action: PayloadAction<Product>) => {
      const itemInCart = state.products.find(
        (item) => item.id === action.payload.id
      );

      if (itemInCart?.quantity && itemInCart?.quantity > 1) {
        itemInCart.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
