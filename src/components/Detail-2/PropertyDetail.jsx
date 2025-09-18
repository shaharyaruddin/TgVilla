import React from "react";

export default function PropertyDetail() {
  const propertyDetails = [
    {
      title: "Property Location",
      value: "170 m²",
      bg: "bg-[#E5E7EB]",
      image: "/assets/detail-2/property1.jpg",
    },
    {
      title: "Optional Services",
      value: "Breakfast, Waiter, Private Chef",
      bg: "bg-gray-200",
      image: "/assets/detail-2/property2.jpg",
    },
    {
      title: "Property Size",
      value: "170 m²",
      image: "/assets/detail-2/property3.jpg",
    },
    {
      title: "Bedrooms",
      value: "3",
      image: "/assets/detail-2/property4.jpg",
    },
    {
      title: "Bathrooms",
      value: "2",
      image: "/assets/detail-2/property5.jpg",
    },
    {
      title: "Outdoor Facilities",
      value:
        "Pool, Outdoor Hot Tub, Sauna, BBQ Area, Seating Areas, Outdoor Dining",
      image: "/assets/detail-2/property6.jpg",
    },
  ];

  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-7xl mx-auto px-3 md:px-0">
        <h1 className="text-3xl md:text-4xl font-semibold font-cormorant mb-4">
          Property Details
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
          {propertyDetails.map((item, index) => (
            <div
              key={index}
              className="relative group bg-[#E5E7EB] p-4 h-64 flex flex-col justify-between overflow-hidden rounded-md shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="
    absolute inset-0 w-full h-full object-cover opacity-100 md:opacity-0 md:group-hover:opacity-100 
    transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/50 md:hidden"></div>

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title Center */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <h2 className="text-white lg:text-gray-800 text-lg font-medium group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h2>
              </div>

              {/* Description Bottom */}
              <div className="hidden md:block relative z-10 mt-auto">
                <p className="text-sm text-white lg:text-gray-600 group-hover:opacity-0 transition-opacity duration-500">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
