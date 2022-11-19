import { CartCreateNestedManyWithoutProductsInput } from "./CartCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  carts?: CartCreateNestedManyWithoutProductsInput;
  name?: number | null;
  price?: number | null;
};
