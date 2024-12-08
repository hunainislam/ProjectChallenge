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
              Checkout
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
            <div className="flex items-center justify-center -gap-x-4 mb-[245px]">
              <Image
                src={RightArrow}
                alt={"no-image"}
                className="h-5 w-5 flex-shrink-0"
              />
              <div className="font-light leading-[normal]">Checkout</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-white px-24 pb-[52px] pt-16">
        <div className="flex flex-grow flex-wrap items-start justify-center gap-x-[26px] gap-y-[26px] min-[1430px]:flex-nowrap">
          <div className="flex flex-col items-start justify-center gap-y-[22px] bg-white pb-[71px] pl-[74px] pr-20 pt-9">
            <div className="text-4xl font-semibold leading-[normal]">
              Billing details
            </div>
            <div className="flex flex-col items-center justify-end pl-px pt-3.5">
              <div className="flex flex-wrap items-center justify-center gap-x-[30px] gap-y-[30px] font-medium min-[1430px]:flex-nowrap">
                <div className="flex flex-col items-start gap-y-[22px] pl-px">
                  <div>First Name</div>
                  <div className="h-[75px] w-52 flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
                </div>
                <div className="flex flex-col items-start gap-y-[22px] pl-px">
                  <div>Last Name</div>
                  <div className="h-[75px] w-52 flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
                </div>
              </div>
            </div>
            <div className="pt-3.5 font-medium">Company Name (Optional)</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="pt-3.5 font-medium">Country / Region</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="flex flex-wrap items-center justify-center gap-x-80 gap-y-2.5 rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-[26px] min-[1430px]:flex-nowrap">
                <div className="text-neutral-400">Sri Lanka</div>
                <Image
                  src={Arrow1}
                  alt={"no-image"}
                  className="h-5 w-5 flex-shrink-0"
                />
              </div>
            </div>
            <div className="pt-3.5 font-medium">Street address</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="pt-3.5 font-medium">Town / City</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="pt-3.5 font-medium">Province</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="flex flex-wrap items-center justify-center gap-x-60 gap-y-2.5 rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-[26px] min-[1430px]:flex-nowrap">
                <div className="text-neutral-400">Western Province</div>
                <Image
                  src={Arrow1}
                  alt={"no-image"}
                  className="h-5 w-5 flex-shrink-0"
                />
              </div>
            </div>
            <div className="pt-3.5 font-medium">ZIP code</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="pt-3.5 font-medium">Phone</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="pt-3.5 font-medium">Email address</div>
            <div className="flex flex-col items-center pl-0.5">
              <div className="h-[75px] w-[453px] flex-shrink-0 rounded-[10px] border border-solid border-neutral-400 bg-white" />
            </div>
            <div className="flex flex-col items-center justify-end pl-0.5 pt-11">
              <div className="flex items-center rounded-[10px] border border-solid border-neutral-400 bg-white py-6 pl-7 pr-60">
                <div className="text-neutral-400">Additional information</div>
              </div>
            </div>
          </div>
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
              <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-24 py-4">
                <div className="text-center text-xl leading-[normal]">
                  Place order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-end pt-[22px] -mb-12">
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
    </div>
  );
}
