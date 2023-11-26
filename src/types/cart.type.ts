export type CartProductItem = {
  id: string;
  quantity: number;
};

export type ViewCartResponseItem = {
  productId: string;
  quantity: number;
  name: string;
  price: number;
};
