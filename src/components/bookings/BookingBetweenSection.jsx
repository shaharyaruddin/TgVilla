import React from 'react'
import BookingOverlayedContent from './BookingOverlayedContent'
import SelectBookingDate from './SelectBookingDate'
import SelectBookingGuest from './SelectBookingGuest'

const BookingBetweenSection = () => {
  return (
   <>
    <BookingOverlayedContent heading={'Step 2 of 3'} />
      <h2 className="font-cormorant text-3xl mt-5 max-md:text-2xl font-medium">
        CHOOSE YOUR ROOM
      </h2>

      <div className="w-full min-h-[6rem] max-md:flex-col max-md:space-x-0 max-md:space-y-6 flex items-center justify-center space-x-10 mt-7 z-10">
        <SelectBookingDate />
        <SelectBookingGuest />
      </div>
   </>
  )
}

export default BookingBetweenSection