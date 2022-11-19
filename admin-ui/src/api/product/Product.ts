import { Cart } from "../cart/Cart";

export type Product = {
  carts?: Array<Cart>;
  createdAt: Date;
  id: string;
  name: number | null;
  price: number | null;
  updatedAt: Date;
};
