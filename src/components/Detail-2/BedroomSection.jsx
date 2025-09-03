"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const BedroomSection = () => {
  const [expanded, setExpanded] = useState("");
  const [activeImage, setActiveImage] = useState(
    "/assets/images/bedroomvilla-3/bedroom25.jpg"
  );

  const rooms = [
    {
      name: "Bedroom 1",
      image: "/assets/images/bedroomvilla-3/bedroom25.jpg",
      details: [
        "King Size Bed",
        "Sofa Bed",
        "Air Conditioner",
        "Bed linens",
        "Clothing storage",
        "Private Bathroom",
      ],
    },
    {
      name: "Bedroom 2",
      image: "/assets/detail-2/property4.jpg",
      details: ["Queen Size Bed", "Bed linens", "Shared Bathroom"],
    },
    {
      name: "Bedroom 3",
      image: "/assets/images/bedroomvilla-3/bedroom3.jpg",
      details: ["Twin Beds", "Air Conditioner", "Wardrobe"],
    },
    {
      name: "Sofa Bed",
      image: "/assets/images/bedroomvilla-3/bedroom6.webp",
      details: ["Convertible Sofa", "Bed linens"],
    },
  ];

  const toggleExpand = (room) => {
    if (expanded === room.name) {
      setExpanded(null); // close if already open
    } else {
      setExpanded(room.name); // open clicked tab
      setActiveImage(room.image); // change image
    }
  };

  return (
    <div className="bg-[#F4F4EA] pt-28">
      <div className="flex flex-col lg:flex-row justify-center p-5 max-w-7xl mx-auto gap-6">
        {/* Left - Sticky Image */}
        <div className="lg:w-[35%] lg:pr-5 lg:sticky lg:top-5">
          <img
            src={activeImage}
            alt="Bedroom"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Right - Tabs */}
        <div className="lg:w-1/2 lg:pl-5 w-full">
          {rooms.map((room) => (
            <div
              key={room.name}
              className="mb-2.5 border border-gray-300 rounded overflow-hidden"
            >
              <div
                className="flex justify-between items-center p-3 bg-[#F4F4EA] cursor-pointer"
                onClick={() => toggleExpand(room)}
              >
                <span className="flex items-center">
                  <span className="mr-2.5">
                    <img
                      src="/assets/detail-2/bedroom.avif"
                      alt="bedroom"
                      className="w-12 h-12 md:w-14 md:h-14 object-cover rounded"
                    />
                  </span>
                  <span className="text-sm md:text-base">{room.name}</span>
                </span>
                <span>
                  {expanded === room.name ? (
                    <IoCloseOutline className="text-lg" />
                  ) : (
                    <AiOutlinePlus className="text-lg" />
                  )}
                </span>
              </div>

              {/* Details */}
              {expanded === room.name && (
                <div className="p-3 bg-[#F4F4EA]">
                  {room.details.map((detail, index) => (
                    <div key={index} className="py-1 text-sm">
                      {detail}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BedroomSection;
