import { Cart } from "../cart/Cart";
import { JsonValue } from "type-fest";

export type User = {
  carts?: Array<Cart>;
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
