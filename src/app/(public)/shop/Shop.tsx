"use client";

import Link from "next/link";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import NextButton from "@/components/NextButton";
import { MdCompareArrows } from "react-icons/md";
import TrophyComponent from "@/components/Trophy";
import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import ShopHero from "@/components/HeroSectionComponent/ShopHero";
import { ImCross } from "react-icons/im";

// Type OurProduct

type ourProduct = {
  mainheading: string;
  relatedproduct: string;
  shoppingcart: string;
  rs: string;
  add: string;
  less: string;
  subtotal: string;
  cart: string;
  checkout: string;
  comparison: string;
  addtocart: string;
  share: string;
  compare: string;
  like: string;
  id: number;
  name: string;
  description: string;
  price: string;
  oldPrice: string | null;
  imageClass: string;
  label50?: number | null;
  labelnew?: string | null;
  imagelabelred?: string | null;
  imagelabelgreen?: string | null;
  button: string;
};

// Type CartItem

type CartItem = ourProduct & {
  quantity: number;
};

export default function Shop() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [products, setProducts] = useState<ourProduct[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  const toggleCart = () => {
    setCartOpen(!isCartOpen); // Toggle cart visibility
  };

  // Fetch Product Data For Sanity

  useEffect(() => {
    const fetchProductData = async () => {
      const query = `*[_type == "product"][0..7] {
            mainheading,
            relatedproduct,
            shoppingcart,
            rs,
            add,
            less,
            subtotal,
            cart,
            checkout,
            comparison,
            addtocart,
            share,
            compare,
            like,
            name,
            description,
            price,
            oldPrice,
            image,
            label50,
            labelnew,
            imagelabelred,
            imagelabelgreen,
            button,
          }`;

      // API Handling For Sanity

      const data = await client.fetch(query);
      const formattedData = data.map((item: any, index: number) => ({
        mainheading: item.mainheading,
        relatedproduct: item.relatedproduct,
        shoppingcart: item.shoppingcart,
        rs: item.rs,
        add: item.add,
        less: item.less,
        subtotal: item.subtotal,
        cart: item.cart,
        checkout: item.checkout,
        comparison: item.comparison,
        addtocart: item.addtocart,
        share: item.share,
        compare: item.compare,
        like: item.like,
        id: index + 1, // Generate unique IDs
        name: item.name,
        description: item.description,
        price: item.price,
        oldPrice: item.oldPrice || null,
        imageClass: item.image ? urlFor(item.image).url() : "",
        label50: item.label50 || null,
        labelnew: item.labelnew || null,
        imagelabelred: item.imagelabelred
          ? urlFor(item.imagelabelred).url()
          : null,
        imagelabelgreen: item.imagelabelgreen
          ? urlFor(item.imagelabelgreen).url()
          : null,
        button: item.button,
      }));
      setProducts(formattedData);
    };

    fetchProductData();
  }, []);

  // Page Loading Condition

  if (!products) {
    return <div></div>;
  }

  // Handle AddToCart Functionality

  const handleAddToCart = (product: ourProduct) => {
    // Define logic for adjusting the price dynamically
    const dynamicPrice = (originalPrice: string | number) => {
      // Ensure price is a valid number
      const price =
        typeof originalPrice === "string"
          ? parseFloat(originalPrice.replace(/[^\d.-]/g, ""))
          : originalPrice;

      if (isNaN(price)) {
        console.error("Invalid price format:", originalPrice);
        return "0.00"; // Default to 0 if price is invalid
      }

      // Example logic: Apply a 10% discount if price exceeds 1000
      const discount = 0.1; // 10% discount
      return price > 1000
        ? (price * (1 - discount)).toFixed(2)
        : price.toFixed(2);
    };

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: dynamicPrice(product.price), // Adjust price dynamically
              }
            : item
        );
      } else {
        return [
          ...prevCart,
          {
            ...product,
            quantity: 1,
            price: dynamicPrice(product.price), // Initial dynamic price
          },
        ];
      }
    });

    setCartOpen(true); // Open cart after adding
  };

  // Handle RemoveCart Functionality

  const handleRemoveFromCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);

      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        return prevCart.filter((item) => item.id !== product.id);
      }
    });
  };

  return (
    <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
      <ShopHero />

      {/* Product 1 */}

      {/* Cart */}

      {isCartOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50">
          <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
            {/* Header */}

            <div className="flex items-center justify-between -mt-16">
              <h2 className="text-2xl font-semibold">
                {products.length > 0 && products[0].shoppingcart}
              </h2>
              <button
                onClick={toggleCart}
                className="text-lg font-bold hover:text-[#b88e2f]"
              >
                <ImCross />
              </button>
            </div>
            <hr className="my-4" />

            {/* Product List */}

            <div
              className="flex flex-col gap-6 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "300px" }} // Adjust the height as needed
            >
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={item.imageClass}
                      alt={item.name}
                      width={105}
                      height={105}
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">{item.name}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#b88e2f] font-medium">
                        {products.length > 0 && products[0].rs}{" "}
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {products.length > 0 && products[0].add}
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {products.length > 0 && products[0].less}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}

            <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
              <span>{products.length > 0 && products[0].subtotal}</span>
              <span className="text-[#b88e2f]">
                {products.length > 0 && products[0].rs}{" "}
                {cart.reduce(
                  (total, item) =>
                    total + parseFloat(item.price) * item.quantity,
                  0
                )}
              </span>
            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link href={"/cart"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].cart}
                </button>
              </Link>
              <Link href={"/checkout"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].checkout}
                </button>
              </Link>
              <Link href={"/comparison"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].comparison}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Product Cards */}

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
            onClick={() =>
              (window.location.href = `/singleproduct?id=${product.id}&name=${encodeURIComponent(
                product.name
              )}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(
                product.description
              )}&image=${encodeURIComponent(product.imageClass)}`)
            }
          >
            {/* Image Section */}

            <div
              className=" relative flex flex-col bg-cover bg-center h-72"
              style={{ backgroundImage: `url(${product.imageClass})` }}
            >
              {product.label50 && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={product.imagelabelred || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-20"
                      width={500}
                      height={500}
                    />
                    <div className="z-10 text-center mt-2 font-semibold text-white">
                      -{product.label50}%
                    </div>
                  </div>
                </div>
              )}

              {product.labelnew && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={product.imagelabelgreen || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-12"
                      width={100}
                      height={100}
                    />
                    <div className="z-10 text-center mt-1 font-medium text-lg text-white">
                      {product.labelnew}
                    </div>
                  </div>
                </div>
              )}

              {/* Hover Div */}

              <div
                className="absolute inset-0 flex-col items-center justify-center hidden gap-y-6 bg-neutral-700/70 group-hover:flex"
                onClick={(e) => e.stopPropagation()} // Prevent card click event
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    toggleCart();
                    handleAddToCart(product);
                  }}
                  className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                >
                  {products.length > 0 && products[0].addtocart}
                </button>
                <div className="flex items-center gap-x-4 text-white">
                  <div className="flex items-center gap-x-1">
                    <IoShareSocialOutline />
                    <div>{products.length > 0 && products[0].share}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <MdCompareArrows />
                    <div>{products.length > 0 && products[0].compare}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <CiHeart />
                    <div>{products.length > 0 && products[0].like}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}

            <div className="flex flex-col items-start gap-y-2 bg-gray-100 p-4">
              <div className="text-2xl font-semibold text-neutral-700">
                {product.name}
              </div>
              <div className="text-gray-500">{product.description}</div>
              <div className="flex items-center gap-x-4">
                <div className="text-xl font-semibold text-neutral-700">
                  {product.price}
                </div>
                {product.oldPrice && (
                  <div className="text-gray-400 line-through">
                    {product.oldPrice}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product 2 */}

      {/* Cart */}

      {isCartOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50">
          <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
            {/* Header */}

            <div className="flex items-center justify-between -mt-16">
              <h2 className="text-2xl font-semibold">
                {products.length > 0 && products[0].shoppingcart}
              </h2>
              <button
                onClick={toggleCart}
                className="text-lg font-bold hover:text-[#b88e2f]"
              >
                <ImCross />
              </button>
            </div>
            <hr className="my-4" />

            {/* Product List */}

            <div
              className="flex flex-col gap-6 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "300px" }} // Adjust the height as needed
            >
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={item.imageClass}
                      alt={item.name}
                      width={105}
                      height={105}
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">{item.name}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#b88e2f] font-medium">
                        {products.length > 0 && products[0].rs}{" "}
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {products.length > 0 && products[0].add}
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {products.length > 0 && products[0].less}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}

            <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
              <span>{products.length > 0 && products[0].subtotal}</span>
              <span className="text-[#b88e2f]">
                {products.length > 0 && products[0].rs}{" "}
                {cart.reduce(
                  (total, item) =>
                    total + parseFloat(item.price) * item.quantity,
                  0
                )}
              </span>
            </div>

            {/* Buttons */}

            <div className="flex gap-4 mt-10 flex-wrap">
              <Link href={"/cart"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].cart}
                </button>
              </Link>
              <Link href={"/checkout"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].checkout}
                </button>
              </Link>
              <Link href={"/comparison"}>
                <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f]">
                  {products.length > 0 && products[0].comparison}
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Product Cards */}

      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 mt-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
            onClick={() =>
              (window.location.href = `/singleproduct?id=${product.id}&name=${encodeURIComponent(
                product.name
              )}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(
                product.description
              )}&image=${encodeURIComponent(product.imageClass)}`)
            }
          >
            {/* Image Section */}

            <div
              className=" relative flex flex-col bg-cover bg-center h-72"
              style={{ backgroundImage: `url(${product.imageClass})` }}
            >
              {product.label50 && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={product.imagelabelred || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-20"
                      width={500}
                      height={500}
                    />
                    <div className="z-10 text-center mt-2 font-semibold text-white">
                      -{product.label50}%
                    </div>
                  </div>
                </div>
              )}

              {product.labelnew && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={product.imagelabelgreen || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-12"
                      width={100}
                      height={100}
                    />
                    <div className="z-10 text-center mt-1 font-medium text-lg text-white">
                      {product.labelnew}
                    </div>
                  </div>
                </div>
              )}

              {/* Hover Div */}

              <div
                className="absolute inset-0 flex-col items-center justify-center hidden gap-y-6 bg-neutral-700/70 group-hover:flex"
                onClick={(e) => e.stopPropagation()} // Prevent card click event
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click event
                    toggleCart();
                    handleAddToCart(product);
                  }}
                  className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                >
                  {products.length > 0 && products[0].addtocart}
                </button>
                <div className="flex items-center gap-x-4 text-white">
                  <div className="flex items-center gap-x-1">
                    <IoShareSocialOutline />
                    <div>{products.length > 0 && products[0].share}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <MdCompareArrows />
                    <div>{products.length > 0 && products[0].compare}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <CiHeart />
                    <div>{products.length > 0 && products[0].like}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}

            <div className="flex flex-col items-start gap-y-2 bg-gray-100 p-4">
              <div className="text-2xl font-semibold text-neutral-700">
                {product.name}
              </div>
              <div className="text-gray-500">{product.description}</div>
              <div className="flex items-center gap-x-4">
                <div className="text-xl font-semibold text-neutral-700">
                  {product.price}
                </div>
                {product.oldPrice && (
                  <div className="text-gray-400 line-through">
                    {product.oldPrice}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <NextButton />

      <TrophyComponent />
    </div>
  );
}