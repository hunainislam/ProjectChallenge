"use client";

import React from "react";
import Image from "next/image";
import Dot2 from "../../public/images/dot2.png";
import Dot1 from "../../public/images/dot1.png";
import Line1 from "../../public/images/line1.png";
import RightArrow from "../../public/images/rightarrow.png";
import RoundArrow from "../../public/images/RoundArrow.png";

export default function Inspiration() {
  return (
    <div className="flex flex-col w-full md:flex-row overflow-hidden">
      <div className="flex flex-col md:flex-row flex-grow flex-wrap items-center md:items-start justify-center gap-x-6 gap-y-6 bg-[floralwhite] py-8 px-4 md:py-11 md:pl-24 min-[1750px]:flex-nowrap">
        {/* Text Section */}

        <div className="font-poppins flex flex-wrap items-center justify-center gap-x-11 gap-y-11 md:self-stretch tracking-[0px] min-[1750px]:flex-nowrap">
          <div className="flex w-full md:w-[422px] flex-shrink-0 flex-col items-start gap-y-[7px]">
            <div className="self-stretch text-[28px] md:text-[40px] font-bold leading-[1.2] text-neutral-700">
              <span>
                <p>50+ Beautiful rooms</p>
                <p>inspiration</p>
              </span>
            </div>
            <div className="flex w-full md:w-96 items-start font-medium leading-normal text-[dimgray]">
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
            </div>
            <div className="flex items-end pt-[18px]">
              <div className="bg-[darkgoldenrod] px-6 py-2 md:px-9 md:py-3 text-center font-semibold leading-normal text-white">
                Explore More
              </div>
            </div>
          </div>

          {/* Image Section */}

          <div className="bg-Image flex flex-wrap items-end self-stretch bg-cover bg-center py-6 px-4 md:pl-6 md:pr-28 min-[1750px]:flex-nowrap">
            <div className="flex flex-col items-start justify-center gap-y-2 bg-white/70 py-6 px-6 md:py-8 md:pl-8 md:pr-[17px] backdrop-blur-[2]">
              <div className="flex items-center gap-x-2 self-stretch pr-[26px] font-medium leading-normal text-[dimgray] [max-width:168px]">
                <div>1</div>
                <Image
                  src={Line1}
                  alt={"no-image"}
                  className="h-px flex-grow"
                  height={500}
                  width={500}
                />
                <div>Bed Room</div>
              </div>
              <div className="text-center text-[22px] md:text-[28px] font-semibold leading-[1.2] text-neutral-700">
                Inner Peace
              </div>
            </div>
            <div className="flex h-10 w-10 md:h-12 md:w-12 flex-shrink-0 flex-col items-center justify-center bg-[darkgoldenrod] p-2 md:p-3">
              <Image
                src={RightArrow}
                alt={"no-image"}
                className="h-5 w-5 md:h-6 md:w-6 flex-shrink-0"
                height={500}
                width={500}
              />
            </div>
          </div>
        </div>

        {/* Additional Content */}

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 min-[1750px]:flex-nowrap">
          <div className="flex flex-col items-center md:items-start gap-y-6 md:gap-y-10">
            <div className="bg-Rectangle flex w-full md:w-96 items-end bg-cover bg-center pb-24 md:pb-[152px] pl-16 md:pl-80 pt-24 md:pt-64">
              <div className="-mr-4 md:-mr-9 flex h-16 w-16 md:h-20 md:w-20 flex-shrink-0 items-center justify-center">
                <div className="relative z-0 flex flex-col items-center pb-2">
                  <Image
                    src={RoundArrow}
                    alt={"no-image"}
                    className="z-[2] flex-shrink-0"
                    height={500}
                    width={500}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 md:gap-x-5 gap-y-[5.5px] min-[1750px]:flex-nowrap">
              <div className="z-0 flex h-8 w-8 md:h-11 md:w-11 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center p-1 md:p-2">
                <Image
                  src={Dot1}
                  alt={"no-image"}
                  className="z-[2] ml-4 flex-shrink-0"
                  height={500}
                  width={500}
                />
              </div>
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[9px] w-[9px] md:h-[11px] md:w-[11px] flex-shrink-0"
                height={500}
                width={500}
              />
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[9px] w-[9px] md:h-[11px] md:w-[11px] flex-shrink-0"
                height={500}
                width={500}
              />
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[9px] w-[9px] md:h-[11px] md:w-[11px] flex-shrink-0"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="bg-Rectangle1 h-40 md:h-[486px] max-h-full w-[42px] md:w-[52px] max-w-full flex-shrink-0 bg-no-repeat [background-position:0px_0px] [background-size:715%_100%]" />
        </div>
      </div>
    </div>
  );
}
