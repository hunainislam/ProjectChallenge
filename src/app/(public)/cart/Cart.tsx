"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import TrophyComponent from "@/components/Trophy";
import React, { useState, useEffect } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";
import Delete from "../../../../public/images/delete.png";
import CartHero from "@/components/HeroSectionComponent/CartHero";

interface CartItem {
  _id: string;
  title: string;
  price: string;
  productImage: string;
  quantity: number;
}

export default function CartContent() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Inside the CartContent component
  const router = useRouter();

  // Load cart data from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  // Update quantity handler
  const handleQuantityChange = (id: string, increment: boolean) => {
    const updatedCart = cartItems.map((item) => {
      if (item._id === id) {
        return {
          ...item,
          quantity: Math.max(
            increment ? item.quantity + 1 : item.quantity - 1,
            1
          ),
        };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  // Remove item handler
  const handleRemove = (id: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    updateCart(updatedCart);
  };

  // Update both state and localStorage
  const updateCart = (updatedCart: CartItem[]) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate totals
  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="font-poppins w-full bg-white pb-12 tracking-[0px]">
      <CartHero />

      {/* Cart Table */}
      <div className="flex items-center justify-center bg-white px-6 sm:px-12 md:px-24 pb-16 pt-[42px]">
        <div className="flex flex-col lg:flex-row flex-grow flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] leading-[normal] min-[1430px]:flex-nowrap">
          {/* Cart Items Section */}
          <div className="flex flex-col items-start gap-y-14 leading-[normal] w-full lg:w-auto">
            {/* Table Header */}
            <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-28 gap-y-3 bg-[linen] px-6 sm:px-12 lg:px-36 pb-4 pt-[15px] font-medium min-[1430px]:flex-nowrap">
              <div>Product</div>
              <div>Price</div>
              <div className="flex items-center justify-end gap-x-12 pl-6">
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
            </div>

            {/* Cart Items List */}
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pl-2 pr-4 sm:gap-x-[69px] sm:pl-[3px] sm:pr-6 min-[1430px]:flex-nowrap"
              >
                {/* Product Image & Name */}
                <div className="flex items-center justify-center gap-x-2 sm:gap-x-[34px]">
                  <div className="flex h-16 w-16 sm:lg:h-[105px] sm:lg:w-[105px] flex-shrink-0 flex-col items-center rounded-[10px] pr-1 sm:pr-[3px]">
                    <Image
                      src={item.productImage}
                      alt={item.title}
                      className="h-16 w-16 sm:h-[105px] sm:w-[102px] flex-shrink-0 rounded-[10px] ml-1"
                      width={105}
                      height={105}
                    />
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-base">
                    {item.title}
                  </div>
                </div>

                {/* Price */}
                <div className="text-neutral-400 ml-4 sm:ml-8 text-sm sm:text-base">
                  {item.price}
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-end gap-x-4 sm:gap-x-12 pl-2 sm:pl-[15px] sm:ml-32">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[5px] border border-solid border-neutral-400 px-2 py-1 sm:px-3 sm:py-[3px] ml-4 sm:ml-12">
                    <div className="inline-flex h-8 sm:h-16 px-2 sm:px-4 space-x-2 sm:space-x-8 items-center">
                      <MinusIcon
                        className="cursor-pointer hover:text-gray-500"
                        onClick={() => handleQuantityChange(item._id, false)}
                      />
                      <p className="font-semibold select-none text-sm sm:text-base">
                        {item.quantity}
                      </p>
                      <PlusIcon
                        className="cursor-pointer hover:text-gray-500"
                        onClick={() => handleQuantityChange(item._id, true)}
                      />
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex items-center self-stretch pb-0.5 pl-2 sm:pl-[7px]">
                    <div className="text-sm sm:text-base">
                      {(
                        parseFloat(item.price.replace(/[^0-9.-]+/g, "")) *
                        item.quantity
                      ).toFixed(2)}
                    </div>
                  </div>

                  {/* Delete Button */}
                  <div
                    className="flex flex-col items-center pb-0.5"
                    onClick={() => handleRemove(item._id)}
                  >
                    <Image
                      src={Delete}
                      alt="Delete"
                      className="h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0"
                      width={28}
                      height={28}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="relative flex flex-col items-center justify-end gap-y-11 bg-[linen] px-6 sm:px-12 lg:px-[75px] pb-20 pt-32 w-full lg:w-auto">
            <h2 className="absolute left-[calc(50%_-_76.5px)] top-[15px] text-[32px] font-semibold">
              Cart Totals
            </h2>

            <div className="flex flex-col items-start gap-y-8">
              <div className="flex items-center justify-center gap-x-6 sm:gap-x-16">
                <div className="font-medium">Subtotal</div>
                <div className="text-neutral-400">{calculateSubtotal()}</div>
              </div>
              <div className="flex items-start justify-center gap-x-6 sm:gap-x-14 font-medium">
                <div>Total</div>
                <div className="text-xl text-[darkgoldenrod]">
                  {calculateSubtotal()}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                // Save current cart items to checkoutCart in localStorage
                localStorage.setItem("checkoutCart", JSON.stringify(cartItems));
                // Navigate to checkout page
                router.push("/checkout");
              }}
              className="flex items-center justify-center rounded-[15px] border-2 border-black px-10 lg:px-14 pb-3.5 pt-[13px] hover:bg-[#b88e2f] hover:text-white transition-colors"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <TrophyComponent />
    </div>
  );
}
