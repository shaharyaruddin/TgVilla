import React from "react";
import Marquee from "react-fast-marquee";

const ResortButtonSection = () => {
  const images = [
    { src: "/assets/resort2/10.webp", alt: "resort" },
    { src: "/assets/resort2/15.webp", alt: "resort" },
    { src: "/assets/resort2/16.webp", alt: "resort" },
    { src: "/assets/resort2/17.webp", alt: "resort" },
    { src: "/assets/resort2/18.webp", alt: "resort" },
    { src: "/assets/resort2/20.webp", alt: "resort" },
    { src: "/assets/resort2/19.webp", alt: "resort" },
    { src: "/assets/resort2/21.webp", alt: "resort" },
    { src: "/assets/resort2/22.webp", alt: "resort" },
    { src: "/assets/resort2/23.webp", alt: "resort" },
    { src: "/assets/resort2/24.webp", alt: "resort" },
    { src: "/assets/resort2/25.webp", alt: "resort" },
    { src: "/assets/resort2/26.webp", alt: "resort" },
    { src: "/assets/resort2/27.webp", alt: "resort" },
    { src: "/assets/resort2/28.webp", alt: "resort" },
    { src: "/assets/resort2/29.webp", alt: "resort" },
    { src: "/assets/resort2/30.webp", alt: "resort" },
  ];

  return (
    <>
      <div className="w-full  flex flex-col items-center justify-center ">
        {/* Scrolling Images */}
        <Marquee speed={50} gradient={false}>
          <div className="flex">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-[25rem] h-[20rem] max-xl:h-[15rem] max-xl:w-[16rem] max-lg:h-[13rem] max-md:h-[10rem] max-md:w-[12rem]  object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default ResortButtonSection;
