"use client";

import VillaDetailCard from "./VillaDetailCard";
import { useBookOption } from "@/contexts/book-option-context";
import { useEffect } from "react";

export default function PricingSection({ villa }) {
  const { bookingOptions } = useBookOption();

  useEffect(() => {
    console.log("PricingSection bookingOptions:", bookingOptions);
  }, [bookingOptions]);

  return (
    <div className="max-w-full lg:max-w-[90%] mx-auto p-0 lg:p-6">
      <div className="grid md:grid-cols-2 gap-8 md:px-0 px-3">
        {bookingOptions?.length > 0 ? (
          bookingOptions.map((option) => (
            <div
              key={option.rateType}
              className={`flex-1 w-full border-2 rounded-xl ${
                option.rateType === "non-refundable" ? "border-cyan-500" : "border-transparent"
              }`}
            >
              <VillaDetailCard option={option} villa={villa} />
            </div>
          ))
        ) : (
          <h1 className="text-center italic text-cyan-500 text-2xl">
            No booking options found. Please try again with different dates or guests
          </h1>
        )}
      </div>
    </div>
  );
}