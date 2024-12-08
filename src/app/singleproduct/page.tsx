import React from "react";
import Arrow from "../../../public/images/Arrow.png";
import Line5 from "../../../public/images/Line5.png";
import OutDoorSofa from "../../../public/images/Outdoor-sofa .png";
import OutDoorSofa2 from "../../../public/images/Outdoorsofa2.png";
import StuartSofa from "../../../public/images/Stuartsofa3.png";
import MayaSofa from "../../../public/images/Mayasofa4.png";
import Star1 from "../../../public/images/Star1.png";
import Facebook from "../../../public/images/Vector(1).png";
import Linkedin from "../../../public/images/Vector(2).png";
import Twitter from "../../../public/images/Vector(3).png";
import CloudSofa from "../../../public/images/cloudSofa.png";
import CloudSofa2 from "../../../public/images/CloudSofa2.png";
import Chair from "../../../public/images/chair.png";
import Label from "../../../public/images/label.png";
import LabelCyan from "../../../public/images/label1.png";
import Image from "next/image";

export default function SingleProduct() {
  return (
    <div className="flex w-full flex-col bg-white pb-12">
      <div className="font-poppins flex flex-grow flex-col gap-y-[11px] leading-[normal] tracking-[0px]">
        <div className="flex flex-col gap-y-3.5">
          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-[13px] bg-[linen] px-24 py-8 leading-[normal] min-[1430px]:flex-nowrap">
              <div className="flex items-center justify-center gap-x-3.5 text-neutral-400">
                <div>Home</div>
                <div className="flex items-center justify-center gap-x-5">
                  <Image
                    src={Arrow}
                    alt={"no-image"}
                    className="h-5 w-5 flex-shrink-0"
                  />
                  <div className="flex flex-col items-center pl-[3px]">
                    <div>Shop</div>
                  </div>
                  <Image
                    src={Arrow}
                    alt={"no-image"}
                    className="h-5 w-5 flex-shrink-0"
                  />
                  <div className="flex items-center justify-end pb-px pl-1">
                    <Image
                      src={Line5}
                      alt={"no-image"}
                      className="h-9 w-0.5 flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center pb-0.5">
                <div>Asgaard sofa</div>
              </div>
            </div>
            <div className="flex flex-grow justify-center bg-white px-24 py-9">
              <div className="relative z-0 flex flex-grow flex-col items-center justify-center pb-5">
                <div className="font-poppins z-[1] flex flex-grow flex-col gap-y-[53px] self-stretch pr-6 leading-[normal] tracking-[0px]">
                  <div className="flex flex-wrap items-center justify-center gap-x-[105px] gap-y-[105px] min-[1430px]:flex-nowrap">
                    <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 min-[1430px]:flex-nowrap">
                      <div className="flex flex-col items-start gap-y-8">
                        <div className="flex flex-col items-center rounded-[10px] bg-[linen]">
                          <Image
                            src={OutDoorSofa}
                            alt={"no-image"}
                            className="h-20 w-[76px] flex-shrink-0"
                          />
                        </div>
                        <div className="flex flex-col items-center rounded-[10px] bg-[linen]">
                          <Image
                            src={OutDoorSofa2}
                            alt={"no-image"}
                            className="h-20 w-[76px] flex-shrink-0"
                          />
                        </div>
                        <div className="flex flex-col items-center rounded-[10px] bg-[linen]">
                          <Image
                            src={StuartSofa}
                            alt={"no-image"}
                            className="h-20 w-[76px] flex-shrink-0"
                          />
                        </div>
                        <div className="flex flex-col items-center rounded-[10px] bg-[linen]">
                          <Image
                            src={MayaSofa}
                            alt={"no-image"}
                            className="h-20 w-[76px] flex-shrink-0"
                          />
                        </div>
                      </div>
                      <div className="bg-Asgaard bg-no-repeat bg-center h-[500px] w-[423px] flex-shrink-0 rounded-[10px] bg-[linen]" />
                    </div>
                    <div className="text-[13px] leading-[normal]">
                      <div className="text-[42px] leading-[normal]">
                        Asgaard sofa
                      </div>
                      <div className="text-2xl font-medium leading-[normal] text-neutral-400 mt-4">
                        Rs. 250,000.00
                      </div>
                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-2.5 min-[1430px]:flex-nowrap">
                        <div className="flex h-[30px] items-center justify-center gap-x-[18px]">
                          <div className="flex items-center justify-center gap-x-1.5">
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
                            src={Line5}
                            alt={"no-image"}
                            className="h-[30px] w-px flex-shrink-0"
                          />
                        </div>
                        <div className="text-neutral-400">
                          5 Customer Review
                        </div>
                      </div>
                      <div className="flex items-end self-stretch pr-40 pt-[13px] [max-width:582px]">
                        <div className="flex flex-grow items-end">
                          <p>
                            Setting the bar as one of the loudest speakers in
                            its class, the Kilburn is a compact, stout-hearted
                            hero with a well-balanced audio which boasts a clear
                            midrange and extended highs for a sound.
                          </p>
                        </div>
                      </div>
                      <div className="pt-[22px] text-sm leading-[normal] text-neutral-400">
                        Size
                      </div>
                      <div className="flex items-end px-px pt-3">
                        <div className="flex items-center justify-center gap-x-4 text-center">
                          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[darkgoldenrod] px-3 py-[5px] text-white">
                            L
                          </div>
                          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[linen] px-2 py-[5px]">
                            XL
                          </div>
                          <div className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[5px] bg-[linen] px-[7px] py-[5px]">
                            XS
                          </div>
                        </div>
                      </div>
                      <div className="pt-[18px] text-sm leading-[normal] text-neutral-400">
                        Color
                      </div>
                      <div className="flex items-end px-px pt-3">
                        <div className="flex items-center justify-center gap-x-4">
                          <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-[mediumslateblue]" />
                          <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-black" />
                          <div className="h-[30px] w-[30px] flex-shrink-0 rounded-full bg-[darkgoldenrod]" />
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-end pl-px pt-8">
                        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2.5 text-xl leading-[normal] min-[1430px]:flex-nowrap">
                          <div className="flex flex-col items-center justify-center rounded-[10px] border border-solid border-neutral-400 bg-white px-[11px] py-[19px]">
                            <div className="flex flex-col items-center pl-[3px]">
                              <div className="flex items-center justify-center gap-x-9 leading-[normal]">
                                <div>-</div>
                                <div className="font-medium">1</div>
                                <div>+</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-end pl-2">
                            <div className="flex items-center justify-center rounded-[15px] border border-solid border-x-black border-y-black px-12 py-4">
                              <div className="text-center">Add To Cart</div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center gap-x-2.5 rounded-[15px] border border-solid border-x-black border-y-black pb-[13px] pl-12 pr-11 pt-3.5">
                            <div className="text-[23px] leading-[normal]">
                              +
                            </div>
                            <div>Compare</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-[1217px] items-center pl-[635px]">
                    <div className="mr-[-24.01px] flex flex-col items-start gap-y-3 leading-[normal] text-neutral-400">
                      <div className="self-stretch pl-px [max-width:606px]">
                        <object
                          data="/assets/Line1.svg"
                          className="h-px flex-shrink-0"
                        />
                      </div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-3 pt-7 min-[1430px]:flex-nowrap">
                        <div className="flex flex-col items-start gap-y-3">
                          <div>SKU</div>
                          <div>Category</div>
                          <div>Tags</div>
                        </div>
                        <div className="flex flex-col items-start gap-y-3 pl-1 text-center font-medium">
                          <div>:</div>
                          <div>:</div>
                          <div>:</div>
                        </div>
                        <div className="flex flex-col items-start gap-y-3">
                          <div>SS001</div>
                          <div>Sofas</div>
                          <div>Sofa, Chair, Home, Shop</div>
                        </div>
                      </div>
                      <div className="flex h-7 flex-shrink-0 flex-wrap items-center gap-x-11 gap-y-3 min-[1430px]:flex-nowrap">
                        <div>Share</div>
                        <div className="mt-[0.5px] flex h-7 items-start justify-center gap-x-3">
                          <div className="flex flex-col items-center">
                            <div className="font-medium">:</div>
                          </div>
                          <div className="flex items-center justify-center gap-x-6">
                            <Image
                              src={Facebook}
                              alt={"no-image"}
                              className="h-5 w-5 flex-shrink-0"
                            />
                            <div className="flex flex-col items-center self-stretch pl-0.5 mt-1">
                              <Image
                                src={Linkedin}
                                alt={"no-image"}
                                className="h-5 w-5 flex-shrink-0"
                              />
                            </div>
                            <div className="flex h-[26px] w-6 flex-shrink-0 flex-col items-center pt-px">
                              <Image
                                src={Twitter}
                                alt={"no-image"}
                                className="h-6 w-6 flex-shrink-0"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-t-asgaard-sofa absolute left-[72px] top-20 z-[2] h-96 w-[481px] flex-shrink-0 bg-cover bg-center pl-[481px] pt-96" />
              </div>
            </div>
          </div>
        </div>
        <div className="leading-[normal]">
          <div className="flex flex-col items-center gap-y-[30px] bg-white pb-16 text-justify text-neutral-400">
            <div className="flex items-end justify-center self-stretch pl-px pt-[18px]">
              <div className="flex flex-wrap items-center justify-center gap-x-[52px] gap-y-[18px] text-2xl leading-[normal] min-[1430px]:flex-nowrap">
                <div className="font-semibold text-black">Description</div>
                <div>Additional Information</div>
                <div>Reviews [5]</div>
              </div>
            </div>
            <div className="flex items-end self-stretch px-52 pt-[7px]">
              <p className="text-justify">
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
                portable active stereo speaker takes the unmistakable look and
                sound of Marshall, unplugs the chords, and takes the show on the
                road.
              </p>
            </div>
            <div className="flex w-[1026px] items-center">
              <p className="text-justify">
                Weighing in under 7 pounds, the Kilburn is a lightweight piece
                of vintage styled engineering. Setting the bar as one of the
                loudest speakers in its class, the Kilburn is a compact,
                stout-hearted hero with a well-balanced audio which boasts a
                clear midrange and extended highs for a sound that is both
                articulate and pronounced. The analogue knobs allow you to fine
                tune the controls to your personal preferences while the
                guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-7 self-stretch px-24 pt-1.5 min-[1430px]:flex-nowrap">
              <div className="flex flex-col items-center rounded-[10px] bg-[linen] text-justify">
                <Image
                  src={CloudSofa}
                  alt={"no-image"}
                  className="h-[348px] w-[605px] flex-shrink-0"
                />
              </div>
              <div className="flex flex-col items-center rounded-[10px] bg-[linen] text-justify">
                <Image
                  src={CloudSofa2}
                  alt={"no-image"}
                  className="h-[348px] w-[605px] flex-shrink-0"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-[26px] bg-white pb-[104px] pl-24 pr-[104px] pt-14">
              <div className="flex items-center justify-center pl-px">
                <div className="text-center text-4xl font-semibold leading-[normal]">
                  Related Products
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-8 leading-normal min-[1430px]:flex-nowrap">
                <div>
                  <div className="bg-ImageRoom flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
                    <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-px py-3">
                      <div className="relative z-0 flex items-center justify-center pl-[5px]">
                        <Image
                          src={Label}
                          alt={"no-image"}
                          className="absolute -inset-x-px -inset-y-3 z-0"
                        />
                        <div className="z-[2] text-right font-medium text-white">
                          -30%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-5 pt-4">
                    <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                      Syltherine
                    </div>
                    <div className="font-medium text-[gray]">
                      Stylish cafe chair
                    </div>
                    <div className="flex items-center justify-center gap-x-4">
                      <div className="text-xl font-semibold leading-normal text-neutral-700">
                        Rp 2.500.000
                      </div>
                      <div className="text-[darkgray] line-through">
                        Rp 3.500.000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-y-11">
                  <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-8 min-[1430px]:flex-nowrap">
                    <div>
                      <Image
                        src={Chair}
                        alt={"no-image"}
                        loading="lazy"
                        className="h-72 w-72 flex-shrink-0 object-cover object-center"
                      />
                      <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-32 pt-4">
                        <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                          Leviosa
                        </div>
                        <div className="font-medium text-[gray]">
                          Stylish cafe chair
                        </div>
                        <div className="text-xl font-semibold leading-normal text-neutral-700">
                          Rp 2.500.000
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="bg-Sofa flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
                        <div className="bg-Label z-0 flex h-10 w-10 flex-shrink-0 flex-col items-end justify-center bg-cover bg-center py-3 pl-[5px]">
                          <div className="z-[2] text-right font-medium text-white">
                            -50%
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-[15px] pt-4">
                        <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                          Lolito
                        </div>
                        <div className="font-medium text-[gray]">
                          Luxury big sofa
                        </div>
                        <div className="flex items-center justify-center gap-x-4">
                          <div className="text-xl font-semibold leading-normal text-neutral-700">
                            Rp 7.000.000
                          </div>
                          <div className="text-[darkgray] line-through">
                            Rp 14.000.000
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center pl-[5px]">
                    <div className="flex items-center justify-center border border-solid border-x-[darkgoldenrod] border-y-[darkgoldenrod] bg-white px-[73px] py-[11px] mt-8 -mb-20">
                      <div className="pl-2 text-center font-semibold text-[darkgoldenrod]">
                        Show More
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-Room flex flex-col items-end self-stretch bg-cover bg-center pb-56 pl-52 pr-6 pt-6">
                    <div className="flex h-12 w-12 flex-shrink-0 flex-col items-center justify-center px-[5px] py-3">
                      <div className="relative z-0 flex flex-col items-center justify-center pl-[8px]">
                        <Image
                          src={LabelCyan}
                          alt={"no-image"}
                          className="absolute  z-0"
                        />
                        <div className="z-[2] text-right font-medium text-white">
                          New
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-y-2 bg-gray-100 pb-[30px] pl-4 pr-11 pt-4">
                    <div className="text-2xl font-semibold leading-[1.2] text-neutral-700">
                      Respira
                    </div>
                    <div className="font-medium text-[gray]">
                      Outdoor bar table and stool
                    </div>
                    <div className="text-xl font-semibold leading-normal text-neutral-700">
                      Rp 500.000
                    </div>
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
