"use client";
import { useEffect, useState, useCallback } from "react";

import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "./styles.css";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Axios from "@/lib/axios";
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
import { Loader2, Minus, Plus, Search, UserRound } from "lucide-react";
import { toast } from "sonner";

import { useMediaQuery } from "react-responsive";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useBookOption } from "@/contexts/book-option-context";
import { useSearch } from "@/contexts/search-context";
import SectionContainer from "../sections/section-container";


export default function VillaCalendar({ villa }) {
  const { searchOptions, changeGuests, changeSearchDate } = useSearch();
  const { setBookingOptions } = useBookOption();

  const [focusedInput, setFocusedInput] = useState(null);
  const [blockedRanges, setBlockedRanges] = useState([]);
  const [dailyPrices, setDailyPrices] = useState({});
  const [dailyNights, setDailyNights] = useState({});
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [blockedDatesSet, setBlockedDatesSet] = useState(new Set());
  const [departureTooltipDateKey, setDepartureTooltipDateKey] = useState(null);
  const [hoveredDateKey, setHoveredDateKey] = useState(null);

  const isWideScreen = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const fetchVillaDetails = async () => {
      try {
        if (!villa) return;
        const { data } = await Axios.get("/user/get-villa-details/" + villa._id);

        setDailyPrices(data.villa.pricings);
        setDailyNights(data.villa.nights);
        setBlockedRanges(data.villa.bookedDates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVillaDetails();
  }, [villa._id]);

  useEffect(() => {
    setIsLoading(true);
    const fetchBookingOptions = async () => {
      try {
        if (!searchOptions.startDate || !searchOptions.endDate) {
          // console.error("Please select a date range.");
          return;
        }

        if (searchOptions.guests.total === 0) {
          // console.error("Please select at least 1 guest.");
          return;
        }

        const { data } = await Axios.post(`/user/get-booking-options/${villa._id}`, {
          startDate: searchOptions.startDate,
          endDate: searchOptions.endDate,
          guests: searchOptions.guests.total,
        });

        setBookingOptions(data.bookingOptions);
      } catch (error) {
        // console.error(error.response?.data?.message || "Failed to book dates. Please try again.");
        setBookingOptions([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookingOptions();
  }, [villa._id, searchOptions.startDate, searchOptions.endDate, searchOptions.guests.total]);

  useEffect(() => {
    const blockedDatesSet = new Set();
    const rangeEnds = new Set();

    // First, collect all range ends
    blockedRanges.forEach((range) => {
      const rangeEnd = addDays(endOfDay(parseISO(range.end)), 1);
      rangeEnds.add(formatYMD(rangeEnd));
    });


    // Then, process each range
    blockedRanges.forEach((range) => {
      const rangeStart = startOfDay(parseISO(range.start));
      const rangeEnd = endOfDay(parseISO(range.end));
      for (let date = addDays(rangeStart, 1); date <= rangeEnd; date = addDays(date, 1)) {
        blockedDatesSet.add(format(date, "yyyy-MM-dd"));
      }

      // Include rangeStart if it matches any rangeEnd
      if (rangeEnds.has(range.start)) {
        blockedDatesSet.add(range.start);
      }
    });

    setBlockedDatesSet(blockedDatesSet);
  }, [blockedRanges]);

  // Check if a day is in a blocked range
  const isDayBlocked = (day) => {
    const checkDate = formatYMD(endOfDay(day.toDate()));
    return blockedDatesSet.has(checkDate);
  };

  const handleDatesChange = useCallback(
    ({ startDate, endDate }) => {

      // --- Validation: Departure only START date ---
      if (startDate) {
        const isSelectingDepartureOnlyAsStart = blockedRanges.some((range) => {
          // Check if the selected start date matches the start of a blocked range (departure only)
          const rangeStart = startOfDay(parseISO(range.start));
          return startDate.isSame(rangeStart, "day");
        });
        if (isSelectingDepartureOnlyAsStart) {
          // Prevent update
          return;
        }
      }

      // --- Validation: Departure only END date without START date ---
      if (!startDate && endDate) {
        const isSelectingDepartureOnlyAsEndWithoutStart = blockedRanges.some((range) => {
          const rangeStart = startOfDay(parseISO(range.start));
          return endDate.isSame(rangeStart, "day");
        });
        if (isSelectingDepartureOnlyAsEndWithoutStart) {
          console.log("This date is available for departure only. Please select a check-in date first.");
          return; // Prevent update
        }
      }
      // --- Update Dates State ---
      changeSearchDate({ startDate, endDate });
      setDepartureTooltipDateKey(null); // Reset click tooltip state
      setHoveredDateKey(null); // Reset hover tooltip state

      // --- Handle range selection and validation ---
      if (startDate && endDate) {
        const isInvalid = blockedRanges.some((range) => {
          const rangeStart = startOfDay(parseISO(range.start));
          const rangeEnd = endOfDay(parseISO(range.end));
          const checkStart = startOfDay(startDate.toDate());
          const checkEnd = endOfDay(endDate.toDate());

          if (isSameDay(rangeStart, checkEnd)) {
            return false;
          }

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
          setIsPopoverOpen(true);
        }
      }
    },
    [blockedRanges, changeSearchDate]
  );

  const handleSearch = useCallback(async () => {
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

      const { data } = await Axios.post(`/user/get-booking-options/${villa._id}`, {
        startDate: searchOptions.startDate,
        endDate: searchOptions.endDate,
        guests: searchOptions.guests.total,
      });

      setBookingOptions(data.bookingOptions);
      setCount(count + 1);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to book dates. Please try again.");
      setBookingOptions([]);
    } finally {
      setIsLoading(false);
    }
  }, [searchOptions, villa._id, setBookingOptions, count]);

  // Function to dynamically determine minimum nights for a selected start date
  const getMinNightsForDate = useCallback(
    (date) => {
      const formattedDate = format(date, "yyyy-MM-dd");
      return dailyNights[formattedDate] || villa.baseNight;
    },
    [dailyNights, villa.baseNight]
  );

  console.log("focusedInput", focusedInput);

  return (
    <SectionContainer id="calender">
      <p className="text-2xl text-center lg:text-left">Select Check-In and Check-Out Days</p>
      {searchOptions.startDate && searchOptions.endDate ? (
        <p className="text-center lg:text-left">
          {format(searchOptions.startDate.toDate(), "MMM d, yyyy")} -{" "}
          {format(searchOptions.endDate.toDate(), "MMM d, yyyy")}
        </p>
      ) : (
        <p className="text-center lg:text-left">Select a date range to see the total price.</p>
      )}
      <div className="flex flex-col lg:flex-row items-center gap-3 mt-5">
        <DateRangePicker
          startDate={searchOptions.startDate} // Start date of the range
          startDateId="start-date" // Unique ID for the start date
          endDate={searchOptions.endDate} // End date of the range
          endDateId="end-date" // Unique ID for the end date
          focusedInput={focusedInput} // Which input is focused
          numberOfMonths={2} // Number of months displayed
          startDatePlaceholderText="Check-In Date" // Direct prop
          endDatePlaceholderText="Check-Out Date"
          daySize={60}
          displayFormat="MMM DD, yyyy"
          hideKeyboardShortcutsPanel
          orientation={isWideScreen ? "horizontal" : "vertical"}
          onDatesChange={handleDatesChange}
          onFocusChange={(focusedInput) => setFocusedInput(focusedInput)} // Focus handler
          isDayBlocked={isDayBlocked} // Block specific days
          isOutsideRange={(day) => day.isBefore(startOfDay(new Date()))} // Allow today
          // isOutsideRange={(day) => day.isBefore(startOfDay(addDays(new Date(), 1)))} // Disallow today
          // showClearDates={true}
          minimumNights={
            searchOptions.startDate ? getMinNightsForDate(searchOptions.startDate.toDate()) : 3
          }
          renderDayContents={(day) => {
            const dateKey = day.format("YYYY-MM-DD");
            const price = dailyPrices[dateKey];
            const isSelectedRange =
              searchOptions.startDate &&
              searchOptions.endDate &&
              isWithinInterval(day.toDate(), {
                start: searchOptions.startDate.toDate(),
                end: searchOptions.endDate.toDate(),
              });

            // Check if the day is a start date of any blocked range
            const isStartOfBlockedRange = blockedRanges.some((range) => {
              const rangeStart = startOfDay(parseISO(range.start));
              return day.isSame(rangeStart, "day");
            });

            return (
              <>
                <TooltipProvider delayDuration={100}>
                  {isStartOfBlockedRange && !isDayBlocked(day) && day >= new Date() ? (
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
                            }, 50); // Close after 50ms
                          }}
                          onMouseEnter={() => setHoveredDateKey(dateKey)}
                          onMouseLeave={() => setHoveredDateKey(null)}
                        >
                          <span className="text-lg text-cyan-700">{day.date()}</span>
                          <span className={`text-xs font-extralight text-cyan-700 opacity-70`}>
                            €{price ? `${price}` : `${villa.basePrice}`}
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
                        <div className="flex flex-col items-center ">
                          <span className="text-lg ">{day.date()}</span>
                          {!isDayBlocked(day) ? (
                            <span className={`text-xs font-extralight opacity-70`}>
                              €{price ? `${price}` : `${villa.basePrice}`}
                            </span>
                          ) : (
                            <span className={`text-xs font-extralight`}>---</span>
                          )}
                        </div>
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>{getMinNightsForDate(day.toDate())} Nights</p>
                      </TooltipContent>
                    </Tooltip>
                  )}
                </TooltipProvider>
              </>
            );
          }} // Render prices and highlight selected range
        // renderCalendarDay={(day) => {
        //   return (
        //     <div className="bg-green-500">
        //       hi
        //     </div>
        //   )
        // }}
        />

        <div className="flex w-full lg:w-auto justify-center lg:justify-start items-center gap-3">
          <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className="w-[230px] lg:w-56 h-12 rounded-sm border border-black justify-start text-left font-normal"
              >
                <UserRound />
                {searchOptions.guests.total} Guests
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-4" align="end">
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-lg">Adults</div>
                  <div className="flex items-center justify-between w-[100px]">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("adults", -1, villa.capacity)}
                      disabled={searchOptions.guests.adults <= 0}
                    >
                      <Minus />
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-lg">{searchOptions.guests.adults}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("adults", 1, villa.capacity)}
                      disabled={searchOptions.guests.adults >= villa.capacity}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg">Children</div>
                  <div className="flex items-center justify-between w-[100px]">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("children", -1, villa.capacity)}
                      disabled={searchOptions.guests.children <= 0}
                    >
                      <Minus />
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-lg">{searchOptions.guests.children}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("children", 1, villa.capacity)}
                      disabled={searchOptions.guests.children >= villa.capacity}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-lg">Infants</div>
                  <div className="flex items-center justify-between w-[100px]">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("infants", -1, villa.capacity)}
                      disabled={searchOptions.guests.infants <= 0}
                    >
                      <Minus />
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-lg">{searchOptions.guests.infants}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:border-black size-8"
                      onClick={() => changeGuests("infants", 1, villa.capacity)}
                      disabled={searchOptions.guests.infants >= 2}
                    >
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <Button
            className="w-[230px] h-12 rounded-sm text-lg bg-cyan-400 text-white hover:bg-cyan-500"
            onClick={handleSearch}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Search />}
            {count > 0 ? "Change Search" : "Search"}
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}
