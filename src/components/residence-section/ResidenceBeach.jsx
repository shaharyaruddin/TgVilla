import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const ResidenceBeach = () => {
  const images = [
    { src: "/assets/resort/2.jpg", alt: "resort 1" },
    { src: "/assets/resort/32.jpg", alt: "resort 2" },
    { src: "/assets/resort/28.jpg", alt: "resort 3" },
    { src: "/assets/resort/27.jpg", alt: "resort 4" },
    { src: "/assets/images/beach/14.jpeg", alt: "resort 6" },
    { src: "/assets/images/beach/15.jpg", alt: "resort 7" },
    { src: "/assets/images/beach/16.jpg", alt: "resort 8" },
    { src: "/assets/images/beach/17.jpeg", alt: "resort 9" },
  ];

  return (
    <>
      <div className="w-full bg-[#E8E4D9] flex flex-col items-center justify-center px-4">
        {/* Title */}
        <div className="text-center md:mt-10">
          <h1 className="font-cormorant  text-3xl md:text-5xl font-medium text-black mt-20">
            TG Residence by the Beach
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl pt-4 pb-10 mx-auto">
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
                  className="w-72 h-48 object-cover"
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Bottom Text with Paragraph */}
        <div className="text-center mt-10 md:mt-24 max-w-4xl mx-auto px-4">
          <h2 className="font-cormorant  text-4xl md:text-5xl font-medium text-black">
            Coming Soon to Limassol
          </h2>
          <h3 className="text-lg md:text-xl text-gray-800 mt-3">
            A New Chapter in Seaside Luxury Living
          </h3>
          <p className="text-sm md:text-base  text-gray-700 mt-4 leading-relaxed">
            TG Luxury Stay is proud to introduce its next evolution in
            hospitality: TG Residence by the Beach – an exclusive new beachfront
            apartment concept in the heart of Germasogeia Tourist Area,
            Limassol.
          </p>
          <p className="text-sm md:text-base  text-gray-700 mt-4 leading-relaxed">
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
