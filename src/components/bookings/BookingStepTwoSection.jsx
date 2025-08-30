import React from "react";
import SelectBookingDate from "./SelectBookingDate";
import SelectBookingGuest from "./SelectBookingGuest";
import BookingOverlayedContent from "./BookingOverlayedContent";
import BookingCard from "./BookingCard";
import DreamVillaSection from "./DreamVillaSection";
import BookingBetweenSection from "./BookingBetweenSection";
import BookingReview from "./BookingReview";

const villaData = [
  {
    type: "Standard",
    name: "TG NEW LUXURY 3-BEDROOM VILLA",
    bedrooms: "All Bedrooms: King Bed",
    price: "€750.00",
    nights: 1,
    guests: 2,
    image: "/assets/booking/villa1.avif",
    services: [
      { name: "Bed & Breakfast Rate", price: "€10" },
      { name: "Scooters Electric x2", price: "€30" },
      { name: "Daily Indoor Cleaning", price: "€50" },
      { name: "Daily Laundry, Linen & Amenities Refresh", price: "€30" },
      { name: "Trips & Tours & Jet Ski", price: "€300" }
    ],
  },
  {
    type: "Standard",
    name: "TG NEW LUXURY 3-BEDROOM VILLA",
    bedrooms: "All Bedrooms: King Bed",
    price: "€750.00",
    nights: 1,
    guests: 2,
    image: "/assets/booking/villa1.avif",
    services: [
      { name: "Bed & Breakfast Rate", price: "€10" },
      { name: "Scooters Electric x2", price: "€30" },
      { name: "Daily Indoor Cleaning", price: "€50" },
      { name: "Daily Laundry, Linen & Amenities Refresh", price: "€30" },
      { name: "Trips & Tours & Jet Ski", price: "€300" }
    ],
  },
];

const BookingStepTwoSection = () => {
  return (
    <div className="relative w-full min-h-[15rem] flex justify-center items-center flex-col overflow-hidden pt-5">
      {/* Background with repeat */}
      <div className="absolute inset-0 bg-[url('/assets/booking/texture.webp')] bg-center bg-repeat opacity-10"></div>

      {/* Overlayed Content */}
     <BookingBetweenSection/>

      {/* villas */}
      <div className="w-full relative   my-10 flex flex-col items-center max-md:px-4">
        {villaData.map((item, index) => (
          <BookingCard key={index} villa={item} />
        ))}
      </div>
      <DreamVillaSection/>
      <BookingReview/>
    </div>
  );
};

export default BookingStepTwoSection;