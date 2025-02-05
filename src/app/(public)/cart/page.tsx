import React, { Suspense } from "react";
import CartContent from "./Cart";

export default function Cart() {
  return (
    <Suspense fallback={<div></div>}>
      <CartContent />
    </Suspense>
  );
}
