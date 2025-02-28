"use client";

import React from "react";
import Image from "next/image";
import HeroImage from "../../../public/images/hero.png";

export default function Hero() {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-center bg-white sm:justify-end">
        {/* Background Image */}

        <div className="absolute w-full h-full">
          <Image
            src={HeroImage}
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
              New Arrival
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold leading-tight text-[darkgoldenrod] sm:text-4xl md:text-5xl lg:text-[52px] ">
              <p>Discover Our</p>
              <p>New Collection</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium leading-5 sm:text-base md:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </div>
          <div className="flex">
            <button className="bg-[darkgoldenrod] px-8 py-3 text-center text-sm font-bold uppercase leading-none text-white shadow-md hover:bg-yellow-600 sm:px-12 sm:py-4 sm:text-base md:px-16 md:py-5">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
