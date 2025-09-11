"use client";
import React from "react";
import { useBookOption } from "@/contexts/book-option-context";
import { useSearch } from "@/contexts/search-context";
import BestMatchCard from "./welcome-villa/BestMatchCard";
import { Loader2 } from "lucide-react";

const BestMatch = () => {
  const { allBookingOptions } = useBookOption();
  const { searchOptions, isLoading } = useSearch();

  return (
    <div className="bg-[#E8E4D9] flex flex-col">
      <div className="flex justify-center items-center">
        <h2 className="font-cormorant text-[4vmax] font-[600]">
          {isLoading
            ? "Looking for Best Matches..."
            : allBookingOptions?.length > 0
              ? "Matches"
              : ""}
        </h2>
      </div>
      {isLoading ? (
        <div className="text-center py-10">
          <Loader2 className="animate-spin mx-auto text-[#D4A017] h-10 w-10" />
          <p className="text-lg text-black/60 mt-2">Searching for available villas...</p>
        </div>
      ) : allBookingOptions?.length > 0 ? (
        <div
          className={`grid grid-cols-${
            allBookingOptions?.length === 1 ? "1" : "2"
          } max-md:grid-cols-1 max-2xl:px-5 gap-4 ${
            allBookingOptions?.length === 1 ? "max-w-xl" : "max-w-7xl"
          } mx-auto`}
        >
          {allBookingOptions.map((item, i) => {
            // Construct villa object with defaults and id
            const villa = {
              id: item.villa?._id || i + 1,
              type: item.villa?.type || "Standard",
              name: item.villa?.name || "Unknown Villa",
              bedrooms: item.villa?.bedrooms || "N/A",
              price:
                item.bookingOptions?.find((option) =>
                  option.rateType.includes("Non-Refundable")
                )?.price || item.standardPrice || "N/A",
              nights: item.bookingOptions[0].totalNights,
              guests: item.bookingOptions[0].guests,
              services: item.villa?.services || [],
              startDate: searchOptions.startDate,
              endDate: searchOptions.endDate,
            };

            return (
              <BestMatchCard
                key={villa.id || i}
                villa={villa}
                option={item.bookingOptions.find((option) =>
                  option.rateType.includes("Non-Refundable")
                )}
                standardPrice={item.standardPrice}
              />
            );
          })}
        </div>
      ) : (
        allBookingOptions !== null && (
          <div className="text-center py-10">
            <h3 className="font-cormorant text-3xl text-black/80">
              No available villas
            </h3>
            <p className="text-lg text-black/60">
              Please try again with different dates or guests
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default BestMatch;