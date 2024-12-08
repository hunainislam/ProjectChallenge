import React from "react";
import RightArrow from "../../public/images/rightarrow.png";
import RoundArrow from "../../public/images/RoundArrow.png";
import Image from "next/image";
import Line1 from "../../public/images/line1.png";
import Dot1 from "../../public/images/dot1.png";
import Dot2 from "../../public/images/dot2.png";

export default function Inspiration() {
  return (
    <div className="flex w-full">
      <div className="flex flex-grow flex-wrap items-start justify-center gap-x-6 gap-y-6 bg-[floralwhite] py-11 pl-24 min-[1750px]:flex-nowrap">
        <div className="font-poppins flex flex-wrap items-center justify-center gap-x-11 gap-y-11 self-stretch tracking-[0px] min-[1750px]:flex-nowrap">
          <div className="flex w-[422px] flex-shrink-0 flex-col items-start gap-y-[7px]">
            <div className="self-stretch text-[40px] font-bold leading-[1.2] text-neutral-700">
              <span>
                <p>50+ Beautiful rooms</p>
                <p>inspiration</p>
              </span>
            </div>
            <div className="flex w-96 items-start font-medium leading-normal text-[dimgray]">
              <p>
                Our designer already made a lot of beautiful prototipe of rooms
                that inspire you
              </p>
            </div>
            <div className="flex items-end pt-[18px]">
              <div className="bg-[darkgoldenrod] px-9 py-3 text-center font-semibold leading-normal text-white">
                Explore More
              </div>
            </div>
          </div>
          <div className="bg-Image flex flex-wrap items-end self-stretch bg-cover bg-center py-6 pl-6 pr-28 min-[1750px]:flex-nowrap">
            <div className="flex flex-col items-start justify-center gap-y-2 bg-white/70 py-8 pl-8 pr-[17px] backdrop-blur-[2]">
              <div className="flex items-center gap-x-2 self-stretch pr-[26px] font-medium leading-normal text-[dimgray] [max-width:168px]">
                <div>01</div>
                <Image
                  src={Line1}
                  alt={"no-image"}
                  className="h-px flex-grow"
                />
                <div>Bed Room</div>
              </div>
              <div className="text-center text-[28px] font-semibold leading-[1.2] text-neutral-700">
                Inner Peace
              </div>
            </div>
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center bg-[darkgoldenrod] p-3">
              <Image
                src={RightArrow}
                alt={"no-image"}
                className="h-6 w-6 flex-shrink-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-6 gap-y-6 min-[1750px]:flex-nowrap">
          <div className="flex flex-col items-start gap-y-10">
            <div className="bg-Rectangle flex w-96 items-end bg-cover bg-center pb-[152px] pl-80 pt-64">
              <div className="-mr-9 flex h-20 w-20 flex-shrink-0 items-center justify-center">
                <div className="relative z-0 flex flex-col items-center pb-2">
                  <Image
                    src={RoundArrow}
                    alt={"no-image"}
                    className="z-[2] flex-shrink-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-[5.5px] min-[1750px]:flex-nowrap">
              <div className="z-0 flex h-11 w-11 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center p-2">
                <Image
                  src={Dot1}
                  alt={"no-image"}
                  className="z-[2] ml-4 flex-shrink-0"
                />
              </div>
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[11px] w-[11px] flex-shrink-0"
              />
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[11px] w-[11px] flex-shrink-0"
              />
              <Image
                src={Dot2}
                alt={"no-image"}
                className="h-[11px] w-[11px] flex-shrink-0"
              />
            </div>
          </div>
          <div className="bg-Rectangle1 h-[486px] max-h-full w-[52px] max-w-full flex-shrink-0 bg-no-repeat [background-position:0px_0px] [background-size:715%_100%]" />
        </div>
      </div>
    </div>
  );
}
