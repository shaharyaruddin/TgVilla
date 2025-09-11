"use client";
import React from "react";
import BookingBetweenSection from "./BookingBetweenSection";
import BookingCard from "./BookingCard";
import DreamVillaSection from "./DreamVillaSection";
import BookingReview from "./BookingReview";
import { useBookOption } from "@/contexts/book-option-context";
import { useSearch } from "@/contexts/search-context";
import { Loader2 } from "lucide-react";

const BookingStepTwoSection = () => {
  const { allBookingOptions } = useBookOption();
  const { searchOptions, isLoading } = useSearch();

  return (
    <div className="relative w-full min-h-[15rem] flex justify-center items-center flex-col overflow-hidden pt-5">
      <div className="absolute inset-0 bg-[url('/assets/booking/texture.webp')] bg-center bg-repeat opacity-10"></div>
      <BookingBetweenSection />
  <h2 className="font-cormorant text-[4vmax] font-[600]">
          {isLoading
            ? "Looking for Best Matches..."
            : allBookingOptions?.length > 0
              ? (allBookingOptions?.length == 1 ? 'Match' :'Matches' )
              : ""}
        </h2>
      {isLoading ? (
        <div className="text-center py-10">
          <Loader2 className="animate-spin mx-auto text-[#D4A017] h-10 w-10" />
          <p className="text-lg text-black/60 mt-2">Searching for available villas...</p>
        </div>
      ) : allBookingOptions?.length > 0 ? (
        <div className="w-full relative my-10 flex flex-col items-center max-md:px-4">
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
                )?.price ||
                item.standardPrice ||
                "N/A",
              nights: item.bookingOptions[0].totalNights,
              guests: item.bookingOptions[0].guests,
              services: item.villa?.services || [],
              startDate: searchOptions.startDate,
              endDate: searchOptions.endDate,
            };

            return (
              <BookingCard
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

      <DreamVillaSection />
      <BookingReview />
    </div>
  );
};

export default BookingStepTwoSection;