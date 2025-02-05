"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useState } from "react";
import { Input } from "../../../components/ui/input";
import { toast, ToastContainer } from "react-toastify";
import { Button } from "../../../components/ui/button";
import { Textarea } from "../../../components/ui/textarea";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Building2, Package, ShieldCheck } from "lucide-react";
import PaymentForm from "../payment/PaymentForm";
import CheckoutHero from "../../../components/HeroSectionComponent/CheckoutHero";

interface CheckoutFormProps {
  cartItems: {
    _id: string;
    title: string;
    productImage: string;
    price: number;
    quantity: number;
  }[];
}

interface CartItem {
  _id: string;
  title: string;
  productImage: string;
  price: number;
  quantity: number;
}

interface PaymentFormProps {
  onPaymentSubmitAction: (data: any) => void;
  onCloseAction: () => void;
}

const CheckoutForm = ({ cartItems }: CheckoutFormProps) => {
  const router = useRouter();
  const [cartItem, setCartItem] = useState<CartItem[]>([]);
  const [showPaymentForm, setShowPaymentForm] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [bankDetailsCompleted, setBankDetailsCompleted] = useState(false);

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const method = e.target.value;
    setPaymentMethod(method);

    if (method === "bank-transfer") {
      setShowPaymentForm(true);
    } else {
      setShowPaymentForm(false);
    }
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("checkoutCart");
    if (storedCartItems) {
      setCartItem(JSON.parse(storedCartItems));
    }
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    province: "",
    zipCode: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async () => {
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "address",
      "city",
      "province",
      "zipCode",
      "country",
    ];

    // Check for empty fields
    const emptyFields = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    // If any required field is empty, show an error
    if (emptyFields.length > 0) {
      toast.error("Please fill all required fields!");
      return;
    }

    // Payment method validation
    if (!paymentMethod) {
      toast.error("Please select a payment method!");
      return;
    }

    if (paymentMethod === "bank-transfer" && !bankDetailsCompleted) {
      toast.error("Please complete bank transfer details!");
      return;
    }

    try {
      // Save the order details in localStorage
      const orderDetails = {
        ...formData,
        cartItems: cartItem, // Use cartItem state instead of props
        paymentMethod,
        orderId: Date.now(),
      };

      console.log("Saving order to localStorage:", orderDetails);

      // Get cart items from localStorage
      const storedCartItems = localStorage.getItem("checkoutCart");
      if (storedCartItems) {
        setCartItem(JSON.parse(storedCartItems));
      }

      // Store order in localStorage
      localStorage.setItem("order", JSON.stringify(orderDetails));

      // Clear the cart from localStorage
      localStorage.setItem("cart", JSON.stringify([])); // Clear cart
      localStorage.setItem("cartItems", JSON.stringify([])); // Optional: Clear cartItems if you're using that too

      // Optionally, you can dispatch a custom event to update the cart count in the UI
      window.dispatchEvent(new Event("cartUpdated"));

      toast.success("Order placed successfully!", {
        position: "bottom-right",
        autoClose: 3000,
      });

      // Redirect to order confirmation page
      router.push(`/order-confirmation/${orderDetails.orderId}`);

      // Clear form data after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        zipCode: "",
        country: "",
      });
      setPaymentMethod(null);
    } catch (error) {
      toast.error("Failed to place the order. Please try again.");
      console.error("Error placing order:", error);
    }
  };

  return (
    <div>
      <CheckoutHero />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Billing Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Billing Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    First Name
                    <span className="text-red-600 ml-[2px] font-[0.8em]">
                      *
                    </span>
                  </label>
                  <Input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full border border-gray-300 rounded-md p-4 py-5"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Last Name
                    <span className="text-red-600 ml-[2px] font-[0.8em]">
                      *
                    </span>
                  </label>
                  <Input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full border border-gray-300 rounded-md p-4 py-5"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Phone
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Street Address
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Town/City
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Town/City"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Province
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  placeholder="Province"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  ZIP Code
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="ZIP Code"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Country/Region
                  <span className="text-red-600 ml-[2px] font-[0.8em]">*</span>
                </label>
                <Input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country/Region"
                  className="w-full border border-gray-300 rounded-md p-4 py-5"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Information
                </label>
                <Textarea
                  placeholder="Additional Information"
                  className="w-full border border-gray-300 rounded-md p-4 resize-none py-5"
                />
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Order Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-semibold flex items-center gap-2">
              <Package className="h-6 w-6" />
              Order Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Cart Items with Images */}
            <div className="bg-white p-8 rounded-lg space-y-6">
              <div className="space-y-4 border-b pb-4">
                <div className="flex justify-between">
                  <span className="text-[24px]  text-black">Product</span>
                  <span className="text-[24px] text-black">Subtotal</span>
                </div>
                <Separator />
                {cartItem.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="flex-shrink-0 overflow-hidden">
                      <Image
                        src={item.productImage}
                        alt={item.title}
                        height={500}
                        width={500}
                        className="w-28 h-28 object-cover rounded"
                      />
                    </span>
                    <span className="text-[16px] text-[#9F9F9F] sm:mr-56 mt-8">
                      {item.title} × {item.quantity}
                    </span>
                    <span className="text-[16px]">{item.price}</span>
                  </div>
                ))}
                <Separator />

                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="text-[16px]">
                    Rs.{" "}
                    {cartItem.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total:</span>
                  <span className="font-bold text-[#B88E2F] text-[20px]">
                    Rs.{" "}
                    {cartItem.reduce(
                      (total, item) => total + item.price * item.quantity,
                      0
                    )}
                  </span>
                </div>
              </div>
            </div>
            {/* Payment Options */}
            <div className="space-y-4">
              <h3 className="font-semibold flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Payment Method
              </h3>
              <div className="space-y-2">
                {/* Bank Transfer Option */}
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer">
                  <input
                    type="radio"
                    id="bank-transfer"
                    name="payment-method"
                    value="bank-transfer"
                    checked={paymentMethod === "bank-transfer"}
                    onChange={handlePaymentMethodChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="bank-transfer" className="flex-1">
                    Direct Bank Transfer
                  </label>
                </div>

                {/* Cash on Delivery Option */}
                <div className="flex items-center space-x-2 p-3 border rounded-lg">
                  <input
                    type="radio"
                    id="cash-on-delivery"
                    name="payment-method"
                    value="cash-on-delivery"
                    checked={paymentMethod === "cash-on-delivery"}
                    onChange={handlePaymentMethodChange}
                    className="h-4 w-4"
                  />
                  <label htmlFor="cash-on-delivery" className="flex-1">
                    Cash on Delivery
                  </label>
                </div>
              </div>
            </div>
            {/* Add payment modal */}
            {showPaymentForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
                  <PaymentForm
                    onPaymentSubmitAction={(data) => {
                      localStorage.setItem(
                        "paymentFormData",
                        JSON.stringify(data)
                      );
                      setBankDetailsCompleted(true);
                      setShowPaymentForm(false);
                    }}
                    onCloseAction={() => {
                      setShowPaymentForm(false);
                      setPaymentMethod(null);
                    }}
                  />
                </div>
              </div>
            )}
            {/* Place Order Button */}{" "}
            <Button
              onClick={handlePlaceOrder}
              className="w-full bg-[#B88E2F] hover:bg-[#A57B1E] text-white"
            >
              {" "}
              <ShieldCheck className="mr-2 h-5 w-5" /> Place Order Securely{" "}
            </Button>
          </CardContent>
        </Card>

        {/* Toast Container for Notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default CheckoutForm;
