"use client";
import React from "react";

const ResortFourthSection = () => {
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

  // Prevent scroll event from bubbling to parent/page
  const handleWheel = (e) => {
    e.stopPropagation();
    const container = e.currentTarget;
    const maxScroll = container.scrollHeight - container.clientHeight;
    // Prevent default only if we're not at the scroll boundaries
    if (
      (e.deltaY > 0 && container.scrollTop < maxScroll) ||
      (e.deltaY < 0 && container.scrollTop > 0)
    ) {
      e.preventDefault();
    }
  };

  return (
    <div className="grid grid-cols-3 max-md:grid-cols-1 min-h-screen px-20 max-2xl:px-10 max-md:px-5 mt-20 max-md:mt-7 bg-[#FFFFFF]">
      {/* left */}
      <div className="text-[#514941] space-y-5 border-r-2 pr-10 max-lg:pr-5 border-[#DCDAD0] max-md:border-r-transparent max-md:flex max-md:pr-0 max-md:items-center max-md:justify-center max-md:space-y-0 max-sm:flex-col">
        <img
          src="/assets/images/resort/section2/image-3.webp"
          alt="image-3"
          className="max-md:max-w-[15rem] object-cover max-sm:max-w-full"
        />
        <div className="max-md:ml-3 max-sm:ml-0 max-sm:mt-3">
          <h3 className="text-xl font-[600] max-lg:text-lg max-md:text-base max-sm:text-lg">
            Book your stay today and experience the best private villa rental in
            Cyprus.
          </h3>
          <p className="text-lg max-lg:text-base max-md:text-sm max-md:mt-2">
            Indulge in a fully private, high-end villa experience where every
            detail is designed for your comfort and relaxation. Whether you're
            seeking a romantic retreat, a wellness getaway, or a luxurious
            family escape, TG Luxury Villas offers a refined setting for
            unforgettable moments.
          </p>
        </div>
      </div>
      {/* right */}
      <div className="col-span-2 pl-10 max-lg:pl-5 max-md:pl-0 max-md:col-span-1 max-md:mt-10">
        <h2 className="text-5xl max-md:text-4xl font-bold font-cormorant mb-5 max-md:mb-2 text-[#514941]">
          Villa Details at a Glance
        </h2>
        <div
          className="space-y-4 h-[80vh] w-full overflow-y-scroll scroll-smooth mt-10 max-md:mt-5"
          onWheel={handleWheel}
        >
          {villaDetails.map((item, index) => (
            <div className="grid grid-cols-[1fr_2fr] gap-5 text-lg max-[1520px]:text-base max-2xl:text-sm border-b-2 text-[#514941] border-[#DCDAD0] pb-3 font-outfit max-xl:grid-cols-1">
              <span>{item.title}</span>
              <span>{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResortFourthSection;
