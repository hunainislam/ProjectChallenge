"use client";

import PaymentForm from "../payment/PaymentForm";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const handlePaymentSubmit = (data: any) => {
    // Handle payment submission logic here
    console.log("Payment data:", data);
  };

  const handleClose = () => {
    // Navigate back or close modal
    router.back();
  };

  return (
    <PaymentForm
      onPaymentSubmitAction={handlePaymentSubmit}
      onCloseAction={handleClose}
    />
  );
}
