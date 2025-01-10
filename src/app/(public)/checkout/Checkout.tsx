"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import TrophyComponent from "@/components/Trophy";
import React, { useState, useEffect } from "react";
import CheckoutHero from "@/components/HeroSectionComponent/CheckoutHero";

// Interface Checkout

interface Checkout {
  billingdetails: string;
  firstname: string;
  lastname: string;
  companyname: string; // Optional
  countryregion: string;
  srilanka: string;
  streetaddress: string;
  towncity: string;
  province: string;
  westernprovince: string;
  arrowimage: string;
  Zipcode: string;
  phone: string;
  emailaddress: string;
  additionalinformation: string;
  product: string;
  subtotal: string;
  asgaardsofa: string;
  X: string;
  one: number;
  rs: string;
  total: string;
  line10image: string; // URL of the image
  blackroundimage: string; // URL of the image
  directbanktransfer: string;
  paragraph1: string;
  whiteroundimage: string; // URL of the image
  cashondelivery: string;
  paragraph2: string;
  privacypolicy: string;
  placeorder: string;
}

export default function Checkout() {
  const [CheckoutData, setCheckOutData] = useState<Checkout | null>(null);

  // Fetch CheckOut Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      const CheckOutQuery = `*[_type == "checkout"] [0] {
          billingdetails,
          firstname,
          lastname,
          companyname,
          countryregion,
          srilanka,
          streetaddress,
          towncity,
          province,
          westernprovince,
          arrowimage,
          Zipcode,
          phone,
          emailaddress,
          additionalinformation,
          product,
          subtotal,
          asgaardsofa,
          X,
          one,
          rs,
          total,
          line10image,
          blackroundimage,
          directbanktransfer,
          paragraph1,
          whiteroundimage,
          cashondelivery,
          paragraph2,
          privacypolicy,
          placeorder,
        }
        `;

      const data = await client.fetch(CheckOutQuery);
      setCheckOutData(data);
    };

    fetchData();
  }, []);

  // Page Loading Condition

  if (!CheckoutData) {
    return <div></div>;
  }
  return (
    <div className="font-poppins w-full bg-white pb-12 leading-[normal] tracking-[0px]">
      <CheckoutHero />
      <div className="flex flex-col items-center justify-center bg-white px-6 md:px-12 lg:px-24 pb-10 lg:pb-[52px] pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-x-6 gap-y-6 lg:gap-x-[26px] lg:gap-y-[26px]">
          <div className="flex flex-col items-start justify-center gap-y-6 bg-white p-6 md:p-10 lg:pb-[71px] lg:pl-[74px] lg:pr-20 lg:pt-9">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              {CheckoutData.billingdetails}
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-x-6">
                <div className="flex flex-col gap-y-2">
                  <label>{CheckoutData.firstname}</label>
                  <input
                    type="text"
                    className="h-[50px] sm:h-[75px] w-full sm:w-52 rounded-lg border border-neutral-400 p-2"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label>{CheckoutData.lastname}</label>
                  <input
                    type="text"
                    className="h-[50px] sm:h-[75px] w-full sm:w-52 rounded-lg border border-neutral-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.companyname}</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.countryregion}</label>
                <div className="flex items-center justify-between h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-4">
                  <input
                    type="text"
                    placeholder="Pakistan"
                    className="text-black w-full  border-none outline-none"
                  />
                  {CheckoutData.arrowimage && (
                    <Image
                      src={urlFor(CheckoutData.arrowimage).url()}
                      alt={"no-image"}
                      className="h-5 w-5"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.streetaddress}</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.towncity}</label>
                <div className="flex items-center justify-between h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-4">
                  <input
                    type="text"
                    className="text-black w-full border-none outline-none"
                  />
                  {CheckoutData.arrowimage && (
                    <Image
                      src={urlFor(CheckoutData.arrowimage).url()}
                      alt={"no-image"}
                      className="h-5 w-5"
                      width={500}
                      height={500}
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.province}</label>
                <input
                  type="text"
                  placeholder="Western Province"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.Zipcode}</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.phone}</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>{CheckoutData.emailaddress}</label>
                <input
                  type="email"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <label>{CheckoutData.additionalinformation}</label>
                <textarea className="h-[100px] sm:h-[150px] w-full rounded-lg border border-neutral-400 p-3"></textarea>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-y-[11px] bg-white pb-[86px] pl-[38px] pr-9 pt-[87px]">
            <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-[18px] text-2xl font-medium leading-[normal] min-[1430px]:flex-nowrap">
              <div>{CheckoutData.product}</div>
              <div>{CheckoutData.subtotal}</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-72 gap-y-3 pr-1 pt-[3px] min-[1430px]:flex-nowrap">
              <div className="flex items-center justify-center gap-x-2.5">
                <div className="text-neutral-400">
                  {CheckoutData.asgaardsofa}
                </div>
                <div className="text-xs font-medium leading-[normal]">
                  {CheckoutData.X}
                </div>
                <div className="text-xs font-medium leading-[normal]">
                  {CheckoutData.one}
                </div>
              </div>
              <div className="font-light">{CheckoutData.rs}</div>
            </div>
            <div className="flex flex-col items-center justify-end pl-px pt-[11px]">
              <div className="flex flex-col items-start gap-y-4">
                <div className="flex flex-wrap items-center justify-center gap-x-[355px] gap-y-3 min-[1430px]:flex-nowrap">
                  <div>{CheckoutData.subtotal}</div>
                  <div className="font-light">{CheckoutData.rs}</div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-3 min-[1430px]:flex-nowrap">
                  <div>{CheckoutData.total}</div>
                  <div className="text-2xl font-bold leading-[normal] text-[darkgoldenrod]">
                    {CheckoutData.rs}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end self-stretch pl-0.5 pr-1 pt-[22px] [max-width:533px]">
              {CheckoutData.line10image && (
                <Image
                  src={urlFor(CheckoutData.line10image).url()}
                  alt={"no-image"}
                  className="h-px flex-shrink-0"
                  width={500}
                  height={500}
                />
              )}
            </div>
            <div className="flex items-end px-0.5 pt-3">
              <div className="flex items-center justify-center gap-x-[15px]">
                {CheckoutData.blackroundimage && (
                  <Image
                    src={urlFor(CheckoutData.blackroundimage).url()}
                    alt={"no-image"}
                    className="h-3.5 w-3.5 flex-shrink-0"
                    width={500}
                    height={500}
                  />
                )}
                <div>{CheckoutData.directbanktransfer}</div>
              </div>
            </div>
            <div className="flex items-center self-stretch pl-px pr-1 [max-width:533px]">
              <div className="flex flex-grow items-center text-justify font-light text-neutral-400">
                <p>{CheckoutData.paragraph1}</p>
              </div>
            </div>
            <div className="flex items-end px-0.5 pt-3.5">
              <div className="flex flex-col items-start gap-y-[11px] font-medium text-neutral-400">
                <div className="flex items-center justify-center gap-x-[15px]">
                  {CheckoutData.whiteroundimage && (
                    <Image
                      src={urlFor(CheckoutData.whiteroundimage).url()}
                      alt={"no-image"}
                      className="h-3.5 w-3.5 flex-shrink-0"
                      width={500}
                      height={500}
                    />
                  )}
                  <div>{CheckoutData.directbanktransfer}</div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  {CheckoutData.whiteroundimage && (
                    <Image
                      src={urlFor(CheckoutData.whiteroundimage).url()}
                      alt={"no-image"}
                      className="h-3.5 w-3.5 flex-shrink-0"
                      width={500}
                      height={500}
                    />
                  )}
                  <div>{CheckoutData.cashondelivery}</div>
                </div>
              </div>
            </div>
            <div className="self-stretch pr-1 pt-[11px] [max-width:533px]">
              <div className="flex items-center text-justify font-light">
                <p>
                  {CheckoutData.paragraph2}
                  <span className="text-justify font-semibold">
                    {CheckoutData.privacypolicy}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center self-stretch pl-[7px] pt-7">
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-8 lg:px-24  py-4">
                <div className="text-center text-xl leading-[normal]">
                  {CheckoutData.placeorder}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <TrophyComponent />
      </div>
    </div>
  );
}