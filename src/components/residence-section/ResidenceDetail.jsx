import React from "react";

const ResidenceDetail = () => {
  return (
    <div className="">
      {/* Section 1 (Text Left - Image Right) */}
      <div className="flex flex-col-reverse md:flex-row items-center md:items-center p-3   bg-[#E8E4D9] rounded-lg">
        {/* Left: Text */}
        <div className="flex-1 p-5 max-md:p-0 flex flex-col justify-center">
          <h1 className="font-cormorant  text-4xl md:text-5xl font-medium text-brown-900 max-md:mt-3">
            Our Vision
          </h1>
          <p className="mt-4 text-lg text-brown-900 max-w-full md:max-w-[90%] max-md:text-sm max-md:max-w-full">
            To create the first boutique residence in Cyprus offering guests:
            The privacy of a luxury apartment. The comfort of a 5-star wellness
            suite. The freedom of self-contained living with optional à la carte
            services. Whether for a weekend escape, a work-from-abroad stay, or
            a romantic getaway, TG Residence delivers the ultimate balance
            between independence and indulgence.
          </p>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0 max-md:w-full">
          <img
            src="/assets/images/vision.webp"
            alt="TG Residence Interior"
            className="w-full md:w-[90%] h-[25rem] max-2xl:h-[10rem] max-md:h-full object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Section 2 (Image Left - Text Right) */}
      <div className="flex flex-col md:flex-row items-center md:items-center p-3 md:py-10  bg-[#E8E4D9] rounded-lg">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center  md:mt-0 max-md:w-full">
          <img
            src="/assets/images/services.webp"
            alt="TG Residence Interior"
            className="w-full md:w-[90%] h-[25rem] max-2xl:h-[10rem] max-md:h-full object-cover rounded-lg"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 p-5 max-md:p-0 flex flex-col justify-start md:justify-center max-md:mt-3 ">
          <h1 className="text-4xl md:text-5xl font-medium text-brown-900 font-cormorant ">
            Our Services
          </h1>
          <p className="mt-4 text-lg text-brown-900 max-w-[90%] max-md:text-sm max-md:max-w-full">
            Each apartment is being designed with: Private Finnish or infrared
            sauna Rainfall experience shower with aromatherapy Fully equipped
            kitchen & smart home system Balcony with partial or full sea views
            Optional access to TG Private Wellness Spa & Lounge Concierge
            support, cleaning on demand, and airport pickup Premium apartments
            may include in-shower steam therapy, designer furnishings, and
            elevated outdoor spaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResidenceDetail;
