import React from 'react'
import SlideLayout from './SlideLayout'
import { Ship } from 'lucide-react'

const FourthSide = () => {
  return (
    <div className="w-full h-full absolute     translate-y-[50%] -rotate-x-90 px-10 border border-primary border-b-0 border-t-0 border-l-0 border-r-0">
   <SlideLayout title={'Cruise'} 
    content={`Set sail on an extraordinary adventure along crystal-clear waters. Our luxury cruise experience combines stunning views, premium service, and enough Instagram-worthy moments to make your followers jealous.`}
    icon={`/assets/icon/ship-1.webp`}
    />
      </div>
  )
}

export default FourthSide