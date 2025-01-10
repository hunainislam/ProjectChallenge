"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Comparison Hero Data

interface ComparisonHeroData {
  hero1image: string;
  logo: string;
  comparison: string;
  home: string;
  imagerightarrow: string;
  comparisonOne: string;
}

export default function CartHero() {
  const [ComparisonHeroData, setComparisonHeroData] =
    useState<ComparisonHeroData | null>(null);

  // Fetch Comparison Hero Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      const ComparisonHeroQuery = `*[_type == "comparisonherosection"] [0] {
    hero1image,
    logo,
    comparison,
    home,
    imagerightarrow,
    comparisonOne,
    }`;

      const data = await client.fetch(ComparisonHeroQuery);
      setComparisonHeroData(data);
    };

    fetchData();
  }, []);

  // Page Loading Condition

  if (!ComparisonHeroData) {
    return <div></div>;
  }

  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
      {/* Hero Section */}

      <Image
        src={urlFor(ComparisonHeroData.hero1image).url()}
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
            src={urlFor(ComparisonHeroData.logo).url()}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
          />
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
            {ComparisonHeroData.comparison}
          </h1>
        </div>
        <div className="mt-4 sm:mt-8 flex items-center justify-center">
          <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
            {ComparisonHeroData.home}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Image
              src={urlFor(ComparisonHeroData.imagerightarrow).url()}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">
              {ComparisonHeroData.comparisonOne}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
    </div>
  );
}
