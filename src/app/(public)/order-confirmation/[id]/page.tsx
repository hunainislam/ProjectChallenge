"use client";

import React from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import {
  CheckCircle,
  CreditCard,
  Truck,
  User,
  Package,
  Clock,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface CartItem {
  _id: string;
  title: string;
  price: number;
  quantity: number;
  productImage: string;
}

interface Order {
  orderId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  additionalInfo?: string;
  cartItems: CartItem[];
  paymentMethod: "bank-transfer" | "cash-on-delivery";
}

interface OrderConfirmationPageProps {
  params: {
    id: string;
  };
}

const OrderConfirmationPage = ({ params }: OrderConfirmationPageProps) => {
  const [order, setOrder] = React.useState<Order | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const fetchOrder = () => {
      try {
        const orderData = JSON.parse(localStorage.getItem("order") || "null");
        if (orderData && orderData.orderId === Number(params.id)) {
          setOrder(orderData);
        } else {
          toast.error("Order not found.");
        }
      } catch (error) {
        toast.error("Failed to load order data.");
        console.error("Error loading order:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card className="w-full max-w-4xl">
          <CardContent className="p-6 space-y-4">
            <Skeleton className="h-8 w-3/4 mx-auto" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-40 w-full" />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <Card className="w-full max-w-md text-center p-6">
          <CardContent>
            <p className="text-lg text-muted-foreground">Order not found.</p>
            <Link href="/">
              <Button className="mt-4" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const total =
    order && order.cartItems
      ? order.cartItems.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        )
      : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <CardTitle className="text-2xl md:text-3xl text-center">
                Order Confirmation
              </CardTitle>
              <Badge variant="secondary" className="text-lg px-4 py-1">
                Order #{order.orderId}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Customer Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <User className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold">Customer Details</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p>
                    {order.firstName} {order.lastName}
                  </p>
                  <p className="text-sm text-muted-foreground">{order.email}</p>
                  <p className="text-sm text-muted-foreground">{order.phone}</p>
                </div>
              </div>

              {/* Shipping Information */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-orange-500" />
                  <h3 className="font-semibold">Shipping Address</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <p>{order.address}</p>
                  <p>
                    {order.city}, {order.province}
                  </p>
                  <p>
                    {order.zipCode}, {order.country}
                  </p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Package className="h-5 w-5 text-purple-500" />
                <h3 className="font-semibold">Order Items</h3>
              </div>
              <ScrollArea className="h-[200px] rounded-lg border p-4">
                <div className="space-y-4">
                  {order.cartItems &&
                    order.cartItems.map((item) => (
                      <div
                        key={item._id}
                        className="flex justify-between items-center"
                      >
                        <div className="flex items-center gap-4">
                          <Image
                            src={item.productImage}
                            alt={item.title}
                            className="w-16 h-16 object-cover rounded"
                            height={500}
                            width={500}
                          />
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p className="font-medium">
                          Rs. {item.price * item.quantity}
                        </p>
                      </div>
                    ))}
                </div>
              </ScrollArea>
            </div>

            {/* Payment Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold">Payment Method</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Badge variant="outline">
                    {order.paymentMethod === "bank-transfer"
                      ? "Direct Bank Transfer"
                      : "Cash on Delivery"}
                  </Badge>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  <h3 className="font-semibold">Estimated Delivery</h3>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>3-5 Business Days</p>
                </div>
              </div>
            </div>

            {/* Order Total */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Total Amount</p>
                <p className="text-xl font-bold">Rs. {total}</p>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-center p-6">
            <Link href="/">
              <Button
                className="w-full md:w-auto"
                onClick={() => toast.info("Redirecting to home...")}
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
