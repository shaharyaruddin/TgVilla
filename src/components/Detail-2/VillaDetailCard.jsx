import Image from 'next/image';
import React from 'react'

const VillaDetailCard = ({detail}) => {
  return (
      <div className=" px-3 relative p-6 bg-gray-50 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Text Content */}
                <div className="flex-1">
                  {/* Standard Rate */}
                  <div className="flex items-center w-fit rounded-full border border-black overflow-hidden mb-8">
                    <div className="px-4 py-2  text-sm font-medium text-black bg-white">
                      {detail.rateType}
                    </div>
                    <div className="px-4 py-2 font-medium text-white rounded-l-2xl bg-[#2a1b14]">
                        {detail.basePrice}
                    </div>
                  </div>
    
                  <div className="flex gap-6 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <img
                        src="/assets/detail-2/moon.avif"
                        alt="moon"
                        className="w-5 h-5"
                      />
                      <div className="text-xs font-semibold">   {detail.baseNeight} Base Night</div>
                    </div>
    
                    <div className="flex items-center">
                      <img
                        src="/assets/detail-2/guest.avif"
                        alt="moon"
                        className="w-5 h-5"
                      />
                      <div className="text-xs font-semibold">  {detail.maxGuest} Max Guests</div>
                    </div>
    
                    <div className="flex items-center">
                      <img
                        src="/assets/detail-2/dollar.avif"
                        alt="moon"
                        className="w-5 h-5"
                      />
                      <div className="text-xs font-semibold">
                        €750</div>
                    </div>
                  </div>
                  {/* Breakfast Info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Breakfast Info</h3>
                    <p className="text-xs text-gray-600">
                       {detail.breakfastInfo}
                    </p>
                  </div>
                  {/* Villas with */}
                  <div className="mb-4">
                    <h3 className="text-lg font-medium">Villas with:</h3>
                    <ul className="list-disc text-xs list-inside text-gray-600">
                     {
                      detail.villasWith.map((item)=>{
                       return             <li>{item}</li>;
                      })
                     }
                    </ul>
                  </div>
                  {/* Additional Services */}
                  <div>
                    <h3 className="text-lg font-medium">Additional Services:</h3>
                    <ul className="list-disc text-xs w-84 list-inside text-gray-600">
                      {
                      detail.additionalServices.map((item)=>{
                       return             <li>{item}</li>;
                      })}
                    </ul>
                  </div>
                </div>
    
                <div className=" hidden lg:block">
                  {/* Bottom aligned cylinder */}
                  <div className="absolute bottom-0 right-22 w-48 h-[360px]">
                    <div className="w-32 h-[360px] overflow-hidden rounded-t-full">
                      <Image
                        src={detail.images[0]}
                        alt="Villa Upright"
                        width={192}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
    
                  {/* Top aligned cylinder */}
                  <div className="absolute top-0 -right-14 w-48 h-[360px]">
                    <div className="w-32 h-[360px] overflow-hidden rounded-b-full">
                      <Image
                        src= {detail.images[1]}
                        alt="Villa Inverted"
                        width={192}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default VillaDetailCard