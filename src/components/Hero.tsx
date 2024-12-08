import React from "react";
import HeroImage from "../../public/images/hero.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex w-full flex-col overflow-hidden">
      <div className="relative flex h-screen w-full items-center justify-end bg-white">
        {/* <!-- Background Image --> */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="object-cover h-full w-full"
          />
        </div>

        {/* <!-- Content Box --> */}
        <div className="relative z-10 font-poppins flex flex-col justify-end gap-y-1 rounded-[10px] bg-[oldlace] pb-9 pl-[30px] pr-11 pt-16 tracking-[0px] text-neutral-800 max-w-[42rem] mr-16 shadow-lg">
          <div className="flex items-center px-[3px]">
            <div className="font-semibold leading-[normal] tracking-[3px]">
              New Arrival
            </div>
          </div>
          <div className="pl-[3px]">
            <div className="text-[52px] font-bold leading-[65px] text-[darkgoldenrod]">
              <span>
                <p>Discover Our</p>
                <p>New Collection</p>
              </span>
            </div>
          </div>
          <div className="pl-[3px] pr-[13px] pt-[13px]">
            <div className="flex items-center text-lg font-medium leading-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
          </div>
          <div className="flex items-end pt-10">
            <div className="bg-[darkgoldenrod] px-[73px] py-[26px] text-center font-bold uppercase leading-[normal] text-white cursor-pointer hover:bg-yellow-600">
              BUY Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
