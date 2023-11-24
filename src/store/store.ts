import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart.slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
