import React from 'react'
import Image from 'next/image'

export default function PropertyDetail() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-cormorant mb-6">Property Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Property Location</h2>
          <p className="mt-2 text-gray-600">170 m²</p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Optional Services</h2>
          {/* <Image src="https://via.placeholder.com/300x200" alt="Optional Services" width={300} height={200} className="mt-2" /> */}
          <p className="mt-2 text-gray-600">Breakfast, Waiter, Private Chef</p>
        </div>
        <div className="bg-gray-200 p-4">
          <h2 className="text-lg font-semibold">Property Size</h2>
          <p className="mt-2 text-gray-600">170 m²</p>
        </div>
        <div className="bg-gray-300 p-4">
          <h2 className="text-lg font-semibold">Bedrooms</h2>
          <p className="mt-2 text-gray-600">3</p>
        </div>
        <div className="bg-gray-300 p-4">
          <h2 className="text-lg font-semibold">Bathrooms</h2>
          <p className="mt-2 text-gray-600">2</p>
        </div>
        <div className="bg-gray-300 p-4">
          <h2 className="text-lg font-semibold">Outdoor Facilities</h2>
          <p className="mt-2 text-gray-600">Pool, Outdoor Hot Tub, Sauna, BBQ Area, Seating Areas, Outdoor Dining</p>
        </div>
      </div>
    </div>
  )
}