"use client";

import LabelCyan from "../../../public/images/label1.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import React, { useState } from "react";
import AsgardSofa1 from "../../../public/images/Asgaard sofa.png";
import Multi from "../../../public/images/multi.png";
import sofa4 from "../../../public/images/sofa4.png";
import Image from "next/image";
import Hero1 from "../../../public/images/Hero1.png";
import RightArrow from "../../../public/images/downarrow.png";
import Uicons from "../../../public/images/uicons.png";
import Cigrid from "../../../public/images/ci-grid.png";
import ViewList from "../../../public/images/view-list.png";
import Label from "../../../public/images/label.png";
import Trophy from "../../../public/images/trophy.png";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function Shop() {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!isCartOpen); // Toggle cart visibility
  };
  const products = [
    {
      id: 1,
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      imageClass: "bg-ImageRoom",
    },
    {
      id: 2,
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: null,
      imageClass: "bg-FeaturedProduct",
    },
    {
      id: 3,
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      imageClass: "bg-Sofa",
      label: "30%",
    },
    {
      id: 4,
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      oldPrice: null,
      imageClass: "bg-Room",
      label1: "New",
    },
  ];
  return (
    <div className="font-poppins relative z-0 flex w-full flex-col items-center leading-[normal] tracking-[0px] overflow-hidden">
      <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
        {/* Hero Section */}
        <Image
          src={Hero1}
          alt="no-image"
          loading="lazy"
          className="z-[1] w-full h-80 object-cover object-center"
        />
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 sm:inset-x-20 sm:top-0 sm:bottom-0">
          <div className="flex flex-col items-center justify-center gap-y-2">
            {/* Logo */}
            <Image
              src={Logo}
              alt="no-image"
              loading="lazy"
              className="h-10 w-16 object-cover"
            />
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
              Shop
            </h1>
          </div>
          <div className="mt-4 sm:mt-8 flex items-center justify-center">
            <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
              Home
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Image src={RightArrow} alt="no-image" className="h-5 w-5" />
              <span className="text-sm font-light text-black">Shop</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
      </div>

      {/* Filter Section */}
      <div className="flex w-full flex-col bg-[linen] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Filter Buttons */}
          <div className="flex items-center gap-3">
            <Image src={Uicons} alt="no-image" className="h-6 w-6" />
            <span className="text-sm sm:text-lg">Filter</span>
            <Image src={Cigrid} alt="no-image" className="h-6 w-6" />
            <Image src={ViewList} alt="no-image" className="h-6 w-6" />
          </div>
          {/* Separator */}
          <div className="hidden sm:flex h-6 w-px bg-gray-300"></div>
          {/* Results */}
          <div className="text-xs sm:text-base text-gray-600">
            Showing 1–16 of 32 results
          </div>
        </div>
        {/* Sorting Options */}
        <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0">
          <span className="text-sm sm:text-lg">Show</span>
          <div className="flex h-10 w-10 items-center justify-center bg-white text-gray-500 rounded-md shadow-md">
            16
          </div>
          <span className="text-sm sm:text-lg">Sort by</span>
          <div className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md">
            Default
          </div>
        </div>
      </div>

      {/* Our Product1 */}

      <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
        {/* Cart */}
        {isCartOpen && (
          <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
            <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
              {/* Header */}
              <div className="flex items-center justify-between -mt-16">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-lg font-bold hover:text-red-500"
                >
                  X
                </button>
              </div>
              <hr className="my-4" />

              {/* Product List */}
              <div className="flex flex-col gap-6">
                {/* Product 1 */}
                <div className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={AsgardSofa1}
                      alt="Remove"
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Asgaard Sofa</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 250,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4">
                  <div className="h-[102px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0">
                    <Image src={sofa4} alt="Remove" className="h-30 w-30" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Casaliving Wood</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 270,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
                <span>Subtotal</span>
                <span className="text-[#b88e2f]">Rs. 520,000.00</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">
                <Link href={"/cart"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Cart
                  </button>
                </Link>
                <Link href={"/checkout"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Checkout
                  </button>
                </Link>
                <Link href={"/comparison"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-center pl-[5px]">
          <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700 mt-10">
            Our Products
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
              onClick={() => (window.location.href = `/singleproduct`)} // Navigate to single product page
            >
              {/* Image Section */}
              <div
                className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
              >
                {product.label && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={Label}
                        alt="Discount Label"
                        className="absolute -inset-0 z-0 h-10 w-20"
                      />
                      <div className="z-10 text-center mt-2 font-semibold text-white">
                        -50%
                      </div>
                    </div>
                  </div>
                )}

                {product.label1 && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={LabelCyan}
                        alt="Discount Label"
                        className="absolute -inset-0 h-10 w-12"
                      />
                      <div className="z-10 text-center mt-2 font-medium text-white">
                        New
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
                      toggleCart(); // Toggle cart visibility
                    }}
                    className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center gap-x-4 text-white">
                    <div className="flex items-center gap-x-1">
                      <IoShareSocialOutline />
                      <div>Share</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <MdCompareArrows />
                      <div>Compare</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiHeart />
                      <div>Like</div>
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
      </div>

      {/* Our Product2 */}

      <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
        {/* Cart */}
        {isCartOpen && (
          <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
            <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
              {/* Header */}
              <div className="flex items-center justify-between -mt-16">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-lg font-bold hover:text-red-500"
                >
                  X
                </button>
              </div>
              <hr className="my-4" />

              {/* Product List */}
              <div className="flex flex-col gap-6">
                {/* Product 1 */}
                <div className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={AsgardSofa1}
                      alt="Remove"
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Asgaard Sofa</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 250,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4">
                  <div className="h-[102px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0">
                    <Image src={sofa4} alt="Remove" className="h-30 w-30" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Casaliving Wood</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 270,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
                <span>Subtotal</span>
                <span className="text-[#b88e2f]">Rs. 520,000.00</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">
                <Link href={"/cart"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Cart
                  </button>
                </Link>
                <Link href={"/checkout"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Checkout
                  </button>
                </Link>
                <Link href={"/comparison"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
              onClick={() => (window.location.href = `/singleproduct`)} // Navigate to single product page
            >
              {/* Image Section */}
              <div
                className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
              >
                {product.label && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={Label}
                        alt="Discount Label"
                        className="absolute -inset-0 z-0 h-10 w-20"
                      />
                      <div className="z-10 text-center mt-2 font-semibold text-white">
                        -50%
                      </div>
                    </div>
                  </div>
                )}

                {product.label1 && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={LabelCyan}
                        alt="Discount Label"
                        className="absolute -inset-0 h-10 w-12"
                      />
                      <div className="z-10 text-center mt-2 font-medium text-white">
                        New
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
                      toggleCart(); // Toggle cart visibility
                    }}
                    className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center gap-x-4 text-white">
                    <div className="flex items-center gap-x-1">
                      <IoShareSocialOutline />
                      <div>Share</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <MdCompareArrows />
                      <div>Compare</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiHeart />
                      <div>Like</div>
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
      </div>

      {/* Our Product3 */}

      <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
        {/* Cart */}
        {isCartOpen && (
          <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
            <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
              {/* Header */}
              <div className="flex items-center justify-between -mt-16">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-lg font-bold hover:text-red-500"
                >
                  X
                </button>
              </div>
              <hr className="my-4" />

              {/* Product List */}
              <div className="flex flex-col gap-6">
                {/* Product 1 */}
                <div className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={AsgardSofa1}
                      alt="Remove"
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Asgaard Sofa</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 250,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4">
                  <div className="h-[102px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0">
                    <Image src={sofa4} alt="Remove" className="h-30 w-30" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Casaliving Wood</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 270,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
                <span>Subtotal</span>
                <span className="text-[#b88e2f]">Rs. 520,000.00</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">
                <Link href={"/cart"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Cart
                  </button>
                </Link>
                <Link href={"/checkout"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Checkout
                  </button>
                </Link>
                <Link href={"/comparison"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
              onClick={() => (window.location.href = `/singleproduct`)} // Navigate to single product page
            >
              {/* Image Section */}
              <div
                className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
              >
                {product.label && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={Label}
                        alt="Discount Label"
                        className="absolute -inset-0 z-0 h-10 w-20"
                      />
                      <div className="z-10 text-center mt-2 font-semibold text-white">
                        -50%
                      </div>
                    </div>
                  </div>
                )}

                {product.label1 && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={LabelCyan}
                        alt="Discount Label"
                        className="absolute -inset-0 h-10 w-12"
                      />
                      <div className="z-10 text-center mt-2 font-medium text-white">
                        New
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
                      toggleCart(); // Toggle cart visibility
                    }}
                    className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center gap-x-4 text-white">
                    <div className="flex items-center gap-x-1">
                      <IoShareSocialOutline />
                      <div>Share</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <MdCompareArrows />
                      <div>Compare</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiHeart />
                      <div>Like</div>
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
      </div>

      {/* Our Product4 */}

      <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
        {/* Cart */}
        {isCartOpen && (
          <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50 ">
            <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[300px] sm:w-[420px] shadow-lg mt-16">
              {/* Header */}
              <div className="flex items-center justify-between -mt-16">
                <h2 className="text-2xl font-semibold">Shopping Cart</h2>
                <button
                  onClick={toggleCart}
                  className="text-lg font-bold hover:text-red-500"
                >
                  X
                </button>
              </div>
              <hr className="my-4" />

              {/* Product List */}
              <div className="flex flex-col gap-6">
                {/* Product 1 */}
                <div className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={AsgardSofa1}
                      alt="Remove"
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Asgaard Sofa</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 250,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>

                {/* Product 2 */}
                <div className="flex items-center gap-4">
                  <div className="h-[102px] w-[105px] bg-[#b88e2f33] rounded-lg flex-shrink-0">
                    <Image src={sofa4} alt="Remove" className="h-30 w-30" />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">Casaliving Wood</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span>1 x</span>
                      <span className="text-[#b88e2f] font-medium">
                        Rs. 270,000.00
                      </span>
                    </div>
                  </div>
                  <button>
                    <Image src={Multi} alt="Remove" className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Subtotal */}
              <div className="flex justify-between items-center mt-20 text-lg font-semibold sm:mt-40">
                <span>Subtotal</span>
                <span className="text-[#b88e2f]">Rs. 520,000.00</span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">
                <Link href={"/cart"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Cart
                  </button>
                </Link>
                <Link href={"/checkout"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Checkout
                  </button>
                </Link>
                <Link href={"/comparison"}>
                  <button className="border border-black px-6 py-2 rounded-full hover:bg-gray-100">
                    Comparison
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Product Cards */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
              onClick={() => (window.location.href = `/singleproduct`)} // Navigate to single product page
            >
              {/* Image Section */}
              <div
                className={`${product.imageClass} relative flex flex-col bg-cover bg-center h-72`}
              >
                {product.label && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={Label}
                        alt="Discount Label"
                        className="absolute -inset-0 z-0 h-10 w-20"
                      />
                      <div className="z-10 text-center mt-2 font-semibold text-white">
                        -50%
                      </div>
                    </div>
                  </div>
                )}

                {product.label1 && (
                  <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={LabelCyan}
                        alt="Discount Label"
                        className="absolute -inset-0 h-10 w-12"
                      />
                      <div className="z-10 text-center mt-2 font-medium text-white">
                        New
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
                      toggleCart(); // Toggle cart visibility
                    }}
                    className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                  >
                    Add to Cart
                  </button>
                  <div className="flex items-center gap-x-4 text-white">
                    <div className="flex items-center gap-x-1">
                      <IoShareSocialOutline />
                      <div>Share</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <MdCompareArrows />
                      <div>Compare</div>
                    </div>
                    <div className="flex items-center gap-x-1">
                      <CiHeart />
                      <div>Like</div>
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
      </div>

      <div className="flex items-end justify-center pr-1.5 pt-[20px]">
        <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[30px] text-center text-xl leading-[normal] min-[1430px]:flex-nowrap">
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[darkgoldenrod] py-[15px] pl-7 pr-[26px] text-white">
            1
          </div>
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
            2
          </div>
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
            3
          </div>
          <div className="rounded-[10px] bg-[linen] px-7 py-[15px] font-light">
            Next
          </div>
        </div>
      </div>

      <div className="z-[2] flex flex-col justify-center bg-orange-50 py-24 pl-12 w-full mt-20">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 leading-normal min-[1430px]:flex-nowrap">
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Trophy}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] self-center font-semibold leading-normal text-neutral-800">
                High Quality
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                crafted from top materials
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Guarantee}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                Warranty Protection
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Over 2 years
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Sheeping}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                Free Shipping Safe
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Order over 150 $
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Customer}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800 text-center">
                24 / 7 Support Customer
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Dedicated support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
