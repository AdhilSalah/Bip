import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type ProductWhereInput = {
  carts?: CartListRelationFilter;
  id?: StringFilter;
  name?: IntNullableFilter;
  price?: FloatNullableFilter;
};
