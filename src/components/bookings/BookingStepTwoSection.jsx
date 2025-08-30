import React from 'react'
import SelectBookingDate from './SelectBookingDate'
import SelectBookingGuest from './SelectBookingGuest'
import BookingOverlayedContent from './BookingOverlayedContent'

const BookingStepTwoSection = () => {
  return (
    <div className='relative w-full min-h-[15rem] flex justify-center items-center flex-col overflow-hidden'>
      
      {/* Background with opacity */}
      <div className="absolute inset-0 bg-[url('/assets/booking/texture.webp')] bg-center bg-cover bg-no-repeat opacity-10"></div>
      
      {/* Overlayed Content */}
     <BookingOverlayedContent/>
      <h2 className='font-cormorant text-3xl mt-5 max-md:text-2xl font-medium'>CHOOSE YOUR ROOM</h2>
      <div className="w-full min-h-[6rem] max-md:flex-col max-md:space-x-0 max-md:space-y-6 flex items-center justify-center space-x-10 mt-7 z-10">
       {/* list */}
      <SelectBookingDate/>
       {/* list */}
      <SelectBookingGuest/>
      </div>
      {/* villas */}
      <div className="w-full relative bg-[#F4F4EA] min-h-[20rem]">
          <div className="absolute inset-0 bg-[url('/assets/booking/texture.webp')] bg-center bg-cover bg-no-repeat opacity-10"></div>
      </div>
    </div>
  )
}

export default BookingStepTwoSection
