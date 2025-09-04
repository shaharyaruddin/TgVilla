"use client";
import { SearchProvider } from "./search-context";
import { BookProvider } from "./book-context";
import { BookOptionProvider } from "./book-option-context";
export default function AppProviders({ children }) {
  return (
    <SearchProvider>
      <BookProvider>
        <BookOptionProvider>{children}</BookOptionProvider>
      </BookProvider>
    </SearchProvider>
  );
}
