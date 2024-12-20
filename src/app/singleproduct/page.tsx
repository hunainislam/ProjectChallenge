"use client";

import Label from "../../../public/images/label.png";
import LabelCyan from "../../../public/images/label1.png";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import ReactStars from "react-stars";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Asgard from "../../../public/images/Asgaard sofa.png";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import AsgardSofa1 from "../../../public/images/Asgaard sofa.png";
import Multi from "../../../public/images/multi.png";
import sofa4 from "../../../public/images/sofa4.png";
import Link from "next/link";

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("/images/product-sofa.png");

  const MAX_QUANTITY = 5;
  const productId = "SS001";
  const productTitle = "Asgaard Sofa";
  const productPrice = 250000;

  const thumbnails = [
    "/images/Outdoor-sofa .png",
    "/images/Outdoorsofa2.png",
    "/images/Stuartsofa3.png",
    "/images/Mayasofa4.png",
  ];

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrement = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };

  const [isCartOpen, setCartOpen] = useState(false); // State to manage cart visibility

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 overflow-hidden">
      <section className="bg-[#F9F1E7] py-4 px-4 rounded-lg flex items-center space-x-2 overflow-x-auto">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-[#9F9F9F]">Home</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="text-[#9F9F9F]">Shop</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="font-semibold">Asgaard sofa</span>
        </div>
      </section>

      {/* Product Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Section: Images */}
        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-4 scrollbar-hide">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(thumb)}
                className={`flex-shrink-0 bg-primary-light h-16 w-16 md:h-20 md:w-20 rounded-[8px] cursor-pointer 
                  ${activeImage === thumb ? "border-2 border-black" : ""}`}
              >
                <Image
                  src={thumb}
                  alt={`Product Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-grow bg-primary-light rounded-[8px] flex items-center justify-center">
            <Image
              src={Asgard}
              alt="Main Product Image"
              width={500}
              height={500}
              priority
              className="object-contain max-h-[500px] max-w-full rounded-[10px]"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
            {productTitle}
          </h1>
          <p className="text-xl md:text-2xl text- font-medium">
            Rs. {productPrice.toLocaleString()}.00
          </p>

          {/* Reviews */}
          <div className="flex items-center space-x-2">
            <ReactStars count={5} size={24} color2={"#FFC700"} />
            <p className="text-[#9F9F9F] text-base">5 Customer Reviews</p>
          </div>

          {/* Size */}
          <div className="space-y-2">
            <p className="text-base text-[#9F9F9F] font-semibold">Size</p>
            <div className="flex space-x-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  className="border border-black rounded-full w-10 h-10 text-center hover:bg-black hover:text-white transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          <div className="flex items-end px-px pt-3">
            <div className="flex items-center justify-center gap-x-4">
              <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-[mediumslateblue]" />
              <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-black" />
              <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-[darkgoldenrod]" />
            </div>
          </div>

          {/* Quantity and Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="inline-flex h-16 px-4 space-x-8 items-center border border-[#9F9F9F] rounded-[10px]">
              <MinusIcon
                className="cursor-pointer hover:text-gray-500"
                onClick={handleQuantityDecrement}
              />
              <p className="font-semibold select-none">{quantity}</p>
              <PlusIcon
                className="cursor-pointer hover:text-gray-500"
                onClick={handleQuantityIncrement}
              />
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button
                className="bg-black text-white px-6 py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
              >
                Add to Cart
              </button>
              <Link href={"/comparison"}>
              <button className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors">
                + Compare
              </button>
              </Link>
            </div>
          </div>

          <div className="text-[#9F9F9F] text-sm space-y-2">
            <p>
              <strong>SKU:</strong> {productId}
            </p>
            <p>
              <strong>Category:</strong> Sofas
            </p>
            <p>
              <strong>Tags:</strong> Sofa, Chair, Home, Shop
            </p>
            <div className="flex items-center space-x-2">
              <strong>Share:</strong>
              <div className="flex space-x-2">
                {[Facebook, Linkedin, Twitter].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-black hover:text-gray-600 transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="mt-12 pb-10 border-b">
        <div className="flex justify-center space-x-8 overflow-x-auto">
          {["Description", "Additional Information", "Reviews [5]"].map(
            (tab, index) => (
              <p
                key={index}
                className={`text-lg md:text-2xl pb-2 whitespace-nowrap 
                ${index === 0 ? "text-black font-semibold" : "text-[#9F9F9F]"}`}
              >
                {tab}
              </p>
            )
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-4">
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage-styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {["cloudSofa.png", "CloudSofa2.png"].map((img, index) => (
            <Image
              key={index}
              src={`/images/${img}`}
              alt={`Description Image ${index + 1}`}
              width={600}
              height={400}
              className="rounded-[8px] object-cover w-full"
            />
          ))}
        </div>

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
              Related Products
            </div>
          </div>

          {/* Product Cards */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
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
                  <div className="absolute inset-0 flex-col items-center justify-center hidden gap-y-6 bg-neutral-700/70 group-hover:flex">
                    <button
                      onClick={toggleCart} // Toggle cart visibility on click
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

          {/* Show More Button */}
          <div className="flex items-center justify-center pl-px ">
            <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-white px-[73px] py-[11px]">
              <div className="pl-2 text-center font-semibold leading-normal text-[darkgoldenrod] ">
                Show More
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
