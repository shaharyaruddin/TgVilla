"use client";

import React from "react";
import TestimonialReviewSection from "../home/testimonials/widgets/Testimonial/TestimonialReviewSection";

const ResortTestimonials = ({ bgImage, bgColor, showButton = true }) => {
  return (
    <div
      className={`pb-10 md:pb-0 relative w-full min-h-screen max-md:min-h-[20vh] bg-cover bg-center`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? "transparent" : bgColor || "transparent",
      }}
    >
      {/* Overlay (only if bgImage is present) */}
      {bgImage && <div className="absolute inset-0 bg-black/50"></div>}

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen max-md:min-h-[20vh] flex flex-col items-center justify-center p-10 max-md:p-4">
        <TestimonialReviewSection />

        {/* View All Button */}
        {showButton && (
          <button className="mt-10 border border-white text-white font-outfit font-semibold py-3 px-10 rounded-full hover:bg-white hover:text-black transition duration-300">
            View All
          </button>
        )}
      </div>
    </div>
  );
};

export default ResortTestimonials;
