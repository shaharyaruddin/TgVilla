import clsx from 'clsx'
import { Star } from 'lucide-react'
import React from 'react'

const TestimonialCard = (
  {
    className,
    companyName
  }
) => {
  return (
    <div className={clsx(' w-[25rem] min-h-[10rem] rounded-2xl border border-gray-200 p-5',className)}>
      <div className="flex">
        {
          Array.from({length:5}).map((star,index)=>{
            return <Star key={index} fill='#f3b700' stroke='0' />
          })
        }
      </div>
      <div className="mt-4 text-sm italic">
        "The villa was absolutely beautiful, just as it appears in the photos. Our host, Theofilis met us on arrival, to show us around"
      </div>
      <div className="flex mt-2 items-center">
        {/* profile  */}
        <div className="size-10 rounded-full center text-white text-2xl bg-black uppercase" ><h2>A</h2>
        </div>
        {/* content */}
        <div className="flex flex-col ml-3">
          <h3 className='font-medium '>{companyName}</h3>
          <p className='text-sm'>United Kingdom</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard