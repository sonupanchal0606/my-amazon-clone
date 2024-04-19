import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Decimal } from "decimal.js";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: Decimal;
  discountedPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  reviews?: Array<Review>;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
