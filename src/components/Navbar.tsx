"use client";

import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";

// Type Navbar Data

type NavbarData = {
  title: string;
  home: string;
  shop: string;
  about: string;
  contact: string;
  blog: string;
  user: any; // Handle image objects
  search: string;
  wishlist: string;
  cart: string;
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);

  // Fetch Navbar Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const navbarQuery = `*[_type == "navbar"] [0] {
          title,
          home,
          shop,
          about,
          contact,
          blog,
          user,
          search,
          wishlist,
          cart
        }`;
  
        const data = await client.fetch(navbarQuery);
        setNavbarData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  // Page Loading Condition

  if (!navbarData) {
    return <div></div>;
  }

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
                {navbarData.title}
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
                {navbarData.home}
              </Link>
              <Link href={"/shop"} className="hover:text-[#b88e2f]">
                {/* Shop */}
                {navbarData.shop}
              </Link>
              <Link href={"/about"} className="hover:text-[#b88e2f]">
                {/* About */}
                {navbarData.about}
              </Link>
              <Link href={"/contact"} className="hover:text-[#b88e2f]">
                {/* Contact */}
                {navbarData.contact}
              </Link>
              <Link href={"/blog"} className="hover:text-[#b88e2f]">
                {/* Blog */}
                {navbarData.blog}
              </Link>
            </div>

            {/* Desktop Icons */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* User Image */}
              {navbarData.user && (
                <Image
                  src={urlFor(navbarData.user).url()}
                  alt="User Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              )}
              {/* Search Image */}
              {navbarData.search && (
                <Image
                  src={urlFor(navbarData.search).url()}
                  alt="Search Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              )}
              {/* Wishlist Image */}
              {navbarData.wishlist && (
                <Image
                  src={urlFor(navbarData.wishlist).url()}
                  alt="Wishlist Icon"
                  className="h-6 w-6"
                  width={500}
                  height={500}
                />
              )}
              <Link href={"/cart"}>
                {/* Cart Image */}
                {navbarData.cart && (
                  <Image
                    src={urlFor(navbarData.cart).url()}
                    alt="Cart Icon"
                    className="h-6 w-6"
                    width={500}
                    height={500}
                  />
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}

          {isMenuOpen && (
            <div className="lg:hidden flex flex-col items-center space-y-4 bg-white border-t border-gray-200 pt-4 pb-4">
              {/* Home */}
              <Link href={"/"} className="text-gray-800 hover:text-[#b88e2f]">
                {navbarData.home}
              </Link>
              {/* Shop */}
              <Link
                href={"/shop"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                {navbarData.shop}
              </Link>
              {/* About */}
              <Link
                href={"/about"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                {navbarData.about}
              </Link>
              {/* Contact */}
              <Link
                href={"/contact"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                {navbarData.contact}
              </Link>
              {/* Blog */}
              <Link
                href={"/blog"}
                className="text-gray-800 hover:text-[#b88e2f]"
              >
                {navbarData.blog}
              </Link>

              {/* Mobile Icons */}
              <div className="flex items-center space-x-6">
                {/* User Image */}
                {navbarData.user && (
                  <Image
                    src={urlFor(navbarData.user).url()}
                    alt="User Icon"
                    className="h-6 w-6"
                    width={500}
                    height={500}
                  />
                )}
                {/* Search Image */}
                {navbarData.search && (
                  <Image
                    src={urlFor(navbarData.search).url()}
                    alt="Search Icon"
                    className="h-6 w-6"
                    width={500}
                    height={500}
                  />
                )}
                {/* Wishlist Image */}
                {navbarData.wishlist && (
                  <Image
                    src={urlFor(navbarData.wishlist).url()}
                    alt="Wishlist Icon"
                    className="h-6 w-6"
                    width={500}
                    height={500}
                  />
                )}
                {/* Cart Image */}
                <Link href={"/cart"}>
                  {navbarData.cart && (
                    <Image
                      src={urlFor(navbarData.cart).url()}
                      alt="Cart Icon"
                      className="h-6 w-6"
                      width={500}
                      height={500}
                    />
                  )}
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
