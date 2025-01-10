"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Browse Card

interface BrowseCard {
  sectionTitle: string;
  sectionSubtitle: string;
  cards: {
    title: string;
    image: string;
  }[];
}

export default function BrowseCard() {
  const [browseCardData, setbrowseCardData] = useState<BrowseCard | null>(null);

  // Fetch Browse Data From Sanity

  useEffect(() => {
    const fetchData = async () => {
      const browseCardQuery = `*[_type == "browseCard"] [0] {
           sectionTitle,
           sectionSubtitle,
           cards[] {
             title,
             image,
           }
         }`;

      const data = await client.fetch(browseCardQuery);
      setbrowseCardData(data);
    };

    fetchData();
  }, []);

  // Page Loading Condition

  if (!browseCardData) {
    return <div></div>;
  }

  return (
    <div className="font-poppins relative flex w-full flex-col items-center pt-36 text-center leading-[normal] tracking-[0px] overflow-hidden">
      {/* Section Header */}

      <div className="absolute top-0 flex flex-col items-center mt-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">
          {browseCardData.sectionTitle}
        </h2>
        <p className="mt-2 text-sm md:text-base text-dimgray">
          {browseCardData.sectionSubtitle}
        </p>
      </div>

      {/* Grid Section */}

      <div className="mt-16 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full lg:px-40">
        {browseCardData.cards.map((card: any, index: any) => (
          <div key={index} className="flex flex-col items-center">
            {/* Card Image */}

            <Image
              src={urlFor(card.image).url()}
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
