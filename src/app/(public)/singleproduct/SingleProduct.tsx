"use client";

import Link from "next/link";
import Image from "next/image";
import ReactStars from "react-stars";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import SingleProductCardData from "@/components/SingleProductCardData";

// Interface SingleProduct

interface SingleProduct {
  home: string;
  shop: string;
  rs: string;
  customstar: string;
  size: string;
  addtocart: string;
  compare: string;
  sku: string;
  category: string;
  tags: string;
  paragraph1: string;
  paragraph2: string;
  cloudsofaimage: string;
  relatedproduct: string;
  share: string;
}

export default function ProductDetailPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [singleProductData, setSingleProductData] =
    useState<SingleProduct | null>(null);
  const [cart, setCart] = useState<any[]>([]); // Cart state

  // Use Serach Params For Next Navigation

  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = searchParams.get("image");
  const tags = searchParams.get("tags");

  // Fetch Single Product Data For Sanity

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const singleProductQuery = `
            *[_type == "singleproduct"][0] {
              home,
              shop,
              rs,
              customstar,
              size,
              addtocart,
              compare,
              sku,
              category,
              tags,
              paragraph1,
              paragraph2,
              cloudsofaimage,
              relatedproduct,
              share
            }
          `;
          const data = await client.fetch(singleProductQuery);
          setSingleProductData(data);
        } catch (error) {
          console.error("Error fetching single product data:", error);
          // Optionally, handle the error here (e.g., show a message to the user)
        }
      };

      fetchData();
    }
  }, [id]);

  // Page Invalid Id

  if (!id) {
    return <div></div>;
  }

  // Page Loading Condition

  if (!singleProductData) {
    return (
      <div className="flex justify-center items-center h-screen space-x-4">
        <div className="border-t-[6px] border-[#b88e2f] border-solid w-16 h-16 rounded-full animate-spin delay-300"></div>
        <div className="text-2xl font-bold text-gray-700 animate-bounce">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b88e2f] via-black to-[#b88e2f]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  const MAX_QUANTITY = 100;

  const thumbnails = [
    image as string,
    image as string,
    image as string,
    image as string,
    image as string,
  ];

  const handleQuantityDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleQuantityIncrement = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    const newCartItem = {
      id,
      name,
      price,
      description,
      image,
      quantity,
    };

    // Update cart state
    setCart((prevCart) => [...prevCart, newCartItem]);

    // Optional: Save to localStorage
    localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));

    alert(`Added ${quantity} ${name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 overflow-hidden">
      {/* Single Product Label */}
      <section className="bg-[#F9F1E7] py-4 px-4 rounded-lg flex items-center space-x-2 overflow-x-auto">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-[#9F9F9F]">{singleProductData.home}</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="text-[#9F9F9F]">{singleProductData.shop}</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="font-semibold">{name}</span>
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
                className={`flex-shrink-0 mt-12 bg-primary-light h-16 w-16 md:h-20 md:w-20 rounded-[8px] cursor-pointer ${
                  activeImage === thumb ? "border-2 border-black" : ""
                }`}
              >
                <Image
                  src={thumb}
                  alt={name as string}
                  className="object-contain w-full h-full"
                  width={500}
                  height={500}
                />
              </div>
            ))}
          </div>

          {/* Main Image */}

          <div className="flex-grow bg-primary-light rounded-[8px] flex items-center justify-center ">
            <Image
              src={image as string}
              alt={name as string}
              className="object-contain max-h-[500px] max-w-full rounded-[10px]"
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Right Section: Product Details */}

        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-normal">
            {name}
          </h1>
          <p className="text-xl md:text-2xl font-medium">
            {price
              ? (parseFloat(price.replace(/[^\d.-]/g, "")) * quantity).toFixed(
                  2
                )
              : "0.00"}
          </p>

          {/* Reviews */}

          <div className="flex items-center space-x-2">
            <ReactStars
              count={5}
              size={24}
              color2={"#FFC700"}
              className="flex"
            />
          </div>

          <p className="text-[#9F9F9F] text-base line-clamp-1">{description}</p>

          {/* Size */}

          <div className="space-y-2">
            <p className="text-base text-[#9F9F9F] font-semibold">
              {singleProductData.size}
            </p>
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

            {/* All Product Navigate To Cart */}
            <div className="flex space-x-4">
              <button
                className="bg-black text-white px-6 py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
                onClick={handleAddToCart}
              >
                {singleProductData.addtocart}
              </button>
              <Link href={"/comparison"}>
                <button className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors">
                  {singleProductData.compare}
                </button>
              </Link>
            </div>
          </div>

          <div className="text-[#9F9F9F] text-sm space-y-2">
            <p>
              <strong>{singleProductData.sku}</strong> {id}
            </p>
            <p>
              <strong>{singleProductData.category}</strong> {name}
            </p>
            <p>
              <strong>{singleProductData.tags}</strong> {tags}
            </p>
            <div className="flex items-center space-x-2">
              <strong>{singleProductData.share}</strong>
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
                className={`text-lg md:text-2xl pb-2 whitespace-nowrap ${
                  index === 0 ? "text-black font-semibold" : "text-[#9F9F9F]"
                }`}
              >
                {tab}
              </p>
            )
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-8 space-y-4">
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            {singleProductData.paragraph1}
          </p>
          <p className="text-[#9F9F9F] text-center text-base leading-relaxed">
            {singleProductData.paragraph2}
          </p>
        </div>

        {/* Cart Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {[
            singleProductData.cloudsofaimage,
            singleProductData.cloudsofaimage,
          ].map((image, index) => (
            <div key={index} className={`bg-[#F9F1E7] rounded-2xl p-4`}>
              <Image
                src={urlFor(image).url()} // Generate URL dynamically
                alt={`Cloud Sofa Image ${index + 1}`} // Unique alt text for accessibility
                width={600}
                height={400}
                className="rounded-[8px] object-cover w-full"
              />
            </div>
          ))}
        </div>
        <SingleProductCardData />
      </section>
    </div>
  );
}
