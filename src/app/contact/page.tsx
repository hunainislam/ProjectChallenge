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
              Contact
            </h1>
          </div>
          <div className="mt-4 sm:mt-8 flex items-center justify-center">
            <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
              Home
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Image src={RightArrow} alt="no-image" className="h-5 w-5" />
              <span className="text-sm font-light text-black">Contact</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
      </div>
      <div className="flex flex-col items-center justify-end gap-y-[7px] bg-white px-6 lg:px-48 pt-16 leading-[normal]">
        <div className="flex items-center justify-center self-stretch pl-px">
          <div className="text-center text-2xl lg:text-4xl font-semibold leading-[normal]">
            Get In Touch With Us
          </div>
        </div>
        <div className="flex w-full max-w-[644px] items-center justify-center text-center text-neutral-400">
          <p>
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You Out.
            Do Not Hesitate!
          </p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] self-stretch pt-[7px] lg:flex-nowrap">
          <div className="flex flex-col items-center justify-end pt-[68px]">
            <div className="flex flex-col items-center gap-y-11 bg-white pb-[71px] px-4 lg:pl-12 lg:pr-[75px] pt-12">
              <div className="flex items-start justify-center gap-x-[30px] pl-2 pt-3">
                <div className="flex h-4 flex-col items-center">
                  <Image
                    src={Map}
                    alt={"no-image"}
                    className="mt-[-11.88px] h-7 w-[22px] flex-shrink-0"
                  />
                </div>
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
                    Address
                  </div>
                  <div className="flex items-start self-stretch">
                    <p>236 5th SE Avenue, New York NY10000, United States</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] mr-4 lg:mr-12">
                <div className="flex flex-col items-center pt-[3px]">
                  <Image
                    src={Phone}
                    alt={"no-image"}
                    className="h-[30px] w-[30px] flex-shrink-0"
                  />
                </div>
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
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
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
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
          <form className="flex flex-col w-full md:w-[635px] items-start justify-end gap-y-4 bg-white px-4 md:px-[52px] pb-8 md:pb-16 pt-10 md:pt-[119px]">
            <div className="w-full">
              <label className="font-medium">Your name</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input className="text-neutral-400 w-full" placeholder="Abc"/>
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Email address</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input className="text-neutral-400 w-full" placeholder="Abc@def.com"/>
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Subject</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input className="text-neutral-400 w-full" placeholder="This is an optional"/>
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Message</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-8 px-3">
                <input className="text-neutral-400 w-full" placeholder="Hi! i’d like to ask about" />
                
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-end px-[7px] pt-7">
                <div className="flex items-center justify-center rounded-[5px] border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[darkgoldenrod] px-[88px] py-[13px]">
                  <button className="text-center text-white" type="submit">Submit</button>
                </div>
              </div>
            </div>
          </form>
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
