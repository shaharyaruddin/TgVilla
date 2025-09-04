"use client";

import { createContext, useContext, useState } from "react";

export const BookOptionContext = createContext();

export function BookOptionProvider({ children }) {
  const [bookingOptions, setBookingOptions] = useState(null);
  const [allBookingOptions, setAllBookingOptions] = useState(null);
  return (
    <BookOptionContext.Provider
      value={{
        bookingOptions,
        setBookingOptions,
        allBookingOptions,
        setAllBookingOptions,
      }}
    >
      {children}
    </BookOptionContext.Provider>
  );
}

export const useBookOption = () => {
  const context = useContext(BookOptionContext);
  if (!context) {
    throw new Error("useBookOption must be used within a BookOptionProvider");
  }
  return context;
};
