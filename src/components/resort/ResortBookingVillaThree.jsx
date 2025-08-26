"use client";

import React from "react";

const ResortBookingVillaThree = () => {
  const images = [
    { src: "/assets/images/bedroomvilla-3/bedroom15.jpg", alt: "3 Bedroom villa" },
       { src: "/assets/images/bedroomvilla-3/bedroom16.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom17.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom18.jpg", alt: "3 Bedroom villa" },
   
    { src: "/assets/images/bedroomvilla-3/bedroom5.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom6.jpg", alt: "3 Bedroom villa" },
    

    { src: "/assets/images/bedroomvilla-3/bedroom19.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom20.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom21.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom22.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom23.jpg", alt: "3 Bedroom villa" },
    { src: "/assets/images/bedroomvilla-3/bedroom24.jpg", alt: "3 Bedroom villa" },

  ];

  return (
    <div className="w-full min-h-screen px-20 max-xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-0">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        3 Bedroom Villa
      </h2>
      <div className="grid grid-cols-6 gap-1 mt-10 max-md:mt-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {images.map((img, index) => (
          <div key={index} className="max-h-[20rem] max-md:max-h-[15rem] max-sm:max-h-[12rem]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-52 h-52  object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-[#514941] mt-10">
         <h3 className="text-xl max-md:text-base">What Our Guests Say</h3>
      <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[7vw]">
        {" "}
        Hear From Our Satisfied Guests
      </h2>
      <p className="text-xl max-md:text-base">
        Our guests rave about the exceptional service, luxurious amenities, and breathtaking views that make their stay unforgettable. Read their heartfelt testimonials to see why our villa is the perfect choice for your next getaway.
      </p>
      </div>
    </div>
  );
};

export default ResortBookingVillaThree;