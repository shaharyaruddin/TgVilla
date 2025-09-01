import React from 'react'
import SpaGridCard from './SpaGridCard'

const SpaCardGridSection = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-3 my-10 max-2xl:px-5'>
       {Array.from({length:4}).map((item)=>{
        return <SpaGridCard/>;
       })}
    </div>
  )
}

export default SpaCardGridSection