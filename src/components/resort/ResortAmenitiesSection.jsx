"use client";

import React, { useState } from "react";

const AmenitiesSection = () => {
  const amenities = [
    {
      text: "Heated Saltwater Pool",
      icon: "/assets/icon/heatedicon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Ultra-Luxurious Outdoor Living",
      icon: "/assets/icon/ultraluxuryicon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Fully Equipped Gourmet Kitchen",
      icon: "/assets/icon/kitchen-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Private & Secure Stay",
      icon: "/assets/icon/securestay-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Exclusive 5-Star Hotel Services",
      icon: "/assets/icon/exclusive-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "High-Tech Smart Home & Entertainment",
      icon: "/assets/icon/high-tech-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Prime Location – Beach & City Access",
      icon: "/assets/icon/prime-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
    {
      text: "Private Spa & Wellness",
      icon: "/assets/icon/private-spa-icon.avif",
      image: "/assets/images/resort/section2/image-1.avif",
    },
  ];

  const [hoveredAmenity, setHoveredAmenity] = useState(null);

  return (
    <div className="w-full min-h-screen bg-[#F4F4EA] flex flex-col items-center justify-center p-10">
      <h2 className="text-3xl md:text-4xl font-semibold font-cormorant text-[#514941] mb-8 text-center">
        Our Competitive Premium Amenities
      </h2>
      <div className="flex flex-wrap justify-center gap-6 font-cormorant font-[700] text-4xl">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredAmenity(index)}
            onMouseLeave={() => setHoveredAmenity(null)}
          >
            <div className="flex items-center space-x-2 text-[#514941] hover:text-orange-600 transition-colors duration-300 cursor-pointer">
              <img src={amenity.icon} alt="amenity" className="w-9 h-9" />
              <span className="text-4xl my-2">{amenity.text}</span>{" "}
              <span className="text-5xl font-semibold text-[#FDD17C]">/</span>
            </div>

            {/* HOVER IMAGE */}
            {hoveredAmenity === index && (
              <div className="absolute left-1/2 -translate-y-1/2 -translate-x-1/2 -rotate-15 top-1/2 mt-3 size-26 bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn">
                <img
                  src={amenity.image}
                  alt={amenity.text}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmenitiesSection;
