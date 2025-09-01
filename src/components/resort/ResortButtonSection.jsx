import React from "react";
import Marquee from "react-fast-marquee";

const ResortButtonSection = () => {
  const images = [
    { src: "/assets/resort2/10.webp", alt: "resort1" },
    { src: "/assets/resort2/15.webp", alt: "resort2" },
    { src: "/assets/resort2/16.webp", alt: "resort3" },
    { src: "/assets/resort2/17.jpg", alt: "resort4" },
    { src: "/assets/resort2/18.jpg", alt: "resort5" },
    { src: "/assets/resort2/20.webp", alt: "resort6" },
    { src: "/assets/resort2/19.jpg", alt: "resort7" },
    { src: "/assets/resort2/21.jpg", alt: "resort8" },
    { src: "/assets/resort2/22.webp", alt: "resort9" },
    { src: "/assets/resort2/23.webp", alt: "resort10" },
    { src: "/assets/resort2/24.webp", alt: "resort11" },
    { src: "/assets/resort2/25.webp", alt: "resort12" },
    { src: "/assets/resort2/26.webp", alt: "resort13" },
    { src: "/assets/resort2/27.webp", alt: "resort14" },
    { src: "/assets/resort2/28.webp", alt: "resort15" },
    { src: "/assets/resort2/29.webp", alt: "resort16" },
    { src: "/assets/resort2/30.webp", alt: "resort17" },
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
