import React from "react";
import Image from "next/image";
import Men from "../../public/images/men.png";
import Search from "../../public/images/search.png";
import Heart from "../../public/images/heart.png";
import Cart from "../../public/images/cart.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex flex-wrap items-center gap-x-40 gap-y-3 bg-white py-7 pl-14 pr-24 leading-[normal] tracking-[0px] min-[1430px]:flex-nowrap">
          <div className="flex items-center justify-center gap-x-[8px]">
            <div className="flex flex-col items-center pb-2">
              <div className="bg-Logo h-8 max-h-full w-12 max-w-full flex-shrink-0 bg-no-repeat" />
            </div>
            <div className="flex flex-col items-center pb-px">
              <div className="font-montserrat text-[34px] font-bold leading-[normal]">
                <Link href={"/"}>Furniro</Link>
              </div>
            </div>
          </div>
          <div className="font-poppins font-semibold flex flex-wrap items-center justify-end gap-x-[75px] gap-y-3 pl-28 leading-[normal] min-[1430px]:flex-nowrap">
            <div>
              <Link href={"/"}>Home</Link>
            </div>
            <div>
              <Link href={"/shop"}>Shop</Link>
            </div>
            <div>
              <Link href={"/about"}>About</Link>
            </div>
            <div>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <div>
              <Link href={"/blog"}>Blog</Link>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-11">
            <Image
              src={Men}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />

            <Image
              src={Search}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />
            <Image
              src={Heart}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />
            <Link href={"/cart"}>
              <Image
                src={Cart}
                alt={"no-image"}
                className="h-6 w-6 flex-shrink-0"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
