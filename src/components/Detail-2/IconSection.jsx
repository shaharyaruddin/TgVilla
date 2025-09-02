import Image from "next/image";
import React from "react";

const IconSection = () => {
  const icons = [
    {
      label: "Sea view",
      icon: "/assets/detail-2/seaview.svg",
    },
    {
      label: "Swimming pool",
      icon: "/assets/detail-2/swimming.svg",
    },
    {
      label: "Sauna",
      icon: "/assets/detail-2/sauna.svg",
    },
    {
      label: "Spa & Wellness",
      icon: "/assets/detail-2/spa.svg",
    },
    {
      label: "170 m² Size",
      icon: "/assets/detail-2/size.svg",
    },
    {
      label: "Entire place is yours",
      icon: "/assets/detail-2/home.svg",
    },
    {
      label: "Outdoor hot tub",
      icon: "/assets/detail-2/hottub.avif",
    },
    {
      label: "Breakfast",
      icon: "/assets/detail-2/breakfast.avif",
    },
    {
      label: "Free parking on premises",
      icon: "/assets/detail-2/parking.avif",
    },
    {
      label: "Kitchen",
      icon: "/assets/detail-2/kitchen.avif",
    },
  ];

  return (
    <div className="bg-[#F4F4EA] pt-4">
      <div className="max-width mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 px-4">
        {icons.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Image
              src={item.icon}
              alt={item.icon}
              width={300}
              height={400}
              className="w-12 h-12"
            />
            <span className="text-sm text-gray-600 mt-2">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconSection;
