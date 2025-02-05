"use client";

import React from "react";
import Image from "next/image";
import Trophy from "../../public/images/trophy.png";
import Sheeping from "../../public/images/shipping.png";
import Guarantee from "../../public/images/guarantee.png";
import Customer from "../../public/images/customer-support.png";

export default function TrophyComponent() {
  return (
    <div className="z-[2] flex flex-col justify-center bg-orange-50 py-24 pl-12 w-full mt-20">
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 leading-normal min-[1430px]:flex-nowrap">
        {/* Trophy Image And Data */}

        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={Trophy}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] self-center font-semibold leading-normal text-neutral-800">
              High Quality
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              crafted from top materials
            </div>
          </div>
        </div>

        {/* Guarantee Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={Guarantee}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              Warranty Protection
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              Over 2 years
            </div>
          </div>
        </div>

        {/* Sheeping Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={Sheeping}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              Free Shipping Safe
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              Order over 150 $
            </div>
          </div>
        </div>

        {/* Customer Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={Customer}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800 text-center">
              24 / 7 Support Customer
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              Dedicated support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
