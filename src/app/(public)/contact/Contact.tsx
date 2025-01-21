"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import TrophyComponent from "@/components/Trophy";
import React, { useState, useEffect } from "react";
import ContactHero from "@/components/HeroSectionComponent/ContactHero";

// Interface Contact Data

interface contactData {
  title: string;
  content: string;
  mapimage: string;
  address: string;
  unitedstates: string;
  phoneimage: string;
  phone: string;
  mobile: string;
  hotline: string;
  timeimage: string;
  workingtime: string;
  mondayfriday: string;
  saturdaysunday: string;
  yourname: string;
  emailaddress: string;
  subject: string;
  message: string;
  sumbit: string;
}

export default function Contact() {
  const [contactData, setContactData] = useState<contactData | null>(null);

  // Fetch Contact Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactQuery = `*[_type == "contact"] [0] {
          title,
          content,
          mapimage,
          address,
          unitedstates,
          phoneimage,
          phone,
          mobile,
          hotline,
          timeimage,
          workingtime,
          mondayfriday,
          saturdaysunday,
          yourname,
          emailaddress,
          subject,
          message,
          sumbit,
        }`;

        const data = await client.fetch(contactQuery);
        setContactData(data);
      } catch (error) {
        console.error("Error fetching contact data:", error);
        // Optionally, handle the error here (e.g., show a message to the user)
      }
    };

    fetchData();
  }, []);

  // Page Loading Condition

  if (!contactData) {
    return (
      <div></div>
    );
  }
  
  return (
    <div className="font-poppins w-full bg-white leading-[normal] tracking-[0px]">
      <ContactHero />
      <div className="flex flex-col items-center justify-end gap-y-[7px] bg-white px-6 lg:px-48 pt-16 leading-[normal]">
        <div className="flex items-center justify-center self-stretch pl-px">
          <div className="text-center text-2xl lg:text-4xl font-semibold leading-[normal]">
            {contactData.title}
          </div>
        </div>
        <div className="flex w-full max-w-[644px] items-center justify-center text-center text-neutral-400">
          <p>{contactData.content}</p>
        </div>
        <div className="flex flex-wrap items-start justify-center gap-x-[30px] gap-y-[30px] self-stretch pt-[7px] lg:flex-nowrap">
          <div className="flex flex-col items-center justify-end pt-[68px]">
            <div className="flex flex-col items-center gap-y-11 bg-white pb-[71px] px-4 lg:pl-12 lg:pr-[75px] pt-12">
              <div className="flex items-start justify-center gap-x-[30px] pl-2 pt-3">
                <div className="flex h-4 flex-col items-center">
                  <Image
                    src={urlFor(contactData.mapimage).url()}
                    alt={"no-image"}
                    className="mt-[-11.88px] h-7 w-[22px] flex-shrink-0"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
                    {contactData.address}
                  </div>
                  <div className="flex items-start self-stretch">
                    <p>{contactData.unitedstates}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] mr-4 lg:mr-12">
                <div className="flex flex-col items-center pt-[3px]">
                  <Image
                    src={urlFor(contactData.phoneimage).url()}
                    alt={"no-image"}
                    className="h-[30px] w-[30px] flex-shrink-0"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
                    {contactData.phone}
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>{contactData.mobile}</p>
                      <p>{contactData.hotline}</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-center gap-x-[30px] pl-[7px]">
                <div className="flex flex-col items-center justify-end pt-1.5">
                  <Image
                    src={urlFor(contactData.timeimage).url()}
                    alt={"no-image"}
                    className="h-6 w-6 flex-shrink-0"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex-grow max-w-full lg:max-w-[212px]">
                  <div className="text-lg lg:text-2xl font-medium leading-[normal]">
                    {contactData.workingtime}
                  </div>
                  <div className="self-stretch">
                    <span>
                      <p>{contactData.mondayfriday}</p>
                      <p>{contactData.saturdaysunday}</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form className="flex flex-col w-full md:w-[635px] items-start justify-end gap-y-4 bg-white px-4 md:px-[52px] pb-8 md:pb-16 pt-10 md:pt-[119px]">
            <div className="w-full">
              <label className="font-medium">{contactData.yourname}</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input className="text-neutral-400 w-full" placeholder="Abc" />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">{contactData.emailaddress}</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input
                  className="text-neutral-400 w-full"
                  placeholder="Abc@def.com"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">{contactData.subject}</label>
              <div className="mt-2 rounded-[10px] border border-neutral-400 bg-white py-4 px-3">
                <input
                  className="text-neutral-400 w-full"
                  placeholder="This is an optional"
                />
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium">{contactData.message}</label>
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
                    {contactData.sumbit}
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
