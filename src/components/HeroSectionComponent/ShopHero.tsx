import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface ShopHeroData 

interface ShopHeroData {
  hero1image: string;
  logo: string;
  shop: string;
  home: string;
  imagerightarrow: string;
  shopone: string;
  uicons: string;
  filter: string;
  cigrid: string;
  viewlist: string;
  showingresults: string;
  show: string;
  sixteen: number;
  shortby: string;
  default: string;
}

export default function ShopHero() {
  const [ShopHeroData, setShopHeroData] = useState<ShopHeroData | null>(null);

  // Fetch Shop Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      const ShopHeroQuery = `*[_type == "shopherosection"] [0] {
    hero1image,
    logo,
    shop,
    home,
    imagerightarrow,
    shopone,
    uicons,
    filter,
    cigrid,
    viewlist,
    showingresults,
    show,
    sixteen,
    shortby,
    default

    }`;

      const data = await client.fetch(ShopHeroQuery);
      setShopHeroData(data);
    };

    fetchData();
  }, []);

  if (!ShopHeroData) {
    return <div></div>;
  }

  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">

      {/* Hero Section */}

      <Image
        src={urlFor(ShopHeroData.hero1image).url()}
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
            src={urlFor(ShopHeroData.logo).url()}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
          />
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
            {ShopHeroData.shop}
          </h1>
        </div>
        <div className="mt-4 sm:mt-8 flex items-center justify-center">
          <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
            {ShopHeroData.home}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Image
              src={urlFor(ShopHeroData.imagerightarrow).url()}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">{ShopHeroData.shopone}</span>
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
              src={urlFor(ShopHeroData.uicons).url()}
              alt="no-image"
              className="h-6 w-6"
              width={500}
              height={500}
            />
            <span className="text-sm sm:text-lg">{ShopHeroData.filter}</span>
            <Image
              src={urlFor(ShopHeroData.cigrid).url()}
              alt="no-image"
              className="h-6 w-6"
              width={500}
              height={500}
            />
            <Image
              src={urlFor(ShopHeroData.viewlist).url()}
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
            {ShopHeroData.showingresults}
          </div>
        </div>

        {/* Sorting Options */}
        
        <div className="mt-4 flex flex-wrap items-center gap-4 sm:mt-0">
          <span className="text-sm sm:text-lg">{ShopHeroData.show}</span>
          <div className="flex h-10 w-10 items-center justify-center bg-white text-gray-500 rounded-md shadow-md">
            {ShopHeroData.sixteen}
          </div>
          <span className="text-sm sm:text-lg">{ShopHeroData.shortby}</span>
          <div className="px-4 py-2 bg-white text-gray-500 rounded-md shadow-md">
            {ShopHeroData.default}
          </div>
        </div>
      </div>
    </div>
  );
}
