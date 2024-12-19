import React from "react";
import Hero1 from "../../../public/images/Hero1.png";
import RightArrow from "../../../public/images/downarrow.png";
import Logo from "../../../public/images/logo.png";
import Trophy from "../../../public/images/trophy.png";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Arrow1 from "../../../public/images/arrow1.png";
import Line10 from "../../../public/images/Line10 .png";
import BlackRound from "../../../public/images/blackround.png";
import WhiteRound from "../../../public/images/whiteround.png";
import Image from "next/image";

export default function Checkout() {
  return (
    <div className="font-poppins w-full bg-white pb-12 leading-[normal] tracking-[0px]">
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
              Checkout
            </h1>
          </div>
          <div className="mt-4 sm:mt-8 flex items-center justify-center">
            <div className="py-2 text-sm font-medium text-black bg-transparent rounded-md hover:bg-gray-800 hover:text-white">
              Home
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Image src={RightArrow} alt="no-image" className="h-5 w-5" />
              <span className="text-sm font-light text-black">Checkout</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-4 sm:mt-10"></div>
      </div>
      <div className="flex flex-col items-center justify-center bg-white px-6 md:px-12 lg:px-24 pb-10 lg:pb-[52px] pt-8 lg:pt-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-center gap-x-6 gap-y-6 lg:gap-x-[26px] lg:gap-y-[26px]">
          <div className="flex flex-col items-start justify-center gap-y-6 bg-white p-6 md:p-10 lg:pb-[71px] lg:pl-[74px] lg:pr-20 lg:pt-9">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold">
              Billing details
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="flex flex-col sm:flex-row sm:gap-x-6">
                <div className="flex flex-col gap-y-2">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="h-[50px] sm:h-[75px] w-full sm:w-52 rounded-lg border border-neutral-400 p-2"
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="h-[50px] sm:h-[75px] w-full sm:w-52 rounded-lg border border-neutral-400 p-2"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Company Name (Optional)</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Country / Region</label>
                <div className="flex items-center justify-between rounded-lg border border-neutral-400 p-3">
                  <span className="text-neutral-400">Sri Lanka</span>
                  <Image src={Arrow1} alt={"no-image"} className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Street address</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Town / City</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Province</label>
                <div className="flex items-center justify-between rounded-lg border border-neutral-400 p-3">
                  <span className="text-neutral-400">Western Province</span>
                  <Image src={Arrow1} alt={"no-image"} className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col gap-y-2">
                <label>ZIP code</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Phone</label>
                <input
                  type="text"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label>Email address</label>
                <input
                  type="email"
                  className="h-[50px] sm:h-[75px] w-full lg:w-[453px] rounded-lg border border-neutral-400 p-2"
                />
              </div>
              <div className="flex flex-col gap-y-4">
                <label>Additional information</label>
                <textarea className="h-[100px] sm:h-[150px] w-full rounded-lg border border-neutral-400 p-3"></textarea>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col items-start justify-center gap-y-4 bg-white p-6 md:p-10 lg:pb-[86px] lg:pl-[38px] lg:pr-9 lg:pt-[87px]">
      <div className="flex flex-wrap items-center justify-between w-full text-lg font-medium">
        <span>Product</span>
        <span>Subtotal</span>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full text-sm font-light">
        <span>Asgaard sofa</span>
        <span>Rs. 250,000.00</span>
      </div>
      <div className="flex flex-wrap items-center justify-between w-full">
        <span>Total</span>
        <span className="text-lg font-bold text-gold">
          Rs. 250,000.00
        </span>
      </div>
      <button className="w-full rounded-lg border border-black py-3 text-center text-xl">
        Place order
      </button>
    </div> */}
          <div className="flex flex-col items-start justify-center gap-y-[11px] bg-white pb-[86px] pl-[38px] pr-9 pt-[87px]">
            <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-[18px] text-2xl font-medium leading-[normal] min-[1430px]:flex-nowrap">
              <div>Product</div>
              <div>Subtotal</div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-72 gap-y-3 pr-1 pt-[3px] min-[1430px]:flex-nowrap">
              <div className="flex items-center justify-center gap-x-2.5">
                <div className="text-neutral-400">Asgaard sofa</div>
                <div className="text-xs font-medium leading-[normal]">X</div>
                <div className="text-xs font-medium leading-[normal]">1</div>
              </div>
              <div className="font-light">Rs. 250,000.00</div>
            </div>
            <div className="flex flex-col items-center justify-end pl-px pt-[11px]">
              <div className="flex flex-col items-start gap-y-4">
                <div className="flex flex-wrap items-center justify-center gap-x-[355px] gap-y-3 min-[1430px]:flex-nowrap">
                  <div>Subtotal</div>
                  <div className="font-light">Rs. 250,000.00</div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-3 min-[1430px]:flex-nowrap">
                  <div>Total</div>
                  <div className="text-2xl font-bold leading-[normal] text-[darkgoldenrod]">
                    Rs. 250,000.00
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end self-stretch pl-0.5 pr-1 pt-[22px] [max-width:533px]">
              <Image
                src={Line10}
                alt={"no-image"}
                className="h-px flex-shrink-0"
              />
            </div>
            <div className="flex items-end px-0.5 pt-3">
              <div className="flex items-center justify-center gap-x-[15px]">
                <Image
                  src={BlackRound}
                  alt={"no-image"}
                  className="h-3.5 w-3.5 flex-shrink-0"
                />
                <div>Direct Bank Transfer</div>
              </div>
            </div>
            <div className="flex items-center self-stretch pl-px pr-1 [max-width:533px]">
              <div className="flex flex-grow items-center text-justify font-light text-neutral-400">
                <p>
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="flex items-end px-0.5 pt-3.5">
              <div className="flex flex-col items-start gap-y-[11px] font-medium text-neutral-400">
                <div className="flex items-center justify-center gap-x-[15px]">
                  <Image
                    src={WhiteRound}
                    alt={"no-image"}
                    className="h-3.5 w-3.5 flex-shrink-0"
                  />
                  <div>Direct Bank Transfer</div>
                </div>
                <div className="flex items-center gap-x-[15px]">
                  <Image
                    src={WhiteRound}
                    alt={"no-image"}
                    className="h-3.5 w-3.5 flex-shrink-0"
                  />
                  <div>Cash On Delivery</div>
                </div>
              </div>
            </div>
            <div className="self-stretch pr-1 pt-[11px] [max-width:533px]">
              <div className="flex items-center text-justify font-light">
                <p>
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <span className="text-justify font-semibold">
                    privacy policy.
                  </span>
                </p>
              </div>
            </div>
            <div className="flex items-end justify-center self-stretch pl-[7px] pt-7">
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-8 lg:px-24  py-4">
                <div className="text-center text-xl leading-[normal]">
                  Place order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
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
    </div>
  );
}
