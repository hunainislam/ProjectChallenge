import React from "react";
import Image from "next/image";
import Table from "../../public/images/table.png";
import LivingRoom from "../../public/images/livingroom.png";
import BedRoom from "../../public/images/door.png";

export default function BrowseCard() {
  return (
    <div className="font-poppins relative flex w-full flex-col items-center pt-36 text-center leading-[normal] tracking-[0px] overflow-hidden">
      {/* Section Header */}
      <div className="absolute top-0 flex flex-col items-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
          Browse The Range
        </h2>
        <p className="mt-2 text-sm md:text-base text-dimgray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-16 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-5">
        {/* Dining Card */}
        <div className="flex flex-col items-center">
          <Image src={Table} alt="Dining" />
          <div className="mt-3 text-lg font-semibold">Dining</div>
        </div>

        {/* Living Card */}
        <div className="flex flex-col items-center">
          <Image src={LivingRoom} alt="Living" />
          <div className="mt-3 text-lg font-semibold">Living</div>
        </div>

        {/* Bedroom Card */}
        <div className="flex flex-col items-center">
          <Image src={BedRoom} alt="Bedroom" />
          <div className="mt-3 text-lg font-semibold">Bedroom</div>
        </div>
      </div>
    </div>
  );
}
