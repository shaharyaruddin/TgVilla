"use client";

import React from "react";

const ResortThirdSection = () => {
  return (
    <div className="w-screen h-[25rem] relative max-md:h-[13rem]">
      <div className="bg-gradient-to-b from-transparent to-[#281A10] w-full h-full absolute z-10"></div>
      <video
        src="/assets/videos/resort.mp4"
        className="w-full h-full object-cover opacity-90"
        autoPlay
        muted
        loop
      ></video>
      <h2 className="text-[3.5vw] max-xl:text-[4.5vw] max-md:text-[8vw] w-1/2 max-md:w-[80%] absolute top-1/2 -translate-y-1/2 left-10 font-cormorant text-white z-[11]">A Wellness Spa Retreat – Private & Truly Unique
</h2>
    </div>
  );
};

export default ResortThirdSection;