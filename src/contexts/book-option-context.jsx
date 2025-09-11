"use client";

import { createContext, useContext, useState } from "react";

const BookOptionContext = createContext();

export const BookOptionProvider = ({ children }) => {
  const [bookingOptions, setBookingOptions] = useState([]);
  const [allBookingOptions, setAllBookingOptions] = useState([]);

  return (
    <BookOptionContext.Provider
      value={{ bookingOptions, setBookingOptions, allBookingOptions, setAllBookingOptions }}
    >
      {children}
    </BookOptionContext.Provider>
  );
};

export const useBookOption = () => useContext(BookOptionContext);