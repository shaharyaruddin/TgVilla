import SearchSection from "../home/search-section/SearchSection";
import BookingOverlayedContent from "./BookingOverlayedContent";

const BookingBetweenSection = () => {
  return (
    <>
      <BookingOverlayedContent heading={"Step 1 of 2"} />
      <h2 className="font-cormorant text-3xl mt-5 max-md:text-2xl font-medium">
        CHOOSE YOUR ROOM
      </h2>

      <div className="min-w-full min-h-[6rem]  flex items-center justify-center  mt-7 z-[20]">
        <SearchSection />
      </div>
    </>
  );
};

export default BookingBetweenSection;
