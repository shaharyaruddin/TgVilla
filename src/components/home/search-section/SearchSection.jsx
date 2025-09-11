'use client';
import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Loader2, X } from "lucide-react";
import { useSearch } from "@/contexts/search-context";
import { useBookOption } from "@/contexts/book-option-context";
import { useScroll } from "@/hooks/use-scroll";
import Axios from "@/lib/axios";
import { toast } from "sonner";
import { useMediaQuery } from "react-responsive";

// Custom CSS to hide static ranges on mobile
const styles = `
  @media (max-width: 639px) {
    .rdrStaticRanges {
      display: none !important;
    }
  }
`;

const SearchSection = () => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const { searchOptions, changeGuests, changeSearchDate, isLoading, setIsLoading } = useSearch();
  const { setAllBookingOptions } = useBookOption();
  const { scrollToSection } = useScroll();
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [localRange, setLocalRange] = useState([
    {
      startDate: searchOptions.startDate || null,
      endDate: searchOptions.endDate || null,
      key: "selection",
    },
  ]);

  // Sync localRange with searchOptions dates
  useEffect(() => {
    setLocalRange([
      {
        startDate: searchOptions.startDate || null,
        endDate: searchOptions.endDate || null,
        key: "selection",
      },
    ]);
  }, [searchOptions.startDate, searchOptions.endDate]);

  const handleSearch = async () => {
    setIsGuestOpen(false); // Close guest modal
    setIsDateOpen(false); // Close date picker modal
    setIsLoading(true);
    try {
      if (!searchOptions.startDate || !searchOptions.endDate) {
        toast.error("Please select a date range.");
        return;
      }
      if (searchOptions.guests.total === 0) {
        toast.error("Please select at least 1 guest.");
        return;
      }

      const { data } = await Axios.post(`/user/get-booking-options-all`, {
        startDate: searchOptions.startDate,
        endDate: searchOptions.endDate,
        guests: searchOptions.guests.total,
      });

      if (data.allBookingOptions?.length > 0) {
        console.log("✅ Search results:", data.allBookingOptions);
      } else {
        console.log("⚠️ Search completed but no results found (empty array).");
      }

      setAllBookingOptions(data.allBookingOptions || []);
      setCount(count + 1);
      scrollToSection(null, "best-match");
    } catch (error) {
      console.error("❌ Search error:", error.message);
      toast.error("Search failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGuestModalClose = (e) => {
    e.stopPropagation();
    setIsGuestOpen(false);
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-[15rem] py-10 max-md:py-5 sm:mt-0 px-4 sm:px-0">
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
                  {searchOptions.startDate && searchOptions.endDate
                    ? `${searchOptions.startDate.toLocaleDateString()} - ${searchOptions.endDate.toLocaleDateString()}`
                    : "Select the dates"}
                </div>
                {isDateOpen && (
                  <div className="absolute z-10 mt-2 w-full max-w-[90vw] sm:max-w-lg bg-white rounded-lg left-1/2 -translate-x-1/2">
                    <DateRangePicker
                      className="text-app-black font-medium w-full"
                      onChange={(item) => {
                        const newRange = [item.selection];
                        setLocalRange(newRange);
                        if (
                          newRange[0].startDate &&
                          newRange[0].endDate &&
                          newRange[0].startDate !== newRange[0].endDate
                        ) {
                          changeSearchDate({
                            startDate: newRange[0].startDate,
                            endDate: newRange[0].endDate,
                          });
                          setIsDateOpen(false);
                          setIsGuestOpen(true);
                        }
                      }}
                      moveRangeOnFirstSelection={false}
                      ranges={localRange}
                      months={2}
                      direction={isMobile ? "vertical" : "horizontal"}
                      rangeColors={["#D4A017"]}
                      staticRanges={[]}
                      inputRanges={[]}
                      showMonthAndYearPickers={true}
                      minDate={new Date()}
                      initialVisibleMonth={() => new Date()}
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
                  {searchOptions.guests.total} Guests
                </div>
                {isGuestOpen && (
                  <div className="absolute z-10 mt-2 w-72 max-w-[90vw] bg-white rounded-lg p-4 border border-[#D4A017] left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0">
                    <div className="flex justify-end mb-2">
                      <button
                        onClick={handleGuestModalClose}
                        className="text-[#D4A017] hover:text-[#B8860B] transition-colors"
                        aria-label="Close guest selection"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <div className="space-y-4">
                      {/* Adults */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-base sm:text-lg font-semibold text-gray-800">
                          Adults
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => changeGuests("adults", -1, 8)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            disabled={searchOptions.guests.adults <= 0}
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.adults}
                          </span>
                          <button
                            onClick={() => changeGuests("adults", 1, 8)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                            disabled={searchOptions.guests.adults >= 8}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Children */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Children
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => changeGuests("children", -1, 8)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            disabled={searchOptions.guests.children <= 0}
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.children}
                          </span>
                          <button
                            onClick={() => changeGuests("children", 1, 8)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            disabled={searchOptions.guests.children >= 8}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Infants */}
                      <div className="flex justify-between items-center py-2">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Infants
                        </span>
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => changeGuests("infants", -1, 2)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            disabled={searchOptions.guests.infants <= 0}
                          >
                            -
                          </button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.infants}
                          </span>
                          <button
                            onClick={() => changeGuests("infants", 1, 2)}
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200"
                            disabled={searchOptions.guests.infants >= 2}
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
                <button
                  className={`w-full mt-1 p-2.5 sm:p-3 border rounded-xl bg-[#D4A017] border-gray-200 focus:ring-2 focus:ring-[#D4A017] text-base sm:text-xl cursor-pointer font-bold text-nowrap font-playfair text-white hover:bg-[#B8860B] transition-colors ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSearch}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex justify-between">
                      <Loader2 className="animate-spin" />
                      Loading..
                      <span></span>
                    </div>
                  ) : (
                    "Search"
                  )}
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