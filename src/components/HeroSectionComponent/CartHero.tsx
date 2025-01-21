"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Cart Hero Data

interface CartHeroData {
  hero1image: string;
  logo: string;
  cart: string;
  home: string;
  imagerightarrow: string;
  cartone: string;
}

export default function CartHero() {
  const [CartHeroData, setCartHeroData] = useState<CartHeroData | null>(null);

  // Fetch Cart Hero Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CartHeroQuery = `*[_type == "cartherosection"] [0] {
          hero1image,
          logo,
          cart,
          home,
          imagerightarrow,
          cartone
        }`;
  
        const data = await client.fetch(CartHeroQuery);
        setCartHeroData(data);
      } catch (error) {
        console.error("Error fetching cart hero data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);

  // Page Loading Condition

  if (!CartHeroData) {
    return (
      <div></div>
    );
  }

  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
      {/* Hero Section */}

      <Image
        src={urlFor(CartHeroData.hero1image).url()}
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
            src={urlFor(CartHeroData.logo).url()}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
          />
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
            {CartHeroData.cart}
          </h1>
        </div>
        <div className="mt-4 sm:mt-8 flex items-center justify-center">
          <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
            {CartHeroData.home}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Image
              src={urlFor(CartHeroData.imagerightarrow).url()}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">
              {CartHeroData.cartone}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
    </div>
  );
}
