  "use client";

  import React, { useState } from "react";

  const AmenitiesSection = () => {
    const amenities = [
      {
        text: "Heated Saltwater Pool",
        icon: "/assets/icon/heatedicon.avif",
        image: "/images/amenities/heated1.jpg",
      },
      {
        text: "Ultra-Luxurious Outdoor Living",
        icon: "/assets/icon/ultraluxuryicon.avif",
        image: "/images/amenities/ultra.webp",
      },
      {
        text: "Fully Equipped Gourmet Kitchen",
        icon: "/assets/icon/kitchen-icon.avif",
        image: "/images/amenities/full-equipped.webp",
      },
      {
        text: "Private & Secure Stay",
        icon: "/assets/icon/securestay-icon.avif",
        image: "/images/amenities/private.jpeg",
      },
      {
        text: "Exclusive 5-Star Hotel Services",
        icon: "/assets/icon/exclusive-icon.avif",
        image: "/images/amenities/exclusive.webp",
      },
      {
        text: "High-Tech Smart Home & Entertainment",
        icon: "/assets/icon/high-tech-icon.avif",
        image: "/images/amenities/high-tech.webp",
      },
      {
        text: "Prime Location – Beach & City Access",
        icon: "/assets/icon/prime-icon.avif",
        image: "/images/amenities/prime.jpg",
      },
      {
        text: "Private Spa & Wellness",
        icon: "/assets/icon/private-spa-icon.avif",
        image: "/images/amenities/private.avif",
      },
    ];

    const [hoveredAmenity, setHoveredAmenity] = useState(null);

    return (
      <div className="w-full min-h-screen max-md:min-h-[80vh] bg-[#F4F4EA] flex flex-col items-center justify-center p-10 max-xl:p-5">
        <h2 className="text-4xl md:text-5xl font-semibold font-cormorant text-[#514941] mb-8 text-center max-md:mb-4">
          Our Competitive Premium Amenities
        </h2>
        <div className="flex flex-wrap justify-center max-md:justify-start gap-6 font-cormorant font-[700] text-4xl  mt-5 max-md:mt-0">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredAmenity(index)}
              onMouseLeave={() => setHoveredAmenity(null)}
            >
              <div className="flex items-center max-md:items-center space-x-2 text-[#514941] transition-colors duration-300 cursor-pointer">
                <img src={amenity.icon} alt="amenity" className="w-9 h-9" />
                <span className="text-4xl my-2 max-xl:text-3xl max-md:text-xl">
                  {amenity.text}
                </span>{" "}
                <span className="text-5xl font-semibold text-[#FDD17C] max-md:hidden">
                  /
                </span>
              </div>

              {/* HOVER IMAGE */}
              {hoveredAmenity === index && (
                <div className="absolute left-1/2 max-md:hidden -translate-y-1/2 -translate-x-1/2 -rotate-15 top-1/2 mt-3 w-28 h-32 bg-white shadow-lg  overflow-hidden animate-fadeIn">
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
