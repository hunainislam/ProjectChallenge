import React from "react";
import Label from "../../public/images/label.png";
import LabelCyan from "../../public/images/label1.png";
import Image from "next/image";

export default function OurProduct() {
  return (
    <div className="font-poppins flex w-full flex-col gap-y-8 leading-normal tracking-[0px]">
      <div className="flex items-center justify-center pl-[5px]">
        <div className="text-center text-[40px] font-bold leading-[1.2] text-neutral-700 mt-10">
          Our Products
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap">
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
                  src={LabelCyan}
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
      <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap">
        <div>
          <div className="bg-Light flex flex-col items-center bg-cover bg-center">
            <div className="h-72 w-72 flex-shrink-0" />
          </div>
          <div className="flex flex-col items-start gap-y-2 self-stretch bg-gray-100 pb-[30px] pl-4 pr-36 pt-4">
            <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
              Grifo
            </div>
            <div className="font-medium leading-normal text-[gray]">
              Night lamp
            </div>
            <div className="text-xl font-semibold leading-normal text-neutral-700">
              Rp 1.500.000
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1226px]:flex-nowrap">
            <div>
              <div className="bg-BadRoom flex flex-col items-end bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
                <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                  <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                    <Image
                      src={LabelCyan}
                      alt="no-image"
                      className="absolute z-0"
                    />
                    <div className="z-[2] text-right font-medium leading-normal text-white">
                      New
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-40 pt-4">
                <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                  Muggo
                </div>
                <div className="font-medium leading-normal text-[gray]">
                  Small mug
                </div>
                <div className="text-xl font-semibold leading-normal text-neutral-700">
                  Rp 150.000
                </div>
              </div>
            </div>
            <div>
              <div className="bg-WallRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
                <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center bg-cover bg-center py-3 pl-[5px]">
                  <div className="z-[2] text-right font-medium leading-normal text-white">
                    -50%
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
                <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                  Pingky
                </div>
                <div className="font-medium leading-normal text-[gray]">
                  Cute bed set
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
          </div>
          <div className="flex items-center justify-center pl-px">
            <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-white px-[73px] py-[11px] mb-8">
              <div className="pl-2 text-center font-semibold leading-normal text-[darkgoldenrod]">
                Show More
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-RedSofa flex flex-col items-end bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
            <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
              <div className="relative z-0 flex flex-col items-center justify-center pl-[5px]">
                <Image
                  src={LabelCyan}
                  alt="no-image"
                  className="absolute  z-0"
                />
                <div className="z-[2] text-right font-medium leading-normal text-white">
                  New
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-24 pt-4">
            <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
              Potty
            </div>
            <div className="font-medium leading-normal text-[gray]">
              Minimalist flower pot
            </div>
            <div className="text-xl font-semibold leading-normal text-neutral-700">
              Rp 500.000
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
