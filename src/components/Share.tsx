import React from "react";
import Laptop1 from "../../public/images/Laptop1.png";
import Table2 from "../../public/images/Table2.png";
import BedRoom from "../../public/images/BedRoom.png";
import Window1 from "../../public/images/Window.png";
import Kichen from "../../public/images/Kichen.png";
import Image from "next/image";

export default function Practice() {
  return (
    <div className="flex w-full items-start pl-48 pr-40">
      <div className="font-poppins flex h-full w-full flex-shrink-0 flex-col overflow-clip bg-white tracking-[0px]">
        <div className="flex items-end justify-center pt-16">
          <div className="pr-[34px] text-center text-xl font-semibold leading-normal text-[dimgray]">
            Share your setup with
          </div>
        </div>
        <div className="relative z-0 flex items-center justify-end pb-4 pt-2">
          <div className="absolute bottom-0 left-0 z-0 flex h-[721px] w-[545px] flex-shrink-0 flex-col items-center">
            <div className="flex items-center justify-center">
              <div className="flex flex-col gap-y-4">
                <div className="bg-Plant1 h-96 max-h-full w-20 max-w-full flex-shrink-0 bg-no-repeat" />
                <div className="bg-Chair1 h-80 max-h-full w-48 max-w-full flex-shrink-0 bg-no-repeat" />
              </div>
              <div className="flex w-[360px] flex-shrink-0 flex-col items-end justify-center pb-[11px]">
                <div className="flex w-[451px] flex-col items-end gap-y-4">
                  <Image
                    src={Laptop1}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-80 w-[451px] flex-shrink-0 object-cover object-center"
                  />
                  <Image
                    src={Table2}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-60 w-[344px] flex-shrink-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative z-[2] flex items-end justify-end pt-9">
            <div className="absolute left-0 top-0 z-0 flex h-[569px] w-[356px] flex-shrink-0 flex-col items-center">
              <div className="flex flex-col items-center gap-y-32 mr-[400px]">
                <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700">
                  #FuniroFurniture
                </div>
                <div className="flex items-center justify-center"></div>
              </div>
            </div>
            <div className="z-[2] flex flex-col items-start gap-y-4">
              <div className="flex flex-wrap items-end justify-center gap-x-4 gap-y-4 min-[1430px]:flex-nowrap">
                <Image
                  src={BedRoom}
                  alt={"no-image"}
                  loading="lazy"
                  className="h-[348px] w-72 flex-shrink-0 object-cover object-center"
                />
                <div className="bg-Tiles h-[433px] max-h-full w-64 max-w-full flex-shrink-0 bg-no-repeat" />
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-4 min-[1430px]:flex-nowrap">
                <Image
                  src={Window1}
                  alt={"no-image"}
                  loading="lazy"
                  className="h-60 w-44 flex-shrink-0 object-cover object-center"
                />
                <Image
                  src={Kichen}
                  alt={"no-image"}
                  loading="lazy"
                  className="h-48 w-64 flex-shrink-0 object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
