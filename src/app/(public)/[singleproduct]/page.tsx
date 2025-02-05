import React, { Suspense } from "react";
import ProductDetailPage from "./SingleProduct";

export default function SingleProduct() {
  return (
    <Suspense fallback={<div></div>}>
      <ProductDetailPage productId="someProductId" />
    </Suspense>
  );
}
