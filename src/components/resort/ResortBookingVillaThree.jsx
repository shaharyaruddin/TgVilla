"use client";

import React from "react";

const ResortBookingVillaThree = () => {
  const images = [
    { src: "/assets/images/beach/2.jpg", alt: "Pool Area" },
    { src: "/assets/images/beach/6.jpg", alt: "Bedroom" },
    { src: "/assets/images/beach/7.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/9.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/10.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/2.jpg", alt: "Pool Area" },
    { src: "/assets/images/beach/6.jpg", alt: "Bedroom" },
    { src: "/assets/images/beach/7.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/9.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/10.jpg", alt: "Outdoor Seating" },
  ];

  return (
    <div className="w-full min-h-screen px-20 max-xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-10">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        2 Bedroom Villa
      </h2>
      <div className="grid grid-cols-5 gap-2 mt-10 max-md:mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((img, index) => (
          <div key={index} className="max-h-[20rem] max-md:max-h-[15rem] max-sm:max-h-[12rem]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-[#514941] mt-10">
         <h3 className="text-xl max-md:text-base">What Our Guests Say</h3>
      <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[7vw]">
        {" "}
        Hear From Our Satisfied Guests
      </h2>
      <p className="text-xl max-md:text-base">
        Our guests rave about the exceptional service, luxurious amenities, and breathtaking views that make their stay unforgettable. Read their heartfelt testimonials to see why our villa is the perfect choice for your next getaway.
      </p>
      </div>
    </div>
  );
};

export default ResortBookingVillaThree;