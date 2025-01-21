"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";

// Interface Footer

interface Footer {
  title: string;
  subtitle: string;
  subtitle1: string;
  links: string;
  home: string;
  shop: string;
  about: string;
  contact: string;
  blog: string;
  help: string;
  payment: string;
  returns: string;
  privacy: string;
  email: string;
  subcribe: string;
  line4image: string;
  line3image: string;
  funiro: string;
}

export default function Footer() {
  const [footerData, setFooterData] = useState<Footer | null>(null);

  // Fetch Footer Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const footerQuery = `*[_type == "footer"] [0] {
          title,
          subtitle,
          subtitle1,
          links,
          home,
          shop,
          about,
          contact,
          blog,
          help,
          payment,
          returns,
          privacy,
          email,
          subcribe,
          line4image,
          line3image,
          funiro
        }`;
  
        const data = await client.fetch(footerQuery);
        setFooterData(data);
      } catch (error) {
        console.error("Error fetching footer data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };
  
    fetchData();
  }, []);
  

  // Page Loading Condition

  if (!footerData) {
    return <div></div>;
  }

  return (
    <footer className="bg-white border-t border-gray-200 font-poppins min-h-[300px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}

          <div>
            <h1 className="text-2xl font-bold mb-4">{footerData.title}</h1>
            <address className="text-gray-500 not-italic">
              {footerData.subtitle}
              <br />
              {footerData.subtitle1}
            </address>
          </div>

          {/* Links Section */}

          <div>
            <h2 className="text-gray-700 font-semibold mb-4">
              {footerData.links}
            </h2>
            <ul className="items-center space-y-2">
              <Link href={"/"} className="hover:text-gray-600">
                <li>{footerData.home}</li>
              </Link>
              <Link href={"/shop"} className="hover:text-gray-600">
                <li>{footerData.shop}</li>
              </Link>
              <Link href={"/singleproduct"} className="hover:text-gray-600">
                <li>{footerData.about}</li>
              </Link>
              <Link href={"/contact"} className="hover:text-gray-600">
                <li>{footerData.contact}</li>
              </Link>
              <Link href={"/blog"} className="hover:text-gray-600">
                <li>{footerData.blog}</li>
              </Link>
            </ul>
          </div>

          {/* Help Section */}

          <div>
            <h2 className="text-gray-700 font-semibold mb-4">Help</h2>
            <ul className="space-y-2">
              <li>{footerData.payment}</li>
              <li>{footerData.returns}</li>
              <li>{footerData.privacy}</li>
            </ul>
          </div>

          {/* Subscribe Section */}

          <div className="flex flex-col items-start gap-y-0.5 mt-10">
            <div className="flex items-center justify-center gap-x-[38px] text-sm leading-[normal]">
              <div className="text-neutral-400 line-clamp-2">
                {footerData.email}
              </div>
              <div className="font-semibold">{footerData.subcribe}</div>
            </div>
            <div className="flex items-center justify-center gap-x-[11px] self-stretch [max-width:270px] font-extrabold">
              <Image
                src={urlFor(footerData.line4image).url()}
                alt={"no-image"}
                className="h-px flex-grow"
                height={100}
                width={180}
              />
              <Image
                src={urlFor(footerData.line3image).url()}
                alt={"no-image"}
                className="h-px flex-grow"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-300 mt-8 pt-4 text-start text-sm text-gray-500">
          {footerData.funiro}
        </div>
      </div>
    </footer>
  );
}
