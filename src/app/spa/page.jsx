import SpaCardGridSection from '@/components/spa/SpaCardGridSection'
import SpaSecondSection from '@/components/spa/SpaSecondSection'
import SpaTopSection from '@/components/spa/SpaTopSection'
import React from 'react'

const page = () => {
  return (
   <div className='bg-[#FAFAFA]'>
   <SpaTopSection/>
   <SpaSecondSection/>
   <SpaCardGridSection/>
   </div>
  )
}

export default page