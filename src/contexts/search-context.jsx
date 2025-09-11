"use client";

import { createContext, useContext, useState } from "react";
import moment from "moment";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchOptions, setSearchOptions] = useState({
    startDate: null,
    endDate: null,
    guests: { adults: 0, children: 0, infants: 0, total: 0 },
  });
  const [isLoading, setIsLoading] = useState(false);

  const changeGuests = (type, delta, max) => {
    setSearchOptions((prev) => {
      const newGuests = { ...prev.guests };
      newGuests[type] = Math.max(0, Math.min(newGuests[type] + delta, max));
      newGuests.total = newGuests.adults + newGuests.children + newGuests.infants;
      return { ...prev, guests: newGuests };
    });
  };

  const changeSearchDate = ({ startDate, endDate }) => {
    setSearchOptions((prev) => ({
      ...prev,
      startDate: startDate ? moment(startDate) : null,
      endDate: endDate ? moment(endDate) : null,
    }));
  };

  return (
    <SearchContext.Provider
      value={{ searchOptions, changeGuests, changeSearchDate, isLoading, setIsLoading }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);