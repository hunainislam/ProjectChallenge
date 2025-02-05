import React from "react";

export default function NextButton() {
  return (
    <div className="flex items-end justify-center pr-1.5 pt-[20px]">
      <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[30px] text-center text-xl leading-[normal] min-[1430px]:flex-nowrap">
        {/* Button One */}

        <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[darkgoldenrod] py-[15px] pl-7 pr-[26px] text-white">
          1
        </div>

        {/* Button Two */}

        <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
          2
        </div>

        {/* Button Three */}

        <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
          3
        </div>
        {/* Button Four */}

        <div className="rounded-[10px] bg-[linen] px-7 py-[15px] font-light">
          Next
        </div>
      </div>
    </div>
  );
}
