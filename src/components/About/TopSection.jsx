"use client";
import React from "react";

const TopSection = () => {
  return (
    <div className="relative h-[26rem] bg-[url('/assets/about/topimg.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-4">
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl font-bold mb-4 uppercase">
          About Us
        </h1>
        <p className="max-w-2xl text-sm md:text-base">
          Discover the art of unforgettable vacations
        </p>
      </div>
    </div>
  );
};

export default TopSection;
