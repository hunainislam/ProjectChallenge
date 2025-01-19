"use client";

import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import TrophyComponent from "@/components/Trophy";
import { MinusIcon, PlusIcon } from "lucide-react";
import CartHero from "@/components/HeroSectionComponent/CartHero";

// Interface Cart Data

interface CartData {
  product: string;
  price: string;
  quantity: string;
  subtotal: string;
  deleteimage: string;
  carttotal: string;
  subtotaltext: string;
  total: string;
  checkout: string;
}

// Interface Product

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export default function CartContent() {
  const [cart, setCart] = useState<Product[]>([]); // Array to store cart items
  const [cartData, setCartData] = useState<CartData | null>(null);
  const [cartItems, setCartItems] = useState<any[]>([]);

  // Load cart data from localStorage

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const cartQuery = `*[_type == "cart"] [0] {
        product,
        price,
        quantity,
        subtotal,
        deleteimage,
        carttotal,
        subtotaltext,
        total,
        checkout,
    }`;

      const data = await client.fetch(cartQuery);
      setCartData(data);
    };

    fetchData();
  }, []);

  // Page Loading Condition
  if (!cartData) {
    return <div></div>;
  }

  // Handle Quantity Change Functionality
  const handleQuantityChange = (id: string, increment: boolean) => {
    setCartItems((prevCart) =>
      prevCart.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(product.quantity - 1, 1),
            }
          : product
      )
    );
    updateLocalStorage();
  };

  // Handle Remove Functionality
  const handleRemove = (id: string) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Add Product to Cart
  const addProductToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  // Update LocalStorage
  const updateLocalStorage = (updatedCart: Product[] = cart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="font-poppins w-full bg-white pb-12 tracking-[0px]">
      <CartHero />

      {/* Cart Title */}
      <div className="flex items-center justify-center bg-white px-6 sm:px-12 md:px-24 pb-16 pt-[42px]">
        <div className="flex flex-col lg:flex-row flex-grow flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] leading-[normal] min-[1430px]:flex-nowrap">
          <div className="flex flex-col items-start gap-y-14 leading-[normal] w-full lg:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-28 gap-y-3 bg-[linen] px-6 sm:px-12 lg:px-36 pb-4 pt-[15px] font-medium min-[1430px]:flex-nowrap">
              <div>{cartData.product}</div>
              <div>{cartData.price}</div>
              <div className="flex items-center justify-end gap-x-12 pl-6">
                <div>{cartData.quantity}</div>
                <div>{cartData.subtotal}</div>
              </div>
            </div>
            {cartItems.map((product) => (
              <div
                key={product.id}
                className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 pl-2 pr-4 sm:gap-x-[69px] sm:pl-[3px] sm:pr-6 min-[1430px]:flex-nowrap"
              >
                <div className="flex items-center justify-center gap-x-2 sm:gap-x-[34px]">
                  <div className="flex h-16 w-16 sm:lg:h-[105px] sm:lg:w-[105px] flex-shrink-0 flex-col items-center rounded-[10px] bg-[#b8860b33] pr-1 sm:pr-[3px]">
                    <Image
                      src={product.image}
                      alt={"no-image"}
                      className="h-16 w-16 sm:h-[105px] sm:w-[102px] flex-shrink-0 rounded-[10px] ml-1"
                      width={500}
                      height={500}
                    />
                  </div>
                  <div className="text-neutral-400 text-sm sm:text-base">
                    {product.name}
                  </div>
                </div>
                <div className="text-neutral-400 ml-4 sm:ml-8 text-sm sm:text-base">
                  {product.price}
                </div>
                <div className="flex items-center justify-end gap-x-4 sm:gap-x-12 pl-2 sm:pl-[15px] sm:ml-32">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[5px] border border-solid border-neutral-400 px-2 py-1 sm:px-3 sm:py-[3px] ml-4 sm:ml-12">
                    <div className="text-center">
                      <div className="inline-flex h-8 sm:h-16 px-2 sm:px-4 space-x-2 sm:space-x-8 items-center border-transparent rounded-[10px]">
                        <MinusIcon
                          className="cursor-pointer hover:text-gray-500"
                          onClick={() =>
                            handleQuantityChange(product.id, false)
                          }
                        />
                        <p className="font-semibold select-none text-sm sm:text-base">
                          {product.quantity}
                        </p>
                        <PlusIcon
                          className="cursor-pointer hover:text-gray-500"
                          onClick={() => handleQuantityChange(product.id, true)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center self-stretch pb-0.5 pl-2 sm:pl-[7px]">
                    <div className="text-sm sm:text-base">
                      {product.price
                        ? (
                            parseFloat(product.price.replace(/[^\d.-]/g, "")) *
                            product.quantity
                          ).toFixed(2)
                        : "0.00"}
                    </div>
                  </div>
                  <div
                    className="flex flex-col items-center pb-0.5"
                    onClick={() => handleRemove(product.id)}
                  >
                    <Image
                      src={urlFor(cartData.deleteimage).url()}
                      alt={"no-image"}
                      className="h-5 w-5 sm:h-7 sm:w-7 flex-shrink-0"
                      width={500}
                      height={500}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center justify-end gap-y-11 bg-[linen] px-6 sm:px-12 lg:px-[75px] pb-20 pt-32 w-full lg:w-auto">
            <div className="absolute left-[calc(50%_-_76.5px)] top-[15px] flex h-12 w-44 flex-shrink-0 items-center justify-center text-center text-[32px] font-semibold leading-[normal]">
              {cartData.carttotal}
            </div>
            <div className="flex flex-col items-start gap-y-8">
              <div className="flex items-center justify-center gap-x-6 sm:gap-x-16 leading-[normal]">
                <div className="font-medium">{cartData.subtotaltext}</div>
                <div className="text-neutral-400">
                  {cartItems
                    .reduce(
                      (total, product) =>
                        total +
                        parseFloat(product.price.replace(/[^\d.-]/g, "")) *
                          product.quantity,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-6 sm:gap-x-14 font-medium">
                <div className="leading-[normal]">{cartData.total}</div>
                <div className="text-xl leading-[normal] text-[darkgoldenrod]">
                  {cartItems
                    .reduce(
                      (total, product) =>
                        total +
                        parseFloat(product.price.replace(/[^\d.-]/g, "")) *
                          product.quantity,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pl-px">
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-10 lg:14 pb-3.5 pt-[13px]">
                <div className="text-center text-xl leading-[normal]">
                  <Link href={"/checkout"}>{cartData.checkout}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrophyComponent />
    </div>
  );
}
