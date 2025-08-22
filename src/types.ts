export type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  rating?: number; // 0-5
  tags?: string[];
};
export type CartItem = { product: Product; qty: number };
