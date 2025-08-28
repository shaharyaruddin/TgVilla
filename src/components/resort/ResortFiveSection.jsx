'use client'
import React, { useState } from "react";
import ResortImageMarqee from "./ResortImageMarqee";
import GalleryModal from "../models/GalleryModal";

const ResortFiveSection = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-3 px-20 max-xl:px-10 max-md:px-5 max-md:text-center text-[#514941] mt-10">
      <h3 className="text-xl max-md:text-base ">A Glimpse into Paradise</h3>
      <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[8vw] max-md:leading-normal">
        {" "}
        Visual Journey Through Our 5-Star TG Luxury Resort
      </h2>
      <p className="text-xl max-md:text-sm">
        Step inside a world of private luxury and wellness at TG Luxury Villas,
        where high-end interiors, stunning outdoor spaces, and private
        facilities create an unforgettable experience. Nestled in Limassol's
        most prestigious area, our exclusive villas offer both tranquil
        relaxation and easy access to Cyprus's finest beaches, restaurants and
        nightlife.
      </p>
      <div className="w-full flex justify-center">
        <button onClick={() => setOpen(true)}className="text-[#26180F] w-fit max-md:w-full max-md:text-xs max-md:mt-3 mt-5 capitalize border-2 px-3 py-2 rounded-full font-medium border-[#26180F]">
          see more
        </button>
      </div>
      <div className="flex flex-col gap-3 my-10">
        <ResortImageMarqee />
        <ResortImageMarqee direction={"right"} />
      </div>
      <GalleryModal open={open} setOpen={setOpen} />

    </div>
  );
};

export default ResortFiveSection;
