"use client";

import React, { useState } from "react";
import Image from "next/image";
import Men from "../../public/images/men.png";
import Search from "../../public/images/search.png";
import Heart from "../../public/images/heart.png";
import Cart from "../../public/images/cart.png";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-hidden">
      {/* Navbar Container */}
      <nav className="bg-white shadow-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
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
                {isMenuOpen ? <RxCross2  className="text-2xl"/> : <IoMenu  className="text-2xl"/>}
              </button>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center space-x-10">
              <Link href={"/"} className="hover:text-gray-600">
                Home
              </Link>
              <Link href={"/shop"} className="hover:text-gray-600">
                Shop
              </Link>
              <Link href={"/singleproduct"} className="hover:text-gray-600">
                Product
              </Link>
              <Link href={"/contact"} className="hover:text-gray-600">
                Contact
              </Link>
              <Link href={"/blog"} className="hover:text-gray-600">
                Blog
              </Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center space-x-8">
              <Image src={Men} alt="User Icon" className="h-6 w-6" />
              <Image src={Search} alt="Search Icon" className="h-6 w-6" />
              <Image src={Heart} alt="Wishlist Icon" className="h-6 w-6" />
              <Link href={"/cart"}>
                <Image src={Cart} alt="Cart Icon" className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden flex flex-col items-center space-y-4 bg-white border-t border-gray-200 pt-4 pb-4">
              <Link href={"/"} className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link
                href={"/shop"}
                className="text-gray-800 hover:text-gray-600"
              >
                Shop
              </Link>
              <Link
                href={"/singleproduct"}
                className="text-gray-800 hover:text-gray-600"
              >
                Product
              </Link>
              <Link
                href={"/contact"}
                className="text-gray-800 hover:text-gray-600"
              >
                Contact
              </Link>
              <Link
                href={"/blog"}
                className="text-gray-800 hover:text-gray-600"
              >
                Blog
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-6">
                <Image src={Men} alt="User Icon" className="h-6 w-6" />
                <Image src={Search} alt="Search Icon" className="h-6 w-6" />
                <Image src={Heart} alt="Wishlist Icon" className="h-6 w-6" />
                <Link href={"/cart"}>
                  <Image src={Cart} alt="Cart Icon" className="h-6 w-6" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
      {/* Adding extra padding to prevent content overlap */}
      <div className="h-16"></div>
    </div>
  );
}
