import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart.slice";
import { appReducer } from "./slices/app.slice";
import { productReducer } from "./slices/product.slice";
import { appApi } from "./api";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    app: appReducer,
    product: productReducer,
  },
});

store.dispatch(appApi.initSession());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
