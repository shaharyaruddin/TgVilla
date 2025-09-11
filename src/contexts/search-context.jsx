'use client';
import { toast } from "sonner";
import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchOptions, setSearchOptions] = useState({
    startDate: null,
    endDate: null,
    guests: {
      total: 0,
      adults: 0,
      children: 0,
      infants: 0,
    },
  });

  const [isLoading,setIsLoading] = useState(undefined);

  const changeGuests = (type, adjustment, capacity = 6) => {
    const total = searchOptions.guests.adults + searchOptions.guests.children;
    if (total + adjustment > capacity) {
      toast.error(`You can only have up to ${capacity} people in the house`);
      return;
    }

    setSearchOptions((prev) => {
      const updatedGuests = {
        ...prev.guests,
        [type]: prev.guests[type] + adjustment,
      };
      return {
        ...prev,
        guests: {
          ...updatedGuests,
          total: updatedGuests.adults + updatedGuests.children,
        },
      };
    });
  };

  const changeSearchDate = ({ startDate, endDate }) => {
    setSearchOptions((prev) => {
      if (
        prev.startDate?.getTime?.() === startDate?.getTime?.() &&
        prev.endDate?.getTime?.() === endDate?.getTime?.()
      ) {
        return prev;
      }

      return {
        ...prev,
        startDate,
        endDate,
      };
    });
  };

  return (
    <SearchContext.Provider
      value={{
        searchOptions,
        isLoading,
        setIsLoading,
        changeGuests,
        changeSearchDate,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};