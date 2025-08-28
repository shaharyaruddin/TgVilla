import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ResidenceBeach = () => {
  const images = [
    { src: "/assets/resort/2.webp", alt: "resort 1" },
    { src: "/assets/resort/32.webp", alt: "resort 2" },
    { src: "/assets/resort/28.webp", alt: "resort 3" },
    { src: "/assets/resort/27.webp", alt: "resort 4" },
    { src: "/assets/images/beach/14.webp", alt: "resort 6" },
    { src: "/assets/images/beach/15.webp", alt: "resort 7" },
    { src: "/assets/images/beach/16.webp", alt: "resort 8" },
    { src: "/assets/images/beach/17.webp", alt: "resort 9" },
  ];

  return (
    <>
      <div className="w-full bg-[#E8E4D9] flex flex-col items-center justify-center px-4 ">
        {/* Title */}
        <div className="text-center mt-5 max-md:mt-4">
          <h1 className="font-cormorant  text-4xl md:text-5xl font-medium text-black mt-5">
            TG Residence by the Beach
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl pt-4 pb-15 max-md:pb-5 mx-auto">
            Your Private 5-Star Seaview Residence – Coming Soon!
          </p>
        </div>

        {/* Scrolling Images */}
        <Marquee speed={50} gradient={false}>
          <div className="flex">
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-72 h-48 max-md:w-52 object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Bottom Text with Paragraph */}
        <div className="text-center my-5 md:my-15 max-w-4xl max-md:max-w-full md:mx-auto px-4">
          <h2 className="font-cormorant  text-4xl md:text-5xl max-md:text-nowrap font-medium text-black">
            Coming Soon to Limassol
          </h2>
          <h3 className="text-lg md:text-xl text-gray-800 mt-3">
            A New Chapter in Seaside Luxury Living
          </h3>
          <p className="text-sm md:text-base  text-gray-700 mt-4 max-md:mt-2 leading-relaxed">
            TG Luxury Stay is proud to introduce its next evolution in
            hospitality: TG Residence by the Beach – an exclusive new beachfront
            apartment concept in the heart of Germasogeia Tourist Area,
            Limassol.
          </p>
          <p className="text-sm md:text-base  text-gray-700 mt-4 max-md:mt-2 leading-relaxed">
            Just steps away from the sea, this collection of luxury wellness
            apartments combines private spa features, panoramic sea-view living,
            and hotel-style services — all crafted for modern travelers seeking
            privacy, comfort, and elegance.
          </p>
        </div>
      </div>

      <div className=" ">
        <div className="relative video-container">
          <video
            loop
            muted
            playsInline
            // {...(isMobile ? { autoPlay: true, muted: true } : { autoPlay: true })}
            autoPlay
            className="w-full h-[50vh] md:h-[70vh] object-cover"
          >
            <source
              src="/assets/videos/feelings-balance.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </>
  );
};

export default ResidenceBeach;
