"use client";

import React, { useState } from "react";

const ResortSecondSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
  ];

  return (
    <div className="">
      <div className="min-h-screen flex max-md:flex-col-reverse w-full bg-[#F4F4EA] p-20 max-2xl:p-10  max-sm:p-5">
        {/* left */}
        <div className="flex flex-col w-1/2 pr-5 max-md:w-full max-md:pr-0">
          {/* content */}
          <div className="w-[80%] font-cormorant mb-10 max-md:mb-5 max-md:text-center max-md:w-full">
            <h3 className="font-bold text-[3.5vw] text-[#26180F] max-md:text-3xl  leading-none">
              Welcome to TG Luxury Villas – Exclusive Private Retreats
            </h3>
          </div>
          {/* image */}
          <div className="w-full">
            <img
              src="/assets/images/resort/section2/image-2.webp"
              className="w-[80%] max-2xl:w-[90%] h-[40rem] max-md:h-[20rem] object-cover max-xl:w-full"
              alt="image 1"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex flex-col justify-between w-1/2 max-md:w-full">
          {/* image */}
          <div className="flex justify-end">
            <div className="w-[80%] max-2xl:w-[90%] max-xl:w-full">
              <img
                src="/assets/images/resort/section2/image2.webp"
                className="object-cover"
                alt="image 2"
              />
            </div>
          </div>
          {/* text */}
          <div className="flex justify-center flex-col my-5 max-sm:mt-3">
            <h2 className="font-medium text-2xl mb-2 max-sm:text-xl">
              Luxury Villas in Limassol – A Private Wellness & Spa Retreat
            </h2>
            <p className="text-lg max-2xl:text-xl max-xl:text-base max-md:text-sm">
              Welcome to TG Luxury Villas, your exclusive escape in Limassol,
              Cyprus. Experience five-star luxury, wellness, and tranquility in
              a private, high-end villa designed for discerning travelers.
              Located just 10 minutes from the beach, our heated saltwater pool,
              luxury outdoor Jacuzzi, and glass-fronted sauna provide the
              ultimate spa-like experience. Whether you're seeking a romantic
              getaway, a family retreat, or a wellness escape, our luxury Cyprus
              villas redefine indulgence. Enjoy boutique hotel-style services,
              including daily cleaning, private yoga sessions, premium bath
              amenities, and smart home technology—all wrapped in an atmosphere
              of exclusivity and comfort.
            </p>
            <button
              onClick={openModal}
              className="text-[#26180F] w-fit max-md:w-full max-md:text-xs max-md:mt-3 mt-5 capitalize border-2 px-3 py-2 rounded-full font-medium border-[#26180F]"
            >
              read more
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-xs bg-opacity-50"
          onClick={closeModal} // 👈 overlay click = close modal
        ></div>

        {/* Modal Box */}
        <div
          onClick={(e) => e.stopPropagation()} // 👈 andar click karne pe close na ho
          className={`relative bg-[#FFFFFF] max-w-[60%] max-lg:max-w-[80%] max-sm:max-w-[90%] max-md:px-5 max-md:py-5 w-full px-10 py-10 rounded-lg shadow-lg transform transition-transform duration-300 ease-out ${
            isModalOpen ? "scale-100" : "scale-0"
          }`}
        >
          <h2 className="text-5xl max-md:text-3xl font-bold font-cormorant mb-5">
            Villa Details at a Glance
          </h2>
          <div className="space-y-4 max-h-[70vh] overflow-y-auto">
            {villaDetails.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b-2 border-[#DCDAD0] pb-3 font-outfit max-xl:flex-col"
              >
                <span>{item.title}</span>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
          <button
            onClick={closeModal}
            className="mt-4 text-[#26180F] w-fit capitalize border-2 px-3 py-2 rounded-full font-medium border-[#26180F]"
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResortSecondSection;
