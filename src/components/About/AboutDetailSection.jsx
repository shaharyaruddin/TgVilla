import Link from "next/link";
import React from "react";

const AboutDetailSection = () => {
  const details = [
    "TG Spa Experience – Sauna, steam bath & cold plunge for total rejuvenation.",
    "Heated Saltwater Pools – Gentle on skin, eco-efficient heating.",
    "MicroSilk® Hydrotherapy Jacuzzis – silky oxygen microbubbles.",
    "Daily Breakfast – Locally sourced and freshly prepared.",
    "Daily Cleaning (Indoor & Outdoor) – Terraces, poolside, and living areas always pristine.",
    "24/7 Guest Support – Concierge-style assistance anytime.",
    "Housemaid On Demand – Extra help whenever you need it.",
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 md:pr-8">
          <h2 className="text-3xl md:text-4xl max-w-auto text-[#6A3A1C] font-serif leading-tight mb-4">
            TG Luxury Stay & Spa <br /> Your private wellness sanctuary on
            the Limassol coast.
          </h2>
          <p className="text-[#6A3A1C] text-sm leading-relaxed mb-4">
            At TG Luxury Stay we turn every stay into a private spa
            retreat—heated saltwater pools, MicroSilk® hydrotherapy jacuzzis and
            a glass-fronted sauna, cared for with hotel-level service. Wake to
            fresh breakfast, enjoy daily cleaning (indoors & outdoors), and
            relax knowing 24/7 support and a housemaid on demand are always
            there when you need them.
          </p>
        </div>

        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center">
          {details.map((detail, index) => (
            <p
              key={index}
              className={`text-base py-3 border border-t text-[#6A3A1C] border-l-0 border-b-0 border-r-0 ${
                index !== details.length - 1 ? "mb-2" : ""
              }`}
            >
              {detail}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-5 w-full flex">
        <Link href="/bookings">
          <button className="bg-app-yellow transform transition-all duration-300 hover:scale-105 w-[10rem] rounded-full px-4 py-2 font-medium hover:bg-app-yellow/90 text-black">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutDetailSection;
