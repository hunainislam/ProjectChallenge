import Image from "next/image";
import React from "react";
import RightArrow from "../../../public/images/downarrow.png";
import Hero1 from "../../../public/images/Hero1.png";
import Map from "../../../public/images/map.png";
import Phone from "../../../public/images/phone.png";
import Time from "../../../public/images/Time.png";
import Trophy from "../../../public/images/trophy.png";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Logo from "../../../public/images/logo.png";

export default function Contact() {
  return (
    <div className="font-poppins w-full bg-white leading-[normal] tracking-[0px]">
      <div className="flex flex-col leading-[normal]">
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
                Contact
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
                <div className="font-light leading-[normal]">Contact</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-end gap-y-[7px] bg-white px-48 pt-24 leading-[normal]">
        <div className="flex items-center justify-center self-stretch pl-px">
          <div className="text-center text-4xl font-semibold leading-[normal]">
            Get In Touch With Us
          </div>
        </div>
        <div className="flex w-[644px] items-center justify-center text-center text-neutral-400">
          <p>
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] self-stretch pt-[7px] min-[1430px]:flex-nowrap">
          <div className="flex flex-col items-center justify-end pt-[68px]">
            <div className="flex flex-col items-center gap-y-11 bg-white pb-[71px] pl-12 pr-[75px] pt-12">
              <div className="flex items-start justify-center gap-x-[30px] pl-2 pt-3">
                <div className="flex h-4 flex-col items-center">
                  <Image
                    src={Map}
                    alt={"no-image"}
                    className="mt-[-11.88px] h-7 w-[22px] flex-shrink-0"
                  />
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="text-2xl font-medium leading-[normal]">
                    Address
                  </div>
                  <div className="flex items-start self-stretch">
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] mr-12">
                <div className="flex flex-col items-center pt-[3px]">
                  <Image
                    src={Phone}
                    alt={"no-image"}
                    className="h-[30px] w-[30px] flex-shrink-0"
                  />
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="text-2xl font-medium leading-[normal]">
                    Phone
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>Mobile: +(84) 546-6789</p>
                      <p>Hotline: +(84) 456-6789</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] pl-[7px]">
                <div className="flex flex-col items-center justify-end pt-1.5">
                  <Image
                    src={Time}
                    alt={"no-image"}
                    className="h-6 w-6 flex-shrink-0"
                  />
                </div>
                <div className="flex-grow [max-width:212px]">
                  <div className="text-2xl font-medium leading-[normal]">
                    Working Time
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>Monday-Friday: 9:00 - 22:00</p>
                      <p>Saturday-Sunday: 9:00 - 21:00</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-[635px] flex-shrink-0 flex-col items-start justify-end gap-y-[22px] bg-white px-[52px] pb-16 pt-[119px]">
            <div className="flex items-center self-stretch px-px [max-width:531px]">
              <div className="flex-grow font-medium">Your name</div>
            </div>
            <div className="flex flex-col items-center pl-[2.3px]">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-[466px]">
                <div className="text-neutral-400">Abc</div>
              </div>
            </div>
            <div className="flex items-end self-stretch px-px pt-3.5 [max-width:531px]">
              <div className="flex-grow font-medium">Email address</div>
            </div>
            <div className="flex flex-col items-center pl-[2.3px]">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-96">
                <div className="text-neutral-400">Abc@def.com</div>
              </div>
            </div>
            <div className="flex items-end self-stretch px-[3px] pt-3.5 [max-width:531px]">
              <div className="flex-grow font-medium">Subject</div>
            </div>
            <div className="flex items-center justify-center self-stretch pl-1">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-[352px]">
                <div className="text-neutral-400">This is an optional</div>
              </div>
            </div>
            <div className="pt-3.5 font-medium">Message</div>
            <div className="flex flex-col items-center pl-px pr-[3px]">
              <div className="flex items-start rounded-[10px] border border-solid border-neutral-400 bg-white pb-[69px] pl-7 pr-80 pt-6">
                <div className="text-neutral-400">
                  Hi! i’d like to ask about
                </div>
              </div>
            </div>
            <div className="flex items-end px-[7px] pt-7">
              <div className="flex items-center justify-center rounded-[5px] border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[darkgoldenrod] px-[88px] py-[13px]">
                <div className="text-center text-white">Submit</div>
              </div>
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
