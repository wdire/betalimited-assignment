import { RootState } from "..";

export const getProductById = (productId: string) => (state: RootState) => {
  return state.cart.products.find((product) => product.id === productId);
};

export const getProductQuantityById =
  (productId: string) => (state: RootState) => {
    return (
      state.cart.products.find((product) => product.id === productId)
        ?.quantity || 0
    );
  };
