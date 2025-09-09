'use client';
import { createContext, useContext, useState } from "react";

export const BookContext = createContext();

export function BookProvider({ children }) {
  const [bookData, setBookData] = useState({});

  return (
    <BookContext.Provider
      value={{
        bookData,
        setBookData,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return context;
};