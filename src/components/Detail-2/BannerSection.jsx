import React from "react";
import PricingSection from "./PricingSection";

const BannerSection = () => {
  const items = [
    { src: "/assets/detail-2/villa.avif", label: "Villa" },
    { src: "/assets/detail-2/users.avif", label: "Upto 8" },
    { src: "/assets/detail-2/3bedroom.avif", label: "3 Bedrooms" },
    { src: "/assets/detail-2/2bedroom.avif", label: "2 Bathrooms" },
  ];

  return (
    <div className="bg-[#F4F4EA] pt-5">
      {/* ICON SECTION */}
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center  gap-10 md:gap-20">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={item.src}
              alt={item.label}
              className="w-14 h-14 object-contain"
            />
            <p className="text-sm text-gray-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>

      {/* PRICING SECTION ON NEXT LINE */}
      <div className="mt-10">
        <PricingSection />
        
      </div>
    </div>
  );
};

export default BannerSection;
