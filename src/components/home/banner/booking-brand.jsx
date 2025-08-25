"use client";
import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";

export const BookingBrandBig = () => {
  return (
    <div className="relative flex flex-col items-start rounded-md overflow-hidden lg:w-64 w-52 bg-transparent p-4">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="/assets/icon/star.png"
            alt="star"
            width="30"
            height="30"
          />
        ))}
      </div>
      <p className="text-white text-sm mt-2 mb-1">Awarded to</p>
      <p className="text-white text-md font-medium">
        NEW Luxury 2-Bedroom House-Heated Salty Swimming Pool, Sauna and Garden
      </p>
      <div className="flex gap-2 justify-between w-full items-end">
        <div className="flex flex-col">
          <p className="text-[#003b95] font-bold">Booking.com</p>
          <p className="text-white text-xs">Traveller Review Awards 2025</p>
        </div>
        <div className="flex flex-col justify-center items-center w-12 h-12 bg-[#003b95] rounded-md text-white">
          <p className="text-xl font-bold">9,9</p>
          <p className="text-[8px]">Out of 10</p>
        </div>
      </div>
      <BorderBeam duration={8} size={100} />
    </div>
  );
};

export const BookingBrandSmall = () => {
  return (
    <div className="relative flex flex-col gap-2 rounded-md overflow-hidden w-40 h-32 bg-transparent p-4">
      <div className="flex justify-center gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <img
            key={index}
            src="assets/icon/star.png"
            alt="star"
            width="15"
            height="15"
          />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          <p className="text-white text-xs">
            Awarded to <b>TG Luxury</b>
          </p>
          <p className="text-[#003b95] text-xs font-bold">Booking.com</p>
        </div>
        <div className="flex flex-col justify-center items-center w-10 h-10 bg-[#003b95] rounded-md text-white">
          <p className="text-base font-bold">9,9</p>
          <p className="text-[6px]">Out of 10</p>
        </div>
      </div>
      <BorderBeam duration={8} size={100} />
    </div>
  );
};

export const BookingBrand = () => {
  return (
    <>
      <div className="lg:hidden">
        <BookingBrandSmall />
      </div>
      <div className="hidden lg:block">
        <BookingBrandBig />
      </div>
    </>
  );
};
