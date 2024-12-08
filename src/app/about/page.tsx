import Image from "next/image";
import React from "react";
import Guarantee from "../../../public/images/guarantee.png";
import Sheeping from "../../../public/images/shipping.png";
import Customer from "../../../public/images/customer-support.png";
import Trophy from "../../../public/images/trophy.png";
import RightArrow from "../../../public/images/downarrow.png";
import Hero1 from "../../../public/images/Hero1.png";
import Logo from "../../../public/images/logo.png";
import Sofa1 from "../../../public/images/Sofa1.png";
import Sofa2 from "../../../public/images/Sofa2.png";
import Line8 from "../../../public/images/Line8.png";
import DownArrow1 from "../../../public/images/DownArrow1.png";
import Line9 from "../../../public/images/Line9.png";
import Line10 from "../../../public/images/Line10.png";
import Star1 from "../../../public/images/Star1.png";

export default function About() {
  return (
    <div className="font-poppins flex w-full flex-col bg-white pb-12 tracking-[0px]">
      <div className="flex flex-col leading-[normal]">
        <div className="relative z-0 flex flex-col items-center text-center font-medium">
          <Image
            src={Hero1}
            alt={"no-image"}
            loading="lazy"
            className="z-[1] h-80 w-[1536px] flex-shrink-0 object-cover object-center"
          />
          <div className="absolute inset-x-[658px] bottom-32 top-[150px] z-[2] flex flex-col items-center justify-center text-center">
            <div className="flex h-0 flex-shrink-0 flex-col items-center justify-end">
              <Image
                src={Logo}
                alt={"no-image"}
                loading="lazy"
                className="h-10 w-16 flex-shrink-0 object-cover object-center"
              />
              <div className="text-center text-5xl leading-[normal] font-medium whitespace-nowrap text-black">
                Product Comparison
              </div>
            </div>
            <div className="absolute left-[calc(50%_+_-12px_+_-48px)] top-[calc(50%_+_-12px_+_49px)] flex h-6 w-12 flex-shrink-0 flex-col items-center justify-center">
              <div className="text-center leading-[normal] font-medium mr-8">
                Home
              </div>
            </div>
          </div>
          <div className="flex h-0 flex-shrink-0 items-end justify-center">
            <div className="flex h-6 items-center justify-end pl-14">
              <div className="flex items-center justify-center gap-x-1.5 mb-[175px]">
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
        <div className="flex flex-wrap items-center justify-center gap-x-[69px] gap-y-14 pl-24 pr-32 leading-[1.26] min-[1430px]:flex-nowrap">
          <div className="flex flex-grow flex-wrap items-end justify-center gap-x-12 gap-y-12 min-[1430px]:flex-nowrap">
            <div className="w-56 flex-shrink-0 font-medium">
              <div className="self-stretch text-[28px] leading-[1.26]">
                <span>
                  <p>Go to Product page for more</p>
                  <p>Products</p>
                </span>
              </div>
              <div className="pt-5 text-xl leading-[normal] text-neutral-500">
                View More
              </div>
              <Image
                src={Line8}
                alt={"no-image"}
                className="h-0.5 flex-shrink-0 self-stretch"
              />
            </div>
            <div className="flex items-center justify-end pb-[3px] pl-7">
              <div className="flex items-center justify-center rounded-[10px] bg-[linen] py-[15px] pl-[19px] pr-[22px]">
                <div className="flex flex-col items-center justify-end pt-[5px]">
                  <Image
                    src={Sofa1}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-36 w-60 flex-shrink-0 object-cover object-center"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center pb-[3px]">
              <div className="z-0 flex flex-col items-start pl-[3px]">
                <div className="z-[2] flex w-72 items-center justify-end pr-3">
                  <Image
                    src={Sofa2}
                    alt={"no-image"}
                    loading="lazy"
                    className="h-52 w-[271px] flex-shrink-0 object-cover object-center"
                  />
                </div>
                <div className="z-[1] flex h-2.5 flex-shrink-0 flex-col items-center">
                  <div className="mt-[-167px] h-44 w-72 flex-shrink-0 rounded-[10px] bg-[linen]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-end pt-8">
            <div className="flex flex-col items-start gap-y-3.5 font-semibold">
              <div className="text-2xl leading-[1.26]">Add A Product</div>
              <div className="flex items-center justify-center gap-x-10 rounded-md bg-[darkgoldenrod] pb-[7px] pl-[18px] pr-3.5 pt-1.5">
                <div className="w-36 flex-shrink-0 text-sm leading-[1.26] text-white">
                  Choose a Product
                </div>
                <div className="flex flex-col items-center pt-[0.88px]">
                  <Image
                    src={DownArrow1}
                    alt={"no-image"}
                    className="h-[11px] w-5 flex-shrink-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-center pt-[15px]">
          <div className="flex items-center pr-20">
            <div className="flex flex-wrap items-center justify-center gap-x-[88px] gap-y-12 font-medium min-[1430px]:flex-nowrap">
              <div className="flex flex-col items-start gap-y-[5px]">
                <div className="w-48 text-2xl leading-[1.26]">Asgaard Sofa</div>
                <div className="text-lg leading-[normal]">Rs. 250,000.00</div>
                <div className="flex flex-col items-center pl-px">
                  <div className="flex items-center justify-center gap-x-1 leading-[normal]">
                    <div className="flex h-7 w-7 flex-shrink-0 flex-col items-center pt-px">
                      <div className="h-7 w-7 flex-shrink-0 text-lg leading-[normal] mt-1">
                        4.7
                      </div>
                    </div>
                    <Image
                      src={Star1}
                      alt={"no-image"}
                      className="h-5 w-5 flex-shrink-0"
                    />
                    <div className="flex flex-col items-center pl-0.5">
                      <Image
                        src={Star1}
                        alt={"no-image"}
                        className="h-5 w-5 flex-shrink-0"
                      />
                    </div>
                    <div className="flex flex-col items-center pl-0.5">
                      <Image
                        src={Star1}
                        alt={"no-image"}
                        className="h-5 w-5 flex-shrink-0"
                      />
                    </div>
                    <div className="flex flex-col items-center pl-0.5">
                      <Image
                        src={Star1}
                        alt={"no-image"}
                        className="h-5 w-5 flex-shrink-0"
                      />
                    </div>
                    <div className="flex flex-col items-center pl-0.5">
                      <Image
                        src={Star1}
                        alt={"no-image"}
                        className="h-5 w-5 flex-shrink-0"
                      />
                    </div>
                    <div className="flex flex-col items-center self-stretch pl-0.5 [max-height:30px]">
                      <Image
                        src={Line9}
                        alt={"no-image"}
                        className="h-[30px] w-px flex-shrink-0"
                      />
                    </div>
                    <div className="pl-1 text-[13px] leading-[normal] text-neutral-400">
                      204 Review
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-y-[5px]">
                <div className="w-56 text-2xl leading-[1.26]">
                  Outdoor Sofa Set
                </div>
                <div className="text-lg leading-[normal]">Rs. 224,000.00</div>
                <div className="flex flex-col items-center pl-px">
                  <div className="flex items-center justify-center gap-x-[7px] leading-[normal]">
                    <div className="flex h-[30px] items-center justify-center">
                      <div className="flex items-center justify-center gap-x-[5px]">
                        <div className="flex h-7 w-7 flex-shrink-0 flex-col items-center pt-px">
                          <div className="h-7 w-7 flex-shrink-0 text-lg leading-[normal] mt-1">
                            4.2
                          </div>
                        </div>
                        <Image
                          src={Star1}
                          alt={"no-image"}
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <Image
                          src={Star1}
                          alt={"no-image"}
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <Image
                          src={Star1}
                          alt={"no-image"}
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <Image
                          src={Star1}
                          alt={"no-image"}
                          className="h-5 w-5 flex-shrink-0"
                        />
                        <Image
                          src={Star1}
                          alt={"no-image"}
                          className="h-5 w-5 flex-shrink-0"
                        />
                      </div>
                      <Image
                        src={Line9}
                        alt={"no-image"}
                        className="h-[30px] w-px flex-shrink-0"
                      />
                    </div>
                    <div className="text-[13px] leading-[normal] text-neutral-400">
                      145 Review
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end px-14 pt-14">
          <Image src={Line9} alt={"no-image"} className="h-px flex-shrink-0" />
        </div>
        <div className="flex items-center px-24">
          <div className="flex h-[2259px] flex-wrap items-center justify-center gap-x-10 gap-y-10 min-[1430px]:flex-nowrap">
            <div className="flex h-[2259px] flex-wrap items-center justify-center gap-x-[17px] gap-y-[17px] text-xl leading-[1.26] min-[1430px]:flex-nowrap">
              <div className="flex flex-col items-center pb-20">
                <div className="flex flex-col items-start gap-y-7">
                  <div className="flex items-center self-stretch px-[3px] [max-width:244px]">
                    <div className="flex-grow text-[28px] font-medium leading-[1.26]">
                      General
                    </div>
                  </div>
                  <div className="flex items-center self-stretch px-[3px] [max-width:244px]">
                    <div className="flex-grow">Sales Package</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Model Number</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Secondary Material</div>
                  </div>
                  <div className="flex items-end self-stretch px-[3px] pt-1.5 [max-width:244px]">
                    <div className="flex-grow">Configuration</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Upholstery Material</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Upholstery Color</div>
                  </div>
                  <div className="flex flex-col justify-end px-[3px] pt-[68px]">
                    <div className="flex items-center pr-[13px] [max-width:238px]">
                      <div className="flex-grow text-[28px] font-medium leading-[1.26]">
                        Product
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center self-stretch px-[3px] [max-width:244px]">
                    <div className="flex-grow">Filling Material</div>
                  </div>
                  <div className="flex items-end self-stretch px-[3px] pt-1.5 [max-width:244px]">
                    <div className="flex-grow">Finish Type</div>
                  </div>
                  <div className="flex flex-col justify-end px-[3px] pt-1.5">
                    <div className="flex items-center pr-6 [max-width:238px]">
                      <div className="flex-grow">Adjustable Headrest</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end px-[3px] pt-1.5">
                    <div className="flex items-center pr-9 [max-width:238px]">
                      <div className="flex flex-grow items-center">
                        <p>Maximum Load Capacity</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-end px-[3px] pt-1.5">
                    <div className="pr-[13px]">Origin of Manufacture</div>
                  </div>
                  <div className="px-[3px] pt-[68px]">
                    <div className="text-[28px] font-medium leading-[1.26]">
                      Dimensions
                    </div>
                  </div>
                  <div className="flex items-center self-stretch px-[3px] [max-width:244px]">
                    <div className="flex-grow">Width</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Height</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Depth</div>
                  </div>
                  <div className="flex items-end self-stretch px-[3px] pt-1.5 [max-width:244px]">
                    <div className="flex-grow">Weight</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Seat Height</div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-1.5 [max-width:244px]">
                    <div>Leg Height</div>
                  </div>
                  <div className="self-stretch px-[3px] pt-[68px] [max-width:244px]">
                    <div className="text-[28px] font-medium leading-[1.26]">
                      Warranty
                    </div>
                  </div>
                  <div className="px-[3px]">
                    <div className="flex items-center pr-[5px] [max-width:238px]">
                      <div className="flex-grow">Warranty Summary</div>
                    </div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-9 [max-width:244px]">
                    <div>
                      <span>
                        <p>Warranty Service</p>
                        <p>Type</p>
                      </span>
                    </div>
                  </div>
                  <div className="self-stretch pl-[3px] pt-20 [max-width:244px]">
                    <div>Covered in Warranty</div>
                  </div>
                  <div className="self-stretch pr-[69px] pt-24 [max-width:244px]">
                    <div className="flex items-center">
                      <p>Not Covered in Warranty</p>
                    </div>
                  </div>
                  <div className="self-stretch pr-[3px] pt-32 [max-width:244px]">
                    <div>Domestic Warranty</div>
                  </div>
                </div>
              </div>
              <div className="flex h-[2259px] flex-wrap items-end justify-center gap-x-[38px] gap-y-[38px] min-[1430px]:flex-nowrap">
                <Image
                  src={Line10}
                  alt={"no-image"}
                  className="h-[2259px] w-px flex-shrink-0 [min-height:2259px]"
                />
                <div className="flex flex-col items-center justify-end">
                  <div className="flex w-64 flex-col items-end gap-y-[34px]">
                    <div className="flex items-center justify-center self-stretch">
                      <div className="flex flex-grow items-center pl-2 [max-width:234px]">
                        <div className="flex-grow">1 sectional sofa</div>
                      </div>
                    </div>
                    <div className="flex items-end justify-center self-stretch pt-[13px]">
                      <div className="flex flex-grow items-center pl-2 [max-width:234px]">
                        <div className="flex-grow">TFCBLIGRBL6SRHS</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">Solid Wood</div>
                    </div>
                    <div className="flex items-center justify-center self-stretch">
                      <div className="flex flex-grow items-center [max-width:218px]">
                        <div className="flex-grow">L-shaped</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">Fabric + Cotton</div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">Bright Grey &amp; Lion</div>
                    </div>
                    <div className="flex flex-col justify-end self-stretch pt-32">
                      <div className="flex items-center pl-2 [max-width:234px]">
                        <div className="flex-grow">Foam</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">Bright Grey &amp; Lion</div>
                    </div>
                    <div className="flex items-center justify-center self-stretch">
                      <div className="flex flex-grow items-center [max-width:218px]">
                        <div className="flex-grow">No</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">280 KG</div>
                    </div>
                    <div className="self-stretch pt-6 [max-width:264px]">
                      <div>India</div>
                    </div>
                    <div className="flex flex-col justify-end self-stretch pt-32">
                      <div className="flex items-center pl-2 [max-width:234px]">
                        <div className="flex-grow">265.32 cm</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center self-stretch">
                      <div className="flex flex-grow items-center pl-2 [max-width:234px]">
                        <div className="flex-grow">76 cm</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">167.76 cm</div>
                    </div>
                    <div className="flex items-center justify-center self-stretch">
                      <div className="flex flex-grow items-center [max-width:218px]">
                        <div className="flex-grow">45 KG</div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">41.52 cm</div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex-grow">5.46 cm</div>
                    </div>
                    <div className="flex flex-col justify-end self-stretch pt-32">
                      <div className="flex items-center pl-2 [max-width:234px]">
                        <div className="flex flex-grow items-center">
                          <p>1 Year Manufacturing Warranty</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex flex-grow items-center">
                        <p>
                          For Warranty Claims or Any Product Related Issues
                          Please Email at operations@trevifurniture.com
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center self-stretch pl-6 [max-width:264px]">
                      <div className="flex flex-grow items-center">
                        <p>Warranty Against Manufacturing Defect</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-end px-[3px] pt-16">
                      <div className="flex items-center pl-[17px] [max-width:258px]">
                        <div className="flex flex-grow items-center">
                          <p>
                            The Warranty Does Not Cover Damages Due To Usage Of
                            The Product Beyond Its Intended Use And Wear &amp;
                            Tear In The Natural Course Of Product Usage.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="px-[3px]">
                      <div className="flex items-center pl-[17px] [max-width:258px]">
                        <div className="flex-grow">1 Year</div>
                      </div>
                    </div>
                    <div className="flex items-end self-stretch pt-[26px]">
                      <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[darkgoldenrod] px-12 py-4">
                        <div className="text-center leading-[normal] text-white">
                          Add To Cart
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center self-stretch pl-[3px] [max-height:2259px] [min-height:2259px]">
                  <Image
                    src={Line10}
                    alt={"no-image"}
                    className="h-[2259px] w-px flex-shrink-0"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-end self-stretch">
                <div className="flex w-72 flex-col items-end gap-y-[34px]">
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center pl-7 [max-width:255px]">
                      <div className="flex flex-grow items-center">
                        <p>1 Three Seater, 2 Single Seater</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center pl-7 [max-width:255px]">
                      <div className="flex-grow">DTUBLIGRBL568</div>
                    </div>
                  </div>
                  <div className="w-60 mr-1">Solid Wood</div>
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center [max-width:197px]">
                      <div className="flex-grow">L-shaped</div>
                    </div>
                  </div>
                  <div className="w-60">Fabric + Cotton</div>
                  <div className="w-60">Bright Grey &amp; Lion</div>
                  <div className="flex flex-col justify-end self-stretch pt-32">
                    <div className="flex items-center pl-7 [max-width:255px]">
                      <div className="flex-grow mr-1">Matte</div>
                    </div>
                  </div>
                  <div className="w-60 mr-4">Bright Grey &amp; Lion</div>
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center [max-width:197px]">
                      <div className="flex-grow -ml-3">yes</div>
                    </div>
                  </div>
                  <div className="w-60 mr-4">300 KG</div>
                  <div className="flex items-end self-stretch pl-11 pt-6 [max-width:285px]">
                    <div className="flex-grow -ml-3">India</div>
                  </div>
                  <div className="flex flex-col justify-end self-stretch pt-32">
                    <div className="flex items-center pl-7 [max-width:255px]">
                      <div className="flex-grow">265.32 cm</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center pl-7 [max-width:255px]">
                      <div className="flex-grow">76 cm</div>
                    </div>
                  </div>
                  <div className="w-60 mr-4">167.76 cm</div>
                  <div className="flex items-center justify-center self-stretch">
                    <div className="flex flex-grow items-center [max-width:197px]">
                      <div className="flex-grow mr-4">65 KG</div>
                    </div>
                  </div>
                  <div className="w-60 mr-4">41.52 cm</div>
                  <div className="w-60 mr-4">5.46 cm</div>
                  <div className="flex flex-col justify-end self-stretch pt-32">
                    <div className="flex items-center pr-5 [max-width:247px]">
                      <div className="flex flex-grow items-center ml-4">
                        <p>1.2 Year Manufacturing Warranty</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-end justify-center self-stretch pt-[9px]">
                    <div className="flex flex-grow items-center pr-[18px] [max-width:259px]">
                      <div className="flex flex-grow items-center">
                        <p>
                          For Warranty Claims or Any Product Related Issues
                          Please Email at support@xyz.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end self-stretch pt-4">
                    <div className="flex items-center pr-[18px] [max-width:259px]">
                      <div className="flex flex-grow items-center ml-4">
                        <p>
                          Warranty of the product is limited to manufacturing
                          defects only.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end self-stretch pt-[15px]">
                    <div className="flex items-center pr-9 [max-width:277px]">
                      <div className="flex flex-grow items-center ml-4">
                        <p>
                          The Warranty Does Not Cover Damages Due To Usage Of
                          The Product Beyond Its Intended Use And Wear &amp;
                          Tear In The Natural Course Of Product Usage.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end self-stretch pt-2">
                    <div className="flex items-center [max-width:269px]">
                      <div className="flex-grow ml-4">3 Months</div>
                    </div>
                  </div>
                  <div className="flex items-end self-stretch pt-[19px]">
                    <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-[darkgoldenrod] px-12 py-4">
                      <div className="text-center leading-[normal] text-white">
                        Add To Cart
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={Line10}
              alt={"no-image"}
              className="h-[2259px] w-px flex-shrink-0 [min-height:2259px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-end pt-28">
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
