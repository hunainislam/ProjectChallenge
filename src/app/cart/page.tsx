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
      <div className="relative z-0 flex flex-col items-center text-center font-medium">
        <Image
          src={Hero1}
          alt={"no-image"}
          loading="lazy"
          className="z-[1] h-80 w-[1536px] flex-shrink-0 object-cover object-center"
        />
        <div className="absolute inset-x-[658px] bottom-32 top-[128px] z-[2] flex flex-col items-center justify-center">
          <div className="flex h-0 flex-shrink-0 flex-col items-center justify-end">
            <Image
              src={Logo}
              alt={"no-image"}
              loading="lazy"
              className="h-10 w-16 flex-shrink-0 object-cover object-center"
            />
            <div className="text-center text-black text-5xl leading-[normal] font-semibold ">
              Cart
            </div>
          </div>
          <div className="absolute left-[calc(50%_+_-12px_+_-48px)] top-[calc(50%_+_-12px_+_49px)] flex h-6 w-12 flex-shrink-0 flex-col items-center justify-center gap-20">
            <div className="text-center leading-[normal] mb-12 font-medium">
              Home
            </div>
          </div>
        </div>
        <div className="flex h-0 flex-shrink-0 items-end justify-center">
          <div className="flex h-6 items-center justify-end pl-14">
            <div className="flex items-center justify-center gap-x-2 mb-[245px]">
              <Image
                src={RightArrow}
                alt={"no-image"}
                className="h-5 w-5 flex-shrink-0"
              />
              <div className="font-light leading-[normal]">Cart</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white px-24 pb-16 pt-[72px]">
        <div className="flex flex-grow flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] leading-[normal] min-[1430px]:flex-nowrap">
          <div className="flex flex-col items-start gap-y-14 leading-[normal]">
            <div className="flex flex-wrap items-center justify-center gap-x-28 gap-y-3 bg-[linen] px-36 pb-4 pt-[15px] font-medium min-[1430px]:flex-nowrap">
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
          <div className="relative flex flex-col items-center justify-end gap-y-11 bg-[linen] px-[75px] pb-20 pt-32">
            <div className="absolute left-[calc(50%_+_-24px_+_-76.5px)] top-[15px] flex h-12 w-44 flex-shrink-0 items-center justify-center text-center text-[32px] font-semibold leading-[normal]">
              Cart Totals
            </div>
            <div className="flex flex-col items-start gap-y-8">
              <div className="flex items-center justify-center gap-x-16 leading-[normal]">
                <div className="font-medium">Subtotal</div>
                <div className="text-neutral-400">Rs. 250,000.00</div>
              </div>
              <div className="flex items-start justify-center gap-x-14 font-medium">
                <div className="leading-[normal]">Total</div>
                <div className="text-xl leading-[normal] text-[darkgoldenrod]">
                  Rs. 250,000.00
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center pl-px">
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-14 pb-3.5 pt-[13px]">
                <div className="text-center text-xl leading-[normal]">
                  <Link href={"/checkout"}>Check Out</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end pt-[22px] -mb-8">
        <div className="z-[2] flex flex-col justify-center bg-orange-50 py-24 pl-12 w-full mt-20">
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-9 leading-normal min-[1430px]:flex-nowrap">
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
              <Image
                src={Trophy}
                alt={"no-image"}
                className="h-[60px] w-[60px] flex-shrink-0"
              />
              <div className="flex flex-col items-start gap-y-0.5">
                <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                  High Quality
                </div>
                <div className="text-xl font-medium leading-normal text-[gray]">
                  crafted from top materials
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 min-[1430px]:flex-nowrap">
              <Image
                src={Guarantee}
                alt={"no-image"}
                className="h-[60px] w-[60px] flex-shrink-0"
              />
              <div className="flex flex-col items-start gap-y-0.5">
                <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                  Warranty Protection
                </div>
                <div className="text-xl font-medium leading-normal text-[gray]">
                  Over 2 years
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5">
              <Image
                src={Sheeping}
                alt={"no-image"}
                className="h-[60px] w-[60px] flex-shrink-0"
              />
              <div className="flex flex-col items-start gap-y-0.5">
                <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                  Free Shipping
                </div>
                <div className="text-xl font-medium leading-normal text-[gray]">
                  Order over 150 $
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-2.5">
              <Image
                src={Customer}
                alt={"no-image"}
                className="h-[60px] w-[60px] flex-shrink-0"
              />
              <div className="flex flex-col items-start gap-y-0.5">
                <div className="text-[25px] font-semibold leading-normal text-neutral-800">
                  24 / 7 Support
                </div>
                <div className="text-xl font-medium leading-normal text-[gray]">
                  Dedicated support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
