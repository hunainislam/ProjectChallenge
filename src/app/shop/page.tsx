import Image from "next/image";
import React from "react";
import Hero1 from "../../../public/images/Hero1.png";
import RightArrow from "../../../public/images/downarrow.png";
import Uicons from "../../../public/images/uicons.png";
import Cigrid from "../../../public/images/ci-grid.png";
import ViewList from "../../../public/images/view-list.png";
import Line5 from "../../../public/images/Line5.png";
import Label from "../../../public/images/label.png";
import Label2 from "../../../public/images/label1.png";
import Trophy from "../../../public/images/trophy.png";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Logo from "../../../public/images/logo.png";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="font-poppins relative z-0 flex w-full flex-col items-center leading-[normal] tracking-[0px]">
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
              Shop
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
              <div className="font-light leading-[normal]">Shop</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <div className="font-poppins flex flex-grow flex-wrap items-center justify-between gap-x-3 gap-y-3 bg-[linen] px-24 py-[22px] leading-[normal] tracking-[0px] min-[1430px]:flex-nowrap">
          <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-3 min-[1430px]:flex-nowrap">
            <div className="flex h-[30px] items-center justify-center gap-x-3">
              <div className="flex h-[26px] w-6 flex-shrink-0 flex-col items-center pb-px">
                <Image
                  src={Uicons}
                  alt={"no-image"}
                  className="h-6 w-6 flex-shrink-0"
                />
              </div>
              <div className="text-xl leading-[normal]">Filter</div>
              <div className="flex items-center justify-end pl-[11px]">
                <Image
                  src={Cigrid}
                  alt={"no-image"}
                  className="h-7 w-7 flex-shrink-0"
                />
              </div>
              <div className="flex items-center justify-end self-stretch pl-3">
                <Image
                  src={ViewList}
                  alt={"no-image"}
                  className="h-6 w-6 flex-shrink-0"
                />
              </div>
            </div>
            <div className="flex flex-col items-center pb-px">
              <Image
                src={Line5}
                alt={"no-image"}
                className="h-9 w-0.5 flex-shrink-0"
              />
            </div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="leading-[normal]">Showing 1–16 of 32 results</div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-[17px] gap-y-4 text-xl leading-[normal] min-[1430px]:flex-nowrap">
            <div className="flex flex-col items-center pb-0.5">
              <div>Show</div>
            </div>
            <div className="flex h-14 w-14 flex-shrink-0 flex-col items-center pb-px">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center bg-white pb-[13px] pl-[10px] pr-3 pt-3 text-center text-neutral-400">
                16
              </div>
            </div>
            <div className="pb-0.5 pl-3">Short by</div>
            <div className="flex flex-col items-center pb-px">
              <div className="bg-white pb-[13px] pl-[30px] pr-[86px] pt-3 text-center text-neutral-400">
                Default
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Product */}

      <Link href="/singleproduct">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap mt-20">
          <div>
            <div className="bg-ImageRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3">
                <div className="relative z-0 flex items-center justify-center pl-1">
                  <Image
                    src={Label}
                    alt="no-image"
                    className="absolute -inset-x-px -inset-y-3 z-0"
                  />
                  <div className="z-[2] text-right font-medium leading-normal text-white">
                    -30%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Syltherine
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 3.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-FeaturedProduct flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3"></div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Leviosa
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
                {/* <div className="leading-normal text-[darkgray] line-through">
            Rp 3.500.000
          </div> */}
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-center justify-center gap-y-6 bg-neutral-700/70 py-44 pl-4 pr-[17px] font-semibold leading-normal">
      <div className="bg-white py-3 pl-[59px] pr-[52px] text-center text-[darkgoldenrod]">
        Add to cart
      </div>
      <div className="flex items-center justify-center gap-x-0.5 text-white">
        <div className="flex items-center justify-center gap-x-5">
          <div className="flex items-center justify-center gap-x-0.5">
            <object
              data="/assets/GridiconsShare.svg"
              className="h-4 w-4 flex-shrink-0"
            />
            <div>Share</div>
          </div>
          <div className="flex items-center justify-center gap-x-0.5">
            <object
              data="/assets/CompareSvgrepoCom.svg"
              className="h-4 w-4 flex-shrink-0"
            />
            <div>Compare</div>
          </div>
          <object data="/assets/Heart.svg" className="h-4 w-4 flex-shrink-0" />
        </div>
        <div>Like</div>
      </div>
    </div> */}

          <div>
            <div className="bg-Sofa flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center py-3 pl-[5px]">
                <div className="z-[2] text-right font-medium leading-normal text-white">
                  -50%
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Lolito
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Luxury big sofa
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 7.000.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Room flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                  <Image
                    src={Label2}
                    alt="no-image"
                    className="absolute  z-0"
                  />
                  <div className="z-[2] font-medium leading-normal text-white">
                    New
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-11 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Respira
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Outdoor bar table and stool
              </div>
              <div className="text-xl font-semibold leading-normal text-neutral-700">
                Rp 500.000
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Item 2 */}

      <Link href="/singleproduct">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap mt-20">
          <div>
            <div className="bg-ImageRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3">
                <div className="relative z-0 flex items-center justify-center pl-1">
                  <Image
                    src={Label}
                    alt="no-image"
                    className="absolute -inset-x-px -inset-y-3 z-0"
                  />
                  <div className="z-[2] text-right font-medium leading-normal text-white">
                    -30%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Syltherine
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 3.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-FeaturedProduct flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3"></div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Leviosa
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Sofa flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center py-3 pl-[5px]">
                <div className="z-[2] text-right font-medium leading-normal text-white">
                  -50%
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Lolito
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Luxury big sofa
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 7.000.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Room flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                  <Image
                    src={Label2}
                    alt="no-image"
                    className="absolute  z-0"
                  />
                  <div className="z-[2] font-medium leading-normal text-white">
                    New
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-11 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Respira
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Outdoor bar table and stool
              </div>
              <div className="text-xl font-semibold leading-normal text-neutral-700">
                Rp 500.000
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Item 3 */}

      <Link href="/singleproduct">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap mt-20">
          <div>
            <div className="bg-ImageRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3">
                <div className="relative z-0 flex items-center justify-center pl-1">
                  <Image
                    src={Label}
                    alt="no-image"
                    className="absolute -inset-x-px -inset-y-3 z-0"
                  />
                  <div className="z-[2] text-right font-medium leading-normal text-white">
                    -30%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Syltherine
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 3.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-FeaturedProduct flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3"></div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Leviosa
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Sofa flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center py-3 pl-[5px]">
                <div className="z-[2] text-right font-medium leading-normal text-white">
                  -50%
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Lolito
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Luxury big sofa
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 7.000.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Room flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                  <Image
                    src={Label2}
                    alt="no-image"
                    className="absolute  z-0"
                  />
                  <div className="z-[2] font-medium leading-normal text-white">
                    New
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-11 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Respira
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Outdoor bar table and stool
              </div>
              <div className="text-xl font-semibold leading-normal text-neutral-700">
                Rp 500.000
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Item 4 */}

      <Link href="/singleproduct">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap mt-20">
          <div>
            <div className="bg-ImageRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3">
                <div className="relative z-0 flex items-center justify-center pl-1">
                  <Image
                    src={Label}
                    alt="no-image"
                    className="absolute -inset-x-px -inset-y-3 z-0"
                  />
                  <div className="z-[2] text-right font-medium leading-normal text-white">
                    -30%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Syltherine
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 3.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-FeaturedProduct flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3"></div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Leviosa
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Stylish cafe chair
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 2.500.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Sofa flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center py-3 pl-[5px]">
                <div className="z-[2] text-right font-medium leading-normal text-white">
                  -50%
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Lolito
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Luxury big sofa
              </div>
              <div className="flex items-center justify-center gap-x-4">
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 7.000.000
                </div>
                <div className="leading-normal text-[darkgray] line-through">
                  Rp 14.000.000
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-Room flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
              <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                  <Image
                    src={Label2}
                    alt="no-image"
                    className="absolute  z-0"
                  />
                  <div className="z-[2] font-medium leading-normal text-white">
                    New
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-11 pt-4">
              <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                Respira
              </div>
              <div className="font-medium leading-normal text-[gray]">
                Outdoor bar table and stool
              </div>
              <div className="text-xl font-semibold leading-normal text-neutral-700">
                Rp 500.000
              </div>
            </div>
          </div>
        </div>
      </Link>

      <div className="flex items-end justify-center pr-1.5 pt-[70px]">
        <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[30px] text-center text-xl leading-[normal] min-[1430px]:flex-nowrap">
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[darkgoldenrod] py-[15px] pl-7 pr-[26px] text-white">
            1
          </div>
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
            2
          </div>
          <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
            3
          </div>
          <div className="rounded-[10px] bg-[linen] px-7 py-[15px] font-light">
            Next
          </div>
        </div>
      </div>

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
  );
}
