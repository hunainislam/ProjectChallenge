import React from "react";
import Hero from "@/components/Hero";
import BrowseCard from "@/components/BrowseCard";
import OurProduct from "@/components/OurProduct";
import Inspiration from "@/components/Inspiration";
import Share from "@/components/Share";

export default function Home() {
  return (
    <div>
      <Hero />
      <BrowseCard />
      <OurProduct />
      <Inspiration />
      <Share />
    </div>
  );
}
