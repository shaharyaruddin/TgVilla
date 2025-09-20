import React from "react";
import Marquee from "react-fast-marquee";

const ResidenceLife = () => {
  const images = [
    { src: "/assets/residence/2.jpg", alt: "resort" },
    { src: "/assets/residence/3.jpg", alt: "resort" },
    { src: "/assets/residence/4.jpg", alt: "resort" },
    { src: "/assets/residence/1.jpg", alt: "resort" },
    { src: "/assets/residence/5.jpg", alt: "resort" },
    { src: "/assets/residence/6.jpg", alt: "resort" },
  ];

  return (
    <>
      <div className="w-full bg-[#EBE7DC] flex flex-col items-center justify-center pt-8">
        {/* Title */}
        <div className="text-center mb-10 ">
          <h1 className="text-4xl md:text-5xl font-medium font-playfair text-black max-xxl:mt-20">
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
