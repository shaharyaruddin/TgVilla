import React from 'react'
import HomeServicesLeft from './widget/HomeServicesLeft'
import HomeServicesRight from './widget/HomeServicesRight'

const HomeServices = () => {
  return (
    <div className='grid grid-cols-2 bg-[#E8E4D9] homeService max-width w-full min-h-screen max-lg:min-h-[30rem]  max-[51.25em]:grid-cols-1 pt-20'>
        {/* left */}
        <HomeServicesLeft/>
        {/* right */}
        <HomeServicesRight/>  
    </div>
  )
}

export default HomeServices