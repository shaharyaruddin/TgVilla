"use client";

import React from "react";

const ResortBookingVillaTwo = () => {
  const images = [
    { src: "/assets/images/bedroomVilla/bedroom1.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom9.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom10.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom11.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom12.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom14.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom13.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom15.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom16.jpg", alt: "2 Bedroom Villa" },
      { src: "/assets/images/bedroomVilla/bedroom17.jpg", alt: "2 Bedroom Villa" },


  ];

  return (
    <div className="w-full min-h-screen px-20 max-xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-10">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        2 Bedroom Villa
      </h2>
      <div className="grid grid-cols-5 gap-2 mt-10 max-md:mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((img, index) => (
          <div key={index} className="max-h-[20rem] max-md:max-h-[15rem] max-sm:max-h-[12rem]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-72 h-52  object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResortBookingVillaTwo;