import React from "react";
import Marquee from "react-fast-marquee";

const ResortButtonSection = () => {
  const images = [
    { src: "/assets/resort2/10.jpg", alt: "resort" },
    { src: "/assets/resort2/15.jpg", alt: "resort" },
    { src: "/assets/resort2/16.jpg", alt: "resort" },
    { src: "/assets/resort2/17.jpg", alt: "resort" },
    { src: "/assets/resort2/18.jpg", alt: "resort" },
    { src: "/assets/resort2/20.jpg", alt: "resort" },
    { src: "/assets/resort2/19.jpg", alt: "resort" },
    { src: "/assets/resort2/21.jpg", alt: "resort" },
    { src: "/assets/resort2/22.jpg", alt: "resort" },
    { src: "/assets/resort2/23.jpg", alt: "resort" },
    { src: "/assets/resort2/24.jpg", alt: "resort" },
    { src: "/assets/resort2/25.jpg", alt: "resort" },
    { src: "/assets/resort2/26.jpg", alt: "resort" },
    { src: "/assets/resort2/27.jpg", alt: "resort" },
    { src: "/assets/resort2/28.jpg", alt: "resort" },
    { src: "/assets/resort2/29.jpg", alt: "resort" },
    { src: "/assets/resort2/30.jpg", alt: "resort" },


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
                  className="w-[25rem] h-[20rem] max-md:w-[20rem] max-md:h-[15rem] object-cover"
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
