import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
