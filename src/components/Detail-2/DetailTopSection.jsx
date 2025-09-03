"use client";
import React from "react";
import Marquee from "react-fast-marquee";

// Ensure image paths match your project structure
const DetailTopSection = () => {
  return (
    <div>
      <div className="relative h-screen bg-[url('/assets/detail-2/topimage.jpg')] bg-cover bg-center">
        {/* Fade Overlay */}
        <div className="absolute inset-0 bg-black/50 bg-opacity-50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto z-10 flex flex-col md:flex-row justify-center md:justify-between items-center  md:items-end h-full px-4 sm:px-6 md:px-12">
          {/* Left Side Text */}
          <div className="flex flex-col max-w-lg py-5 text-white w-full md:w-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold font-cormorant">
              Luxury interiors for <br />
              <span className="italic">iconic living</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg">
              Elrune creates bespoke interiors for villas, royal estates, and
              world-class hospitality. Our work blends architectural excellence
              with regal sophistication.
            </p>
            <button className="mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 w-fit bg-white text-black rounded-3xl shadow-lg hover:bg-gray-200 transition duration-300 text-sm sm:text-base">
              Explore →
            </button>
          </div>

          {/* Right Side Marquee Slider */}
          <div className="hidden md:block w-full md:w-[30%] pl-0 md:pl-12 pb-4">
            <div className="text-white mb-4 text-sm sm:text-base">
              Over 20+ luxury projects completed
            </div>

            <Marquee
              gradient={false}
              speed={50}
              pauseOnHover={true}
              direction="left" // left to right scroll
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <div key={num} className="mx-1 sm:mx-2">
                  <img
                    src="/assets/detail-2/topimage.jpg"
                    alt={`Interior ${num}`}
                    className="rounded-2xl shadow-lg w-[100px] sm:w-[120px] h-[80px] sm:h-[100px] object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailTopSection;