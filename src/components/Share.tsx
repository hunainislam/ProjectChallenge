"use client";

import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

// Interface Share Data

interface ShareData {
  shareimage: string;
}
export default function FuniroFurniture() {
  const [shareData, setShareData] = useState<ShareData | null>(null);

  // Fetch Share Data For Sanity

  useEffect(() => {
    const fetchData = async () => {
      const shareQuery = `*[_type == "share"] [0] {
  shareimage}`;

      const data = await client.fetch(shareQuery);
      setShareData(data);
    };

    fetchData();
  }, []);

  if (!shareData) {
    return <div></div>;
  }
  return (
    <div className="w-full pt-[20px] md:pt-[40px] pb-[50px] bg-[#F4F5F7] overflow-hidden">
      <div className="flex justify-center items-center w-full ">
        {/* Share Image */}

        <Image
          src={urlFor(shareData.shareimage).url()}
          alt={"no-image"}
          width={2000}
          height={100}
        />
      </div>
    </div>
  );
}
