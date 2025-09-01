import React from 'react'

const SpaGridCard = () => {
  return (
    <div className='bg-white rounded-2xl text-[#333333] p-4 flex flex-col justify-between min-h-[20rem]'>
      <h3 className='font-crimson-text'>Customer Satisfaction</h3>
      <h2 className='font-playfair text-9xl font-bold py-10 max-2xl:text-8xl'>98%</h2>
      <p className='font-crimson-text text-gray-600 text-lg max-2xl:text-base'>98% of our clients leave feeling deeply relaxed, refreshed, and rejuvenated after their visit</p>
    </div>
  )
}

export default SpaGridCard