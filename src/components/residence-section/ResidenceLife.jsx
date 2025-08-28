import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ResidenceLife = () => {
  const images = [
    { src: "/assets/images/resort/section2/image-5.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-6.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-7.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-8.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-9.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-10.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-11.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-12.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-13.webp", alt: "resort" },
    { src: "/assets/images/resort/section2/image-15.webp", alt: "resort" },
  ];

  return (
    <>
      <div className="w-full bg-[#E8E4D9] flex flex-col items-center justify-center px-4 py-8">
        {/* Title */}
        <div className="text-center mb-10 ">
          <h1 className="text-4xl md:text-5xl font-medium font-cormorant text-black max-xxl:mt-20">
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
