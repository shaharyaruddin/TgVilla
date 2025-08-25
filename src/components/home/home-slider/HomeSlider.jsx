"use client";
import React from "react";
import HomeSliderLeft from "./widgets/left/HomeSliderLeft";
import HomeSliderRight from "./widgets/right/HomeSliderRight";
import ResortSlider from "../resort-slider/ResortSlider";

const HomeSlider = () => {
  return (
    <>
    <div className="max-width bg-[#E8E4D9] w-full min-h-screen pt-10 grid grid-cols-2 max-md:grid-cols-1 max-md:flex max-md:flex-col-reverse gap-4 max-md:gap-8">
      <HomeSliderLeft />
      <HomeSliderRight />


    </div>
      {/* <ResortSlider/> */}
</>
  );
};

export default HomeSlider;