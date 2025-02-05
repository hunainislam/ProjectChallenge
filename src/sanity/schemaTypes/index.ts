import { type SchemaTypeDefinition } from "sanity";

import { order } from "./order";
import { product } from "./product";
import shop from "../lib/funiro/shop";
import blog from "../lib/funiro/blog";
import section from "../lib/funiro/section";
import ourproduct from "../lib/funiro/ourproduct";
import comparison from "../lib/funiro/comparison";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ourproduct, shop, blog, section, comparison, product, order],
};
