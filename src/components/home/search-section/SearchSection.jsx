"use client";
import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { X } from "lucide-react";

// Custom CSS to hide static ranges on mobile
const styles = `
  @media (max-width: 639px) {
    .rdrStaticRanges {
      display: none !important;
    }
  }
`;

const SearchSection = () => {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ]);
  const [guests, setGuests] = useState({ adults: 2, children: 0, infants: 1 });
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size on client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 640);
      const handleResize = () => setIsMobile(window.innerWidth < 640);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Auto-open guest modal when a valid date range is selected
  useEffect(() => {
    if (
      dateRange[0].startDate &&
      dateRange[0].endDate &&
      dateRange[0].startDate !== dateRange[0].endDate
    ) {
      setIsDateSelected(true);
      setIsGuestOpen(true);
      setIsDateOpen(false);
    }
  }, [dateRange]);

  const handleGuestChange = (type, delta) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + delta),
    }));
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-[15rem] py-10 max-md:py-5 bg-[#E8E4D9]  sm:mt-0 px-4 sm:px-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border-2 border-[#D4A017] p-4 sm:p-6 max-md:flex-col max-md:space-y-4">
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {/* Date Range Picker */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Check-in - Check-out
                </label>
                <div
                  className="w-full mt-1 p-3 border rounded-xl border-gray-200 focus-within:ring-2 focus-within:ring-[#D4A017] cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    setIsDateOpen(!isDateOpen);
                    setIsGuestOpen(false);
                  }}
                >
                  {isDateSelected
                    ? `${dateRange[0].startDate.toLocaleDateString()} - ${dateRange[0].endDate.toLocaleDateString()}`
                    : "Select the dates"}
                </div>
                {isDateOpen && (
                  <div className="absolute z-10 mt-2 w-full max-w-[90vw] sm:max-w-lg bg-white rounded-lg left-1/2 -translate-x-1/2">
                    <DateRangePicker
                      className="text-app-black font-medium w-full"
                      onChange={(item) => setDateRange([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dateRange}
                      months={isMobile ? 1 : 2}
                      direction={isMobile ? "vertical" : "horizontal"}
                      rangeColors={["#D4A017"]}
                      staticRanges={[]}
                      inputRanges={[]}
                      showMonthAndYearPickers={isMobile ? false : true}
                      displayMode={isMobile ? "single" : "range"}
                    />
                  </div>
                )}
              </div>

              {/* Guest Selection */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Guests
                </label>
                <div
                  className="w-full mt-1 p-3 border rounded-xl border-gray-200 focus-within:ring-2 focus-within:ring-[#D4A017] cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    setIsGuestOpen(!isGuestOpen);
                    setIsDateOpen(false);
                  }}
                >
                  {`${guests.adults} Adults, ${guests.children} Children, ${
                    guests.infants
                  } Infant${guests.infants > 1 ? "s" : ""}`}
                </div>
                {isGuestOpen && (
                  <div className="absolute z-10 mt-2 w-72 max-w-[90vw] bg-white rounded-lg p-4 border border-[#D4A017] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0">
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={() => setIsGuestOpen(false)}
                        className="text-[#D4A017] hover:text-[#B8860B] transition-colors"
                        aria-label="Close guest selection"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-base sm:text-lg font-semibold text-gray-800">
                          Adults
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleGuestChange("adults", -1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            aria-label="Decrease adults"
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {guests.adults}
                          </span>
                          <button
                            onClick={() => handleGuestChange("adults", 1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            aria-label="Increase adults"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Children
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleGuestChange("children", -1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            aria-label="Decrease children"
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {guests.children}
                          </span>
                          <button
                            onClick={() => handleGuestChange("children", 1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            aria-label="Increase children"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Infants
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => handleGuestChange("infants", -1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            aria-label="Decrease infants"
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {guests.infants}
                          </span>
                          <button
                            onClick={() => handleGuestChange("infants", 1)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            aria-label="Increase infants"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full mt-1 p-2.5 sm:p-3 border rounded-xl bg-[#D4A017] border-gray-200 focus:ring-2 focus:ring-[#D4A017] text-base sm:text-xl cursor-pointer font-bold font-playfair text-white hover:bg-[#B8860B] transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;
