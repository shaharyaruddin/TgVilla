import React from 'react'

const BookingTopSection = () => {
  return (
    <div className='relative w-full min-h-[60vh] max-md:min-h-[40vh] max-sm:min-h-[35vh] bg-[url("/assets/booking/background.webp")] bg-center bg-cover bg-no-repeat'>
      <div className="absolute w-screen min-h-[60vh] max-md:min-h-[40vh] max-sm:min-h-[35vh]   text-white bg-black/40 flex flex-col justify-center items-center">
      <h3 className='text-[6vw] font-medium max-md:text-[7vw] max-md:text-center'>BOOK YOUR DREAM VILLA TODAY</h3>
      <p className='text-xl max-2xl:text-base max-w-[80%] text-center max-md:text-sm max-sm:text-xs max-md:max-w-[90%]'>Fill out the form below to check availability and get a quick response. Let us know your preferred date and details, and we’ll get back to you shortly!</p>
      </div>
    </div>
  )
}

export default BookingTopSection