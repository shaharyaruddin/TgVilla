import React from 'react'
import SlideLayout from './SlideLayout'
import { HandPlatter, Ship, Waves } from 'lucide-react'

const ThirdSide = () => {
  return (
    <div className="w-full h-full absolute    -translate-y-[50%] rotate-x-90  px-10 border border-primary border-b-0 border-t-0 border-l-0 border-r-0">
   <SlideLayout title={'Private Chef'} 
    content={ `Experience culinary excellence with our master chef who turns every meal into an unforgettable journey. From local delicacies to international cuisine, prepare your taste buds for a flavor explosion!`}
    icon={`/assets/icon/food-1.webp` }
    />
    </div>
  )
}

export default ThirdSide