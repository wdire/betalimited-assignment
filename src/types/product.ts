export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount: string;
};

export type ProductListItem = Product & {
  quantity?: number;
};
