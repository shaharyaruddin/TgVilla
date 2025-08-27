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
  ];

  return (
    <div className="w-full min-h-screen px-20 max-2xl:px-10 max-md:px-5 flex flex-col bg-[#EBE7DC] space-y-5 py-10">
      <h2 className="text-6xl font-[600] text-[#514941] font-cormorant max-md:text-4xl ">
        3 Bedroom Villa
      </h2>
    <div className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 gap-2 mt-10 max-md:mt-5 max-md:grid-cols-2 ">
        {images.map((img, index) => (
          <div key={index} className="h-[20rem] max-[1700px]:h-[17rem] max-[1120px]:h-[15rem] max-[800px]:h-[13rem] max-[430px]:h-[10rem]">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover"
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