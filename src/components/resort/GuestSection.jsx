import React from "react";

const GuestSection = () => {
  return (
    <div className="bg-[#EBE7DC]">
      <div className="max-w-full md:max-w-[90%] px-3 md:px-0  mx-auto pb-6">
        <div className="text-[#514941] pt-10 max-md:pt-5">
          <h3 className="text-xl max-md:text-sm">What Our Guests Say</h3>
          <h2 className="text-[3.5vw] font-cormorant font-bold max-md:text-[7vw]">
            Hear From Our Satisfied Guests
          </h2>
          <p className="text-xl max-md:text-sm">
            Our guests rave about the exceptional service, luxurious amenities,
            and breathtaking views that make their stay unforgettable. Read
            their heartfelt testimonials to see why our villa is the perfect
            choice for your next getaway.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestSection;
