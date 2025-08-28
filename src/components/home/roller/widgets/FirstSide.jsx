import React from 'react'
import SlideLayout from './SlideLayout'
import { Plane } from 'lucide-react'

const FirstSide = () => {
  return (
    <div className="w-full h-full absolute   translate-z-[7.4rem] max-md:translate-z-[15rem] max-sm:translate-z-[27vh] px-10 border border-primary  border-b-0 border-t-0 border-l-0 border-r-0 ">
    <SlideLayout title={'Airport Transfer'} 
    content={ `Skip the taxi drama with our luxurious airport transfer service. Our professional drivers ensure you arrive in style, without the 'where are we going?' adventure typical of regular cabs`}
    icon={`/assets/icon/car-1.webp`}
    />
  </div>
  )
}

export default FirstSide