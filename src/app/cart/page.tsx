import Image from "next/image";
import React from "react";
import Hero1 from "../../../public/images/Hero1.png";
import RightArrow from "../../../public/images/downarrow.png";
import Logo from "../../../public/images/logo.png";
import Sofa3 from "../../../public/images/Sofa3.png";
import Delete from "../../../public/images/delete.png";
import Trophy from "../../../public/images/trophy.png";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="font-poppins w-full bg-white pb-12 tracking-[0px]">
      <div className="relative z-0 flex flex-col items-center text-center font-medium overflow-hidden w-full">
        {/* Hero Section */}
        <Image
          src={Hero1}
          alt="no-image"
          loading="lazy"
          className="z-[1] w-full h-80 object-cover object-center"
        />
        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-4 sm:inset-x-20 sm:top-0 sm:bottom-0">
          <div className="flex flex-col items-center justify-center gap-y-2">
            {/* Logo */}
            <Image
              src={Logo}
              alt="no-image"
              loading="lazy"
              className="h-10 w-16 object-cover"
            />
            <h1 className="text-3xl sm:text-5xl font-semibold leading-tight text-black">
              Cart
            </h1>
          </div>
          <div className="mt-4 sm:mt-8 flex items-center justify-center">
            <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
              Home
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Image src={RightArrow} alt="no-image" className="h-5 w-5" />
              <span className="text-sm font-light text-black">Cart</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
      </div>

      {/* new1 */}
      <div className="flex items-center justify-center bg-white px-6 sm:px-12 md:px-24 pb-16 pt-[42px]">
        <div className="flex flex-col lg:flex-row flex-grow flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] leading-[normal] min-[1430px]:flex-nowrap">
          <div className="flex flex-col items-start gap-y-14 leading-[normal] w-full lg:w-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-28 gap-y-3 bg-[linen] px-6 sm:px-12 lg:px-36 pb-4 pt-[15px] font-medium min-[1430px]:flex-nowrap">
              <div>Product</div>
              <div>Price</div>
              <div className="flex items-center justify-end gap-x-9 pl-6">
                <div>Quantity</div>
                <div>Subtotal</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-[69px] gap-y-3 pl-[3px] pr-6 min-[1430px]:flex-nowrap">
              <div className="flex items-center justify-center gap-x-[34px]">
                <div className="flex h-[105px] w-[105px] flex-shrink-0 flex-col items-center rounded-[10px] bg-[#b8860b33] pr-[3px]">
                  <Image
                    src={Sofa3}
                    alt={"no-image"}
                    className="h-[105px] w-[102px] flex-shrink-0"
                  />
                </div>
                <div className="text-neutral-400">Asgaard sofa</div>
              </div>
              <div className="text-neutral-400">Rs. 250,000.00</div>
              <div className="flex items-center justify-end gap-x-12 pl-[15px]">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[5px] border border-solid border-neutral-400 px-3 py-[3px]">
                  <div className="text-center">1</div>
                </div>
                <div className="flex items-center self-stretch pb-0.5 pl-[7px]">
                  <div>Rs. 250,000.00</div>
                </div>
                <div className="flex flex-col items-center pb-0.5">
                  <Image
                    src={Delete}
                    alt={"no-image"}
                    className="h-7 w-7 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-end gap-y-11 bg-[linen] px-6 sm:px-12 lg:px-[75px] pb-20 pt-32 w-full lg:w-auto">
            <div className="absolute left-[calc(50%_-_76.5px)] top-[15px] flex h-12 w-44 flex-shrink-0 items-center justify-center text-center text-[32px] font-semibold leading-[normal]">
              Cart Totals
            </div>
            <div className="flex flex-col items-start gap-y-8">
              <div className="flex items-center justify-center gap-x-6 sm:gap-x-16 leading-[normal]">
                <div className="font-medium">Subtotal</div>
                <div className="text-neutral-400">Rs. 250,000.00</div>
              </div>
              <div className="flex items-start justify-center gap-x-6 sm:gap-x-14 font-medium">
                <div className="leading-[normal]">Total</div>
                <div className="text-xl leading-[normal] text-[darkgoldenrod]">
                  Rs. 250,000.00
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pl-px">
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-10 lg:14 pb-3.5 pt-[13px]">
                <div className="text-center text-xl leading-[normal]">
                  <Link href={"/checkout"}>Check Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="z-[2] flex flex-col justify-center bg-orange-50 py-24 pl-12 w-full">
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 leading-normal min-[1430px]:flex-nowrap">
          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Trophy}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] self-center font-semibold leading-normal text-neutral-800">
                High Quality
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                crafted from top materials
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Guarantee}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                Warranty Protection
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Over 2 years
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Sheeping}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                Free Shipping Safe
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Order over 150 $
              </div>
            </div>
          </div>
          <div className="flex flex-wrap self-center items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
            <Image
              src={Customer}
              alt={"no-image"}
              className="h-[60px] w-[60px] flex-shrink-0"
            />
            <div className="flex flex-col items-start gap-y-0.5">
              <div className="text-[25px] font-semibold leading-normal text-neutral-800 text-center">
                24 / 7 Support Customer
              </div>
              <div className="text-xl self-center font-medium leading-normal text-[gray]">
                Dedicated support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
