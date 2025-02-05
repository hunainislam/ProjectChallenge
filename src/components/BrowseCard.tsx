"use client";

import React from "react";
import Image from "next/image";
import Door from "../../public/images/door.png";
import Table from "../../public/images/table.png";
import LivingRoom from "../../public/images/livingroom.png";

// Interface Browse Card

const browseCardData = {
  sectionTitle: "Browse The Range",
  sectionSubtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  cards: [
    { title: "Dining", image: Table },
    { title: "Living", image: LivingRoom },
    { title: "Bedroom", image: Door },
  ],
};

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

      <div className="mt-16 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:px-40">
        {browseCardData.cards.map((card: any, index: any) => (
          <div key={index} className="flex flex-col items-center">
            {/* Card Image */}

            <Image
              src={card.image}
              alt={card.title}
              width={380} // Specify a width
              height={400} // Specify a height
            />

            {/* Card Title */}

            <div className="mt-3 text-lg font-semibold">{card.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
