import React from 'react'
import SlideLayout from './SlideLayout'
import { Shredder } from 'lucide-react'

const SecondSide = () => {
  return (
    <div className="w-full h-full absolute   -translate-z-[7.4rem] max-md:-translate-z-[15rem] max-sm:-translate-z-[27vh] rotate-x-180 px-10 border border-primary border-b-0 border-t-0 border-l-0 border-r-0">
   <SlideLayout title={'SPA & Wellness'} 
    content={ `Enter a realm of pure bliss where stress checks out before you check in. Our expert therapists will knead away your worries and transform you from 'need coffee' to 'namaste'.`}
    icon={`/assets/icon/women-1.webp`}
    />
    </div>
  )
}

export default SecondSide