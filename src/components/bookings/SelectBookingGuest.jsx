import React from 'react'

const SelectBookingGuest = () => {
  return (
     <div className="flex cursor-pointer">
        {/* icon */}
        <img src="/assets/booking/users.avif" className='size-10 mr-1' alt="dates" />
        {/* content */}
        <div className="flex flex-col justify-center  items-start">
         <h3 className='font-bold text-sm'>GUESTS</h3>
         <p>2 Adults . 0 Children . 0 Infants</p>
        </div>
       </div>
  )
}

export default SelectBookingGuest