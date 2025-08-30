import React from 'react'

const SelectBookingDate = () => {
  return (
     <div className="flex cursor-pointer">
        {/* icon */}
        <img src="/assets/booking/dates.avif" className='size-11 mr-1' alt="dates" />
        {/* content */}
        <div className="flex flex-col justify-center  items-start">
         <h3 className='font-bold text-sm'>DATES</h3>
         <p>27 Aug 2025 - 28 Aug 2025</p>
        </div>
       </div>
  )
}

export default SelectBookingDate