import { Order } from "../order/Order";
import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  isAdmin: boolean | null;
  lastName: string | null;
  orders?: Array<Order>;
  reviews?: Review | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
