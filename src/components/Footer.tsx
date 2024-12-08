import React from "react";
import Line2 from "../../public/images/Line2.png";
import Line3 from "../../public/images/Line3.png";
import Line4 from "../../public/images/Line4.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex w-full flex-col">
      <div className="font-poppins flex flex-grow flex-col justify-center gap-y-9 border-t border-solid border-x-black/20 border-y-black/20 bg-white px-24 pb-[38px] pt-12 leading-[normal] tracking-[0px]">
        <div className="flex flex-wrap items-start gap-x-44 gap-y-[13px] min-[1430px]:flex-nowrap">
          <div className="flex flex-wrap items-start justify-center gap-x-44 gap-y-3 min-[1430px]:flex-nowrap">
            <div className="text-2xl font-bold leading-[normal]">Funiro.</div>
            <div className="pl-40 font-medium text-neutral-400">Links</div>
            <div className="font-medium text-neutral-400">Help</div>
          </div>
          <div className="flex flex-col items-center pt-0.5">
            <div className="font-medium text-neutral-400">Newsletter</div>
          </div>
        </div>
        <div className="flex items-end pl-0.5 pr-28 pt-2">
          <div className="flex flex-grow flex-wrap items-start justify-center gap-x-36 gap-y-10 min-[1430px]:flex-nowrap mr-28">
            <div className="w-72 flex-shrink-0 pt-[7px]">
              <div className="text-neutral-400">
                <span>
                  <p>400 University Drive Suite 200 Coral Gables,</p>
                  <p>FL 33134 USA</p>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-start justify-center gap-x-[72px] gap-y-3 min-[1430px]:flex-nowrap">
              <div className="flex flex-col items-start gap-y-11 font-medium">
                <div className="flex flex-wrap items-center justify-center gap-x-40 gap-y-20 min-[1430px]:flex-nowrap">
                  <div className="flex flex-col items-start gap-y-12 font-semibold">
                    <div>Home</div>
                    <div>Shop</div>
                    <div>About</div>
                  </div>
                  <div className="flex flex-col items-start gap-y-11 font-semibold">
                    <div>Payment Options</div>
                    <div>Returns</div>
                    <div>Privacy Policies</div>
                  </div>
                </div>
                <div className="font-semibold">Contact</div>
              </div>
              <div className="flex flex-col items-start gap-y-0.5">
                <div className="flex items-center justify-center gap-x-[38px] text-sm leading-[normal]">
                  <div className="text-neutral-400 line-clamp-2">
                    Enter Your Email Address
                  </div>
                  <div className="font-semibold">SUBSCRIBE</div>
                </div>
                <div className="flex items-center justify-center gap-x-[11px] self-stretch [max-width:270px] font-extrabold">
                  <Image
                    src={Line4}
                    alt={"no-image"}
                    className="h-px flex-grow"
                  />
                  <Image
                    src={Line3}
                    alt={"no-image"}
                    className="h-px flex-grow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end pt-3">
          <Image src={Line2} alt={"no-image"} className="h-px flex-shrink-0" />
        </div>
        <div className="flex items-center px-0.5">
          <div>2023 furino. All rights reverved</div>
        </div>
      </div>
    </div>
  );
}
