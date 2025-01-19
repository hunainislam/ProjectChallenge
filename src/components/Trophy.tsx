"use client";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React, { useEffect, useState } from "react";

// Interface Trophy Data

interface TrophyData {
  trophy: string;
  highquality: string;
  craftedmaterials: string;
  guarantee: string;
  warrenty: string;
  over2year: string;
  sheeping: string;
  freeshipping: string;
  orderover: string;
  customer: string;
  supportcustomer: string;
  dedicated: string;
}

export default function TrophyComponent() {
  const [trophyData, setTrophyData] = useState<TrophyData | null>(null);

  // Fetch Query Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      const trophyQuery = `*[_type == "trophy"] [0] {
        trophy,
        highquality,
        craftedmaterials,
        guarantee,
        warrenty,
        over2year,
        sheeping,
        freeshipping,
        orderover,
        customer,
        supportcustomer,
        dedicated
      }`;

      const data = await client.fetch(trophyQuery);
      setTrophyData(data);
    };

    fetchData();
  }, []);

  // Page Loading Condition

  if (!trophyData) {
    return <div></div>;
  }
  return (
    <div className="z-[2] flex flex-col justify-center bg-orange-50 py-24 pl-12 w-full mt-20">
      <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 leading-normal min-[1430px]:flex-nowrap">
        {/* Trophy Image And Data */}

        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={urlFor(trophyData.trophy).url()}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] self-center font-semibold leading-normal text-neutral-800">
              {trophyData.highquality}
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              {trophyData.craftedmaterials}
            </div>
          </div>
        </div>

        {/* Guarantee Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={urlFor(trophyData.guarantee).url()}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              {trophyData.warrenty}
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              {trophyData.over2year}
            </div>
          </div>
        </div>

        {/* Sheeping Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={urlFor(trophyData.sheeping).url()}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800">
              {trophyData.freeshipping}
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              {trophyData.orderover}
            </div>
          </div>
        </div>

        {/* Customer Image And Data */}

        <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
          <Image
            src={urlFor(trophyData.customer).url()}
            alt={"no-image"}
            className="h-[60px] w-[60px] flex-shrink-0"
            width={500}
            height={500}
          />
          <div className="flex flex-col items-start gap-y-0.5">
            <div className="text-[25px] font-semibold leading-normal text-neutral-800 text-center">
              {trophyData.supportcustomer}
            </div>
            <div className="text-xl self-center font-medium leading-normal text-[gray]">
              {trophyData.dedicated}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
