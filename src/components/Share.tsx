import React from "react";
import Image from "next/image";
import Share from "../../public/images/Share.png";

export default function FuniroFurniture() {
  return (
    <div className="w-full pt-[20px] md:pt-[40px] pb-[50px] bg-[#F4F5F7] overflow-hidden">
      <div className="flex justify-center items-center w-full ">
        
        {/* Share Image */}

        <Image src={Share} alt={"no-image"} width={2000} height={100} />
      </div>
    </div>
  );
}
