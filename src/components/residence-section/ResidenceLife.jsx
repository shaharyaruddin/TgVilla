import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ResidenceLife = () => {
  const images = [
    { src: "/assets/images/beach/2.jpg", alt: "Pool Area" },
    { src: "/assets/images/beach/6.jpg", alt: "Bedroom" },
    { src: "/assets/images/beach/7.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/9.jpg", alt: "Outdoor Seating" },
    { src: "/assets/images/beach/10.jpg", alt: "Outdoor Seating" },
  ];

  return (
    <>
      <div className="w-full bg-[#E8E4D9] flex flex-col items-center justify-center px-4 py-8">
        {/* Title */}
        <div className="text-center mb-10 ">
          <h1 className="text-4xl md:text-5xl font-medium font-cormorant text-black mt-20">
            Your life in the beach
          </h1>
        </div>

        {/* Scrolling Images */}
        <Marquee speed={50} gradient={false}>
          <div className="flex">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ResidenceLife;
