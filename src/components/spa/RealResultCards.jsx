import React from 'react'

const RealResultCards = ({title,result}) => {
  return (
   <div className="bg-[#FAFAFA] min-h-20 flex flex-col justify-center px-3 py-3 rounded-xl mt-2 ">
              <h3 className="font-outfit">{title}</h3>
              <h3 className="font-cormorant text-5xl font-[600]">{result}</h3>
            </div>
  )
}

export default RealResultCards