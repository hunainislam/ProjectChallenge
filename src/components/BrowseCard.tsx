import React from "react";
import Image from "next/image";
import Table from "../../public/images/table.png";
import LivingRoom from "../../public/images/livingroom.png";
import BedRoom from "../../public/images/door.png";

export default function BrowseCard() {
  return (
    <div className="font-poppins relative flex w-full flex-col items-center pt-36 text-center leading-[normal] tracking-[0px]">
      <div className="flex flex-grow flex-wrap justify-center gap-x-5 gap-y-5 self-stretch text-2xl font-semibold leading-[normal] text-neutral-800 min-[1173px]:flex-nowrap mt-6">
        <div className="flex flex-col items-center gap-y-[30px] text-center">
          <Image
            src={Table}
            alt={"no-image"}
            className="h-[480px] w-96 flex-shrink-0"
          />
          <div>Dining</div>
        </div>
        <div className="flex flex-col items-center gap-y-[30px] text-center">
          <Image
            src={LivingRoom}
            alt={"no-image"}
            className="h-[480px] w-96 flex-shrink-0"
          />
          <div>Living</div>
        </div>
        <div className="flex flex-col items-center gap-y-[30px] text-center">
          <Image
            src={BedRoom}
            alt={"no-image"}
            className="h-[480px] w-96 flex-shrink-0"
          />
          <div>Bedroom</div>
        </div>
      </div>
      <div className="absolute left-[calc(50%_+_-24px_+_-155.5px)] top-0 flex h-12 w-96 flex-shrink-0 items-center text-left text-[32px] font-bold leading-[normal] text-neutral-800 mt-10">
        Browse The Range
      </div>
      <div className="absolute inset-x-80 top-12 flex h-7 flex-shrink-0 items-center justify-center text-xl leading-[normal] text-[dimgray] mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
}
