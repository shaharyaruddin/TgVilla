import React from "react";

const VillaDetails = () => {
  const villaDetails = [
    {
      title: "5-Star Hotel Services & Facilities",
      desc: "Enjoy a seamless blend of high-end hospitality and personalized care.",
    },
    {
      title: "Heated Saltwater Pool",
      desc: "Immerse yourself in crystal-clear waters designed for ultimate relaxation.",
    },
    {
      title: "Luxury Outdoor Jacuzzi",
      desc: "Experience hydrotherapy in an exclusive, serene setting.",
    },
    {
      title: "Outdoor Glass Sauna",
      desc: "Detox with panoramic views of the lush surroundings.",
    },
    {
      title: "Daily Breakfast*",
      desc: "Start your day with a gourmet meal prepared to perfection.",
    },
    {
      title: "Hot Water 24/7",
      desc: "Indulge in uninterrupted luxury and comfort.",
    },
    {
      title: "10-Min Walk to the Beach, Bars & Restaurants",
      desc: "Prime location with easy access to coastal experiences.",
    },
    {
      title: "Luxury Designer Furniture",
      desc: "Elegantly curated interiors for a sophisticated ambiance.",
    },
    {
      title: "6-Day Weekly Cleaning Service",
      desc: "Enjoy a pristine environment throughout your stay.",
    },
    {
      title: "Private Yoga Sessions*",
      desc: "Enhance your wellness with expert-led classes.",
    },
    {
      title: "Outdoor Sound System & Exotic Garden Leisure Area",
      desc: "Immerse yourself in a tranquil atmosphere.",
    },
    {
      title: "Ping Pong Table",
      desc: "Stay active and entertained with recreational options.",
    },
    {
      title: "Electric Scooters & Bicycles*",
      desc: "Explore Limassol with ease and style.",
    },
  ];

  return (
    <div className="bg-[#F4F4EA]">
      <div className="max-w-full md:max-w-[90%] mx-auto px-3 md:px-6 pb-10 md:pb-2">
        <h2 className="md:text-5xl text-4xl font-bold font-cormorant mb-10 text-[#514941]">
          Apartment details at a glance
        </h2>

      <div className="divide-y divide-[#DCDAD0] border-b border-[#DCDAD0]">
  {villaDetails.map((item, index) => (
    <div
      key={index}
      className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-8 py-4 text-sm text-[#514941] font-outfit"
    >
      <div className="font-semibold">{item.title}</div>
      <div className="font-medium">{item.desc}</div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default VillaDetails;
