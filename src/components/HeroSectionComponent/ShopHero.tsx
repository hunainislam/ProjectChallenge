import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import Hero from "../../../public/images/Hero1.png";
import Uicons from "../../../public/images/uicons.png";
import Cigrid from "../../../public/images/ci-grid.png";
import RightArrow from "../../../public/images/Arrow.png";
import ViewList from "../../../public/images/view-list.png";

export default function ShopHero() {
  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
      {/* Hero Section */}

      <Image
        src={Hero}
        alt="no-image"
        loading="lazy"
        className="z-[1] w-full h-80 object-cover object-center"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 sm:inset-x-20 sm:top-0 sm:bottom-0 mb-24">
        <div className="flex flex-col items-center justify-center gap-y-2">
          {/* Logo */}

          <Image
            src={Logo}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
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
            <Image
              src={RightArrow}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">Shop</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-10"></div>

      {/* Filter Section */}

      <div className="flex w-full flex-col bg-[linen] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-12 sm:py-6">
        <div className="flex flex-wrap items-center gap-4">
          {/* Filter Buttons */}

          <div className="flex items-center gap-3">
            <Image
              src={Uicons}
              alt="no-image"
              className="h-6 w-6"
              width={500}
              height={500}
            />
            <span className="text-sm sm:text-lg">Filter</span>
            <Image
              src={Cigrid}
              alt="no-image"
              className="h-6 w-6"
              width={500}
              height={500}
            />
            <Image
              src={ViewList}
              alt="no-image"
              className="h-6 w-6"
              width={500}
              height={500}
            />
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
          <span className="text-sm sm:text-lg">Short by</span>
          <div className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md">
            Default
          </div>
        </div>
      </div>
    </div>
  );
}
