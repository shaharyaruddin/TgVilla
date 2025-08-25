import clsx from 'clsx'
import { MapPin } from 'lucide-react'
import React from 'react'

const BrandNameToolTip = ({className = '',lineClassName = '',tooltip={
  title:'Prime Location – Beach & City Access',
  imagePath :'/assets/icon/point/prime-location.png'
}}) => {
  return (
    <div className={clsx('center-column absolute',className)}>
      <img src={tooltip.imagePath} alt="location icon" className='hidden lg:block size-10 mb-2 object-contain' />
      <div className="relative">
        <div className="border border-[#F1E6D3]  center bg-[#F1E6D3] px-5 text-sm py-3 rounded-full">
        <p>{tooltip.title}</p>
      </div>
      {/* line */}
      <div className={clsx("bg-[#F1E6D3] w-0.5 min-h-[9rem] absolute -translate-x-1/2 left-1/2 origin-top",lineClassName)}>
        <div className="size-7 rounded-full bg-[#F1E6D3] absolute bottom-0 left-1/2 -translate-x-1/2"></div>
      </div>
      </div>
    </div>
  )
}

export default BrandNameToolTip