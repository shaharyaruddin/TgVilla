import React from "react";
import ResortImageMarqee from "./ResortImageMarqee";

const ResortFiveSection = () => {
  return (
    <div className="space-y-3 px-20 max-xl:px-10 max-md:px-5 text-[#514941] mt-10">
      <h3 className="text-xl max-md:text-base">A Glimpse into Paradise</h3>
      <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[7vw]">
        {" "}
        Visual Journey Through Our 5-Star TG Luxury Resort
      </h2>
      <p className="text-xl max-md:text-base">
        Step inside a world of private luxury and wellness at TG Luxury Villas,
        where high-end interiors, stunning outdoor spaces, and private
        facilities create an unforgettable experience. Nestled in Limassol's
        most prestigious area, our exclusive villas offer both tranquil
        relaxation and easy access to Cyprus's finest beaches, restaurants and
        nightlife.
      </p>
      <div className="w-full flex justify-center">
        <button className="text-[#26180F] w-fit mt-5 capitalize border-2 px-4 py-2 rounded-full font-medium border-[#26180F]">
          see more
        </button>
      </div>
      <div className="flex flex-col gap-3 my-10">
        <ResortImageMarqee />
        <ResortImageMarqee direction={"right"} />
      </div>
    </div>
  );
};

export default ResortFiveSection;
