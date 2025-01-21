"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Checkout Hero Data

interface CheckoutHeroData {
  hero1image: string;
  logo: string;
  checkout: string;
  home: string;
  imagerightarrow: string;
  checkoutone: string;
}

export default function CartHero() {
  const [CheckoutHeroData, setCheckoutHeroData] =
    useState<CheckoutHeroData | null>(null);

  // Fetch Checkout Hero Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CheckoutHeroQuery = `*[_type == "checkoutherosection"] [0] {
          hero1image,
          logo,
          checkout,
          home,
          imagerightarrow,
          checkoutone
        }`;
  
        const data = await client.fetch(CheckoutHeroQuery);
        setCheckoutHeroData(data);
      } catch (error) {
        console.error("Error fetching checkout hero data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  // Page Loading Condition

  if (!CheckoutHeroData) {
    return (
      <div></div>
    );
  }

  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
      {/* Hero Section */}

      <Image
        src={urlFor(CheckoutHeroData.hero1image).url()}
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
            src={urlFor(CheckoutHeroData.logo).url()}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
          />
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
            {CheckoutHeroData.checkout}
          </h1>
        </div>
        <div className="mt-4 sm:mt-8 flex items-center justify-center">
          <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
            {CheckoutHeroData.home}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Image
              src={urlFor(CheckoutHeroData.imagerightarrow).url()}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">
              {CheckoutHeroData.checkoutone}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
    </div>
  );
}
