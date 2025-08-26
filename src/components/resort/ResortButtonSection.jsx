import React from "react";
import Marquee from "react-fast-marquee";

const ResortButtonSection = () => {
  const images = [
    { src: "/assets/images/resort/section2/image-5.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-6.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-7.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-8.jpeg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-9.jpeg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-10.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-11.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-12.jpg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-13.jpeg", alt: "resort" },
    { src: "/assets/images/resort/section2/image-15.jpg", alt: "resort" },
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
