import React from "react";
import Link from "next/link";
import Image from "next/image";
import Line3 from "../../public/images/Line3.png";
import Line4 from "../../public/images/Line4.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 font-poppins min-h-[300px] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address Section */}

          <div>
            <h1 className="text-2xl font-bold mb-4">Funiro.</h1>
            <address className="text-gray-500 not-italic">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </address>
          </div>

          {/* Links Section */}

          <div>
            <h2 className="text-gray-700 font-semibold mb-4">Links</h2>
            <ul className="items-center space-y-2">
              <Link href={"/"} className="hover:text-gray-600">
                <li>Home</li>
              </Link>
              <Link href={"/shop"} className="hover:text-gray-600">
                <li>Shop</li>
              </Link>
              <Link href={"/singleproduct"} className="hover:text-gray-600">
                <li>About</li>
              </Link>
              <Link href={"/contact"} className="hover:text-gray-600">
                <li>Contact</li>
              </Link>
              <Link href={"/blog"} className="hover:text-gray-600">
                <li>Blog</li>
              </Link>
            </ul>
          </div>

          {/* Help Section */}

          <div>
            <h2 className="text-gray-700 font-semibold mb-4">Help</h2>
            <ul className="space-y-2">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </div>

          {/* Subscribe Section */}

          <div className="flex flex-col items-start gap-y-0.5 mt-10">
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
                height={100}
                width={180}
              />
              <Image
                src={Line3}
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
          2023 Funiro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
