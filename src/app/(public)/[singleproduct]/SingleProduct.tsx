"use client";

import Image from "next/image";
import ReactStars from "react-stars";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronRight, MinusIcon, PlusIcon } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import SingleProductCardData from "@/components/SingleProductCardData";

interface ProductDetailPageProps {
  productId: string;
}

export default function ProductDetailPage({
  productId,
}: ProductDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [cart, setCart] = useState<any[]>([]); // Cart state
  const [wishlist, setWishlist] = useState<any[]>([]); // Wishlist state

  // Use Serach Params For Next Navigation

  const searchParams = useSearchParams();
  const id = productId || searchParams.get("id");
  const name = searchParams.get("name");
  const price = searchParams.get("price");
  const description = searchParams.get("description");
  const image = decodeURIComponent(searchParams.get("image") || "");
  const tags = searchParams.get("tags");

  const MAX_QUANTITY = 100;

  const leftSideImages = [
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
      _id: id,
      title: name,
      price,
      productImage: image as string,
      quantity,
    };

    // Update cart state
    setCart((prevCart) => [...prevCart, newCartItem]);

    // localStorage को update करें
    localStorage.setItem("cart", JSON.stringify([...cart, newCartItem]));

    alert(`Added ${quantity} ${name} to cart`);
    window.location.href = "/cart";
  };

  const handleAddToWishlist = () => {
    const newWishlistItem = {
      id,
      name,
      price,
      description,
      image,
    };

    // Update wishlist state
    setWishlist((prevWishlist) => [...prevWishlist, newWishlistItem]);

    // Optional: Save to localStorage
    localStorage.setItem(
      "wishlist",
      JSON.stringify([...wishlist, newWishlistItem])
    );

    alert(`Added ${name} to wishlist`);
  };

  const handleAddToComparison = () => {
    const comparisonProducts = JSON.parse(
      localStorage.getItem("comparisonCart") || "[]"
    );

    // Check if product already exists in comparison
    const existingProduct = comparisonProducts.find((p: any) => p.id === id);

    if (!existingProduct) {
      const newComparisonProduct = {
        id,
        title: name,
        price,
        productImage: image,
        description,
        tags,
        quantity: 1,
      };

      const updatedComparison = [...comparisonProducts, newComparisonProduct];
      localStorage.setItem("comparisonCart", JSON.stringify(updatedComparison));
    }

    // Navigate to comparison page
    window.location.href = "/comparison";
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 overflow-hidden">
      {/* Single Product Label */}
      <section className="bg-[#F9F1E7] py-4 px-4 rounded-lg flex items-center space-x-2 overflow-x-auto">
        <div className="flex items-center space-x-2 whitespace-nowrap">
          <span className="text-[#9F9F9F]">Home</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="text-[#9F9F9F]">Shop</span>
          <ChevronRight className="w-4 h-4 text-[#9F9F9F]" />
          <span className="font-semibold">{name}</span>
        </div>
      </section>

      {/* Product Section */}

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Left Section: Images */}

        <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-4 scrollbar-hide">
            {leftSideImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(image)}
                className={`flex-shrink-0 mt-12 bg-primary-light h-16 w-16 md:h-20 md:w-20 rounded-[8px] cursor-pointer ${
                  activeImage === image ? "border-2 border-black" : ""
                }`}
              >
                <Image
                  src={image}
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
            RS.{" "}
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
            <div>5 Customer Reviews</div>
          </div>

          <p className="text-[#9F9F9F] text-base line-clamp-1">{description}</p>

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

            {/* All Product Navigate To Cart */}
            <div className="flex space-x-4">
              <button
                className="bg-black text-white px-6 py-3 rounded-[10px] hover:bg-gray-800 transition-colors"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              {/* <Link href={"/comparison"}>
                <button className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors">
                + Compare
                </button>
              </Link> */}
              <button
                className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors"
                onClick={handleAddToComparison}
              >
                + Compare
              </button>
              <button
                className="border border-black text-black px-6 py-3 rounded-[10px] hover:bg-black hover:text-white transition-colors"
                onClick={() => {
                  handleAddToWishlist();
                  window.location.href = "/wishlist"; // Navigate to wishlist page
                }}
              >
                Add to Wishlist
              </button>
            </div>
          </div>

          <div className="text-[#9F9F9F] text-sm space-y-2">
            <p>
              <strong>SKU:</strong> {id}
            </p>
            <p>
              <strong>Category:</strong> {name}
            </p>
            <p>
              <strong>Tags:</strong> {tags}
            </p>
            <div className="flex items-center space-x-2">
              <strong>Share:</strong>
              <div className="flex space-x-2">
                {[FaFacebook, FaLinkedin, FaTwitter].map((Icon, index) => (
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

        {/* Cart Section */}

        <div className="grid grid-cols-1 md:grid-cols-2 mt-8">
          {leftSideImages.slice(0, 2).map((image, index) => (
            <div
              key={index}
              className="flex justify-center items-center rounded-2xl p-4"
            >
              <Image
                src={image as string} // Generate URL dynamically
                alt={`Cloud Sofa Image ${index + 1}`} // Unique alt text for accessibility
                width={600}
                height={400}
                className="rounded-[8px] object-cover w-96 h-96"
              />
            </div>
          ))}
        </div>
        <SingleProductCardData />
      </section>
    </div>
  );
}

