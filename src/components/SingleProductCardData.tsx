"use client";

import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { MdCompareArrows } from "react-icons/md";
import { sanityFetch } from "@/sanity/lib/fetch";
import React, { useEffect, useState } from "react";
import { fourProduct } from "@/sanity/lib/queries";
import Label from "../../public/images/label1.png";
import { IoShareSocialOutline } from "react-icons/io5";

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
  label50?: number | null;
  labelnew?: string | null;
  imagelabelred?: string | null;
  imagelabelgreen?: string | null;
  button: string;
};

// Type CartItem

type CartItem = Products & {
  quantity: number;
};

// Api Migration Interface

interface Products {
  _id: string; // Unique identifier for the product
  title: string; // Title of the product
  description: string; // Description of the product
  productImage: string; // URL of the product's image
  price: string; // Price of the product
  tags: string[]; // Array of tags associated with the product
  discountPercentage: number; // Discount percentage on the product
  isNew: boolean; // Whether the product is new
}

export default function OurProduct() {
  const [isCartOpen, setCartOpen] = useState(false);
  const [ourProduct, setOurProductData] = useState<ourProduct | null>(null);
  const [apiProducts, setAPIProducts] = useState<Products[]>([]);
  const [cartItems, setCart] = useState<CartItem[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  const toggleCart = () => {
    setCartOpen(!isCartOpen); // Toggle cart visibility
  };

  // Fetch OurProductData For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ourProductquery = `*[_type == "products"] [0]{
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
          imagelabelred,
          imagelabelgreen,
          button,
        }`;

        const data = await client.fetch(ourProductquery);
        setOurProductData(data);
      } catch (error) {
        console.error("Error fetching our product data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };

    fetchData();
  }, []);

  // Fetch Api Migartion For Sanity

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Products[] = await sanityFetch({ query: fourProduct });
        setAPIProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
    fetchProducts();
  }, []);

  // OurProduct.tsx

  // Add this useEffect to save cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Page Loading Condition

  if (!ourProduct) {
    return <div></div>;
  }

  // Handle AddToCart Functionality

  const handleAddToCart = (product: Products) => {
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
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct) {
        return prevCart.map((item) =>
          item._id === product._id
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

  // Handle RemoveCart Funtionality

  const handleRemoveFromCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item._id === product._id);

      if (existingProduct && existingProduct.quantity > 1) {
        return prevCart.map((item) =>
          item._id === product._id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        );
      } else {
        return prevCart.filter((item) => item._id !== product._id);
      }
    });
  };

  // Filter products based on search term
  const filteredProducts = apiProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Checkout
  const handleCheckout = () => {
    const checkoutCart = cartItems.map((item) => ({
      _id: item._id,
      title: item.title,
      productImage: item.productImage,
      quantity: item.quantity,
      price: item.price,
    }));
    localStorage.setItem("checkoutCart", JSON.stringify(checkoutCart));
    window.location.href = "/checkout";
  };

  // Handle Comparison
  const handleComparison = () => {
    const comparisonCart = cartItems.map((item) => ({
      _id: item._id,
      title: item.title,
      productImage: item.productImage,
      quantity: item.quantity,
      price: item.price,
    }));
    localStorage.setItem("comparisonCart", JSON.stringify(comparisonCart));
    window.location.href = "/comparison";
  };

  return (
    <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px] mb-12 overflow-hidden">
      {/* Search Bar */}
      <div className="flex justify-center mt-10">
        <div className="relative w-1/2">
          <input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#b88e2f] p-2 rounded-md w-full pl-10"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700" />
        </div>
      </div>

      {/* Cart */}

      {isCartOpen && (
        <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50">
          <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[350px] sm:w-[420px] shadow-lg mt-16">
            {/* Header */}

            <div className="flex items-center justify-between -mt-16">
              <h2 className="text-2xl font-semibold">
                {ourProduct.shoppingcart}
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
              className="flex flex-col gap-8 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "400px" }} // Adjust the height as needed
            >
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] rounded-lg flex-shrink-0 text-center overflow-hidden">
                    <Image
                      src={item.productImage}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">{item.title}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#b88e2f] font-medium">
                        {ourProduct.rs}
                        {(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {ourProduct.add}
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleRemoveFromCart(item)}
                        className="bg-neutral-700 text-white px-2 py-1 rounded"
                      >
                        {ourProduct.less}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtotal */}

            <div className="flex justify-between items-center mt-4 lg:mt-20 text-lg font-semibold">
              <span>{ourProduct.subtotal}</span>
              <span className="text-[#b88e2f]">
                {ourProduct.rs}
                {cartItems.reduce(
                  (total, item) =>
                    total + parseFloat(item.price) * item.quantity,
                  0
                )}
              </span>
            </div>

            {/* Buttons */}

            <div className="flex lg:gap-4 gap-2 mt-2 lg:mt-10 lg:flex-wrap">
              <button
                className="border border-black lg:px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f] px-4"
                onClick={() => (window.location.href = "/cart")}
              >
                {ourProduct.cart}
              </button>
              <button
                className="border border-black lg:px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f] px-4"
                onClick={handleCheckout}
              >
                {ourProduct.checkout}
              </button>
              <button
                className="border border-black lg:px-6 py-2 rounded-full hover:bg-gray-100 hover:text-[#b88e2f] px-4"
                onClick={handleComparison}
              >
                {ourProduct.comparison}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center pl-[5px]">
        <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700 mt-10">
          {ourProduct.relatedproduct}
        </div>
      </div>

      {/* Product Cards */}

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="group relative w-72 cursor-pointer hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f] shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
            onClick={() =>
              (window.location.href = `/singleproduct?id=${product._id}&name=${encodeURIComponent(
                product.title
              )}&price=${encodeURIComponent(product.price)}&description=${encodeURIComponent(
                product.description
              )}&image=${encodeURIComponent(product.productImage)}&tags=${encodeURIComponent(
                product.tags.join(",")
              )}`)
            }
          >
            {/* Image Section */}

            <div
              className=" relative flex flex-col bg-cover bg-center h-72"
              style={{ backgroundImage: `url(${product.productImage})` }}
            >
              {product.discountPercentage && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={ourProduct.imagelabelred || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-20"
                      width={500}
                      height={500}
                    />
                    <div className="z-10 text-center mt-2 font-semibold text-white">
                      -{product.discountPercentage}%
                    </div>
                  </div>
                </div>
              )}

              {product.isNew && (
                <div className="absolute top-2 left-56 flex h-12 w-12 items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={Label || ""}
                      alt="Discount Label"
                      className="absolute -inset-0 z-0 h-10 w-12"
                      width={100}
                      height={100}
                    />
                    <div className="z-10 text-center mt-1 font-medium text-lg text-white">
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
                    toggleCart();
                    handleAddToCart(product);
                  }}
                  className="bg-white py-3 px-6 text-center text-[darkgoldenrod] font-semibold hover:shadow-[0_0_2rem] hover:shadow-[#b88e2f]"
                >
                  {ourProduct.addtocart}
                </button>
                <div className="flex items-center gap-x-4 text-white">
                  <div className="flex items-center gap-x-1">
                    <IoShareSocialOutline />
                    <div>{ourProduct.share}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <MdCompareArrows />
                    <div>{ourProduct.compare}</div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <CiHeart />
                    <div>{ourProduct.like}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Details */}

            <div className="flex flex-col items-start gap-y-2 bg-gray-100 p-4">
              <div className="text-2xl font-semibold text-neutral-700">
                {product.title}
              </div>
              <div className="text-gray-500 line-clamp-2">
                {product.description}
              </div>
              <div className="flex items-center gap-x-4">
                <div className="text-xl font-semibold text-neutral-700">
                  {product.price}
                </div>
                {product.discountPercentage && (
                  <div className="text-gray-400 line-through">
                    {product.discountPercentage}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}

      <div className="flex items-center justify-center pl-px">
        <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-white px-[73px] py-[11px] mb-8">
          <div className="pl-2 text-center font-semibold leading-normal text-[darkgoldenrod]">
            {ourProduct.button}
          </div>
        </div>
      </div>
    </div>
  );
}
