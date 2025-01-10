import React, { Suspense } from "react";
import ProductDetailPage from "../singleproduct/SingleProduct"

export default function SingleProduct() {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <ProductDetailPage />
    </Suspense>
  );
}
