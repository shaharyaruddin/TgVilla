"use client";
import React, { useState, useEffect, useCallback } from "react";
import { DateRangePicker } from 'react-dates-18';
import "react-dates/initialize";
import 'react-dates-18/lib/css/_datepicker.css';
import { Loader2, X, UserRound, Minus, Plus, Search } from "lucide-react";
import { useSearch } from "@/contexts/search-context";
import { useBookOption } from "@/contexts/book-option-context";
import { useScroll } from "@/hooks/use-scroll";
import Axios from "@/lib/axios";
import { toast } from "sonner";
import { useMediaQuery } from "react-responsive";
import {
  endOfDay,
  format,
  isWithinInterval,
  parseISO,
  startOfDay,
  addDays,
  subDays,
  isSameDay,
} from "date-fns";
import { formatYMD } from "@/lib/dates";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import moment from "moment";

// Custom CSS for mobile and calendar styling
const styles = `
  /* Mobile-specific styles */
  @media (max-width: 639px) {
    .DateRangePickerInput {
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .DateRangePicker_picker {
      left: 50% !important;
      transform: translateX(-50%) !important;
      width: 100%;
      max-width: 90vw;
    }
    .DateRangePicker {
      display: flex;
      justify-content: center;
    }
    .DateInput {
      width: 120px;
    }
    .DateInput_input {
      font-size: 14px;
      padding: 8px;
    }
  }

  /* Date picker theme */
  .DateRangePicker__Day--selected,
  .DateRangePicker__Day--selected:hover {
    background-color: #D4A017 !important;
    border-color: #D4A017 !important;
    color: white !important;
  }
  .DateRangePicker__Day--today .DateRangePicker__Day__Number span:after {
    background: #D4A017 !important;
  }
  .DateRangePicker__Day--hovered,
  .DateRangePicker__Day--hovered-span {
    background-color: #B8860B !important;
    color: white !important;
  }
  .DateRangePicker__Day--disabled {
    background-color: #f4f4f4;
    opacity: 0.5;
    cursor: not-allowed;
  }
  .DateRangePickerInput_arrow {
    color: #D4A017;
  }
  .CalendarMonth_caption {
    color: #D4A017;
    font-weight: bold;
  }
  .DateRangePicker_picker {
    border: 2px solid #D4A017;
    border-radius: 8px;
  }
`;

const SearchSection = ({ villa }) => {
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const isWideScreen = useMediaQuery({ minWidth: 1024 });
  const { searchOptions, changeGuests, changeSearchDate, isLoading, setIsLoading } = useSearch();
  const { setAllBookingOptions, setBookingOptions } = useBookOption();
  const { scrollToSection } = useScroll();
  const [focusedInput, setFocusedInput] = useState(null);
  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [blockedRanges, setBlockedRanges] = useState([]);
  const [dailyPrices, setDailyPrices] = useState({});
  const [dailyNights, setDailyNights] = useState({});
  const [blockedDatesSet, setBlockedDatesSet] = useState(new Set());
  const [hoveredDateKey, setHoveredDateKey] = useState(null);
  const [departureTooltipDateKey, setDepartureTooltipDateKey] = useState(null);

  // Debug logs
  useEffect(() => {
    console.log("SearchSection searchOptions:", searchOptions);
    console.log("SearchSection villa:", villa);
  }, [searchOptions, villa]);

  // Fetch villa-specific details
  useEffect(() => {
    const fetchVillaDetails = async () => {
      try {
        if (!villa?._id) return;
        const { data } = await Axios.get(`/user/get-villa-details/${villa._id}`);
        console.log("Villa details:", data);
        setDailyPrices(data.villa?.pricings || {});
        setDailyNights(data.villa?.nights || {});
        setBlockedRanges(data.villa?.bookedDates || []);
      } catch (error) {
        console.error("Error fetching villa details:", error);
        toast.error("Failed to load villa details.");
      }
    };
    fetchVillaDetails();
  }, [villa?._id]);

  // Update blocked dates set
  useEffect(() => {
    const blockedDatesSet = new Set();
    const rangeEnds = new Set();

    blockedRanges.forEach((range) => {
      if (range.start && range.end) {
        const rangeEnd = addDays(endOfDay(parseISO(range.end)), 1);
        rangeEnds.add(formatYMD(rangeEnd));
      }
    });

    blockedRanges.forEach((range) => {
      if (range.start && range.end) {
        const rangeStart = startOfDay(parseISO(range.start));
        const rangeEnd = endOfDay(parseISO(range.end));
        for (let date = addDays(rangeStart, 1); date <= rangeEnd; date = addDays(date, 1)) {
          blockedDatesSet.add(format(date, "yyyy-MM-dd"));
        }
        if (rangeEnds.has(range.start)) {
          blockedDatesSet.add(range.start);
        }
      }
    });

    console.log("blockedDatesSet:", Array.from(blockedDatesSet));
    setBlockedDatesSet(blockedDatesSet);
  }, [blockedRanges]);

  // Check if a day is blocked
  const isDayBlocked = useCallback(
    (day) => {
      const checkDate = formatYMD(endOfDay(day.toDate ? day.toDate() : day));
      return blockedDatesSet.has(checkDate);
    },
    [blockedDatesSet]
  );

  // Get minimum nights for a date
  const getMinNightsForDate = useCallback(
    (day) => {
      const formattedDate = format(day, "yyyy-MM-dd");
      return dailyNights[formattedDate] || villa?.baseNight || 3;
    },
    [dailyNights, villa]
  );

  // Handle date changes
  const handleDatesChange = useCallback(
    ({ startDate, endDate }) => {
      // Validation for departure-only dates
      if (villa && startDate) {
        const isSelectingDepartureOnlyAsStart = blockedRanges.some((range) => {
          if (!range.start) return false;
          const rangeStart = startOfDay(parseISO(range.start));
          return startDate.isSame(rangeStart, "day");
        });
        if (isSelectingDepartureOnlyAsStart) {
          console.log("Blocked: Departure-only start date");
          toast.error("This date is available for departure only. Please select a different check-in date.");
          return;
        }
      }

      if (villa && !startDate && endDate) {
        const isSelectingDepartureOnlyAsEndWithoutStart = blockedRanges.some((range) => {
          if (!range.start) return false;
          const rangeStart = startOfDay(parseISO(range.start));
          return endDate.isSame(rangeStart, "day");
        });
        if (isSelectingDepartureOnlyAsEndWithoutStart) {
          console.log("Blocked: Departure-only end date without start");
          toast.error("This date is available for departure only. Please select a check-in date first.");
          return;
        }
      }

      // Update dates
      changeSearchDate({ startDate, endDate });
      setHoveredDateKey(null);
      setDepartureTooltipDateKey(null);

      // Validate range when both dates are selected
      if (villa && startDate && endDate) {
        const isInvalid = blockedRanges.some((range) => {
          if (!range.start || !range.end) return false;
          const rangeStart = startOfDay(parseISO(range.start));
          const rangeEnd = endOfDay(parseISO(range.end));
          const checkStart = startOfDay(startDate.toDate());
          const checkEnd = endOfDay(endDate.toDate());

          if (isSameDay(rangeStart, checkEnd)) return false;

          return (
            isWithinInterval(rangeStart, { start: checkStart, end: subDays(checkEnd, 1) }) ||
            isWithinInterval(rangeEnd, { start: checkStart, end: checkEnd }) ||
            isWithinInterval(checkStart, { start: rangeStart, end: rangeEnd }) ||
            isWithinInterval(checkEnd, { start: addDays(rangeStart, 1), end: rangeEnd })
          );
        });

        if (isInvalid) {
          toast.error("Selected range includes blocked dates. Please try again.");
          changeSearchDate({ startDate: null, endDate: null });
          return;
        } else {
          setIsGuestOpen(true);
          setFocusedInput(null);
        }
      } else if (startDate && endDate && !isSameDay(startDate.toDate(), endDate.toDate())) {
        setIsGuestOpen(true);
        setFocusedInput(null);
      }
    },
    [villa, blockedRanges, changeSearchDate]
  );

  // Handle search
  const handleSearch = useCallback(async () => {
    setIsGuestOpen(false);
    setFocusedInput(null);
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

      if (villa) {
        const { data } = await Axios.post(`/user/get-booking-options/${villa._id}`, {
          startDate: searchOptions.startDate,
          endDate: searchOptions.endDate,
          guests: searchOptions.guests.total,
        });
        console.log("Villa booking options:", data.bookingOptions);
        if (!data.bookingOptions || data.bookingOptions.length === 0) {
          toast.error("No booking options available for the selected dates.");
          setBookingOptions([]);
        } else {
          setBookingOptions(data.bookingOptions);
          setCount(count + 1);
        }
      } else {
        const { data } = await Axios.post(`/user/get-booking-options-all`, {
          startDate: searchOptions.startDate,
          endDate: searchOptions.endDate,
          guests: searchOptions.guests.total,
        });
        console.log("All booking options:", data.allBookingOptions);
        setAllBookingOptions(data.allBookingOptions || []);
        setCount(count + 1);
        scrollToSection(null, "best-match");
      }
    } catch (error) {
      console.error("Search error:", error);
      toast.error(error.response?.data?.message || "Search failed. Please try again.");
      if (villa) {
        setBookingOptions([]);
      } else {
        setAllBookingOptions([]);
      }
    } finally {
      setIsLoading(false);
    }
  }, [villa, searchOptions, setBookingOptions, setAllBookingOptions, scrollToSection, count]);

  const handleGuestModalClose = (e) => {
    e.stopPropagation();
    setIsGuestOpen(false);
  };

  // Custom day renderer for hover-based price display
  const renderDayContents = useCallback(
    (day) => {
      if (!villa) return <div className="flex flex-col items-center"><span className="text-lg">{day.date()}</span></div>;

      const dateKey = day.format("YYYY-MM-DD");
      const price = dailyPrices[dateKey];
      const isBlocked = isDayBlocked(day);
      const isStartOfBlockedRange = blockedRanges.some((range) => {
        if (!range.start) return false;
        const rangeStart = startOfDay(parseISO(range.start));
        return day.isSame(rangeStart, "day");
      });

      return (
        <TooltipProvider delayDuration={100}>
          {isStartOfBlockedRange && !isBlocked && day >= moment() ? (
            <Tooltip
              open={hoveredDateKey === dateKey || departureTooltipDateKey === dateKey}
              onOpenChange={(isOpen) => {
                if (!isOpen) {
                  setDepartureTooltipDateKey(null);
                }
              }}
            >
              <TooltipTrigger asChild>
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => {
                    setDepartureTooltipDateKey(dateKey);
                    setTimeout(() => {
                      setDepartureTooltipDateKey(null);
                    }, 50);
                  }}
                  onMouseEnter={() => setHoveredDateKey(dateKey)}
                  onMouseLeave={() => setHoveredDateKey(null)}
                >
                  <span className="text-lg text-cyan-700">{day.date()}</span>
                  <span className="text-xs font-extralight text-cyan-700 opacity-70">
                    €{price ? price : villa?.basePrice || 0}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-cyan-400 text-white">
                <p>Departure only</p>
              </TooltipContent>
            </Tooltip>
          ) : (
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex flex-col items-center">
                  <span className={`text-lg ${isBlocked ? "text-gray-400" : "text-black"}`}>{day.date()}</span>
                  {!isBlocked ? (
                    <span className="text-xs font-extralight opacity-70">
                      €{price ? price : villa?.basePrice || 0}
                    </span>
                  ) : (
                    <span className="text-xs font-extralight">---</span>
                  )}
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{getMinNightsForDate(day.toDate())} Nights</p>
              </TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      );
    },
    [villa, dailyPrices, blockedRanges, isDayBlocked, getMinNightsForDate, hoveredDateKey, departureTooltipDateKey]
  );

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-[15rem] py-10 max-md:py-5 sm:mt-0 px-4 sm:px-0">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {villa && (
            <div className="mb-4">
              <p className="text-2xl text-center lg:text-left">Select Check-In and Check-Out Days</p>
              {searchOptions.startDate && searchOptions.endDate ? (
                <p className="text-center lg:text-left">
                  {format(searchOptions.startDate.toDate(), "MMM d, yyyy")} -{" "}
                  {format(searchOptions.endDate.toDate(), "MMM d, yyyy")}
                </p>
              ) : (
                <p className="text-center lg:text-left">Select a date range to see the total price.</p>
              )}
            </div>
          )}
          <div className="bg-white rounded-xl border-2 border-[#D4A017] p-4 sm:p-6 max-md:flex-col max-md:space-y-4">
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
              {/* Date Range Picker */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">
                  Check-in - Check-out
                </label>
                <div
                  className="w-full mt-1 p-3 border rounded-xl border-[#D4A017] focus-within:ring-2 focus-within:ring-[#D4A017] cursor-pointer text-sm sm:text-base"
                  onClick={() => setFocusedInput(focusedInput ? null : "startDate")}
                >
                  {searchOptions.startDate && searchOptions.endDate
                    ? `${format(searchOptions.startDate.toDate(), "MMM d, yyyy")} - ${format(searchOptions.endDate.toDate(), "MMM d, yyyy")}`
                    : "Select the dates"}
                </div>
                {focusedInput && (
                  <div className="absolute z-10 mt-2 w-full max-w-[90vw] sm:max-w-lg bg-white rounded-lg left-1/2 -translate-x-1/2">
                    <DateRangePicker
                      startDate={searchOptions.startDate}
                      startDateId="start-date"
                      endDate={searchOptions.endDate}
                      endDateId="end-date"
                      focusedInput={focusedInput}
                      onDatesChange={handleDatesChange}
                      onFocusChange={setFocusedInput}
                      numberOfMonths={isMobile ? 1 : 2} // Show 1 month on mobile for better fit
                      startDatePlaceholderText="Check-In Date"
                      endDatePlaceholderText="Check-Out Date"
                      daySize={isMobile ? 40 : 60} // Smaller day size on mobile
                      displayFormat="MMM DD, yyyy"
                      hideKeyboardShortcutsPanel
                      orientation="horizontal" // Force horizontal orientation
                      isDayBlocked={villa ? isDayBlocked : () => false}
                      isOutsideRange={(day) => day.isBefore(startOfDay(new Date()))}
                      minimumNights={
                        villa && searchOptions.startDate
                          ? getMinNightsForDate(searchOptions.startDate.toDate())
                          : 3
                      }
                      renderDayContents={villa ? renderDayContents : undefined}
                    />
                  </div>
                )}
              </div>

              {/* Guest Selection */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Guests</label>
                <div
                  className="w-full mt-1 p-3 border rounded-xl border-[#D4A017] focus-within:ring-2 focus-within:ring-[#D4A017] cursor-pointer text-sm sm:text-base"
                  onClick={() => {
                    setIsGuestOpen(!isGuestOpen);
                    setFocusedInput(null);
                  }}
                >
                  <UserRound className="inline-block mr-2" size={16} />
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
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("adults", -1, villa ? villa.capacity : 8)}
                            disabled={searchOptions.guests.adults <= 0}
                          >
                            <Minus />
                          </Button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.adults}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("adults", 1, villa ? villa.capacity : 8)}
                            disabled={searchOptions.guests.adults >= (villa ? villa.capacity : 8)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                      {/* Children */}
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Children
                        </span>
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("children", -1, villa ? villa.capacity : 8)}
                            disabled={searchOptions.guests.children <= 0}
                          >
                            <Minus />
                          </Button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.children}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("children", 1, villa ? villa.capacity : 8)}
                            disabled={searchOptions.guests.children >= (villa ? villa.capacity : 8)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                      {/* Infants */}
                      <div className="flex justify-between items-center py-2">
                        <span className="text-base sm:text-lg font-medium text-gray-700">
                          Infants
                        </span>
                        <div className="flex items-center space-x-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("infants", -1, villa ? villa.capacity : 2)}
                            disabled={searchOptions.guests.infants <= 0}
                          >
                            <Minus />
                          </Button>
                          <span className="text-base sm:text-lg font-medium">
                            {searchOptions.guests.infants}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full hover:border-[#D4A017] size-8"
                            onClick={() => changeGuests("infants", 1, villa ? villa.capacity : 2)}
                            disabled={searchOptions.guests.infants >= (villa ? villa.capacity : 2)}
                          >
                            <Plus />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <Button
                  className={`w-full mt-1 min-h-12.5 max-md:min-h-10 p-3 border rounded-xl border-[#D4A017] focus-within:ring-2 focus-within:ring-[#D4A017] cursor-pointer text-sm sm:text-base   sm:p-3  bg-[#D4A017]   focus:ring-2 focus:ring-[#D4A017]  font-bold text-nowrap font-playfair text-white hover:bg-[#B8860B] hover:border-[#B8860B] transition-colors ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  onClick={handleSearch}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader2 className="animate-spin" size={20} />
                      <span>Loading...</span>
                    </div>
                  ) : (
                    <>
                      <Search className="inline-block mr-2" size={20} />
                      {count > 0 ? "Change Search" : "Search"}
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchSection;