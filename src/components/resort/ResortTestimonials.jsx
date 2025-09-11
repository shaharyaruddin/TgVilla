"use client";

import React, { useState } from "react";
import TestimonialReviewSection from "../home/testimonials/widgets/Testimonial/TestimonialReviewSection";
import ReviewsModal from "../modals/reviews-modal";

const ResortTestimonials = ({ title, bgImage, bgColor, showButton = true }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`pb-10 relative w-full max-md:min-h-[20vh] bg-cover bg-center`}
      style={{
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundColor: bgImage ? "transparent" : bgColor || "transparent",
      }}
    >
      {title && (
        <h1 className="uppercase text-4xl font-bold font-playfair italic text-center">
          {title}
        </h1>
      )}
      {/* Overlay (only if bgImage is present) */}
      {bgImage && <div className="absolute inset-0 bg-black/50"></div>}

      {/* Content */}
      <div className="relative z-10 w-full max-md:min-h-[20vh] flex flex-col items-center justify-center p-10 max-md:p-4">
        <TestimonialReviewSection />

        {/* View All Button */}
        {showButton && (
          <button
  onClick={() => setOpen(true)}
  className={`mt-10 font-outfit font-semibold py-3 px-10 rounded-full transition duration-300
    ${bgImage 
      ? "border border-white text-white hover:bg-white hover:text-black" 
      : "border border-black text-black hover:bg-black hover:text-white"
    }`}
>
  View All
</button>

        )}

        {/* Reviews Modal */}
        <ReviewsModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );  
};

export default ResortTestimonials;
