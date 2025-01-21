"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Hero Section

interface HeroSection {
  title: string;
  subtitle: string;
  subtitle1: string;
  description: string;
  buttonText: string;
  heroImage: string;
}

export default function Hero() {
  const [herosectionData, setHeroSectionData] = useState<HeroSection | null>(
    null
  );

  // Fetch Hero Section Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const herosectionQuery = `*[_type == "hero"] [0] {
          title,
          subtitle,
          subtitle1,
          description,
          buttonText,
          heroImage
        }`;
  
        const data = await client.fetch(herosectionQuery);
        setHeroSectionData(data);
      } catch (error) {
        console.error("Error fetching hero section data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  // Page Loading Condition

  if (!herosectionData) {
    return (
      <div className="flex justify-center items-center h-screen space-x-4">
        <div className="border-t-[6px] border-[#b88e2f] border-solid w-16 h-16 rounded-full animate-spin delay-300"></div>
        <div className="text-2xl font-bold text-gray-700 animate-bounce">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b88e2f] via-black to-[#b88e2f]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-center bg-white sm:justify-end">
        {/* Background Image */}

        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={urlFor(herosectionData.heroImage).url()}
            alt="Hero Image"
            className="object-cover h-full w-full"
            width={1500}
            height={1500}
          />
        </div>

        {/*  Content Box  */}

        <div className="relative z-10 flex flex-col gap-y-4 rounded-lg bg-[oldlace] p-6 text-neutral-800 shadow-lg sm:max-w-xl sm:mr-8 sm:pl-8 sm:pr-10 sm:pt-12 sm:pb-8 md:max-w-2xl lg:max-w-[35rem] lg:mr-[180px]">
          <div className="flex items-center">
            <div className="text-sm font-semibold uppercase tracking-widest sm:text-base">
              {herosectionData.title}
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold leading-tight text-[darkgoldenrod] sm:text-4xl md:text-5xl lg:text-[52px] ">
              <p>{herosectionData.subtitle}</p>
              <p>{herosectionData.subtitle1}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium leading-5 sm:text-base md:text-lg">
              {herosectionData.description}
            </p>
          </div>
          <div className="flex">
            <button className="bg-[darkgoldenrod] px-8 py-3 text-center text-sm font-bold uppercase leading-none text-white shadow-md hover:bg-yellow-600 sm:px-12 sm:py-4 sm:text-base md:px-16 md:py-5">
              {herosectionData.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
