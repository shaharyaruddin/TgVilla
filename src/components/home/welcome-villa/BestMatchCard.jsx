'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';

const BestMatchCard = ({ villa }) => {
  const [checkedServices, setCheckedServices] = useState({});

  const handleCheckboxChange = (serviceName) => {
    setCheckedServices((prev) => ({
      ...prev,
      [serviceName]: !prev[serviceName],
    }));
  };


  
  // Default values to prevent undefined errors
  const {
    id = 1, // Default id for image logic
    type = 'Standard',
    name = 'Unknown Villa',
    bedrooms = 'N/A',
    price = 'N/A',
    nights,
    guests,
    services = [],
  } = villa || {};
  return (
    <div className="relative my-3 max-md:my-0 w-full min-h-[10rem] grid grid-cols-1 text-white">
      {/* Left - Image */}
      <div className="w-full h-full relative">
        {id === 1 ? (
          <img
            src="/images/villa/card.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        ) : (
          <img
            src="/images/villa2/card.jpg"
            alt="villa"
            className="object-cover rounded-tl-xl rounded-tr-xl"
          />
        )}
      </div>
      {/* Right - Details */}
      <div className="flex bg-white rounded-bl-xl rounded-br-xl flex-col sticky space-y-3 justify-center p-5 text-black/80 min-w-full">
        {/* Top */}
        <div className="w-full font-cormorant pb-2 flex flex-col border-b-2 border-black/40 text-2xl">
          <h3 className="text-base">{type}</h3>
          <h2 className="font-[700] text-lg">{name}</h2>
        </div>
        {/* Center */}
        <div className="flex justify-between border-b-2 border-black/40 pb-3 flex-col items-start">
          <h3 className="text-sm">{bedrooms}</h3>
          <div className="flex justify-between w-full">
            <div className="flex flex-col font-medium items-start">
              <h3 className="font-cormorant text-base">
                ({nights} {nights === 1 ? 'night' : 'nights'} | {guests}{' '}
                {guests === 1 ? 'guest' : 'guests'})
              </h3>
              <h3 className="font-bold text-xl">{price}</h3>
            </div>
            <div className="flex items-center ml-4">
              <Link
                href="/villa-details"
                className="border border-black/40 px-4 py-2 items-center rounded-lg text-sm"
              >
                RESERVE
              </Link>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="py-0">
          <div className="flex space-x-5">
            <a href="#" className="font-bold text-sm border-b-2 border-black">
              VIEW ROOM DETAILS
            </a>
            <a href="#" className="font-bold text-sm border-b-2 border-black">
              VIEW GALLERY
            </a>
          </div>
          {/* Services */}
          {services.length > 0 ? (
            <div className="py-1">
              <ul>
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center text-sm space-x-2 cursor-pointer select-none"
                  >
                    <label className="flex items-center space-x-2 cursor-pointer w-full">
                      <input
                        type="checkbox"
                        className="size-3 accent-white border-2 border-white rounded cursor-pointer"
                        checked={checkedServices[service.name] || false}
                        onChange={() => handleCheckboxChange(service.name)}
                      />
                      <span>
                        {service.name || 'N/A'}{' '}
                        <span className="font-cormorant text-xl">
                          ({service.price || 'N/A'})
                        </span>
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-black/60">No services available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestMatchCard;