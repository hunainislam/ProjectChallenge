"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Contact Hero Data
interface ContactHeroData {
  hero1image: string;
  logo: string;
  contact: string;
  home: string;
  imagerightarrow: string;
  contactone: string;
}

export default function ContactHero() {
  const [ContactHeroData, setContactHeroData] =
    useState<ContactHeroData | null>(null);

  // Fetch Contact Hero Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ContactHeroQuery = `*[_type == "contactherosection"] [0] {
          hero1image,
          logo,
          contact,
          home,
          imagerightarrow,
          contactone
        }`;
  
        const data = await client.fetch(ContactHeroQuery);
        setContactHeroData(data);
      } catch (error) {
        console.error("Error fetching contact hero data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  // Page Loading Condition

  if (!ContactHeroData) {
    return (
      <div></div>
    );
  }

  return (
    <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
      {/* Hero Section */}

      <Image
        src={urlFor(ContactHeroData.hero1image).url()}
        alt="no-image"
        loading="lazy"
        className="z-[1] w-full h-80 object-cover object-center"
        width={500}
        height={500}
      />
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 sm:inset-x-20 sm:top-0 sm:bottom-0 mb-24">
        <div className="flex flex-col items-center justify-center gap-y-2">
          {/* Logo */}

          <Image
            src={urlFor(ContactHeroData.logo).url()}
            alt="no-image"
            loading="lazy"
            className="h-10 w-16 object-cover"
            width={500}
            height={500}
          />
          <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
            {ContactHeroData.contact}
          </h1>
        </div>
        <div className="mt-4 sm:mt-8 flex items-center justify-center">
          <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
            {ContactHeroData.home}
          </div>
          <div className="flex items-center gap-2 ml-4">
            <Image
              src={urlFor(ContactHeroData.imagerightarrow).url()}
              alt="no-image"
              className="h-5 w-5"
              width={500}
              height={500}
            />
            <span className="text-sm font-light text-black">
              {ContactHeroData.contactone}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
    </div>
  );
}
