import { RootState } from "..";

export const getSearchValue = () => (state: RootState) => {
  return state.product.searchValue;
};
