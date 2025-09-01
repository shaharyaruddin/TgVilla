"use client";

import React from "react";

const ResortBookingVillaTwo = () => {
  const images = [
    {
      src: "/assets/images/bedroomVilla/bedroom29.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom32.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom33.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom34.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom4.webp",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom35.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom10.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom12.webp",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom14.jpg",
      alt: "2 Bedroom Villa",
    },
    {
      src: "/assets/images/bedroomVilla/bedroom28.webp",
      alt: "2 Bedroom Villa",
    },
  ];

  return (
    <div className="w-full min-h-screen px-20 max-2xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-10">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        2 Bedroom Villa
      </h2>
      <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 gap-2 mt-10 max-md:mt-5 max-md:grid-cols-2 ">
        {images.map((img, index) => (
          <div
            key={index}
            className="h-[20rem] max-[1700px]:h-[17rem] max-[1120px]:h-[15rem] max-[800px]:h-[13rem] max-[430px]:h-[10rem]"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResortBookingVillaTwo;
