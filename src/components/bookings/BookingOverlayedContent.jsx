import React from 'react'

const BookingOverlayedContent = ({heading}) => {
  return (
     <div className="relative z-10 flex ">
            <div className="w-62 max-h-0.5 max-md:w-20 bg-[#26180F] mt-3"></div>
            <span className='font-cormorant px-5 text-xl '>{heading}</span>
            <div className="w-62 max-h-0.5 max-md:w-20 bg-[#26180F] mt-3"></div>
          </div>
  )
}

export default BookingOverlayedContent