"use client";
import React, { useState } from "react";

const BookingCard = ({ villa }) => {
  const [checkedServices, setCheckedServices] = useState({});

  const handleCheckboxChange = (serviceName) => {
    setCheckedServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };

  return (
    <div className="relative   my-10 max-xl:my-3  w-full min-h-[35rem] max-2xl:min-h-[30rem] max-xl:min-h-[28rem] max-md:min-h-[20rem] grid grid-cols-2 max-md:grid-cols-1 text-white">
      {/* Left - Image */}
      <div className="w-full h-full  ">
        <img
          src={villa.image}
          className="w-full h-full object-cover max-md:rounded-tl-xl max-md:rounded-tr-xl"
          alt={villa.name}
        />
      </div>
      {/* Right - Details */}
      <div className="flex max-md:rounded-bl-xl max-md:rounded-br-xl flex-col max-md:sticky space-y-5 max-md:space-y-3 justify-center p-5 bg-[#F4F4EA] text-black/80 absolute left-1/2 -translate-x-[10%] top-1/2 -translate-y-[40%] min-w-[45vw] max-2xl:min-w-[54vw] max-md:min-w-full max-md:-translate-y-0 max-md:-translate-x-0">
        {/* Top */}
        <div className="w-full font-cormorant pb-3 max-xl:pb-2 flex flex-col border-b-2 border-black/40 text-2xl">
          <h3 className="text-lg max-xl:text-base">{villa.type}</h3>
          <h2 className="font-[700] max-xl:text-lg">{villa.name}</h2>
        </div>
        {/* Center */}
        <div className="flex justify-between items-center border-b-2 border-black/40 pb-6 max-xl:pb-3 max-md:flex-col max-md:items-start">
          <h3 className="text-base max-xl:text-sm">{villa.bedrooms}</h3>
          <div className="flex max-md:justify-between max-md:w-full">
            <div className="flex flex-col items-end font-medium max-md:items-start">
              <h3 className="font-cormorant text-xl max-xl:text-sm max-md:text-base">
                ({villa.nights} nights | {villa.guests} guests)
              </h3>
              <h3 className="font-bold text-2xl max-xl:text-xl">{villa.price}</h3>
            </div>
            <div className="flex items-center ml-4">
              <a
                href="#"
                className="border border-black/40 px-4 py-2 items-center rounded-lg max-xl:text-sm"
              >
                RESERVE
              </a>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-10 max-xl:py-0">
          <div className="flex space-x-5">
            <a
              href="#"
              className="font-bold text-sm border-b-2 border-white/40"
            >
              VIEW ROOM DETAILS
            </a>
            <a
              href="#"
              className="font-bold text-sm border-b-2 border-white/40"
            >
              VIEW GALLERY
            </a>
          </div>
          {/* Services */}
          <div className="py-2 max-xl:py-1">
            <ul>
              {villa.services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-center max-xl:text-sm space-x-2 cursor-pointer select-none"
                >
                  <label className="flex items-center space-x-2 cursor-pointer w-full">
                    <input
                      type="checkbox"
                      className="size-4 max-xl:size-3 accent-white border-2 border-white rounded cursor-pointer"
                      checked={checkedServices[service.name] || false}
                      onChange={() => handleCheckboxChange(service.name)}
                    />
                    <span>
                      {service.name}{" "}
                      <span className="font-cormorant text-xl">
                        ({service.price})
                      </span>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
