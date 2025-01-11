import Share from "@/components/Share";
import React from "react";
import OurProduct from "@/components/OurProduct";
import BrowseCard from "@/components/BrowseCard";
import Inspiration from "@/components/Inspiration";
import Hero from "@/components/HeroSectionComponent/Hero";

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


