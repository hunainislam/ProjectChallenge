"use client";

import React from "react";
import Image from "next/image";
import TrophyComponent from "@/components/Trophy";
import Map from "../../../../public/images/map.png";
import Time from "../../../../public/images/Time.png";
import Phone from "../../../../public/images/phone.png";
import ContactHero from "@/components/HeroSectionComponent/ContactHero";

export default function Contact() {
  return (
    <div className="font-poppins w-full bg-white leading-[normal] tracking-[0px]">
      <ContactHero />
      <div className="flex flex-col items-center justify-end gap-y-[7px] bg-white px-6 lg:px-48 pt-16 leading-[normal]">
        <div className="flex items-center justify-center self-stretch pl-px">
          <div className="text-center text-2xl lg:text-4xl font-semibold leading-[normal]">
            Get In Touch With Us
          </div>
        </div>
        <div className="flex w-full max-w-[644px] items-center justify-center text-center text-neutral-400">
          <p>
            For More Information About Our Product &amp; Services. Please Feel
            Free To Drop Us An Email. Our Staff Always Be There To Help You
            Out.Do Not Hesitate!
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
                    width={500}
                    height={500}
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
                    width={500}
                    height={500}
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
                    width={500}
                    height={500}
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
                <input className="text-neutral-400 w-full" placeholder="Abc" />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Email address</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input
                  className="text-neutral-400 w-full"
                  placeholder="Abc@def.com"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Subject</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input
                  className="text-neutral-400 w-full"
                  placeholder="This is an optional"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">Message</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-8 px-3">
                <input
                  className="text-neutral-400 w-full"
                  placeholder="Hi! i’d like to ask about"
                />
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex items-end px-[7px] pt-7">
                <div className="flex items-center justify-center rounded-[5px] border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[darkgoldenrod] px-[88px] py-[13px]">
                  <button className="text-center text-white" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <TrophyComponent />
    </div>
  );
}
