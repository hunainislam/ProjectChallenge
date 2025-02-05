"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import Cart from "../../public/images/cart.png";
import Admin from "../../public/images/men.png";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allproduct } from "@/sanity/lib/queries";
import React, { useState, useEffect } from "react";
import Search from "../../public/images/search.png";
import Wishlist from "../../public/images/heart.png";

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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [apiProducts, setAPIProducts] = useState<Products[]>([]);

  // Fetch Api Migartion For Sanity

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products: Products[] = await sanityFetch({ query: allproduct });
        setAPIProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on search term
  const filteredProducts = apiProducts.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full overflow-hidden">
      {/* Navbar Container */}

      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}

            <div className="flex items-center">
              {/* Funiro */}

              <div className="bg-Logo h-8 w-12 bg-no-repeat mr-2" />
              <Link href={"/"} className="text-3xl mt-1 font-bold text-black">
                Funiro
              </Link>
            </div>

            {/* Hamburger Menu Button (Mobile Only) */}

            <div className="lg:hidden">
              <button
                className="text-gray-800 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <RxCross2 className="text-2xl" />
                ) : (
                  <IoMenu className="text-2xl" />
                )}
              </button>
            </div>

            {/* Desktop Links */}

            <div className="hidden lg:flex items-center space-x-10">
              <Link href={"/"} className="hover:text-[#b88e2f]">
                {/* Home */}
                Home
              </Link>
              <Link href={"/shop"} className="hover:text-[#b88e2f]">
                {/* Shop */}
                Shop
              </Link>
              <Link href={"/about"} className="hover:text-[#b88e2f]">
                {/* About */}
                About
              </Link>
              <Link href={"/contact"} className="hover:text-[#b88e2f]">
                {/* Contact */}
                Contact
              </Link>
              <Link href={"/blog"} className="hover:text-[#b88e2f]">
                {/* Blog */}
                Blog
              </Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* User Image */}
              <Link href={"/admin"}>
                <Image
                  src={Admin}
                  alt="User Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              </Link>
              {/* Search Image */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Image
                  src={Search}
                  alt="Search Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              </button>

              <Link href={"/wishlist"}>
                {/* Wishlist Image */}
                <Image
                  src={Wishlist}
                  alt="Wishlist Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              </Link>
              <Link href={"/cart"}>
                {/* Cart Image */}
                <Image
                  src={Cart}
                  alt="Cart Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          {isMenuOpen && (
            <div className="flex justify-center mt-4 mb-4 relative">
              <div className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="border border-[#b88e2f] rounded-md p-2 w-full pl-10"
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-700" />
              </div>
            </div>
          )}

          {/* Mobile Menu */}

          {isMenuOpen && (
            <div className="lg:hidden flex flex-col items-center space-y-4 bg-white border-t border-gray-200 pt-4 pb-4">
              {/* Home */}
              <Link href={"/"} className="text-gray-800 hover:text-[#b88e2f]">
                Home
              </Link>
              {/* Shop */}
              <Link
                href={"/shop"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                Shop
              </Link>
              {/* About */}
              <Link
                href={"/about"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                About
              </Link>
              {/* Contact */}
              <Link
                href={"/contact"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                Contact
              </Link>
              {/* Blog */}
              <Link
                href={"/blog"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                Blog
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-6">
                {/* Admin Image */}
                <Image
                  src={Admin}
                  alt="User Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
                {/* Search Image */}
                <Image
                  src={Search}
                  alt="Search Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
                {/* Wishlist Image */}
                <Image
                  src={Wishlist}
                  alt="Wishlist Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
                <Link href={"/cart"}>
                  {/* Cart Image */}
                  <Image
                    src={Cart}
                    alt="Cart Icon"
                    className="h-6 w-6"
                    width={500}
                    height={500}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Adding extra padding to prevent content overlap */}
      <div className="h-16"></div>

      {/* Display filtered products */}
      {searchTerm && (
        <div className="fixed inset-0 flex items-start justify-end bg-black/30 z-50">
          <div className="font-poppins relative flex flex-col bg-white py-20 pl-7 pr-6 w-[350px] sm:w-[420px] shadow-lg mt-16">
            {/* Header */}

            <div className="flex items-center justify-between -mt-16">
              <h2 className="text-2xl font-semibold">Search Results</h2>
              <button
                onClick={() => setSearchTerm("")}
                className="text-lg font-bold hover:text-[#b88e2f]"
              >
                <RxCross2 />
              </button>
            </div>
            <hr className="my-4" />

            {/* Product List */}

            <div
              className="flex flex-col gap-16 overflow-y-auto custom-scrollbar"
              style={{ maxHeight: "400px" }} // Adjust the height as needed
            >
              {filteredProducts.map((product) => (
                <div key={product._id} className="flex items-center gap-4">
                  <div className="h-[105px] w-[105px] rounded-lg flex-shrink-0 text-center">
                    <Image
                      src={product.productImage}
                      alt={product.title}
                      width={500}
                      height={500}
                      className="h-30 w-30"
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="text-lg font-medium">{product.title}</div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-[#b88e2f] font-medium">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
