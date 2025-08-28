"use client";

import React from "react";
import TestimonialReviewSection from "../home/testimonials/widgets/Testimonial/TestimonialReviewSection";

const ResortTestimonials = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center max-md:min-h-[20vh]"
      style={{
        backgroundImage: "url('/assets/images/resort/section2/image-4.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      {/* You can also try a gradient: */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div> */}

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen max-md:min-h-[20vh] flex flex-col items-center justify-center p-10 max-md:p-4">
        <TestimonialReviewSection />

        {/* View All Button */}
        <button className="mt-10 border border-white text-white font-outfit font-semibold py-3 px-10 rounded-full hover:bg-white hover:text-black transition duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default ResortTestimonials;
