import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  carts?: CartUpdateManyWithoutProductsInput;
  name?: number | null;
  price?: number | null;
};
