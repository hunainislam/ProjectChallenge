import React from "react";
import RightArrow from "../../../public/images/downarrow.png";
import Hero1 from "../../../public/images/Hero1.png";
import Image from "next/image";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Trophy from "../../../public/images/trophy.png";
import Laptop from "../../../public/images/Laptop.png";
import Search from "../../../public/images/search.png";
import Admin from "../../../public/images/admin.png";
import Calander from "../../../public/images/calender.png";
import Tag from "../../../public/images/tag.png";
import Line7 from "../../../public/images/Line7.png";
import Copy from "../../../public/images/copy.png";
import Pen from "../../../public/images/pen.png";
import ReadMore from "../../../public/images/read.png";
import Book from "../../../public/images/book.png";
import Plant from "../../../public/images/plant.png";
import Table1 from "../../../public/images/table1.png";
import Chai from "../../../public/images/chai.png";
import Logo from "../../../public/images/logo.png";

export default function Blog() {
  return (
    <div className="font-poppins w-full bg-white tracking-[0px] text-neutral-400">
      {/* <div className="flex flex-col leading-[normal]">
      <div className="relative z-0 flex flex-col items-center text-center font-medium">
         <Image
    src={Hero1}
    alt={"no-image"}
    loading="lazy"
    className="z-[1] h-80 w-[1536px] flex-shrink-0 object-cover object-center"
  />
        <div className="absolute inset-x-[658px] bottom-32 top-[121px] z-[2] flex flex-col items-center justify-center">
          <div className="text-center text-5xl leading-[normal] font-semibold">Blog</div>
        </div>
        <div className="absolute left-[calc(50%_+_-12px_+_-48px)] top-[calc(50%_+_-12px_+_49px)] flex h-6 w-12 flex-shrink-0 flex-col items-center justify-center">
          <div className="text-center leading-[normal] font-medium">Home</div>
        </div>
      </div>
      <div className="flex h-0 flex-shrink-0 items-end justify-center">
        <div className="flex h-6 items-center justify-end pl-14">
          <div className="flex items-center justify-center gap-x-1.5 mb-[195px]">
          <Image
    src={RightArrow} alt={"no-image"}
      className="h-5 w-5 flex-shrink-0"
    />
            <div className="font-light leading-[normal]">Blog</div>
          </div>
        </div>
      </div>
    </div> */}
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
              Blog
            </div>
          </div>
          <div className="absolute left-[calc(50%_+_-12px_+_-48px)] top-[calc(50%_+_-12px_+_49px)] flex h-6 w-12 flex-shrink-0 flex-col items-center justify-center gap-20">
            <div className="text-center leading-[normal] mb-12 font-medium mr-8">
              Home
            </div>
          </div>
        </div>
        <div className="flex h-0 flex-shrink-0 items-end justify-center">
          <div className="flex h-6 items-center justify-end pl-14">
            <div className="flex items-center justify-center -gap-x-4 mb-[245px]">
              <Image
                src={RightArrow}
                alt={"no-image"}
                className="h-5 w-5 flex-shrink-0"
              />
              <div className="font-light leading-[normal]">Comparison</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-y-0.5 bg-white px-24 pt-20 text-justify text-[15px] leading-normal">
        <div className="pl-[3px]">
          <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[30px] text-justify min-[1430px]:flex-nowrap">
            <div className="flex flex-col items-center justify-center pt-[7px]">
              <Image
                src={Laptop}
                alt={"no-image"}
                loading="lazy"
                className="h-[500px] w-[817px] flex-shrink-0 rounded-[10px] object-cover object-center text-justify"
              />
            </div>
            <div className="flex flex-col items-start gap-y-8 bg-white px-10 pb-16 pt-[22px] text-left leading-[normal]">
              <div className="flex items-center justify-end self-stretch rounded-[10px] border border-solid border-neutral-400 bg-white py-4 pl-72 pr-[9px] mb-8">
                <Image
                  src={Search}
                  alt={"no-image"}
                  className="h-6 w-6 flex-shrink-0"
                />
              </div>
              <div className="px-9 pt-2.5 text-2xl font-semibold text-black leading-[normal]">
                Categories
              </div>
              <div className="flex items-center justify-center self-stretch">
                <div className="flex items-center justify-end pl-3">
                  <div className="flex items-center justify-center gap-x-36 leading-[normal]">
                    <div className="flex flex-col items-start gap-y-10">
                      <div>Crafts</div>
                      <div>Design</div>
                      <div>Handmade</div>
                      <div>Interior</div>
                      <div>Wood</div>
                    </div>
                    <div className="flex flex-col items-start gap-y-10">
                      <div>2</div>
                      <div>8</div>
                      <div>7</div>
                      <div>1</div>
                      <div className="text-center">6</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-3 text-left text-base leading-[normal] min-[1430px]:flex-nowrap mt-4 ml-12">
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Admin}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>Admin</div>
          </div>
          <div className="flex items-start justify-center gap-x-[11px]">
            <Image
              src={Calander}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>14 Oct 2022</div>
          </div>
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Tag}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />
            <div>Wood</div>
          </div>
        </div>
        <div className="flex flex-col justify-center pl-[3px] pt-[13px]">
          <div className="flex flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] text-justify min-[1430px]:flex-nowrap">
            <div className="flex flex-grow flex-col items-start gap-y-[11px] [max-width:817px]">
              <div className="text-3xl font-semibold text-black leading-[normal]">
                Going all-in with millennial design
              </div>
              <div className="flex items-start self-stretch text-justify">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Mus mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>
              </div>
              <div className="pt-[19px] leading-[normal] text-black">
                Read more
              </div>
              <div className="flex items-center self-stretch pr-[734px] text-justify [max-width:817px] mr-2">
                <Image
                  src={Line7}
                  alt={"no-image"}
                  className="h-px flex-grow"
                />
              </div>
              <div className="flex flex-col items-center justify-end pt-11 text-justify">
                <Image
                  src={Copy}
                  alt={"no-image"}
                  loading="lazy"
                  className="h-[500px] w-[817px] flex-shrink-0 rounded-[10px] object-cover object-center"
                />
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-y-[26px] bg-white py-4 pl-[76px] pr-16 text-left leading-[normal]">
              <div className="text-2xl font-semibold leading-[normal] text-black">
                Recent Posts
              </div>
              <div className="flex flex-col items-start gap-y-10">
                <div className="flex items-center gap-x-3">
                  <Image
                    src={Pen}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-[10px] object-cover object-center"
                  />
                  <div className="flex w-[119px] flex-shrink-0 flex-col gap-y-[5px]">
                    <div className="flex items-start text-sm leading-[normal] text-black">
                      <p>Going all-in with millennial design</p>
                    </div>
                    <div className="text-xs leading-[normal]">03 Aug 2022</div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <Image
                    src={ReadMore}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-[10px] object-cover object-center"
                  />
                  <div className="flex flex-col items-center pt-px">
                    <div className="flex w-36 flex-col gap-y-[5px]">
                      <div className="flex items-start text-sm leading-[normal] text-black">
                        <p>Exploring new ways of decorating</p>
                      </div>
                      <div className="w-[119px] text-xs leading-[normal]">
                        03 Aug 2022
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-x-3">
                  <Image
                    src={Book}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-[10px] object-cover object-center"
                  />
                  <div className="flex flex-col items-center pt-px">
                    <div className="flex w-40 flex-col gap-y-[5px]">
                      <div className="flex items-start text-sm leading-[normal] text-black">
                        <p>Handmade pieces that took time to make</p>
                      </div>
                      <div className="w-[119px] text-xs leading-[normal]">
                        03 Aug 2022
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <Image
                    src={Plant}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-[10px] object-cover object-center"
                  />
                  <div className="flex w-[119px] flex-shrink-0 flex-col gap-y-[5px]">
                    <div className="flex items-start text-sm leading-[normal] text-black">
                      <p>Modern home in Milan</p>
                    </div>
                    <div className="text-xs leading-[normal]">03 Aug 2022</div>
                  </div>
                </div>
                <div className="flex items-center gap-x-3">
                  <Image
                    src={Table1}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-20 w-20 flex-shrink-0 rounded-[10px] object-cover object-center"
                  />
                  <div className="flex w-[119px] flex-shrink-0 flex-col gap-y-[5px]">
                    <div className="flex items-start text-sm leading-[normal] text-black">
                      <p>Colorful office redesign</p>
                    </div>
                    <div className="text-xs leading-[normal]">03 Aug 2022</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-3 pt-[15px] text-left text-base leading-[normal] min-[1430px]:flex-nowrap mt-2 ml-10">
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Admin}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>Admin</div>
          </div>
          <div className="flex items-start justify-center gap-x-[11px]">
            <Image
              src={Calander}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>14 Oct 2022</div>
          </div>
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Tag}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />
            <div>Handmade</div>
          </div>
        </div>
        <div className="flex items-end px-[3px] pt-[13px] ml-9">
          <div className="text-3xl font-semibold text-black leading-[normal]">
            Exploring new ways of decorating
          </div>
        </div>
        <div className="flex items-end pl-[3px] pr-[423px] pt-2.5 ml-9">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
        </div>
        <div className="flex items-end px-[3px] pt-7 ml-9">
          <div className="leading-[normal] text-black">Read more</div>
        </div>
        <div className="flex items-end mr-12 ml-8 pr-[1157px] pt-[9px]">
          <Image
            src={Line7}
            alt={"no-image"}
            className="h-px flex-grow text-justify"
          />
        </div>
        <div className="flex items-end px-[3px] pt-[52px]">
          <Image
            src={Chai}
            alt={"no-image"}
            loading="lazy"
            className="h-[500px] w-[817px] flex-shrink-0 rounded-[10px] object-cover object-center text-justify"
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-9 gap-y-3 pt-[15px] text-left text-base leading-[normal] min-[1430px]:flex-nowrap mt-2">
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Admin}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>Admin</div>
          </div>
          <div className="flex items-start justify-center gap-x-[11px]">
            <Image
              src={Calander}
              alt={"no-image"}
              className="h-5 w-5 flex-shrink-0"
            />
            <div>14 Oct 2022</div>
          </div>
          <div className="flex items-center justify-center gap-x-[7px]">
            <Image
              src={Tag}
              alt={"no-image"}
              className="h-6 w-6 flex-shrink-0"
            />
            <div>Wood</div>
          </div>
        </div>
        <div className="flex items-end px-[3px] pt-[13px]">
          <div className="text-3xl font-semibold text-black leading-[normal]">
            Handmade pieces that took time to make
          </div>
        </div>
        <div className="flex items-end pl-[3px] pr-[423px] pt-2.5">
          <p className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
            mauris vitae ultricies leo integer malesuada nunc. In nulla posuere
            sollicitudin aliquam ultrices. Morbi blandit cursus risus at
            ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in.
            Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis
            nunc sed blandit libero. Pellentesque elit ullamcorper dignissim
            cras tincidunt. Pharetra et ultrices neque ornare aenean euismod
            elementum.
          </p>
        </div>
        <div className="flex items-end px-[3px] pt-7">
          <div className="leading-[normal] text-black">Read more</div>
        </div>
        <div className="flex items-end mr-4 pr-[1157px] pt-[9px]">
          <Image
            src={Line7}
            alt={"no-image"}
            className="h-px mr-16 flex-grow text-justify"
          />
        </div>
        <div className="flex items-end justify-center pl-[3px] pt-[52px]">
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
