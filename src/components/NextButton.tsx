import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'

// Interface Next Button Data

interface NextButtonData {
    one: number;
    two: number;
    three: number;
    next: string;
}

export default function NextButton() {

    const [NextButtonData, setNextButtonData] = useState<NextButtonData | null>(null);

    // Fetch Data Next Button For Sanity
    
      useEffect(() => {
        const fetchData = async () => {
          const nextButtonQuery = `*[_type == "nextbutton"] [0] {
        one,
        two,
        three,
        next}`;
    
          const data = await client.fetch(nextButtonQuery);
          setNextButtonData(data);
        };
    
        fetchData();
      }, []);

      // Page Loading Condition 
    
      if (!NextButtonData) {
        return <div></div>; 
      }

  return (
    <div className="flex items-end justify-center pr-1.5 pt-[20px]">
    <div className="flex flex-wrap items-center justify-center gap-x-[38px] gap-y-[30px] text-center text-xl leading-[normal] min-[1430px]:flex-nowrap">

        {/* Button One */}

      <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[darkgoldenrod] py-[15px] pl-7 pr-[26px] text-white">
        {NextButtonData.one}
      </div>

        {/* Button Two */}

      <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
        {NextButtonData.two}
      </div>

        {/* Button Three */}

      <div className="flex h-[60px] w-[60px] flex-shrink-0 items-center justify-center rounded-[10px] bg-[linen] px-6 py-[15px]">
        {NextButtonData.three}
      </div>
      {/* Button Four */}
      
      <div className="rounded-[10px] bg-[linen] px-7 py-[15px] font-light">
        {NextButtonData.next}
      </div>
    </div>
  </div>
  )
}
