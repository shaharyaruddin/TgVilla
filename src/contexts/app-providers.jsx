"use client";
import { SearchProvider } from "./search-context";
import { BookProvider } from "./book-context";
import { BookOptionProvider } from "./book-option-context";
import { TooltipProvider } from "@/components/ui/tooltip";
export default function AppProviders({ children }) {
  return (
    <SearchProvider>
      <BookProvider>
        <TooltipProvider>

        <BookOptionProvider>{children}</BookOptionProvider>
        </TooltipProvider>
      </BookProvider>
    </SearchProvider>
  );
}
